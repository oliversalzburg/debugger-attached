"use strict";

function isDebuggerAttached() {
	return typeof v8debug === "object" || /--debug|--inspect/.test( process.execArgv.join( " " ) );
}

module.exports = isDebuggerAttached;
