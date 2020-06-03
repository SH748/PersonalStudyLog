![image-20200602000702273](D:\个人前端学习日志\技术日记\数据劫持以及watcher简单记录.assets\image-20200602000702273.png)

###### ==Observer.defineReactive== 最初的流氓

再次修改data中数据的get和set

![image-20200602001017257](D:\个人前端学习日志\技术日记\数据劫持以及watcher简单记录.assets\image-20200602001017257.png)

使得数据修改时会触发dep的notify（notify后面解释）

==compileUtil.bind== 流氓的开始

![image-20200602001235870](D:\个人前端学习日志\技术日记\数据劫持以及watcher简单记录.assets\image-20200602001235870.png)





流程简单分析

```js
/*1.数据劫持（observer被数据劫持）
 目的：生成dep对象，并把dep的notify绑定到数据的set方法里，是的数据修改时会调用notify
*/
 defineReactive: function(data, key, val) {
        var dep = new Dep(); //生成dep（深度对象）被vm的data的get和set挟持（闭包）因此没有在方法结束时被销毁
        var childObj = observe(val);

        Object.defineProperty(data, key, {
            enumerable: true, // 可枚举
            configurable: false, // 不能再define
            get: function() {
                if (Dep.target) {
                    dep.depend();
                }
                return val;
            },
            set: function(newVal) {
                if (newVal === val) {
                    return;
                }
                val = newVal;
                // 新的值是object的话，进行监听
                childObj = observe(newVal);
                // 通知订阅者
                dep.notify();
            }
        });
    }

/*2.模板语法的解析中调用的bind方法
目的：使得用了模板语法的相关的node不会应为方法执行完毕，而被销毁（闭包），强行把用了模板语法的文本节点的标记给保存了起来
*/
bind: function(node, vm, exp, dir) {
        var updaterFn = updater[dir + 'Updater'];

        updaterFn && updaterFn(node, this._getVMVal(vm, exp));

        new Watcher(vm, exp, function(value, oldValue) {
            updaterFn && updaterFn(node, value, oldValue);
        });
    },
        
        
        
/*3.watcher类的分析*/
function Watcher(vm, expOrFn, cb) {
    this.cb = cb;
    this.vm = vm;
    this.expOrFn = expOrFn;
    this.depIds = {};

    if (typeof expOrFn === 'function') {
        this.getter = expOrFn;
    } else {
        this.getter = this.parseGetter(expOrFn.trim());
    }

    this.value = this.get();
}

Watcher.prototype = {
    constructor: Watcher,
    update: function() {
        this.run();
    },
    run: function() {
        
        var value = this.get();
        var oldVal = this.value;
        if (value !== oldVal) {
            this.value = value;
            this.cb.call(this.vm, value, oldVal);
        }
    },
    addDep: function(dep) {
        if (!this.depIds.hasOwnProperty(dep.id)) {
            dep.addSub(this);
            this.depIds[dep.id] = dep;
        }
    },
    get: function() {
        Dep.target = this;
        var value = this.getter.call(this.vm, this.vm);
        Dep.target = null;
        return value;
    },

    parseGetter: function(exp) {
        if (/[^\w.$]/.test(exp)) return; 

        var exps = exp.split('.');

        return function(obj) {
            for (var i = 0, len = exps.length; i < len; i++) {
                if (!obj) return;
                obj = obj[exps[i]];
            }
            return obj;
        }
    }
};
```

