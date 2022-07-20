
import "./produc-listing.css";
import data from "../../data"
import { useFilter, useProduct } from "../../context";
import { Link } from "react-router-dom";
import Filter from "../../components/filter/Filter";

export default function ProductListing() {
  const {
    FilterState: { byCategory, sortBy},
        
  } = useFilter();
  const { ProductState:{cart}, productDispatch } = useProduct();

  const transformProduct = () => {
    let sortedProduct = data;

    if (sortBy) {
      sortedProduct = sortedProduct.sort((a, b) =>
        sortBy === "PRICE_LOW_TO_HIGH" ? a.price - b.price : b.price - a.price
      );
    }
   
      if (byCategory.length!==0) {
        sortedProduct = sortedProduct.filter(
         (video) => video.category === byCategory);
      }
    
    return sortedProduct;
  };


  return (
    <>
      <div className="main">
        <div class="main-body-sec">
      <Filter />
      <div class="right-body-section">
        <h1 class="showing-heading">Products</h1>
        <div class="product-flex">
          {transformProduct().map((m) => (
             <div className="card">
              {m.available?<></>:<p className="Otag">Out of stock</p>}
             <img className="vegeimage" src={m.photo} alt={m.name} />
             <p className="titles">{m.name}</p>
             <p className="titles">Rs. {m.price}</p>
             <p className="titles">{m.vendor}</p>
             {cart.some((p) => p.id === m.id) ? (
            <Link to="/Cart">
              <button class="ecom-btn">Go To Cart</button>
            </Link>
          ) : (
            <button
              class="ecom-btn"
              onClick={() =>
                productDispatch({ type: "ADD_TO_CART", payload: m })
              }
            >
              Add to Cart
            </button>
          )}
           </div>
          ))}
        </div>
      </div>
      </div></div>
    </>
  );
}
