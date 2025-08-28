import HttpServerModule from './TypeScriptNode/httpModuleEfficiency';
HttpServerModule.createServerStatic(3000, {
    "/home": "This is Home Page",
    "/about": "This is about Page"
});   