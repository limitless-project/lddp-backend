// Test: Does JS-IPFS use the preinitialized repo or does it overwrite it?
// Conclusion: It uses the preinitialized repo.
const IPFS = require("ipfs-core")  
const homedir = require('os').homedir();
const initIPFSInstance = async () => {
    var repo = IPFS.create({ repo: `${homedir}/.lppd` });
    return repo
};
testInstance = initIPFSInstance ()
.then(repo => {return(repo)})
console.log(testInstance)            