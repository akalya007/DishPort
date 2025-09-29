
//Using props in the class componenets.

// import React from 'react';


// class UserClass extends React.Component{
// constructor(props){
//  super(props);               //definitely what to use super(props) to use this.props
// }
// render(){
//     const {name , location } = this.props;
//     return(
//         <div className='user-card'>
//         <h2>Name : {name}</h2>
//         <h3> Location : {location}</h3>
//         <h3> Contact : akalyad007 </h3>
//         </div>
//     )
// }
// }

// export default UserClass;

//=================================================================================================================
// { State Variable } inside the class based components.
//=====================================================

// import React from 'react';


// class UserClass extends React.Component{
// constructor(props){
//  super(props); 
 
// this.state = {     //this.state variable is the Object which container all the state variable" that will create.
//   count : 0,
//   count2 : 2
//  }
// }
// render(){
//     const {name , location } = this.props;   //destructing
//     const {count , count2} =this.state;

//     return(
//         <div className='user-card'>
//         <h1>Count : {count}</h1>
//         <h1>Count2 : {count2}</h1>
//         <h2>Name :  {name}</h2>
//         <h3> Location : {location}</h3>
//         <h3> Contact : akalyad007 </h3>
//         </div>
//     )
// }
// }

// export default UserClass;


//===========================================================================================

//updating the state variable

// import React from 'react';


// class UserClass extends React.Component{
// constructor(props){
//  super(props); 
 
// this.state = {     
//   count : 0,
//  }
//  console.log( this.props.name , "child constructor ")

// }

// componentDidMount(){
//   console.log( this.props.name , " Child Component Did Mount");
// }


// render(){
//     const {name , location } = this.props;   //destructing
//     const {count , count2} =this.state;

//     console.log(this.props.name,"child render ")

//     return(
//         <div className='user-card'>
//         <h1>Count : {count}</h1>
//         <button onClick={()=>{
//             //this.state.count=this.state.count + 1;   //DO NOY UPDATE THE STATE VARIABLE DIRECTLY(by having the equal to symbol)
//             this.setState({                //this.setState()--has the object --we can have increment.--on every increment , it will re-render the component.--[how it works behind--if there count1 is in the setState--then only it will update the count1 State variable in that object, it will only update the variable , which is passed in the setState.} 
//                 count: this.state.count + 1
//             })
//         }} >
//       Count Increment
//         </button>
//         <h2>Name :  {name}</h2>
//         <h3> Location : {location}</h3>
//         <h3> Contact : akalyad007 </h3>
//         </div>
//     )
// }
// }

// export default UserClass;



/**
 * ......NOTE.......IMPORTANT.....
 * In React class components, super(props) is essential within the constructor because it //--initiates the Parent Classm ====> React.Component*,
 *  ensuring the component is correctly initialized and allows access to this.props. 
 * This is particularly important for inheriting methods from React.Component and utilizing props passed from the parent. 
 */

/**
 * Loading the class based components--->it means creating new the instance of the class and giving some props ,then thn constructor in called--and there is the best place to create the state variables.
 * ==================================
 */





//============================================================================================================================

//GITHUB API CALLS---origi

import React from 'react';

class UserClass extends React.Component{
constructor(props){
 super(props); 

 this.state = {
    userInfo : {
        name :"Dummy",
        location : "Default"
    }
 }
}

// making api calls
async componentDidMount(){
    const data = await fetch(" https://api.github.com/users/akalya007");
    const json = await data.json();
    console.log(json);

    this.setState({    //setState() triggers another render (→ update phase).
        userInfo:json
    })
}

componentDidUpdate(){
    console.log("Component Did Update")
}

componentWillUnmount(){     //this will called when the componnet will unmount(like when changing another Component(changing another page))
    console.log("Component will unmount")
}

render(){
    const {name , location  , avatar_url } = this.state.userInfo;   
    return(
        <div className='user-card'>
       <img src={avatar_url} />
        <h2>Name :  {name}</h2>
        <h3> Location : {location}</h3>
        <h3> Contact : akalyad007 </h3>
        </div>
    )
}
}

export default UserClass;


// /**
//  * 
//  * ----MOUNTING
//  * Constructor (dummy)
//  * render(dummy)
//  *       <HTML page is render with the dummy data>
//  * Component Did Mount
//  *        <API call > 
//  *         <this.setState>  --> State variable is updated
//  * 
//  * -----UPDATED
//  *        
//  *           Rendering with the API data
//  *            render(API data)
//  *          <HTML (new API DATA)>
//  * 
//  * ComponenetDid Update.
//  * 
//  *
//  */




// /**
//  * 
//  * After every first reder--componentDidMount is called
//  * after every sun sequence render--it is updated
//  */

/**
 * 3️⃣ Why “after mounting” is important
Before mounting, the DOM elements don’t exist yet — if you try to manipulate them, you’ll get null or an error.

By the time componentDidMount runs:

The DOM nodes are ready.

The component is fully live on the screen.
 */



//==========================================================================================================================================

// import React from 'react';

// class UserClass extends React.Component{
// constructor(props){
//  super(props); 

//  this.state = {
//     userInfo : {
//         name :"Dummy",
//         location : "Default"
//     }
//  }
// }

// //making api calls
// async componentDidMount(){
//     const data = await fetch(" https://api.github.com/users/akalya007");
//     const json = await data.json();
//     console.log(json);

//     this.setState({
//         userInfo:json
//     })
// }

// componentDidUpdate(prevProps , prevState){
//     if(this.state.count !== prevState.count ){
//         //code
//     }
//     //when whant to do something other for count 2 , we wnat to do another if Condition , otherewise put it in the same if conditions.
//     if( this.state.count2 !== prevState.count2){
//         //code
//     }
//     console.log("Component Did Update")
// }

// componentWillUnmount(){     //this will called when the componnet will unmount(like when changing another Component(changing another page))
//     console.log("Component will unmount")
// }

// render(){
//     const {name , location  , avatar_url } = this.state.userInfo;   
//     return(
//         <div className='user-card'>
//        <img src={avatar_url} />
//         <h2>Name :  {name}</h2>
//         <h3> Location : {location}</h3>
//         <h3> Contact : akalyad007 </h3>
//         </div>
//     )
// }
// }

// export default UserClass;



/**
 * Usecage of ComponentWillUnmount()--
 * --it is called when the component change
 * - Perform any necessary cleanup in this method, 
 * such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount() .
 * --we can make the scable application by including this thing.
 * 
 * 
 */




//===========================================================================================


//Usage of ComponenetWillUnmount()

// import React from 'react';

// class UserClass extends React.Component{

// constructor(props){
//  super(props); 

//  this.state = {
//     userInfo : {
//         name :"Dummy",
//         location : "Default"
//     }
//  }
// }

//  componentDidMount(){
//  this.timer=setInterval(()=>{    //we have this interval here, we should clean up in the ComponenetWillUnmount()
//     console.log("Namate react op")
//  } , 1000);
// }

// componentDidUpdate(prevProps , prevState){
//     if(this.state.count !== prevState.count ){
//         //code
//     }
//     //when whant to do something other for count 2 , we wnat to do another if Condition , otherewise put it in the same if conditions.
//     if( this.state.count2 !== prevState.count2){
//         //code
//     }
//     console.log("Component Did Update")
// }

// componentWillUnmount(){     //this will called when the componnet will unmount(like when changing another Component(changing another page))
//     clearInterval(this.timer);
//     console.log("Component will unmount")
// }

// render(){
//     const {name , location  , avatar_url } = this.state.userInfo;   
//     return(
//         <div className='user-card'>
//        <img src={avatar_url} />
//         <h2>Name :  {name}</h2>
//         <h3> Location : {location}</h3>
//         <h3> Contact : akalyad007 </h3>
//          </div>
//     )
// }
// }

// export default UserClass;



