import { Block } from './Blockchain/Block.mjs'
import { Blockchain } from './Blockchain/Blockchain.mjs'
import { color, sleepRandom } from './utils.mjs'

(async function () {
  const theBlockchain = new Blockchain()
  await sleepRandom()
  theBlockchain.addBlock(new Block({
    amount: 1
  }))
  await sleepRandom()
  theBlockchain.addBlock(new Block({
    amount: 22
  }))
  await sleepRandom()
  theBlockchain.addBlock(new Block({
    amount: 333
  }))
  await sleepRandom()
  theBlockchain.addBlock(new Block({
    amount: 4444
  }))
  console.log(theBlockchain)
  console.log(`The blockchain is ${theBlockchain.isValid() ? color.fg.green + 'valid' : color.fg.red + 'invalid'}${color.reset}!`)
})()