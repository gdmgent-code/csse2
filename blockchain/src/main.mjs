import { Blockchain } from './Blockchain/Blockchain.mjs'
import { Block } from './Blockchain/Block.mjs'

let jsChain = new Blockchain();
jsChain.addBlock(new Block("12/25/2017", {amount: 5}));
jsChain.addBlock(new Block("12/26/2017", {amount: 10}));

console.log(JSON.stringify(jsChain, null, 4));
console.log("Is blockchain valid? " + jsChain.checkValid());