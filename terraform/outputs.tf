output "acm_validation_records" {
  description = "DNS validation records to add to Cloudflare"
  value       = aws_acm_certificate.jenny.domain_validation_options
}

output "cloudfront_domain" {
  description = "Domain name of the CloudFront distribution"
  value       = aws_cloudfront_distribution.jenny.domain_name
}

output "contact_lambda_url" {
  description = "Lambda Function URL for the contact form endpoint"
  value       = aws_lambda_function_url.contact.function_url
}
