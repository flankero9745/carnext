import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";

function VehicleInfoDisplay({ htmlContent2, vehicleTypeSelector1, generateTextStyleFromThemeColorPalette1, fontSizeAndColorConfig1, dynamicLineHeight1 }) {
  return (
    <div className="vehicle-type-selector-container">
      <p className="vehicle-type-label-text-style" style={{ fontSize: fontSizeAndColorConfig1, color: generateTextStyleFromThemeColorPalette1, lineHeight: dynamicLineHeight1 }}>
        {vehicleTypeSelector1}
      </p>
      <SvgIcon1 className="svg-container2" htmlContent2={htmlContent2} />
    </div>
  );
}

export default VehicleInfoDisplay;
