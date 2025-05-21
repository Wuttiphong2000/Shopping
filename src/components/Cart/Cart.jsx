import Item from "./Item";
import { useCart } from "../../context/CartContext";

const Cart = () => {
  const { products, total, formatMoney } = useCart();
  return (
    <div className="cart">
      {products.map((data) => {
        return <Item key={data.id} data={data} />;
      })}
      <h1>
        {products.length > 0
          ? `ยอดรวม : ${formatMoney(total)} บาท`
          : "ไม่มีสิ้นค้าในตะกร้า"}
      </h1>
    </div>
  );
};

export default Cart;
