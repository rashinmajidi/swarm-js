var fsp = require("fs-promise");
var files = require("./files.js");
var os = require("os");
var path = require("path");
var child_process = require("child_process");
var mimetype = require('mime-types');
var defaultArchives = require("./../archives/archives.json");
var requester = require("xhr-request-promise");
var downloadUrl = "http://ethereum-mist.s3.amazonaws.com/swarm/";
var bytes = require("eth-lib/lib/bytes");
var hash = require("./swarm-hash.js");
var pick = require("./pick.js");
var swarm = require("./swarm");
var web3_utils = require("web3-utils");
var eth = require("web3-eth");

// Fixes issue that causes xhr-request-promise on Node.js to only accept Buffer
var request = function request(url, params) {
  var newParams = {};
  for (var key in params) {
    newParams[key] = params[key];
  }
  if (typeof newParams.body !== "undefined") {
    newParams.body = newParams.body instanceof Buffer ? newParams.body : new Buffer(newParams.body);
  }
  return requester(url, newParams);
};

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
  eth: eth
});