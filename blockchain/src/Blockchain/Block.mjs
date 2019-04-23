import crypto from 'crypto'

export class Block {
  constructor(data, previousHash = '') {
    this.timestamp = new Date().toISOString()
    this.data = data
    this.previousHash = previousHash
    this.hash = this.calculateHash()
  }

  calculateHash() {
    const data = this.previousHash + this.timestamp + JSON.stringify(this.data)
    return crypto.createHash('sha256').update(data).digest('hex')
  }
}