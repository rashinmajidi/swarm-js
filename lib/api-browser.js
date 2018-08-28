var unavailable = function unavailable() {
    throw "This swarm.js function isn't available on the browser.";
};

var fsp = { readFile: unavailable };
var files = { download: unavailable, safeDownloadArchived: unavailable, directoryTree: unavailable };
var os = { platform: unavailable, arch: unavailable };
var path = { join: unavailable, slice: unavailable };
var child_process = { spawn: unavailable };
var mimetype = { lookup: unavailable };
var defaultArchives = {};
var downloadUrl = null;
var request = require("xhr-request-promise");
var bytes = require("eth-lib/lib/bytes");
var hash = require("./swarm-hash.js");
var pick = require("./pick.js");
var swarm = require("./swarm");
var account = require("eth-lib/lib/account");
var web3_utils = require("web3-utils");
var Eth = require("web3-eth");
var Web3 = require("web3");

//const eth = new Eth('http://localhost:8545');
//const web3 = new Web3(Web3.givenProvider);
if (typeof Web3 !== 'undefined') {
    web3 = new Web3(Web3.givenProvider);
} else {
    web3 = new Web3('http://localhost:8545');
    // console.log('Error: web3 is "undefined". Is metamask working? if yes, Try page refresh');
}
//const web3 = new Web3('http://localhost:8545');


module.exports = swarm({
    fsp: fsp,
    files: files,
    os: os,
    path: path,
    child_process: child_process,
    defaultArchives: defaultArchives,
    mimetype: mimetype,
    request: request,
    downloadUrl: downloadUrl,
    bytes: bytes,
    hash: hash,
    pick: pick,
    web3_utils: web3_utils,
    web3: web3,
    eth: eth,
    account: account
});