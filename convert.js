const mapExtents = {
  // south: southermost latitude of map
  // north: northernmost latitude
  // west: westernmost longitude
  // east: easternmost longitude
};

const frameSize = {
  // width: width of the video
  // height: height of the video
};

function convertGeoCoordsToPixels(coord, mapExtents, frameSize) {
  // Normalize the coordinates
  const normalizedX = (coord[0] - mapExtents.west) / (mapExtents.east - mapExtents.west);
  const normalizedY = (coord[1] - mapExtents.south) / (mapExtents.north - mapExtents.south);

  // Convert to pixel coordinates
  const pixelX = normalizedX * frameSize.width;
  // Invert the y-axis by subtracting from the frame height
  const pixelY = frameSize.height - normalizedY * frameSize.height;

  return [Math.round(pixelX), Math.round(pixelY)];
}
