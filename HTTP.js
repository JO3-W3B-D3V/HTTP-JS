
/**
 * @author    Joseph Evans <joe-evs196@hotmail.co.uk>
 * @version   0.0.1
 * @since     06/07/2018
 *
 * @file      the contents of this file simply consists of a neat method that allows you to
 *            implement ajax/xhr/xml http requests in either an oop style approach or a
 *            more traditionalapproach, especially for those whom love jquery's ajax method
 *
 * @copyright (c) 2018 copyright holder all Rights Reserved.
 *            Permission is hereby granted, free of charge, to any person obtaining a copy
 *            of this software and associated documentation files (the "Software"), to deal
 *            in the Software without restriction, including without limitation the rights
 *            to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *            copies of the Software, and to permit persons to whom the Software is
 *            furnished to do so, subject to the following conditions:
 *
 *            The above copyright notice and this permission notice shall be included in all
 *            copies or substantial portions of the Software.
 *
 *            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *            IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *            FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *            AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *            LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *            OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *            SOFTWARE.
 */



/**
 * @global
 * @function
 * @param           {Null}                    empty      you may wish to provide
 *                                                       no argument(s) if you wish
 *                                                       to use this function via the
 *                                                       oop style approach
 * @param           {Object}                  options    this is simply the object
 *                                                       which holds all of the
 *                                                       properties below
 * @required
 * @property @param {Function}                success    this is the function you
 *                                                       want to run once the request
 *                                                       is finished, and provided
 *                                                       the request was a success
 * @required
 * @property @param {String}                  url        this is the url that you'd
 *                                                       like to submit the request
 *                                                       to
 * @required
 * @property @param {String}                  method     this is the http method that
 *                                                       you wish to use, by default
 *                                                       it will accept get, post, put
 *                                                       delete, head and options
 * ===========================================================================
 * ******************************** OPTIONAL *********************************
 * ===========================================================================
 * @property @param {Function}                fail       this is the function you may
 *                                                       wish to run if the http request
 *                                                       fails for some reason or antoher
 * @property @param {*}                       data       this is the data that you may
 *                                                       wish to send to the server
 * @property @param {Array[Object] || Header} headers    this can either be a single
 *                                                       header object which will consits
 *                                                       of two properties (name, value)
 *                                                       both of which are of type string
 * @property @param {Boolean}                 forceNoSSL this is a property that will
 *                                                       allow you to connect to a http
 *                                                       connection, by default, it
 *                                                       will replace the http with https
 *                                                       and this may cause some error(s)
 *                                                       so if connecting via http is
 *                                                       essential, this property must
 *                                                       be set to true
 * @property @param {String}                  username   this is the username that you
 *                                                       want to send through to the
 *                                                       xml http request object
 * @property @param {String}                  password   this is the password that you
 *                                                       want to send through to the
 *                                                       xml http request object
 * @property @param {Function}                abort      this is a function that you
 *                                                       will want to run if the
 *                                                       request gets aborted
 * @property @param {Function}                loading    this is the function you will
 *                                                       want to run as the request
 *                                                       is loading/pending
 * @property @param {Function}                start      this is the function that you
 *                                                       will want to run as soon as
 *                                                       the request begins to load
 * @property @param {Function}                finished   this is a function that you
 *                                                       can run when the request
 *                                                       has loaded, it will run
 *                                                       wheter it was a success or
 *                                                       not
 * @property @param {HTMLFormElement}         form       this is a html form element
 *                                                       that you may wish to submit
 *                                                       by default it will get encoded
 *                                                       into an x-www-form-urlencoded
 *                                                       format, however with the consumes
 *                                                       property, this can change
 * @property @param {String}                  consumes   this is just to define how you
 *                                                       want to encode the provided form
 * @return {Object||Null}
 *
 * @description the soul purpose of this function is to allow you to send data
 *              through to a back end of some sort, via using the 'crud' http
 *              methods, as well as allowing you to use the head and optiosn http
 *              methods.
 *
 *              this function will allow you to either make a http request via using
 *              the famous and well accepted jquery style approach or you can use
 *              the alternative oop style approach where you have an object that
 *              has many methods, and you can call the methods as and when you like.
 *
 *              to use the traditional ajax style you'd use the following style:
 *
 *              HTTP({
 *                      url:'https://www.google.com/',
 *                      method:'GET',
 *                      headers: {name: "Test-Header", value: "testing123"}
 *                      success: function (d) {
 *                               console.log(d);
 *                      }
 *              });
 *
 *              however if you wish to use the more 'oop' style approach you can
 *              do it like so:
 *
 *              var http = new HTTP();
 *              http.setURL(https://www.google.com/);
 *              http.setMethod("GET");
 *              http.onSuccess(function(d){
 *                  console.log(d);
 *              });
 *              http.setHeaders({name: "Test-Header", value: "testing123"});
 *              http.submitRequest();
 *
 *              if you weren't aware both approaches will behave and execute in a
 *              very similar way, the only major difference is the syntax, which is
 *              more of a personal preference thing, there may be a speed difference,
 *              as for now, i've not tested the difference in performance as it's so
 *              early on into the stage(s) of development, at a later date i will have
 *              to do benchmarks and tests to see which is faster.
 *
 *             ========================================================================
 *
 *
 *              the username& password just quickly gets passed into the
 *              xml http request object, not much more is done with that,
 *              as for the start property, that's a function which gets run as the
 *              http request begins. the loading property, this should also be a
 *              function which can be run while the request is loading, simple.
 *              the consumes property is meant to provide the content type header
 *              to the back end, it's a simple featuer that allows the back end
 *              to know what data format to expect (string, html, xml, json, etc.)
 *
 * @todo        test this implementation in great detail, try all various
 *              combinations of input
 *
 * @todo        implement a larger variety of formats and implement how they will
 *              get compiled
 *
 * @todo        add support for ie8 + (not currently testeds)
 *
 * @todo        allow the ability to send data through as near enough raw binary
 *              etc.
 *
 * @todo        automatic implementation for binary, base64, etc.
 *
 * @todo        ... solve world hunger ...
 *
 * @todo        support aas many mime types as possible
 *
 * @todo        look at implementing prevention of mime
 *              sniffing (X-Content-Type-Options), although this should really
 *              be done both ends
 *
 * @todo        consider implementing an OOP style approach where you have an
 *              object with many methods that can be called when the user of
 *              this code so desires to
 */
function HTTP (options) {
    /**
     * @ignore
     * @private
     * @description this local variable is used to know whether or not to
     *              delete the index of property from the array data type
     */
    var arrayPolyfilled = false;


    /**
     * @ignore
     * @private
     * @param       {Object}   obj
     * @param       {String}   eventType
     * @param       {Function} callback
     * @description the purpose of this private method is to simply allow us ot
     *              bind some events
     */
    var addEvent = function (obj, eventType, callback) {
        if (obj == null || typeof obj != 'object') {
            throw new Error("Cannot bind an event to null.");
        } else if ('length' in obj || obj instanceof HTMLCollection || Array.isArray(obj)) {
            for (var i = 0, s = obj.length; i < s; i ++) {
                var objIndex = obj[i];
                addEvent(objIndex, eventType, callback);
            }
        } else if (obj.addEventListener) {
            obj.addEventListener(eventType, callback, false);
        } else if (obj.attachEvent) {
            obj.attachEvent('on' + eventType, callback);
        } else {
            obj["on"+eventType] = callback;
        }
    };


    /**
     * @ignore
     * @public
     * @param       {String} arg this is the substring that the current string
     *                           may or may not contain
     * @description the purpose of this method is to see if a given string
     *              contains a substring
     */
    String.prototype.contains = function (arg) {
        if (typeof arg != "string") return false;
        else if (this.toLowerCase().indexOf(arg.toLowerCase()) >= 0) return true;
        else return false;
    };


    /**
     * @ignore
     * @public
     * @function    trimWhiteSpace
     * @description the purpose of this function is to simply remove all
     *              white spaces from a string
     */
    String.prototype.trimWhiteSpace = function () {
        return this.replace(/\ /g, "");
    };


    /**
     * @public
     * @function    indexOf
     * @ignore
     * @param       {*} item this is simply a polyfill for array index of in
     *                       the likes of ie8, however at the end of this
     *                       function you can see that if this implementation
     *                       has been applied then it will quickly get removed
     *                       as if it's left there, it could cause bugs in user's
     *                       code/application(s)
     * @description the purpose of this piece of code is to provide
     *              a polyfiller for the array index of method,
     *              this is needed for code below to work as expected
     */
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function (item) {
            var len = this.length >>> 0;
            var from = Number(arguments[1]) || 0;

            from = (from < 0) ? Math.ceil(from) : Math.floor(from);
            if (from < 0)
                from += len;

            for (; from < len; from++) {
                if (from in this && this[from] === item)
                return from;
            }
            return -1;
        };

        arrayPolyfilled = true;
    }

    var required = ["success", "url", "method"];
    var reqtypes = ["function", "string", "string"];
    var reqErrMsg = "Please provide an object with the required keys [success, fail, url, data]";
    var httpMethods = ["POST", "GET", "PUT", "DELETE", "HEAD", "OPTIONS"];
    var headers = [{name: "X-Content-Type-Options", value: "nosniff"}];
    var xhr = new XMLHttpRequest();
    var password = null;
    var username = null;
    var methods;


    // private variables to work out which data format to send the data
    // back to the werver with
    var isHtml = false;
    var isJson = false;
    var isEncoded = false;
    var isPlain = false;
    var isMultiPart = false;
    var isBinary = false;
    var isBase64 = false;

    // check that all of the required parameters have been
    // provided if not, then simply throw some errors, this will inform the
	// developer that they're doing somethign wrong
    if (options == null) {
        throw new Error("You must provide an object containsing at least "
                        + "the following arguments.[success, method, url]");
    } else if (typeof options != "object") {
        throw new Error(reqErrMsg);
    } else {


        // a traditional for loop is being used instead of using a
        // for each loop as a for each loop only works in ie9 +
        for (var i = 0, counter = 0, length = required.length; i < length; i ++) {
            var r = required[i];
            if (!r in options) throw new Error(reqErrMsg);
            var type = reqtypes[counter];
            var actualType = typeof options[r];
            if (actualType != type || options[r] == null) {
                console.log(type);
                console.log(r);
                console.log(actualType);
                throw new Error("Invalid data type provided.");
            }
            counter++;
        }
    }


    // check that there's a valid http method provided
    options.method = options.method.toUpperCase().trimWhiteSpace();
    if (httpMethods.indexOf(options.method) < 0) {
        throw new Error("This is meant to implement a CRUD API, therefore "
        				+ "the http method "
						+ options.method + " is not allowed.");
    }


    // force it to be a secure connection
    // don't even bother trying a http connection, don't
    // even allow that as an option, there's no point
    // unless for some reason the user demands it
    var demandNoSSL = false;
    if ('forceNoSSL' in options) {
        if (options.forceNoSSL == true) {
            demandNoSSL = true;
            try {
                console.info("Insecure connetion!");
            } catch (Exception) {
                /* do nothing */
            }
        }
    }


	// this will force allow us to connect to a back end that has
	// no form of security, by default we want to make sure that we
	// connect to a secure connection
    if (!demandNoSSL) {
        if (options.url.indexOf("http://") >= 0) {
            options.url.replace("http://", "https://");
        }
    }


    // check is a username and password has been provided
    var validNonEmptyString = function (str) {
        return str != "" && str != null && typeof str == "string";
    }


	// update the username local variable if necessary
    if ('username' in options) {
        if (validNonEmptyString(options.username)) {
            username = options.username;
        } else {
            throw new Error("You've provided an invalid username.");
        }
    }


	// update the password local variable if necessary
    if ('password' in options) {
        if (validNonEmptyString(options.password)) {
            password = options.password;
        } else {
            throw new Error("You've provided an invalid password.");
        }
    }

    // open the connection so this way we can now set the headers
    // without having to worry about anything it doesn't
	//  matter if the user name and password are null,
	//  the xml http request object will just
	// diregard them
    xhr.open(options.method, options.url, true, username, password);



    // try to prevent mime sniffing both ends, just for the simple sake of that
    // added layer of security, whilst the client side can be manipulated,
    // it's nice to at least try to add some security on the client side too
    // but ultimetely your back end should be bullet proof
    //
    // NOTE this may be unecessary as by default no sniff has been put into
    //      the headers array be defualt, may consider removing this or possibly
    //      removing the above alternative
    xhr.setRequestHeader("X-Content-Type-Options", "nosniff");


    // now to take a look at the headers, this is an optional
    // field to implement keep in mind, this needs to take place
	// after the connection has been opened
    if ("headers" in options) {
        var validateHeader = function (header) {
            if ('name' in header && 'value' in header) {
                if (header.name != "" && header.name != null && header.value != "" && header.value != null) {
                        return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        };


		// this just saves having to repeat throwing the same
		// error over and over, it's easier just to call this
		// private function
        var headerError = function () {
            throw new Error("You must provide a single header, or an array of headers."
            + "\nA header must contain a 'name' property and a 'value' property.");
        };


		// a simple local/private function that will simply set the content
		// type header for us, provided we provide this method with a header
		// object
        var applyContentType = function (header) {
            if (header.value.contains("plain")) {
                // TODO - test
                isPlain = true;
            } else if (header.value.contains("html")) {
                // TODO - test
                isHtml = true;
            } else if (header.value.contains("json")) {
                isJson = true;
            } else if (header.value.contains("x-www-form-urlencoded")) {
                isEncoded = true;
            } else if (header.value.contains("multipart")) {
                // TODO - implement
                // TODO - test
                isMultiPart = true;
            } else if (header.value.contains("")) {
                // TODO - implement
                // TODO - test
                isBinary = true;
            } else if (header.value.contains("")) {
                // TODO - implement
                // TODO - test
                isBase64 = false;
            }
        };


		// now we want to validate the headers, as we already know that they
		// exist, the headers property can either be an array of object, or an
		// object, the header must contains a name property and a value property
        if (Array.isArray(options.headers)) {


            // again using a traditional for loop over using a for each loop to
            // provide support for older web browsers such as ie8
            for (var i = 0, length = options.headers.length; i < length; i ++) {
                var header = optiosn.headers[i];
                if (validateHeader(header)) {
                    xhr.setRequestHeader(header.name, header.value);
                    if (header.name.equalsIgnoreCase("content-type")) {
						applyContentType(header);
                    }
                } else { headerError(); } // invalid header provided
            }
        } else if (typeof options.headers == "object") {
            if (validateHeader(options.headers)) {
                xhr.setRequestHeader(options.headers.name, options.headers.value);
            } else {
                headerError();
            }
        } else {
            headerError();
        }
    }


    // force over ride the content type header, it doesn't matter so much as
	// the back end is concerned as looking at test data, the back end will only
	// process the most recently provided content type header it's best to place
    // this code here as it will run prior to processing the provided form
    if ('consumes' in options) {
        xhr.setRequestHeader("Content-Type", options.consumes);
    }


    // now to check and process the form property as we know that the form
	// obviosuly should be a form element, it's safe to check that it's an
	// instance of a html form element plus having done research with cross
	// browser compatability, this is meant to work even in ie8, so it's fine
	// and safe to use
    if ('form' in options) {
        if (!options.form instanceof HTMLFormElement) {
            throw new Error("The form parameter must be a HTML form element.");
        }


		// as child nodes will provide a html collection, it's safer to
		// make sure that we manually convert this inot an array
        var inputs = Array.prototype.slice.call(options.form.childNodes);
        var toSend = "";


		// this is a simple method which will check that the form input that
		// has been provided is safe to process, it will simply get the name and
		// value attribtue and make sure that both aren't null or empty
		// again, having looked into cross browser compatability, it's safe to
		// use the get attribute method
        var isValidInput = function (input) {
            var test = false;
            if (input.getAttribute("name") != ""
                && input.getAttribute("value") != ""
                && input.getAttribute("name") != null
                && input.getAttribute("value") != null) {
                    return true;
            } else {
                return false;
            }
        };


		// this is a simple private method which will return an encoded
		// input
        var encodeInput = function (input) {
        	return encodeURIComponent(input.getAttribute("name")) + '='
            	+ encodeURIComponent(input.getAttribute("value"));
        };


		// now we want to check if the server is expecting a certain format,
		// if so, we can try to automate encoding the data that has been
		// provided through the form property
        if (isPlain) {
            // TODO - test
            toSend = "";


            // again using a traditional for loop over using a for each loop to
            // provide more support for older browsers
            for (var i = 0, length = inputs.length; i < length; i ++) {
                var input = inputs[i];

                try {
                    if (isValidInput(input)) {
                        toSend += input.getAttribute("name") + "=" + input.getAttribute("value");
                    }
                } catch (Exception) {
                    /* do nothing */
                }
            }

        } else if (isHtml) {
            // TODO - test
            toSend = options.form.innerHTML;
        } else if (isJson) {
            toSend = {};

            // again using a traditional for loop over using a for each loop to
            // provide more support for older browsers
            for (var i = 0, length = inputs.length; i < length; i ++) {
                var input = inputs[i];

                try {
                    if (isValidInput(input)) {
                        toSend[input.getAttribute("name")] = input.getAttribute("value");
                    }
                } catch (Exception) {
                    /* do nothing */
                }
            }


            toSend = JSON.stringify(toSend);
        } else if (isEncoded) {
            toSend = "";

            // again using a traditional for loop over using a for each loop to
            // provide more support for older browsers
            for (var i = 0, length = inputs.length; i < length; i ++) {
                var input = inputs[i];
                try {
                    if (isValidInput(input)) {
                        if (toSend == "") { toSend += "?"; }
                        else { toSend += "&"; }
                        toSend += encodeInput(input);
                    }
                } catch (Exception) {
                    /* do nothing */
                }
            }
        } else if (isMultiPart) {
            // TODO - implement
            // TODO - test
        } else if (isBinary) {
            // TODO - implement
            // TODO - test
        } else if (isBase64) {
            // TODO - implement
            // TODO - test
        }


        // update the form value
        options.form = toSend;
    }


    // now to simply send the data on through to the back end, let's see
	// if we're to submit form data, raw data or nothing, if the http method is
	// a get method, then it shouldn't try to send anything anyway
    if ((!'data' in options) && (!'form' in options)) {
        xhr.send();
    } else {
        if ('form' in options) {
            options.data = options.form;
        } else if ('data' in options) {
            xhr.send(options.data);
        } else if ('data' in options && 'form' in options) {
            try {
                console.info("Data and form supplied, selecting data by default...");
            } catch (Exception) {
                try {
                    console.log("Data and form supplied, selecting data by default...");
                } catch (Exception) { /* do nothing */ }
            }
        }

        xhr.send(options.form);
    }

	// this is a simple private function to save having to repeat writing the
	// same error that will be thrown
	var invalidFunctionProvided = function () {
		throw new Error("Invalid function provided.");
	};


    // on load start will run if it exists within the options object
	// if not, then next check
    if ('start' in options) {
		if (typeof options.start != "function") { invalidFunctionProvided(); }
        addEvent(xhr, "loadstart", function() {
            options.start(xhr);
        });
    }


    // on progress will run if it exists within the options object
	// if not, then next check
    if ('loading' in options) {
		if (typeof options.loading != "function") { invalidFunctionProvided(); }
        addEvent(xhr, "progress", function (loadEvent) {
            options.loading(loadEvent);
        });
    }


    // on success will now run, the succcess method should run anyway
	// as it's a required parameter/argument for this function
    addEvent(xhr, "load", function () {
        var data = xhr.responseText;
        try { data = JSON.parse(data); }
        catch (Exception) { /* do nothing */ }
        options.success(data);
    });


    // on finished will run  if it exists within the options object
	// if not, then next check, keep in mind this code will be executed
	// whether or not the request was a success or a fail
    if ('finished' in options) {
		if (typeof options.finished != "function") { invalidFunctionProvided(); }
        addEvent(xhr, "loadend", function () {
            options.finished(xhr);
        });
    }


	// now we want to check if there's an abort or a fail method
	// if not then just return from this function
    if ('fail' in options || 'abort' in options) {


		// this will run anf check the error handling methods (abort, fail),
		// either way if abort is provided, then abort will be run instead of
		// fail, provided fail has been provided
        addEvent(xhr, "abort", function () {
            if (!'abort' in options) {
				if (typeof options.fail != "function") { invalidFunctionProvided(); }
                options.fail(xhr);
            } else {
				if (typeof options.abort != "function") { invalidFunctionProvided(); }
                options.abort(xhr);
            }
        });


		// this will run the on fail method provided that it exists within the
		// options object
		if ('fail' in options) {
	        addEvent(xhr, "error", function () {
				if (typeof options.fail != "function") { invalidFunctionProvided(); }
	            options.fail(xhr);
	        });
		}
    }




    // now to clear up any mess that may cause bugs with code
    // that others may use or have in place already
    if (arrayPolyfilled) { delete Array.indexOf; }
    delete String.contains;
    delete String.trimWhiteSpace;


    // if the oop approach has been taken, simply return the oop
    // methods
    if (methods != null) {
        return methods;
    }
}



////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
///////////////////////////////// DEMO /////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////



HTTP({
    url: window.location.href,
    method: "GET",
    success: function (d) {
        console.log("YASS");
    }
});
