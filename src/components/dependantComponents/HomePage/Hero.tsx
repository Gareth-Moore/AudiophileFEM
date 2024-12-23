import { useStore } from "./../../../store";
import Button from "../../elements/Button";
import bgImage_mobile from ".././../../assets/home/mobile/image-header.jpg";
import bgImage_tablet from ".././../../assets/home/tablet/image-header.jpg";
import bgImage_desktop from ".././../../assets/home/desktop/image-hero.jpg";

const Hero = () => {
  const { currentBreakpoint } = useStore();
  return (
    <div className="hero-component">
      <img
        src={
          currentBreakpoint === "mobile"
            ? bgImage_mobile
            : currentBreakpoint === "tablet"
            ? bgImage_tablet
            : bgImage_desktop
        }
        alt=""
        className="background-image"
      />
      <div className="container">
        <p className="new-product">NEW PRODUCT</p>
        <h1 className="title">
          XX99 Mark II <br />
          HeadphoneS
        </h1>
        <p className="description">
          Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
        </p>
        <Button buttonType="accent" innerText="SEE PRODUCT" isLink={true} url="/product" />
      </div>
    </div>
  );
};

export default Hero;
