import "./Item.css";
import { AiOutlineDelete } from "react-icons/ai";
import { useCart } from "../../context/CartContext";

const Item = (props) => {
  const { data } = props;
const {formatMoney} = useCart()

  return (
    <div className="card">
      <img src={data.image} alt={data.name} />
      <div className="product">
        <p className="name">ชื่อสินค้า : {data.name}</p>
        <p className="price">ราคา : {formatMoney(data.price)} บาท</p>
      </div>
      <div className="quantity">
        <button>+</button>
        <p>{data.quantity}</p>
        <button>-</button>
      </div>
      <div className="total">{formatMoney(data.quantity * data.price)} บาท</div>
      <button>
        <AiOutlineDelete />
      </button>
    </div>
  );
};

export default Item;
