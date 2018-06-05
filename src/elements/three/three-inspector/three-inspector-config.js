import * as THREE from "../../../../lib/three.module.js";

export const threeInspectorConfig = {
  'Object': {
    'type:object': {tag: 'three-inspector-link'},
    'type:boolean': {tag: 'io-boolean', props: {true: '☑ true', false: '☐ false'}},
    'constructor:Vector2': {tag: 'three-vector'},
    'constructor:Vector3': {tag: 'three-vector'},
    'constructor:Vector4': {tag: 'three-vector'},
    'constructor:Quaternion': {tag: 'three-vector'},
    'constructor:Euler': {tag: 'three-vector'},
    'constructor:Color': {tag: 'three-color'},
    'key:intensity': {tag: 'io-slider', props: {min: 0, max: 1}},
    'key:opacity': {tag: 'io-slider', props: {min: 0, max: 1}}
  },
  'Matrix2':{ 'key:elements': {tag: 'three-matrix'} },
  'Matrix3':{ 'key:elements': {tag: 'three-matrix'} },
  'Matrix4':{ 'key:elements': {tag: 'three-matrix'} },
  groups: {
    'Object': {
      'main': ['name', 'visible', 'userData'],
      'hidden': ['type']
    },
    'Object3D' : {
      'main': ['geometry', 'material', 'parent', 'children'],
      'transform': ['position', 'rotation', 'scale', 'up', 'quaternion', 'matrix', 'matrixWorld', 'matrixAutoUpdate', 'matrixWorldNeedsUpdate'],
      'rendering': ['drawMode', 'layers', 'visible', 'castShadow', 'receiveShadow', 'frustumCulled', 'renderOrder']
    },
    'Texture' : {
      'main': [
        'offset',
        'repeat',
        'center',
        'rotation',
      ]
    },
    'Material' : {
      'main': [
        'color',
        'specular',
        'shininess',
        'opacity',
        'wireframe',
        'map',
        'specularMap',
        'alphaMap',
        'envMap',
        'lightMap',
        'lightMapIntensity',
        'aoMap',
        'aoMapIntensity',
        'emissive',
        'emissiveMap',
        'emissiveIntensity',
        'bumpMap',
        'bumpScale',
        'normalMap',
        'normalScale',
        'displacementMap',
        'displacementScale',
        'displacementBias',
        'reflectivity',
        'refractionRatio',
      ],
      'shading': [
        'transparent',
        'dithering',
        'flatShading',
        'lights',
        'vertexColors',
        // 'fog',
        // 'needsUpdate',
        // 'wireframeLinewidth',
      ],
      'blending': [
        'side',
        'shadowSide',
        'depthTest',
        'depthWrite',
        'depthFunc',
        'blending',
        'blendSrc',
        'blendSrcAlpha',
        'blendDst',
        'blendDstAlpha',
        'blendEquation',
        'blendEquationAlpha',
        'colorWrite',
        'alphaTest',
        'overdraw',
        'combine',
        'premultipliedAlpha',
      ],
    },
    'Light' : {
      'main': ['intensity', 'color']
    }
  }
};

function setOptionGroups(namespace, className, key, options) {
  let o = [];
  threeInspectorConfig[className] = threeInspectorConfig[className] || {};
  threeInspectorConfig[className]['key:' + key] = { tag: 'io-option', props: { options: o } };
  for (let i = 0; i < options.length; i++) {
    if (typeof options[i] === 'string') {
      o.push({ value: namespace[options[i]], label: options[i]});
    } else if (options[i] instanceof Array) {
      o.push({ value: options[i][0], label: options[i][1]});
    }
  }
}

setOptionGroups(THREE, 'WebGLRenderer', 'toneMapping', [
  'NoToneMapping', 'LinearToneMapping', 'ReinhardToneMapping',
  'Uncharted2ToneMapping', 'CineonToneMapping'
]);

setOptionGroups(THREE, 'WebGLShadowMap', 'type', [
  'BasicShadowMap', 'PCFShadowMap', 'PCFSoftShadowMap'
]);

setOptionGroups(THREE, 'MeshDepthMaterial', 'depthPacking', [
  'BasicDepthPacking', 'RGBADepthPacking'
]);

setOptionGroups(THREE, 'Texture', 'mapping', [
  'UVMapping', 'CubeReflectionMapping', 'CubeRefractionMapping',
  'EquirectangularReflectionMapping', 'EquirectangularRefractionMapping',
  'SphericalReflectionMapping', 'CubeUVReflectionMapping', 'CubeUVRefractionMapping'
]);

setOptionGroups(THREE, 'Texture', 'minFilter', [
  'NearestFilter', 'NearestMipMapNearestFilter', 'NearestMipMapLinearFilter',
  'LinearFilter', 'LinearMipMapNearestFilter', 'LinearMipMapLinearFilter'
]);

setOptionGroups(THREE, 'Texture', 'magFilter', [
  'NearestFilter', 'NearestMipMapNearestFilter', 'NearestMipMapLinearFilter',
  'LinearFilter', 'LinearMipMapNearestFilter', 'LinearMipMapLinearFilter'
]);

setOptionGroups(THREE, 'Texture', 'wrapS', [
  'RepeatWrapping', 'ClampToEdgeWrapping', 'MirroredRepeatWrapping'
]);

setOptionGroups(THREE, 'Texture', 'wrapT', [
  'RepeatWrapping', 'ClampToEdgeWrapping', 'MirroredRepeatWrapping'
]);
setOptionGroups(THREE, 'Texture', 'encoding', [
  'LinearEncoding', 'sRGBEncoding', 'GammaEncoding', 'RGBEEncoding',
  'LogLuvEncoding', 'RGBM7Encoding', 'RGBM16Encoding', 'RGBDEncoding'
]);
setOptionGroups(THREE, 'Texture', 'type', [
  'UnsignedByteType', 'ByteType', 'ShortType', 'UnsignedShortType', 'IntType',
  'UnsignedIntType', 'FloatType', 'HalfFloatType', 'UnsignedShort4444Type',
  'UnsignedShort5551Type', 'UnsignedShort565Type', 'UnsignedInt248Type'
]);
setOptionGroups(THREE, 'Texture', 'format', [
  'AlphaFormat', 'RGBFormat', 'RGBAFormat', 'LuminanceFormat', 'LuminanceAlphaFormat',
  'RGBEFormat', 'DepthFormat', 'DepthStencilFormat', 'RGB_S3TC_DXT1_Format',
  'RGBA_S3TC_DXT1_Format', 'RGBA_S3TC_DXT3_Format', 'RGBA_S3TC_DXT5_Format',
  'RGB_PVRTC_4BPPV1_Format', 'RGB_PVRTC_2BPPV1_Format', 'RGBA_PVRTC_4BPPV1_Format',
  'RGBA_PVRTC_2BPPV1_Format', 'RGB_ETC1_Format', 'RGBA_ASTC_4x4_Format',
  'RGBA_ASTC_5x4_Format', 'RGBA_ASTC_5x5_Format', 'RGBA_ASTC_6x5_Format',
  'RGBA_ASTC_6x6_Format', 'RGBA_ASTC_8x5_Format', 'RGBA_ASTC_8x6_Format',
  'RGBA_ASTC_8x8_Format', 'RGBA_ASTC_10x5_Format', 'RGBA_ASTC_10x6_Format',
  'RGBA_ASTC_10x8_Format', 'RGBA_ASTC_10x10_Format', 'RGBA_ASTC_12x10_Format',
  'RGBA_ASTC_12x12_Format'
]);
setOptionGroups(THREE, 'Texture', 'unpackAlignment', [
  [1, '1'], [2, '2'], [4, '4'], [8, '8']
]);
setOptionGroups(THREE, 'Object3D', 'drawMode', [
  'TrianglesDrawMode', 'TriangleStripDrawMode', 'TriangleFanDrawMode'
]);

setOptionGroups(THREE, 'Material', 'blending', [
  'NoBlending', 'NormalBlending', 'AdditiveBlending', 'SubtractiveBlending',
  'MultiplyBlending', 'CustomBlending'
]);

setOptionGroups(THREE, 'Material', 'side', [
  'FrontSide', 'BackSide', 'DoubleSide'
]);

setOptionGroups(THREE, 'Material', 'vertexColors', [
  'NoColors', 'FaceColors', 'VertexColors'
]);

setOptionGroups(THREE, 'Material', 'depthFunc', [
 'NeverDepth', 'AlwaysDepth', 'LessDepth', 'LessEqualDepth', 'EqualDepth',
 'GreaterEqualDepth', 'GreaterDepth', 'NotEqualDepth'
]);

setOptionGroups(THREE, 'Material', 'combine', [
  'MultiplyOperation', 'MixOperation', 'AddOperation'
]);

setOptionGroups(THREE, 'Material', 'blendEquation', [
  'AddEquation', 'SubtractEquation', 'ReverseSubtractEquation', 'MinEquation', 'MaxEquation'
]);

setOptionGroups(THREE, 'Material', 'blendEquationAlpha', [
  'AddEquation', 'SubtractEquation', 'ReverseSubtractEquation', 'MinEquation', 'MaxEquation'
]);

setOptionGroups(THREE, 'Material', 'blendSrc', [
  'ZeroFactor', 'OneFactor', 'SrcColorFactor', 'OneMinusSrcColorFactor', 'SrcAlphaFactor',
  'OneMinusSrcAlphaFactor', 'DstAlphaFactor', 'OneMinusDstAlphaFactor', 'DstColorFactor',
  'OneMinusDstColorFactor', 'SrcAlphaSaturateFactor'
]);

setOptionGroups(THREE, 'Material', 'blendDst', [
  'ZeroFactor', 'OneFactor', 'SrcColorFactor', 'OneMinusSrcColorFactor', 'SrcAlphaFactor',
  'OneMinusSrcAlphaFactor', 'DstAlphaFactor', 'OneMinusDstAlphaFactor', 'DstColorFactor',
  'OneMinusDstColorFactor', 'SrcAlphaSaturateFactor'
]);

setOptionGroups(THREE, 'Material', 'blendSrcAlpha', [
  'ZeroFactor', 'OneFactor', 'SrcColorFactor', 'OneMinusSrcColorFactor', 'SrcAlphaFactor',
  'OneMinusSrcAlphaFactor', 'DstAlphaFactor', 'OneMinusDstAlphaFactor', 'DstColorFactor',
  'OneMinusDstColorFactor', 'SrcAlphaSaturateFactor'
]);

setOptionGroups(THREE, 'Material', 'blendDstAlpha', [
  'ZeroFactor', 'OneFactor', 'SrcColorFactor', 'OneMinusSrcColorFactor', 'SrcAlphaFactor',
  'OneMinusSrcAlphaFactor', 'DstAlphaFactor', 'OneMinusDstAlphaFactor', 'DstColorFactor',
  'OneMinusDstColorFactor', 'SrcAlphaSaturateFactor'
]);

setOptionGroups(THREE, 'Material', 'shadowSide', [
  [0, 'BackSide'], [1, 'FrontSide'], [2, 'DoubleSide'] //reverse from side
]);

setOptionGroups(THREE, 'Material', 'shading', [
  [1, 'FlatShading'], [2, 'SmoothShading']
]);

setOptionGroups(THREE, 'Euler', '_order', [
  ['XYZ', 'XYZ'], ['XZY', 'XZY'], ['YXZ', 'YXZ'], ['YZX', 'YZX'], ['ZXY', 'ZXY'], ['ZYX', 'ZYX']
]);

// export var CullFaceNone = 0;
// export var CullFaceBack = 1;
// export var CullFaceFront = 2;
// export var CullFaceFrontBack = 3;
// export var FrontFaceDirectionCW = 0;
// export var FrontFaceDirectionCCW = 1;
// export var LoopOnce = 2200;
// export var LoopRepeat = 2201;
// export var LoopPingPong = 2202;
// keyframes
// export var InterpolateDiscrete = 2300;
// export var InterpolateLinear = 2301;
// export var InterpolateSmooth = 2302;
// export var ZeroCurvatureEnding = 2400;
// export var ZeroSlopeEnding = 2401;
// export var WrapAroundEnding = 2402;