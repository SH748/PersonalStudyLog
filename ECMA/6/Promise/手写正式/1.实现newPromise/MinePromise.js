class Promise {

    static PENDING = "pending"
    static FULFILLED = "resolved"
    static REJECTED = "rejected"
    /**
     * 
     * @param {*} [value] 将被Promise对象解析的参数，也可以是一个Promise对象，或者是一个thenable。
     */
    static resolve(value) {
        /**
         * Promise 实例的 status 只能被修改一次， 因为实例的 status 的初始值一定是 pending 所以，status 只能在
         * pending 状态是才能被修改
         */
        if (this.status === Promise.PENDING) {
            this.status = Promise.FULFILLED;
            this.value = value;
        }
    }
    /**
     * 
     * @param {*} [reason] 表示Promise被拒绝的原因。
     */
    static reject(reason) {
        /**
         * Promise 实例的 status 只能被修改一次， 因为实例的 status 的初始值一定是 pending 所以，status 只能在
         * pending 状态是才能被修改
         */
        if (this.status === Promise.PENDING) {
            this.status = Promise.REJECTED;
            this.value = reason;
        }
    }

    /**
     * @param {Function} executor 执行器,带有 resolve 和 reject 两个参数的函数
     */
    constructor(executor) {
        if (!(executor instanceof Function)) throw new Error("MinePromise executor is not a Function");

        /**
         * status : 在 Promise 实例没有执行 resolve 或则 reject 时，值为 pending 状态
         * value : 在 Promise 实例没有执行 resolve 或则 reject 时，值为 null 状态
         */
        this.status = Promise.PENDING;
        this.value = null;

        /**
         * try_catch 思路: executor 执行时,如果发生异常，会被抛出到 executor 函数外，然后被 try_catch 捕获。
         * executor 抛出异常后， Promise 实例的状态会变为 rejected ,实例的 valu 会变为所抛出异常的 string 值
         */
        try {
            /**
             * executor 执行思路: executor 执行时，promise 会向执行器方法中添加两个参数:
             *  resolve ：执行后，Promise 实例的状态会变为 resolved ，实例的 value 会变为执行时所传给 resolve 的值
             *  reject ：执行后，Promise实例的状态会变为 rejected ,实例的 value 会变为执行时所传给 reject 的值
             *  这两个方法是 Promise 类的方法，传给 executor 时需要修改 this 指向，使得 this 指向 Promise 的实例
             */
            executor(Promise.resolve.bind(this), Promise.reject.bind(this));
        } catch (error) {
            /**
             * 当 executor 执行时遇到错误，并抛出错误时， Promise 实例的 status 会变为 rejected ，实例的
             *  value 的值时所抛出的异常的 string 值，因此，调用 reject 并传入捕获到的 error 即可，但需要修改 reject 的 
             *  this 指向为当前实例对象
             */
            Promise.reject.call(this, error)
        }

    }


}