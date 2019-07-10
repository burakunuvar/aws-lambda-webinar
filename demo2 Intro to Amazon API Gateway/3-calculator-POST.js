console.log('Loading the Calc function');

exports.handler = function(event, context, callback) {
    console.log('Received event:', JSON.stringify(event, null, 2));
    if (event.num1 === undefined || event.num2 === undefined || event.operator === undefined) {
        callback("400 Invalid Input");
    }

    var res = {};
    res.num1 = Number(event.num1);
    res.num2 = Number(event.num2);
    res.operator = event.operator;

    if (isNaN(event.num1) || isNaN(event.num2)) {
        callback("400 Invalid Operand");
    }

    switch(event.operator)
    {
        case "+":
        case "add":
            res.num3 = res.num1 + res.num2;
            break;
        case "-":
        case "sub":
            res.num3 = res.num1 - res.num2;
            break;
        case "*":
        case "mul":
            res.num3 = res.num1 * res.num2;
            break;
        case "/":
        case "div":
            res.num3 = res.num2===0 ? NaN : Number(event.num1) / Number(event.num2);
            break;
        default:
            callback("400 Invalid Operator");
            break;
    }
    callback(null, res);
};
