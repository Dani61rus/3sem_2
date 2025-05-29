import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export function GoodsItem({
  mainId,
  displayName,
  displayDescription,
  price,
  displayAssets,
  addToBasket,
})  {
  const backgroundImage = displayAssets.length
  ? displayAssets[0].full_background
  : displayName;
  const handleAddToBasket = () => {
    addToBasket({
      mainId,
      displayName,
      price,
    });
    toast.success(`${displayName} добавлен в корзину!`, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };
  return(
    <div className="card">
      <div className="card-image">
        <img src={backgroundImage} alt={displayName}/>
      </div>
      <div className="card-content">
        <span className="card-title">{displayName}</span>
        <p>{displayDescription}</p>
      </div>
      <div className="card-action">
        <div>
        <button 
  className="btn deep-purple"
  onClick={handleAddToBasket}
>
  В корзину
</button>
        </div>
        <div>
          <span className="right">{price.finalPrice} V</span>
        </div>
      </div>
    </div>
  );
}