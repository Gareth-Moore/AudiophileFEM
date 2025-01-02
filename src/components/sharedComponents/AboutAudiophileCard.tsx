import about_mobile from "../../assets/shared/mobile/image-best-gear.jpg";
import about_tablet from "../../assets/shared/tablet/image-best-gear.jpg";
import about_desktop from "../../assets/shared/desktop/image-best-gear.jpg";
import { useStore } from "../../store";

const AboutAudiophileCard = () => {
  const { currentBreakpoint } = useStore();
  const backgroundImg = {
    mobile: about_mobile,
    tablet: about_tablet,
    desktop: about_desktop,
  };

  return (
    <div className="about-audiophile-component">
      <div className="container">
        <div
          className="image-container"
          style={{ backgroundImage: `url(${currentBreakpoint ? backgroundImg[currentBreakpoint] : ""})` }}
        ></div>
        <div className="content-container">
          <h2 className="title">
            BRINGING YOU THE <span>BEST</span> AUDIO GEAR
          </h2>
          <p className="description">
            Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones,
            speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you
            to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic
            people who make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutAudiophileCard;
