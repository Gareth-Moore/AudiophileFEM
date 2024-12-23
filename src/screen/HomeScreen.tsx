import Hero from "../components/dependantComponents/HomePage/Hero";
import ProductCategoryCard from "../components/sharedComponents/ProductCategoryCard";
import ProductDisplayCard from "../components/dependantComponents/HomePage/ProductDisplayCard";
import AboutAudiophileCard from "../components/sharedComponents/AboutAudiophileCard";

const HomeScreen = () => {
  return (
    <div className="home-screen-component">
      <div className="container">
        <Hero />
        <ProductCategoryCard />
        <ProductDisplayCard />
        <AboutAudiophileCard />
      </div>
    </div>
  );
};

export default HomeScreen;
