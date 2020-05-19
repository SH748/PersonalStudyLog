class Promise {
    static PENDING = "pending"
    static FULFILLED = "resolved"
    static REJECTED = "rejected"
    /**
     * 
     * @param {string} value 将被Promise对象解析的参数，也可以是一个Promise对象，或者是一个thenable。
     */
    static resolve(value) {
        /**
         * Promise 实例的 status 只能被修改一次， 因为实例的 status 的初始值一定是 pending 所以，status 只能在
         * pending 状态是才能被修改 
         */
        if (this.status === Promise.PENDING) {
            this.status = Promise.FULFILLED;
            this.value = value;

            /**
             * 如果执行中执行的为异步函数，会把 then 的 onFulfilled 和 onRejected 方法保存在一个 object 中，再把 object 压入
             * callbacks 中， 注意： 原生 promise 中是没有相关的 callbacks 可以访问的，只是在手写 promise 时为了实现效果而使用的
             * 一种实现方式而已
             * setTimeOut 目的:利用同步代码优先执行的特点，使得在执行器为异步时， then 的 onFoulfilled 和 onRejected 的执行在执行器里的
             * 方法后执行
             */
            setTimeout(() => {
                this.callbacks.map(callback => {
                    callback.onFulfilled(value);
                });
            });
        }
    }
    /**
     * 
     * @param {String} reason 表示Promise被拒绝的原因。
     */
    static reject(reason) {

        /**
         * Promise 实例的 status 只能被修改一次， 因为实例的 status 的初始值一定是 pending 所以，status 只能在
         * pending 状态是才能被修改
         */
        if (this.status === Promise.PENDING) {
            this.status = Promise.REJECTED;
            this.value = reason;
            setTimeout(() => {
                this.callbacks.map(callback => {
                    callback.onRejected(reason);
                });
            });
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
        this.callbacks = [];

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

    /**
     * @param {Function} [onFulfilled] 当 Promise 变成接受状态（fulfilled）时调用的函数。该函数有一个参数，即接受的最终结果
     * （the fulfillment  value）。如果该参数不是函数，则会在内部被替换为 (x) => x，即原样返回 promise 最终结果的函数
     * @param {Function} [onRejected] 当 Promise 变成接受状态或拒绝状态（rejected）时调用的函数。该函数有一个参数，即拒绝的原因
     * （rejection reason）。 如果该参数不是函数，则会在内部被替换为一个 "Thrower" 函数 (it throws an error it received as argument)。
     * 
     */
    then(onFulfilled, onRejected) {
        /**
         * 思路：当 then 传入的 onFulfilled 和 onRejected 不是 Function 类型时，把其转为一个空类型，以便后续代码执行时不报错
         */
        if (!(onFulfilled instanceof Function)) {
            /**
             * 当 then 为非 Function 类型的时候，会将调用 then 的 promise 的那个实例的 value 或者 reason 传递
             * 给下一个 then 
             * then 穿透
             * 实现方式: 如果 onFulfilled, onRejected 的类型不是 Function , 把 promise 实例中的 value retrun 出去
             */
            onFulfilled = () => this.value
        }
        if (!(onRejected instanceof Function)) {
            /**
             * 当 then 为非 Function 类型的时候，会将调用 then 的 promise 的那个实例的 value 或者 reason 传递
             * 给下一个 then 
             * then 穿透
             * 实现方式: 如果 onFulfilled, onRejected 的类型不是 Function , 把 promise 实例中的 value retrun 出去
             */
            onRejected = () => this.value
        }
        return new Promise((resolve, reject) => {

            /**
             *  在实例的 status 为 pending 时，then 被调用，说明 执行器中执行的是异步代码， 实例的 status 将在 then 方
             * 法执行之后修改
             *  为了触发 onFulfilled 和 onRejected ,考虑将 onFulfille 和 onRejected 保存在一个实例的数组中，在实例的
             *  status 修改后，再调用
             */
            if (this.status === Promise.PENDING) {

                this.callbacks.push({
                    onFulfilled: value => {
                        try {
                            let result = onFulfilled(value);
                            if (result instanceof Promise) {
                                /**
                                 * 如果 then 中 return 的值时一个 promise （return 的 promise 实例
                                 * 和 then 返回的 promise 不是同一个值），则 then 的返回的 promise 实例
                                 * 会和 return 的实例的 status 一致：
                                 *      如果 result 是 resolved ,则 then 的结果也是 resolved ,即：
                                 * then 的结果的 promise 实例的 resolve 被调用
                                 *      如果 result 是 rejected ,则 then 的结果也是 rejected ,即：
                                 * then 的结果的 promise 实例的 reject 被调用
                                 */
                                // result.then(value => {
                                //     resolve(value)
                                // }, reason => {
                                //     reject(reason)
                                // })
                                /**
                                 *  优化：把 then 的结果的 promise 实例的 resolve 和 reject 方法当作
                                 * result 的 then 的 onFulfilled 和 onRejected ，这时 result.then的
                                 * 两个参数在执行的时候实质是执行了外层 then 的结果的那个 promise 实例的 
                                 * resolve 和 reject ，并且把 最外层 then 中的 this 所代表的实例的 value
                                 * 传了进去 
                                 * 涉及：闭包，流程中的各个不同的 this 指向，理解不清晰的可以画图帮助理解
                                 */
                                result.then(resolve, reject);
                            } else {
                                resolve(result);
                            }
                        } catch (error) {
                            reject(error)
                        }
                    },
                    onRejected: reason => {
                        try {
                            let result = onRejected(reason);
                            if (result instanceof Promise) {
                                /**
                                 * 如果 then 中 return 的值时一个 promise （return 的 promise 实例
                                 * 和 then 返回的 promise 不是同一个值），则 then 的返回的 promise 实例
                                 * 会和 return 的实例的 status 一致：
                                 *      如果 result 是 resolved ,则 then 的结果也是 resolved ,即：
                                 * then 的结果的 promise 实例的 resolve 被调用
                                 *      如果 result 是 rejected ,则 then 的结果也是 rejected ,即：
                                 * then 的结果的 promise 实例的 reject 被调用
                                 */
                                // result.then(value => {
                                //     resolve(value)
                                // }, reason => {
                                //     reject(reason)
                                // })
                                /**
                                 *  优化：把 then 的结果的 promise 实例的 resolve 和 reject 方法当作
                                 * result 的 then 的 onFulfilled 和 onRejected ，这时 result.then的
                                 * 两个参数在执行的时候实质是执行了外层 then 的结果的那个 promise 实例的 
                                 * resolve 和 reject ，并且把 最外层 then 中的 this 所代表的实例的 value
                                 * 传了进去 
                                 * 涉及：闭包，流程中的各个不同的 this 指向，理解不清晰的可以画图帮助理解
                                 */
                                result.then(resolve, reject);
                            } else {
                                resolve(result);
                            }
                        } catch (error) {
                            reject(error)
                        }
                    }
                })
            }


            /**
             * try_catch 思路：当 onFulfilled 和 onRejected 执行时遇到错误后，抛出错误，使用 try_catch 捕获，此时，调用 onRejected 处理 error
             * 根据实例 status 决定调用 onFulfilled 或者 onRejected ， 实例的 status 为 resolved 时，调用 onFulfilled ； 实例的 status 为 
             * rejected 是调用 onRejected ; 当 onRejected 抛出异常时，调用 onRejected 其实也没用(hahaha,我还特意看了原生，也是这样，就不搞了)
             */

            if (this.status === Promise.FULFILLED) {
                setTimeout(() => {
                    try {
                        let result = onFulfilled(this.value);
                        if (result instanceof Promise) {
                            /**
                             * 如果 then 中 return 的值时一个 promise （return 的 promise 实例
                             * 和 then 返回的 promise 不是同一个值），则 then 的返回的 promise 实例
                             * 会和 return 的实例的 status 一致：
                             *      如果 result 是 resolved ,则 then 的结果也是 resolved ,即：
                             * then 的结果的 promise 实例的 resolve 被调用
                             *      如果 result 是 rejected ,则 then 的结果也是 rejected ,即：
                             * then 的结果的 promise 实例的 reject 被调用
                             */
                            // result.then(value => {
                            //     resolve(value)
                            // }, reason => {
                            //     reject(reason)
                            // })
                            /**
                             *  优化：把 then 的结果的 promise 实例的 resolve 和 reject 方法当作
                             * result 的 then 的 onFulfilled 和 onRejected ，这时 result.then的
                             * 两个参数在执行的时候实质是执行了外层 then 的结果的那个 promise 实例的 
                             * resolve 和 reject ，并且把 最外层 then 中的 this 所代表的实例的 value
                             * 传了进去 
                             * 涉及：闭包，流程中的各个不同的 this 指向，理解不清晰的可以画图帮助理解
                             */
                            result.then(resolve, reject);
                        } else {
                            resolve(result);
                        }
                    } catch (error) {
                        reject(error);
                    }
                });
            }
            if (this.status === Promise.REJECTED) {
                setTimeout(() => {
                    try {
                        let result = onRejected(this.value);
                        if (result instanceof Promise) {
                            /**
                             * 如果 then 中 return 的值时一个 promise （return 的 promise 实例
                             * 和 then 返回的 promise 不是同一个值），则 then 的返回的 promise 实例
                             * 会和 return 的实例的 status 一致：
                             *      如果 result 是 resolved ,则 then 的结果也是 resolved ,即：
                             * then 的结果的 promise 实例的 resolve 被调用
                             *      如果 result 是 rejected ,则 then 的结果也是 rejected ,即：
                             * then 的结果的 promise 实例的 reject 被调用
                             */
                            // result.then(value => {
                            //     resolve(value)
                            // }, reason => {
                            //     reject(reason)
                            // })
                            /**
                             *  优化：把 then 的结果的 promise 实例的 resolve 和 reject 方法当作
                             * result 的 then 的 onFulfilled 和 onRejected ，这时 result.then的
                             * 两个参数在执行的时候实质是执行了外层 then 的结果的那个 promise 实例的 
                             * resolve 和 reject ，并且把 最外层 then 中的 this 所代表的实例的 value
                             * 传了进去 
                             * 涉及：闭包，流程中的各个不同的 this 指向，理解不清晰的可以画图帮助理解
                             */
                            result.then(resolve, reject);
                        } else {
                            resolve(result);
                        }
                        resolve(result);
                    } catch (error) {
                        reject(error);
                    }
                });
            }


        })
    }
}