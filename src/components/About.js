// import User from "./User";
// import UserClass from "./UserClass";

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is the about page</h2>
//       {/* <User name={"Akalya (functional )"} /> */}
//       <UserClass name={"Akalya (class)"} location={"Coimbatore class"}/>
//     </div>
//   );
// };

// export default About;

/**
 * When it loads the class based component,
 * -it creates the instance of the class
 * -Then it calls the constructor , then it will call the render function
 * */


//================================================================================

 //making parent component as the class base componenet[parent for UserClass.js]

// import { Component } from "react";  
// import UserClass from "./UserClass";

// class About extends Component{   //we can also extends from "Componenet" instead as "React.Component"
// constructor(props){
// super(props);
// console.log("parent constructor ")
// }

// componentDidMount(){    //this method is called, once the component is completely  mounted.
//   console.log("Parent  Component Did Mount");
// }

// render(){
// console.log("Parent render ")

// return (
//     <div>
//       <h1>About</h1>
//       <h2>This is the about page</h2>
//       <UserClass name={"First (class)"} location={"Coimbatore class"}/>
//       <UserClass name={"Second  (class)"} location={"Coimbatore class"}/>

//     </div>
//   );
// }}

// export default About;

//parent constructor
//Parent render
//child constuctor
//child render


//when using the ComponentDidMount()--it calls
//parent constructor
//parent render--in this there is the child Component--It will go to the childre componente -then it will trigger the life cycle its component.
//child constructor
//child render
//child ComponnetDidMount
//then the Component has completely mounted , then the "parent CompoentDidMount()" --is called.



//.....NOTE...
// USE OF ComponentDidMount()++
//=============================
//ComponentDidMount() is used to make the api calls.
 //this method is called, once the component is completely  mounted.
 //why we use ComponentDidMount() to make api calls???
     //..

/*
when two child componnent there
=============================
parent Contructor
parent render

-first child constructor
-first child render

-second child construvtor
-second child render

< DOM UPDATED - IN SINGLE BATCH>
first ComponentDidMount()
second ComponentDidMount()

parent ComponentDidMount()
*/

/*
In the React life cycle--
there is the two phase RENDER PHASE--and --COMMIT PHASE
--after rendering the parent component
--there is the two children component with the same instance, 
--in the render phase ,  Constructor and the render  call is happening ..so it will batch the two child componenets
--then the commit phase happens for the first child , then the second child.
-
*/

/**
 -Render phase is very fast , commit phase phase takes time.   
 */



 //======================================================================================================

//github api calls

// import { Component } from "react";  
// import UserClass from "./UserClass";

// class About extends Component{  
// constructor(props){
// super(props);

// }

// componentDidMount(){    
//  // console.log("Parent  Component Did Mount");
// }

// render(){
// //console.log("Parent render ")

// return (
//     <div>
//       <h1>About</h1>
//       <h2>This is the about page</h2>
//       <UserClass name={"First (class)"} location={"Coimbatore class"}/>
//     </div>
//   );
// }}

// export default About;


//==================================================================================================

//cleaning the setInterval() in the functional componenet.

// import { Component } from "react";  
// import UserClass from "./UserClass";
// import User from "./User";

// class About extends Component{  
// constructor(props){
// super(props);

// }

// componentDidMount(){    
//  // console.log("Parent  Component Did Mount");
// }

// render(){
// //console.log("Parent render ")

// return (
//     <div>
// //       <h1>About</h1>
// //       <h2>This is the about page</h2>
// //       <User name={"First (class)"} location={"Coimbatore class"}/>
// //     </div>
//   );
// }}

// export default About;


//==============================================================================================


//github api calls---with context.

import { Component } from "react";  
import UserClass from "./UserClass";

import UserContext from "../utils/UserContext";

class About extends Component{  

constructor(props){
super(props);
}

componentDidMount(){    
 // console.log("Parent  Component Did Mount");
}

render(){
//console.log("Parent render ")

return (
    <div>
      <h1>About Me....</h1>
      <UserContext.Consumer > 
      {({loggedInUser}) => <h2 className="font-bold">{loggedInUser}</h2> }
      </UserContext.Consumer>
      
      <h2>This is the about page</h2>
      <UserClass name={"First (class)"} location={"Coimbatore class"}/>
    </div>
  );
}}

export default About;


/**
 * using the Context inside the Class based Component...hence hook is not used inside the class-based-components.
 * by using the <UserContext.Consumer >---inside this , we have the Object.[object means,we are placeing the code indide the CurlyBraces]
 * inside the Object , we have the callback function.and extracting the {loggedInUser}
 * 
 */

