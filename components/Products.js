import styles from '../styles/components/Products.module.css';


const Products = ({products}) => {
    return (
        <>
            <h2>Product List</h2>
            <div className={styles.itemList}>
                {products.map(product => (
                    <div className={styles.item}>
                        <img src={product.img} />
                        <h2>
                            {product.name}
                        </h2>
                        <div>{product.price}$</div>
                        <button>ORDER NOW</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Products