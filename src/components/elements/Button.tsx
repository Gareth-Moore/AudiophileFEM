import { FaAngleRight } from "react-icons/fa6";
import { ProductCategory, ProductNames, useStore } from "../../store";
import { useNavigate } from "react-router-dom";

interface Props {
  onClickFunction?: () => void;
  buttonType: "accent" | "primary" | "shop" | "primary-inverted";
  innerText: "SHOP" | "SEE PRODUCT" | "ADD TO CART" | "CHECKOUT" | "CONTINUE & PAY" | "BACK TO HOME";
  isLink: boolean;
  url?: "/" | "/home" | "/category" | "/product" | "/error-404-page";
  updateClassName?: string;
  storeUpdate?: ProductCategory | ProductNames;
  closeNavbar?: () => void;
}

const Button = ({
  onClickFunction,
  buttonType,
  innerText,
  isLink,
  url,
  updateClassName,
  storeUpdate,
  closeNavbar,
}: Props) => {
  const { setCategory, setProduct, setScrollToTop } = useStore();
  const navigate = useNavigate();

  if (isLink) {
    return (
      <a
        className={`${buttonType}-button-component ${updateClassName} button-component link-and-btn-text`}
        onClick={(e) => {
          e.preventDefault();
          if (!url) return;
          if (isLink && !url) return alert("Error with component: Button, is link but no url provided");

          closeNavbar && closeNavbar();

          if (storeUpdate) {
            const isProductCategory = (value: string | undefined): value is ProductCategory => {
              if (!value) return false;
              return ["HEADPHONES", "SPEAKERS", "EARPHONES"].includes(value.toUpperCase());
            };

            if (isProductCategory(storeUpdate)) {
              setCategory(storeUpdate);
              navigate(url);
            } else {
              // if not category then product name
              setProduct(storeUpdate);
              navigate(url);
            }
          }
          setScrollToTop();
          navigate(url);
        }}
        href={url || "/error-404-page"}
      >
        {innerText}
        {buttonType === "shop" && <FaAngleRight />}
      </a>
    );
  } else {
    return (
      <button
        className={`${buttonType}-button-component ${updateClassName} button-component link-and-btn-text`}
        onClick={onClickFunction}
      >
        {innerText}
        {buttonType === "shop" && <FaAngleRight />}
      </button>
    );
  }
};

export default Button;
