// Get your token from https://cesium.com/ion/tokens
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2NWNlNWZlNy1mMmRkLTQ4MzItODhjMS1lNjVhYzNiNDBkYzMiLCJpZCI6MTgxNzA2LCJpYXQiOjE3MDEzMzQ0MDB9.3AbzVvu8KllEBmE6PuCS5b7bJ6SFcFrn4hRnTVNjk6g';
// Initialize the viewer with Cesium World Terrain.
const viewer = new Cesium.Viewer('cesiumContainer', {
  terrainProvider: Cesium.createWorldTerrain()
});

// Add Cesium OSM Buildings.
const buildingsTileset = await Cesium.createOsmBuildingsAsync();
viewer.scene.primitives.add(buildingsTileset);

// STEP 3 CODE (first point)
// This is one of the first radar samples collected for our flight.
// const dataPoint = { longitude: 110.38092, latitude: -7.77390, height: 250 };
// Mark this location with a red point.
// const pointEntity = viewer.entities.add({
//  description: `First data point at (${dataPoint.longitude}, ${dataPoint.latitude})`,
//  position: Cesium.Cartesian3.fromDegrees(dataPoint.longitude, dataPoint.latitude, dataPoint.height),
//  point: { pixelSize: 10, color: Cesium.Color.RED }
//});
// Fly the camera to this point.
// viewer.flyTo(pointEntity);


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
  const extras = tileset2.asset.extras;
  if (
    Cesium.defined(extras) &&
    Cesium.defined(extras.ion) &&
    Cesium.defined(extras.ion.defaultStyle)
  ) {
    tileset2.style = new Cesium.Cesium3DTileStyle(extras.ion.defaultStyle);
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
  const extras = tileset2.asset.extras;
  if (
    Cesium.defined(extras) &&
    Cesium.defined(extras.ion) &&
    Cesium.defined(extras.ion.defaultStyle)
  ) {
    tileset2.style = new Cesium.Cesium3DTileStyle(extras.ion.defaultStyle);
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

// These are all the radar points from this flight.
const flightData = JSON.parse(
  '[{"longitude":110.38112,"latitude":-7.77376,"height":250},{"longitude":110.38164,"latitude":-7.77242,"height":220},{"longitude":110.38124,"latitude":-7.77120,"height":220},{"longitude":110.38135,"latitude":-7.77074,"height":250},{"longitude":110.38072,"latitude":-7.77030,"height":230},{"longitude":110.38106,"latitude":-7.76967,"height":220},{"longitude":110.37938,"latitude":-7.76889,"height":220},{"longitude":110.37981,"latitude":-7.76757,"height":220},{"longitude":110.38030,"latitude":-7.76718,"height":250},{"longitude":110.37869,"latitude":-7.76995,"height":250},{"longitude":110.37912,"latitude":-7.76873,"height":200},{"longitude":110.37578,"latitude":-7.76761,"height":220},{"longitude":110.37437,"latitude":-7.76725,"height":200},{"longitude":110.37485,"latitude":-7.76653,"height":180},{"longitude":110.37276,"latitude":-7.76532,"height":180},{"longitude":110.37241,"latitude":-7.76492,"height":180},{"longitude":110.37305,"latitude":-7.76370,"height":200},{"longitude":110.37176,"latitude":-7.76534,"height":180},{"longitude":110.37260,"latitude":-7.76564,"height":200},{"longitude":110.37217,"latitude":-7.76626,"height":200},{"longitude":110.37296,"latitude":-7.76668,"height":150}]'
);

/* Initialize the viewer clock:
  Assume the radar samples are 30 seconds apart, and calculate the entire flight duration based on that assumption.
  Get the start and stop date times of the flight, where the start is the known flight departure time (converted from PST 
    to UTC) and the stop is the start plus the calculated duration. (Note that Cesium uses Julian dates. See 
    https://simple.wikipedia.org/wiki/Julian_day.)
  Initialize the viewer's clock by setting its start and stop to the flight start and stop times we just calculated. 
  Also, set the viewer's current time to the start time and take the user to that time. 
*/
const timeStepInSeconds = 30;
const totalSeconds = timeStepInSeconds * (flightData.length - 1);
const start = Cesium.JulianDate.fromIso8601("2020-03-09T23:10:00Z");
const stop = Cesium.JulianDate.addSeconds(start, totalSeconds, new Cesium.JulianDate());
viewer.clock.startTime = start.clone();
viewer.clock.stopTime = stop.clone();
viewer.clock.currentTime = start.clone();
viewer.timeline.zoomTo(start, stop);
// Speed up the playback speed 50x.
viewer.clock.multiplier = 50;
// Start playing the scene.
viewer.clock.shouldAnimate = true;

// The SampledPositionedProperty stores the position and timestamp for each sample along the radar sample series.
const positionProperty = new Cesium.SampledPositionProperty();

for (let i = 0; i < flightData.length; i++) {
  const dataPoint = flightData[i];

  // Declare the time for this individual sample and store it in a new JulianDate instance.
  const time = Cesium.JulianDate.addSeconds(start, i * timeStepInSeconds, new Cesium.JulianDate());
  const position = Cesium.Cartesian3.fromDegrees(dataPoint.longitude, dataPoint.latitude, dataPoint.height);
  // Store the position along with its timestamp.
  // Here we add the positions all upfront, but these can be added at run-time as samples are received from a server.
  positionProperty.addSample(time, position);

  viewer.entities.add({
    description: `Location: (${dataPoint.longitude}, ${dataPoint.latitude}, ${dataPoint.height})`,
    position: position,
    point: { pixelSize: 10, color: Cesium.Color.RED }
  });
}

// STEP 4 CODE (green circle entity)
// STEP 6 CODE (airplane entity)
async function loadModel() {
  // Load the glTF model from Cesium ion.
  const airplaneUri = await Cesium.IonResource.fromAssetId(2388868);
  const airplaneEntity = viewer.entities.add({
    availability: new Cesium.TimeIntervalCollection([ new Cesium.TimeInterval({ start: start, stop: stop }) ]),
    position: positionProperty,
    // Attach the 3D model instead of the green point.
    model: { uri: airplaneUri },
    // Automatically compute the orientation from the position.
    orientation: new Cesium.VelocityOrientationProperty(positionProperty),    
    path: new Cesium.PathGraphics({ width: 3 })
  });
  
  viewer.trackedEntity = airplaneEntity;
}

loadModel();

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

// Move the camera to the new building.
viewer.flyTo(newBuildingTileset);
