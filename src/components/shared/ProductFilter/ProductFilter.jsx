import styles from "./ProductFilter.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { removeUntilFirstSlash, slugify } from "../../helpers"
import { getKeyColor, extractWordBeforeDash, generateCombinations, temp, getStringFromRight, getProduchWithList, getPhoneIdWithPhoneOption } from "../../helpers";
import { ColorProductList, PhonesList, PhonesOptions, MemoryProductsList, SIMProductList } from "../../data";
import { useState } from "react";


export const ProductFilter = ({ name, type, listItems, activeColor, activeTag, selectPhone }) => {
    const url = useLocation().pathname
    const navigate = useNavigate();

    let activeUrl = extractWordBeforeDash(url)

    const pressedColor = (color) => {
        let partActiveUrl = url.split("/")
        let temp = getKeyColor(color, ColorProductList)

        const capitalizeFirstLetter = (string) => {
            if (!string) return string;
            return string.charAt(0).toUpperCase() + string.slice(1);
        }


        const uniqueSlug = slugify(temp)

        let partUrl = activeUrl.split("-")
        partUrl[3] = capitalizeFirstLetter(uniqueSlug)

        let colorUrl = partUrl.join('-')

        partActiveUrl[3] = colorUrl

        let newUrlSUKA = partActiveUrl.join('/')
        // navigate(newUrlSUKA);
    }


    const pressedMemory = (memory) => {
        let partActiveUrl = url.split("/")

        let partEndUrl = partActiveUrl[3].split("-")
        console.log('До: ', partEndUrl)
        partEndUrl[3] = memory

        let newUrlpartEndUrl = partEndUrl.join('-')

        partActiveUrl[partActiveUrl.length - 1] = newUrlpartEndUrl

        let newUrl = partActiveUrl.join("/")

        // navigate(newUrl)
    }


    const pressedSIM = () => {
        console.log(123)
    }


    const location = useLocation().pathname
    let producetID = getStringFromRight(location)

    let product = getProduchWithList(producetID, PhonesOptions)
    let phoneParent = getPhoneIdWithPhoneOption(product.phone, PhonesList)


    // temp(phoneParent, PhonesOptions, ColorProductList, MemoryProductsList, SIMProductList)

    const checkingExistence = () => {

        if (type === 'color') {
            for (let item of listItems) {
                // console.log('item: ', item)
            }

            for (let phoneOption of PhonesOptions) {
                console.log(phoneOption)
                getPhoneWithListOptionPhone(phoneOption.phone, PhonesList)
            }
        }
    }

    checkingExistence()


    const getPhoneWithListOptionPhone = (phoneOptionId, PhonesList) => {
        for (let phoneParent of PhonesList) {
            if (phoneOptionId === phoneParent.id) {
                console.log(phoneParent)
            }
        }
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
                                <div className={styles.tag} key={`tag${item}`} onClick={() => {
                                    if (type === "memory") {
                                        pressedMemory(item);
                                    } else if (type === "sim") {
                                        pressedSIM(item);
                                    }
                                }}
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
