import { Button } from "@mui/base";
import VehicleInfoDisplayRenderer from "../VehicleInfoDisplayRenderer";
import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";

function VehicleInfoSection({ vehicleInfoDisplaySectionArgs }) {
  return (
    <div className="center-column-layout">
      <VehicleInfoDisplayRenderer
        vehicleInfoDisplaySectionArgs={vehicleInfoDisplaySectionArgs}
      />
      <div className="advanced-search-container1">
        {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
        <Button className="advanced-search-button">Расширенный поиск</Button>
        <div className="advanced-search-container">
          <div className="search-container1">
            <SvgIcon1 className="svg-container3" />
            <p className="search-heading"> Поиск</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VehicleInfoSection;
