class Promise {
    static PENDING = "pending";
    static FULFILLED = "resolved";
    static REJECTED = "rejected";
    static callback = [];
    constructor(executor) {
        if (executor) {
            if (typeof executor !== "function") throw new Error("executor 不是一个函数");
            this.status = Promise.PENDING;
            this.value = null;
            try {
                executor(Promise.resolve.bind(this), Promise.reject.bind(this))
            } catch (error) {
                Promise.reject(error);
            }
        }
    }
    then(onFulfilled, onRejected) {
        if (typeof onFulfilled !== "function") onFulfilled = () => {};
        if (typeof onRejected !== "function") onRejected = () => {};
        return new Promise((resolve, reject) => {
            let util = (fun) => {
                try {
                    let result = fun(this.value);
                    if (result instanceof Promise) {
                        result.then(value => {
                            resolve(result.value)
                        }, reason => {
                            reject(result.value)
                        })
                    } else {
                        resolve(result);
                    }
                } catch (error) {
                    reject(error)
                }
            }
            if (this.status === Promise.PENDING) {
                Promise.callback.push({
                    "onFulfilled": () => {
                        util(onFulfilled)
                    },
                    "onRejected": () => {
                        util(onRejected)
                    }
                })


            }
            if (this.status === Promise.FULFILLED) {
                util(onFulfilled)
            }
            if (this.status === Promise.REJECTED) {
                util(onRejected)
            }
        })
    }
    static reject = function (reason) {

        if (this.status == Promise.PENDING) {
            this.status = Promise.REJECTED;
            this.value = reason;

            Promise.callback.forEach(callback => {
                callback.onRejected.apply(this, [reason]);
            })
        }
    }
    static resolve = function (value) {
        if (this.status == Promise.PENDING) {
            this.status = Promise.FULFILLED;
            this.value = value;
            Promise.callback.forEach(callback => {
                callback.onFulfilled.apply(this, [value]);
            })
        }
    }

}