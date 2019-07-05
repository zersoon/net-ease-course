(function (root) {
    // 构造函数
    var stream = function (obj) {
        if(!(this instanceof stream)) {
            return new stream(obj);
        }
        this.wrap = obj; //数据源
    }

    // 函数对象 
    stream.unique = function (array, callback) {
        // 判断如果不是数组时，报异常
        if(!Array.isArray(array)) throw Error('params should be array!');
        var result = [];
        for(var i = 0; i < array.length; i++) {
            var target = callback ? callback(array[i]) : array[i];
            if(result.indexOf(target) == -1) {
                result.push(target)
            }
        }
        return result;
    }

    stream.functions = function (obj) {
        var result = [];
        var key;
        for(key in obj) {
            result.push(key);
        }
        return result;
    }
    
    stream.each = function (array, callback) {
        for(var i = 0, len = array.length; i < len; i++) {
            callback.call(array, array[i], i);
        }
    }
    stream.map1 = function (array) {
        array.push("max");
        return array;
    }
    // 开启链式调用 
    stream.chain = function (obj) {
        var instance = stream(obj);
        instance._chain = true;
        return instance;
    }

    // 实例对象  上道工序处理的结果obj
    stream.result = function (instance, obj) {
        if(instance._chain) {
            instance.wrap = obj;
            return instance;
        }
        return obj;
    }

    stream.prototype.values = function () {
        return this.wrap;
    }
    // 查找 属性 复制一份到原型上面去
    stream.mixin = function (obj) {
        stream.each(stream.functions(obj), function (name) {
            var func = stream[name];
            stream.prototype[name] = function () {
                var args = [this.wrap];
                [].push.apply(args, arguments);
                return stream.result(this, func.apply(this, args));
            }
        });
    }
    stream.mixin(stream);

    root.stream = stream;
})(this);