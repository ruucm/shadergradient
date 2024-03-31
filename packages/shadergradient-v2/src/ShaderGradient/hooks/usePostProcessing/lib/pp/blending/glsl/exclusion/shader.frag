vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return (x + y - 2.0 * x * y) * opacity + x * (1.0 - opacity);

}
