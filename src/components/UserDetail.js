import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

/* material ui import*/
import PersonIcon from '@material-ui/icons/Person';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import BusinessIcon from '@material-ui/icons/Business';
import LanguageIcon from '@material-ui/icons/Language';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import StreetviewIcon from '@material-ui/icons/Streetview';
import ApartmentIcon from '@material-ui/icons/Apartment';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import PostAddIcon from '@material-ui/icons/PostAdd';


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
    
    
        
      <div className="details">
        <h5>User Details</h5>
          
        <p><PersonIcon />  {user.name}</p>
        <p><AccountCircleIcon/>  {user.username}</p>
        <p><MailIcon/>   {user.email}</p>
        <p><PhoneIcon/>  {user.phone}</p>
        <p><BusinessIcon />  {user.company.name}</p>
        <p><LanguageIcon/>  {user.website}</p>
        <p><EmojiTransportationIcon/>  </p>
        <ul>
          <li><StreetviewIcon/> {user.address.street}</li><br/>
          <li><ApartmentIcon/> {user.address.suite}</li><br/>
          <li><LocationCityIcon/> {user.address.city}</li><br/>
          <li><PostAddIcon/> {user.address.zipcode}</li>
        </ul>
        <div className="button">
        <Link to="/">
          <button class="myButton">Back</button>
        </Link>
        </div>
      </div>
    
  ) : (
    <div>loading</div>
  );
};

export default UserDetail;
