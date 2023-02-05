git clone git@github.com:vlvalkow/portfolio_website_v2.git build

cd build

latesttag=$(git describe --tags)
echo checking out ${latesttag}
git checkout ${latesttag}

nvm install 16.19.0
nvm use 16.19.0

npm install

cp -r ../../data ./

npm run build

mv ./out ./${latesttag}

jar -cfM ${latesttag}.zip ./${latesttag}

cd ..

mv ./build/${latesttag}.zip ./${latesttag}.zip

rm -rf build/

# This is so that the build window is not automatically closed and the output can be inspected
read varname
