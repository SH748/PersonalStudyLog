(function (v) {
    const MyPlugin = {};
    MyPlugin.install = function (Vue, options) {
        // 1. 添加全局方法或 property
        Vue.myGlobalMethod = function (methodOptions) {
            // 逻辑...
            //this指向Vue函数对象
            console.log("我的插件全局", this === methodOptions);

        }

        // 2. 添加全局资源
        Vue.directive('up', function (el, binding, vnode, oldVnode) {
            // 逻辑...
            el.textContent = binding.value.toUpperCase();
        })

        // // 3. 注入组件选项
        // Vue.mixin({
        //     created: function () {
        //         // 逻辑...
        //     }
        // })

        // 4. 添加实例方法
        Vue.prototype.$myPlugin = function (methodOptions) { //methodOptions调用时传入的参数
            // 逻辑...
            //this指向调用该方法的vue实例
            console.log("我的实例", this === methodOptions, methodOptions);

        }
    }
    window.MyPlugin = MyPlugin;
})(window)