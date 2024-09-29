varying vec3 fragPos;
uniform float u_width;
uniform float u_height;
uniform float u_time;

// Define the brush color and maximum variation
const vec3 baseColor = vec3(0.149, 0.141, 0.912); // Base color of the brush (deep blue)
const float maxColorVariation = 0.1; // Maximum variation for each color channel
const float maxStartVariation = 0.05;

// Brush parameters
const float minThickness = 0.0003; // Minimum thickness of each bristle
const float maxThickness = 0.0007; // Maximum thickness of each bristle
const int bristleCount = 100; // Number of bristles
const float bristleGap = 0.000; // Gap between bristles
const float minWidth = 0.6; // Minimum width of a bristle (0.6 = 60% of full width)
const float maxWidth = 0.8; // Maximum width of a bristle (0.8 = 80% of full width)

// Random function
float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

// Function to generate a random color variation
vec3 getRandomColorVariation(float seed1, float seed2) {
    vec3 randomValues = vec3(
        random(vec2(seed1, seed2)),
        random(vec2(seed1 + 0.1, seed2 + 0.1)),
        random(vec2(seed1 + 0.2, seed2 + 0.2))
    );
    return (randomValues * 2.0 - 1.0) * maxColorVariation;
}

void main() {
    // Normalize coordinates
    float normalizedX = (fragPos.x + u_width) / (2.0 * u_width); // 0 to 1 across full width
    float normalizedY = (fragPos.y + u_height) / (2.0 * u_height); // 0 to 1 from bottom to top

    // Animation progress (clamped to ensure it stops at 1.0)
    float animationProgress = min(u_time * 0.5, 1.0); // Adjust speed by changing the multiplier

    float finalBristle = 0.0;
    vec3 finalColor = vec3(0.0);

    // Calculate the maximum possible height of the brush (using maxThickness)
    float maxBrushHeight = float(bristleCount) * maxThickness + float(bristleCount - 1) * bristleGap;
    float brushStart = 0.5 - maxBrushHeight / 2.0;

    float currentY = brushStart;

    for (int i = 0; i < bristleCount; i++) {
        // Generate stable random values for this bristle
        float bristleSeed = float(i) * 0.1;
        float thicknessSeed = bristleSeed + 0.1;
        float widthSeed = bristleSeed + 0.2;
        
        // Generate random thickness and width
        float bristleThickness = mix(minThickness, maxThickness, random(vec2(thicknessSeed, 0.0)));
        float bristleWidth = mix(minWidth, maxWidth, random(vec2(widthSeed, 0.0)));
        
        // Generate random color variation for this bristle
        vec3 colorVariation = getRandomColorVariation(bristleSeed, bristleSeed + 0.3);
        vec3 bristleColor = clamp(baseColor + colorVariation, 0.0, 1.0);
        
        // Check if the current y position is within this bristle
        float withinBristle = step(currentY, normalizedY) - step(currentY + bristleThickness, normalizedY);
        
        // Calculate the current length of the bristle
        float currentLength = min(animationProgress, bristleWidth);
        
        // Check if the current x position is within the animated length for this bristle
        float withinLength = step(normalizedX, currentLength);
        
        float bristleContribution = withinBristle * withinLength;
        finalBristle += bristleContribution;
        finalColor += bristleColor * bristleContribution;

        // Move to the next bristle position
        currentY += bristleThickness + bristleGap;
    }

    // Normalize the final color
    finalColor = finalBristle > 0.0 ? finalColor / finalBristle : baseColor;

    // Output
    gl_FragColor = vec4(finalColor, finalBristle);
}