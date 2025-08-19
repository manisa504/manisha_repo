# 🚀 Deploy Your Portfolio to GitHub Pages

This repository is set up for easy deployment to GitHub Pages. Follow these simple steps to get your portfolio live!

## 📋 Quick Setup Instructions

### 1. Fork This Repository
- Click the "Fork" button in the top-right corner of this repository
- This creates your own copy of the portfolio

### 2. Enable GitHub Pages
- Go to your forked repository settings
- Navigate to **Settings** → **Pages** (in the left sidebar)
- Under **"Source"**, select **"GitHub Actions"**
- Save the changes

### 3. Customize Your Content
- Edit the components in `src/components/` to update:
  - `HeroSection.tsx` - Your name, title, and intro
  - `AboutSection.tsx` - About you section
  - `ExperienceSection.tsx` - Work experience
  - `ProjectsSection.tsx` - Your projects
  - `SkillsSection.tsx` - Your skills
  - `EducationSection.tsx` - Education background
  - `ContactSection.tsx` - Contact information

### 4. Update Assets
- Replace images in `public/assets/images/`
- Update the favicon at `public/favicon.ico`
- Add your documents to `public/assets/documents/`

### 5. Deploy
- Commit and push your changes to the `main` branch
- GitHub Actions will automatically build and deploy your site
- Your portfolio will be available at: `https://yourusername.github.io/repository-name/`

## 🌐 Your Live Site

After deployment, your portfolio will be accessible at:
```
https://[YOUR_GITHUB_USERNAME].github.io/[YOUR_REPOSITORY_NAME]/
```

## 🔄 Making Updates

1. Edit your files
2. Commit and push to the `main` branch
3. The site will automatically rebuild and redeploy (takes 2-5 minutes)

## 🛠️ Local Development

To run the project locally:

```bash
# Install dependencies
bun install

# Start development server
bun run dev
```

The site will be available at `http://localhost:8080`

## 📁 File Structure

```
src/
├── components/          # React components for each section
├── pages/              # Page components
├── hooks/              # Custom React hooks
└── lib/                # Utility functions

public/
├── assets/
│   ├── images/         # Your photos and images
│   └── documents/      # PDFs, resume, etc.
└── favicon.ico         # Site icon
```

## 🎨 Customization

- **Colors & Styling**: Modify `tailwind.config.ts` and component styles
- **Content**: Update the text and information in each component
- **Layout**: Adjust component structure in `src/pages/Index.tsx`

## 📝 Notes

- The repository automatically detects the repository name for deployment
- No manual configuration needed for the base URL
- Works with any repository name
- Supports both custom domains and GitHub Pages subdomains

Happy coding! 🎉
