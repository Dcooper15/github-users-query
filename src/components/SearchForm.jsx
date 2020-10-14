import React, { Component } from "react";

import UserProfile from "./UserProfile";
import {
    Link,
    Route,
  } from 'react-router-dom';



class SearchForm extends Component {
    state = {
        userName: '',
        users: []
    };

    loadData = async (userName) => {
        const response = await fetch(`https://api.github.com/users/${this.state.userName}`);
        const data = await response.json();
        console.log(data);
        return data;
    };
    
    
   

    _handleSubmit = async(event) => {
        event.preventDefault();
        const { userName } = this.state;
        const users = await this.loadData(userName);
        this.setState({
            users: [...this.state.users, users],
        });
    };

    _handleChange = userName => {
        this.setState({
            userName: userName,
          
        });
    };
    

   
    render() {
        const { users } = this.state;
    return (
        <>
            <Route exact path="/">
              <h1>Github Users</h1>
            
            <form onSubmit={this._handleSubmit}>
            <label>Enter userName
                <input type="text" onChange={(event) => this._handleChange(event.target.value)}/>
            </label>
                {users.map((user) => {
                return (
                
                  <p key={user.id}>
                    <Link to={`/users/${user.login}`}>{user.login}</Link> <img src={user.avatar_url}/>
                      
                  </p>
            
                );
                })}
                
            
             <button type="submit">Add User</button>
            </form>
            </Route>
            <Route path="/users/:userName">
                <UserProfile />
            </Route>

        </>
      );
 };
}


    



export default SearchForm;