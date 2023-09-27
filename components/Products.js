import { useContext } from 'react';
import styles from '../styles/components/Products.module.css';
import OrderContext from './context/OrderContext';


const Products = ({ products }) => {

    const { updateOrderInfo } = useContext(OrderContext);

    const onUpdateOrderInfo = (product) => {
        updateOrderInfo(orderInfo => {
            const newOrderInfo = {...orderInfo}
            newOrderInfo.totalPrice = orderInfo.totalPrice + product.currentPrice
            newOrderInfo.products = [...newOrderInfo.products, product]
            return newOrderInfo
        })
    }

    return (
        <>
            <h2>Product List</h2>
            <div className={styles.itemList}>
                {products.map(product => (
                    <div className={styles.item}>
                        <img src={product.Product.img} />
                        <h2>
                            {product.Product.name}
                        </h2>
                        <div>{product.currentPrice}$</div>
                        <button onClick={() => onUpdateOrderInfo(product)}>ORDER NOW</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Products