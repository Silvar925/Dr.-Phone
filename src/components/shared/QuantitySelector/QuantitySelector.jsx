import styles from "./QuantitySelector.module.css"

import minus from "../../../assets/minus.svg"
import plus from "../../../assets/plus.svg"


export const QuantitySelector = () => {
    return (
        <div className={styles.selector}>
            <div className={styles.temp}><img src={minus} alt="minus" /></div>
            <p>1</p>
            <div className={styles.temp}><img src={plus} alt="plus" /></div>
        </div>
    )
}