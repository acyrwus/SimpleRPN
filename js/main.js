'use strict';

const max_stack = 16;

let stack = [];

//Stack Needs to be init with 0's
(function iife() {
    stack = new Array(max_stack).fill(0);
})()

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

var push = (stk) => {
    stk.unshift(0)
};

const funcTable = {
    "swap" : swap,
    "+" : add,
    "-" : minus,
    "^" : pow,
    "*" : mult,
    "enter" : push
};

var append = (stk, val) => {
    stk[0] = stk[0] + '' + val
    return stk;
};


var performOp = (stk, op) => {
    //Do through funcTable
    stk = funcTable[op](stk);
    
    return stk;
};

var syncStack = (stk) => {
    //TODO(Richie): use querySelector to match the 3 the contents of stack
    //with the dom. Go by id, they should be defined "stk-0", "stk-1".. , already.
    
};


//Update stack based on input
//Sync the dom with stack
var input = (val) => {
    
    let isInt = parseInt(val);
        
    if(isNaN(isInt)) {
        //Operator
        stack = performOp(stack, val);
    } else {
        //Int
        stack = append(stack, val);
    }
    syncStack(stack);

};



this.addEventListener('keypress', event => {
    
    //Switch on KeyCode
    switch(event.keyCode){
        case 49:    //97 is keycode for 1
            input('1');
            break;
        case 50:    //98 is keycode for 2
            input('2');
            break;
        case 51:    //99 is keycode for 3
            input('3');
            break;
        case 52:    //100 is keycode for 4
            input('4');
            break;
        case 53:    //101 is keycode for 5
            input('5');
            break;
        case 54:    //102 is keycode for 6
            input('6');
            break;
        case 55:    //103 is keycode for 7
            input('7');
            break;
        case 56:    //104 is keycode for 8
            input('8');
            break;
        case 57:    //105 is keycode for 9
            input('9');
            break;
        case 43:    //107 is keycode for +
            input('+');
            break;
        case 45:    //109 is keycode for -
            input('-');
            break;
        case 42:    //106 is keycode for *
            input('*');
            break;
        case 47:    //191 is keycode for /
            input('/');
            break;
        case 13:    //13 is keycode for ENTER
            input("enter");
            break;
    }

});









