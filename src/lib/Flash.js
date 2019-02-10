class Flash {

  static setMessage(type, message) {
    this._message = this._message || {}
    this._message[type] = message
  }



}


export default Flash
