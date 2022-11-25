import { FaTrash } from "react-icons/fa";
import CartAmountToggle from "./CartAmountToggle";
import FormatPrice from "../styles/FormatPrice";
import { useCartContext } from "../context/CartContext";

export default function CartItem({ id, image, amount, price, color, name }) {

    const { removeItem, setIncrease, setDecrease } = useCartContext();

    return <div className="cart_heading grid grid-five-column">
        <div className="cart-image--name">

            <div>
                <figure>
                    <img src={image} alt={id} />
                </figure>
            </div>
            <div>
                <p>{name} </p>
                <div className="color-div">
                    <p>color:</p>
                    <div className="color-style" style={{ backgroundColor: color, color: color }}></div>
                </div>
            </div>

        </div>
        <div className="cart-hide">
            <p>
                <FormatPrice price={price} />
            </p>
        </div>
        <CartAmountToggle
            amount={amount}
            setDecrease={() => setDecrease(id)}
            setIncrease={() => setIncrease(id)}
        />
        <div className="cart-hide">
            <p>
                <FormatPrice price={price * amount} />
            </p>
        </div>
        <div>
            <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
        </div>
    </div>
}