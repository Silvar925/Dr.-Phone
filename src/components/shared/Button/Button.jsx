import styles from "./Button.module.css"
import { Link } from "react-router-dom"

export const Button = ({ name, style, url }) => {
    return (
        <Link to={url} className={styles.button} style={{ ...style }}>{name}</Link>
    )
}