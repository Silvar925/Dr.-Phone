import styles from "./BasketCard.module.css"
import { QuantitySelector } from "../../shared/QuantitySelector/QuantitySelector"

import deleteIcon from "../../../assets/delete.svg"

export const BasketCard = ({ name, img, alt }) => {
    return (
        <article className={styles.card}>
            <div className={styles.container}>
                <img src={img} alt={alt} />

                <div className={styles.info}>
                    <p className={styles.name}>{name}</p>

                    <div className={styles.delete}>
                        <img src={deleteIcon} alt="delete" />
                        <p>Удалить</p>
                    </div>
                </div>
            </div>

            <div className={styles.right}>
                <QuantitySelector />
                <p>8800₽</p>
            </div>

        </article>
    )
}