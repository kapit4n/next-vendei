import { useContext } from 'react';
import styles from '../styles/components/Products.module.css';
import OrderContext from './OrderContext';


const Products = ({ products }) => {

    const { setOrderPrice } = useContext(OrderContext);

    const onChangeOrderPrice = (price) => {
        setOrderPrice(prevVal => prevVal + price)
    }

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
                        <button onClick={() => onChangeOrderPrice(product.price)}>ORDER NOW</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Products