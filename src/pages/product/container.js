import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../stores/reducers/product';
import DataLoader from '../../components/commons/dataloader';

function ProductContainer() {
    const { products, status, error } = useSelector(state => state.productReducer);;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);

    return (
        <DataLoader status={status} error={error}>
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
        </DataLoader>
    );
}

export default ProductContainer;