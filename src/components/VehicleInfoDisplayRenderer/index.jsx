import VehicleInfoDisplaySection from "../VehicleInfoDisplaySection";
import { theme } from "../../theme";
import "./style.css";

function VehicleInfoDisplayRenderer({ vehicleInfoDisplaySectionArgs }) {
  const vehicleInfoDisplaySectionStyles = [
    {
      fontSizeAndColorConfig1: theme.others.FONT_SIZE_171B2C,
      generateTextStyleFromThemeColorPalette1: theme.colors.COLOR_9700F7DA,
      textStylingFontSize1: theme.others.FONT_SIZE_171EED,
      textLayoutStyle1: theme.others.LINE_HEIGHT_172A30,
      dynamicTextColorPalette1: theme.colors.COLOR_9C758683,
    },
    {
      fontSizeAndColorConfig1: theme.others.FONT_SIZE_171EED,
      generateTextStyleFromThemeColorPalette1: theme.colors.COLOR_9C758683,
      dynamicLineHeight1: theme.others.LINE_HEIGHT_172A30,
      textStylingFontSize1: theme.others.FONT_SIZE_171B2C,
      dynamicTextColorPalette1: theme.colors.COLOR_9700F7DA,
    },
    {
      fontSizeAndColorConfig1: theme.others.FONT_SIZE_171EED,
      generateTextStyleFromThemeColorPalette1: theme.colors.COLOR_9C758683,
      dynamicLineHeight1: theme.others.LINE_HEIGHT_172A30,
      textStylingFontSize1: theme.others.FONT_SIZE_569E1233,
      dynamicTextColorPalette1: theme.colors.COLOR_9700F7DA,
    },
  ];
  return (
    <div className="vehicle-region-selector-container">
      {vehicleInfoDisplaySectionArgs.map((data, index) => {
        return <VehicleInfoDisplaySection {...data} key={index} {...vehicleInfoDisplaySectionStyles[index]} />;
      })}
    </div>
  );
}

export default VehicleInfoDisplayRenderer;
