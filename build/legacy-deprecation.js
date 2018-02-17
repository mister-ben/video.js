const sh = require('shelljs');
var replace = require("replace");
var path = require('path')
var legacyPath = path.join(__dirname, '..', 'docs', 'api', 'docs');

const GIT_LOG = `git log --format=%B -n 1 ${process.env.COMMIT_REF}`;
const output = sh.exec(GIT_LOG, {async: false, silent:true}).stdout;

export default function legacyDeprecation() {
  // Add robots.txt to prevent legacy docs being indexed
  sh.cp('build/docs/robots.txt', 'docs/api/');

  replace({
    regex: /(<body[^>]*>)/,
    replacement: '$1<p class="banner legacy">This is legacy documentation for Video.js 5. <a href="/index.html">View the current Video.js documentation.</a></p>',
    paths: [legacyPath],
    include: '*.html',
    recursive: true,
    silent: true
  })
}
