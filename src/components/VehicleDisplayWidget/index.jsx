import FuelEfficiencyDisplay from "../FuelEfficiencyDisplay";
import SvgIcon1 from "./icons/SvgIcon1";
import SvgIcon2 from "./icons/SvgIcon2";
import "./style.css";

function VehicleDisplayWidget() {
  return (
    <div className="vehicle-efficiency-stats-container">
      <div className="vehicle-performance-stats-container">
        {/* <SvgIcon1 className="svg-container4" />
        <SvgIcon2 className="svg-container5" /> */}
      </div>
      <FuelEfficiencyDisplay />
    </div>
  );
}

export default VehicleDisplayWidget;
