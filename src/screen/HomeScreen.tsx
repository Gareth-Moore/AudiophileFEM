import Hero from "../components/dependantComponents/HomePage/Hero";
import ProductCategoryCard from "../components/sharedComponents/ProductCategoryCard";
import ProductDisplayCard from "../components/dependantComponents/HomePage/ProductDisplayCard";
import AboutAudiophileCard from "../components/sharedComponents/AboutAudiophileCard";

const HomeScreen = () => {
  return (
    <div className="home-screen-component">
      <div className="container" style={{ overflow: "hidden" }}>
        <Hero />
        <ProductCategoryCard removeLastSpacer={true} />
        <ProductDisplayCard />
        <AboutAudiophileCard />
        <div className="spacer"></div>
      </div>
    </div>
  );
};

export default HomeScreen;
