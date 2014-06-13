(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else {
        root.ko = factory(root.b);
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
                    result.value.then(step, reject);
                }
            }
        });
    };
});