import React from 'react';
import App from './App.css';
import ProfilePhoto from './profile/ProfilPhoto'
import FullName from './profile/FullName'
import Address from './profile/Address'
import './style.css';


function Main() {
  return (
    <div className="style">
      <ProfilePhoto/>
      <FullName />
      <Address />
    </div>
  );
}

export default Main;
