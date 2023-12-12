// Get your token from https://cesium.com/ion/tokens
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2NWNlNWZlNy1mMmRkLTQ4MzItODhjMS1lNjVhYzNiNDBkYzMiLCJpZCI6MTgxNzA2LCJpYXQiOjE3MDEzMzQ0MDB9.3AbzVvu8KllEBmE6PuCS5b7bJ6SFcFrn4hRnTVNjk6g';
// Initialize the viewer with Cesium World Terrain.
const viewer = new Cesium.Viewer("cesiumContainer", {
  terrainProvider: await Cesium.CesiumTerrainProvider.fromIonAssetId(1),
});
viewer.scene.globe.depthTestAgainstTerrain = true;

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

async function addBuilding2() {
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

async function addBuilding2() {
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

addBuilding();
addBuilding2();
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
      // If a building does not have one of these elementIds, set `show = true`.
      [true, true]
    ]
  },
  // Set the default color style for this particular 3D Tileset.
  // For any building that has a `cesium#color` property, use that color, otherwise make it white.
  color: "Boolean(${feature['cesium#color']}) ? color(${feature['cesium#color']}) : color('#ffffff')"
});

// Add the 3D Tileset you created from your Cesium ion account.
const newBuildingTileset = await Cesium.Cesium3DTileset.fromIonAssetId(2388338);
viewer.scene.primitives.add(newBuildingTileset);

// Move the camera to the new building.
viewer.flyTo(newBuildingTileset);
// Toggle the tileset's show property when the button is clicked.
document.querySelector('#toggle-building').onclick = function() {
  newBuildingTileset.show = !newBuildingTileset.show;
};