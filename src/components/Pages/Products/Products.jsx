import styles from "./Products.module.css"
import { ProductCard } from "../../widgets/ProductCard/ProductCard"
import { Outlet, useLocation } from "react-router-dom"
import { phones } from "../../data"

export const Products = () => {
    const location = useLocation().pathname;
    const productList = dictionary[location];

    return (
        productList !== undefined ? (
            <div className={styles.widthContainer}>
                <section className={styles.container}>
                    {productList.map((item, index) => (
                        <ProductCard key={index} img={item.img} alt={item.alt} name={item.name} price={item.price} url={item.id} />
                    ))}
                </section>

            </div>
        ) : (
            <Outlet />
        )
    );
}

const dictionary = {
    '/serivce/phones': phones,
    '/serivce/allDevices': phones,
    '/serivce/accessories': phones,
    '/serivce/deviceProtection': phones,
    '/serivce/iMac': phones,
    '/serivce/covers': phones,
}