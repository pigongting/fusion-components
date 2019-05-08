if (process.env.TARO_ENV === 'h5') {
  module.exports = require('./src/h5/index')
  module.exports.default = module.exports
} else {
  module.exports = require('./src/weapp/index')
  module.exports.default = module.exports
}