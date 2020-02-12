const { getArgv } = require('./util')

module.exports = {
    ip: getArgv('ip') || '',
    prefix: getArgv('pre') || '/'
}
