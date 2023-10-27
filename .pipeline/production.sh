#!/bin/sh

latesttag="1.0.2.3"

npm install

npm run build

mv ./out ./${latesttag}

zip -r ${latesttag}.zip ./${latesttag}

mv ./${latesttag}.zip ./.pipeline/build/${latesttag}.zip

rm -rf ./${latesttag}
