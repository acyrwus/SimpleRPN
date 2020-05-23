'use strict';

const max_stack = 16;

let stack = [];

const funcTable = {
    "swap" : swap,
    "add" : add,
    "minus" : minus,
    "pow" : pow,
    "mult" : mult
};

var swap = (stk) => {
    let temp = stk[0];
    stk[0] = stk[1];
    stk[1] = temp;
    return stk;
};

var mult = (stk) => {
    stk[0] = stk[0] * stk[1];
    return fixStk(stk);
};

var pow = (stk) => {
    stk[0] = Math.pow(stk[0], stk[1]);
    return fixStk(stk);
};

var fixStk = (stk) => {
    stk = swap(stk);
    stk.shift();
    return stk;
};

var add = (stk) => {
    stk[0] = stk[0] + stk[1];
    return fixStk(stk);
};

var minus = (stk) => {
    stk[0] = stk[1] - stk[0];
    return fixStk(stk);
};

var push = (stk, val) => {
    stk.push(val);
    return stk;
};

//I'm not sure if this is how you do arrow functions. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
var performOp(stk, op) => {
    //Do through funcTable

    
    return stk;
};

var input = (val) => {
    let isInt = parseInt(val);
    
    if(isNaN(isInt)) {
        //Operator
    } else {
        //Int
        push(stack, val);
    }
    

};

this.addEventListener('keypress', event => {
    switch(event.keyCode){
        case 97:    //97 is keycode for 1
            input('1');
            break;
        case 98:    //98 is keycode for 2
            input('2');
            break;
        case 99:    //99 is keycode for 3
            input('3');
            break;
        case 100:    //100 is keycode for 4
            input('4');
            break;
        case 101:    //101 is keycode for 5
            input('5');
            break;
        case 102:    //102 is keycode for 6
            input('6');
            break;
        case 103:    //103 is keycode for 7
            input('7');
            break;
        case 103:    //103 is keycode for 7
            input('7');
            break;
        case 104:    //104 is keycode for 8
            input('8');
            break;
        case 105:    //105 is keycode for 9
            input('9');
            break;
        case 107:    //107 is keycode for +
            input('+');
            break;
        case 109:    //109 is keycode for -
            input('-');
            break;
        case 106:    //106 is keycode for *
            input('*');
            break;
        case 191:    //191 is keycode for /
            input('/');
            break;
        case 13:    //13 is keycode for ENTER
            input('');
            break;
    }

});









