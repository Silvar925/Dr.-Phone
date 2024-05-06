import { Button } from "../../shared/Button/Button"
import styles from "./ProductCard.module.css"

export const ProductCard = ({ img, alt, name, price, url }) => {
    return (
        <div className={styles.card}>
            <img src={img} alt={alt} />

            <div className={styles.cardInfo}>
                <div className={styles.textBox}>
                    <p className={styles.name}>{name}</p>

                    <p className={styles.price}>
                        <span style={{ textDecoration: 'line-through' }}>{price[0]}</span>
                        <span>{price[1]}</span>
                    </p>
                </div>

                <Button name="Купить" url={url} />

            </div>
        </div>
    )
}