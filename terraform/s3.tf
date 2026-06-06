resource "aws_s3_bucket" "jenny" {
  bucket = var.bucket_name

  tags = {
    Project = var.project_name
  }
}

resource "aws_s3_bucket_website_configuration" "jenny" {
  bucket = aws_s3_bucket.jenny.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "404.html"
  }
}

resource "aws_s3_bucket_public_access_block" "jenny" {
  bucket = aws_s3_bucket.jenny.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

data "aws_iam_policy_document" "jenny_s3_policy" {
  statement {
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.jenny.arn}/*"]

    principals {
      type        = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    }

    condition {
      test     = "StringEquals"
      variable = "AWS:SourceArn"
      values   = [aws_cloudfront_distribution.jenny.arn]
    }
  }
}

resource "aws_s3_bucket_policy" "jenny" {
  bucket = aws_s3_bucket.jenny.id
  policy = data.aws_iam_policy_document.jenny_s3_policy.json
}
