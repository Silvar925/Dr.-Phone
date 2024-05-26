import { useState } from "react"
import styles from "./ServiceCard.module.css"
import { Link } from "react-router-dom"


export const ServiceCard = ({ img, alt, name, style, url }) => {
    return (
        <Link to={url} className={`${styles.card}`} style={{ ...style }}>
            <img src={img} alt={alt} />
            <p>{name}</p>
        </Link>
    )
}
