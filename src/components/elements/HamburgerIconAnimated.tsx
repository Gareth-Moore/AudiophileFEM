interface Props {
  onClickFunction?: () => void;
  isMenuOpen: boolean;
}

const HamburgerIconAnimated = ({ onClickFunction, isMenuOpen }: Props) => {
  return (
    <div id="hamburger-icon-container">
      <button id="hamburger-icon" onClick={onClickFunction}>
        <div className={`line line-1 ${isMenuOpen ? "closed" : ""}`}></div>
        <div className={`line line-2 ${isMenuOpen ? "closed" : ""}`}></div>
        <div className={`line line-3 ${isMenuOpen ? "closed" : ""}`}></div>
      </button>
    </div>
  );
};

export default HamburgerIconAnimated;
