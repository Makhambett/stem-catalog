import { useCart } from '../context/CartContext'
import './CartDrawer.css'

export default function CartDrawer() {
  const { cartItems, isOpen, setIsOpen, removeFromCart, increaseQty, decreaseQty, totalPrice } = useCart()

  if (!isOpen) return null

  return (
    <>
      <div className="cart-overlay" onClick={() => setIsOpen(false)} />
      <div className="cart-drawer">
        <div className="cart-drawer__header">
          <h2>Корзина</h2>
          <button className="cart-drawer__close" onClick={() => setIsOpen(false)}>✕</button>
        </div>

        {cartItems.length === 0 ? (
          <div className="cart-drawer__empty">
            <span>🛒</span>
            <p>Корзина пуста</p>
          </div>
        ) : (
          <>
            <div className="cart-drawer__items">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item__img" />
                  <div className="cart-item__info">
                    <p className="cart-item__name">{item.name}</p>
                    <p className="cart-item__price">{(item.price * item.quantity).toLocaleString()} ₸</p>
                    <div className="cart-item__qty">
                      <button onClick={() => decreaseQty(item.id)}>−</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increaseQty(item.id)}>+</button>
                    </div>
                  </div>
                  <button className="cart-item__remove" onClick={() => removeFromCart(item.id)}>✕</button>
                </div>
              ))}
            </div>
            <div className="cart-drawer__footer">
              <div className="cart-drawer__total">
                <span>Итого:</span>
                <strong>{totalPrice.toLocaleString()} ₸</strong>
              </div>
              <button className="cart-drawer__checkout">Оформить заявку</button>
            </div>
          </>
        )}
      </div>
    </>
  )
}