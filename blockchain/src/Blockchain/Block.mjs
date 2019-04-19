import crypto from 'crypto'

export class Block {
  constructor(timestamp, data) {
    this.timestamp = timestamp
    this.data = data

    this.previousHash = '0'
    this.hash = this.calculateHash()
    this.nonce = 0
  }

  calculateHash() {
    const hash = crypto.createHash('sha256')
    hash.update(this.index + this.previousHash + this.timestamp + this.data + this.nonce)
    return hash.digest('hex')
  }

  mineBlock(difficulty) {

  }

}