import React, {useState} from 'react';
import DATA from '../Data'
import { NavLink } from 'react-router-dom';

const Product = () => {

    
const cardItem = (item) => {
return (
    <div className="card my-5 py-4" key={item.id} style={{width:"18rem"}}>
  <img src={item.img} className="card-img-top" alt={item.title} height="200px" width='180px'/>
  <div className="card-body text-center">
    <h5 className="card-title">{item.title}</h5>
   <p className="lead">${item.price}</p>
    <NavLink to={`/products/${item.id}`} className="btn btn-outline-primary">Buy Now</NavLink>
  </div>
</div>
)
}

const [filtered, setFiltered] = useState(DATA)

const filterProduct =(cat) =>{
if (cat === 'All'){
    setFiltered(DATA)
}else {
    let newDATA = [...DATA].filter(item=> item.category === cat)
    setFiltered(newDATA)
}
}


const ShowProducts = ()=> {
return (
    <>
     <div className="buttons d-flex justify-content-center md-5 pb-5">
        <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct('All')}> All</button>
        <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct('IPhone')}> IPhone</button>
        <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct('IPad')}>IPad </button>
        <button className="btn btn-outline-dark me-2"onClick={()=>filterProduct('Mac')}>Mac </button>
    </div>

    </>
)
}

    return (
        <div>
            <div className="container py-5"></div>
            <div className="row">
                <div className="col-12 text-center">
                    <h1>Product</h1>
                    <hr/>
                    </div>
            </div>
        <ShowProducts/>
            <div className="container">
                <div className="row justify-content-around">
                    {filtered.map(cardItem)}
                    
                </div>
            </div>
        </div>
    );
};

export default Product;