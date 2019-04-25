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
    amount: 2
  }))
  await sleepRandom()
  theBlockchain.addBlock(new Block({
    amount: 3
  }))
  // console.log(c)
  console.log(color.fg.blue + JSON.stringify(theBlockchain, null, 4), color.reset)
  console.log(`The blockchain is ${theBlockchain.isValid() ? color.fg.green + 'valid' : color.fg.red + 'invalid'}${color.reset}!`)
})()