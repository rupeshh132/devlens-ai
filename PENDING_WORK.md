# 🚀 DevLens AI - Pending Work & Market Launch Checklist

Yeh list un tasks ke liye hai jo codebase mein technically resolved hain, par real market launch se pehle ya baad mein business owner (Founder) ko manually execute karne hain.

## 🔴 HIGH PRIORITY (Before Full Public Market Launch)

- [ ] **Domain Purchase:** Ek official domain khareedna hai (e.g., `devlens.ai`, `devlens.tech`).
- [ ] **Email Setup (Resend.com):**
  - Resend par account banana hai.
  - Khareede hue domain ke DNS records (SPF, DKIM, DMARC) verify karne hain taaki emails Spam mein na jayein.
  - Resend se API Key generate karni hai (starts with `re_...`).
  - Production server (Render/AWS) ke environment variables mein `RESEND_API_KEY` set karna hai.

## 🟡 MEDIUM PRIORITY (Soft-Launch ke dauran)

- [ ] **SEO Optimization:** Frontend `index.html` mein OpenGraph (OG) tags aur proper `<meta name="description">` add karna hai taaki WhatsApp/LinkedIn par link share karne par preview achha dikhe.
- [ ] **Frontend Cleanup:** Vite build configuration mein se `console.log` statements hatane hain (performance aur security best practice).
- [ ] **Supabase DB Backup Config:** Supabase dashboard mein daily backups verify karne hain taaki data safe rahe.

## 🟢 FUTURE SCALING (Jab 1,000+ active users ho jayein)

- [ ] **Cloud Storage for Files (AWS S3):** Abhi images aur PDF resumes local server memory / folder mein save hote hain (agar implemented hain). Scale hone par inko strictly AWS S3 Bucket ya Cloudinary par shift karna padega (taaki server crash na ho).
- [ ] **LLM Cost Monitoring:** Groq/Gemini API dashboard mein billing limiters lagane hain taaki koi attack karke credits drain na kar sake.
