import Item from "./Item";
import { useCart } from "../../context/CartContext";

const Cart = () => {
  const {products} = useCart() 
  return (
    <div className="cart">
      {products.map((data)=>{
        return <Item key={data.id} data={data}/>
      })}
    </div>
  );
};

export default Cart;
