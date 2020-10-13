
import React, { useEffect, useState } from "react";
import { loadData } from "../utils/loadData";





const SearchForm = props => {
    const [users, setUsers] = useState([])
    
   useEffect(() => {
        (async function(){
            const users = await loadData(
                `https://api.github.com/users`
              );
              setUsers(users);
        })();
    }, [setUsers]);

    // _handleClick = () => {
    //     const { text } = this.state;
    //     const addUser = "I am new user"
    //     this.setState({
    //         userDisplay: addUser,
    //     });
    // };

    // const [users, setUsers] = useState([]);

   
  
    return (
        <>
              <h1>Github Users</h1>
          
            <ul>
                {users.map((user) => {
                return (
                  <p key={user.id}>
                      {user.login} {user.avatar_url}
                      
                  </p>
                );
                })}
            </ul>
        </>
      );
 };



    



export default SearchForm;