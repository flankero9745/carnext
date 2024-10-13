import EnglishContactSection from "../EnglishContactSection";
import VehicleDisplayWidget from "../VehicleDisplayWidget";
import "./style.css";

function DisplayContentWidget() {
  return (
    <div className="vertical-centered-column">
      <EnglishContactSection />
      <VehicleDisplayWidget />
    </div>
  );
}

export default DisplayContentWidget;
