import React from 'react'
import data from './mockData.json'
import star from './star.png'
import vector from './Vector.png'

export default function Delivered() {
    const boxShadow = {
        boxShadow: '0px 15px #f2f2f2',
        margin: '1em',
        padding: '2em',
    }
    // let starsNum = []
    // const stars = (stars)=>{
    //     for(let i = 1; i<=stars; i++){
    //         starsNum.push('*')
    //     }
    //     console.log(starsNum)
    // }
  return (
    <>
    {/* <div className="row my-4">
        <div className="col-2"><img src={"https://cdn1.vectorstock.com/i/1000x1000/50/20/no-photo-or-blank-image-icon-loading-images-vector-37375020.jpg"} class="img-fluid float-left" width="90%" alt="Rge"/></div>
        <div className="col-2">
            <h5>Delivered on ...</h5>
            <h6>Product Name</h6>
            <span>⭐⭐⭐⭐</span>
            <h6>Paid 76.99 USD</h6>
            <button type="button" class="btn btn-dark">Buy it again</button>
        </div>
        <div className="col-3">
        <button type="button" class="btn btn-outline-dark">Return or replace items</button><br/>
        <button type="button" class="btn btn-outline-dark my-3">Write a product review</button><br/>
        <button type="button" class="btn btn-outline-dark">Delivery details</button><br/>
        </div>
    </div>
 */}

    {data.map((data)=>(
        <div className="row my-4" style={boxShadow}>
            <div className="col-2"><img src={"https://cdn1.vectorstock.com/i/1000x1000/50/20/no-photo-or-blank-image-icon-loading-images-vector-37375020.jpg"} class="img-fluid float-left" width="90%" alt="Rge"/></div>
            <div className="col-3">
                <h6>Delivered on {data.delivered}</h6>
                <h6>{data.name}</h6>
                <span>
                    {data.stars.split('').map(()=>(
                        <img className="my-2" src={star}></img>
                    ))}
                </span>
                <h6>Paid {data.Amount} USD <span class="badge mx-1" style={{backgroundColor: '#d9d9d9', color: 'black'}}>{data.quantity}  |  Qty <span><img className="mx-1" src={vector}></img></span></span></h6>
                <button type="button" class="btn btn-dark my-2">Buy it again</button>
            </div>
            <div className="col-3">
            <button type="button" class="btn btn-outline-dark">Return or replace items</button><br/>
            <button type="button" class="btn btn-outline-dark my-3">Write a product review</button><br/>
            <button type="button" class="btn btn-outline-dark">Delivery details</button><br/>
            </div>
        </div>
    ))}
    </>
  )
}
