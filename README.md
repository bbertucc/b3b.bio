# b3b.bio

Blake Bertuccelli-Booth's profile page. It's plain HTML and CSS with a tiny bit of JavaScript. There's no build step, no framework, no trackers and no third-party requests. It's hosted on GitHub Pages.

## Files

| File | What it is |
| --- | --- |
| `index.html` | The whole profile: about card, links, accounts, and the Share / Contact / Send money drawers |
| `style.css` | All styles |
| `script.js` | Opens and closes the drawers and handles "Copy link". The page still reads fine without it |
| `blake.vcf` | vCard for "Add to contacts" |
| `assets/` | Avatar, header/background image, link previews, QR code (`qr.svg` shown, `qr.png` downloaded) |
| `CNAME` | Custom domain for GitHub Pages (`b3b.bio`) |
| `404.html` | Not-found page |
| `.nojekyll` | Serves files as-is (skips Jekyll) |

## Editing

Edit `index.html` directly. To add a link, copy one `<li class="link-item">` block and drop a 16:9 preview image in `assets/`.

To make a new QR code (only needed if the URL changes):

```bash
npx qrcode -t svg -o assets/qr.svg https://b3b.bio
npx qrcode -w 600 -o assets/qr.png https://b3b.bio
```

Preview it locally:

```bash
python3 -m http.server 8000
```

## Hosting on GitHub Pages

1. Merge this into `main`.
2. In the repo, go to **Settings → Pages → Build and deployment**. Set **Source** to "Deploy from a branch" (not "GitHub Actions": this repo has no workflow), then pick **Branch** `main` and folder `/ (root)`.
3. Under **Custom domain**, enter `b3b.bio` (the `CNAME` file already does this). Once DNS resolves, turn on **Enforce HTTPS**.
4. At your DNS provider, point the apex domain at GitHub Pages:
   - `A` records for `b3b.bio`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `AAAA` records: `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
   - Optional: a `CNAME` for `www` pointing to `bbertucc.github.io`
   - Remove the old records that pointed the domain at the previous host.
5. Optional but recommended: verify the domain under your GitHub account's **Settings → Pages** so nobody else can claim it.

## License

GPL-3.0. See `LICENSE`.

When you change `style.css` or `script.js`, bump the `?v=` value on its `<link>`/`<script>` tag in `index.html` (and `404.html`) so browsers don't keep the old cached copy.
