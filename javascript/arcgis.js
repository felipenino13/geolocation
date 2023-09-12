require([
    "esri/config", 
    "esri/Map", 
    "esri/views/MapView",

    //add modules graphic for polygons
    "esri/Graphic",
    "esri/layers/GraphicsLayer",
    "esri/layers/FeatureLayer",
    
    //search
    "esri/widgets/Search",

  ], 

  function(esriConfig, Map, MapView, Graphic, GraphicsLayer, FeatureLayer, Search) {

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

    /*
    const puntosRenderer = {
      type: "simple",
      symbol: {
        type: "simple-marker",
        color: "orange",
        width: "18px",
        height: "18px",
        style: "solid"
      }
    }
    */
    
    //puntos de los municipios
    const layer = new FeatureLayer({
      url: "https://services6.arcgis.com/4bqDruSLRri6LXWK/arcgis/rest/services/municipios/FeatureServer/0",
      //renderer: puntosRenderer,

    });
  
    map.add(layer);

    
    // Define a pop-up for Trailheads
    let x = "<h2>{Municipio}</h2><p>{departamento}</p><hr><b>UFH encontradas:</b> {ufhEncontradas}<br><b>UFH líder</b> {ufhLider}<br><hr><b>Líneas productivas:</b> {lineasProductivas}<br> <b>Líneas agrícolas:</b> {lineasAgricolas}<br><b>Líneas pecuarias:</b> {lineasPecuarias}<br><br><img src='https://services6.arcgis.com/4bqDruSLRri6LXWK/arcgis/rest/services/municipios/FeatureServer/0/{OBJECTID}/attachments/{OBJECTID}'><br>";
    
    // Action descripción
    const measureThisAction = {
      title: "UFH Aplicables",
      id: "measure-this",
      image: "Measure_Distance16.png",
    }

    

    const popupTrailheads = {
      title: "Descripción",
      content: x,
      //actions: [measureThisAction]
    }

    


    const trailheads = new FeatureLayer({
      url: "https://services6.arcgis.com/4bqDruSLRri6LXWK/arcgis/rest/services/municipios/FeatureServer/0",
      outFields: ["*"], // Consulta todos los atributos
      popupTemplate: popupTrailheads,   

    
    });

    map.add(trailheads);



    

    /*

    document.getElementsByClassName("btn").addEventListener("onclick", function() {
      let y = "Hola mundo"
      if(boton.checked){
      console.log(y)
      }
      else{
        console.log("adios")
      }
    });

    */
  
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

    const municipiosRenderer = {
      "type": "simple",
      "symbol": {
        "type": "simple-line",
        "width": "2px",
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

    /*

    const checkbox = document.getElementById("boton");
    const departamentoLayer = map.add(featureLayer2);

    checkbox.addEventListener("change", function(){
      if (checkbox.checked){
        departamentoLayer.style.display= "block";
      }
      else {
        departamentoLayer.style.display= "none"
      }
    });
    */
    
    /*
    document.getElementById("boton").onclick = va;
    function va(){


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

      console.log("hola mundo como estas")


    }
    */ 
   
    
    
    document.getElementById("boton").addEventListener("change", function() {


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

      if(boton.checked){
        map.add(featureLayer2);
      } 
      
      else{
        console.log("listo")
        map.layers.removeAt(3)
      }

    });
    
    //Capa de las ufh adjudicables de pradera

    document.getElementById("ufh").addEventListener("change", function() {


      /*renderer capa*/
      const ufhRenderer = {
        type: "class-breaks",
        field: "clase_ufh",
        normalizationField: "EDUCBASECY",
        legendOptions: {
          title: "% of adults with no high school education"
        },
        defaultSymbol: {
          type: "simple-fill",
          color: [255, 255, 255, 0.5],
          //style: "backward-diagonal",
          outline: {
            width: 0.5,
            color: [50, 50, 50, 0.5]
          },
        },
        defaultLabel: "no data",
          classBreakInfos: [
            {
              minValue: 1,
              maxValue: 2,
              symbol: {
                "type": "simple-fill",
                "width": "1.5px",
                "color": [78, 75, 135, 0.5],
                "style": "short-dot",
              },
              label: "< 5%"
            },
            {
              minValue: 2,
              maxValue: 3,
              symbol: {
                "type": "simple-fill",
                "width": "1.5px",
                "color": [0, 166, 255, 0.5],
                "style": "short-dot",
              },
              label: "< 5%"
            },
            {
              minValue: 3,
              maxValue: 4,
              symbol: {
                "type": "simple-fill",
                "width": "1.5px",
                "color": [45, 149, 192, 0.5],
                "style": "short-dot",
              },
              label: "< 5%"
            },
            {
              minValue: 4,
              maxValue: 5,
              symbol: {
                "type": "simple-fill",
                "width": "1.5px",
                "color": [153, 193, 212, 0.5],
                "style": "short-dot",
              },
              label: "< 5%"
            },
            {
              minValue: 5,
              maxValue: 6,
              symbol: {
                "type": "simple-fill",
                "width": "1.5px",
                "color": [53, 161, 75, 0.5],
                "style": "short-dot",
              },
              label: "< 5%"
            },
            {
              minValue: 6,
              maxValue: 7,
              symbol: {
                "type": "simple-fill",
                "width": "1.5px",
                "color": [162, 193, 63, 0.5],
                "style": "short-dot",
              },
              label: "< 5%"
            },
            {
              minValue: 7,
              maxValue: 8,
              symbol: {
                "type": "simple-fill",
                "width": "1.5px",
                "color": [245, 229, 170, 0.5],
                "style": "short-dot",
              },
              label: "< 5%"
            },
            {
              minValue: 8,
              maxValue: 9,
              symbol: {
                "type": "simple-fill",
                "width": "1.5px",
                "color": [250, 216, 91, 0.5],
                "style": "short-dot",
              },
              label: "< 5%"
            },
            {
              minValue: 9,
              maxValue: 10,
              symbol: {
                "type": "simple-fill",
                "width": "1.5px",
                "color": [251, 129, 72, 0.5],
                "style": "short-dot",
              },
              label: "< 5%"
            },
            {
              minValue: 10,
              maxValue: 11,
              symbol: {
                "type": "simple-fill",
                "width": "1.5px",
                "color": [251, 119, 169, 0.5],
                "style": "short-dot",
                
              },
              label: "< 5%"
            },
            
          ]
      }  
        
        
      

      /*UFH de Pradera*/
      const ufhPradera = new FeatureLayer({
        url: "https://services6.arcgis.com/4bqDruSLRri6LXWK/arcgis/rest/services/shppraderaufhsaplicables/FeatureServer/0",
        renderer: ufhRenderer,
      });

      
      if(ufh.checked){
        map.add(ufhPradera);
      } 
      
      else{
        map.layers.removeAt(3)
      }

    });

    
    
    
  }

  
  
);

  

