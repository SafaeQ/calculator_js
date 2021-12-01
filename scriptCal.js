let input = document.querySelector("#textview");
// let number = document.querySelectorAll('.number');
let result = 0;

let operation = ["", null, ""];
// let input = document.form.textview.value;
let history = [];

function operator(op) {
    operation[1] = op;
    console.log(operation);

    // if (operation[0] == "" && history.length > 0) {
    //     operation[0] = history

    // }
}

function insert(number) {
    if (operation[1] == null) {
        operation[0] += "" + number;
        input.value = operation[0];
    } else {
        operation[2] += "" + number;
        input.value = operation[2];
    }

    console.log(operation);
}

function equal() {
    if (!(operation[0] == "" || operation[2] == "" || operation[1] == null)) {
        switch (operation[1]) {
            case "*":
                result = parseFloat(operation[0]) * parseFloat(operation[2]);
                break;
            case "/":
                if (parseFloat(operation[0]) == 0 || parseFloat(operation[0]) == 0) {
                    result = "Cannot devide by zero";
                    break;
                }
                result = parseFloat(operation[0]) / parseFloat(operation[2]);
                break;
            case "+":
                result = parseFloat(operation[0]) + parseFloat(operation[2]);
                break;
            case "-":
                result = parseFloat(operation[0]) - parseFloat(operation[2]);
                break;
            case "%":
                result = parseFloat(operation[0]) % parseFloat(operation[2]);
                break;
            default:
                break;
        }
        input.value = result;
        operation[0] = "";
        operation[1] = null;
        operation[2] = "";
    } else {
        input.value = "ERROR!!!";
    }
}

function clearHitory() {
    input.value = "";
    operation = ["", null, ""];
    console.log({
        operation: operation,
    });
}
// // console.log(clear());