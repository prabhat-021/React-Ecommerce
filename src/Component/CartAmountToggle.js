import { FaMinus, FaPlus } from "react-icons/fa";

export default function CartAmountToggle({ amount, setIncrease, setDecrease }) {
    return <section className="cart-button">
        <div className="amount-toggle">
            <button onClick={() => setDecrease()}><FaMinus /> </button>
            <div className="amount-style">{amount}</div>
            <button onClick={() => setIncrease()}><FaPlus /> </button>
        </div>
    </section>
}