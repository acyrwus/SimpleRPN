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

var performOp(stk, op) => {
    //Do through funcTable
    
    return stk;
}

var input = (val) => {
    let isInt = parseInt(val);
    
    if(isNaN(isInt)) {
        //Operator
    } else {
        //Int
        push(stack, val);
    }
    
    return;
};

this.addEventListener('keypress', event => {
    switch(event.keyCode){
        case 97:    //97 is keycode for 1
            input('1');
            break;
        
    }

})

