 
 /**
  * <div id="parent">
  * <div id ="child 1">
  *     <h2>Hi hello head1</h2>
  *      <h3>Hi hello head1</h3>
  *  </div>
  *   <div id ="child 2">
  *     <h2>Hi hello head1</h2>
  *      <h3>Hi hello head1</h3>
  *  </div>
  * </div>
  * 
  * 
  */
//  import React  from "react";
//  import ReactDOM from "react-dom";

//  const parent = React.createElement("div" , {id : "parent"}, [
//     React.createElement("div" , { id:"child"} , [
//         React.createElement("h1" ,{}, "I am an h1 tag"),
//         React.createElement("h2" ,{}, "I am an h1 tag"),
//     ]),
//      React.createElement("div" , { id:"child2"} , [
//         React.createElement("h1" ,{}, "I am an h1 tag"),
//         React.createElement("h2" ,{}, "I am an h1 tag"),
//     ]),
//  ]
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);


//  const  heading = React.createElement("h1" ,{} , "Hello world from React");       //Recat.createElement--actually craete the js object.--1st argu--what typr of tag--2nd arg--attributes(object)--3rd arg--children or , what content need in the tag.
//     cons t root1 = ReactDOM.createRoot(document.getElementById("root"));    //creating the root for putting the h1 element into the browser.
//     root.render(heading);   //this render method will convert the js object to the the h1 tag. (Object to html elements)

//Note==>
    //React is a JavaScript library for building user interfaces,
    // while ReactDOM is a library that bridges React to the browser's DOM. 
    // React focuses on describing the UI using components,
    //  and ReactDOM is responsible for rendering these components into the actual DOM. 

//==============================================================================================


//  import React  from "react";
//  import ReactDOM from "react-dom/client";

//  const jsxheading = <h1>React heading using the jsx</h1>
//  const root = ReactDOM.createRoot(document.getElementById("root"));
//  root.render(jsxheading);



 //=========================================================

 
  import React  from "react";
  import ReactDOM from "react-dom/client";
 
  //jsx--Babel transpiles it to the react Element , ans=d it is render to the html element.
  const Jsxheading = () => (
  <h1 className="head" tabIndex="1">
     React heading using the jsx 😀
     </h1>)   //note1 
 
 const numb = 1000;
 //React Component
 const HeadingComponent = () =>(//we can write any Javascript code inside JSX --by writing the code inside the curly braces {}.
     <div>
      <h1> hello world from the functional headingComponent</h1>
      <h3> { numb }</h3>   
           <Jsxheading />
           {Jsxheading()}  //we can also do like this--hence react component id the javascript function
     </div>
 );
 
  const root = ReactDOM.createRoot(document.getElementById("root"));
  //root.render(jsxheading);
 
  root.render(<HeadingComponent />)
 
 
 
 
 
 
 
 
  /**
   * NOTES
   * =====
   *1-  in the HTML = we will give only the "class" attribute--but in the jsx need to give "className" for the attribute.
   * In jsx--the attributes should be in camal case 
   *  For multi line jsx, use it within the ()-parenthenthis, for single line jsx no need.
   * 
   * # jsx takes care about the injection attacks. whenevr the js data is wrapped inside the curly braces , jsx will not blindly  trust , it will sanitizes the data what ever is comming then it will pass it.   
   * # jsx will prevent the Cross Site scripting .
   * jsx is making much more readable tha read.
   * 
   * 
   * 2. React Component is the Javascript function , it return the jsx, when there  is one line , return it , otherwise no need.
   */