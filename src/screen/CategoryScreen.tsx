import AboutAudiophileCard from "../components/sharedComponents/AboutAudiophileCard";
import ProductCategoryCard from "../components/sharedComponents/ProductCategoryCard";
import { useStore } from "../store";
import { productsData } from "../assets/data";
import Button from "../components/elements/Button";

const CategoryScreen = () => {
  const { currentCategory, currentBreakpoint, setProduct } = useStore();

  return (
    <div className="category-screen-component">
      <div className="container">
        {/* check that padding is included with the max-width */}
        <div className="header">
          <h1 className="title">{currentCategory}</h1>
        </div>

        {/* product card */}
        {(productsData &&
          currentCategory &&
          (() => {
            return productsData.map((product, index) => {
              if (product.category !== currentCategory) {
                return null;
              } else if (currentBreakpoint) {
                product.slug;
                return (
                  <div className="product-card" key={index}>
                    <div className="product-card-image">
                      <img src={product.images[currentBreakpoint].categoryPreview} alt="" />
                    </div>
                    <div className="product-card-content">
                      {product.newProduct && <p className="product-new">NEW PRODUCT</p>}
                      <div className="product-title-container">
                        <h2 className="product-title">{product.name.toUpperCase()}</h2>
                        <h3 className="product-category">{currentCategory.toLocaleUpperCase()}</h3>
                      </div>
                      <p className="product-description">{product.description}</p>
                      <Button
                        updateClassName="product-button"
                        buttonType="accent"
                        innerText="SEE PRODUCT"
                        isLink={true}
                        url="/product"
                        storeUpdate={product.slug}
                      />
                    </div>
                  </div>
                );
              }
            });
          })()) || <div>There is an error, please try again.</div>}

        <ProductCategoryCard />
        <AboutAudiophileCard />
        <div className="spacer"></div>
      </div>
    </div>
  );
};

export default CategoryScreen;
