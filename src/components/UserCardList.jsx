import React, { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";
import { loadData } from "../utils/loadData";
import { Card } from 'bloomer';
import userEvent from "@testing-library/user-event";


const UserCardList = (props) => {
    const { user } = props
    return (
       <>
        
        <Card>
        <img src={user.avatar_url}/>

        </Card>

        </>

    )
};

export default UserCardList;