import React from 'react'
import vector from './Vector.png'


export default function Subs() {
    const boxShadow = {
        boxShadow: '0px 15px #f2f2f2',
        margin: '1em',
        padding: '2em',
    }
  return (
    <>
    <div className="row my-4" style={boxShadow}>
        <div className="col-2"><img src={"https://cdn1.vectorstock.com/i/1000x1000/50/20/no-photo-or-blank-image-icon-loading-images-vector-37375020.jpg"} class="img-fluid float-left" width="90%" alt="Rge"/></div>
        <div className="col-3">
            <h6>Delivered on ...</h6>
            <h6>Product Name</h6>
            <span>⭐⭐⭐⭐</span>
            <h6>Paid 76.99 USD<span class="badge mx-1" style={{backgroundColor: '#d9d9d9', color: 'black'}}>2  |  Qty<span><img className="mx-1" src={vector}></img></span></span></h6>
            <button type="button" class="btn btn-dark">Subscribed</button>
        </div>
        <div className="col-3">
        <button type="button" class="btn btn-outline-dark">Delivery Details</button><br/>
        {/* <button type="button" class="btn btn-outline-dark my-3">Product details</button><br/> */}
        </div>
    </div>
    <div className="row my-4" style={boxShadow}>
        <div className="col-2"><img src={"https://cdn1.vectorstock.com/i/1000x1000/50/20/no-photo-or-blank-image-icon-loading-images-vector-37375020.jpg"} class="img-fluid float-left" width="90%" alt="Rge"/></div>
        <div className="col-3">
            <h6>Delivered on ...</h6>
            <h6>Product Name</h6>
            <span>⭐⭐⭐⭐</span>
            <h6>Paid 76.99 USD<span class="badge mx-1" style={{backgroundColor: '#d9d9d9', color: 'black'}}>1  |  Qty<span><img className="mx-1" src={vector}></img></span></span></h6>
            <button type="button" class="btn btn-dark">Subscribed</button>
        </div>
        <div className="col-3">
        <button type="button" class="btn btn-outline-dark">Delivery Details</button><br/>
        {/* <button type="button" class="btn btn-outline-dark my-3">Product details</button><br/> */}
        </div>
    </div>
    </>
  )
}
