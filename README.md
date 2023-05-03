## Getting Started
Next.js
Node 16.19.0

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To deploy to prodction

```bash
cd ./pipeline && production.sh
```
This will generate a zip archive that can be uploaded to the production server. Assumes the following directories exist:
- a `data`  directory that contains the necessary data for a static site generation
- a `public/projects` directory exist that contains all images

The following command will point to the new version
```
unzip ~/pipeline/website/1.0.2.1.zip -d ~/pipeline/website && ln -sfrvn ~/pipeline/website/1.0.2.1 ~/public_html
```

If making only a content change increment the forth value of the version number.
