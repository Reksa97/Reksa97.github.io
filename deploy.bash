cp -rf ../onchainsummer-nft-surprise/web/public/* .
version=$(cat .version)
echo "Current version: $version"

git add .
git commit -m "Deploy version $version"
git push

new_version=$((version + 1))
echo $new_version > .version