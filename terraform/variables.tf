# General
variable "aws_region" {
  description = "AWS region to deploy resources"
  default     = "ap-southeast-1"
}

variable "project_name" {
  description = "Project name used for tagging resources"
  default     = "vap-site"
}

# S3
variable "bucket_name" {
  description = "S3 bucket name for the site"
  type        = string
}

# Budget
variable "budget_limit_usd" {
  description = "Monthly budget cap in USD"
  type        = string
}

variable "budget_alert_email" {
  description = "Email addresses for budget alerts"
  type        = list(string)
}

# Domain & CORS
variable "domain_name" {
  description = "The primary root domain"
  type        = string
}

variable "other_domains" {
  description = "List of additional domains to support"
  type        = list(string)
  default     = []
}

variable "dev_origins" {
  description = "List of local development origins"
  type        = list(string)
  default     = []
}
