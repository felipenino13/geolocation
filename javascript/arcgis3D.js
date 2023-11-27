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
  
  //Key para la capa de los predios
  esriConfig.apiKey = "AAPK4bbcba5ab3e94588a74895d7eb7a4689tNo78a_vMWAp52SOp6i2YclCQ-0zMMNqVs6tLYjAFhl76PQ2KNVI02LdEPSRUC90";

  
  //Create a map
  const map = new Map({
    basemap: "arcgis-topographic", // Basemap layer service
    //ground: "world-elevation",
    //basemap: "arcgis-dark-gray",
    //basemap: "arcgis-navigation" //navigation
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


  //Create scene 3D
  const view = new SceneView({
    container: "viewDiv",
    map: map,
    camera: {
      position: {
        x: -75.635, //Longitude
        y: 0.504, //Latitude
        z: 200000 //Meters
      },
      tilt: 65
    }
  });

 

  
  //add search widget
  const search = new Search({  //Add Search widget
    view: view
  });
    
  view.ui.add(search, "top-left"); //Add to the map


  
  //estilos puntos de municipios
  const puntosRenderer = {
    type: "simple",
    symbol: {
      type: "simple-marker",
      color: [255, 165, 0, 0.6],
      width: "18px",
      height: "18px",
      outline: {
        color: [255, 165, 0, 0.8],
        width: 2 
      }

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
          maxValue: 1.9,
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
          maxValue: 2.9,
          symbol: {
            "type": "simple-fill",
            "width": "1.5px",
            "color": [12, 96, 151, 0.5],
            outline: {
              color: [12, 96, 151, 0.5],
              width: 1 
            }
          },
          label: "Muy Buena"
        },
        {
          minValue: 3,
          maxValue: 3.9,
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
          maxValue: 4.9,
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
          maxValue: 5.9,
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
          maxValue: 6.9,
          symbol: {
            "type": "simple-fill",
            "width": "1.5px",
            "color": [92, 170, 132, 0.5],
            //agregar borde al fill
            outline: {
              // Configuración del borde
              color: [92, 170, 132, 0.5], // Color del borde
              width: 1 // Ancho del borde
            }
          },
          label: "Mediana"
        },
        
        {
          minValue: 7,
          maxValue: 7.9,
          symbol: {
            "type": "simple-fill",
            "width": "1.5px",
            "color": [173, 186, 62, 0.5],
            outline: {
              color: [173, 186, 62, 0.5],
              width: 1 
            }
          },
          label: "Mediana a regular"
        },
        {
          minValue: 8,
          maxValue: 8.9,
          symbol: {
            "type": "simple-fill",
            "width": "1.5px",
            "color": [246, 229, 169, 0.5],
            outline: {
              color: [246, 229, 169, 0.5],
              width: 1 
            }
          },
          label: "Regular"
        },
        {
          minValue: 9,
          maxValue: 9.9,
          symbol: {
            "type": "simple-fill",
            "width": "1.5px",
            "color": [241, 214, 116, 0.5],
            outline: {
              color: [241, 214, 116, 0.5],
              width: 1 
            }
          },
          label: "Regular a mala"
        },
        {
          minValue: 10,
          maxValue: 10.9,
          symbol: {
            "type": "simple-fill",
            "width": "1.5px",
            "color": [251, 129, 72, 0.5],
            outline: {
              color: [251, 129, 72, 0.5],
              width: 1 
            }
          },
          label: "Mala"
        },
        {
          minValue: 11,
          maxValue: 11.9,
          symbol: {
            "type": "simple-fill",
            "width": "1.5px",
            "color": [251, 119, 169, 0.5],
            outline: {
              color: [251, 119, 169, 0.5],
              width: 1 
            }
          },
          label: "Mala a muy mala"
        },
        {
          minValue: 12,
          maxValue: 12.9,
          symbol: {
            "type": "simple-fill",
            "width": "1.5px",
            "color": [139, 72, 65, 0.5],
            outline: {
              color: [139, 72, 65, 0.5],
              width: 1 
            }
          },
          label: "Muy mala"
        },
        {
          minValue: 13,
          maxValue: 13.9,
          symbol: {
            "type": "simple-fill",
            "width": "1.5px",
            "color": [87, 82, 79, 0.5],
            outline: {
              color: [87, 82, 79, 0.5],
              width: 1 
            }
          },
          label: "Improductiva"
        },
        
      ]

      
  } 
  
  

  

  // Define contenido del popup de los puntos generales del municipio
  let portada = "<div class='cardName' style='background-image:url({imagenes});'><div class='degrade'></div><div class='tituloPopup'><h2 style='color:white'>{Municipio}</h2><p style='color:white'>{departamento}</p></div></div><hr><div class='contenidoPop'><b>Rango del cálculo:</b> {rango_calculo_min} Ha- {rango_calculo_max} Ha<br><b>UFH encontradas:</b> {ufhEncontradas}<br><b>UFH líderes</b> {ufhLider}<br><hr><b>Líneas productivas:</b> {lineasProductivas}<br></div>";
  let linkDTS = "<div class='contenidoPop'><a class='button-line' href='{link_informe}'><img src='https://raw.githubusercontent.com/felipenino13/geolocation/main/img/book.svg'> Informe PDF</a><br><div style='display:none' class='mapacero'>{capashp}</div><br><div style='display:none' class='mapaVeredas'>{capashpVer}</div></div>"
  //let y = "<div style='display:none' class='mapacero'>{capashp}</div><div style='display:none' class='mapaVeredas'>{capashpVer}</div>";
  //PRUEBA ACTION
  //PRUEBA DEFINE EL BOTON EN EL ARREGLO
  const primerAction = {
    title:"UFH Municipio",
    id:"camara",
    image: "https://raw.githubusercontent.com/felipenino13/geolocation/main/img/polygon.svg"
  };

  const segundaAction = {
    title:"Veredas",
    id:"veredasMun",
    image: "https://raw.githubusercontent.com/felipenino13/geolocation/main/img/veredas.svg"
  };

  let tabla = [
    {
      type: "text",
      text: portada,
    },
    {
      type: "fields",
      fieldInfos:[
        {
        fieldName: "lineasAgricolas",
        label: "Líneas agrícolas"
        },
        {
          fieldName: "lineasPecuarias",
          label: "Líneas pecuarias"
        },
      
      ],
    },
    {
      type: "text",
      text: linkDTS,
    },
    
  ]

  const popupPuntosMunicipios = {
    title: "Descripción", 
    content: tabla,
    //content: y,
    collapsed: true, 
    //Esto agrega una acción al popup
    actions: [primerAction, segundaAction], 
    
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
    
    let textufhpop = "Área Ha: {Area_ha}<br>Altura msnm: {alt_msnm}<br>Unidad climática: {unidad_cli}<br>Rango pendiente: {rango_pend}%<br>Temperatura media: {temp_med}°<br>Inundaciones: {inund}<hr><h4>Cálculo UAF (ha)  </h4>Área UAF mínima: {UAF_Area_min}<br>Área UAF máxima: {UAF_Area_max}<br><hr><h3>Sistemas productivos</h3>";
    let infoufhpop = [
      {
        type: "text",
        text: textufhpop,
      },
      {
        type: "fields",
        fieldInfos:[
          {
          fieldName: "lineaAgricola",
          label: "Líneas agricolas"
          },
          {
            fieldName: "lineaPecuarias",
            label: "Líneas pecuarias"
          },
        
        ],
      },
    ];

    const ufhMun = new FeatureLayer({
      url: contenidoTexto,       
      renderer: ufhRenderer,
      popupTemplate: {
        title:"{simb_final} <p class='ufh{clase_ufh}'>{apreciacion}</p>",
        content: infoufhpop,
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
          map.layers.removeAt(1);
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


  ///////////
  //Veredas//
  ///////////

  function veredas(){
    
    var elementoMapaVeredas = document.querySelector(".mapaVeredas");
    
    if (elementoMapaVeredas) {
      var contenidoTextoVer = elementoMapaVeredas.textContent;
      //console.log(contenidoTexto);
    } else {
      console.log("No se encontró ningún elemento con la clase 'mapacero'.");
    }


    //Veredas de pradera

  const veRenPradera = {
    type: "simple",
    symbol: {
      type: "simple-line",
      color: [105, 105, 105, 0.6],
      width: "2px",
      size: "16px",
      outline: {
        color: [255, 165, 0, 0.8],
        width: 2 
      },
    },
  }

  const textVeredas = {
    symbol: {
      type: "text",
      color: "#000000",
      //haloColor: "#5E8D74",
      //haloSize: "2px",
      font: {
        size: "10px",
        family: "Noto Sans",
        style: "normal",
        weight: "normal",
      }
    },

    labelPlacement: "above-center",
    labelExpressionInfo: {
      expression: "$feature.NOMBRE_VER"
    }
  };

  const veredas = new FeatureLayer({
    url: contenidoTextoVer,
    renderer: veRenPradera,
    labelingInfo: [textVeredas],
    elevationInfo: "relative-to-scene",
    opacity: 0.5,
  })

  map.add(veredas);
    

  };

  let camaraVer = false;

  //EVENT PARA DISPARA LA ACCION
  // Event handler that fires each time an action is clicked.
  reactiveUtils.on(
    () => view.popup,
    "trigger-action",
    (event,) => {  // Execute the measureThis() function if the measure-this action is clicked
      if (event.action.id === "veredasMun") {
        
        if(camaraVer) {
          map.layers.removeAt(1);
          map.layers.removeAt(1);
        }
        else {
          veredas();
        }
        camaraVer = !camaraVer;
      }
  });


  
  
  //Layer de minunicipios
  

  const puntosMunicipios = new FeatureLayer({
    url: "https://services6.arcgis.com/4bqDruSLRri6LXWK/arcgis/rest/services/municipios/FeatureServer/0",
    outFields: ["*"], // Consulta todos los atributos
    popupTemplate: popupPuntosMunicipios,   
    renderer: puntosRenderer,
  
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
        "color": [100, 100, 100, 1],
      },
      
    }

    // Municipios layer
    const layerMunicipios = new FeatureLayer({
      id: "limitesMunicipales",
      url: "https://services6.arcgis.com/4bqDruSLRri6LXWK/arcgis/rest/services/mgn2022_mpio_politico/FeatureServer/0",
      //llama los estilos
      renderer: municipiosRenderer,
      opacity: 0.5,
    });

    if(boton.checked){
      map.layers.add(layerMunicipios);
    } 
    
    else{
      console.log("listo");
      map.layers.removeAt(1);
      console.log(map.layers);
    }

  });


  
  //filtro de las ufh adjudicables

  document.getElementById("ufh").addEventListener("change", function() {


    let textufhpop = "Área Ha: {Area_ha}<br>Altura msnm: {alt_msnm}<br>Unidad climática: {unidad_cli}<br>Rango pendiente: {rango_pend}%<br>Temperatura media: {temp_med}°<br>Inundaciones: {inund}<hr><h4>Cálculo UAF (ha)  </h4>Área UAF mínima: {UAF_Area_min}<br>Área UAF máxima: {UAF_Area_max}<br><hr><h3>Sistemas productivos</h3>";
    let infoufhpop = [
      {
        type: "text",
        text: textufhpop,
      },
      {
        type: "fields",
        fieldInfos:[
          {
          fieldName: "lineaAgricola",
          label: "Líneas agricolas"
          },
          {
            fieldName: "lineaPecuarias",
            label: "Líneas pecuarias"
          },
        
        ],
      },
    ];

    /*UFH de Pradera*/
    const ufhPradera = new FeatureLayer({
      url: "https://services6.arcgis.com/4bqDruSLRri6LXWK/arcgis/rest/services/shppraderaufhsaplicables/FeatureServer/0",
      renderer: ufhRenderer,
      popupTemplate: {
        title:"{simb_final} <p class='ufh{clase_ufh}'>{apreciacion}</p>",
        content:infoufhpop,
      },
      elevationInfo: "relative-to-scene",
    });

    /*UFH de Ayapel*/
    const ufhAyapel = new FeatureLayer({
      url: "https://services6.arcgis.com/4bqDruSLRri6LXWK/arcgis/rest/services/ufhayapel/FeatureServer/0",
      renderer: ufhRenderer,
      popupTemplate: {
        title:"{simb_final} <p class='ufh{clase_ufh}'>{apreciacion}</p>",
        content: infoufhpop,
      },
      elevationInfo: "relative-to-scene",
    });

    /*UFH de Buesaco*/
    const ufhBuesaco = new FeatureLayer({
      url: "https://services6.arcgis.com/4bqDruSLRri6LXWK/arcgis/rest/services/ufhbuesaco/FeatureServer/0",
      renderer: ufhRenderer,
      popupTemplate: {
        title:"{simb_final} <p class='ufh{clase_ufh}'>{apreciacion}</p>",
        content: infoufhpop,
      },
      elevationInfo: "relative-to-scene",
    });

    /*UFH de Planadas*/
    const ufhPlanadas = new FeatureLayer({
      url: "https://services6.arcgis.com/4bqDruSLRri6LXWK/arcgis/rest/services/ufhplanadas/FeatureServer/0",
      renderer: ufhRenderer,
      popupTemplate: {
        title:"{simb_final} <p class='ufh{clase_ufh}'>{apreciacion}</p>",
        content: infoufhpop,
      },
      elevationInfo: "relative-to-scene",
    });

    /*UFH de Jenesano*/
    const ufhJenesano = new FeatureLayer({
      url: "https://services6.arcgis.com/4bqDruSLRri6LXWK/arcgis/rest/services/jenesano/FeatureServer/0",
      renderer: ufhRenderer,
      popupTemplate: {
        title:"{simb_final} <p class='ufh{clase_ufh}'>{apreciacion}</p>",
        content: infoufhpop,
      },
      elevationInfo: "relative-to-scene",
    });

    /*UFH de Ventaquema*/
    const ufhVentaquemada = new FeatureLayer({
      url: "https://services6.arcgis.com/4bqDruSLRri6LXWK/arcgis/rest/services/ventaquemada/FeatureServer/0",
      renderer: ufhRenderer,
      popupTemplate: {
        title:"{simb_final} <p class='ufh{clase_ufh}'>{apreciacion}</p>",
        content: infoufhpop,
      },
      elevationInfo: "relative-to-scene",
    });

     /*UFH de Cajibio*/
     const ufhCajibio = new FeatureLayer({
      url: "https://services6.arcgis.com/4bqDruSLRri6LXWK/arcgis/rest/services/ufhcajibio/FeatureServer/0",
      renderer: ufhRenderer,
      popupTemplate: {
        title:"{simb_final} <p class='ufh{clase_ufh}'>{apreciacion}</p>",
        content: infoufhpop,
      },
      elevationInfo: "relative-to-scene",
    });

      /*UFH de Caucasia*/
      const ufhCaucasia = new FeatureLayer({
        url: "https://services6.arcgis.com/4bqDruSLRri6LXWK/arcgis/rest/services/ufhcaucasia/FeatureServer/0",
        renderer: ufhRenderer,
        popupTemplate: {
          title:"{simb_final} <p class='ufh{clase_ufh}'>{apreciacion}</p>",
          content: infoufhpop,
        },
        elevationInfo: "relative-to-scene",
      });   
      
      /*UFH de la virginia*/
      const ufhLaVirginia = new FeatureLayer({
        url: "https://services6.arcgis.com/4bqDruSLRri6LXWK/arcgis/rest/services/ufhlavirginia/FeatureServer/0",
        renderer: ufhRenderer,
        popupTemplate: {
          title:"{simb_final} <p class='ufh{clase_ufh}'>{apreciacion}</p>",
          content: infoufhpop,
        },
        elevationInfo: "relative-to-scene",
      }); 
      
      /*UFH de Marsella*/
      const ufhMarsella = new FeatureLayer({
        url: "https://services6.arcgis.com/4bqDruSLRri6LXWK/arcgis/rest/services/ufhmarsella/FeatureServer/0",
        renderer: ufhRenderer,
        popupTemplate: {
          title:"{simb_final} <p class='ufh{clase_ufh}'>{apreciacion}</p>",
          content: infoufhpop,
        },
        elevationInfo: "relative-to-scene",
      });  

      /*UFH de Nuevo Colon*/
      const ufhNuevoColon = new FeatureLayer({
        url: "https://services6.arcgis.com/4bqDruSLRri6LXWK/arcgis/rest/services/ufhnuevocolon/FeatureServer/0",
        renderer: ufhRenderer,
        popupTemplate: {
          title:"{simb_final} <p class='ufh{clase_ufh}'>{apreciacion}</p>",
          content: infoufhpop,
        },
        elevationInfo: "relative-to-scene",
      }); 

      /*UFH de Planeta Rica*/
      const ufhPlanetaRica = new FeatureLayer({
        url: "https://services6.arcgis.com/4bqDruSLRri6LXWK/arcgis/rest/services/ufhplanetarica/FeatureServer/0",
        renderer: ufhRenderer,
        popupTemplate: {
          title:"{simb_final} <p class='ufh{clase_ufh}'>{apreciacion}</p>",
          content: infoufhpop,
        },
        elevationInfo: "relative-to-scene",
      }); 

      /*UFH de Puerto Berrio*/
      const ufhPuertoBerrio = new FeatureLayer({
        url: "https://services6.arcgis.com/4bqDruSLRri6LXWK/arcgis/rest/services/ufhpuertoberrio/FeatureServer/0",
        renderer: ufhRenderer,
        popupTemplate: {
          title:"{simb_final} <p class='ufh{clase_ufh}'>{apreciacion}</p>",
          content: infoufhpop,
        },
        elevationInfo: "relative-to-scene",
      });

      /*UFH de Tibana*/
      const ufhTibana = new FeatureLayer({
        url: "https://services6.arcgis.com/4bqDruSLRri6LXWK/arcgis/rest/services/ufhtibana/FeatureServer/0",
        renderer: ufhRenderer,
        popupTemplate: {
          title:"{simb_final} <p class='ufh{clase_ufh}'>{apreciacion}</p>",
          content: infoufhpop,
        },
        elevationInfo: "relative-to-scene",
      });

      /*UFH de Tuqerrez*/
      const ufhTuquerrez = new FeatureLayer({
        url: "https://services6.arcgis.com/4bqDruSLRri6LXWK/arcgis/rest/services/shp_tuquerrez/FeatureServer/0",
        renderer: ufhRenderer,
        popupTemplate: {
          title:"{simb_final} <p class='ufh{clase_ufh}'>{apreciacion}</p>",
          content: infoufhpop,
        },
        elevationInfo: "relative-to-scene",
      });

      /*UFH de Paicol*/
      const ufhPaicol = new FeatureLayer({
        url: "https://services6.arcgis.com/4bqDruSLRri6LXWK/arcgis/rest/services/shp_paicol/FeatureServer/0",
        renderer: ufhRenderer,
        popupTemplate: {
          title:"{simb_final} <p class='ufh{clase_ufh}'>{apreciacion}</p>",
          content: infoufhpop,
        },
        elevationInfo: "relative-to-scene",
      });

      /*UFH de Nechi*/
      const ufhNechi = new FeatureLayer({
        url: "https://services6.arcgis.com/4bqDruSLRri6LXWK/arcgis/rest/services/shp_nechi/FeatureServer/0",
        renderer: ufhRenderer,
        popupTemplate: {
          title:"{simb_final} <p class='ufh{clase_ufh}'>{apreciacion}</p>",
          content: infoufhpop,
        },
        elevationInfo: "relative-to-scene",
      });

      /*UFH de Guaitarilla*/
      const ufhGuaitarilla = new FeatureLayer({
        url: "https://services6.arcgis.com/4bqDruSLRri6LXWK/arcgis/rest/services/shp_guaitarilla/FeatureServer/0",
        renderer: ufhRenderer,
        popupTemplate: {
          title:"{simb_final} <p class='ufh{clase_ufh}'>{apreciacion}</p>",
          content: infoufhpop,
        },
        elevationInfo: "relative-to-scene",
      });

      /*UFH de Carmen de bolivar*/
      const ufhCarmenDeBolivar = new FeatureLayer({
        url: "https://services6.arcgis.com/4bqDruSLRri6LXWK/arcgis/rest/services/shp_el_carmen_de_bolivar/FeatureServer/0",
        renderer: ufhRenderer,
        popupTemplate: {
          title:"{simb_final} <p class='ufh{clase_ufh}'>{apreciacion}</p>",
          content: infoufhpop,
        },
        elevationInfo: "relative-to-scene",
      });

      /*UFH de Chaparral*/
      const ufhChaparral = new FeatureLayer({
        url: "https://services6.arcgis.com/4bqDruSLRri6LXWK/arcgis/rest/services/shp_chaparral/FeatureServer/0",
        renderer: ufhRenderer,
        popupTemplate: {
          title:"{simb_final} <p class='ufh{clase_ufh}'>{apreciacion}</p>",
          content: infoufhpop,
        },
        elevationInfo: "relative-to-scene",
      });

      /*UFH de Caceres*/
      const ufhCaceres = new FeatureLayer({
        url: "https://services6.arcgis.com/4bqDruSLRri6LXWK/arcgis/rest/services/shp_caceres/FeatureServer/0",
        renderer: ufhRenderer,
        popupTemplate: {
          title:"{simb_final} <p class='ufh{clase_ufh}'>{apreciacion}</p>",
          content: infoufhpop,
        },
        elevationInfo: "relative-to-scene",
      });

      /*UFH de Aracataca*/
      const ufhAracataca = new FeatureLayer({
        url: "https://services6.arcgis.com/4bqDruSLRri6LXWK/arcgis/rest/services/shp_aracataca/FeatureServer/0",
        renderer: ufhRenderer,
        popupTemplate: {
          title:"{simb_final} <p class='ufh{clase_ufh}'>{apreciacion}</p>",
          content: infoufhpop,
        },
        elevationInfo: "relative-to-scene",
      });

  

    
    if(ufh.checked){


      map.addMany([
        ufhPradera, 
        ufhBuesaco, 
        ufhAyapel, 
        ufhPlanadas, 
        ufhJenesano, 
        ufhVentaquemada, 
        ufhCajibio, 
        ufhCaucasia, 
        ufhLaVirginia, 
        ufhMarsella, 
        ufhNuevoColon, 
        ufhPlanetaRica,
        ufhPuertoBerrio,
        ufhTibana,
        //segunda tanda//
        ufhTuquerrez,
        ufhPaicol,
        ufhNechi,
        ufhGuaitarilla,
        ufhCarmenDeBolivar,
        ufhChaparral,
        ufhCaceres,
        ufhAracataca

      ]);

      /*
      map.add(ufhPradera);
      map.add(ufhBuesaco);
      map.add(ufhAyapel);
      map.add(ufhPlanadas);
      map.add(ufhJenesano);
      map.add(ufhVentaquemada);
      */
      document.getElementById("escala_colores").style.display = 'flex';
/*
      console.log(map.layers.length)
      console.log(map.layers.toArray())
*/
    } 
    
    else{
      
/*
      map.layers.removeAt(1);
      map.layers.removeAt(1);
      map.layers.removeAt(1);
      map.layers.removeAt(1);
      map.layers.removeAt(1);
      map.layers.removeAt(1);
*/
      console.log(map.layers);
      map.layers.removeAt(1);
      map.layers.removeAt(1);
      map.layers.removeAt(1);
      map.layers.removeAt(1);
      map.layers.removeAt(1);
      map.layers.removeAt(1);
      map.layers.removeAt(1);
      map.layers.removeAt(1);
      map.layers.removeAt(1);
      map.layers.removeAt(1);
      map.layers.removeAt(1);
      map.layers.removeAt(1);
      map.layers.removeAt(1);
      map.layers.removeAt(1);
      map.layers.removeAt(1);
      map.layers.removeAt(1);
  

      document.getElementById("escala_colores").style.display = 'none';
    }

    

    
  });


  ////////////////////////////////
  ////////////////////////////////
  //Predios boton
  ////////////////////////////////
  ////////////////////////////////

  //filtro de las ufh adjudicables

  document.getElementById("predios").addEventListener("change", function() {
  
    
    //const prediosRenderer = {
      //"type": "simple",
      //"symbol": {
        //"type": "simple-line",
        //"width": "1.5px",
        //"color": [100, 100, 100, 1],
      //}
      
    //}
  


  //Render de los estilos
   const popupPredios = {
    title: "Predio", 
    content: "{CODIGO_ANT}",
  };

   //Capa del los predios
    

  const layer02 = new FeatureLayer({
    url: "https://services6.arcgis.com/4bqDruSLRri6LXWK/arcgis/rest/services/buesaco_predios_geojson/FeatureServer/0",
    outFields: ["CODIGO_ANT"],
    popupTemplate: popupPredios,
    //renderer: prediosRenderer,
    opacity: 0.3,
  });
  
  

  if(ufh.checked){
    map.add(layer02);;
  } 
    
  else{
      map.layers.removeAt(1);
      map.layers.removeAt(1);
      map.layers.removeAt(1);
      map.layers.removeAt(1);
      map.layers.removeAt(1);
      map.layers.removeAt(1);
      map.layers.removeAt(0);
    }

    

    
  });
  

  
/*    
  //options Query filtro

  //SQL Query 
  // SQL query array
  //const parcelLayerSQL = ["Choose a SQL where clause...", "UseType = 'Residential'",  "UseType = 'Government'", "UseType = 'Irrigated Farm'", "TaxRateArea = 10853", "TaxRateArea = 10860", "TaxRateArea = 08637", "Roll_LandValue > 1000000", "Roll_LandValue < 1000000"];
  const parcelLayerSQL = ["Elige una aptitud para filtrar", "clase_ufh = '01'","clase_ufh = '02'","clase_ufh = '03'","clase_ufh = '04'","clase_ufh = '05'","clase_ufh = '06'","clase_ufh = '07'","clase_ufh = '08'","clase_ufh = '09'","clase_ufh = '10'","clase_ufh = '11'","clase_ufh = '12'","clase_ufh = '13'",];
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
      //url: "https://services6.arcgis.com/4bqDruSLRri6LXWK/arcgis/rest/services/allufhaplicables/FeatureServer/0",
      url: "https://services6.arcgis.com/4bqDruSLRri6LXWK/arcgis/rest/services/shppraderaufhsaplicables/FeatureServer/0"

    }
    );

    

    //Execute query
    function queryFeatureLayer(extent) {

      const parcelQuery = {
       where: whereClause,  // Set by select element
       spatialRelationship: "intersects", // Relationship operation to apply
       geometry: extent, // Restricted to visible extent of the map
       //outFields: ["APN","UseType","TaxRateCity","Roll_LandValue"], // Attributes to return
       outFields: ["clase_ufh", "simb_final", "apreciacion", "Area_ha", "alt_msnm", "unidad_cli", "rango_pend", "temp_med", "inund", "lineaAgricola", "lineaPecuarias"], // Attributes to return
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
      

      let textufhpop = "Area Ha: {Area_ha}<br>Altura msnm: {alt_msnm}<br>Unidad climatica: {unidad_cli}<br>Rango pendiente: {rango_pend}%<br>Temperatura media: {temp_med}°<br>Inundaciones: {inund}<hr><h3>Sistemas productivos</h3>";
      let infoufhpop = [
      {
        type: "text",
        text: textufhpop,
      },
      {
        type: "fields",
        fieldInfos:[
          {
          fieldName: "lineaAgricola",
          label: "Líneas agricolas"
          },
          {
            fieldName: "lineaPecuarias",
            label: "Líneas pecuarias"
          },
        
        ],
      },
    ];

      const popupTemplate = {
        title: "{simb_final} <p class='ufh{clase_ufh}'>{apreciacion}</p>",
        content: infoufhpop,
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
    //dark theme app

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

    

} 
);


function imprimir(){
document.getElementById("offcanvasNavbar").classList.remove("show");
document.querySelector(".offcanvas-backdrop.fade.show").classList.remove("show")
window.print();

//window.print();
}




