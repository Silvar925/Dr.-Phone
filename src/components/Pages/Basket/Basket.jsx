import styles from "./Basket.module.css"
import { WhiteBox } from "../../shared/WhiteBox/WhiteBox"
import { BasketCard } from "../../widgets/BasketCard/BasketCard"
import { GetProduct } from "../../widgets/GetProduct/GetProduct"

export const Basket = () => {
    return (
        <section className={styles.container}>
            <WhiteBox className={styles.basket} style={{ padding: '28px 60px' }}>
                <div className={styles.title}>
                    <h1>Корзина</h1>
                </div>


                <ul className={styles.list}>
                    <BasketCard name="Apple iPhone 15 128Gb SIM + SIM Черный" img="ProductImages/Border.png" alt="#" />
                    <BasketCard name="Apple iPhone 15 128Gb SIM + SIM Черный" img="ProductImages/Border.png" alt="#" />
                    <BasketCard name="Apple iPhone 15 128Gb SIM + SIM Черный" img="ProductImages/Border.png" alt="#" />
                    <BasketCard name="Apple iPhone 15 128Gb SIM + SIM Черный" img="ProductImages/Border.png" alt="#" />
                </ul>
            </WhiteBox>

            <div>
                <GetProduct />
            </div>

        </section>
    )
}