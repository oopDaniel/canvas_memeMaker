
self.onmessage = function(e) {
  var imageData = e.data;
  var data = imageData.data;
  var r, g, b, i, grey, length;

  try {
    length = data.length / 4;
    for (i = 0; i < length; ++i) {
      r = data[i * 4 + 0];
      g = data[i * 4 + 1];
      b = data[i * 4 + 2];

      // Optimized grey scale
      grey = (0.3 * r) + (0.59 * g) + (0.11 * b);

      data[i * 4 + 0] = grey;
      data[i * 4 + 1] = grey;
      data[i * 4 + 2] = grey;
    }
    postMessage(imageData);
  } catch (e) {
    function ManipulationException(message) {
      this.name = "ManipulationException";
      this.message = message;
    };
    throw new ManipulationException('Image manipulation error');
    postMessage(undefined);
  }
}
