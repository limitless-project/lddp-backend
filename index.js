// Request Format
// var request = lddpReq("request",[type:"type",auth:"hash"]);
// I know it looks confusing but here is a breakdown.
// "request" is the actual request. For example, "example" or "QmNib2c1qCVSbp9QPT81RmDSg3n8kFgPsMCdj4gpveJESE".
// The first example is a HRSN (Human Readable Site Name),
// and the seccond example is a non-existent LPID (Limitless Peer ID)
// After that, we have the headers.
// TYPE is the type of request.
// This can be many things and is expandable, but "GET" is what you will most likely use most of the time.
// Next is authentication. Use this to include a password or some other form of authentication with your request.
// Your password or other file will never leave this computer.
// Other than that, the headers are designed to allow applications to directly integrate with LDDP.
const IPFS = require("ipfs-core");
const Orbitdb = require("orbit-db");
const Identities = require("orbit-db-identity-provider");
const fs = require("fs");
const PeerId = require('peer-id');
const { AsyncLocalStorage } = require("async_hooks");
// CONFIG:
async function init(repoDir="~/.LDDP",privateKey) {
    if (privateKey != null){
        var node = await IPFS.create({init:{repo:repoDir},silent:true});
    } else {
        var node = await IPFS.create({init:{repo:repoDir,privateKey:privateKey},silent:true});
    }
    return(node);
};
async function addData(pathToData,)
var ipfsnode = init()
.then(node => {return(node)});


main()