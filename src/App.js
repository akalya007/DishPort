import React ,{lazy , Suspense} from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import {createBrowserRouter , RouterProvider , Outlet} from "react-router-dom"     //"createBrowserRouter" --this will create the Routing configuration for us.
//import Grocery from "./components/Grocery";
import { useState , useEffect } from "react";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
       


const Grocery = lazy(() => import("./components/Grocery"));     //NOTE
const AppLayout = () => {

const [userName , setuserName] = useState();

//authentication

useEffect(()=>{   //note 👇
  //making the api call and send the name and the information.
  const data = {
    name:"Akalya",
  }
  setuserName(data.name)
},[]);

//wrap everything inside the <UserContext.Provider>--provide the value into whole app.--overRiding the Default value of the context.
//Provider is providing the store to our app. and passing the our store as the props.
  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser: userName , setuserName}}>
    <div className="app">
      {/**if path = /  thn Body component, if path= /about then About component , if path=/contact then Contact component*/}
      <Header />
      <Outlet/>
       
    </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter ([
  {
    path:"/",
    element:<AppLayout />,
    children:[
  {
    path :"/",
    element: <Body />
  },
{
    path :"/about",
    element: <About />
  },
  {
    path :"/contact",
    element: <Contact />
  },
  {
    path :"/Restaurant/:resId",
    element: <RestaurantMenu />
  },
   {
    path :"/cart",
    element: <Cart />
  },
  {
    path :"/grocery",
    element: <Suspense fallback={<h1> Loading..........</h1>}><Grocery /> </Suspense>    //just wrap it with suspense.
  }
    ],
    errorElement:<Error />
  },
  
])   

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<AppLayout />);

root.render(<RouterProvider  router={appRouter}/>);

//NOTE
/**
 * LAZT LOADING IN Grocery---distribute my code into different chunks.
 * =======================
 * --React is fast, when it is in the Home page , it try to load the Grocery componenet, but the code was not there, so react suspended the rendering, so there will be error.
 * --To handle that there is the ..Suspend.., it is te componenet , that comes from the react library
 * 
 * OTHER_NAMES
 * =========
//chunking or
//code splitting or
//  dynamic loading , or
//Demand Loading,or 
// lazy loading  or 
// OnDemand Loading.=----initailly it should not load--when we go to that componenet , then only need to load
 */




//Lazy loading in React is a technique used to improve the performance of React applications by loading components or modules only when they are needed. This approach can significantly reduce the initial loading time of an application, especially for large-scale projects with many components. 
// The core idea behind lazy loading is to split the application's code into smaller chunks. Instead of loading all the code at once, only the necessary code for the current view is loaded initially. When a user navigates to a different part of the application, the code for that part is loaded on demand.
// React provides built-in support for lazy loading using the React.lazy() function and the Suspense component.
// React.lazy(): This function takes a dynamic import as its argument and returns a component that will be loaded lazily. The dynamic import allows you to load a module asynchronously, which is crucial for lazy loading.
// Suspense: This component is used to wrap the lazily loaded component. It allows you to specify a fallback UI that will be displayed while the component is being loaded. 


/**
 * Note😉
 * ===
 * 
 * To pass the Context Information our App--we use ContextProvider.
 * 
 * To Update the UserName form the Input box --> we can have the StateVariable(userName)--we can update from the setuserName....
 *                         but how can i call this setusername of that userName form the UI, which is in the Body componenet.
 */


  