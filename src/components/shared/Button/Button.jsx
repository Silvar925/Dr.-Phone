import styles from "./Button.module.css"

export const Button = ({ name, style }) => {
    return (
        <button className={styles.button} style={{ ...style }}>{name}</button>
    )
}