const _nested = require('postcss-nested'),
      _cssvarss = require('postcss-simple-vars'),
      _autoprefixer = require('autoprefixer'),
      _import = require('postcss-import'),
      _mixins = require('postcss-mixins');

module.exports = {
    plugins:[
        _import(),
        _cssvarss(),
        _nested(),
        _mixins(),
        _autoprefixer()
    ]
};