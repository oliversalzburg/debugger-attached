"use strict";

function isDebuggerAttached() {
	return typeof v8debug === "object";
}

module.exports = isDebuggerAttached;
