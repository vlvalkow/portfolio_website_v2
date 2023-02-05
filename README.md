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
This will generate a zip archive that can be uploaded to the production server. Assumes a `data` folder exists that contain the necessary data for a static site generation.

The following command will point to the new version
```
unzip ~/pipeline/website/1.0.0.zip -d ~/pipeline/website && ln -sfrvn ~/pipeline/website/1.0.0 ~/public_html
```
