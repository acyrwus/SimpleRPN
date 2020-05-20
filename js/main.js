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

this.addEventListener('keypress', event => {
  if (event.keyCode == 13) {
    alert('hi.')
  }
})

