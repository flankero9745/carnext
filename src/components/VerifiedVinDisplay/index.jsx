import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";

function VerifiedVinDisplay() {
  return (
    <div className="verified-vin-container">
      <SvgIcon1 className="svg-container1" />
      <p className="verified-vin-text-style"> Проверенный VIN</p>
    </div>
  );
}

export default VerifiedVinDisplay;
