let path = require('path');

module.exports = {
    entry: './assets/js/script.js',
    output:{
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js',
    },
    module:{
        rules:[{
            test: /\.(js)$/,
            use: {
                loader:'babel-loader',
                options:{
                    presets:['@babel/preset-env']
                }
            }
        },
        {
            test: /\.(jpe?g|png|gif|svg)$/,
            use:[
                {
                    loader:'url-loader',
                    options:{
                        limit: 40000,
                        outputPath: './images'
                    }
                },
                'image-webpack-loader'
            ]
        }
    ]
    }
}