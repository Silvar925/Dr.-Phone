import { Link } from "react-router-dom"
import styles from "./Сorners.module.css"

export const Сorners = ({ img, alt, style, onClick, className }) => {
    return (
        <div className={`${styles.corners} ${className}`} style={{ ...style }} onClick={onClick}>
            <img src={img} alt={alt} />
        </div>
    )
}