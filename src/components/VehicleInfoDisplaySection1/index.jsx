import StylishContentSection from "../StylishContentSection";
import VerifiedVinDisplay from "../VerifiedVinDisplay";
import VehicleInfoSection from "../VehicleInfoSection";
import "./style.css";

function VehicleInfoDisplaySection1({ vehicleInfoDisplaySectionArgs }) {
  return (
    <div className="vehicle-search-filters-container">
      <div className="vehicle-filter-panel">
        <div className="vehicle-filter-options-container">
          <StylishContentSection />
          <div className="verified-vin-container1">
            <VerifiedVinDisplay />
            <div className="verified-vin-badge" />
          </div>
        </div>
        <VehicleInfoSection vehicleInfoDisplaySectionArgs={vehicleInfoDisplaySectionArgs} />
      </div>
    </div>
  );
}

export default VehicleInfoDisplaySection1;
