
import {sum } from "../sum";

test("Sum function calculate the sum of two numbers" , ()=>{
   const result = sum(3 , 4);
   
  
   expect(result).toBe(7);     // this line is Assertion
})



//test() function , that takes two arguments , fiest is he description for the test ,  second parameter is actual code for testing.