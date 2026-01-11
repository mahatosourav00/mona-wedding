---
description: Create a GitHub repository and upload your code
---

# Upload to GitHub

Follow these steps to create a repository and upload your code.

## 1. Initialize Git (Locally)
If you haven't already, run these commands in your terminal:

```bash
git init
git add .
git commit -m "Initial commit"
```

## 2. Create a Repository on GitHub
1.  Go to [github.com/new](https://github.com/new).
2.  **Repository name**: Enter `wedding-website` (or any name you like).
3.  **Description**: "Our Wedding Website" (optional).
4.  **Public/Private**: Choose Public (free hosting usually easier) or Private.
5.  **Initialize this repository with**: Leave these unchecked (we already have local files).
6.  Click **Create repository**.

## 3. Link and Push
GitHub will show you a page with commands. Look for the section **"…or push an existing repository from the command line"**.

Copy and paste those commands into your terminal. They will look like this:

```bash
git remote add origin https://github.com/YOUR_USERNAME/wedding-website.git
git branch -M main
git push -u origin main
```

*(Note: Replace the URL with the one GitHub provided you).*

## 4. Done!
Refresh your GitHub page to see your code.
