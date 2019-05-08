import crypto from 'crypto'

export class Block {
  constructor (data = null, previousHash = null) {
    this.timestamp = new Date().toISOString()
    this.previousHash = previousHash
    this.hash = null
    this.updateData(data)
  }

  calculateHash () {
    const message = this.timestamp + this.previousHash + JSON.stringify(this.data)
    const digest = crypto.createHash('sha256').update(message).digest('hex')
    return digest
  }

  updateData (data) {
    this.data = data
    this.updateHash()
  }

  updateHash () {
    this.hash = this.calculateHash()
  }
}
