# Jenny Ann Valenciano

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
- **DNS & Security:** *(TBD)*
- **IaC:** Terraform *(planned)*

### CI/CD
- **Pipeline:** GitHub Actions *(planned)*

---

## 📁 Project Structure

```
jennyannvalenciano.com/
├── public/                               # Static assets
├── src/
│   ├── app/
│   │   ├── globals.css                   # Global styles and Tailwind imports
│   │   ├── layout.tsx                    # Root layout component
│   │   ├── not-found.tsx                 # 404 page
│   │   └── page.tsx                      # Homepage
│   ├── components/
│   │   ├── layout/
│   │   │   └── header/
│   │   │       └── Header.tsx            # Site header and navigation
│   │   └── ui/
│   │       └── Underline.tsx             # Animated underline component
│   └── lib/
│       ├── utils/
│       │   └── cn.ts                     # Class name utility
│       └── site.ts                       # Site configurations
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

> Terraform setup is planned but not yet configured.

---

## 🔄 Deployment Process

> CI/CD via GitHub Actions is planned but not yet configured.
