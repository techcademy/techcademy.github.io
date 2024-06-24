# Deploying React JS Expo App to GitHub Pages

This guide will help you deploy your React JS Expo app to GitHub Pages using GitHub Actions.

## Prerequisites

- A GitHub repository for your project.
- Git installed on your machine.
- Node.js installed on your machine.

## Steps

1. **Clone your GitHub repository**

```bash
$ git clone https://github.com/your-username/your-repo.git
$ cd your-repo
```

2. **Install dependencies**

Navigate to your project directory and install dependencies:

```bash
$ npm install
```

3. **Add GitHub Actions Workflow**

Create a `.github/workflows` directory in the root of your project if it doesn't exist. Inside this directory, create a file named `deploy.yml` with the following content:

```yaml
name: Deploy Expo App to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '14'

      - name: Install Dependencies
        run: npm install

      - name: Build the Expo app
        run: npm run web-build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./web-build
```

4. **Update `package.json` Scripts**

Add the following scripts to your `package.json` file to ensure the Expo app can be built for the web:

```json
"scripts": {
  "web-build": "expo build:web"
}
```

5. **Commit and Push Changes**

```bash
git add .
git commit -m "Setup GitHub Actions for deployment"
git push origin main
```

6. **Access Your Deployed App**

After the GitHub Actions workflow completes successfully, your app will be deployed to GitHub Pages. You can access it using the URL: `https://your-username.github.io/your-repo/`.

## Notes

- Ensure that the "GitHub Pages" settings in your repository are configured correctly, typically set to the `gh-pages` branch.
- You might need to tweak configurations based on your specific project setup.

That's it! Your React JS Expo app is now deployed to GitHub Pages.
