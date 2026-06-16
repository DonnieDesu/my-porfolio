# README.md

# 📱 Don Piedro F. Ramirez - Professional Portfolio

> Building Technology Today, Securing Tomorrow

A modern, responsive professional portfolio website built with **Next.js 14**, **React 18**, **Tailwind CSS**, and **Framer Motion**. Designed to showcase my expertise in software development and cybersecurity with an eye toward impressing recruiters and hiring managers.

## ✨ Features

✅ **Modern Dark Theme** - Professional dark interface with cyan and green accents
✅ **Fully Responsive** - Seamless experience on mobile, tablet, and desktop
✅ **Smooth Animations** - Elegant Framer Motion transitions and interactions
✅ **SEO Optimized** - Next.js metadata and semantic HTML
✅ **Performance** - Optimized images, code splitting, and lazy loading
✅ **Accessible** - WCAG compliant with keyboard navigation support
✅ **Fast** - Lightning-fast load times and smooth scrolling

## 📋 Sections

### Hero Section
- Eye-catching headline: "Building Technology Today, Securing Tomorrow"
- Professional subheading and call-to-action buttons
- Animated background elements
- Status badge showing availability

### About Me
- Personal introduction and career focus
- Key highlights with icons
- Impressive statistics
- Professional summary

### Skills & Expertise
- Programming languages (Python, HTML, CSS, JavaScript)
- IT & Systems skills (Troubleshooting, Hardware, Support)
- Data & Documentation expertise
- Cybersecurity fundamentals
- Tools & Platforms
- Skill level indicators with progress bars
- Current learning platforms and target certifications

### Experience & Education
- Current role as Document Care Specialist
- Key responsibilities and achievements
- Bachelor's degree in Computer Engineering Technology from TUP
- Education highlights

### Featured Projects
- Document Management System
- Employee Records Database
- IT Support Ticket System
- Project status, technologies, and links

### Currently Learning & Future Projects
- Personal AI Assistant
- Cybersecurity Home Lab
- SOC Analyst Dashboard
- Network Monitoring Tool
- AI-Powered Security Assistant
- Web Security Analyzer
- Learning resources and target certifications

### Career Goals & Timeline
- 4-phase timeline (Current → Short-Term → Mid-Term → Long-Term)
- Specific goals for each phase
- Immediate focus and long-term vision

### Interests & Passions
- Technology & Innovation
- Cybersecurity
- Software Development
- Emerging Tech (AI, Brain-Computer Interfaces, Full-Dive VR)
- Hobbies (Gaming, Anime, Motorcycles, Automotive)
- Coding Projects

### Contact Section
- Contact form with validation
- Direct contact information
- Social media links (GitHub, LinkedIn)
- Location and availability badge

### Footer
- Quick navigation links
- Social connections
- Copyright information

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS 3.3
- **Animations**: Framer Motion 10.16
- **Icons**: Lucide React
- **Deployment**: Vercel or GitHub Pages

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or Bun
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/DonnieDesu/my-porfolio.git
   cd my-porfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - Changes are reflected instantly with hot reload

## 📝 Customization

### Update Personal Information

1. **Hero Section** - Edit `components/sections/Hero.tsx`
2. **About Me** - Edit `components/sections/About.tsx`
3. **Skills** - Edit `components/sections/Skills.tsx`
4. **Projects** - Edit `components/sections/Projects.tsx`
5. **Contact** - Update email and social links in `components/sections/Contact.tsx`

### Customize Colors

Edit the color variables in `tailwind.config.js`:

```javascript
colors: {
  primary: '#0f172a',    // Main background
  secondary: '#1e293b',  // Secondary background
  accent: '#00d9ff',     // Cyan accent
  accent2: '#00ff88',    // Green accent
}
```

### Add Resume/CV

1. Place your resume PDF in `public/` directory
2. Update the download link in `components/sections/Hero.tsx`

## 📦 Build for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```

```bash
npm run start
# or
yarn start
# or
pnpm start
# or
bun start
```

## 🌐 Deployment

### Option 1: Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your repository
5. Vercel auto-detects Next.js and deploys automatically

### Option 2: GitHub Pages

1. Configure Next.js for static export (if needed)
2. Deploy manually using GitHub Pages settings
3. Set custom domain if desired

### Option 3: Other Platforms

- **Netlify**: Supports Next.js deployments
- **Railway**: Modern deployment platform
- **Render**: Easy deployment with git integration
- **AWS Amplify**: AWS-powered deployment

## 📊 Project Structure

```
my-porfolio/
├── app/
│   ├── page.tsx              # Main page
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── Navbar.tsx            # Navigation bar
│   ├── Footer.tsx            # Footer component
│   ├── SectionContainer.tsx  # Section wrapper
│   └── sections/
│       ├── Hero.tsx          # Hero section
│       ├── About.tsx         # About section
│       ├── Skills.tsx        # Skills section
│       ├── Experience.tsx    # Experience section
│       ├── Projects.tsx      # Projects section
│       ├── FutureProjects.tsx# Future projects
│       ├── CareerGoals.tsx   # Career timeline
│       ├── Interests.tsx     # Interests section
│       └── Contact.tsx       # Contact form
├── public/                   # Static assets
│   └── resume.pdf           # Your resume (optional)
├── tailwind.config.js        # Tailwind configuration
├── postcss.config.js         # PostCSS configuration
├── next.config.js            # Next.js configuration
├── package.json              # Dependencies
└── README.md                 # This file
```

## 🎨 Design System

### Color Palette
- **Primary Background**: `#0f172a` (Dark Navy)
- **Secondary Background**: `#1e293b` (Slate)
- **Accent Color**: `#00d9ff` (Cyan)
- **Secondary Accent**: `#00ff88` (Green)
- **Text Light**: `#e0e0e0` (Light Gray)
- **Text Muted**: `#a0a0a0` (Medium Gray)

### Typography
- **Font Family**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Heading Weight**: 700 (Bold)
- **Body Weight**: 400 (Regular)
- **Accent Weight**: 600 (Semibold)

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md)
- **Desktop**: > 1024px (lg)
- **Large Desktop**: > 1280px (xl)

## 🤝 Contact

- **Email**: ramirezdonpiedro@gmail.com
- **GitHub**: [github.com/DonnieDesu](https://github.com/DonnieDesu)
- **LinkedIn**: [linkedin.com/in/don-piedro-ramirez-8388363b3](https://www.linkedin.com/in/don-piedro-ramirez-8388363b3)
- **Location**: Cavite, Philippines

---

**Don Piedro F. Ramirez** - Building Technology Today, Securing Tomorrow 🚀
