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
        if (this.status === Promise.PENDING) {
            Promise.callback.push({
                onFulfilled,
                onRejected
            })
        }
        if (this.status === Promise.FULFILLED) {
            onFulfilled(this.value);
        }
        if (this.status === Promise.REJECTED) {
            onRejected(this.value);
        }
    }
    static reject = function (reason) {
        if (this.status == Promise.PENDING) {
            this.status = Promise.REJECTED;
            this.value = reason;

            Promise.callback.map(callback => {
                console.log(callback);
                callback.onRejected(reason);
            })
        }
    }
    static resolve = function (value) {
        if (this.status == Promise.PENDING) {
            this.status = Promise.REJECTED;
            this.value = value;
            Promise.callback.map(callback => {
                callback.onFulfilled(reason);
            })
        }
    }
}