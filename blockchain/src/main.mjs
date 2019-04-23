import { Block } from './Blockchain/Block.mjs'
import { Blockchain} from './Blockchain/Blockchain.mjs'
import sleepRandom from './utilities.mjs'

(async function () {
  const theBlockchain = new Blockchain()
  await sleepRandom()
  theBlockchain.addBlock(new Block({
    amount: 1
  }))
  await sleepRandom()
  theBlockchain.addBlock(new Block({
    amount: 2
  }))
  await sleepRandom()
  theBlockchain.addBlock(new Block({
    amount: 3
  }))
  console.log(JSON.stringify(theBlockchain, null, 4))
  console.log(`The blockchain is ${theBlockchain.isValid() ? 'valid' : 'invalid'}!`)
})()