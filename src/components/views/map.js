import { LitElement, html, css, unsafeCSS } from "lit";
import maplibregl from "maplibre-gl";
import maplibreCss from "maplibre-gl/dist/maplibre-gl.css?inline";

class DwMap extends LitElement {
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

    const map = new maplibregl.Map({
      container: this.renderRoot.querySelector("#map"),
      style,
      center: [-0.09, 51.505],
      zoom: 13,
    });

    map.addControl(new maplibregl.NavigationControl(), "top-right");

    // helps if inside flex / tabs / hidden areas at first render
    setTimeout(() => map.resize(), 0);
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
        Enter your details.
      </div>
    `;
  }

  _mapDetails() {
    return html` <div id="map" class="dw-maps-container-item"></div> `;
  }
}

customElements.define("dw-map", DwMap);
