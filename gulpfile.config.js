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
    }
    return gulpConfig;
})();
module.exports = GulpConfig;