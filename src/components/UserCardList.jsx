import React, { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";
import { loadData } from "../utils/loadData";


const UserCardList = (props) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        (async function(){
            const users = await loadData(
                `https://api.github.com/users`
              );
              setUsers(users);
        })();
    }, [setUsers]);
   

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

export default UserCardList;