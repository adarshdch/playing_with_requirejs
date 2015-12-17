define(["logger"], function(logger) {
    //This function is called when parent.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".

    return function(options){

    	this.welcome = function(name)
	    {
	    	logger.log("Welcome " + name + ". I am child.");
	    }

	    this.goodbye = function(name)
	    {
	    	logger.log("Goodbye " + name + ". I am child.");
	    }
	  }

});