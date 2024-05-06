import styles from "./QuantitySelector.module.css"

export const QuantitySelector = () => {
    return (
        <div className={styles.selector}>
            <div className={styles.temp}><img src="minus.svg" alt="minus" /></div>
            <p>1</p>
            <div className={styles.temp}><img src="plus.svg" alt="plus" /></div>
        </div>
    )
}