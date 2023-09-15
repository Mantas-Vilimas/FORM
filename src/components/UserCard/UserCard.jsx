import React from "react";
import styles from "./UserCard.module.css"

const UserCard = ({name, surname, email, country, city, street, postal} ) => {
    return <div className={styles.card}>
        <p>{name}</p>
        <p>{surname}</p>
        <p>{email}</p>
        <p>{country}</p>
        <p>{street}</p>
        <p>{postal}</p>
        <p>{city}</p>
    </div>
}

export default UserCard