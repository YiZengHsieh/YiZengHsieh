# Yi-Zeng Hsieh (謝易錚) — Personal Academic Website

A static, dependency-free CV site for GitHub Pages (plain HTML/CSS/JS, no build step).

```
.
├── index.html            # Page structure
├── .nojekyll             # Tells GitHub Pages to serve files as-is
├── assets/
│   ├── css/style.css     # Styles (light/dark theme, responsive, print)
│   ├── js/data.js        # ← ALL CV CONTENT LIVES HERE
│   ├── js/main.js        # Renders data.js into the page
│   └── img/profile.jpg   # Profile photo
└── README.md
```

## Deploy on GitHub Pages

1. Create a new **public** repository named exactly **`<your-github-username>.github.io`**
   (e.g. `yzhsieh.github.io`). The site will then live at `https://<your-github-username>.github.io/`.
2. Upload all files in this folder to the repository root, either through the web UI
   (**Add file → Upload files**, then drag the whole folder in) or with git:

   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-github-username>/<your-github-username>.github.io.git
   git push -u origin main
   ```
3. In the repository go to **Settings → Pages**, set **Source = Deploy from a branch**,
   **Branch = `main` / `(root)`**, and save. The site is live within a minute or two.

> Using a different repository name (e.g. `cv`) also works; the URL becomes
> `https://<username>.github.io/cv/`.

## Updating content

Edit **`assets/js/data.js`** only — everything on the page is generated from it.

- **Add a paper:** copy an existing line in `publications` and change the fields.
  `type` is `"journal"`, `"conference"`, or `"chapter"`. Optional: `doi`, `tags` (e.g. `["SCI","Q1"]`), `award`.
  Your name is bolded automatically.
- **Add links:** fill in `profile.links.scholar`, `orcid`, `linkedin`, `github`.
  Empty links are hidden.
- **Downloadable PDF CV:** put the PDF in `assets/` and set `profile.links.cvPdf` to its path,
  e.g. `"assets/Yi-Zeng_Hsieh_CV.pdf"`.
- **Photo:** replace `assets/img/profile.jpg` (portrait ratio, ~4:5, works best).
- Statistics in the About section (paper / patent / grant counts) update automatically.

## Preview locally

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Custom domain (optional)

Add a file named `CNAME` containing your domain (e.g. `www.yzhsieh.com`), then point a
DNS `CNAME` record to `<username>.github.io`. See GitHub's “Managing a custom domain” docs.
