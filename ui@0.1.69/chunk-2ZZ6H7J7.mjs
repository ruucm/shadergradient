// src/overrides/utils.tsx
function parseUrlForControls(url) {
  const parsedUrl = new URL(url);
  const params = new URLSearchParams(parsedUrl.search);
  const controls = {};
  const convertValue = (value) => {
    if (value === "true" || value === "false") {
      return value === "true";
    }
    if (value === "on" || value === "off") {
      return value;
    }
    if (!isNaN(value) && value !== "") {
      return Number(value);
    }
    return value;
  };
  const propertyGroups = {
    position: ["positionX", "positionY", "positionZ"],
    rotation: ["rotationX", "rotationY", "rotationZ"],
    cameraAngle: ["cAzimuthAngle", "cPolarAngle"],
    noise: ["uStrength", "uDensity"]
  };
  const allParams = {};
  for (const [key, value] of params.entries()) {
    allParams[key] = convertValue(value);
  }
  for (const [key, value] of Object.entries(allParams)) {
    let grouped = false;
    for (const [groupName, properties] of Object.entries(propertyGroups)) {
      if (properties.includes(key)) {
        if (!controls[groupName]) {
          controls[groupName] = {};
        }
        controls[groupName][key] = value;
        grouped = true;
        break;
      }
    }
    if (!grouped) {
      controls[key] = value;
    }
  }
  return controls;
}
function parseQuery(queryString) {
  var query = {};
  var pairs = (queryString[0] === "?" ? queryString.substr(1) : queryString).split("&");
  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i].split("=");
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || "");
  }
  return query;
}
var isValidUrl = (urlString) => {
  const state = parseQuery(urlString);
  return state.color1 && state.color2 && state.color3;
};

export {
  parseUrlForControls,
  parseQuery,
  isValidUrl
};
