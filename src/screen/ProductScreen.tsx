import ProductCategoryCard from "../components/sharedComponents/ProductCategoryCard";
import AboutAudiophileCard from "../components/sharedComponents/AboutAudiophileCard";
import { productsData } from "../assets/data";
import { useStore } from "../store";
import Button from "../components/elements/Button";
import SuggestedProducts from "../components/dependantComponents/ProductPage/SuggestedProducts";

const ProduceScreen = () => {
  const { currentProduct, currentBreakpoint } = useStore();

  return (
    <div className="product-screen-component">
      <div className="container">
        <div className="spacer"></div>
        {(currentProduct &&
          productsData &&
          currentBreakpoint &&
          productsData.map((product, index) => {
            if (product.slug === currentProduct) {
              return (
                <div className="product-card" key={index}>
                  <div className="product-card__preview">
                    <div className="image-container">
                      <img
                        className="image"
                        src={product.images[currentBreakpoint].product}
                        alt={`Preview image for ${product.name} ${product.category}`}
                      />
                    </div>
                    <div className="content-container">
                      {product.newProduct && <p className="new-product">NEW PRODUCT</p>}
                      <div className="title-container">
                        <h1 className="title">{product.name}</h1>
                        <h2 className="category">{product.category}</h2>
                      </div>
                      <p className="description">{product.description}</p>
                      <p className="price">$ {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                      <div className="cart-buttons-container">
                        <div className="control-buttons">
                          <button className="remove">-</button>
                          <p className="items-count">5</p>
                          <button className="add">+</button>
                        </div>
                        <Button buttonType="accent" innerText="ADD TO CART" isLink={false} />
                      </div>
                    </div>
                  </div>

                  <div className="product-card__features">
                    <div className="features">
                      <h2 className="title">FEATURES</h2>
                      <p className="text text-1">{product.features[0]}</p>
                      <p className="text text-2">{product.features[1]}</p>
                    </div>
                    <div className="included-items">
                      <h2 className="title">IN THE BOX</h2>
                      <ul className="list">
                        {product.includedItems.map((item, index) => (
                          <li key={index} className="item">
                            <p className="quantity">{item.quantity}x</p>
                            <p className="name">{item.name}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="product-card__images">
                    <div
                      className="image image-1"
                      style={{ backgroundImage: `url(${product.images[currentBreakpoint].gallery1})` }}
                    ></div>
                    <div
                      className="image image-2"
                      style={{ backgroundImage: `url(${product.images[currentBreakpoint].gallery2})` }}
                    ></div>
                    <div
                      className="image image-3"
                      style={{ backgroundImage: `url(${product.images[currentBreakpoint].gallery3})` }}
                    ></div>
                  </div>
                </div>
              );
            }
          })) || <div>There is no product to show.</div>}
        <SuggestedProducts />
        <ProductCategoryCard extraPadding={true} />
        <AboutAudiophileCard />
        <div className="spacer"></div>
      </div>
    </div>
  );
};

export default ProduceScreen;
