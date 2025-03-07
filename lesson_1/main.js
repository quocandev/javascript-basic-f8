function writeLog(message, message2) {
    console.log(message);
    console.log(message2);
}

writeLog('Test', 'Test2')

function writeLog2() {
    var a = '';
    for (var param of arguments) {
        a += `${param} - `
    }

    console.log(a);

}

writeLog2('Test3', 'Test4')