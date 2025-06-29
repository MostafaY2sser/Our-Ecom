import { FiShoppingCart } from "react-icons/fi";
import style from "./style.module.css";
const { basketContainer, basketQuantity } = style;

const HeaderBasket = () => {
  return (
    <div className={basketContainer}>
      <FiShoppingCart size={24} title="basket icon" />
      <div className={basketQuantity}>0</div>
    </div>
  )
}

export default HeaderBasket