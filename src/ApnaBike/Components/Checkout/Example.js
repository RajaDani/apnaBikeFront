import React, { useState, useRef, useCallback, useEffect } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import { Button } from "reactstrap";
import MapGL from "react-map-gl";
import { Marker } from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";
import ReactMapGL, { GeolocateControl } from "react-map-gl";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiaWFtZGV2ZWxvcGVyODg5IiwiYSI6ImNreHU4c2diMzZsOWEyd3J5MGtpcWJ2ZGUifQ.Pg2tHt2XWkrO6As17w7RDA";

const Example = (props) => {
  const [viewport, setViewport] = useState({
    latitude: 32.9330657,
    longitude: 72.8633384,
    zoom: 10,
  });
  const [marker, setmarker] = useState(true);
  const mapRef = useRef();

  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );

  const handleGeocoderViewportChange = useCallback((newViewport) => {
    const geocoderDefaultOverrides = { transitionDuration: 1000 };
    setmarker(!marker);
    setTimeout(() => {
      if (props.mapModalChecker) {
        props.mapModalChecker(false, viewport);
      }
    }, [2000]);

    return handleViewportChange({
      ...newViewport,
      ...geocoderDefaultOverrides,
    });
  }, []);

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
  }

  function showPosition(position) {
    setViewport({
      ...viewport,
      longitude: position.coords.longitude,
      latitude: position.coords.latitude,
    });

    if (props.mapModalChecker) {
      props.mapModalChecker(false, viewport);
    }
  }

  return (
    <div style={{ height: "85vh", width: "80vw", marginLeft: "-300px" }}>
      <MapGL
        ref={mapRef}
        {...viewport}
        width="100%"
        height="100%"
        onViewportChange={handleViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        <Button
          className="btn btn-primary m-2"
          style={{ color: "white" }}
          onClick={() => getLocation()}
          outline
        >
          Get my Location
        </Button>
        <Geocoder
          mapRef={mapRef}
          onViewportChange={handleGeocoderViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          position="end"
          placeholder="Search.."
          marker={true}
          countries="PK"
          style="mapbox://styles/mapbox/streets-v9"
        />

        {marker === true ? (
          <Marker {...viewport} offsetLeft={-20} offsetTop={-10}>
            <i
              className="fas fa-map-marker-alt fa-2x"
              style={{ color: "blue" }}
            ></i>
          </Marker>
        ) : null}
      </MapGL>
    </div>
  );
};

export default Example;
