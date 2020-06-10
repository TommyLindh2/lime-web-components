git checkout master
git remote rm origin
git remote add origin "https://${GH_TOKEN}@github.com/lundalogik/lime-web-components.git"
git push --set-upstream origin master

git config --global user.email "${GIT_AUTHOR_EMAIL}"
git config --global user.name "${GIT_AUTHOR_NAME}"

npm run build

cat << EOL >> ".npmrc"
registry=https://registry.npmjs.org/
//registry.npmjs.org/:_authToken=${NPM_TOKEN}
EOL

npx lerna version --loglevel=DEBUG --conventional-commits --create-release=github --yes -m "chore(release): publish %s [skip ci]"
npx lerna --loglevel=INFO publish from-git --yes

rm .npmrc
