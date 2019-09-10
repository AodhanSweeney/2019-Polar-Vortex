#ifdef GL_ES
precision highp float;
#endif

uniform float width;
uniform float height;

uniform sampler2D sampler1;
uniform sampler2D sampler2;

varying vec2 vTexCoord1;

float scale(vec3 color) {
  return color.b * 3.0;

}

void main() {

  vec2 p = vTexCoord1;
  /*gl_FragColor = texture2D(sampler1, p);*/
  vec3 color = texture2D(sampler1, p).rgb;

  float temp;
  temp = color.r;

  float red;
  float blue;
  float green;

  if ((.8 * .45) < temp){
    red = temp * 3.0;
    green = 1.0;
    blue = 0.0;
    gl_FragColor = vec4(red, green, blue, scale(color));
  }
  if (temp > (.6 * .45) && temp < (.8 * .45)){
    red = 1.0;
    green = temp * 3.0;
    blue = 0.0;
    gl_FragColor = vec4(red, green, blue, scale(color));
  }
  if (temp > (.35 * .45) && temp < (.6 * .45)){
    red = 0.0;
    green = 1.0;
    blue = temp * 3.0;
    gl_FragColor = vec4(red, green, blue, scale(color));
  }
  if (temp > (.05 * .45) && temp < (.35 * .45)){
    red = temp * 5.0;
    green = 0.0;
    blue = 1.0;
    gl_FragColor = vec4(red, green, blue, scale(color));
  }
  if (temp > (-1.0) && temp < (.45 * .05)){
    red = 0.0;
    green = 0.0;
    blue = 0.0;
    gl_FragColor = vec4(red, green, blue, scale(color));
  }

}
