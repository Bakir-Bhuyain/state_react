import { useEffect, useState } from "react";
import User from './User'

export default function Users() {
      const [users, setUsers] = useState([]);
      useEffect(() => {
            const fetchData = async () => {
                  const res = await fetch('https://jsonplaceholder.typicode.com/users');
                  const data = await res.json();
                  setUsers(data)
            };
            fetchData();
      }, [])
      return (
            <div>
                  <h3>Hello from use</h3>
                  <h4>Name: {users.length}</h4>
                  {
                        users.map(users => <User user={users} key={users.id}></User>)
                  }
                  <p>UserName: </p>
                  <p>Email: </p>
            </div>
      )
}