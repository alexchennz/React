import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetialsPage = () => {
    const param = useParams();
    return (
        <><div>ProductDetialsPage</div>{param.productId}
        <p><Link to=".." relative='path'>Back</Link></p>
        </>

    )
}

export default ProductDetialsPage