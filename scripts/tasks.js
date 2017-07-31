const fileSystem = require('fs')
const path = require('path')
const sh = require('shelljs')
const manifest = require('../src/manifest.json')
const pkg = require('../package.json')

exports.cleanDist = function () {
  sh.rm('-rf', 'dist')
  sh.mkdir('dist')
}

exports.copyPublicAssets = function (type) {
  sh.mkdir('dist/public')
  sh.cp('-R', 'src/public/*', 'dist/public')
}

exports.generateManifest = function () {
  manifest.version = pkg.version
  fileSystem.writeFileSync(
    path.join(__dirname, '../dist/manifest.json'),
    JSON.stringify(manifest)
  )
}
