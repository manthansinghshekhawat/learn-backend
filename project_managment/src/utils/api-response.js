class ApiREsponse {
  constructor(statusCode, data, message = "Success") {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.sucess = statusCode >= 200 && statusCode < 300;
  }
}
export { ApiREsponse };
