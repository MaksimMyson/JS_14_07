// function fnA (a, b, callBack) {
//     console.log(a, b);
//     console.log(callBack(a, b));
// }

// function fnB ( c, q) {
//     return c + q;

// }

 

// fnA(12, 4, fnB);
// console.log(fnB(6,5));


//setTimeout
// function callBack() {
//     console.log("  В середені CallBack через 5 секунд");
// }

// setTimeout(callBack, 5000);
// console.log("  Після CallBack через 5 секунд");


function onGetPositionSuccess(position) {
    console.log("Це виклик onGetPositionSuccess");
    console.log(position);
}

function onGetPositionError(error) {
    console.log("Це виклик onGetPositionError");
    console.log(error);
}

window.navigator.geolocation.getCurrentPosition(onGetPositionSuccess, onGetPositionError);