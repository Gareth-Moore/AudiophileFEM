import { FaAngleRight } from "react-icons/fa6";

interface Props {
  onClickFunction?: () => void;
  buttonType: "accent" | "primary" | "shop" | "primary-inverted";
  innerText: "SHOP" | "SEE PRODUCT" | "ADD TO CART" | "CHECKOUT" | "CONTINUE & PAY" | "BACK TO HOME";
  isLink: true | false;
  url?: string;
}

const Button = ({ onClickFunction, buttonType, innerText, isLink, url }: Props) => {
  if (isLink) {
    return (
      <a
        className={`${buttonType}-button-component button-component link-and-btn-text`}
        onClick={onClickFunction}
        href={url || "/error-404-page"}
      >
        {innerText}
        {buttonType === "shop" && <FaAngleRight />}
      </a>
    );
  } else {
    return (
      <button className={`${buttonType}-button-component button-component link-and-btn-text`} onClick={onClickFunction}>
        {innerText}
        {buttonType === "shop" && <FaAngleRight />}
      </button>
    );
  }
};

export default Button;
