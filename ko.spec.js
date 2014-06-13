describe('ko', function(){
    this.timeout(500);

    function longRunningTask(result, timeout) {
        return new Promise(function (resolve) {
            setTimeout(resolve.bind(null, result), timeout);
        });
    }

    it('waits for a long running task', function(done){
        ko(function* () {
            var result = yield longRunningTask('result', 20);
            expect(result).to.be('result');
            return result;
        }).then(function (data) {
            expect(data).to.be('result');
            done();
        });
    });

    it('waits for two long running tasks', function(done){
        ko(function* () {
            var result = yield [
                longRunningTask('result1', 20),
                longRunningTask('result2', 50)
            ];
            expect(result).to.have.length(2);
            expect(result[0]).to.be('result1');
            expect(result[1]).to.be('result2');
            return result;
        }).then(function (data) {
            expect(data).to.have.length(2);
            expect(data[0]).to.be('result1');
            expect(data[1]).to.be('result2');
            done();
        });
    });
})