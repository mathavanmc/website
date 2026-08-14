# Cauvery Construction
This repository contains the static website for Cauvery Construction.

To replace the construction images with your own photos, put image files in the repository (e.g. `images/`) and update the `src` attributes in `index.html` for the project cards. Example:

1. Create an `images/` folder at the repo root and add your photos: `images/project1.jpg`, `images/project2.jpg`, etc.
2. Update the `<img src="...">` tags in the `index.html` project cards to point to the new files.
3. Commit and push the changes:

```bash
cd website
git add images
git commit -m "Add project images"
git push origin main
```

If you want, I can add an `images/` folder and placeholders now and push them for you.
