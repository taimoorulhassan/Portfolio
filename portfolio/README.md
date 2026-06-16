# Taimoor ul Hassan — Portfolio Website

A complete, production-ready, fully responsive dark-themed portfolio website built
with **HTML5, CSS3, and vanilla JavaScript**. This guide will walk you through
absolutely everything — from opening the project in VS Code, to customizing it,
to putting it live on the internet — even if you've never done this before.

---

## 📁 1. Folder Structure

```
portfolio/
│
├── index.html          → Main HTML file (all sections/content)
├── style.css            → All styling (colors, layout, animations)
├── script.js            → All interactivity (menu, typing, counters, form)
├── README.md            → This guide
│
├── images/               → PUT YOUR PHOTOS HERE
│   ├── profile.jpg.txt        (rename → profile.jpg, add your photo)
│   ├── project1.jpg.txt       (rename → project1.jpg)
│   ├── project2.jpg.txt       (rename → project2.jpg)
│   ├── project3.jpg.txt       (rename → project3.jpg)
│   ├── project4.jpg.txt       (rename → project4.jpg)
│   └── project5.jpg.txt       (rename → project5.jpg)
│
└── assets/
    └── favicon.png.txt    (rename → favicon.png, add your site icon)
```

> 💡 The `.txt` files are just placeholders so the folders aren't empty. Delete
> them once you've added your real images with the correct names (e.g.
> `profile.jpg`, `project1.jpg`, etc.). Until you add real images, the website
> will automatically show gray placeholder boxes — **it will not break.**

---

## 🖥️ 2. VS Code Setup Guide (Absolute Beginner)

### Step 1 — Install VS Code
1. Go to https://code.visualstudio.com/
2. Download the version for your operating system (Windows/Mac/Linux).
3. Run the installer and follow the on-screen instructions (keep all default options checked).

### Step 2 — Create Project Folder
1. On your Desktop (or anywhere you like), create a new folder named `portfolio`.
2. Inside it, create two more folders: `images` and `assets`.

### Step 3 — Open Folder in VS Code
1. Open VS Code.
2. Click **File → Open Folder...**
3. Select the `portfolio` folder you just created.

### Step 4 — Create Files
Inside VS Code's file explorer (left sidebar), right-click the `portfolio` folder
and select **New File** to create each of these:

- `index.html`
- `style.css`
- `script.js`

You should already have the `images` and `assets` folders from Step 2.

### Step 5 — Paste the Code
1. Open `index.html` and paste in all the HTML code provided.
2. Open `style.css` and paste in all the CSS code provided.
3. Open `script.js` and paste in all the JavaScript code provided.
4. Save all three files (`Ctrl + S` / `Cmd + S`).

### Step 6 — Run the Website
**Easiest way (Live Server extension):**
1. In VS Code, go to the Extensions tab (the square icon on the left sidebar).
2. Search for **"Live Server"** by Ritwick Dey and click **Install**.
3. Right-click `index.html` in the file explorer.
4. Click **"Open with Live Server"**.
5. Your default browser will open and show your website — it will also
   auto-refresh whenever you save changes!

**Without an extension:**
- Simply double-click `index.html` in your file explorer — it will open
  directly in your browser. (Note: the contact form requires Live Server or
  a deployed site to work properly.)

### Step 7 — Troubleshooting
| Problem | Solution |
|---|---|
| Page looks unstyled (no colors/fonts) | Make sure `style.css` is in the **same folder** as `index.html` and is saved. |
| Icons not showing | Check your internet connection — icons load from Font Awesome's CDN. |
| Images show gray placeholder boxes | This is normal until you add your own images (see Section 3 below). |
| Animations not working | Make sure `script.js` is saved and linked at the bottom of `index.html`. Check the browser console (`F12` → Console tab) for red error messages. |
| Changes not appearing | Hard refresh your browser with `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac). |

---

## 🖼️ 3. Image Management Guide

### A. Profile Image (Hero Section)
- File location: `images/profile.jpg`
- Recommended size: **600 × 700px** (portrait orientation)
- Format: JPG or PNG
- How to add: Save your professional photo into the `images` folder and name
  it exactly `profile.jpg`. If you use a different name or format (e.g.
  `.png`), update this line in `index.html`:
  ```html
  <img src="images/profile.jpg" alt="Taimoor ul Hassan - AI Engineer" class="hero-image" ...>
  ```
  Change `images/profile.jpg` to your filename, e.g. `images/profile.png`.

### B. Project Images
- File locations: `images/project1.jpg` through `images/project5.jpg`
- Recommended size: **1200 × 750px** (16:10 ratio works best)
- Format: JPG or PNG, ideally compressed (use https://squoosh.app/ to reduce file size)
- Each project card in `index.html` has a line like:
  ```html
  <img src="images/project1.jpg" alt="Text Detection Machine Learning Project" ...>
  ```
  Replace `images/project1.jpg` with your own filename if different.

### C. Favicon (Browser Tab Icon)
- File location: `assets/favicon.png`
- Recommended size: **32 × 32px or 64 × 64px**, PNG format
- Linked in `index.html`:
  ```html
  <link rel="icon" href="assets/favicon.png" type="image/png">
  ```

### D. Replacing Images Later
1. Simply overwrite the file in `images/` or `assets/` with your new image,
   **keeping the same filename**, OR
2. Use a new filename and update the corresponding `src="..."` path in
   `index.html`.

> If an image file is missing, the website will automatically show a neat
> gray placeholder box instead of a broken image icon — so your site never
> looks "broken" while you're setting things up.

---

## 🔗 4. Social Media Link Guide

There are **3 "SOCIAL LINKS AREA"** sections inside `index.html` — one in the
Hero section, one in the Contact section, and one in the Footer. They all look
like this:

```html
<!-- ============ SOCIAL LINKS AREA ============ -->
<div class="hero-socials">
  <a href="#" class="social-icon" aria-label="Facebook" target="_blank" rel="noopener">
    <i class="fa-brands fa-facebook-f"></i>
  </a>
  <a href="#" class="social-icon" aria-label="Instagram" target="_blank" rel="noopener">
    <i class="fa-brands fa-instagram"></i>
  </a>
  <a href="#" class="social-icon" aria-label="LinkedIn" target="_blank" rel="noopener">
    <i class="fa-brands fa-linkedin-in"></i>
  </a>
  <a href="#" class="social-icon" aria-label="X (Twitter)" target="_blank" rel="noopener">
    <i class="fa-brands fa-x-twitter"></i>
  </a>
</div>
```

### To update your links:
Replace each `href="#"` with your real profile URL. For example:

```html
<a href="https://www.facebook.com/yourusername" class="social-icon" ...>
<a href="https://www.instagram.com/yourusername" class="social-icon" ...>
<a href="https://www.linkedin.com/in/yourusername" class="social-icon" ...>
<a href="https://x.com/yourusername" class="social-icon" ...>
```

> ⚠️ Make sure to update **all three** SOCIAL LINKS AREA sections (Hero,
> Contact, Footer) so your links are consistent across the whole site. Use
> VS Code's **Find & Replace** (`Ctrl/Cmd + H`) to replace all `href="#"`
> social icons at once — just be careful not to replace other `href="#"`
> links that aren't social icons.

---

## 📧 5. Contact Form Setup Guide

The contact form (Full Name, Email, Message) currently uses **Method 1:
FormSubmit** — it's already wired up and ready to go.

### ✅ Method 1: FormSubmit (Currently Active — Recommended for Beginners)

FormSubmit requires **no sign-up, no API key, and no backend code**.

1. In `index.html`, find the `<form>` tag:
   ```html
   <form
     class="contact-form"
     id="contactForm"
     action="https://formsubmit.co/engrtaimoorulhassan@gmail.com"
     method="POST"
     ...
   >
   ```
   This is already set to your email
   (`engrtaimoorulhassan@gmail.com`). If you ever want to change the
   destination email, just replace the email address after
   `https://formsubmit.co/`.

2. **Activation step (one-time only):**
   - Deploy your site (see Deployment Guide below) or open it via Live Server.
   - Fill out the contact form once and click **Send Message**.
   - FormSubmit will send a confirmation email to
     `engrtaimoorulhassan@gmail.com` with a link saying *"Confirm form
     activation"*.
   - Click that link **once**. After this, all future submissions will be
     delivered to your inbox automatically — no further setup needed.

3. That's it! Every time someone fills out the form, you'll receive an email
   with their Name, Email, and Message.

---

### 🔁 Method 2: EmailJS (Alternative — More Control, No Page Reload)

If you'd prefer to use EmailJS instead:

1. **Create a free account** at https://www.emailjs.com/

2. **Add an Email Service:**
   - Go to **Email Services → Add New Service**.
   - Connect your Gmail (or other email provider) account.
   - Note the generated **Service ID** (e.g. `service_abc1234`).

3. **Create an Email Template:**
   - Go to **Email Templates → Create New Template**.
   - Add variables like `{{name}}`, `{{email}}`, and `{{message}}` in the
     template body.
   - Note the **Template ID** (e.g. `template_xyz789`).

4. **Get your Public Key:**
   - Go to **Account → General** and copy your **Public Key**.

5. **Add the EmailJS SDK to `index.html`** — paste this just before the
   closing `</body>` tag, above `<script src="script.js"></script>`:
   ```html
   <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
   ```

6. **Update `script.js`:**
   - Remove or comment out the entire "10. CONTACT FORM (FormSubmit) HANDLING"
     block.
   - Add this instead inside the `DOMContentLoaded` listener:
     ```javascript
     emailjs.init("YOUR_PUBLIC_KEY");

     const contactForm = document.getElementById("contactForm");
     const formStatus = document.getElementById("formStatus");

     contactForm.addEventListener("submit", function (e) {
       e.preventDefault();

       emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
         .then(() => {
           formStatus.textContent = "Thank you! Your message has been sent successfully.";
           contactForm.reset();
         })
         .catch(() => {
           formStatus.textContent = "Something went wrong. Please try again or email me directly.";
         });
     });
     ```
   - Replace `YOUR_PUBLIC_KEY`, `YOUR_SERVICE_ID`, and `YOUR_TEMPLATE_ID` with
     the values from your EmailJS dashboard.

7. **Update the form tag** in `index.html` — you can remove the `action`,
   `method`, and hidden FormSubmit inputs (`_subject`, `_template`,
   `_captcha`) since EmailJS handles sending directly via JavaScript.

---

## 🎨 6. Customization Guide

| What you want to change | Where to edit |
|---|---|
| Name, titles, email, phone, location | `index.html` — Hero, About, Contact, Footer sections |
| Colors / gradient theme | `style.css` → `:root` section at the top (`--accent-1`, `--accent-2`, `--accent-3`) |
| Fonts | `style.css` → `--font-display`, `--font-body`, `--font-mono` variables (and the Google Fonts `<link>` in `index.html`) |
| About Me text | `index.html` → `<section class="section about" id="about">` |
| Skills list | `index.html` → `<section class="section skills" id="skills">` (copy/paste a `.skill-card` block to add more) |
| Services | `index.html` → `<section class="section services" id="services">` |
| Projects | `index.html` → `<section class="section projects" id="projects">` (each `<article class="project-card">` is one project) |
| Experience timeline | `index.html` → `<section class="section experience" id="experience">` |
| Testimonials | `index.html` → `<section class="section testimonials" id="testimonials">` |
| Achievements / counters | `index.html` → `about-stats` div — change `data-target="40"` etc. to your own numbers |
| Typing animation roles | `script.js` → `const roles = ["AI Engineer", "AI Agents Expert", "Web Developer"];` |
| WhatsApp number | `index.html` → search for `wa.me/923039152402` in the Contact section |

---

## 🚀 7. Deployment Guide

### Option A — GitHub Pages (Free)
1. Create a free account at https://github.com/ if you don't have one.
2. Click **New Repository**, name it (e.g. `portfolio`), set it to **Public**, and click **Create repository**.
3. On the repository page, click **uploading an existing file** and drag in
   all your project files/folders (`index.html`, `style.css`, `script.js`,
   `images/`, `assets/`).
4. Commit the changes.
5. Go to **Settings → Pages**.
6. Under **Branch**, select `main` and folder `/ (root)`, then click **Save**.
7. Wait 1–2 minutes, then refresh — your site will be live at:
   `https://yourusername.github.io/portfolio/`

### Option B — Netlify (Free)
1. Create a free account at https://app.netlify.com/
2. From the dashboard, click **Add new site → Deploy manually**.
3. Drag and drop your entire `portfolio` folder onto the upload area.
4. Netlify will instantly deploy your site and give you a live URL like
   `https://your-site-name.netlify.app`.
5. (Optional) Go to **Site settings → Change site name** to customize the URL,
   or add your own custom domain under **Domain management**.

### Option C — Vercel (Free)
1. Create a free account at https://vercel.com/ (you can sign up with GitHub).
2. If you used GitHub Pages (Option A), import the same GitHub repository:
   - Click **Add New → Project**.
   - Select your `portfolio` repository.
   - Leave all settings as default (it's a static site — no build command needed).
   - Click **Deploy**.
3. Your site will be live at `https://your-project-name.vercel.app`.
4. Alternatively, install the Vercel CLI and run `vercel` inside your project
   folder for a one-command deployment.

---

## ✅ 8. Final Checklist Before Going Live

- [ ] Replace `images/profile.jpg` with your real photo
- [ ] Replace `images/project1.jpg` to `project5.jpg` with real project screenshots
- [ ] Replace `assets/favicon.png` with your icon
- [ ] Update all social media links (Hero, Contact, Footer)
- [ ] Confirm the FormSubmit activation email (Section 5, Method 1, Step 2)
- [ ] Double-check your email and phone number are correct
- [ ] Test the site on mobile (resize your browser window or use Live Server + your phone on the same Wi-Fi)
- [ ] Deploy using GitHub Pages, Netlify, or Vercel

---

You're all set! 🎉 This project is clean, fast, SEO-friendly, fully
responsive, and ready to showcase your work to the world.
