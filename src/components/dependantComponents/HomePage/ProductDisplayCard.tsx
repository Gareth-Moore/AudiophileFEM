import Button from "../../elements/Button";

import zx9_mobile from "../../../assets/home/mobile/image-speaker-zx9.png";
import zx9_tablet from "../../../assets/home/tablet/image-speaker-zx9.png";
import zx9_desktop from "../../../assets/home/desktop/image-speaker-zx9.png";

import zx7_mobile from "../../../assets/home/mobile/image-speaker-zx7.jpg";
import zx7_tablet from "../../../assets/home/tablet/image-speaker-zx7.jpg";
import zx7_desktop from "../../../assets/home/desktop/image-speaker-zx7.jpg";

import yx1_mobile from "../../../assets/home/mobile/image-earphones-yx1.jpg";
import yx1_tablet from "../../../assets/home/tablet/image-earphones-yx1.jpg";
import yx1_desktop from "../../../assets/home/desktop/image-earphones-yx1.jpg";

import decorationImage from "../../../assets/home/desktop/pattern-circles.svg";

import { useStore } from "../../../store";
const productImages = {
  zx9: {
    mobile: zx9_mobile,
    tablet: zx9_tablet,
    desktop: zx9_desktop,
  },
  zx7: {
    mobile: zx7_mobile,
    tablet: zx7_tablet,
    desktop: zx7_desktop,
  },
  yx1: {
    mobile: yx1_mobile,
    tablet: yx1_tablet,
    desktop: yx1_desktop,
  },
};

const ProductDisplayCard = () => {
  const { currentBreakpoint } = useStore();

  return (
    <div className="product-display-component">
      <div className="container">
        {/* card 1 */}
        <div className="card card-zx9">
          <div className="image-container">
            <img src={decorationImage} alt="Decorative circles" className="image-decoration" />
            <img
              src={currentBreakpoint ? productImages.zx9[currentBreakpoint] : ""}
              alt="Picture of zx9 speaker"
              className="image-product"
            />
          </div>
          <div className="content-container">
            <h2 className="title">
              ZX9 <br /> SPEAKERS
            </h2>
            <p className="description">
              Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
            </p>
            <Button
              buttonType="primary-inverted"
              innerText="SEE PRODUCT"
              isLink={true}
              url="/product"
              storeUpdate="zx9"
            />
          </div>
        </div>

        {/* card 2 */}
        <div
          className="card card-zx7"
          style={{ backgroundImage: `url(${currentBreakpoint ? productImages.zx7[currentBreakpoint] : ""})` }}
        >
          <h2 className="title">ZX7 SPEAKERS</h2>
          <Button buttonType="primary" innerText="SEE PRODUCT" isLink={true} url="/product" storeUpdate="zx7" />
        </div>

        {/* card 3 */}
        <div className="card card-yx1">
          <div
            className="image-container"
            style={{ backgroundImage: `url(${currentBreakpoint ? productImages.yx1[currentBreakpoint] : ""})` }}
          ></div>
          <div className="content-container">
            <h2 className="title">YX1 EARPHONES</h2>
            <Button buttonType="primary" innerText="SEE PRODUCT" isLink={true} url="/product" storeUpdate="yx1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplayCard;
