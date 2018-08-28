const unavailable = () => { throw "This swarm.js function isn't available on the browser."; }

const fsp = {readFile: unavailable};
const files = {download: unavailable, safeDownloadArchived: unavailable, directoryTree: unavailable};
const os = {platform: unavailable, arch: unavailable};
const path = {join: unavailable, slice: unavailable};
const child_process = {spawn: unavailable};
const mimetype = {lookup: unavailable};
const defaultArchives = {};
const downloadUrl = null;
const request = require("xhr-request-promise");
const bytes = require("eth-lib/lib/bytes");
const hash = require("./swarm-hash.js");
const pick = require("./pick.js");
const swarm = require("./swarm");
const web3_utils= require("web3-utils");
const Web3 = require("web3");

if (typeof Web3 !== 'undefined') {
    web3 = new Web3(Web3.givenProvider);
} else {
    web3 = new Web3('http://localhost:8545');
    // console.log('Error: web3 is "undefined". Is metamask working? if yes, Try page refresh');
}


module.exports = swarm({
  fsp,
  files,
  os,
  path,
  child_process,
  defaultArchives,
  mimetype,
  request,
  downloadUrl,
  bytes,
  hash,
  pick,
  web3_utils,
  web3,
});
