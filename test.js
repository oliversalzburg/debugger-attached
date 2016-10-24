"use strict";

const assert           = require( "assert" );
const debuggerAttached = require( "." );

delete global.v8debug;
assert.strictEqual( debuggerAttached(), false );
global.v8debug = {};
assert.strictEqual( debuggerAttached(), true );
