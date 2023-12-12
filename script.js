

// Get your token from https://cesium.com/ion/tokens
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2NWNlNWZlNy1mMmRkLTQ4MzItODhjMS1lNjVhYzNiNDBkYzMiLCJpZCI6MTgxNzA2LCJpYXQiOjE3MDEzMzQ0MDB9.3AbzVvu8KllEBmE6PuCS5b7bJ6SFcFrn4hRnTVNjk6g';
// Initialize the viewer with Cesium World Terrain.
const viewer = new Cesium.Viewer("cesiumContainer", {
  terrainProvider: await Cesium.CesiumTerrainProvider.fromIonAssetId(1),
  vrButton: true,
});
viewer.scene.globe.depthTestAgainstTerrain = true;

// Define the path for the camera
const path = [
  Cesium.Cartesian3.fromDegrees(-7.77352, 110.38028, 230),
  Cesium.Cartesian3.fromDegrees(-74.0607, 40.7114, 5000),
  Cesium.Cartesian3.fromDegrees(-74.0507, 40.7114, 5000),
];

// Fly the camera to Denver, Colorado at the given longitude, latitude, and height.
/* viewer.camera.flyTo({
  destination: Cesium.Cartesian3.fromDegrees(-104.9965, 39.74248, 4000)
}); */


// Add Cesium OSM Buildings.
const buildingsTileset = await Cesium.createOsmBuildingsAsync();
viewer.scene.primitives.add(buildingsTileset);
// STEP 3 CODE
async function addBuilding() {
  // Load the GeoJSON file from Cesium ion.
  const tileset = await Cesium.Cesium3DTileset.fromIonAssetId(2388338);
  viewer.scene.primitives.add(tileset);
  await viewer.zoomTo(tileset);

  // Apply the default style if it exists
  const extras = tileset.asset.extras;
  if (
    Cesium.defined(extras) &&
    Cesium.defined(extras.ion) &&
    Cesium.defined(extras.ion.defaultStyle)
  ) {
    tileset.style = new Cesium.Cesium3DTileStyle(extras.ion.defaultStyle);
  }
  // Move the camera so that the polygon is in view.
  // viewer.flyTo(dataSource);
}

async function addHukum1() {
  // Load the GeoJSON file from Cesium ion.
  const tileset2 = await Cesium.Cesium3DTileset.fromIonAssetId(2388464);
  viewer.scene.primitives.add(tileset2);
  await viewer.zoomTo(tileset2);

  // Apply the default style if it exists
  const extras = tileset.asset.extras;
  if (
    Cesium.defined(extras) &&
    Cesium.defined(extras.ion) &&
    Cesium.defined(extras.ion.defaultStyle)
  ) {
    tileset.style = new Cesium.Cesium3DTileStyle(extras.ion.defaultStyle);
  }
  // Move the camera so that the polygon is in view.
  // viewer.flyTo(dataSource);
}

async function addFilsafat() {
  // Load the GeoJSON file from Cesium ion.
  const tileset2 = await Cesium.Cesium3DTileset.fromIonAssetId(2388548);
  viewer.scene.primitives.add(tileset2);
  await viewer.zoomTo(tileset2);

  // Apply the default style if it exists
  const extras = tileset.asset.extras;
  if (
    Cesium.defined(extras) &&
    Cesium.defined(extras.ion) &&
    Cesium.defined(extras.ion.defaultStyle)
  ) {
    tileset.style = new Cesium.Cesium3DTileStyle(extras.ion.defaultStyle);
  }
  // Move the camera so that the polygon is in view.
  // viewer.flyTo(dataSource);
}

async function addPerpusat() {
  // Load the GeoJSON file from Cesium ion.
  const tileset = await Cesium.Cesium3DTileset.fromIonAssetId(2388588);
  viewer.scene.primitives.add(tileset);
  await viewer.zoomTo(tileset);

  // Apply the default style if it exists
  const extras = tileset.asset.extras;
  if (
    Cesium.defined(extras) &&
    Cesium.defined(extras.ion) &&
    Cesium.defined(extras.ion.defaultStyle)
  ) {
    tileset.style = new Cesium.Cesium3DTileStyle(extras.ion.defaultStyle);
  }
  // Move the camera so that the polygon is in view.
  // viewer.flyTo(dataSource);
}

async function addHukum2() {
  // Load the GeoJSON file from Cesium ion.
  const tileset = await Cesium.Cesium3DTileset.fromIonAssetId(2388594);
  viewer.scene.primitives.add(tileset);
  await viewer.zoomTo(tileset);

  // Apply the default style if it exists
  const extras = tileset.asset.extras;
  if (
    Cesium.defined(extras) &&
    Cesium.defined(extras.ion) &&
    Cesium.defined(extras.ion.defaultStyle)
  ) {
    tileset.style = new Cesium.Cesium3DTileStyle(extras.ion.defaultStyle);
  }
  // Move the camera so that the polygon is in view.
  // viewer.flyTo(dataSource);
}

async function addKehutanan() {
  // Load the GeoJSON file from Cesium ion.
  const tileset = await Cesium.Cesium3DTileset.fromIonAssetId(2388600);
  viewer.scene.primitives.add(tileset);
  await viewer.zoomTo(tileset);

  // Apply the default style if it exists
  const extras = tileset.asset.extras;
  if (
    Cesium.defined(extras) &&
    Cesium.defined(extras.ion) &&
    Cesium.defined(extras.ion.defaultStyle)
  ) {
    tileset.style = new Cesium.Cesium3DTileStyle(extras.ion.defaultStyle);
  }
  // Move the camera so that the polygon is in view.
  // viewer.flyTo(dataSource);
}

async function addPerustek() {
  // Load the GeoJSON file from Cesium ion.
  const tileset = await Cesium.Cesium3DTileset.fromIonAssetId(2388615);
  viewer.scene.primitives.add(tileset);
  await viewer.zoomTo(tileset);

  // Apply the default style if it exists
  const extras = tileset.asset.extras;
  if (
    Cesium.defined(extras) &&
    Cesium.defined(extras.ion) &&
    Cesium.defined(extras.ion.defaultStyle)
  ) {
    tileset.style = new Cesium.Cesium3DTileStyle(extras.ion.defaultStyle);
  }
  // Move the camera so that the polygon is in view.
  // viewer.flyTo(dataSource);
}

async function addGeodesi() {
  // Load the GeoJSON file from Cesium ion.
  const tileset = await Cesium.Cesium3DTileset.fromIonAssetId(2388625);
  viewer.scene.primitives.add(tileset);
  await viewer.zoomTo(tileset);

  // Apply the default style if it exists
  const extras = tileset.asset.extras;
  if (
    Cesium.defined(extras) &&
    Cesium.defined(extras.ion) &&
    Cesium.defined(extras.ion.defaultStyle)
  ) {
    tileset.style = new Cesium.Cesium3DTileStyle(extras.ion.defaultStyle);
  }
  // Move the camera so that the polygon is in view.
  // viewer.flyTo(dataSource);
}

async function addFisika() {
  // Load the GeoJSON file from Cesium ion.
  const tileset = await Cesium.Cesium3DTileset.fromIonAssetId(2388638);
  viewer.scene.primitives.add(tileset);
  await viewer.zoomTo(tileset);

  // Apply the default style if it exists
  const extras = tileset.asset.extras;
  if (
    Cesium.defined(extras) &&
    Cesium.defined(extras.ion) &&
    Cesium.defined(extras.ion.defaultStyle)
  ) {
    tileset.style = new Cesium.Cesium3DTileStyle(extras.ion.defaultStyle);
  }
  // Move the camera so that the polygon is in view.
  // viewer.flyTo(dataSource);
}

async function addTNTF() {
  // Load the GeoJSON file from Cesium ion.
  const tileset = await Cesium.Cesium3DTileset.fromIonAssetId(2388661);
  viewer.scene.primitives.add(tileset);
  await viewer.zoomTo(tileset);

  // Apply the default style if it exists
  const extras = tileset.asset.extras;
  if (
    Cesium.defined(extras) &&
    Cesium.defined(extras.ion) &&
    Cesium.defined(extras.ion.defaultStyle)
  ) {
    tileset.style = new Cesium.Cesium3DTileStyle(extras.ion.defaultStyle);
  }
  // Move the camera so that the polygon is in view.
  // viewer.flyTo(dataSource);
}

addBuilding();
addHukum1();
addFilsafat();
addPerpusat()
addHukum2();
addKehutanan();
addPerustek();
addGeodesi();
addFisika();
addTNTF();
// STEP 4 CODE
// Hide individual buildings in this area using 3D Tiles Styling language.
buildingsTileset.style = new Cesium.Cesium3DTileStyle({
  // Create a style rule to control each building's "show" property.
  show: {
    conditions : [
      // Any building that has this elementId will have `show = false`.
      ['${elementId} === 364267636', false],
      ['${elementId} === 265567215', false],
      ['${elementId} === 265567220', false],
      ['${elementId} === 1084197567', false],
      ['${elementId} === 265567219', false],
      ['${elementId} === 265567216', false],
      ['${elementId} === 265567218', false],
      ['${elementId} === 265567217', false],
      ['${elementId} === 1084204353', false],
      ['${elementId} === 121239622', false],
      ['${elementId} === 263939057', false],
      ['${elementId} === 263939072', false],
      ['${elementId} === 384008371', false],
      ['${elementId} === 121815582', false],
      ['${elementId} === 384008370', false],
      ['${elementId} === 384008372', false],
      ['${elementId} === 121815583', false],
      ['${elementId} === 265567214', false],
      ['${elementId} === 121815581', false],
      ['${elementId} === 263939090', false],
      ['${elementId} === 263939031', false],
      ['${elementId} === 384008369', false],
      ['${elementId} === 120383135', false],
      ['${elementId} === 122141912', false],
      ['${elementId} === 736478442', false],
      ['${elementId} === 120393519', false],
      ['${elementId} === 121883365', false],
      ['${elementId} === 120381150', false],
      ['${elementId} === 120381380', false],
      ['${elementId} === 121883044', false],
  
      // If a building does not have one of these elementIds, set `show = true`.
      [true, true]
    ]
  },
  // Set the default color style for this particular 3D Tileset.
  // For any building that has a `cesium#color` property, use that color, otherwise make it white.
  color: "Boolean(${feature['cesium#color']}) ? color(${feature['cesium#color']}) : color('#FFF5C2')"
});

// Add the 3D Tileset you created from your Cesium ion account.
const newBuildingTileset = await Cesium.Cesium3DTileset.fromIonAssetId(2388338);
viewer.scene.primitives.add(newBuildingTileset);

/ Create a SampledPositionProperty for the camera path
const positionProperty = new Cesium.SampledPositionProperty();
path.forEach((position, index) => {
  const time = Cesium.JulianDate.addSeconds(
    Cesium.JulianDate.now(),
    index * 2,
    new Cesium.JulianDate()
  );
  positionProperty.addSample(time, position);
});

// Create a PathGraphics to visualize the path
const pathGraphics = new Cesium.PathGraphics();
pathGraphics.width = 10; // Set the width of the path

// Create an entity to represent the camera path
const pathEntity = viewer.entities.add({
  position: positionProperty,
  path: pathGraphics,
});

// Set the viewer's clock to match the time of the camera path
viewer.clock.startTime = positionProperty.startTime;
viewer.clock.stopTime = positionProperty.stopTime;
viewer.clock.currentTime = positionProperty.startTime;
viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP; // Loop the animation

// Fly the camera to the starting position of the path
viewer.flyTo(pathEntity);

// Set the camera to follow the path in VR mode
viewer.camera.flyTo({
  destination: path[0],
  orientation: {
    direction: new Cesium.Cartesian3(1.0, 0.0, 0.0),
    up: new Cesium.Cartesian3(0.0, 0.0, 1.0),
  },
  convert: false,
  complete: () => {
    // Enable VR mode after the camera has flown to the starting position
    viewer.scene.requestVRButton(true);
  },
});
// Toggle the tileset's show property when the button is clicked.
document.querySelector('#toggle-building').onclick = function() {
  newBuildingTileset.show = !newBuildingTileset.show;
};