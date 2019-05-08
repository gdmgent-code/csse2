import { Block } from './Block.mjs'

export class Blockchain {
  constructor () {
    this.chain = []
    this.createGenesisBlock()
  }

  addBlock (block) {
    block.previousHash = this.getLastBlock().hash
    block.updateHash()
    this.chain.push(block)
  }

  createGenesisBlock () {
    const genesisBlock = new Block()
    this.chain.push(genesisBlock)
  }

  getLastBlock () {
    return this.chain[this.chain.length - 1]
  }

  isValid () {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i]
      if (!this.isDataIntegrityValid(currentBlock)) {
        return false
      }
      const previousBlock = this.chain[i - 1]
      if (!this.isChainIntegrityValid(previousBlock, currentBlock)) {
        return false
      }
    }

    return true
  }

  isChainIntegrityValid (previousBlock, currentBlock) {
    return previousBlock.hash === currentBlock.previousHash
  }

  isDataIntegrityValid (block) {
    return block.hash === block.calculateHash()
  }
}
