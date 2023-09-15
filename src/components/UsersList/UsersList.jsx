import React from "react";
import UserCard from "../UserCard/UserCard";
import styles from "./UsersList.module.css"


const UsersList = () => {
  const users = localStorage.getItem("usersList");
  const usersArray = JSON.parse(users);
  console.log(usersArray);

  const randomNumber = Math.floor(Math.random() * 10000)
 

  return (
    <div className={styles.container}>
      
      {usersArray?.map((user) => {
        return (
          <div key={`${randomNumber}`} >
            <UserCard key={`${user.name} + ${user.surname}`} name={user.name} surname={user.surname} email={user.email} country={user.country} street={user.street} postal={user.postal_code} city={user.city} />
          </div>
        );
      })}
    </div>
  );
};

export default UsersList;
