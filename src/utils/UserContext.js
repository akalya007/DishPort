import { createContext } from "react";


const UserContext = createContext({
    loggedInUser : "Default user",
})


export default UserContext;


/**
 * We should not pass all the data inside the Context --(then there will be no usage of the props).
 * ONly the Data we use in Multiple purpose, we will be use the Context.Dont put all the data inside the Context 
 * We can access it anywhere. 
 * 
 * 
 * using the Context
 * ================
 * one way is--useContext in the Functional Componenets.
 * 
 */

