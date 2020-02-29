var map;
require([
  "esri/map",
  "esri/request",
  "esri/layers/FeatureLayer",
  "esri/layers/ArcGISTiledMapServiceLayer",],
   function(
     Map,esriRequest,FeatureLayer,ArcGISTiledMapServiceLayer) {
  map = new Map("map", {
    basemap: "oceans",
    center: [-75, 39],
    zoom: 8
  });

  var featureLayer = new FeatureLayer("https://services9.arcgis.com/RHVPKKiFTONKtxq3/arcgis/rest/services/NOAA_METAR_current_wind_speed_direction_v1/FeatureServer/0");
  map.addLayer(featureLayer);

  // var radarLayer = new ArcGISTiledMapServiceLayer("https://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/radar_meteo_imagery_nexrad_time/MapServer");
  // map.addLayer(radarLayer);  

  // map.on("load", mapLoaded);

  // function mapLoaded(){
  //   var points = [[-75, 39],[-75.1, 39]];

  // };

  openWeatherApiKey = "cce624e9e8d689eca7b3f6972c80ff93";
  openWeatherUrl = "http://api.openweathermap.org/data/2.5/weather?id=6167865&appid=cce624e9e8d689eca7b3f6972c80ff93";

  var layersRequest = esriRequest({
      url: openWeatherUrl,
      content: {f: "json"},
      handleAs: "json",
      callbackParamName: "callback"
  });
  layersRequest.then(
      function(response) {
        console.log("Success: ", response);        
        currentTemp = response.main.temp;
        document.getElementById("temperature").innerHTML = currentTemp;
      }, function(error) {
          console.log("Error: ", error.message);
      });
});