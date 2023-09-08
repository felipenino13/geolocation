require([
    "esri/config", 
    "esri/Map", 
    "esri/views/MapView",

    //add modules graphic for polygons
    "esri/Graphic",
    "esri/layers/GraphicsLayer",
    "esri/layers/FeatureLayer",
    
    //search
    "esri/widgets/Search"

], function(esriConfig, Map, MapView, Graphic, GraphicsLayer, FeatureLayer, Search) {

    //Config Key
    
    esriConfig.apiKey = "AAPKc5fe3b3fae3f4c57b616984758b6af86B8CQSYmJhYyx5P8UNpF_iXbhrOQ0qC2SaYMp8ygcbbXOdIxvzQK-vvxz3k9FWXUp";
    

    //Create a map
    const map = new Map({
    basemap: "arcgis-topographic", // Basemap layer service
    //basemap: "arcgis-navigation" //navigation
});




//Create a mapview

const view = new MapView({
    map: map,
    center: [-74.635, 4.636], // Longitude, latitude
    zoom: 6, // Zoom level
    container: "viewDiv" // Div element
});










//add search widget
const search = new Search({  //Add Search widget
    view: view
  });
view.ui.add(search, "top-left"); //Add to the map

//add graphy layer
const graphicsLayer = new GraphicsLayer();
map.add(graphicsLayer);

/*
//add point graphic
const point = { //Create a point
    type: "point",
    longitude: -74.0866213,
    latitude: 4.6381991
};
 const simpleMarkerSymbol = {
    type: "simple-marker",
    color: [226, 119, 40],  // Orange
    outline: {
        color: [255, 255, 255], // White
        width: 1
    }
};

const pointGraphic = new Graphic({
    geometry: point,
    symbol: simpleMarkerSymbol
});
graphicsLayer.add(pointGraphic);

*/

esriConfig.apiKey = "AAPK7f9d134b58a646b8bfa9a0f4bc14aed2xlxjmVtOfb4zfD_8_Y3Sj58hgYb-eeEgKAzQfJjcwLb1OyJKwlk01xxtdji_KZBw";
const layer = new FeatureLayer({
    url: "https://services6.arcgis.com/4bqDruSLRri6LXWK/arcgis/rest/services/municipios/FeatureServer/0"
    
  });
  
  map.add(layer);

   // Define a pop-up for Trailheads
   const popupTrailheads = {
    "title": "Descripción",
    "content": "<b>Municipio:</b> {Municipio}<br> <b>Departamento:</b> {departamento}<br> <b>Descripción:</b> {description}<br> <b>Población:</b> {poblacion}<br> <img src='https://services6.arcgis.com/4bqDruSLRri6LXWK/arcgis/rest/services/municipios/FeatureServer/0/{OBJECTID}/attachments/{OBJECTID}'>"
  }


  const trailheads = new FeatureLayer({
    url: "https://services6.arcgis.com/4bqDruSLRri6LXWK/arcgis/rest/services/municipios/FeatureServer/0",
    outFields: ["description","CITY_JUR","X_STREET","PARKING","ELEV_FT"],
    popupTemplate: popupTrailheads,   

    
  });

  



  
  

  map.add(trailheads);

  
  /*
  // Departamentos layer

  // Municipios layer estilos graficos

  const departamentosRenderer = {
    "type": "simple",
    "symbol": {
      "type": "simple-line",
      "width": "1.75px",
      "color": "yellow",
      "border-style": "dotted"
      
    }
  }

  const featureLayer = new FeatureLayer({
    url: "https://services6.arcgis.com/4bqDruSLRri6LXWK/arcgis/rest/services/ufh/FeatureServer/0",
    //llama los estilos
    renderer: departamentosRenderer,
  });
  
  map.add(featureLayer);
  */

  // Municipios layer estilos graficos

  const municipiosRenderer = {
    "type": "simple",
    "symbol": {
      "type": "simple-line",
      "width": "1.5px",
      "color": "#65876B",
      "style": "short-dot",
      
    }
  }

  // Municipios layer
  const featureLayer2 = new FeatureLayer({
    url: "https://services6.arcgis.com/4bqDruSLRri6LXWK/arcgis/rest/services/mgn2022_mpio_politico/FeatureServer/0",
    //llama los estilos
    renderer: municipiosRenderer,
  });

  
  
  map.add(featureLayer2);



  
   


});

