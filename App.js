 
 
 const  heading = React.createElement("h1" ,{} , "Hello world from React");       //Recat.createElement--actually craete the js object.--1st argu--what typr of tag--2nd arg--attributes(object)--3rd arg--chuldren or , what content need in the tag.
    const root = ReactDOM.createRoot(document.getElementById("root"));    //reating the root for putting the h1 element into the browser.
    root.render(heading);   //this render method will convert the js object to the the h1 tag. 