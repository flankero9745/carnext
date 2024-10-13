import VehicleInfoDisplay from "../VehicleInfoDisplay";
import DynamicContentRenderer from "../DynamicContentRenderer";
import "./style.css";

function VehicleInfoDisplaySection({
  htmlContent2,
  sanitizedHtmlContent2,
  vehicleTypeSelector1,
  regionFilterLabelText1,
  generateTextStyleFromThemeColorPalette1,
  dynamicTextColorPalette1,
  fontSizeAndColorConfig1,
  textStylingFontSize1,
  dynamicLineHeight1,
  textLayoutStyle1,
}) {
  return (
    <div className="vehicle-selector-region-filter-container">
      <div className="vehicle-selector-container">
        <VehicleInfoDisplay
          htmlContent2={htmlContent2}
          vehicleTypeSelector1={vehicleTypeSelector1}
          generateTextStyleFromThemeColorPalette1={generateTextStyleFromThemeColorPalette1}
          fontSizeAndColorConfig1={fontSizeAndColorConfig1}
          dynamicLineHeight1={dynamicLineHeight1}
        />
      </div>
      <div className="filter-section-container">
        <DynamicContentRenderer
          sanitizedHtmlContent2={sanitizedHtmlContent2}
          regionFilterLabelText1={regionFilterLabelText1}
          dynamicTextColorPalette1={dynamicTextColorPalette1}
          textStylingFontSize1={textStylingFontSize1}
          textLayoutStyle1={textLayoutStyle1}
        />
      </div>
    </div>
  );
}

export default VehicleInfoDisplaySection;
