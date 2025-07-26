import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../stores/reducers/product';

function ProductContainer() {
    const { products, status, error } = useSelector(state => state.productReducer);;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }
    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }
    return (
        <div className="container">
            <h1>Products</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <div>
                            {product.id} - {product.title}
                            <p>
                                {product.body}
                            </p>
                        </div>
                        <p style={{ marginLeft: '100%' }}>
                            <button onClick={() => console.log(`Edit product ${product.id}`)}>Edit</button>
                            <button onClick={() => console.log(`Delete product ${product.id}`)}>Delete</button>
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductContainer;