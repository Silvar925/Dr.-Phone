import styles from "./Home.module.css"

export const Home = () => {
    return (
        <section className={styles.container}>
            <div className={styles.left}>
                <div className={styles.textList}>
                    <div className={styles.temp}>
                        <img src="interfaceIcons/truck.svg" alt="#" />
                        <p>Доставка по России</p>
                    </div>

                    <div className={styles.temp}>
                        <img src="interfaceIcons/monitor.svg" alt="#" />
                        <p>Доставка по России</p>
                    </div>

                    <div className={styles.temp}>
                        <img src="interfaceIcons/phone.svg" alt="#" />
                        <p>Доставка по России</p>
                    </div>
                </div>

                {/* <div className={styles.stocksBox}>
                    <img src="stocks.png" alt="stock" />
                    <div className={styles.stocksText}>
                        <p>Акции</p>
                        <hr />
                        <p>При покупке телефона чехол и броня в подарок</p>

                    </div>
                </div> */}
            </div>

            <div>
                <h1>Центр</h1>

            </div>

        </section>
    )
}