import React, { useEffect, useState } from "react";
import {
    useParams
  } from 'react-router-dom';

import { loadData } from "../utils/loadData";




const UserProfile = props => {
    const users = props;
    const { userName } = useParams();
    const [repoData, setUsers] = useState([]);
   


    useEffect(() => {
        (async function(){
            const repoData = await loadData(
                `https://api.github.com/users/${userName}/repos`);
              setUsers(repoData);
        })();
    }, [setUsers, userName]);

    return (
        <>
        
        
        {repoData.map((repo) => {
            
                return (
            
                    <li key={repo.id}>{repo.name}</li>
                   
                 
                
                );
            
                })}
            
         
        

        </>
    )
}




export default UserProfile;