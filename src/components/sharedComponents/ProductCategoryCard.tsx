import Button from "../elements/Button";
import headphonesImg from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersImg from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesImg from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";

interface Props {
  removeLastSpacer?: boolean;
  extraPadding?: boolean;
  closeNavbar?: () => void;
}

const ProductCategoryCard = ({ removeLastSpacer, extraPadding, closeNavbar }: Props) => {
  return (
    <div className="product-category-card">
      <div className={`container ${extraPadding ? "extra-padding-top" : ""}`}>
        <div className="spacer"></div>
        <div className="card">
          <img src={headphonesImg} alt="" />
          <p>HEADPHONES</p>
          <Button
            isLink={true}
            innerText="SHOP"
            buttonType="shop"
            url="/category"
            storeUpdate="HEADPHONES"
            closeNavbar={closeNavbar}
          />
        </div>
        <div className="card">
          <img src={speakersImg} alt="" />
          <p>SPEAKERS</p>
          <Button
            isLink={true}
            innerText="SHOP"
            buttonType="shop"
            url="/category"
            storeUpdate="SPEAKERS"
            closeNavbar={closeNavbar}
          />
        </div>
        <div className="card">
          <img src={earphonesImg} alt="" />
          <p>EARPHONES</p>
          <Button
            isLink={true}
            innerText="SHOP"
            buttonType="shop"
            url="/category"
            storeUpdate="EARPHONES"
            closeNavbar={closeNavbar}
          />
        </div>
        <div className="spacer"></div>
        {removeLastSpacer || <div className="spacer"></div>}
      </div>
    </div>
  );
};

export default ProductCategoryCard;
