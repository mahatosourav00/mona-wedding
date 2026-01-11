---
description: Deploy the wedding website to Vercel for free hosting
---

# Deploy to Vercel

Vercel is one of the easiest ways to host a React/Vite application for free.

## Prerequisites
- You need a Vercel account. You can sign up at [vercel.com](https://vercel.com/signup) using GitHub, GitLab, or Email.

## Steps

1.  **Open a Terminal**
    You can use the terminal in your VS Code.

2.  **Run the Deploy Command**
    Run the following command. It will ask you to log in if you haven't already.
    ```bash
    npx vercel
    ```

3.  **Follow the Prompts**
    -   **Set up and deploy?** -> `y` (Yes)
    -   **Which scope?** -> Select your account (just press Enter)
    -   **Link to existing project?** -> `n` (No)
    -   **What’s your project’s name?** -> Press Enter (uses folder name) or type a name like `mona-prakash-wedding`
    -   **In which directory is your code located?** -> Press Enter (default `./`)
    -   **Want to modify these settings?** -> `n` (No)

4.  **Wait for Deployment**
    Vercel will build your site and provide a **Production** URL (e.g., `https://mona-prakash-wedding.vercel.app`).

5.  **Visit your Live Site!**
    Click the link to see your website on the internet.
