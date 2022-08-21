import React from 'react'

export default function Refequality() {


function parentFunction() {
    return (a, b) => a + b;
}
    
const fn1 = parentFunction();
const fn2 = parentFunction();
    
fn1(10, 10);

fn2(10, 10);
    
console.log(fn1 === fn2);

  return (
    <div>Refequality</div>
  )
}
