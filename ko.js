(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else {
        root.ko = factory();
    }
})(this, function () {
    return function (fn) {
        return new Promise(function (resolve, reject) {

            var gen = fn();

            step();

            function step(sendValue) {
                var result = gen.next(sendValue);
                if (result.done) {
                    resolve(result.value);
                } else {
                    if (Array.isArray(result.value)) {
                        Promise.all(result.value).then(step, reject);
                    } else {
                        result.value.then(step, reject);
                    }
                }
            }
        });
    };
});