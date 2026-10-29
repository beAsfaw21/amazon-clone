import React from 'react';
import PageLayout from '../PageLayout';
import { useStore } from '../../StoreContext';
import { Link } from 'react-router-dom';

function Cart() {
  const { cart, cartTotal, updateQuantity } = useStore();
  return (
    <PageLayout title="Shopping Cart" description={cart.length ? `${cart.length} item${cart.length === 1 ? '' : 's'} in your cart.` : 'Your cart is currently empty. Add products to get started.'}>
      {cart.length ? (
        <div className="cart-content">
          <div className="cart-items">
            {cart.map((item) => (
              <article className="cart-item" key={item.title}>
                <div className="cart-item__image"><img src={item.image} alt="" /></div>
                <div className="cart-item__details">
                  <h2>{item.title}</h2>
                  <p className="in-stock">In stock</p>
                  <label>Quantity <select value={item.quantity} onChange={(event) => updateQuantity(item.title, Number(event.target.value))}>{[1, 2, 3, 4, 5].map((number) => <option key={number} value={number}>{number}</option>)}</select></label>
                  <button type="button" className="text-button" onClick={() => updateQuantity(item.title, 0)}>Delete</button>
                </div>
                <strong>${(Number(item.price) * item.quantity).toFixed(2)}</strong>
              </article>
            ))}
          </div>
          <aside className="cart-summary">
            <p>Subtotal ({cart.reduce((sum, item) => sum + item.quantity, 0)} items)</p>
            <strong>${cartTotal.toFixed(2)}</strong>
            <button type="button" className="primary-button">Proceed to checkout</button>
          </aside>
        </div>
      ) : <Link className="primary-button inline-button" to="/">Continue shopping</Link>}
    </PageLayout>
  );
}

export default Cart;
