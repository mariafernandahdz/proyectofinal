const path = require('path')

module.exports = {
    //Especificando el archivo index de entrada
    entry: path.join(__dirname, './src/index.js'),
    //Especificando el archivo de salida
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    //Folder donde servira
    devServer: {
        contentBase: path.join(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
        ]
    }
}