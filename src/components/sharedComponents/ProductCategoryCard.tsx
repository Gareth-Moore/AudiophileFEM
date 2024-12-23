import Button from "../elements/Button";
import headphonesImg from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersImg from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesImg from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";

const ProductCategoryCard = () => {
  return (
    <div className="product-category-card">
      <div className="container">
        <div className="spacer"></div>
        <div className="card">
          <img src={headphonesImg} alt="" />
          <p>HEADPHONES</p>
          <Button isLink={true} innerText="SHOP" buttonType="shop" />
        </div>
        <div className="card">
          <img src={speakersImg} alt="" />
          <p>SPEAKERS</p>
          <Button isLink={true} innerText="SHOP" buttonType="shop" />
        </div>
        <div className="card">
          <img src={earphonesImg} alt="" />
          <p>EARPHONES</p>
          <Button isLink={true} innerText="SHOP" buttonType="shop" />
        </div>
        <div className="spacer"></div>
        <div className="spacer"></div>
      </div>
    </div>
  );
};

export default ProductCategoryCard;
