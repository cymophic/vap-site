# Virtual Assistant Provider

Personal VA services site built with Next.js, deployed on AWS (S3 + CloudFront).

---

## 📚 Table of Contents

1. 🌐 [Live Deployment](#-live-deployment)
2. ⚙️ [Tech Stack](#️-tech-stack)
3. 📁 [Project Structure](#-project-structure)
4. 🚀 [Local Development](#-local-development)
5. 🏗️ [Infrastructure Setup](#️-infrastructure-setup)
6. 🔄 [Deployment Process](#-deployment-process)

---

## 🌐 Live Deployment

The site is live at [jennyannvalenciano.com](https://jennyannvalenciano.com)

---

## ⚙️ Tech Stack

### Application
- **Framework:** Next.js 16
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4

### Infrastructure
- **Frontend Hosting:** AWS S3 & AWS CloudFront
- **DNS & Security:** Cloudflare (DNS) & AWS ACM (SSL)
- **IaC:** Terraform

### CI/CD
- **Pipeline:** GitHub Actions

---

## 📁 Project Structure

```
jennyannvalenciano.com/
├── .github/
│   ├── workflows/
│   │   ├── build.yml                     # Reusable build workflow
│   │   ├── check.yml                     # PR validation workflow
│   │   └── deploy.yml                    # Deployment workflow
│   └── dependabot.yml                    # Automatic dependency updates
├── public/                               # Static assets
├── src/
│   ├── app/
│   │   ├── coming-soon.tsx               # Work in progress page
│   │   ├── favicon.ico                   # Favicon
│   │   ├── globals.css                   # Global styles and Tailwind imports
│   │   ├── layout.tsx                    # Root layout component
│   │   ├── not-found.tsx                 # 404 page
│   │   └── page.tsx                      # Homepage
│   ├── components/
│   │   ├── layout/
│   │   │   ├── header/                   # Site header
│   │   │   └── footer/                   # Site footer
│   │   ├── sections/
│   │   │   └── home/                     # Homepage sections
│   │   └── ui/
│   │       ├── Button.tsx                # Reusable button
│   │       └── Underline.tsx             # Animated underline for hovers
│   └── lib/
│       ├── utils/
│       │   └── cn.ts                     # Class name utility
│       └── site.ts                       # Site configurations
├── terraform/
│   ├── acm.tf                            # ACM SSL certificate
│   ├── budgets.tf                        # AWS budget alerts
│   ├── cloudfront.tf                     # CloudFront distribution, OAC, and functions
│   ├── locals.tf                         # Centralized logic and data transformation layer
│   ├── main.tf                           # Terraform and provider configuration
│   ├── outputs.tf                        # Terraform output values
│   ├── s3.tf                             # S3 bucket, policy, and access configuration
│   ├── variables.tf                      # Input definitions
│   └── terraform.tfvars.example          # Terraform variable template
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

---

## 🚀 Local Development

### Prerequisites

- **Node.js** v22+
- **npm** v10+

### Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/<your-username>/vap-site.git
    cd vap-site
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the development server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local development server |
| `npm run build` | Build static export |
| `npm run lint` | Run ESLint |

---

## 🏗️ Infrastructure Setup

### Prerequisites

- **Terraform** v1.14+
- **AWS CLI** configured with valid credentials (`aws configure --profile jenny`)
- A `jenny-deploy` IAM user in the Jenny AWS account with `AdministratorAccess`

### Terraform Variables

Variables are set in `terraform/terraform.tfvars`. An [example](terraform/terraform.tfvars.example) file is provided:

```hcl
# General
domain_name  = "jennyannvalenciano.com"
project_name = "vap-site"
aws_region   = "ap-southeast-1"

# Domain & CORS
other_domains = []
dev_origins   = ["http://localhost:3000", "http://localhost:3001"]

# S3
bucket_name = "jenny-vap-site"

# Budget
budget_limit_usd   = "100.0"
budget_alert_email = ["name@email.com"]
```

### Provision AWS Resources

```bash
cd terraform
terraform init
terraform plan
terraform apply
```

This provisions:
- S3 bucket for static file hosting
- CloudFront distribution with HTTPS
- ACM SSL certificate for the custom domain
- S3 bucket policy scoped to CloudFront only

### DNS Setup

After provisioning, these records are configured in Cloudflare:

| Type | Name | Value |
|---|---|---|
| `CNAME` | `@` | CloudFront domain (from `terraform output cloudfront_domain`) |
| `CNAME` | `www` | CloudFront domain (from `terraform output cloudfront_domain`) |
| `CNAME` | ACM validation names | ACM validation values (from `terraform output acm_validation_records`) |

---

## 🔄 Deployment Process

Deployments are fully automated via GitHub Actions.

### Prerequisites

The following are configured in **Settings → Secrets and Variables → Actions**:

**Secrets**
| Name | Description |
|---|---|
| `AWS_ACCESS_KEY_ID` | IAM user access key |
| `AWS_SECRET_ACCESS_KEY` | IAM user secret key |
| `CLOUDFRONT_DISTRIBUTION_ID` | CloudFront distribution ID |
| `S3_BUCKET_NAME` | S3 bucket name |
| `CLOUDFLARE_ZONE_ID` | Cloudflare Zone ID |
| `CLOUDFLARE_API_TOKEN` | Cloudflare API Token |

**Variables**
| Name | Description |
|---|---|
| `NEXT_PUBLIC_SITE_MODE` | Controls which page is displayed (`live`, `coming_soon`, `maintenance`) |

### Process Breakdown

**On pull request to `main`** — `check.yml` runs:
1. Lints the codebase
2. Calls the reusable `build.yml` workflow to build the Next.js static export

**On merge to `main`** — `deploy.yml` runs:
1. Calls the reusable `build.yml` workflow
2. Uploads the `/out` build artifact
3. Downloads the `/out` artifact in the deploy job
4. Syncs `/out` to S3
5. Invalidates the CloudFront cache
6. Purges the Cloudflare cache
