const OrbitDB = require('orbit-db')
const IPFS  = require("ipfs-core")
const homedir = require('os').homedir();
// For js-ipfs >= 0.38

// Create IPFS instance
const initIPFSInstance = async () => {
  return await IPFS.create({ repo: `${homedir}/.lddp` });
};

initIPFSInstance().then(async ipfs => {
  const orbitdb = await OrbitDB.createInstance(ipfs);

  // Create / Open a database
  const db = await orbitdb.keyvalue("lddp.hrsns");
  await db.load();

  // Add an entry
  const hash = await db.put("example",{modhash:"lolnotarealhash",resolveTo:"ipnsAddrHere"});
  console.log(hash);
});