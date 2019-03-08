//1. 导入需要的模块
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

//2.配置导出模块
module.exports = {
	//入口
	entry : './src/js/index.js',
	//出口
	output : {
		path : path.resolve(__dirname,'dist'), //__dirname : 是nodejs中的方法，可以找到当前目录所在的绝对路径
		filename : 'js/main.js'
	},module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                // 正则匹配所有以.png,jpg,gif结尾的文件
                test: /\.(png|jpg|gif)$/,
                // 使用url-loader对图片进行处理
                use: [
                    {
                        loader: 'url-loader'
                    }
                ]
			}
        ]
	},
	

	plugins : [
		new HtmlWebpackPlugin({
			template : "./src/html/index.html",
			filename : "./html/index.html"
		})
	]
}