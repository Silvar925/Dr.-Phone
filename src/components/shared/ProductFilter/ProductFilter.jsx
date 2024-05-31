import styles from "./ProductFilter.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { removeUntilFirstSlash, slugify } from "../../helpers"
import { getKeyColor, extractWordBeforeDash } from "../../helpers";
import { ColorProductList } from "../../data";


export const ProductFilter = ({ name, type, listItems, onClick, activeColor, activeTag }) => {
    const url = useLocation().pathname
    const navigate = useNavigate();

    const pressedColor = (color) => {
        let temp = getKeyColor(color, ColorProductList)

        let activeUrl = extractWordBeforeDash(url)
        const uniqueSlug = slugify(temp);

        let partUrl = activeUrl.split("-")
        partUrl[partUrl.length - 1] = uniqueSlug

        let colorUrl = partUrl.join('-')

        let partActiveUrl = url.split("/")
        partActiveUrl[partActiveUrl.length - 1] = colorUrl

        let newUrlSUKA = partActiveUrl.join('/')
        navigate(newUrlSUKA);
    }


    const pressedMemory = () => {

    }

    
    const pressedSIM = () => {
        
    }


    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>{name}</h1>
            </div>

            {type === "color" ? (
                <div className={styles.list}>
                    {
                        listItems.map((item, index) => {
                            return (
                                <div className={styles.colorParent} key={`color${item}`} onClick={() => pressedColor(item)}>
                                    <div className={styles.color} style={{
                                        background: item,
                                        border: item === activeColor ? '2px solid aqua' : 'none'
                                    }} />
                                </div>
                            )
                        })
                    }
                </div>
            ) : (
                <div className={styles.list} style={{ gap: '16px' }}>
                    {
                        listItems.map((item, index) => {
                            return (
                                <div className={styles.tag} key={`tag${item}`}
                                    style={{
                                        border: item === activeTag ? '2px solid aqua' : 'none'
                                    }}>
                                    {item}
                                </div>
                            )
                        })
                    }
                </div>
            )}
        </div>
    );
};
