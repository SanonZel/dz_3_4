import React from 'react'

function Item(props) {

  return(
    <>  
        <img src={props.product.url} className='img' alt="" />
        <h1 className='prodName'>{props.product.name}</h1>
        <h1>{props.product.price}</h1>
    </>
  )
}

export default Item