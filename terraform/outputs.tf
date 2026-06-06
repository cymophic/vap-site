output "acm_validation_records" {
  description = "DNS validation records to add to Cloudflare"
  value       = aws_acm_certificate.jenny.domain_validation_options
}

output "cloudfront_domain" {
  description = "Domain name of the CloudFront distribution"
  value       = aws_cloudfront_distribution.jenny.domain_name
}
