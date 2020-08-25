'use strict';

/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 * 构造函数, 用来创建取消时的错误对象
 * @class
 * @param {string=} message The message.
 *
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;
