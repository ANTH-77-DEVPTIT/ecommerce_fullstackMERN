import React, { useState, useContext, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { GlobalState } from '../../../GlobalState'
const DetailProduct = () => {
    const [productDetail, setProductDetail] = useState([])
    const params = useParams()

    const state = useContext(GlobalState)
    const [products] = state.productsApi.products

    useEffect(() => {
        if(params) {
            products.forEach(product => {
                if(product._id === params.id) setProductDetail(product)
            })
        }
    }, [params, products])

    // if(productDetail.length === 0) return null    :xu dung dong nay thay the cho ?. ben duoi optional ...

  return (
    <div className='detail'>
        <img src={productDetail?.images?.secure_url} alt="anh ne" />
        <div className='detail__box'>
            <div className='row'>
                <h2>{productDetail.title}</h2>
                <h6>{productDetail.product_id}</h6>
            </div>
            <span>${productDetail.price}</span>
            <p>{productDetail.description}</p>
            <p>{productDetail.content}</p>
            <p>Sold: {productDetail.sold}</p>
            <Link to="/cart" className='cart'>Buy Now</Link>
        </div>
    </div>
  )
}

export default DetailProduct