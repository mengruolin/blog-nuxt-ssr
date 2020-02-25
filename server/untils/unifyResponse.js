export const response = new(class {
  constructor() {
    this.response = {
      code: new Number(), // 200:success, 0:error, default 0:Invalid
      message: new String(), // description
      data: new Object(), // 响应body体
    };
  }

  send (code, data, description) {
    switch (code) {
      case '0':
        return Object.assign({}, this.response, {
          data: data,
          code: '0',
          message: description || 'Success'
        });
      case '999':
        return Object.assign({}, this.response, {
          data: data,
          code: '999',
          message: description || 'Error'
        });
      default:
        return Object.assign({}, this.response, {
          code: '999',
          message: description || 'Invalid'
        })
    }
  }
  
})()