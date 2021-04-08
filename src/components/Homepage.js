import React, { useEffect, useState } from 'react';
import axios from 'axios';


import Card from './Card';

const Homepage= ()=> {
  const [users , setUsers] = useState([]);
  
  /*Data fetch from Api */

  useEffect(() => {
    axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(response=>{
      setUsers(response.data);
    })
    .catch(error=>{
      console.log(error);
    })
  }, [])

  
  return (
    
    <>
    <div className="my-5">
        <h1 className="text-center">Our Users</h1>
      </div>
      <div className="container-fluid mb-5 text-center">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {users.map(user => (
                  <Card 
                    key={user.id}
                    name={user.name} 
                    username={user.username} 
                    website={user.website} 
                    id={user.id}
                />
              ))
            }
            </div>
          </div>
        </div>
      </div>
      </>
  );
}

export default Homepage;
