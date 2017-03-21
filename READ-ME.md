1.) mkdir react-hello-world

2.) cd react-hello-world

3.) npm init

Accept the default for all the prompts

NOTE : Webpack is a module bundler which takes modules with dependencies and generates static assets by bundling them together based on some configuration.

4.) npm i webpack -S

5.) touch webpack.config.js


var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/auto-generated-scripts');
var APP_DIR = path.resolve(__dirname, 'src/app');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  }
};

module.exports = config;



6.) BELOW Command to runs the webpack in the development mode and generates the bundle.js file.

D:\workspace\react-with-babel-webpack>node_modules\.bin\webpack -d --config webpack.config.js
Hash: 7d60d117f7c39732d803
Version: webpack 2.2.1
Time: 738ms
    Asset     Size  Chunks             Chunk Names
bundle.js  2.69 kB       0  [emitted]  main
   [0] ./src/app/index.jsx 43 bytes {0} [built]




7.) To make it more interactive, create an index.html file in the src directory and modify it to use this bundle.js file :-


<html>
  <head>
    <meta charset="utf-8">
    <title>React.js using NPM, Babel6 and Webpack</title>
  </head>
  <body>
    <div id="root" />
    <script src="auto-generated-scripts/bundle.js" type="text/javascript"></script>
  </body>
</html>



8.) Because, The JSX syntax and ES6, are not supported in all the browsers, Hence, if we are using them in the React code, 
we need to use a tool which translates them to the format that has been supported by the browsers. It’s where babel comes into the picture.


9.) Webpack uses loaders to translate the file before bundling them.
The babel-preset-es2015 and babel-preset-react are plugins being used by the babel-loader to translate ES6 and JSX syntax respectively.


npm i babel-loader babel-preset-es2015 babel-preset-react -S


10.) Create a .babelrc file and update it as below
touch .babelrc
{
  "presets" : ["es2015", "react"]
}


INSTALL babel-core dependency. 
11.) npm i babel-core -S


12.) The next step is telling Webpack to use the babel-loader while bundling the files
open webpack.config.js file and update it as below


var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/auto-generated-scripts');
var APP_DIR = path.resolve(__dirname, 'src/app');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
	loaders: [
	  {
		test: /\.jsx?/,
		include: APP_DIR,
        loader: 'babel-loader'			
	  }
	]
  }
};

module.exports = config;


NOTE :-- The loaders property takes array of loaders, here we are just using babel-loader. 
Each loader property should specify what are the file extension it has to process via the test property. 
Here we have configured it to process both .js and .jsx files using the regular expression. 
The include property specifies what is the directory to be used to look for these file extensions. The loader property represents the name of the loader.



13.) Now we all the setup done. Let’s write some code in React.



console.log('Hello World!');
import SRPCard from './SRPCard.jsx';


var SRPPage = React.createClass({
    render: function(){
        return (
            <div>
		Hello React Aditya !!!
		<SRPCard />
            </div>
        );
    }
});


ReactDOM.render(<SRPPage />, document.getElementById('root'));



IN index.html, We need to import s :-


<html>
  <head>
    <meta charset="utf-8">
    <title>React.js using NPM, Babel6 and Webpack</title>
    <script src="js/react.js"></script>
    <script src="js/react-dom.js"></script>
    <script src="js/browser.js"></script>
  </head>
  <body>
    <div id="root" />
    <script src="auto-generated-scripts/bundle.js" type="text/javascript"></script>
  </body>
</html>




14.) FINAL WORKING RUN :-

D:\workspace\react-with-babel-webpack>node_modules\.bin\webpack -d --config webp
ack.config.js
Hash: d0a980dce9093d91375f
Version: webpack 2.2.1
Time: 718ms
    Asset     Size  Chunks             Chunk Names
bundle.js  5.73 kB       0  [emitted]  main
   [0] ./src/app/SRPCard.jsx 357 bytes {0} [built]
   [1] ./src/app/index.jsx 606 bytes {0} [built]

D:\workspace\react-with-babel-webpack>
