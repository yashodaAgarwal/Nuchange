import { useState,useEffect } from "react";
import { useProduct } from "../../context";
import "./cart-page.css";

export default function Cart() {
  const {
    ProductState: { cart },
    productDispatch,
  } = useProduct();

  const [Total, setTotal] = useState(0);


  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price * curr.qty), 0)
    );
  }, [cart]);

  return (
    <div>
      <div className="mycart-container">
        <div className="mycart-heading ">Shopping Cart ({cart.length})</div>
        {cart.map((item) => {
          return (
            <div className="flex" key={item.id}>
              <img className="cart-image" src={item.photo} alt={item.name} />
              <div className="cart-info">
                <p className="cart-title">{item.name}</p>
                <div className="flex cart-price">
                  <p>Rs. {item.price}</p>
                </div>
                <select
                  className="qty-button"
                  value={item.qty}
                  onChange={(e) =>
                    productDispatch({
                      type: "CHANGE_IN_QTY",
                      payload: { id: item.id, qty: e.target.value },
                    })
                  }
                >
                  {[0,1,2,3,4,5 ].map((x) => (
                    <option key={x + 1}>{x + 1}</option>
                  ))}
                </select>
                <button
                  className="remove-btn"
                  onClick={() =>
                    productDispatch({ type: "REMOVE_FROM_CART", payload: item })
                  }
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="Price-container">
        <h3 class="price-details-heading">PRICE DETAILS</h3>
        <hr />
        <div class="item">
          <p class="list">Price of {cart.length} Items</p>
          <span class="price-items">{Total}</span>
        </div>
        <div class="item">
          <p class="list">Delivery charges</p>
          <span class="price-items">FREE</span>
        </div>
        <hr />
        <div class="item">
          <p class="list">Total Amount</p> 
          <span class="price-items">{Total}</span>
        </div>
        <hr />
        <button class="btn-place-order">Place Order</button>
      </div>
    </div>
  );
}
