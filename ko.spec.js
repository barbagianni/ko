describe('ko', function(){
    this.timeout(500);

    it('waits for a long running task', function(done){
        function longRunningTask(result) {
            return new Promise(function (resolve) {
                setTimeout(resolve.bind(null, result), 20);
            });
        }

        ko(function* () {
            var result = yield longRunningTask('result');
            expect(result).to.be('result');
            return result;
        }).then(function (data) {
            expect(data).to.be('result');
            done();
        });
        setTimeout(done, 300);
    });
})