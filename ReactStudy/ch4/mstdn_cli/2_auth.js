const Mastodon = require('mastodon-api')
const fs = require('fs')
const path = require('path')
const readlineSync = require('readline-sync')
const file_cli_app = path.join(__dirname, 'cli-app.json')
const file_user = path.join(__dirname, 'token.json')
const instanceUri = 'https://pawoo.net'

const info = JSON.parse(fs.readFileSync(file_cli_app))

Mastodon.getAuthorizationUrl(
    info.client_id,
    info.client_secret,
    instanceUri)
.then(url => {
    console.log('Please access the following URL to get the code')
    console.log(url)
    const code = readlineSync.question('access code: ')
    return Mastodon.getAccessToken(
        info.client_id,
        info.client_secret,
        code,
        instanceUri)
})
.then(token => {
    console.log('access token: ', token)
    fs.writeFileSync(file_user, token)
})
