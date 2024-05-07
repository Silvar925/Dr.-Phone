import styles from "./Product.module.css"
import { useLocation } from "react-router-dom"
import { ProductFilter } from "../../shared/ProductFilter/ProductFilter"
import { getStringFromRight } from "../../helpers"
import { phones } from "../../data"
import { WhiteBox } from "../../shared/WhiteBox/WhiteBox"
import { Button } from "../../shared/Button/Button"
import { GetProduct } from "../../widgets/GetProduct/GetProduct"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const Product = () => {
    const location = useLocation().pathname
    let producetID = getStringFromRight(location)

    let product;

    for (let phone in phones) {
        if (producetID === phones[phone].id) {
            product = phones[phone]
        }
    }

    return (
        <section className={styles.container}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                <div className={styles.title}>
                    <h1>{product.name}</h1>
                </div>

                <div className={styles.left}>
                    <img src={product.img} alt={product.alt} />

                    <div className={styles.filterList}>
                        <ProductFilter name="Цвета" type="color" listItems={product.colors} />
                        <ProductFilter name="Объем встроенной памяти" listItems={product.memory} />
                        <ProductFilter name="SIM-карта" listItems={product.SIM} />
                    </div>
                </div>

                <div className={styles.swiperContainer}>
                    <Swiper
                        spaceBetween={16}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        className={styles.swiperBox}
                    >
                        <SwiperSlide><img src="../../../../ProductImages/Border.png" alt="#" /></SwiperSlide>
                        <SwiperSlide><img src="../../../../ProductImages/Border.png" alt="#" /></SwiperSlide>
                        <SwiperSlide><img src="../../../../ProductImages/Border.png" alt="#" /></SwiperSlide>
                    </Swiper>
                </div>
            </div>

            <div className={styles.right}>
                <WhiteBox className={styles.whiteCard}>
                    <div className={styles.priceBox}>
                        <p style={{ fontSize: '16px', color: 'gray', textDecorationLine: 'line-through' }}>{product.price[0]}</p>
                        <p style={{ fontSize: '24px' }}>{product.price[1]}₽</p>
                    </div>

                    <Button name="В корзину" style={{ textAlign: 'center' }} />
                </WhiteBox>

                <GetProduct />


            </div>


        </section>
    )
}

