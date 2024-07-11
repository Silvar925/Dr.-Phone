import styles from "./Products.module.css"
import { ProductCard } from "../../widgets/ProductCard/ProductCard"
import { Outlet, useLocation } from "react-router-dom"
import { phones } from "../../data"
import { Header } from "../../widgets/Header/Header"
import { Footer } from "../../widgets/Footer/Footer"
import { PhonesOptions, ImagesProductList } from "../../data"
import { getImageProduct } from "../../helpers"


export const Products = () => {
    const location = useLocation().pathname;
    const productList = dictionary[location];

    return (
        productList !== undefined ? (
            <div className={styles.layout}>
                <Header />
                <div className={styles.widthContainer}>
                    <section className={styles.container}>
                        {productList.map((item, index) => (
                            <ProductCard key={index} img={getImageProduct(ImagesProductList, item.images[0])} 
                            name={item.name} price={item.price} url={item.unique_id} />
                        ))}
                    </section>
                </div>
                <Footer />
            </div>
        ) : (
            <Outlet />
        )
    );
}


const dictionary = {
    '/serivce/phones': PhonesOptions,
    '/serivce/allDevices': phones,
    '/serivce/accessories': phones,
    '/serivce/deviceProtection': phones,
    '/serivce/iMac': phones,
    '/serivce/covers': phones,
}