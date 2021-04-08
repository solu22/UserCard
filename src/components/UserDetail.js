import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import RemoveIcon from '@material-ui/icons/Remove';
import axios from "axios";

/*single user details page, fetching apis and displaying details */

const UserDetail = () => {
  const { id } = useParams();
  console.log("hello", useParams());
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return user ? (
    
    <div className="container">
        <h5>User Details</h5>
      <div className="details">
          
        <p><RemoveIcon/> name: {user.name}</p>
        <p><RemoveIcon/> username: {user.username}</p>
        <p><RemoveIcon/> email: {user.email}</p>
        <p><RemoveIcon/>phone: {user.phone}</p>
        <p><RemoveIcon/>company: {user.company.name}</p>
        <p><RemoveIcon/>website: {user.website}</p>
        <p><RemoveIcon/>address: </p>
        <ul>
          <li>{user.address.street}</li><br/>
          <li>{user.address.suite}</li><br/>
          <li>{user.address.city}</li><br/>
          <li>{user.address.zipcode}</li>
        </ul>
        <div className="button">
        <Link to="/">
          <button class="myButton">Back</button>
        </Link>
        </div>
      </div>
    </div>
  ) : (
    <div>loading</div>
  );
};

export default UserDetail;
