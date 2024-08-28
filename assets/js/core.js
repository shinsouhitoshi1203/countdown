function countdownStart(num) {
    console.log(num);
    countdownRecuring(num,
        function (e) {
            console.log(e);
        }, 
        function (e="ok") {
            console.log(e);
        }
    );
}

function countdownRecuring(num, handlerDisplay,handlerDone) {
    if (num == 0) {
        setTimeout(handlerDone,1000);
        return -1;
    };

    function wait(order){
        return new Promise (
            function (resolve) {
                setTimeout(()=>{
                    resolve(order);
                },1000)
            }
        )
    }

    wait(num)
        .then(
            function (num) {
                handlerDisplay(num-1);
                return countdownRecuring(num-1,handlerDisplay,handlerDone);
            }
        );    
}

function confirmChange() {

}