async function registerDNS{

}
const OrbitDB = require('orbit-db')

// For js-ipfs >= 0.38

// Create IPFS instance
const initIPFSInstance = async () => {
  return await IPFS.create({ repo: "./path-for-js-ipfs-repo" });
};

initIPFSInstance().then(async ipfs => {
  const orbitdb = await OrbitDB.createInstance(ipfs);

  // Create / Open a database
  const db = await orbitdb.log("hello");
  await db.load();

  // Listen for updates from peers
  db.events.on("replicated", address => {
    console.log(db.iterator({ limit: -1 }).collect());
  });

  // Add an entry
  const hash = await db.add("world");
  console.log(hash);

  // Query
  const result = db.iterator({ limit: -1 }).collect();
  console.log(JSON.stringify(result, null, 2));
});


// For js-ipfs < 0.38

// Create IPFS instance
const ipfsOptions = {
    EXPERIMENTAL: {
      pubsub: true
    }
  };

ipfs = new IPFS(ipfsOptions);

initIPFSInstance().then(ipfs => {
  ipfs.on("error", e => console.error(e));
  ipfs.on("ready", async () => {
    const orbitdb = await OrbitDB.createInstance(ipfs);

    // Create / Open a database
    const db = await orbitdb.log("hello");
    await db.load();

    // Listen for updates from peers
    db.events.on("replicated", address => {
      console.log(db.iterator({ limit: -1 }).collect());
    });

    // Add an entry
    const hash = await db.add("world");
    console.log(hash);

    // Query
    const result = db.iterator({ limit: -1 }).collect();
    console.log(JSON.stringify(result, null, 2));
  });
});