(function(w){
    let methods ;
    function Bus(){
        methods = {}
       
    }
    /**
     * 
     * @param {string} eventName  事件类型(事件名字)
     * @param {Function} listener 事件监听(回调函数)
     */
    Bus.prototype.on =function(eventName,listener){
        console.log(typeof(listener));
        
        if(typeof(listener) === "function"){
            //1.查看对象的methods中是否存在该事件
            if(methods[eventName]){
                methods[eventName].push(listener);
            }else{
                methods[eventName]=[listener];
            }
        }else{
            console.log(listener +"is Not A Function");
            
        }
        console.log(methods);
    }
    /**
     * 
     * @param {string} eventName 事件类型(事件名字)
     * @param {*} data 事件对应的回调函数中的参数数据
     */
    Bus.prototype.emit= function(eventName,data){
        if(methods[eventName]){
            methods[eventName].forEach(element => {
                element.apply(this,[data]);
            });
        }else{
            console.error(eventName+"is Not Found");
        }
    }
    /**
     * 
     * @param {string} eventName 事件类型(事件名字)
     */
    Bus.prototype.off=function(eventName){
        if(eventName === 'undefined'){
            methods = {}
        }else{
            delete methods[eventName]
        }
    }

    w.Bus = Bus;
})(window)