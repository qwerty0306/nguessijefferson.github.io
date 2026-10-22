# Jefferson Nguessi: Portfolio

A static portfolio (HTML, CSS, vanilla JavaScript) for a network administrator and security graduate. No build step, no paid hosting.

## Files
```
index.html               all page content
assets/css/style.css     design (colors at the top of the file)
assets/js/main.js        mobile menu and footer year
assets/images/portrait.jpg
documents/Nguessi_Jefferson_CV.pdf
favicon.svg  .nojekyll
```

## Preview locally
Double-click `index.html`, or run `python3 -m http.server` in this folder and open http://localhost:8000.

## Update things
- **Text, projects, links:** open `index.html` in any editor. Each section has an `id` (`about`, `skills`, `experience`, `projects`, `education`, `contact`). Copy a `<details class="proj">` block to add a project. Replace the yellow "Evidence to add" line with real screenshots and links.
- **LinkedIn / GitHub:** in the Contact section, add `<a class="btn" href="YOUR-URL">LinkedIn</a>` where the comment says so.
- **Portrait:** replace `assets/images/portrait.jpg` (square, under 200 KB). It was cropped from your CV, so a better photo will look sharper.
- **CV:** replace `documents/Nguessi_Jefferson_CV.pdf`, keeping the same file name.
- **Colors and fonts:** edit the `:root` variables at the top of `style.css`.

## Publish on GitHub Pages
1. Create an account at github.com and sign in.
2. Click **+** (top right) > **New repository**. Name it, for example, `portfolio`. Choose **Public**, then **Create repository**.
3. Click **uploading an existing file**. Drag in the *contents* of this folder (not the folder itself) so `index.html` sits at the top level and `assets/` and `documents/` keep their structure. Include `.nojekyll`. Click **Commit changes**.
4. Open **Settings** > **Pages**. Under **Build and deployment**, set Source to **Deploy from a branch**, Branch **main**, folder **/ (root)**, then **Save**.
5. Wait one to two minutes and refresh. The site address appears at the top: `https://YOUR-USERNAME.github.io/portfolio/`.
6. Open it, test the menu, the CV download and the email link, then add the address to your CV and LinkedIn.

The repository URL (`github.com/YOUR-USERNAME/portfolio`) shows your code. The Pages URL (`YOUR-USERNAME.github.io/portfolio`) is the website to share.

To update later: open a file in the repository, click the pencil, edit, **Commit changes**. The site refreshes in a minute or two.

## Missing information (to make it stronger)
- Whether each project was solo or a group effort, and which tools you used (Packet Tracer, GNS3, real devices).
- Screenshots, topology diagrams and sanitized config excerpts for the three projects.
- Credential links for ISC² CC and Fortinet NSE, and your LinkedIn / GitHub URLs.
- Any measurable results from the internships (only if you can share them).
- Confirm you're happy to publish your phone number publicly.

## Final checklist
- [ ] Repository is public, `index.html` is at the root
- [ ] Pages shows a green "live" message
- [ ] CV downloads and opens
- [ ] Menu works on your phone
- [ ] Placeholder notes replaced or removed
- [ ] Portfolio link added to CV and LinkedIn
