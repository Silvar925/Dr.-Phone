import styles from "./ProductFilter.module.css";

export const ProductFilter = ({ name, type, listItems }) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>{name}</h1>
            </div>

            {type === "color" ? (
                <div className={styles.list} style={{ gap: '7px' }}>
                    {
                        listItems.map((item, index) => {
                            return (
                                <div className={styles.colorParent} key={`color${index}`}>
                                    <div className={styles.color} style={{ background: item }} />
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
                                <div className={styles.tag} key={`tag${index}`}>
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
