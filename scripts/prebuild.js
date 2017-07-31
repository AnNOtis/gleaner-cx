const tasks = require('./tasks')

tasks.cleanDist()
tasks.copyPublicAssets()
tasks.generateManifest()
