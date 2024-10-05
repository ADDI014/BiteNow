
import {createContext} from 'react';
//UserContext to allow dynamic updates
const UserContext = createContext({
     loggedInUser : null, //By default , no user is logged in
     setUserName : () => {},   //placeholder for updating the user name
})

export default UserContext;

