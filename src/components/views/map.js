import { LitElement, html, css, unsafeCSS } from "lit";
import maplibregl from "maplibre-gl";
import maplibreCss from "maplibre-gl/dist/maplibre-gl.css?inline";

class DwMap extends LitElement {
  static properties = {
    lat: { type: Number },
    lng: { type: Number },
  };

  static styles = [
    css`
      ${unsafeCSS(maplibreCss)}
    `,
    css`
      .dw-maps-container {
        display: flex;
        flex-direction: row;
        gap: 20px;
      }
      .dw-maps-container-item {
        flex: 1;
        background: rgba(34, 197, 94, 0.2);
        border-radius: 16px;
      }
      .dw-maps-container-item-left {
        padding: 16px;
      }
      #map {
        height: 50vh;
      }
    `,
  ];

  constructor() {
    super();
    this.lat = 51.4771;
    this.lng = 0.0006;
    this._map = null;
    this._marker = null;
  }

  firstUpdated() {
    const style = {
      version: 8,
      sources: {
        osm: {
          type: "raster",
          tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
          tileSize: 256,
          attribution: "&copy; OpenStreetMap contributors",
        },
      },
      layers: [
        {
          id: "osm",
          type: "raster",
          source: "osm",
        },
      ],
    };

    this._map = new maplibregl.Map({
      container: this.renderRoot.querySelector("#map"),
      style,
      center: [this.lng, this.lat],
      zoom: 13,
    });

    this._map.addControl(new maplibregl.NavigationControl(), "top-right");

    this._marker = new maplibregl.Marker()
      .setLngLat([this.lng, this.lat])
      .addTo(this._map);

    setTimeout(() => this._map.resize(), 0);
  }

  render() {
    return html`
      <div class="dw-wrapper">
        <dw-nav-bar></dw-nav-bar>
        <h1>Map Page</h1>
        <div class="dw-maps-container">
          ${this._driverDetails()} ${this._mapDetails()}
        </div>
      </div>
    `;
  }

  _driverDetails() {
    return html`
      <div class="dw-maps-container-item dw-maps-container-item-left">
        <label>
          Latitude:
          <input
            type="number"
            step="any"
            .value=${this.lat}
            @input=${(e) => {
              this.lat = parseFloat(e.target.value);
              this._updateCoordinates();
            }}
          />
        </label>

        <br /><br />

        <label>
          Longitude:
          <input
            type="number"
            step="any"
            .value=${this.lng}
            @input=${(e) => {
              this.lng = parseFloat(e.target.value);
              this._updateCoordinates();
            }}
          />
        </label>
      </div>
    `;
  }

  _updateCoordinates() {
    if (!this._map) return;

    const lngLat = [Number(this.lng), Number(this.lat)];

    this._map.setCenter(lngLat);
    this._marker.setLngLat(lngLat);
  }

  _mapDetails() {
    return html` <div id="map" class="dw-maps-container-item"></div> `;
  }
}

customElements.define("dw-map", DwMap);
