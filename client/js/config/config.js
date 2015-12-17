// For any third party dependencies, like jQuery, place them in the vendor folder.

// Configure loading modules from the js directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({

		//Base path of the files to be confired in requirejs. Note here that this path is relative to index.html file
    baseUrl: 'js/vendor',

    //
    paths: {
    		//Note here that this path is relative to baseUrl i.e. js/vendor
        app: '../app'		//Application path =	js/lib + ../app = js/app folder
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['app/myApp']);