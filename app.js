var Value1 = '';
var Value2 = '';
var Result;
var Operator = undefined;
var Output = document.getElementById('output_value')

function getValue(value) {

    function OutputValue1() {
        Value1 += value
        Output.innerHTML = Value1
    }

    function OutputValue2() {
        Value2 += value
        Output.innerHTML = Value2
    }

    if (value == '+') {
        Operator = '+'
    }
    else if (value == '-') {
        Operator = '-'
    }
    else if (value == '/') {
        Operator = '/'
    }
    else if (value == '*') {
        Operator = '*'
    }
    else if (value == 'AC') {
        Operator = 'AC'
        Value1 = '';
        Value2 = '';
        Output.innerText = 0;
    }
    else if (value == '=') {
        if (Operator == '+') {
            Result = +Value1 + +Value2
            Output.innerText = Result
            Operator = undefined
            Value1 = Result
            Value2 = ''
        }
        else if (Operator == '*') {
            Result = +Value1 * +Value2
            Output.innerText = Result
            Operator = undefined
            Value1 = Result
            Value2 = ''
        }
        else if (Operator == '/') {
            Result = +Value1 / +Value2
            Output.innerText = Result
            Operator = undefined
            Value1 = Result
            Value2 = ''
        }
        else if (Operator == '-') {
            Result = +Value1 - +Value2
            Output.innerText = Result
            Operator = undefined
            Value1 = Result
            Value2 = ''
        }
       }   else {
        { Operator == undefined ? OutputValue1() : OutputValue2() }
    }
}