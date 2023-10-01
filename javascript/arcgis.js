require([
    "esri/config", 
    "esri/Map", 
    "esri/views/MapView",

    //add modules graphic for polygons
    "esri/Graphic",
    "esri/layers/GraphicsLayer",
    "esri/layers/FeatureLayer",
    
    //add module search
    "esri/widgets/Search",
    "esri/core/reactiveUtils",
    "esri/views/SceneView",

    //"esri/widgets/Legend",
    "esri/views/BasemapView",
    
    
    
    

  ], 

  function(esriConfig, Map, MapView, Graphic, GraphicsLayer, FeatureLayer, Search, reactiveUtils, SceneView,/*Legend*/BasemapView,) {

    //Config Key
    
    esriConfig.apiKey = "AAPKc5fe3b3fae3f4c57b616984758b6af86B8CQSYmJhYyx5P8UNpF_iXbhrOQ0qC2SaYMp8ygcbbXOdIxvzQK-vvxz3k9FWXUp";
    

    //Create a map
    const map = new Map({
      basemap: "arcgis-topographic", // Basemap layer service
      ground: "world-elevation",
      //basemap: "arcgis-dark-gray",
      //basemap: "arcgis-navigation" //navigation
    });

   
    
    let view = new MapView({
      map: map,
      // center Colombia
      center: [-74.635, 4.636], // Longitude, latitude
      zoom: 6, // Zoom level
      container: "viewDiv" // Div element
    });

   

    

    //Create a mapview
/*
    const view = new MapView({
      map: map,
      // center Colombia
      center: [-74.635, 4.636], // Longitude, latitude
      zoom: 6, // Zoom level
      container: "viewDiv" // Div element
    });
*/

/*
    //Create scene 3D
    const view = new SceneView({
      container: "viewDiv",
      map: map,
      camera: {
        position: {
          x: -74.635, //Longitude
          y: 4.636, //Latitude
          z: 200000 //Meters
        },
        tilt: 75
      }
    });
*/  


    //add search widget
    const search = new Search({  //Add Search widget
      view: view
    });
      
    view.ui.add(search, "top-left"); //Add to the map
    
    esriConfig.apiKey = "AAPK7f9d134b58a646b8bfa9a0f4bc14aed2xlxjmVtOfb4zfD_8_Y3Sj58hgYb-eeEgKAzQfJjcwLb1OyJKwlk01xxtdji_KZBw";

    
    //estilos puntos de municipios
    const puntosRenderer = {
      type: "simple",
      symbol: {
        type: "simple-marker",
        color: "orange",
        width: "18px",
        height: "18px",

      }
    }
    

    /*
    //Legend
    const legend = new Legend ({
      view: view
    });
    view.ui.add(legend, "top-right");
    */

    /*renderer capa de colores estilos ufh*/
    const ufhRenderer = {
      type: "class-breaks",
      field: "clase_ufh",
      normalizationField: "EDUCBASECY",
      legendOptions: {
        title: "Tipos de Unidades Físicas Homogéneas"
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
              //"label": "hola como estas",
              outline: {
                color: [78, 75, 135, 0.5],
                width: 1 
              }
            },
            label: "Excelente"
          },
          {
            minValue: 2,
            maxValue: 3,
            symbol: {
              "type": "simple-fill",
              "width": "1.5px",
              "color": [0, 166, 255, 0.5],
              outline: {
                color: [0, 166, 255, 0.5],
                width: 1 
              }
            },
            label: "Muy Buena"
          },
          {
            minValue: 3,
            maxValue: 4,
            symbol: {
              "type": "simple-fill",
              "width": "1.5px",
              "color": [45, 149, 192, 0.5],
              outline: {
                color: [45, 149, 192, 0.5],
                width: 1 
              }
            },
            label: "Buena"
          },
          {
            minValue: 4,
            maxValue: 5,
            symbol: {
              "type": "simple-fill",
              "width": "1.5px",
              "color": [153, 193, 212, 0.5],
              outline: {
                color: [153, 193, 212, 0.5],
                width: 1 
              }
            },
            label: "Moderadamente buena"
          },
          {
            minValue: 5,
            maxValue: 6,
            symbol: {
              "type": "simple-fill",
              "width": "1.5px",
              "color": [26, 107, 66, 0.5],
              outline: {
                color: [26, 107, 66, 0.5],
                width: 1 
              }
            },
            label: "Moderadamente buena a mediana"
          },
          {
            minValue: 6,
            maxValue: 7,
            symbol: {
              "type": "simple-fill",
              "width": "1.5px",
              "color": [162, 193, 63, 0.5],
              //agregar borde al fill
              outline: {
                // Configuración del borde
                color: [162, 193, 63, 0.5], // Color del borde
                width: 1 // Ancho del borde
              }
            },
            label: "Mediana"
          },
          
          {
            minValue: 7,
            maxValue: 8,
            symbol: {
              "type": "simple-fill",
              "width": "1.5px",
              "color": [245, 229, 170, 0.5],
              outline: {
                color: [245, 229, 170, 0.5],
                width: 1 
              }
            },
            label: "Mediana a regular"
          },
          {
            minValue: 8,
            maxValue: 9,
            symbol: {
              "type": "simple-fill",
              "width": "1.5px",
              "color": [250, 216, 91, 0.5],
              outline: {
                color: [250, 216, 91, 0.5],
                width: 1 
              }
            },
            label: "Regular"
          },
          {
            minValue: 9,
            maxValue: 10,
            symbol: {
              "type": "simple-fill",
              "width": "1.5px",
              "color": [251, 129, 72, 0.5],
              outline: {
                color: [251, 129, 72, 0.5],
                width: 1 
              }
            },
            label: "Regular a mala"
          },
          {
            minValue: 10,
            maxValue: 11,
            symbol: {
              "type": "simple-fill",
              "width": "1.5px",
              "color": [251, 119, 169, 0.5],
              outline: {
                color: [251, 119, 169, 0.5],
                width: 1 
              }
            },
            label: "Mala"
          },
          {
            minValue: 11,
            maxValue: 12,
            symbol: {
              "type": "simple-fill",
              "width": "1.5px",
              "color": [255, 78, 130, 0.5],
              outline: {
                color: [255, 78, 130, 0.5],
                width: 1 
              }
            },
            label: "Mala a muy mala"
          },
          {
            minValue: 12,
            maxValue: 13,
            symbol: {
              "type": "simple-fill",
              "width": "1.5px",
              "color": [161, 71, 29, 0.5],
              outline: {
                color: [161, 71, 29, 0.5],
                width: 1 
              }
            },
            label: "Muy mala"
          },
          {
            minValue: 13,
            maxValue: 14,
            symbol: {
              "type": "simple-fill",
              "width": "1.5px",
              "color": [75, 51, 32, 0.5],
              outline: {
                color: [75, 51, 32, 0.5],
                width: 1 
              }
            },
            label: "Improductiva"
          },
          
        ]

        
    } 
    
    

    

    // Define contenido del popup de los puntos generales del municipio
    let x = "<div class='cardName' style='background-image:url({imagenes});'><div class='degrade'></div><div class='tituloPopup'><h2 style='color:white'>{Municipio}</h2><p style='color:white'>{departamento}</p></div></div><hr><b>Rango del cálculo:</b> {rango_calculo_min} Ha- {rango_calculo_max} Ha<br><b>UFH encontradas:</b> {ufhEncontradas}<br><b>UFH líderes</b> {ufhLider}<br><hr><b>Líneas productivas:</b> {lineasProductivas}<br> <b>Líneas agrícolas:</b> {lineasAgricolas}<br><b>Líneas pecuarias:</b> {lineasPecuarias}<br><hr><a class='button-line' href='{link_informe}'><img src='https://raw.githubusercontent.com/felipenino13/geolocation/main/img/book.svg'> Informe PDF</a><br><div style='display:none' class='mapacero'>{capashp}</div>";
    let y = "<div style='display:none' class='mapacero'>{capashp}</div>";
    //PRUEBA ACTION
    //PRUEBA DEFINE EL BOTON EN EL ARREGLO
    const primerAction = {
      title:"UFH Municipio",
      id:"camara",
      image: "https://raw.githubusercontent.com/felipenino13/geolocation/main/img/polygon.svg"
    };


    const popupPuntosMunicipios = {
      title: "Descripción"+y, 
      content: x,
      //content: y,
      collapsed: true, 
      //Esto agrega una acción al popup
      actions: [primerAction], 
    };
    
    //PRUEBA DEFINE LA FUNCION DEL ID
    //function camaraAcccion(){
      //console.log("toda accion conlleva una reacción")
    //}

    function camaraAcccion(){
      
      var elementoMapacero = document.querySelector(".mapacero");
      
      if (elementoMapacero) {
        var contenidoTexto = elementoMapacero.textContent;
        //console.log(contenidoTexto);
      } else {
        //console.log("No se encontró ningún elemento con la clase 'mapacero'.");
      }
      
      
      const ufhMun = new FeatureLayer({
        url: contenidoTexto,       
        renderer: ufhRenderer,
        popupTemplate: {
          title:"{simb_final} <p class='ufh{clase_ufh}'>{apreciacion}</p>",
          content:"Area Ha: {Area_ha}<br>Altura msnm: {alt_msnm}<br>Unidad climatica: {unidad_cli}<br>Temperatura media: {temp_med}<br>Inundaciones: {inund}<hr><h3>Sistemas productivos</h3>Líneas agricolas: {lineaAgricola}<br><p style='display:inline-block !important;margin-bottom:16px'>Líneas pecuarias: {lineaPecuarias}</p>",
        },
        elevationInfo: "relative-to-scene",
      });
      map.add(ufhMun);
      

     };

     let camaraActivada = false;

    //EVENT PARA DISPARA LA ACCION
    // Event handler that fires each time an action is clicked.
    reactiveUtils.on(
      () => view.popup,
      "trigger-action",
      (event,) => {  // Execute the measureThis() function if the measure-this action is clicked
        if (event.action.id === "camara") {
          
          if(camaraActivada) {
            map.layers.removeAt(2);
            document.getElementById("escala_colores").style.display = 'none';
          }
          else {
            camaraAcccion();
            document.getElementById("escala_colores").style.display = 'flex';
            
          }
          camaraActivada = !camaraActivada;
        }
    });
    

    const puntosMunicipios = new FeatureLayer({
      url: "https://services6.arcgis.com/4bqDruSLRri6LXWK/arcgis/rest/services/municipios/FeatureServer/0",
      outFields: ["*"], // Consulta todos los atributos
      popupTemplate: popupPuntosMunicipios,   
      //renderer: puntosRenderer,
    
    });


    map.add(puntosMunicipios);



     
    /*
    // Departamentos layer
    // Deparamentos layer estilos graficos

    const departamentosRenderer = {
      "type": "simple",
      "symbol": {
      "type": "simple-line",
      "width": "1px",
      "color": "green",
      "border-style": "dotted"
      
      }
    }

    const departamentos = new FeatureLayer({
      url: "https://services6.arcgis.com/4bqDruSLRri6LXWK/arcgis/rest/services/ufh/FeatureServer/0",
      //llama los estilos
      renderer: departamentosRenderer,
    });
  
    map.add(departamentos);
    */

    
    //filtro de municipios
    
    document.getElementById("boton").addEventListener("change", function() {


      // Municipios layer estilos graficos

      const municipiosRenderer = {
        "type": "simple",
        "symbol": {
          "type": "simple-line",
          "width": "1.5px",
          "color": [78, 75, 135, 0.5],
          "style": "simple-fill",
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
        
        console.log("listo");
        map.layers.removeAt(2)
      }

    });


    
    //filtro de las ufh adjudicables

    document.getElementById("ufh").addEventListener("change", function() {


      /*UFH de Pradera*/
      const ufhPradera = new FeatureLayer({
        url: "https://services6.arcgis.com/4bqDruSLRri6LXWK/arcgis/rest/services/shppraderaufhsaplicables/FeatureServer/0",
        renderer: ufhRenderer,
        popupTemplate: {
          title:"{simb_final} <p class='ufh{clase_ufh}'>{apreciacion}</p>",
          content:"Area Ha: {Area_ha}<br>Altura msnm: {alt_msnm}<br>Unidad climatica: {unidad_cli}<br>Temperatura media: {temp_med}<br>Inundaciones: {inund}<hr><h3>Sistemas productivos</h3>Líneas agricolas: {lineaAgricola}<br><p style='display:inline-block !important;margin-bottom:16px'>Líneas pecuarias: {lineaPecuarias}</p>",
        },
        elevationInfo: "relative-to-scene",
      });

      /*UFH de Ayapel*/
      const ufhAyapel = new FeatureLayer({
        url: "https://services6.arcgis.com/4bqDruSLRri6LXWK/arcgis/rest/services/ufhayapel/FeatureServer/0",
        renderer: ufhRenderer,
        popupTemplate: {
          title:"{simb_final} <p class='ufh{clase_ufh}'>{apreciacion}</p>",
          content:"Area Ha: {Area_ha}<br>Altura msnm: {alt_msnm}<br>Unidad climatica: {unidad_cli}<br>Temperatura media: {temp_med}<br>Inundaciones: {inund}<hr><h3>Sistemas productivos</h3>Líneas agricolas: {lineaAgricola}<br><p style='display:inline-block !important;margin-bottom:16px'>Líneas pecuarias: {lineaPecuarias}</p>",
        },
        elevationInfo: "relative-to-scene",
      });

      /*UFH de Buesaco*/
      const ufhBuesaco = new FeatureLayer({
        url: "https://services6.arcgis.com/4bqDruSLRri6LXWK/arcgis/rest/services/ufhbuesaco/FeatureServer/0",
        renderer: ufhRenderer,
        popupTemplate: {
          title:"{simb_final} <p class='ufh{clase_ufh}'>{apreciacion}</p>",
          content:"Area Ha: {Area_ha}<br>Altura msnm: {alt_msnm}<br>Unidad climatica: {unidad_cli}<br>Temperatura media: {temp_med}<br>Inundaciones: {inund}<hr><h3>Sistemas productivos</h3>Líneas agricolas: {lineaAgricola}<br><p style='display:inline-block !important;margin-bottom:16px'>Líneas pecuarias: {lineaPecuarias}</p>",
        },
        elevationInfo: "relative-to-scene",
      });

      /*UFH de Planadas*/
      const ufhPlanadas = new FeatureLayer({
        url: "https://services6.arcgis.com/4bqDruSLRri6LXWK/arcgis/rest/services/ufhplanadas/FeatureServer/0",
        renderer: ufhRenderer,
        popupTemplate: {
          title:"{simb_final} <p class='ufh{clase_ufh}'>{apreciacion}</p>",
          content:"Area Ha: {Area_ha}<br>Altura msnm: {alt_msnm}<br>Unidad climatica: {unidad_cli}<br>Temperatura media: {temp_med}<br>Inundaciones: {inund}<hr><h3>Sistemas productivos</h3>Líneas agricolas: {lineaAgricola}<br><p style='display:inline-block !important;margin-bottom:16px'>Líneas pecuarias: {lineaPecuarias}</p>",
        },
        elevationInfo: "relative-to-scene",
      });

      
    

      
      if(ufh.checked){

        map.add(ufhPradera);
        map.add(ufhBuesaco);
        map.add(ufhAyapel);
        map.add(ufhPlanadas);
        document.getElementById("escala_colores").style.display = 'flex';
      } 
      
      else{
        map.layers.removeAt(2);
        map.layers.removeAt(2);
        map.layers.removeAt(2);
        map.layers.removeAt(2);
        document.getElementById("escala_colores").style.display = 'none';
      }

      

      
    });

    
    
    /*options Query filtro

    //SQL Query 
    // SQL query array
    //const parcelLayerSQL = ["Choose a SQL where clause...", "UseType = 'Residential'",  "UseType = 'Government'", "UseType = 'Irrigated Farm'", "TaxRateArea = 10853", "TaxRateArea = 10860", "TaxRateArea = 08637", "Roll_LandValue > 1000000", "Roll_LandValue < 1000000"];
    const parcelLayerSQL = ["Choose a SQL where clause...", "clase_ufh = '06'",];
    let whereClause = parcelLayerSQL[0];
    
    
     // Add SQL UI
      const select = document.createElement("select");
      select.setAttribute("class", "esri-widget esri-select");
      select.setAttribute("style", "width: 200px; font-family: 'Avenir Next'; font-size: 1em");
      parcelLayerSQL.forEach(function(query){
        let option = document.createElement("option");
        option.innerHTML = query;
        option.value = query;
        select.appendChild(option);
      });

      view.ui.add(select, "top-right");

      // Listen for changes
      select.addEventListener('change', (event) => {
        whereClause = event.target.value;

        queryFeatureLayer(view.extent);

      });

      // Get query layer and set up query
      const parcelLayer = new FeatureLayer({
        //url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/LA_County_Parcels/FeatureServer/0",
        url: "https://services6.arcgis.com/4bqDruSLRri6LXWK/arcgis/rest/services/shppraderaufhsaplicables/FeatureServer/0",
      });

      //Execute query
      function queryFeatureLayer(extent) {

        const parcelQuery = {
         where: whereClause,  // Set by select element
         spatialRelationship: "intersects", // Relationship operation to apply
         geometry: extent, // Restricted to visible extent of the map
         //outFields: ["APN","UseType","TaxRateCity","Roll_LandValue"], // Attributes to return
         outFields: ["clase_ufh"], // Attributes to return
         returnGeometry: true
        };

        //method to view the number of features

        parcelLayer.queryFeatures(parcelQuery)

        .then((results) => {

          displayResults(results);

        }).catch((error) => {
          console.log(error.error);
        });




      }
      
      function displayResults(results) {
        // Create a blue polygon
        const symbol = {
          type: "simple-fill",
          color: [ 20, 130, 200, 0.5 ],
          outline: {
            color: "white",
            width: .5
          },
        };

        const popupTemplate = {
          title: "Parcel {APN}",
          content: "Type: {UseType} <br> Land value: {Roll_LandValue} <br> Tax Rate City: {TaxRateCity}"
        };

        // Assign styles and popup to features
        results.features.map((feature) => {
          feature.symbol = symbol;
          feature.popupTemplate = popupTemplate;
          return feature;
        });

        // Clear display
        view.closePopup();
        view.graphics.removeAll();
        // Add features to graphics layer
        view.graphics.addMany(results.features);


      }
    */

      document.getElementById("cambiarBasemap").addEventListener("change", function() {
        let estiloGeneral = document.getElementById("estilos");
        let enlacedark = "https://js.arcgis.com/4.27/esri/themes/dark/main.css";
        let enlacelight = "https://js.arcgis.com/4.27/esri/themes/light/main.css";
        
        
        
        if(cambiarBasemap.checked){
          estiloGeneral.href = enlacedark;  
          map.basemap = "arcgis-dark-gray";  
          document.getElementById("colorTheme").setAttribute("data-bs-theme", "dark");
          document.getElementById("estilosloc").href = "styles/stylesdark.css";
        } 
        else{
          estiloGeneral.href = enlacelight;
          map.basemap = "arcgis-topographic"; 
          document.getElementById("colorTheme").setAttribute("data-bs-theme", "light");
          document.getElementById("estilosloc").href = "styles/styles.css";
        }
        
        
      })

      
      /////////////////////////////////////////////////////////////////////////////
      /////////////////////////////////////////////////////////////////////////////
      /////////////////////////////////////////////////////////////////////////////
      ///////////////////////////////MAPA RELIEVE EN 3D////////////////////////////
      /////////////////////////////////////////////////////////////////////////////
      /////////////////////////////////////////////////////////////////////////////
      /////////////////////////////////////////////////////////////////////////////

      document.getElementById("mapElevation").addEventListener("click", function(){
        console.log("hola");
        map.layers.removeAt(2);
        document.getElementById("escala_colores").style.display = 'none';

        const view = new SceneView({
          map: map,
          // center Colombia
          container: "viewDiv", // Div element
          camera: {
            position: {
              x: -74.635, //Longitude
              y: 4.636, //Latitude
              z: 200000 //Meters
            },
            tilt: 75
          }
        });
        
        //add search widget
        const search = new Search({  //Add Search widget
          view: view
        });
      
        view.ui.add(search, "top-left"); //Add to the map


          /*renderer capa de colores estilos ufh*/
    const ufhRenderer = {
      type: "class-breaks",
      field: "clase_ufh",
      normalizationField: "EDUCBASECY",
      legendOptions: {
        title: "Tipos de Unidades Físicas Homogéneas"
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
              //"label": "hola como estas",
              outline: {
                color: [78, 75, 135, 0.5],
                width: 1 
              }
            },
            label: "Excelente"
          },
          {
            minValue: 2,
            maxValue: 3,
            symbol: {
              "type": "simple-fill",
              "width": "1.5px",
              "color": [0, 166, 255, 0.5],
              outline: {
                color: [0, 166, 255, 0.5],
                width: 1 
              }
            },
            label: "Muy Buena"
          },
          {
            minValue: 3,
            maxValue: 4,
            symbol: {
              "type": "simple-fill",
              "width": "1.5px",
              "color": [45, 149, 192, 0.5],
              outline: {
                color: [45, 149, 192, 0.5],
                width: 1 
              }
            },
            label: "Buena"
          },
          {
            minValue: 4,
            maxValue: 5,
            symbol: {
              "type": "simple-fill",
              "width": "1.5px",
              "color": [153, 193, 212, 0.5],
              outline: {
                color: [153, 193, 212, 0.5],
                width: 1 
              }
            },
            label: "Moderadamente buena"
          },
          {
            minValue: 5,
            maxValue: 6,
            symbol: {
              "type": "simple-fill",
              "width": "1.5px",
              "color": [26, 107, 66, 0.5],
              outline: {
                color: [26, 107, 66, 0.5],
                width: 1 
              }
            },
            label: "Moderadamente buena a mediana"
          },
          {
            minValue: 6,
            maxValue: 7,
            symbol: {
              "type": "simple-fill",
              "width": "1.5px",
              "color": [162, 193, 63, 0.5],
              //agregar borde al fill
              outline: {
                // Configuración del borde
                color: [162, 193, 63, 0.5], // Color del borde
                width: 1 // Ancho del borde
              }
            },
            label: "Mediana"
          },
          
          {
            minValue: 7,
            maxValue: 8,
            symbol: {
              "type": "simple-fill",
              "width": "1.5px",
              "color": [245, 229, 170, 0.5],
              outline: {
                color: [245, 229, 170, 0.5],
                width: 1 
              }
            },
            label: "Mediana a regular"
          },
          {
            minValue: 8,
            maxValue: 9,
            symbol: {
              "type": "simple-fill",
              "width": "1.5px",
              "color": [250, 216, 91, 0.5],
              outline: {
                color: [250, 216, 91, 0.5],
                width: 1 
              }
            },
            label: "Regular"
          },
          {
            minValue: 9,
            maxValue: 10,
            symbol: {
              "type": "simple-fill",
              "width": "1.5px",
              "color": [251, 129, 72, 0.5],
              outline: {
                color: [251, 129, 72, 0.5],
                width: 1 
              }
            },
            label: "Regular a mala"
          },
          {
            minValue: 10,
            maxValue: 11,
            symbol: {
              "type": "simple-fill",
              "width": "1.5px",
              "color": [251, 119, 169, 0.5],
              outline: {
                color: [251, 119, 169, 0.5],
                width: 1 
              }
            },
            label: "Mala"
          },
          {
            minValue: 11,
            maxValue: 12,
            symbol: {
              "type": "simple-fill",
              "width": "1.5px",
              "color": [255, 78, 130, 0.5],
              outline: {
                color: [255, 78, 130, 0.5],
                width: 1 
              }
            },
            label: "Mala a muy mala"
          },
          {
            minValue: 12,
            maxValue: 13,
            symbol: {
              "type": "simple-fill",
              "width": "1.5px",
              "color": [161, 71, 29, 0.5],
              outline: {
                color: [161, 71, 29, 0.5],
                width: 1 
              }
            },
            label: "Muy mala"
          },
          {
            minValue: 13,
            maxValue: 14,
            symbol: {
              "type": "simple-fill",
              "width": "1.5px",
              "color": [75, 51, 32, 0.5],
              outline: {
                color: [75, 51, 32, 0.5],
                width: 1 
              }
            },
            label: "Improductiva"
          },
          
        ]

        
    } 


        // Define contenido del popup de los puntos generales del municipio
        let x = "<div class='cardName' style='background-image:url({imagenes});'><div class='degrade'></div><div class='tituloPopup'><h2 style='color:white'>{Municipio}</h2><p style='color:white'>{departamento}</p></div></div><hr><b>Rango del cálculo:</b> {rango_calculo_min} Ha- {rango_calculo_max} Ha<br><b>UFH encontradas:</b> {ufhEncontradas}<br><b>UFH líderes</b> {ufhLider}<br><hr><b>Líneas productivas:</b> {lineasProductivas}<br> <b>Líneas agrícolas:</b> {lineasAgricolas}<br><b>Líneas pecuarias:</b> {lineasPecuarias}<br><hr><a class='button-line' href='{link_informe}'><img src='https://raw.githubusercontent.com/felipenino13/geolocation/main/img/book.svg'> Informe PDF</a><br><div style='display:none' class='mapacero'>{capashp}</div>";
        let y = "<div style='display:none' class='mapacero'>{capashp}</div>";
        //PRUEBA ACTION
        //PRUEBA DEFINE EL BOTON EN EL ARREGLO
        const primerAction = {
          title:"UFH Municipio",
          id:"camara",
          image: "https://raw.githubusercontent.com/felipenino13/geolocation/main/img/polygon.svg"
        };


        const popupPuntosMunicipios = {
          title: "Descripción", 
          content: x,
          //content: y,
          collapsed: true, 
          //Esto agrega una acción al popup
          actions: [primerAction], 
        };
    
        //PRUEBA DEFINE LA FUNCION DEL ID
        //function camaraAcccion(){
          //console.log("toda accion conlleva una reacción")
        //}

        function camaraAcccion(){
      
          var elementoMapacero = document.querySelector(".mapacero");
      
          if (elementoMapacero) {
            var contenidoTexto = elementoMapacero.textContent;
            //console.log(contenidoTexto);
          } else {
            //console.log("No se encontró ningún elemento con la clase 'mapacero'.");
          }
      
      
          const ufhMun = new FeatureLayer({
            url: contenidoTexto,       
            renderer: ufhRenderer,
            popupTemplate: {
              title:"{simb_final} <p class='ufh{clase_ufh}'>{apreciacion}</p>",
              content:"Area Ha: {Area_ha}<br>Altura msnm: {alt_msnm}<br>Unidad climatica: {unidad_cli}<br>Temperatura media: {temp_med}<br>Inundaciones: {inund}<hr><h3>Sistemas productivos</h3>Líneas agricolas: {lineaAgricola}<br><p style='display:inline-block !important;margin-bottom:16px'>Líneas pecuarias: {lineaPecuarias}</p>",
            },
            elevationInfo: "relative-to-scene",
          });
          map.add(ufhMun);
      

        };

        let camaraActivada = false;

        //EVENT PARA DISPARA LA ACCION
        // Event handler that fires each time an action is clicked.
        reactiveUtils.on(
          () => view.popup,
          "trigger-action",
          (event,) => {  // Execute the measureThis() function if the measure-this action is clicked
            if (event.action.id === "camara") {
          
              if(camaraActivada) {
                map.layers.removeAt(2);
                document.getElementById("escala_colores").style.display = 'none';
              }
              else {
                camaraAcccion();
                document.getElementById("escala_colores").style.display = 'flex';
            
              }
              camaraActivada = !camaraActivada;
            }
        });
    


      });

      /////////////////////////////////////////////////////////////////////////////
      /////////////////////////////////////////////////////////////////////////////
      /////////////////////////////////////////////////////////////////////////////
      /////////////////////////////////////////////////////////////////////////////
      /////////////////////////////////////////////////////////////////////////////
      /////////////////////////////////////////////////////////////////////////////
      /////////////////////////////////////////////////////////////////////////////


      document.getElementById("map2D").addEventListener("click", function(){
        console.log("hola");
        document.getElementById("escala_colores").style.display = 'none';
        map.layers.removeAt(2);
        
        const view = new MapView({
          map: map,
          // center Colombia
          center: [-74.635, 4.636], // Longitude, latitude
          zoom: 6, // Zoom level
          container: "viewDiv" // Div element
        });
        
        //add search widget
        const search = new Search({  //Add Search widget
          view: view
        });
      
        view.ui.add(search, "top-left"); //Add to the map


          /*renderer capa de colores estilos ufh*/
    const ufhRenderer = {
      type: "class-breaks",
      field: "clase_ufh",
      normalizationField: "EDUCBASECY",
      legendOptions: {
        title: "Tipos de Unidades Físicas Homogéneas"
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
              //"label": "hola como estas",
              outline: {
                color: [78, 75, 135, 0.5],
                width: 1 
              }
            },
            label: "Excelente"
          },
          {
            minValue: 2,
            maxValue: 3,
            symbol: {
              "type": "simple-fill",
              "width": "1.5px",
              "color": [0, 166, 255, 0.5],
              outline: {
                color: [0, 166, 255, 0.5],
                width: 1 
              }
            },
            label: "Muy Buena"
          },
          {
            minValue: 3,
            maxValue: 4,
            symbol: {
              "type": "simple-fill",
              "width": "1.5px",
              "color": [45, 149, 192, 0.5],
              outline: {
                color: [45, 149, 192, 0.5],
                width: 1 
              }
            },
            label: "Buena"
          },
          {
            minValue: 4,
            maxValue: 5,
            symbol: {
              "type": "simple-fill",
              "width": "1.5px",
              "color": [153, 193, 212, 0.5],
              outline: {
                color: [153, 193, 212, 0.5],
                width: 1 
              }
            },
            label: "Moderadamente buena"
          },
          {
            minValue: 5,
            maxValue: 6,
            symbol: {
              "type": "simple-fill",
              "width": "1.5px",
              "color": [26, 107, 66, 0.5],
              outline: {
                color: [26, 107, 66, 0.5],
                width: 1 
              }
            },
            label: "Moderadamente buena a mediana"
          },
          {
            minValue: 6,
            maxValue: 7,
            symbol: {
              "type": "simple-fill",
              "width": "1.5px",
              "color": [162, 193, 63, 0.5],
              //agregar borde al fill
              outline: {
                // Configuración del borde
                color: [162, 193, 63, 0.5], // Color del borde
                width: 1 // Ancho del borde
              }
            },
            label: "Mediana"
          },
          
          {
            minValue: 7,
            maxValue: 8,
            symbol: {
              "type": "simple-fill",
              "width": "1.5px",
              "color": [245, 229, 170, 0.5],
              outline: {
                color: [245, 229, 170, 0.5],
                width: 1 
              }
            },
            label: "Mediana a regular"
          },
          {
            minValue: 8,
            maxValue: 9,
            symbol: {
              "type": "simple-fill",
              "width": "1.5px",
              "color": [250, 216, 91, 0.5],
              outline: {
                color: [250, 216, 91, 0.5],
                width: 1 
              }
            },
            label: "Regular"
          },
          {
            minValue: 9,
            maxValue: 10,
            symbol: {
              "type": "simple-fill",
              "width": "1.5px",
              "color": [251, 129, 72, 0.5],
              outline: {
                color: [251, 129, 72, 0.5],
                width: 1 
              }
            },
            label: "Regular a mala"
          },
          {
            minValue: 10,
            maxValue: 11,
            symbol: {
              "type": "simple-fill",
              "width": "1.5px",
              "color": [251, 119, 169, 0.5],
              outline: {
                color: [251, 119, 169, 0.5],
                width: 1 
              }
            },
            label: "Mala"
          },
          {
            minValue: 11,
            maxValue: 12,
            symbol: {
              "type": "simple-fill",
              "width": "1.5px",
              "color": [255, 78, 130, 0.5],
              outline: {
                color: [255, 78, 130, 0.5],
                width: 1 
              }
            },
            label: "Mala a muy mala"
          },
          {
            minValue: 12,
            maxValue: 13,
            symbol: {
              "type": "simple-fill",
              "width": "1.5px",
              "color": [161, 71, 29, 0.5],
              outline: {
                color: [161, 71, 29, 0.5],
                width: 1 
              }
            },
            label: "Muy mala"
          },
          {
            minValue: 13,
            maxValue: 14,
            symbol: {
              "type": "simple-fill",
              "width": "1.5px",
              "color": [75, 51, 32, 0.5],
              outline: {
                color: [75, 51, 32, 0.5],
                width: 1 
              }
            },
            label: "Improductiva"
          },
          
        ]

        
    } 


        // Define contenido del popup de los puntos generales del municipio
        let x = "<div class='cardName' style='background-image:url({imagenes});'><div class='degrade'></div><div class='tituloPopup'><h2 style='color:white'>{Municipio}</h2><p style='color:white'>{departamento}</p></div></div><hr><b>Rango del cálculo:</b> {rango_calculo_min} Ha- {rango_calculo_max} Ha<br><b>UFH encontradas:</b> {ufhEncontradas}<br><b>UFH líderes</b> {ufhLider}<br><hr><b>Líneas productivas:</b> {lineasProductivas}<br> <b>Líneas agrícolas:</b> {lineasAgricolas}<br><b>Líneas pecuarias:</b> {lineasPecuarias}<br><hr><a class='button-line' href='{link_informe}'><img src='https://raw.githubusercontent.com/felipenino13/geolocation/main/img/book.svg'> Informe PDF</a><br><div style='display:none' class='mapacero'>{capashp}</div>";
        let y = "<div style='display:none' class='mapacero'>{capashp}</div>";
        //PRUEBA ACTION
        //PRUEBA DEFINE EL BOTON EN EL ARREGLO
        const primerAction = {
          title:"UFH Municipio",
          id:"camara",
          image: "https://raw.githubusercontent.com/felipenino13/geolocation/main/img/polygon.svg"
        };


        const popupPuntosMunicipios = {
          title: "Descripción", 
          content: x,
          //content: y,
          collapsed: true, 
          //Esto agrega una acción al popup
          actions: [primerAction], 
        };
    
        //PRUEBA DEFINE LA FUNCION DEL ID
        //function camaraAcccion(){
          //console.log("toda accion conlleva una reacción")
        //}

        function camaraAcccion(){
      
          var elementoMapacero = document.querySelector(".mapacero");
      
          if (elementoMapacero) {
            var contenidoTexto = elementoMapacero.textContent;
            //console.log(contenidoTexto);
          } else {
            //console.log("No se encontró ningún elemento con la clase 'mapacero'.");
          }
      
      
          const ufhMun = new FeatureLayer({
            url: contenidoTexto,       
            renderer: ufhRenderer,
            popupTemplate: {
              title:"{simb_final} <p class='ufh{clase_ufh}'>{apreciacion}</p>",
              content:"Area Ha: {Area_ha}<br>Altura msnm: {alt_msnm}<br>Unidad climatica: {unidad_cli}<br>Temperatura media: {temp_med}<br>Inundaciones: {inund}<hr><h3>Sistemas productivos</h3>Líneas agricolas: {lineaAgricola}<br><p style='display:inline-block !important;margin-bottom:16px'>Líneas pecuarias: {lineaPecuarias}</p>",
            },
            elevationInfo: "relative-to-scene",
          });
          map.add(ufhMun);
      

        };

        let camaraActivada = false;

        //EVENT PARA DISPARA LA ACCION
        // Event handler that fires each time an action is clicked.
        reactiveUtils.on(
          () => view.popup,
          "trigger-action",
          (event,) => {  // Execute the measureThis() function if the measure-this action is clicked
            if (event.action.id === "camara") {
          
              if(camaraActivada) {
                map.layers.removeAt(2);
                document.getElementById("escala_colores").style.display = 'none';
              }
              else {
                camaraAcccion();
                document.getElementById("escala_colores").style.display = 'flex';
            
              }
              camaraActivada = !camaraActivada;
            }
        });
    


      });

      /////////////////////////////////////////////////////////////////////////////
      /////////////////////////////////////////////////////////////////////////////
      /////////////////////////////////////////////////////////////////////////////
      /////////////////////////////////////////////////////////////////////////////
      /////////////////////////////////////////////////////////////////////////////
      /////////////////////////////////////////////////////////////////////////////
      /////////////////////////////////////////////////////////////////////////////
  
  } 
);

  
function imprimir(){
  document.getElementById("offcanvasNavbar").classList.remove("show");
  document.querySelector(".offcanvas-backdrop.fade.show").classList.remove("show")
  window.print();
  
  //window.print();
}




