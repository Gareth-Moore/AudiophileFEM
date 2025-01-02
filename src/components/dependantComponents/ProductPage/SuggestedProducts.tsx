import Button from "../../elements/Button";
import { ProductNames, productsData } from "../../../assets/data";
import { useStore } from "../../../store";
import { useEffect, useState } from "react";

const SuggestedProducts = () => {
  const { currentProduct, currentBreakpoint } = useStore();
  const [selectedProducts, setSelectedProducts] = useState<ProductNames[]>(["xx59"]);

  selectedProducts;
  useEffect(() => {
    // get array of product slugs
    let productList = productsData.map((product) => product.slug);

    // remove currentProduct from array of slugs
    productList = productList.filter((value) => value !== currentProduct);

    // remove 1 random index of the 5 remaining
    let randomIndex = Math.floor(Math.random() * 5);
    productList = productList.filter((value, index) => {
      value;
      return index === randomIndex ? false : true;
    });
    // remove 1 random index of the 4 remaining
    randomIndex = Math.floor(Math.random() * 4);
    productList = productList.filter((value, index) => {
      value;
      return index === randomIndex ? false : true;
    });

    setSelectedProducts([...productList]);
  }, [currentProduct]);

  return (
    <div className="suggested-products-component">
      <div className="container">
        <h2 className="title">YOU MAY ALSO LIKE</h2>
        <div className="content-container">
          {productsData &&
            productsData.map((product, index) => {
              if (selectedProducts.includes(product.slug))
                return (
                  <div className="card" key={index}>
                    <div
                      className="image-container"
                      style={{
                        backgroundImage: `url(${
                          currentBreakpoint ? product.images[currentBreakpoint].product : "No url found"
                        })`,
                      }}
                    ></div>
                    <h3 className="card-title">{product.name.toUpperCase()}</h3>
                    <Button
                      buttonType="accent"
                      innerText="SEE PRODUCT"
                      isLink={true}
                      url="/product"
                      storeUpdate={product.slug}
                    />
                  </div>
                );
            })}
        </div>
      </div>
    </div>
  );
};

export default SuggestedProducts;
