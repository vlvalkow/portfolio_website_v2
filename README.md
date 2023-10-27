## Development
To start the application from the project folder run:

```bash
docker compose up
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Production
To deploy to prodction from the project folder run:

```bash
docker compose -f docker-compose.production.yaml up
```
This will generate a zip archive in the `.pipeline/build` folder that can be uploaded to a production server. 

The command assumes the following directories exist:
- a `data`  directory that contains the necessary data for a static site generation
- a `public/projects` directory exist that contains all images

The following command will point to the new version:
```
unzip ~/pipeline/website/1.0.2.3.zip -d ~/pipeline/website && ln -sfrvn ~/pipeline/website/1.0.2.3 ~/public_html
```

### Versioning
If making only a content change increment the forth value of the version number.
