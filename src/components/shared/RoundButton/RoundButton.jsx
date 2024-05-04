import styles from "./RoundButton.module.css"

export const RoundButton = ({ img, alt }) => {
    return (
        <div className={styles.button}>
            <img src={img} alt={alt} />
        </div>
    )
}