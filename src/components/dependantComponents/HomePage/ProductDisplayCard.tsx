import Button from "../../elements/Button";

import zx9_mobile from "../../../assets/home/mobile/image-speaker-zx9.png";
import zx9_tablet from "../../../assets/home/tablet/image-speaker-zx9.png";
import zx9_desktop from "../../../assets/home/desktop/image-speaker-zx9.png";

import zx7_mobile from "../../../assets/home/mobile/image-speaker-zx7.png";
import zx7_tablet from "../../../assets/home/tablet/image-speaker-zx7.png";
import zx7_desktop from "../../../assets/home/desktop/image-speaker-zx7.png";

import yx1_mobile from "../../../assets/home/mobile/image-earphones-yx1.jpg";
import yx1_tablet from "../../../assets/home/tablet/image-earphones-yx1.jpg";
import yx1_desktop from "../../../assets/home/desktop/image-earphones-yx1.jpg";
import { useStore } from "../../../store";

import decorationImage from "../../../assets/home/desktop/pattern-circles.svg";

import { useEffect } from "react";

const ProductDisplayCard = () => {
  const { currentBreakpoint } = useStore();

  return (
    <div className="product-display-component">
      <div className="container">
        <div className="card card-zx9">
          <div className="image-container">
            <img src={decorationImage} alt="Decorative circles" className="image-decoration" />
            <img
              src={
                currentBreakpoint === "mobile" ? zx9_mobile : currentBreakpoint === "tablet" ? zx9_tablet : zx9_desktop
              }
              alt="Picture of zx9 speaker"
              className="image-product"
            />
          </div>
          <h2 className="title">
            ZX9 <br /> SPEAKERS
          </h2>
          <p className="description">
            Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
          </p>
          <Button buttonType="primary-inverted" innerText="SEE PRODUCT" isLink={true} url="/product" />
        </div>
        <div className="card card-zx7">
          <img
            src={
              currentBreakpoint === "mobile" ? zx9_mobile : currentBreakpoint === "tablet" ? zx9_tablet : zx9_desktop
            }
            alt="Picture of zx7 speaker"
          />
          <h2 className="title">ZX7 SPEAKERS</h2>
          <Button buttonType="primary" innerText="SEE PRODUCT" isLink={true} url="/product" />
        </div>
        <div className="card card-yx1">
          <div className="image">
            <img
              src={
                currentBreakpoint === "mobile" ? zx9_mobile : currentBreakpoint === "tablet" ? zx9_tablet : zx9_desktop
              }
              alt="Picture of yx1 earphones"
            />
          </div>
          <div>
            <h2 className="title">YX1 EARPHONES</h2>
            <Button buttonType="primary" innerText="SEE PRODUCT" isLink={true} url="/product" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplayCard;
