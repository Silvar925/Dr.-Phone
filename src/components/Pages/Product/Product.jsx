import React, { useState } from 'react';
import styles from "./Product.module.css"
import { Link, useLocation } from "react-router-dom"
import { ProductFilter } from "../../shared/ProductFilter/ProductFilter"
import { getStringFromRight } from "../../helpers"
import { phones, baskesList } from "../../data"
import { WhiteBox } from "../../shared/WhiteBox/WhiteBox"
import { Button } from "../../shared/Button/Button"
import { GetProduct } from "../../widgets/GetProduct/GetProduct"
import { ArrowButton } from "../../shared/ArrowButton/ArrowButton"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Header } from '../../widgets/Header/Header';
import { Footer } from '../../widgets/Footer/Footer';

import btnBack from "../../../assets/btnBack.svg"

export const Product = () => {
    const [swiper, setSwiper] = React.useState(null);

    const location = useLocation().pathname
    let producetID = getStringFromRight(location)

    let product;

    for (let phone in phones) {
        if (producetID === phones[phone].id) {
            product = phones[phone]
        }
    }

    const [clickImages, setClickImages] = useState(false)
    const [img, setImg] = useState(null)

    const clickSlideHandel = (item) => {
        setImg(item)
        setClickImages(!clickImages)
    }

    const addProductInBasket = (product) => {
        baskesList.push(product)
    }

    let mobile = (window.innerWidth >= 320 && window.innerWidth <= 435)

    return (
        <div>
            <Header />
            <div className={styles.widthContainer}>
                <main className={styles.container}>
                    {
                        mobile === true &&
                        <div className={styles.bradcrumb}>
                            <Link to="..">
                                <img src={btnBack} alt="btnBack" />
                            </Link>

                            <hr />
                        </div>
                    }


                    <div className={styles.box}>

                        {
                            mobile === false &&
                            <header className={styles.title}>
                                <h1>{product.name}</h1>
                            </header>
                        }


                        <div className={styles.left}>
                            {
                                mobile === true ? (
                                    <div className={styles.swiperContainer}>
                                        <Swiper
                                            spaceBetween={16}
                                            slidesPerView={1}
                                            className={styles.swiperBox}
                                        >

                                            {
                                                product.images.map((item, index) => {
                                                    return (
                                                        <SwiperSlide key={index}
                                                            style={{
                                                                display: 'flex',
                                                                justifyContent: 'center'
                                                            }}
                                                        >
                                                            <img src={item} alt="#" />
                                                        </SwiperSlide>
                                                    )
                                                })
                                            }
                                        </Swiper>

                                        <div className={styles.carousel}>
                                            {
                                                phones.map((item, index) => {
                                                    console.log(item)
                                                    return (
                                                        <div key={item.id} className={styles.carouselDote} />
                                                    )
                                                })
                                            }
                                        </div>

                                        <header className={styles.title}>
                                            <h1>{product.name}</h1>
                                        </header>
                                    </div>
                                ) : (
                                    <img src={img === null ? product.img : img} alt={product.alt} />
                                )
                            }



                            <div className={styles.filterList}>
                                <ProductFilter name="Цвета" type="color" listItems={product.colors} />
                                <ProductFilter name="Объем встроенной памяти" listItems={product.memory} />
                                <ProductFilter name="SIM-карта" listItems={product.SIM} />
                            </div>
                        </div>

                        {
                            mobile === false &&
                            <div className={styles.swiperContainer}>
                                <ArrowButton orient="left" onClick={() => swiper.slidePrev()} />

                                <Swiper
                                    spaceBetween={16}
                                    slidesPerView={3}
                                    onSlideChange={() => console.log('slide change')}
                                    className={styles.swiperBox}
                                    onSwiper={(s) => {
                                        setSwiper(s);
                                    }}
                                >

                                    {
                                        product.images.map((item, index) => {
                                            return (
                                                <SwiperSlide key={index}
                                                    onClick={() => clickSlideHandel(item)} className={styles.slide}
                                                ><img src={item} alt="#" /></SwiperSlide>
                                            )
                                        })
                                    }
                                </Swiper>

                                <ArrowButton orient="right" onClick={() => swiper.slideNext()} />

                            </div>

                        }

                    </div>

                    <div className={styles.right}>
                        <WhiteBox className={styles.whiteCard}>
                            <div className={styles.priceBox}>
                                <p style={{ fontSize: '16px', color: 'gray', textDecorationLine: 'line-through' }}>{product.price[0]}</p>
                                <p style={{ fontSize: '24px' }}>{product.price[1]}₽</p>
                            </div>

                            <Button name="В корзину" style={{ textAlign: 'center' }} onClick={() => addProductInBasket(product)} />
                        </WhiteBox>

                        <GetProduct />


                    </div>

                </main>

            </div>
            <Footer />
        </div>
    )
}

