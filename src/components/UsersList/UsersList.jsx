import React from "react";
// import UserCard from "../UserCard/UserCard";

const UsersList = () => {
  const users = localStorage.getItem("usersList");
  const usersArray = JSON.parse(users);
  console.log(usersArray);

  // <UserCard key={`${user.name} + ${user.surname}`} name={user.name} surname={user.surname} email={user.email} country={user.country} street={user.street} postal={user.postal_code} city={user.city} />

  return (
    <div>
      {usersArray?.map((user) => {
        return (
          <div key={`${user.name}  ${user.surname}`}>
            <p>{user.name}</p>
            <p>{user.surname}</p>
            <p>{user.email}</p>
            <p>{user.country}</p>
            <p>{user.city}</p>
            <p>{user.street}</p>
            <p>{user.postal_code}</p>
          </div>
        );
      })}
    </div>
  );
};

export default UsersList;
