import VehicleInfoDisplaySection1 from "../VehicleInfoDisplaySection1";
import DisplayContentWidget from "../DisplayContentWidget";
import "./style.css";

function ComponentYouSelected({ vehicleInfoDisplaySectionArgs }) {
  return (
    <div className="main-content-container1">
      <div className="header-container">
        <div className="vertical-image-container">
          <img
            src="/assets/image_25a0de7b.png"
            alt=""
            className="text-block-container"
          />
        </div>
        <div className="vertical-align-image-container">
          <img
            src="/assets/image_8e7dbce2.png"
            className="image-container-styled"
          />
        </div>
      </div>

      <div className="main-content-container">
        <div className="search-container">
          <div className="site-search-filter-container">
            <div className="search-header-container">
              {/* <img class="search-icon" src="/search.svg" alt="Поиск" /> */}
              <input
                className="search-input"
                type="text"
                placeholder="Поиск..."
              />
            </div>
            <VehicleInfoDisplaySection1
              vehicleInfoDisplaySectionArgs={vehicleInfoDisplaySectionArgs}
            />
          </div>
        </div>
        <DisplayContentWidget />
      </div>
    </div>
  );
}

export default ComponentYouSelected;
