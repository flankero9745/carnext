import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";

function DynamicContentRenderer({ sanitizedHtmlContent2, regionFilterLabelText1, dynamicTextColorPalette1, textStylingFontSize1, textLayoutStyle1 }) {
  return (
    <div className="vehicle-type-selector-container">
      <p className="vehicle-type-label-text-style" style={{ fontSize: textStylingFontSize1, lineHeight: textLayoutStyle1, color: dynamicTextColorPalette1 }}>
        {regionFilterLabelText1}
      </p>
      <SvgIcon1 className="svg-container2" sanitizedHtmlContent2={sanitizedHtmlContent2} />
    </div>
  );
}

export default DynamicContentRenderer;
