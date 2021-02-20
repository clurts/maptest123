import { useState, useEffect } from "react";
import axios from "axios"

const Users = () => {
    const [users, setUsers] = useState(null);

    useEffect(() => { 
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                console.log(res)
                setUsers(res.data)
            })
    }, []);


    return ( 
    <ul>
        {users?.map(user => <li key={user.id}>{user.name}</li>)}
    </ul> 
    );
}
 
export default Users;