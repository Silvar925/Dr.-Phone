import styles from "./Сorners.module.css"

export const Сorners = ({ img, alt, style }) => {
    return (
        <div className={styles.corners} style={{ ...style }}>
            <img src={img} alt={alt} />
        </div>
    )
}