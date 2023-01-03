const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

const merkleTree = new MerkleTree(niceList)

console.log(merkleTree.getRoot())

async function main() {
  const name = "Alejandro"
  const index = niceList.findIndex(n => n === name)
  
  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    name: name,
    proof: merkleTree.getProof(index)
  });

  console.log({ gift });
}

main();
