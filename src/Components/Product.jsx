import { NavLink } from "react-router-dom"
import FormatMoney from "../utils/FormatMoney"
import PriceWithDiscount from "../utils/FormatWithDiscount"

const Product = (props) =>{
    return (
        <NavLink to={`single/${props.prod.id}`}  className="product">
            <div className="prod-img">
                <img src={props.prod.image_url} alt="" />
            </div>

            <div className="prod-name">{props.prod.name}</div>
            <div className="price-sale">
                <div className="newPrice">{PriceWithDiscount(props.prod.price,props.prod.discount)} ₽.</div>
                <div className="price"> <s>{  FormatMoney(props.prod.price)  }</s> </div>
                <div className="sale">{props.prod.discount} %</div>
            </div>
        </NavLink>
    )
}

export default Product