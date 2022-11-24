import { FaTrash } from "react-icons/fa";
import CartAmountToggle from "./CartAmountToggle";
import FormatPrice from "../styles/FormatPrice";
import { useCartContext } from "../context/CartContext";

export default function CartItem({ id, image, amount, price, color, name }) {
    function setDecrease() {
        // amount > 1 ? setAmount(amount - 1) : setAmount(1);
    }
    function setIncrease() {
        // amount < stock ? setAmount(amount + 1) : setAmount(stock);
    }

    const { removeItem } = useCartContext();

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
            setDecrease={setDecrease}
            setIncrease={setIncrease}
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