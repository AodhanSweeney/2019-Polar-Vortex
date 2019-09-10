#ifdef GL_ES
precision highp float;
#endif

#define LIGHT_MAX 4

varying vec2 vTexCoord1;
varying vec4 vColor;
varying vec4 vTransformedNormal;
varying vec4 vPosition;

uniform float alphaUfm;

uniform float shininess;
uniform bool enableSpecularHighlights;
uniform bool enableLights;

uniform vec3 ambientColor;
uniform vec3 directionalColor;
uniform vec3 lightingDirection;

uniform vec3 pointLocation[LIGHT_MAX];
uniform vec3 pointColor[LIGHT_MAX];
uniform vec3 pointSpecularColor[LIGHT_MAX];
uniform float enableSpecular[LIGHT_MAX];
uniform int numberPoints;

uniform bool hasTexture1;
uniform sampler2D sampler1;

uniform mat4 viewMatrix;

void main(void) {
  vec3 lightWeighting;
  float glowValue;

  lightWeighting = vec3(1.0, 1.0, 1.0);
  /*if (!enableLights) {
    lightWeighting = vec3(1.0, 1.0, 1.0);
  } else {
    float shiny = 1. - pow(texture2D(sampler1, 1. - vec2(vTexCoord1.s, vTexCoord1.t)).b, 0.3);

    vec3 lightDirection;
    float specularLightWeighting = 0.0;
    float diffuseLightWeighting = 0.0;
    vec3  specularLight = vec3(0.0, 0.0, 0.0);
    vec3  diffuseLight = vec3(0.0, 0.0, 0.0);

    vec3 transformedPointLocation;
    vec3 normal = vTransformedNormal.xyz;

    vec3 eyeDirection = normalize(-vPosition.xyz);
    vec3 reflectionDirection;

    vec3 pointWeight = vec3(0.0, 0.0, 0.0);

    transformedPointLocation = (viewMatrix * vec4(pointLocation[0], 1.0)).xyz;
    lightDirection = normalize(transformedPointLocation - vPosition.xyz);

    glowValue = 1. - clamp(abs(dot(eyeDirection, vTransformedNormal.xyz)), 0., 1.);

    glowValue = glowValue * glowValue * glowValue * glowValue;
    glowValue = 1.0;

    if (enableSpecular[0] > 0.0) {
      reflectionDirection = reflect(-lightDirection, normal);
      specularLightWeighting = pow(max(dot(reflectionDirection, eyeDirection), 0.0), clamp(shiny * 20., 1., 32.));
      specularLight += specularLightWeighting * pointSpecularColor[0];
    }

    diffuseLightWeighting = max(dot(normal, lightDirection), 0.0);
    diffuseLight += diffuseLightWeighting * pointColor[0];

    lightWeighting = ambientColor + diffuseLight + specularLight;
  }*/

  vec4 fragmentColor = vec4(1);
  if (hasTexture1) {
    fragmentColor = texture2D(sampler1, 1. - vec2(vTexCoord1.s, vTexCoord1.t));

  } /*else {
    fragmentColor = vColor;
  }*/
  gl_FragColor = vec4(fragmentColor.rgb, 1);
  gl_FragColor += mix(gl_FragColor, vec4(0.7, 0.7, 0.1, 0.1), glowValue);
}
