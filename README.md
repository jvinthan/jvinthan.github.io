# Vinthan Jayaratnam — Senior Network Engineer

Complete static portfolio for **https://jvinthan.github.io/**. Includes Home,
Experience, Skills, Projects, Credentials, Contact, a custom 404 page, the supplied
photograph, and the supplied CV. The site works on GitHub Pages without Ruby,
Jekyll, npm, themes, or external fonts. Navigation and career content work without
JavaScript. GitHub project cards require JavaScript or manual configuration.

## Publish on GitHub Pages

1. Sign in to GitHub as **jvinthan**.
2. Create a public repository named **jvinthan.github.io**, or open that existing
   repository. The spelling is `github.io`, not `gihub.io`.
3. Extract the ZIP. Upload the **contents** of the `jvinthan.github.io` folder to
   the repository root. Do not upload the ZIP itself or an extra enclosing folder.
   Confirm that `index.html` and `assets/` are at the root. Include `.nojekyll`
   if your uploader supports hidden files; otherwise use GitHub's Add file →
   Create new file to create `.nojekyll` with a single blank line.
4. If replacing the old academic website, back it up first. Remove its old
   `index.md`, `404.md`, `Gemfile`, `Gemfile.lock`, `_config.yml`, `_layouts/`,
   `_includes/`, `_site/`, and old academic `pages/` directory if present. Remove
   old deployment workflows only if they build the superseded Jekyll website.
   Keep `.git/` and unrelated repository content. This package supplies the new
   `README.md`, `License.md`, `index.html`, `404.html`, and other pages.
5. Open **Settings → Pages**. Under Build and deployment, select
   **Deploy from a branch**, then **main** and **/(root)**. Save. If your default
   branch has another name, select the branch containing these website files.
6. Wait for the Pages deployment to finish and open **https://jvinthan.github.io/**.
   GitHub notes that publishing may take up to 10 minutes.
7. Check the photo, CV download, all six navigation links, and project cards.

Official instructions: https://docs.github.com/en/pages/quickstart

## Your three GitHub repositories

The actual repository names could not be verified during preparation because
GitHub access was blocked. No project titles or descriptions were invented.

`assets/js/project-data.js` is configured for **jvinthan**. By default, the Projects
page requests the three most recently updated public repositories, excluding
`jvinthan.github.io` and the optional `jvinthan` profile README repository. Forks
are eligible. Private repositories cannot be shown. If you have exactly three
eligible public repositories, all three appear.

To pin the exact three projects, edit `featuredRepositories`:

```js
featuredRepositories: [
  'EXACT_FIRST_REPOSITORY_NAME',
  'EXACT_SECOND_REPOSITORY_NAME',
  'EXACT_THIRD_REPOSITORY_NAME'
],
```

Replace the example values with real repository names. The site fetches those
repositories individually, so their position in the repository list does not
matter. Add useful descriptions to each repository's GitHub About field.

For the most dependable recruiter experience, add verified entries to
`manualProjects` in the same file. Manual cards load without GitHub API access:

```js
manualProjects: [
  {
    name: 'Your project title',
    repository: 'exact-repository-name',
    description: 'What you built, its purpose, and what the repository contains.',
    language: 'Python',
    topics: ['network-automation']
  }
]
```

Add all three entries. Keep descriptions factual. Manual cards take precedence.
Never add passwords, access tokens, customer configurations, or private materials.
If the API is unavailable or rate limited, previously loaded cards are displayed
when available; otherwise the page provides a direct GitHub link. The
professional delivery projects below the GitHub section are based on the CV,
and are explicitly separate from public code repositories.

## Files and editing

| File | Purpose |
| --- | --- |
| `index.html` | Homepage and selected career highlights |
| `experience.html` | Six roles from the supplied CV, retaining actual job titles |
| `skills.html` | Technical capabilities grouped for recruiters |
| `projects.html` | GitHub cards and professional delivery highlights |
| `credentials.html` | Certifications and education |
| `contact.html` | Email, phone, LinkedIn, GitHub, and CV |
| `404.html` | Missing-page navigation |
| `assets/css/style.css` | Responsive design, mobile and print styles |
| `assets/js/main.js` | Accessible mobile menu |
| `assets/js/project-data.js` | GitHub username and optional project selections |
| `assets/js/projects.js` | Repository loading, caching, and fallback |
| `assets/images/vinthan_headshot.jpg` | Supplied photograph |
| `assets/images/favicon.svg` | VJ browser icon |
| `assets/documents/Vinthan_Jayaratnam_CV.pdf` | Original supplied CV |
| `.nojekyll` | Publish static files directly |
| `robots.txt`, `sitemap.xml` | Search-engine discovery |

Edit text directly in the appropriate HTML page. Shared navigation/footer markup
is intentionally included in each page so it works without JavaScript; update
all HTML files if changing it. Replace the PDF or photograph using the same file
name to preserve links. The original CV is included without rewriting it.

The homepage uses Senior Network Engineer as the target professional title.
Employment titles and dates follow the CV, including Network Engineer at Zonal
from September 2024 to Present. Update that role when employment changes.
Certification expiry dates were not supplied; the site does not assert current
validity. The phone is displayed in international UK format. Review current
employment, contact details, and certification status before publishing.

## Preview locally

Open `index.html` in a browser, or run this from the website folder:

```bash
python3 -m http.server 8000
```

Visit http://localhost:8000. No install or build is required. Loading GitHub
projects requires an internet connection. This package does not itself publish
or change the GitHub account.

## Content and attribution

Professional content comes from the supplied CV. No employment outcomes or
repository details were invented. The attached academic site supplied the
starting structure; all academic navigation and identity content were replaced.
See `License.md` for the original template license attribution.
