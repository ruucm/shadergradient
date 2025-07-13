
export function parseUrlForControls(url) {
    const parsedUrl = new URL(url)
    const params = new URLSearchParams(parsedUrl.search)
  
    const controls = {}
  
    // Helper function to convert string values to appropriate types
    const convertValue = (value) => {
        if (value === "true" || value === "false") {
            return value === "true"
        }
        if (value === "on" || value === "off") {
            return value
        }
        if (!isNaN(value) && value !== "") {
            return Number(value)
        }
        return value
    }
  
    // Define property groups based on FramerShaderGradient.propertyControls
    const propertyGroups = {
        position: ["positionX", "positionY", "positionZ"],
        rotation: ["rotationX", "rotationY", "rotationZ"],
        cameraAngle: ["cAzimuthAngle", "cPolarAngle"],
        noise: ["uStrength", "uDensity"],
    }
  
    // First pass: collect all parameters
    const allParams = {}
    for (const [key, value] of params.entries()) {
        allParams[key] = convertValue(value)
    }
  
    // Second pass: group properties and add remaining parameters
    for (const [key, value] of Object.entries(allParams)) {
        let grouped = false
  
        // Check if the parameter belongs to any group
        for (const [groupName, properties] of Object.entries(propertyGroups)) {
            if (properties.includes(key)) {
                // Initialize group object if it doesn't exist
                if (!controls[groupName]) {
                    controls[groupName] = {}
                }
                // Keep the original property name as is
                controls[groupName][key] = value
                grouped = true
                break
            }
        }
  
        // If parameter doesn't belong to any group, add it directly to controls
        if (!grouped) {
            controls[key] = value
        }
    }
  
    return controls
  }
  
 export function parseQuery(queryString) {
    var query = {}
    var pairs = (
        queryString[0] === "?" ? queryString.substr(1) : queryString
    ).split("&")
    for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split("=")
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || "")
    }
    return query
  }
  
 export const isValidUrl = (urlString) => {
    const state = parseQuery(urlString)
  
    // TODO: more accurate validation check
    // @ts-ignore
    return state.color1 && state.color2 && state.color3
  }
  