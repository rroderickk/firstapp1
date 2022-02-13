const { timeStamp } = require("console");
const fs = require("fs"); var path = require("path");
const type = { R: "R", dir: "*", dirI: "*>", conf: "!", html: "html", stl: "styles", jsx: "jsx", js: "js" };

/* TimeStamp */
const timestamp = () => new Date().toJSON().slice(0,23);

/* Dir's */
const Raiz = 'todomachineWithnodemachine';
  const RaizPublic = '/'+Raiz+'/'+'public';
    const RaizAssets = RaizPublic+'/'+'assets';
      const RaizAssetsIcon = RaizAssets+'/'+'icon';
      const RaizAssetsLogos = RaizAssets+'/'+'logos';
      const RaizAssetsImgs = RaizAssets+'/'+'imgs';
  const RaizSrc = '/'+Raiz+'/'+'src';
    const RaizComponents = RaizSrc+'/'+'components';
    const RaizContainer = RaizSrc+'/'+'containers';
    const RaizContext = RaizSrc+'/'+'context';
    const RaizHooks = RaizSrc+'/'+'hooks';
    const RaizPages = RaizSrc+'/'+'pages';
    const RaizRoutes = RaizSrc+'/'+'routes';

/* Dir'sFiles */
const dirHTML = __dirname+'/'+Raiz+'/'+'public'+'/'+'index.html';
const dirReadme = Raiz+'/'+'README.md';
const dirPackageJson = Raiz+'/'+'package.json';
const dirWebpack = Raiz+'/'+'webpack.config.js';
const dirBabel = Raiz+'/'+'.babelrc';
const dirRoot = __dirname+RaizSrc+'/'+'_vars.scss';
const dirIndex = __dirname+RaizSrc+'/'+'index.js';
const dirApp = __dirname+RaizRoutes+"/"+"App.jsx";
const dirLayout = __dirname+RaizContainer+'/'+'Layout.jsx';
const dirAppContext = __dirname+RaizContext+"/"+"AppContext.jsx";
const dirHome = __dirname+RaizPages+"/"+"Home.jsx";
const dirNotFound = __dirname+RaizPages+"/"+"NotFound.jsx";
const dirUseInitialState = __dirname+RaizHooks+"/"+"useInitialState.jsx";



/* DataContentFiles */
const dataReadme = '# Bienvenido....\n## This file has created with nodeMachine by CheatModes4';
const dataPackageJson = '{\n\t"name": "projectname",\n\t"version": "0.0.1",\n\t "description": "cv1Reactjs",\n\t"main": ".src/index.js",\n\t "scripts": { "test": "echo \\"Error: no test specified\\" && exit 1",\n\t "start": "webpack serve",\n\t "build": "webpack --mode production"\n},\n\t "repository": { "type": "git",\n\t "url": "" },\n\t "keywords": [ "react",\n\t "javascript",\n\t "shop" ],\n\t "author": "CheatModes4 rroderickk@gmail.com",\n\t "license": "MIT",\n\t "bugs": { "url": "https://rroderickk.github.io/reactPractico/" },\n\t "dependencies": { "@babel/core": "7.16.12",\n\t "@babel/plugin-transform-runtime": "7.16.10",\n\t "@babel/preset-env": "7.16.11",\n\t "@babel/preset-react": "7.16.7",\n\t "axios": "0.25.0",\n\t "babel-loader": "8.2.3",\n\t "html-loader": "3.1.0",\n\t "html-webpack-plugin": "5.5.0",\n\t "react": "17.0.2",\n\t "react-dom": "17.0.2",\n\t "react-router-dom": "6.2.1",\n\t "webpack-cli": "4.9.2",\n\t "webpack-dev-server": "4.7.3" },\n\t "devDependencies": { "css-loader": "6.5.1",\n\t "mini-css-extract-plugin": "2.5.3",\n\t "sass": "1.49.0",\n\t "sass-loader": "12.4.0",\n\t "style-loader": "3.3.1", "webpack": "5.67.0" } }';
const dataWebpack = 'const path = require("path");\n const HtmlWebpackPlugin = require("html-webpack-plugin");\n const MiniCssExtractPlugin = require("mini-css-extract-plugin");\n\n module.exports = {\n\t entry: "./src/index.js",\n\t output: {\n\t\t path: path.resolve(__dirname, "dist"),\n\t\t filename: "bundle.js",\n\t\t publicPath: "/",\n\t },\n\t mode: "development",\n\t resolve: {\n\t\t extensions: [".js", ".jsx"],\n\t\t alias: {\n\t\t\t "@components": path.resolve(__dirname, "src/components/"),\n\t\t\t "@containers": path.resolve(__dirname, "src/containers/"),\n\t\t\t\t "@hooks": path.resolve(__dirname, "src/hooks/"),\n\t\t\t\t "@pages": path.resolve(__dirname, "src/pages/"),\n\t\t\t\t "@routes": path.resolve(__dirname, "src/routes/"),\n\t\t\t\t "@context": path.resolve(__dirname, "src/context/"),\n\t\t\t\t "@styles": path.resolve(__dirname, "src/styles/"),\n\t\t\t\t "@assets": path.resolve(__dirname, "public/assets/"),\n\t\t\t\t "@icons": path.resolve(__dirname, "public/assets/icons/"),\n\t\t\t\t "@imgs": path.resolve(__dirname, "public/assets/imgs/"),\n\t\t\t\t "@logos": path.resolve(__dirname, "public/assets/logos/"),\n\t\t },\n\t },\n\t module: {\n\t\t rules: [\n\t\t\t {\n\t\t\t\t test: /\\.(js|jsx)$/,\n\t\t\t\t exclude: /node_modules/,\n\t\t\t\t use: {\n\t\t\t\t\t loader: "babel-loader",\n\t\t\t\t },\n\t\t\t },\n\t\t\t {\n\t\t\t\t test: /\\.(png|jpg|svg|jpeg|web|svg)$/,\n\t\t\t\t type: "asset/resource",\n\t\t\t\t generator: {\n\t\t\t\t\t filename: "public/[hash][ext]",\n\t\t\t\t },\n\t\t\t },\n\t\t\t {\n\t\t\t\t test: /\\.html$/,\n\t\t\t\t use: [\n\t\t\t\t\t {\n\t\t\t\t\t\t loader: "html-loader",\n\t\t\t\t\t },\n\t\t\t\t\t\t ],\n\t\t\t },\n\t\t\t {\n\t\t\t\t test: /\\.(css|scss)$/,\n\t\t\t\t use: [\n\t\t\t\t\t\t "style-loader",\n\t\t\t\t\t\t "css-loader",\n\t\t\t\t\t\t "sass-loader",\n\t\t\t\t ],\n\t\t\t },\n\t\t ],\n\t },\n\t plugins: [\n\t\t new HtmlWebpackPlugin({\n\t\t\t template: "./public/index.html",\n\t\t\t filename: "./index.html",\n\t\t }),\n\t\t new MiniCssExtractPlugin({\n\t\t\t filename: "[name].css",\n\t\t }),\n\t ],\n\t devServer: {\n\t\t static: {\n\t\t\t directory: path.join(__dirname, "public"),\n\t\t },\n\t\t compress: true,\n\t\t port: 64340,\n\t\t historyApiFallback: true,\n\t }\n\t }';
const dataHtml = '<!DOCTYPE html>\n<html lang="en">\n<head> \n\t<meta charset="utf-8" /> \n\t<meta name="viewport" content="width=device-width, initial-scale=1" /> \n\t<title>' + 'craSUCKS' + 'nodeMachineByCM4</title> \n</head> \n<body> \n\t<div id="root"><h4>' +'CheatModes4' + '</h4></div>\n</body>\n</html>';
const dataBabel = '{\n\t"presets": [\n\t\t"@babel/preset-env",\n\t\t["@babel/preset-react", { \/\/!Evitar importar reacts en casi todos los archivos por ejemplo en login esto no funciona!\n\t\t\t"runtime": "automatic",\n\t\t}],\n],\n"plugins": [\n\t"@babel/plugin-transform-runtime"\n\t]\n}';
const dataRoot = ' \"/\"* Root keys \"*\"/\n :root {\n\t --white: #ffffff;\n\t --black: #000000;\n\t --very-light-pink: #c7c7c7;\n\t --text-input-field: #f7f7f7;\n\t --hospital-green: #acd9b2;\n\t --sm: 14px;\n\t --md: 16px;\n\t --lg: 18px;\n }';
const dataIndex = 'import ReactDOM from "react-dom";\nimport App from "@routes/App";\n\nReactDOM.render(<App />, document.getElementById("root"));';
const dataRoutes = 'import { BrowserRouter, Routes, Route } from "react-router-dom";\n import AppContext from "@context/AppContext";\nimport useInitialState from "@hooks/useInitialState";\nimport Layout from "@containers/Layout"; import Home from "@pages/Home";\nimport NotFound from "@pages/NotFound";\n\n const App = () => {\nconst initialState = useInitialState();\n\nreturn (\n\n<AppContext.Provider value={initialState} >\n\t<BrowserRouter >\n\t\t <Layout >\n\t\t\t <Routes >\n\t\t\t\t <Route exact path="/" element={<Home />} />\n\n\t\t\t\t \{\/\* \/\/todo ¡¡ InsertRoutes here !! \*\/}\n\n\t\t\t\t <Route exact path="*" element={<NotFound/>} />\n\t\t\t </Routes>\n\t\t </Layout>\n\t </BrowserRouter>\n\n </AppContext.Provider>\n); }; export default App; ';
const dataAppContext = 'import React from "react";\nconst AppContext = React.createContext({}); export default AppContext;';
const dataHome = 'const Home = () => {\n\nreturn (\n<>\n<h1>navBar</h1>\n<h1>imagen</h1>\n<h1>personName</h1>\n<h1>personInfo</h1>\n<h1>personPortfolio</h1>\n<h1>personSkills</h1>\n</>\n); }; export default Home;';
const dataNotFound = 'const NotFound = () => {\nreturn (\n\t<h1>Nothing to do here...</h1>\n); }; export default NotFound;';
const dataUseInitialState = 'import {useState} from "react";\n const initialState = { htmlColection: [], }\n\nconst useInitialState =()=> {\n const [state, setState] = useState(initialState);\n\n return {\n\t state,\n };  }; export default useInitialState;';
const dataLayout = 'const styleLayout = {textAlign: "center", backgroundColor: "#000",minHeight: "100vh" ,padding: "20px", maxWidth: "100vw"};\n\nconst Layout = ({ children }) => {\nreturn (\n<div className="Layout" style={styleLayout}>{children}</div>\n);  }; export default Layout;';


//! Core *///╠╩╗╠═╣║║║║║║║╣ ╠╦╝ //╠╩╗╠═╣║║║║║║║╣ ╠╦╝ //╠╩╗╠═╣║║║║║║║╣ ╠╦╝ //╠╩╗╠═╣║║║║║║║╣ ╠╦╝

function createPackage(dir,type) {
  fs.promises
    .mkdir(path.join(__dirname, dir), (err) => { if (err) { return console.error(err); } console.log('Public created successfully!'); } , { recursive: true })
    .then(async() => await fs.promises.mkdir(path.join(__dirname, dir), { recursive: true }))
  console.log('\x1b[36m', timestamp(),'\x1b[0m',"["+type+"]\tCreado:\t" + dir);
};

const writeFile = (path, data, type, opts = 'utf8') => {
  new Promise((resolve, reject) => {
    fs.writeFile(path, data, opts, (err) => {
      if (err) reject(err)
      else resolve(console.log('\x1b[36m', timestamp(), '\x1b[0m', "["+type+"]\tCreado:\t" + path));
    })
  })
};

//! Core *///╠╩╗╠═╣║║║║║║║╣ ╠╦╝ //╠╩╗╠═╣║║║║║║║╣ ╠╦╝ //╠╩╗╠═╣║║║║║║║╣ ╠╦╝ //╠╩╗╠═╣║║║║║║║╣ ╠╦╝


//*╔═╗ ╦╔═╗╔═╗
//*║╣  ║║╣ ║
//*╚═╝╚╝╚═╝╚═╝
/* Dir's */
createPackage(Raiz,type.dir);
  createPackage(RaizPublic,type.dirI);
    createPackage(RaizAssets,type.dirI);
      createPackage(RaizAssetsIcon,type.dirI);
      createPackage(RaizAssetsLogos,type.dirI);
      createPackage(RaizAssetsImgs,type.dirI);
  createPackage(RaizSrc,type.dir);
    createPackage(RaizContainer,type.dirI);
    createPackage(RaizComponents,type.dirI);
    createPackage(RaizContext,type.dirI);
    createPackage(RaizPages,type.dirI);
    createPackage(RaizHooks,type.dirI);
    createPackage(RaizRoutes,type.dirI);

/* Files */
writeFile(dirPackageJson,dataPackageJson, type.conf);
writeFile(dirReadme,dataReadme, type.R);
writeFile(dirBabel, dataBabel, type.conf);
writeFile(dirWebpack,dataWebpack, type.conf);
  writeFile(dirHTML,dataHtml, type.html);
  writeFile(dirRoot,dataRoot, type.stl);
  writeFile(dirIndex,dataIndex, type.js);
    writeFile(dirApp,dataRoutes, type.jsx);
    writeFile(dirAppContext, dataAppContext, type.jsx);
    writeFile(dirHome, dataHome, type.jsx);
    writeFile(dirLayout, dataLayout, type.jsx);
    writeFile(dirNotFound, dataNotFound, type.jsx);
    writeFile(dirUseInitialState, dataUseInitialState, type.jsx);
