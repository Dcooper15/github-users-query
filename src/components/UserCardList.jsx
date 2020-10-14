import React, { useEffect, useState } from "react";


import { Card } from 'bloomer';



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