import StylishContentBlock from "../StylishContentBlock";
import "./style.css";

function StylishContentSection() {
  return (
    <div className="horizontal-menu-container">
      <StylishContentBlock />
      <div className="vehicle-status-options-container">
        <p className="product-description-style">В наличии</p>
      </div>
    </div>
  );
}

export default StylishContentSection;
