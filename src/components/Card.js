import React from "react";
import { Link } from 'react-router-dom';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

/* card component for users*/

const Card = ({name, username, website, id }) => {
  const fullName = name.split("");
  const Initials = fullName.shift().toUpperCase();

  return (
    <>
      <div className="col-md-4 col-12 mx-auto">
          <div className="card">
            <div className="circleHeader">
            <h1 className="card-title">{Initials}</h1>
            </div>
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text"><AlternateEmailIcon />{username}</p>
              <p className="card-text email">http://{website}</p>
              <Link to={`/users/${id}`}>
                <button className="btn btn-sm btn-dark">MORE DETAILS</button>
              </Link>
            </div>
            
          </div>
      </div>
    </>
  );
};

export default Card;
