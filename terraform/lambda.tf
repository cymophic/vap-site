# Zip the Lambda source
data "archive_file" "contact_lambda" {
  type        = "zip"
  source_file = "${path.module}/../lambda/contact/index.mjs"
  output_path = "${path.module}/../lambda/contact/contact.zip"
}

# IAM assume role policy
data "aws_iam_policy_document" "lambda_assume_role" {
  statement {
    actions = ["sts:AssumeRole"]

    principals {
      type        = "Service"
      identifiers = ["lambda.amazonaws.com"]
    }
  }
}

# IAM permissions: SES + CloudWatch logs
data "aws_iam_policy_document" "contact_lambda_policy" {
  statement {
    actions   = ["ses:SendEmail", "ses:SendRawEmail"]
    resources = ["*"]
  }

  statement {
    actions   = ["logs:CreateLogGroup", "logs:CreateLogStream", "logs:PutLogEvents"]
    resources = ["arn:aws:logs:*:*:*"]
  }
}

resource "aws_iam_role" "contact_lambda" {
  name               = "${var.project_name}-contact-lambda"
  assume_role_policy = data.aws_iam_policy_document.lambda_assume_role.json

  tags = {
    Project = var.project_name
  }
}

resource "aws_iam_role_policy" "contact_lambda" {
  name   = "${var.project_name}-contact-lambda-policy"
  role   = aws_iam_role.contact_lambda.id
  policy = data.aws_iam_policy_document.contact_lambda_policy.json
}

resource "aws_lambda_permission" "contact_public" {
  statement_id           = "FunctionURLAllowPublicAccess"
  action                 = "lambda:InvokeFunctionUrl"
  function_name          = aws_lambda_function.contact.function_name
  principal              = "*"
  function_url_auth_type = "NONE"
}

# Lambda function
resource "aws_lambda_function" "contact" {
  filename         = data.archive_file.contact_lambda.output_path
  function_name    = "${var.project_name}-contact"
  role             = aws_iam_role.contact_lambda.arn
  handler          = "index.handler"
  runtime          = "nodejs22.x"
  source_code_hash = data.archive_file.contact_lambda.output_base64sha256

  environment {
    variables = {
      RECIPIENT_EMAIL = var.recipient_email
      SENDER_EMAIL    = var.sender_email
      ALLOWED_ORIGIN  = "https://${var.domain_name}"
    }
  }

  tags = {
    Project = var.project_name
  }
}

# HTTPS endpoint
resource "aws_lambda_function_url" "contact" {
  function_name      = aws_lambda_function.contact.function_name
  authorization_type = "NONE"

  cors {
    allow_credentials = false
    allow_origins     = local.cors_origins
    allow_methods     = ["*"]
    allow_headers     = ["content-type"]
    max_age           = 86400
  }
}
