import { Link } from "react-router-dom"
import styles from "./Сorners.module.css"

export const Сorners = ({ img, alt, style, onClick }) => {
    return (
        <div className={styles.corners} style={{ ...style }} onClick={onClick}>
            <img src={img} alt={alt} />
        </div>
    )
}