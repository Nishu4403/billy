import React, { useRef, useEffect, useState } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import "./map.css";
import configData from "../config";
import Box from "@mui/material/Box";
import Navbar from "./Navbar/navbar";

 function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const center = { lng: 77.594566, lat:12.971599  };
  const zoom = 11;
  maptilersdk.config.apiKey = configData.MAPTILER_API_KEY;
  const geodata = configData.MAPTILER_DATSET_ID;

  useEffect(() => {
    if (map.current) return; // stops map from intializing more than once

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.DATAVIZ.LIGHT,
      center: [center.lng, center.lat],
      zoom: zoom,
    });

    

    map.current.on("load", () => {
      maptilersdk.helpers.addPoint(map.current, {
        data: geodata,
        pointColor: maptilersdk.ColorRampCollection.TURBO.scale(1, 30),
        property: "minimum_nights",
        
        showLabel: true,
        labelColor: "white",
        cluster: true,
      });
    });
  }, [center.lng, center.lat, zoom]);

  return (
    <Box sx={{ display: "flex" }}>
      
      <div>
        <div ref={mapContainer} id="map" className="map" />
      </div>
    </Box>
  );
}

export default Map;