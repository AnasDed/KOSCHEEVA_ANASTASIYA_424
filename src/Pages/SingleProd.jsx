import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FormatMoney from "../utils/FormatMoney";
import PriceWithDiscount from "../utils/FormatWithDiscount";

const Single = () => {
  const params = useParams();

  const [prod, setProd] = useState({});
  const singleFetch = async () => {
    const single = await fetch(
      `https://api.avavion.ru/api/products/${params.id}`
    );
    const data = await single.json();

    setProd(data.data);
  };

  useEffect(() => {
    singleFetch();
  }, []);

  return (
    <div className="singleProd">
      <div className="singleWrapper">
        <div className="singleImage">
          <img src={prod.image_url} alt="" />
        </div>

        <div className="discription">
          <div className="singleName">{prod.name}</div>
          <div className="short">{prod.short_text}</div>
          <div className="singleTag"> Категория: {prod.tag}</div>

          <div className="singlePrice-sale">
            <div className="singlePrice">
              {PriceWithDiscount(prod.price, prod.discount)}
            </div>
            <div className="oldPrice">
              <s>{FormatMoney(prod.price)}</s>
            </div>

            <div className="sale">{prod.discount} %</div>
          </div>

          <button className="singleButton">В корзину</button>
        </div>
      </div>
    </div>
  );
};

export default Single;
