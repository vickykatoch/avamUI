'use strict';
var GulpConfig = (function () {
    function gulpConfig() {
        this.typeScriptSourceFiles = './src/**/*.ts';
        this.libraryTypeScriptDefinitions = './typings/**/*.ts';
        this.outputFile="avam-ui.js";
        this.outputPath = "./dist/";
        this.templatePath = "./src/*.html";
        this.jsFilePath = "./dist/*.js";
        this.moduleName = 'avamUI';
        this.appFiles = './app/*.ts';
        this.appPath = './app/';
    }
    return gulpConfig;
})();
module.exports = GulpConfig;