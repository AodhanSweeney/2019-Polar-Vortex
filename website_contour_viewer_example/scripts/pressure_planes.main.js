! function() {
    define("tweets", [], function() {
            return [{
                name: "Adidas 1",
                folder: "adidas1_23",
                id: "488367277252038656",
                dateFrom: "20140415",
                dateTo: "20140416"
            }, {
                name: "Adidas 2",
                folder: "adidas2_13",
                id: "488449709376561153",
                dateFrom: "20140415",
                dateTo: "20140416"
            }, {
                name: "Nike 1",
                folder: "nike1_4",
                id: "456126864117874688",
                dateFrom: "20140415",
                dateTo: "20140416"
            }, {
                name: "Nike 2",
                folder: "nike2_3",
                id: "451750676037505024",
                dateFrom: "20140403",
                dateTo: "20140404"
            }]
        }),
        function() {
            function a(a) {
                return document.getElementById(a)
            }
            this.PhiloGL = null,
                function() {
                    PhiloGL = function(d, e) {
                        function f(b, d, e) {
                            var f = b.canvas,
                                g = new PhiloGL.Camera(h.fov, h.aspect || f.width / f.height, h.near, h.far, h);
                            g.update();
                            var k = new PhiloGL.Scene(d, g, l);
                            c = new PhiloGL.WebGL.Application({
                                gl: b,
                                canvas: f,
                                program: d,
                                scene: k,
                                camera: g
                            }), "program" == d.$$family && d.use(), i && PhiloGL.Events.create(c, a.extend(i, {
                                bind: c
                            })), j.src.length ? new PhiloGL.IO.Textures(a.extend(j, {
                                onComplete: function() {
                                    e(c)
                                }
                            })) : e(c)
                        }
                        e = a.merge({
                            context: {},
                            camera: {
                                fov: 45,
                                near: .1,
                                far: 500
                            },
                            program: {
                                from: "defaults",
                                vs: "Default",
                                fs: "Default"
                            },
                            scene: {},
                            textures: {
                                src: []
                            },
                            events: {},
                            onLoad: a.empty,
                            onError: a.empty
                        }, e || {});
                        var g = e.context,
                            h = e.camera,
                            i = e.events,
                            j = e.textures,
                            k = a.splat(e.program),
                            l = e.scene;
                        if (b = PhiloGL.WebGL.getContext(d, g), !b) return e.onError("The WebGL context couldn't been initialized"), null;
                        var m = {
                                defaults: "fromDefaultShaders",
                                ids: "fromShaderIds",
                                sources: "fromShaderSources",
                                uris: "fromShaderURIs"
                            },
                            n = k.length,
                            o = function() {
                                var a = n,
                                    c = {},
                                    d = !1;
                                return {
                                    onSuccess: function(g, h) {
                                        c[h.id || n - a] = g, a--, 0 !== a || d || f(b, 1 == n ? g : c, function(a) {
                                            e.onLoad(a)
                                        })
                                    },
                                    onError: function(b) {
                                        a--, e.onError(b), d = !0
                                    }
                                }
                            }();
                        k.forEach(function(b) {
                            var c, d = b.from;
                            for (var e in m)
                                if (d == e) {
                                    try {
                                        c = PhiloGL.Program[m[e]](a.extend(o, b))
                                    } catch (f) {
                                        o.onError(f)
                                    }
                                    break
                                } c && o.onSuccess(c, b)
                        })
                    }
                }(), PhiloGL.unpack = function(c) {
                    c = c || d, ["Vec3", "Mat4", "Quat", "Camera", "Program", "WebGL", "O3D", "Scene", "Shaders", "IO", "Events", "WorkerGroup", "Fx", "Media"].forEach(function(a) {
                        c[a] = PhiloGL[a]
                    }), c.gl = b, c.Utils = a
                }, PhiloGL.version = "1.5.2";
            var b, c, d = this;
            a.empty = function() {}, a.time = Date.now, a.uid = function() {
                    var b = a.time();
                    return function() {
                        return b++
                    }
                }(), a.extend = function(a, b) {
                    for (var c in b) a[c] = b[c];
                    return a
                }, a.type = function() {
                    var a = Object.prototype.toString,
                        b = function(b) {
                            var c = a.call(b);
                            return c.substr(8, c.length - 9).toLowerCase()
                        };
                    return function(a) {
                        var c = b(a);
                        return "object" != c ? c : a.$$family ? a.$$family : a && a.nodeName && 1 == a.nodeType ? "element" : c
                    }
                }(),
                function() {
                    function b(c) {
                        var d, e = a.type(c);
                        if ("object" == e) {
                            d = {};
                            for (var f in c) d[f] = b(c[f]);
                            return d
                        }
                        if ("array" == e) {
                            d = [];
                            for (var g = 0, h = c.length; h > g; g++) d[g] = b(c[g]);
                            return d
                        }
                        return c
                    }
                    a.merge = function() {
                        for (var c = {}, d = 0, e = arguments.length; e > d; d++) {
                            var f = arguments[d];
                            if ("object" == a.type(f))
                                for (var g in f) {
                                    var h = f[g],
                                        i = c[g];
                                    c[g] = i && "object" == a.type(h) && "object" == a.type(i) ? a.merge(i, h) : b(h)
                                }
                        }
                        return c
                    }
                }(), a.splat = function() {
                    var a = Array.isArray;
                    return function(b) {
                        return a(b) && b || [b]
                    }
                }(),
                function() {
                    function c(a) {
                        for (var b in a) this[b] = a[b];
                        this.buffers = {}, this.bufferMemo = {}, this.frameBuffers = {}, this.frameBufferMemo = {}, this.renderBuffers = {}, this.renderBufferMemo = {}, this.textures = {}, this.textureMemo = {}
                    }
                    var d = {
                        getContext: function(c, d) {
                            var e, c = "string" == typeof c ? a(c) : c;
                            if (e = c.getContext("experimental-webgl", d), e || (e = c.getContext("webgl", d)), e && d && d.debug) {
                                b = {};
                                for (var f in e) {
                                    var g = e[f];
                                    b[f] = "function" == typeof g ? function(a, b) {
                                        return function() {
                                            console.log(a, Array.prototype.join.call(arguments), Array.prototype.slice.call(arguments));
                                            try {
                                                var c = b.apply(e, arguments)
                                            } catch (d) {
                                                throw a + " " + d
                                            }
                                            for (var f, g = [];
                                                (f = e.getError()) !== e.NO_ERROR;) g.push(f);
                                            if (g.length) throw g.join();
                                            return c
                                        }
                                    }(f, g) : g
                                }
                            } else b = e;
                            return b && (b.get = function(a) {
                                return "string" == typeof a ? b[a] : a
                            }), b
                        }
                    };
                    c.prototype = {
                            $$family: "application",
                            setBuffer: function(c, d, e) {
                                if (e === !1 || null === e) {
                                    e = this.bufferMemo[d], e && b.bindBuffer(e.bufferType, null);
                                    var f = e && e.attribute || d,
                                        g = c.attributes[f];
                                    return void(void 0 !== g && b.disableVertexAttribArray(g))
                                }
                                e = a.extend(this.bufferMemo[d] || {
                                    bufferType: b.ARRAY_BUFFER,
                                    size: 1,
                                    dataType: b.FLOAT,
                                    stride: 0,
                                    offset: 0,
                                    drawType: b.STATIC_DRAW
                                }, e || {});
                                var f = e.attribute || d,
                                    h = e.bufferType,
                                    i = d in this.buffers,
                                    j = i ? this.buffers[d] : b.createBuffer(),
                                    k = "value" in e,
                                    l = e.value,
                                    m = e.size,
                                    n = e.dataType,
                                    o = e.stride,
                                    p = e.offset,
                                    q = e.drawType,
                                    g = c.attributes[f],
                                    r = void 0 !== g;
                                return i || (this.buffers[d] = j), r && b.enableVertexAttribArray(g), b.bindBuffer(h, j), k && b.bufferData(h, l, q), r && b.vertexAttribPointer(g, m, n, !1, o, p), delete e.value, this.bufferMemo[d] = e, r && (this.bufferMemo[f] = e), this
                            },
                            setBuffers: function(a, b) {
                                for (var c in b) this.setBuffer(a, c, b[c]);
                                return this
                            },
                            setFrameBuffer: function(c, d) {
                                if ("object" != typeof d) return void b.bindFramebuffer(b.FRAMEBUFFER, d ? this.frameBuffers[c] : null);
                                d = a.merge(this.frameBufferMemo[c] || {
                                    width: 0,
                                    height: 0,
                                    bindToTexture: !1,
                                    textureOptions: {
                                        attachment: b.COLOR_ATTACHMENT0
                                    },
                                    bindToRenderBuffer: !1,
                                    renderBufferOptions: {
                                        attachment: b.DEPTH_ATTACHMENT
                                    }
                                }, d || {});
                                var e = d.bindToTexture,
                                    f = d.bindToRenderBuffer,
                                    g = c in this.frameBuffers,
                                    h = g ? this.frameBuffers[c] : b.createFramebuffer();
                                if (b.bindFramebuffer(b.FRAMEBUFFER, h), g || (this.frameBuffers[c] = h), e) {
                                    var i = a.merge({
                                            data: {
                                                width: d.width,
                                                height: d.height
                                            }
                                        }, "object" == a.type(e) ? e : {}),
                                        j = c + "-texture",
                                        k = d.textureOptions;
                                    this.setTexture(j, i), b.framebufferTexture2D(b.FRAMEBUFFER, k.attachment, this.textureMemo[j].textureType, this.textures[j], 0)
                                }
                                if (f) {
                                    var l = a.extend({
                                            width: d.width,
                                            height: d.height
                                        }, "object" == a.type(f) ? f : {}),
                                        m = c + "-renderbuffer",
                                        n = d.renderBufferOptions;
                                    this.setRenderBuffer(m, l), b.framebufferRenderbuffer(b.FRAMEBUFFER, n.attachment, b.RENDERBUFFER, this.renderBuffers[m])
                                }
                                return b.bindTexture(b.TEXTURE_2D, null), b.bindRenderbuffer(b.RENDERBUFFER, null), b.bindFramebuffer(b.FRAMEBUFFER, null), this.frameBufferMemo[c] = d, this
                            },
                            setFrameBuffers: function(a) {
                                for (var b in a) this.setFrameBuffer(b, a[b]);
                                return this
                            },
                            setRenderBuffer: function(c, d) {
                                if ("object" != typeof d) return void b.bindRenderbuffer(b.RENDERBUFFER, d ? this.renderBufferMemo[c] : null);
                                d = a.extend(this.renderBufferMemo[c] || {
                                    storageType: b.DEPTH_COMPONENT16,
                                    width: 0,
                                    height: 0
                                }, d || {});
                                var e = c in this.renderBuffers,
                                    f = e ? this.renderBuffers[c] : b.createRenderbuffer(b.RENDERBUFFER);
                                return e || (this.renderBuffers[c] = f), b.bindRenderbuffer(b.RENDERBUFFER, f), b.renderbufferStorage(b.RENDERBUFFER, d.storageType, d.width, d.height), this.renderBufferMemo[c] = d, this
                            },
                            setRenderBuffers: function(a) {
                                for (var b in a) this.setRenderBuffer(b, a[b]);
                                return this
                            },
                            setTexture: function(c, d) {
                                if (!d || "object" != typeof d) return b.activeTexture(d || b.TEXTURE0), void b.bindTexture(this.textureMemo[c].textureType || b.TEXTURE_2D, this.textures[c]);
                                if (d.data && d.data.type === b.FLOAT && !b.getExtension("OES_texture_float")) throw "OES_texture_float is not supported";
                                d = a.merge(this.textureMemo[c] || {
                                    textureType: b.TEXTURE_2D,
                                    pixelStore: [{
                                        name: b.UNPACK_FLIP_Y_WEBGL,
                                        value: !0
                                    }, {
                                        name: b.UNPACK_ALIGNMENT,
                                        value: 1
                                    }],
                                    parameters: [{
                                        name: b.TEXTURE_MAG_FILTER,
                                        value: b.NEAREST
                                    }, {
                                        name: b.TEXTURE_MIN_FILTER,
                                        value: b.NEAREST
                                    }, {
                                        name: b.TEXTURE_WRAP_S,
                                        value: b.CLAMP_TO_EDGE
                                    }, {
                                        name: b.TEXTURE_WRAP_T,
                                        value: b.CLAMP_TO_EDGE
                                    }],
                                    data: {
                                        format: b.RGBA,
                                        value: !1,
                                        type: b.UNSIGNED_BYTE,
                                        width: 0,
                                        height: 0,
                                        border: 0
                                    }
                                }, d || {});
                                var e = "textureType" in d ? d.textureType = b.get(d.textureType) : b.TEXTURE_2D,
                                    f = "textureTarget" in d ? d.textureTarget = b.get(d.textureTarget) : e,
                                    g = e == b.TEXTURE_CUBE_MAP,
                                    h = c in this.textures,
                                    i = h ? this.textures[c] : b.createTexture(),
                                    j = d.pixelStore,
                                    k = d.parameters,
                                    l = d.data,
                                    m = l.value,
                                    n = l.type,
                                    o = l.format,
                                    p = !!l.value;
                                if (h || (this.textures[c] = i), b.bindTexture(e, i), h || j.forEach(function(a) {
                                        a.name = "string" == typeof a.name ? b.get(a.name) : a.name, b.pixelStorei(a.name, a.value)
                                    }), p)
                                    if (g)
                                        for (var q = 0; 6 > q; ++q) !l.width && !l.height || m.width || m.height ? b.texImage2D(f[q], 0, o, o, n, m[q]) : b.texImage2D(f[q], 0, o, l.width, l.height, l.border, o, n, m[q]);
                                    else !l.width && !l.height || m.width || m.height ? b.texImage2D(f, 0, o, o, n, m) : b.texImage2D(f, 0, o, l.width, l.height, l.border, o, n, m);
                                else(l.width || l.height) && b.texImage2D(f, 0, o, l.width, l.height, l.border, o, n, null);
                                if (!h)
                                    for (q = 0; q < k.length; q++) {
                                        var r = k[q];
                                        r.name = b.get(r.name), r.value = b.get(r.value), b.texParameteri(e, r.name, r.value), r.generateMipmap && b.generateMipmap(e)
                                    }
                                return d.isCube = g, p && (d.data.value = !1), this.textureMemo[c] = d, this
                            },
                            setTextures: function(a) {
                                for (var b in a) this.setTexture(b, a[b]);
                                return this
                            },
                            use: function(a) {
                                return b.useProgram(a.program), this.usedProgram = a, this
                            }
                        }, d.Application = c,
                        function() {
                            try {
                                var a = document.createElement("canvas");
                                PhiloGL.hasWebGL = function() {
                                    return !(!window.WebGLRenderingContext || !a.getContext("webgl") && !a.getContext("experimental-webgl"))
                                }
                            } catch (b) {
                                PhiloGL.hasWebGL = function() {
                                    return !1
                                }
                            }
                            PhiloGL.hasExtension = function(a) {
                                if (!PhiloGL.hasWebGL()) return !1;
                                var b = document.createElement("canvas");
                                return (b.getContext("webgl") || b.getContext("experimental-webgl")).getExtension(a)
                            }
                        }(), PhiloGL.WebGL = d
                }(),
                function() {
                    function a(a) {
                        return {
                            get: function() {
                                return this[a]
                            },
                            set: function(b) {
                                this[a] = b
                            },
                            configurable: !1,
                            enumerable: !1
                        }
                    }
                    var b = Math.sqrt,
                        c = Math.sin,
                        d = Math.cos,
                        e = Math.tan,
                        f = Math.PI,
                        g = Array.prototype.slice,
                        h = this.Float32Array,
                        i = function() {
                            if (!h || !h.call) return Array;
                            try {
                                h.call({}, 10)
                            } catch (a) {
                                return Array
                            }
                            return h
                        }(),
                        j = i != Array,
                        k = function(a, b, c) {
                            j ? (h.call(this, 3), this[0] = a || 0, this[1] = b || 0, this[2] = c || 0) : this.push(a || 0, b || 0, c || 0), this.typedContainer = new h(3)
                        };
                    k.create = function() {
                        return new h(3)
                    }, k.prototype = Object.create(i.prototype, {
                        $$family: {
                            value: "Vec3"
                        },
                        x: a(0),
                        y: a(1),
                        z: a(2)
                    });
                    var l = {
                            setVec3: function(a, b) {
                                return a[0] = b[0], a[1] = b[1], a[2] = b[2], a
                            },
                            set: function(a, b, c, d) {
                                return a[0] = b, a[1] = c, a[2] = d, a
                            },
                            add: function(a, b) {
                                return new k(a[0] + b[0], a[1] + b[1], a[2] + b[2])
                            },
                            $add: function(a, b) {
                                return a[0] += b[0], a[1] += b[1], a[2] += b[2], a
                            },
                            add2: function(a, b, c) {
                                return a[0] = b[0] + c[0], a[1] = b[1] + c[1], a[2] = b[2] + c[2], a
                            },
                            sub: function(a, b) {
                                return new k(a[0] - b[0], a[1] - b[1], a[2] - b[2])
                            },
                            $sub: function(a, b) {
                                return a[0] -= b[0], a[1] -= b[1], a[2] -= b[2], a
                            },
                            sub2: function(a, b, c) {
                                return a[0] = b[0] - c[0], a[1] = b[1] - c[1], a[2] = b[2] - c[2], a
                            },
                            scale: function(a, b) {
                                return new k(a[0] * b, a[1] * b, a[2] * b)
                            },
                            $scale: function(a, b) {
                                return a[0] *= b, a[1] *= b, a[2] *= b, a
                            },
                            neg: function(a) {
                                return new k(-a[0], -a[1], -a[2])
                            },
                            $neg: function(a) {
                                return a[0] = -a[0], a[1] = -a[1], a[2] = -a[2], a
                            },
                            unit: function(a) {
                                var b = k.norm(a);
                                return b > 0 ? k.scale(a, 1 / b) : k.clone(a)
                            },
                            $unit: function(a) {
                                var b = k.norm(a);
                                return b > 0 ? k.$scale(a, 1 / b) : a
                            },
                            cross: function(a, b) {
                                var c = a[0],
                                    d = a[1],
                                    e = a[2],
                                    f = b[0],
                                    g = b[1],
                                    h = b[2];
                                return new k(d * h - e * g, e * f - c * h, c * g - d * f)
                            },
                            $cross: function(a, b) {
                                var c = a[0],
                                    d = a[1],
                                    e = a[2],
                                    f = b[0],
                                    g = b[1],
                                    h = b[2];
                                return a[0] = d * h - e * g, a[1] = e * f - c * h, a[2] = c * g - d * f, a
                            },
                            distTo: function(a, c) {
                                var d = a[0] - c[0],
                                    e = a[1] - c[1],
                                    f = a[2] - c[2];
                                return b(d * d + e * e + f * f)
                            },
                            distToSq: function(a, b) {
                                var c = a[0] - b[0],
                                    d = a[1] - b[1],
                                    e = a[2] - b[2];
                                return c * c + d * d + e * e
                            },
                            norm: function(a) {
                                var c = a[0],
                                    d = a[1],
                                    e = a[2];
                                return b(c * c + d * d + e * e)
                            },
                            normSq: function(a) {
                                var b = a[0],
                                    c = a[1],
                                    d = a[2];
                                return b * b + c * c + d * d
                            },
                            dot: function(a, b) {
                                return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
                            },
                            clone: function(a) {
                                return a.$$family ? new k(a[0], a[1], a[2]) : k.setVec3(new h(3), a)
                            },
                            toFloat32Array: function(a) {
                                var b = a.typedContainer;
                                return b ? (b[0] = a[0], b[1] = a[1], b[2] = a[2], b) : a
                            }
                        },
                        m = k.prototype;
                    for (var n in l) k[n] = l[n], m[n] = function(a) {
                        return function() {
                            var b = g.call(arguments);
                            return b.unshift(this), k[a].apply(k, b)
                        }
                    }(n);
                    var o = function(a, b, c, d, e, f, g, j, k, l, m, n, o, p, q, r) {
                        i.call(this, 16), this.length = 16, "number" == typeof a ? this.set(a, b, c, d, e, f, g, j, k, l, m, n, o, p, q, r) : this.id(), this.typedContainer = new h(16)
                    };
                    o.create = function() {
                        return new h(16)
                    }, o.prototype = Object.create(i.prototype, {
                        $$family: {
                            value: "Mat4"
                        },
                        n11: a(0),
                        n12: a(4),
                        n13: a(8),
                        n14: a(12),
                        n21: a(1),
                        n22: a(5),
                        n23: a(9),
                        n24: a(13),
                        n31: a(2),
                        n32: a(6),
                        n33: a(10),
                        n34: a(14),
                        n41: a(3),
                        n42: a(7),
                        n43: a(11),
                        n44: a(15)
                    }), l = {
                        id: function(a) {
                            return a[0] = 1, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0, a[5] = 1, a[6] = 0, a[7] = 0, a[8] = 0, a[9] = 0, a[10] = 1, a[11] = 0, a[12] = 0, a[13] = 0, a[14] = 0, a[15] = 1, a
                        },
                        clone: function(a) {
                            return a.$$family ? new o(a[0], a[4], a[8], a[12], a[1], a[5], a[9], a[13], a[2], a[6], a[10], a[14], a[3], a[7], a[11], a[15]) : new h(a)
                        },
                        set: function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
                            return a[0] = b, a[4] = c, a[8] = d, a[12] = e, a[1] = f, a[5] = g, a[9] = h, a[13] = i, a[2] = j, a[6] = k, a[10] = l, a[14] = m, a[3] = n, a[7] = o, a[11] = p, a[15] = q, a
                        },
                        mulVec3: function(a, b) {
                            var c = k.clone(b);
                            return o.$mulVec3(a, c)
                        },
                        $mulVec3: function(a, b) {
                            var c = b[0],
                                d = b[1],
                                e = b[2],
                                f = 1 / (a[3] * c + a[7] * d + a[11] * e + a[15]);
                            return b[0] = (a[0] * c + a[4] * d + a[8] * e + a[12]) * f, b[1] = (a[1] * c + a[5] * d + a[9] * e + a[13]) * f, b[2] = (a[2] * c + a[6] * d + a[10] * e + a[14]) * f, b
                        },
                        mulMat42: function(a, b, c) {
                            var d = b[0],
                                e = b[1],
                                f = b[2],
                                g = b[3],
                                h = b[4],
                                i = b[5],
                                j = b[6],
                                k = b[7],
                                l = b[8],
                                m = b[9],
                                n = b[10],
                                o = b[11],
                                p = b[12],
                                q = b[13],
                                r = b[14],
                                s = b[15],
                                t = c[0],
                                u = c[1],
                                v = c[2],
                                w = c[3],
                                x = c[4],
                                y = c[5],
                                z = c[6],
                                A = c[7],
                                B = c[8],
                                C = c[9],
                                D = c[10],
                                E = c[11],
                                F = c[12],
                                G = c[13],
                                H = c[14],
                                I = c[15];
                            return a[0] = t * d + u * h + v * l + w * p, a[1] = t * e + u * i + v * m + w * q, a[2] = t * f + u * j + v * n + w * r, a[3] = t * g + u * k + v * o + w * s, a[4] = x * d + y * h + z * l + A * p, a[5] = x * e + y * i + z * m + A * q, a[6] = x * f + y * j + z * n + A * r, a[7] = x * g + y * k + z * o + A * s, a[8] = B * d + C * h + D * l + E * p, a[9] = B * e + C * i + D * m + E * q, a[10] = B * f + C * j + D * n + E * r, a[11] = B * g + C * k + D * o + E * s, a[12] = F * d + G * h + H * l + I * p, a[13] = F * e + G * i + H * m + I * q, a[14] = F * f + G * j + H * n + I * r, a[15] = F * g + G * k + H * o + I * s, a
                        },
                        mulMat4: function(a, b) {
                            var c = o.clone(a);
                            return o.mulMat42(c, a, b)
                        },
                        $mulMat4: function(a, b) {
                            return o.mulMat42(a, a, b)
                        },
                        add: function(a, b) {
                            var c = o.clone(a);
                            return o.$add(c, b)
                        },
                        $add: function(a, b) {
                            return a[0] += b[0], a[1] += b[1], a[2] += b[2], a[3] += b[3], a[4] += b[4], a[5] += b[5], a[6] += b[6], a[7] += b[7], a[8] += b[8], a[9] += b[9], a[10] += b[10], a[11] += b[11], a[12] += b[12], a[13] += b[13], a[14] += b[14], a[15] += b[15], a
                        },
                        transpose: function(a) {
                            var b = o.clone(a);
                            return o.$transpose(b)
                        },
                        $transpose: function(a) {
                            var b = a[4],
                                c = a[8],
                                d = a[12],
                                e = a[1],
                                f = a[9],
                                g = a[13],
                                h = a[2],
                                i = a[6],
                                j = a[14],
                                k = a[3],
                                l = a[7],
                                m = a[11];
                            return a[1] = b, a[2] = c, a[3] = d, a[4] = e, a[6] = f, a[7] = g, a[8] = h, a[9] = i, a[11] = j, a[12] = k, a[13] = l, a[14] = m, a
                        },
                        rotateAxis: function(a, b, c) {
                            var d = o.clone(a);
                            return o.$rotateAxis(d, b, c)
                        },
                        $rotateAxis: function(a, b, e) {
                            {
                                var f = c(b),
                                    g = d(b),
                                    h = 1 - g,
                                    i = e[0],
                                    j = e[1],
                                    k = e[2],
                                    l = i * i * h + g,
                                    m = i * j * h + k * f,
                                    n = i * k * h - j * f,
                                    o = j * i * h - k * f,
                                    p = j * j * h + g,
                                    q = j * k * h + i * f,
                                    r = i * k * h + j * f,
                                    s = j * k * h - i * f,
                                    t = k * k * h + g,
                                    u = a[0],
                                    v = a[1],
                                    w = a[2],
                                    x = a[3],
                                    y = a[4],
                                    z = a[5],
                                    A = a[6],
                                    B = a[7],
                                    C = a[8],
                                    D = a[9],
                                    E = a[10],
                                    F = a[11];
                                a[12], a[13], a[14], a[15]
                            }
                            return a[0] = u * l + y * m + C * n, a[1] = v * l + z * m + D * n, a[2] = w * l + A * m + E * n, a[3] = x * l + B * m + F * n, a[4] = u * o + y * p + C * q, a[5] = v * o + z * p + D * q, a[6] = w * o + A * p + E * q, a[7] = x * o + B * p + F * q, a[8] = u * r + y * s + C * t, a[9] = v * r + z * s + D * t, a[10] = w * r + A * s + E * t, a[11] = x * r + B * s + F * t, a
                        },
                        rotateXYZ: function(a, b, c, d) {
                            var e = o.clone(a);
                            return o.$rotateXYZ(e, b, c, d)
                        },
                        $rotateXYZ: function(a, b, e, f) {
                            var g = a[0],
                                h = a[1],
                                i = a[2],
                                j = a[3],
                                k = a[4],
                                l = a[5],
                                m = a[6],
                                n = a[7],
                                o = a[8],
                                p = a[9],
                                q = a[10],
                                r = a[11],
                                s = d(b),
                                t = d(e),
                                u = d(f),
                                v = c(b),
                                w = c(e),
                                x = c(f),
                                y = t * u,
                                z = -s * x + v * w * u,
                                A = v * x + s * w * u,
                                B = t * x,
                                C = s * u + v * w * x,
                                D = -v * u + s * w * x,
                                E = -w,
                                F = v * t,
                                G = s * t;
                            return a[0] = g * y + k * B + o * E, a[1] = h * y + l * B + p * E, a[2] = i * y + m * B + q * E, a[3] = j * y + n * B + r * E, a[4] = g * z + k * C + o * F, a[5] = h * z + l * C + p * F, a[6] = i * z + m * C + q * F, a[7] = j * z + n * C + r * F, a[8] = g * A + k * D + o * G, a[9] = h * A + l * D + p * G, a[10] = i * A + m * D + q * G, a[11] = j * A + n * D + r * G, a
                        },
                        translate: function(a, b, c, d) {
                            var e = o.clone(a);
                            return o.$translate(e, b, c, d)
                        },
                        $translate: function(a, b, c, d) {
                            return a[12] = a[0] * b + a[4] * c + a[8] * d + a[12], a[13] = a[1] * b + a[5] * c + a[9] * d + a[13], a[14] = a[2] * b + a[6] * c + a[10] * d + a[14], a[15] = a[3] * b + a[7] * c + a[11] * d + a[15], a
                        },
                        scale: function(a, b, c, d) {
                            var e = o.clone(a);
                            return o.$scale(e, b, c, d)
                        },
                        $scale: function(a, b, c, d) {
                            return a[0] *= b, a[1] *= b, a[2] *= b, a[3] *= b, a[4] *= c, a[5] *= c, a[6] *= c, a[7] *= c, a[8] *= d, a[9] *= d, a[10] *= d, a[11] *= d, a
                        },
                        invert: function(a) {
                            var b = o.clone(a);
                            return o.$invert(b)
                        },
                        $invert: function(a) {
                            var b = a[0],
                                c = a[1],
                                d = a[2],
                                e = a[3],
                                f = a[4],
                                g = a[5],
                                h = a[6],
                                i = a[7],
                                j = a[8],
                                k = a[9],
                                l = a[10],
                                m = a[11],
                                n = a[12],
                                o = a[13],
                                p = a[14],
                                q = a[15],
                                r = b * g - c * f,
                                s = b * h - d * f,
                                t = b * i - e * f,
                                u = c * h - d * g,
                                v = c * i - e * g,
                                w = d * i - e * h,
                                x = j * o - k * n,
                                y = j * p - l * n,
                                z = j * q - m * n,
                                A = k * p - l * o,
                                B = k * q - m * o,
                                C = l * q - m * p,
                                D = 1 / (r * C - s * B + t * A + u * z - v * y + w * x);
                            return a[0] = (+g * C - h * B + i * A) * D, a[1] = (-c * C + d * B - e * A) * D, a[2] = (+o * w - p * v + q * u) * D, a[3] = (-k * w + l * v - m * u) * D, a[4] = (-f * C + h * z - i * y) * D, a[5] = (+b * C - d * z + e * y) * D, a[6] = (-n * w + p * t - q * s) * D, a[7] = (+j * w - l * t + m * s) * D, a[8] = (+f * B - g * z + i * x) * D, a[9] = (-b * B + c * z - e * x) * D, a[10] = (+n * v - o * t + q * r) * D, a[11] = (-j * v + k * t - m * r) * D, a[12] = (-f * A + g * y - h * x) * D, a[13] = (+b * A - c * y + d * x) * D, a[14] = (-n * u + o * s - p * r) * D, a[15] = (+j * u - k * s + l * r) * D, a
                        },
                        lookAt: function(a, b, c, d) {
                            var e = k.sub(b, c);
                            e.$unit();
                            var f = k.cross(d, e);
                            f.$unit();
                            var g = k.cross(e, f);
                            return g.$unit(), o.set(a, f[0], f[1], f[2], -f.dot(b), g[0], g[1], g[2], -g.dot(b), e[0], e[1], e[2], -e.dot(b), 0, 0, 0, 1)
                        },
                        frustum: function(a, b, c, d, e, f, g) {
                            var h = c - b,
                                i = e - d,
                                j = g - f;
                            return a[0] = 2 * f / h, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0, a[5] = 2 * f / i, a[6] = 0, a[7] = 0, a[8] = (c + b) / h, a[9] = (e + d) / i, a[10] = -(g + f) / j, a[11] = -1, a[12] = 0, a[13] = 0, a[14] = -(g * f * 2) / j, a[15] = 0, a
                        },
                        perspective: function(a, b, c, d, g) {
                            var h = d * e(b * f / 360),
                                i = -h,
                                j = i * c,
                                k = h * c;
                            return o.frustum(a, j, k, i, h, d, g)
                        },
                        ortho: function(a, b, c, d, e, f, g) {
                            var h = (this.elements, c - b),
                                i = d - e,
                                j = g - f,
                                k = (c + b) / h,
                                l = (d + e) / i,
                                m = (g + f) / j;
                            return a[0] = 2 / h, a[4] = 0, a[8] = 0, a[12] = -k, a[1] = 0, a[5] = 2 / i, a[9] = 0, a[13] = -l, a[2] = 0, a[6] = 0, a[10] = -2 / j, a[14] = -m, a[3] = 0, a[7] = 0, a[11] = 0, a[15] = 1, a
                        },
                        toFloat32Array: function(a) {
                            var b = a.typedContainer;
                            return b ? (b[0] = a[0], b[1] = a[1], b[2] = a[2], b[3] = a[3], b[4] = a[4], b[5] = a[5], b[6] = a[6], b[7] = a[7], b[8] = a[8], b[9] = a[9], b[10] = a[10], b[11] = a[11], b[12] = a[12], b[13] = a[13], b[14] = a[14], b[15] = a[15], b) : a
                        }
                    }, m = o.prototype;
                    for (n in l) o[n] = l[n], m[n] = function(a) {
                        return function() {
                            var b = g.call(arguments);
                            return b.unshift(this), o[a].apply(o, b)
                        }
                    }(n);
                    var p = function(a, b, c, d) {
                        i.call(this, 4), this[0] = a || 0, this[1] = b || 0, this[2] = c || 0, this[3] = d || 0, this.typedContainer = new h(4)
                    };
                    p.create = function() {
                        return new h(4)
                    }, l = {
                        setQuat: function(a, b) {
                            return a[0] = b[0], a[1] = b[1], a[2] = b[2], a[3] = b[3], a
                        },
                        set: function(a, b, c, d, e) {
                            return a[0] = b || 0, a[1] = c || 0, a[2] = d || 0, a[3] = e || 0, a
                        },
                        clone: function(a) {
                            return a.$$family ? new p(a[0], a[1], a[2], a[3]) : p.setQuat(new h(4), a)
                        },
                        neg: function(a) {
                            return new p(-a[0], -a[1], -a[2], -a[3])
                        },
                        $neg: function(a) {
                            return a[0] = -a[0], a[1] = -a[1], a[2] = -a[2], a[3] = -a[3], a
                        },
                        add: function(a, b) {
                            return new p(a[0] + b[0], a[1] + b[1], a[2] + b[2], a[3] + b[3])
                        },
                        $add: function(a, b) {
                            return a[0] += b[0], a[1] += b[1], a[2] += b[2], a[3] += b[3], a
                        },
                        sub: function(a, b) {
                            return new p(a[0] - b[0], a[1] - b[1], a[2] - b[2], a[3] - b[3])
                        },
                        $sub: function(a, b) {
                            return a[0] -= b[0], a[1] -= b[1], a[2] -= b[2], a[3] -= b[3], a
                        },
                        scale: function(a, b) {
                            return new p(a[0] * b, a[1] * b, a[2] * b, a[3] * b)
                        },
                        $scale: function(a, b) {
                            return a[0] *= b, a[1] *= b, a[2] *= b, a[3] *= b, a
                        },
                        mulQuat: function(a, b) {
                            var c = a[0],
                                d = a[1],
                                e = a[2],
                                f = a[3],
                                g = b[0],
                                h = b[1],
                                i = b[2],
                                j = b[3];
                            return new p(f * g + c * j + d * i - e * h, f * h + d * j + e * g - c * i, f * i + e * j + c * h - d * g, f * j - c * g - d * h - e * i)
                        },
                        $mulQuat: function(a, b) {
                            var c = a[0],
                                d = a[1],
                                e = a[2],
                                f = a[3],
                                g = b[0],
                                h = b[1],
                                i = b[2],
                                j = b[3];
                            return a[0] = f * g + c * j + d * i - e * h, a[1] = f * h + d * j + e * g - c * i, a[2] = f * i + e * j + c * h - d * g, a[3] = f * j - c * g - d * h - e * i, a
                        },
                        divQuat: function(a, b) {
                            var c = a[0],
                                d = a[1],
                                e = a[2],
                                f = a[3],
                                g = b[0],
                                h = b[1],
                                i = b[2],
                                j = b[3],
                                k = 1 / (j * j + g * g + h * h + i * i);
                            return new p((c * j - f * g - d * i + e * h) * k, (c * i - f * h + d * j - e * g) * k, (d * g + e * j - f * i - c * h) * k, (f * j + c * g + d * h + e * i) * k)
                        },
                        $divQuat: function(a, b) {
                            var c = a[0],
                                d = a[1],
                                e = a[2],
                                f = a[3],
                                g = b[0],
                                h = b[1],
                                i = b[2],
                                j = b[3],
                                k = 1 / (j * j + g * g + h * h + i * i);
                            return a[0] = (c * j - f * g - d * i + e * h) * k, a[1] = (c * i - f * h + d * j - e * g) * k, a[2] = (d * g + e * j - f * i - c * h) * k, a[3] = (f * j + c * g + d * h + e * i) * k, a
                        },
                        invert: function(a) {
                            var b = a[0],
                                c = a[1],
                                d = a[2],
                                e = a[3],
                                f = 1 / (b * b + c * c + d * d + e * e);
                            return new p(-b * f, -c * f, -d * f, e * f)
                        },
                        $invert: function(a) {
                            var b = a[0],
                                c = a[1],
                                d = a[2],
                                e = a[3],
                                f = 1 / (b * b + c * c + d * d + e * e);
                            return a[0] = -b * f, a[1] = -c * f, a[2] = -d * f, a[3] = e * f, a
                        },
                        norm: function(a) {
                            var c = a[0],
                                d = a[1],
                                e = a[2],
                                f = a[3];
                            return b(c * c + d * d + e * e + f * f)
                        },
                        normSq: function(a) {
                            var b = a[0],
                                c = a[1],
                                d = a[2],
                                e = a[3];
                            return b * b + c * c + d * d + e * e
                        },
                        unit: function(a) {
                            return p.scale(a, 1 / p.norm(a))
                        },
                        $unit: function(a) {
                            return p.$scale(a, 1 / p.norm(a))
                        },
                        conjugate: function(a) {
                            return new p(-a[0], -a[1], -a[2], a[3])
                        },
                        $conjugate: function(a) {
                            return a[0] = -a[0], a[1] = -a[1], a[2] = -a[2], a
                        }
                    }, m = p.prototype = {};
                    for (n in l) p[n] = l[n], m[n] = function(a) {
                        return function() {
                            var b = g.call(arguments);
                            return b.unshift(this), p[a].apply(p, b)
                        }
                    }(n);
                    k.fromQuat = function(a) {
                        return new k(a[0], a[1], a[2])
                    }, p.fromVec3 = function(a, b) {
                        return new p(a[0], a[1], a[2], b || 0)
                    }, p.fromMat4 = function(a) {
                        var c, d, e;
                        a[0] > a[5] && a[0] > a[10] ? (c = 0, d = 1, e = 2) : a[5] > a[0] && a[5] > a[10] ? (c = 1, d = 2, e = 0) : (c = 2, d = 0, e = 1);
                        var f = b(1 + a[5 * c] - a[5 * d] - a[5 * e]),
                            g = new p;
                        return g[c] = .5 * f, g[d] = .5 * (a["n" + d + c] + a["n" + c + d]) / f, g[e] = .5 * (a["n" + c + e] + a["n" + e + c]) / f, g[3] = .5 * (a["n" + d + e] - a["n" + e + d]) / f, g
                    }, p.fromXRotation = function(a) {
                        return new p(c(a / 2), 0, 0, d(a / 2))
                    }, p.fromYRotation = function(a) {
                        return new p(0, c(a / 2), 0, d(a / 2))
                    }, p.fromZRotation = function(a) {
                        return new p(0, 0, c(a / 2), d(a / 2))
                    }, p.fromAxisRotation = function(a, e) {
                        var f = a[0],
                            g = a[1],
                            h = a[2],
                            i = 1 / b(f * f + g * g + h * h),
                            j = c(e / 2),
                            k = d(e / 2);
                        return new p(j * f * i, j * g * i, j * h * i, k)
                    }, o.fromQuat = function(a) {
                        var b = a[3],
                            c = a[0],
                            d = a[1],
                            e = a[2];
                        return new o(b * b + c * c - d * d - e * e, 2 * c * d - 2 * b * e, 2 * c * e + 2 * b * d, 0, 2 * c * d + 2 * b * e, b * b - c * c + d * d - e * e, 2 * d * e - 2 * b * c, 0, 2 * c * e - 2 * b * d, 2 * d * e + 2 * b * c, b * b - c * c - d * d + e * e, 0, 0, 0, 0, 1)
                    }, PhiloGL.Vec3 = k, PhiloGL.Mat4 = o, PhiloGL.Quat = p
                }(),
                function() {
                    function b(a) {
                        return a !== !0 ? a : !1
                    }

                    function c(a) {
                        var b = g.Keys;
                        for (var c in b)
                            if (b[c] == a) return c
                    }
                    var d = function(a) {
                            var b = a.getBoundingClientRect();
                            return {
                                x: b.left,
                                y: b.top,
                                bbox: b
                            }
                        },
                        e = {
                            get: function(a, b) {
                                return b = b || window, a || b.event
                            },
                            getWheel: function(a) {
                                return a.wheelDelta ? a.wheelDelta / 120 : -(a.detail || 0) / 3
                            },
                            getKey: function(a) {
                                var b = a.which || a.keyCode,
                                    d = c(b),
                                    e = b - 111;
                                return e > 0 && 13 > e && (d = "f" + e), d = d || String.fromCharCode(b).toLowerCase(), {
                                    code: b,
                                    key: d,
                                    shift: a.shiftKey,
                                    control: a.ctrlKey,
                                    alt: a.altKey,
                                    meta: a.metaKey
                                }
                            },
                            isRightClick: function(a) {
                                return 3 == a.which || 2 == a.button
                            },
                            getPos: function(a, b) {
                                b = b || window, a = a || b.event;
                                var c, d = b.document;
                                if (d = d.documentElement || d.body, a.touches && a.touches.length) {
                                    c = [];
                                    for (var e, f = 0, g = a.touches.length; g > f; ++f) e = a.touches[f], c.push({
                                        x: e.pageX || e.clientX + d.scrollLeft,
                                        y: e.pageY || e.clientY + d.scrollTop
                                    });
                                    return c
                                }
                                var h = {
                                    x: a.pageX || a.clientX + d.scrollLeft,
                                    y: a.pageY || a.clientY + d.scrollTop
                                };
                                return [h]
                            },
                            stop: function(a) {
                                a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0, a.preventDefault ? a.preventDefault() : a.returnValue = !1
                            }
                        },
                        f = function(a, b) {
                            var c = a.canvas;
                            this.scene = a.scene, this.domElem = c, this.pos = d(c), this.opt = this.callbacks = b, this.size = {
                                width: c.width || c.offsetWidth,
                                height: c.height || c.offsetHeight
                            }, this.attachEvents()
                        };
                    f.prototype = {
                        hovered: !1,
                        pressed: !1,
                        touched: !1,
                        touchedLastPosition: {
                            x: 0,
                            y: 0
                        },
                        touchMoved: !1,
                        moved: !1,
                        attachEvents: function() {
                            var a = this.domElem,
                                b = this.opt,
                                c = this;
                            if (b.disableContextMenu && (a.oncontextmenu = function() {
                                    return !1
                                }), b.enableMouse) {
                                ["mouseup", "mousedown", "mousemove", "mouseover", "mouseout"].forEach(function(b) {
                                    a.addEventListener(b, function(a, d) {
                                        c[b](c.eventInfo(b, a, d))
                                    }, !1)
                                });
                                var d = "";
                                d = document.getBoxObjectFor || null != window.mozInnerScreenX ? "DOMMouseScroll" : "mousewheel", a.addEventListener(d, function(a, b) {
                                    c.mousewheel(c.eventInfo("mousewheel", a, b))
                                }, !1)
                            }
                            b.enableTouch && ["touchstart", "touchmove", "touchend"].forEach(function(b) {
                                a.addEventListener(b, function(a, d) {
                                    c[b](c.eventInfo(b, a, d))
                                }, !1)
                            }), b.enableKeyboard && ["keydown", "keyup"].forEach(function(a) {
                                document.addEventListener(a, function(b, d) {
                                    c[a](c.eventInfo(a, b, d))
                                }, !1)
                            })
                        },
                        eventInfo: function(b, c, f) {
                            for (var g, h, i = this.domElem, j = this.scene, k = this.opt, l = this.getSize(), m = k.relative, n = k.centerOrigin, o = k.cachePosition && this.pos || d(i), p = e.get(c, f), q = e.getPos(c, f), r = {
                                    x: q[0].x,
                                    y: q[0].y
                                }, s = {}, t = 0, u = q.length; u > t; ++t) g = q[t].x, h = q[t].y, m && (g -= o.x, h -= o.y, n && (g -= l.width / 2, h -= l.height / 2, h *= -1)), q[t].x = g, q[t].y = h;
                            switch (b) {
                                case "mousewheel":
                                    s.wheel = e.getWheel(p);
                                    break;
                                case "keydown":
                                case "keyup":
                                    a.extend(s, e.getKey(p));
                                    break;
                                case "mouseup":
                                    s.isRightClick = e.isRightClick(p)
                            }
                            var v;
                            return a.extend(s, {
                                x: q[0].x,
                                y: q[0].y,
                                posArray: q,
                                cache: !1,
                                stop: function() {
                                    e.stop(p)
                                },
                                getTarget: function() {
                                    return v ? v : v = k.picking && j.pick(r.x - o.x, r.y - o.y) || !0
                                }
                            }), s.event = p, s
                        },
                        getSize: function() {
                            if (this.cacheSize) return this.size;
                            var a = this.domElem;
                            return {
                                width: a.width || a.offsetWidth,
                                height: a.height || a.offsetHeight
                            }
                        },
                        mouseup: function(a) {
                            this.moved || (a.isRightClick ? this.callbacks.onRightClick(a, this.hovered) : this.callbacks.onClick(a, b(this.pressed))), this.pressed && (this.moved ? this.callbacks.onDragEnd(a, b(this.pressed)) : this.callbacks.onDragCancel(a, b(this.pressed)), this.pressed = this.moved = !1)
                        },
                        mouseout: function(a) {
                            for (var b = a.relatedTarget, c = this.domElem; b && b.parentNode;) {
                                if (c == b.parentNode) return;
                                b = b.parentNode
                            }
                            this.hovered && (this.callbacks.onMouseLeave(a, this.hovered), this.hovered = !1), this.pressed && this.moved && (this.callbacks.onDragEnd(a), this.pressed = this.moved = !1)
                        },
                        mouseover: function() {},
                        mousemove: function(a) {
                            if (this.pressed) return this.moved = !0, void this.callbacks.onDragMove(a, b(this.pressed));
                            if (this.hovered) {
                                var c = b(a.getTarget());
                                c && c.hash == this.hash ? this.callbacks.onMouseMove(a, this.hovered) : (this.callbacks.onMouseLeave(a, this.hovered), this.hovered = c, this.hash = c, c && (this.hash = c.hash, this.callbacks.onMouseEnter(a, this.hovered)))
                            } else this.hovered = b(a.getTarget()), this.hash = this.hovered, this.hovered && (this.hash = this.hovered.hash, this.callbacks.onMouseEnter(a, this.hovered));
                            this.opt.picking || this.callbacks.onMouseMove(a)
                        },
                        mousewheel: function(a) {
                            this.callbacks.onMouseWheel(a)
                        },
                        mousedown: function(a) {
                            this.pressed = a.getTarget(), this.callbacks.onDragStart(a, b(this.pressed))
                        },
                        touchstart: function(a) {
                            this.touched = a.getTarget(), this.touchedLastPosition = {
                                x: a.x,
                                y: a.y
                            }, this.callbacks.onTouchStart(a, b(this.touched))
                        },
                        touchmove: function(a) {
                            this.touched && (this.touchMoved = !0, this.callbacks.onTouchMove(a, b(this.touched)))
                        },
                        touchend: function(a) {
                            this.touched && (this.touchMoved ? this.callbacks.onTouchEnd(a, b(this.touched)) : (a.x = isNaN(a.x) ? this.touchedLastPosition.x : a.x, a.y = isNaN(a.y) ? this.touchedLastPosition.y : a.y, this.callbacks.onTap(a, b(this.touched)), this.callbacks.onTouchCancel(a, b(this.touched))), this.touched = this.touchMoved = !1)
                        },
                        keydown: function(a) {
                            this.callbacks.onKeyDown(a)
                        },
                        keyup: function(a) {
                            this.callbacks.onKeyUp(a)
                        }
                    };
                    var g = {};
                    g.create = function(b, c) {
                        c = a.extend({
                            cachePosition: !0,
                            cacheSize: !0,
                            relative: !0,
                            centerOrigin: !0,
                            disableContextMenu: !0,
                            bind: !1,
                            picking: !1,
                            lazyPicking: !1,
                            enableTouch: !0,
                            enableMouse: !0,
                            enableKeyboard: !0,
                            onClick: a.empty,
                            onRightClick: a.empty,
                            onDragStart: a.empty,
                            onDragMove: a.empty,
                            onDragEnd: a.empty,
                            onDragCancel: a.empty,
                            onTouchStart: a.empty,
                            onTouchMove: a.empty,
                            onTouchEnd: a.empty,
                            onTouchCancel: a.empty,
                            onTap: a.empty,
                            onMouseMove: a.empty,
                            onMouseEnter: a.empty,
                            onMouseLeave: a.empty,
                            onMouseWheel: a.empty,
                            onKeyDown: a.empty,
                            onKeyUp: a.empty
                        }, c || {});
                        var d = c.bind;
                        if (d)
                            for (var e in c) e.match(/^on[a-zA-Z0-9]+$/) && ! function(a, b) {
                                c[a] = function() {
                                    return b.apply(d, Array.prototype.slice.call(arguments))
                                }
                            }(e, c[e]);
                        new f(b, c), b.events = c
                    }, g.Keys = {
                        enter: 13,
                        up: 38,
                        down: 40,
                        left: 37,
                        right: 39,
                        esc: 27,
                        space: 32,
                        backspace: 8,
                        tab: 9,
                        "delete": 46
                    }, PhiloGL.Events = g
                }(),
                function() {
                    function d(b, c) {
                        var d;
                        return d = 2 == b.length ? {
                            vs: b[0],
                            fs: b[1]
                        } : b[0] || {}, a.merge(c || {}, d)
                    }
                    var e = function(a, b, c) {
                            var d = a.createShader(c);
                            if (null == d) throw "Error creating the shader with shader type: " + c;
                            a.shaderSource(d, b), a.compileShader(d);
                            var e = a.getShaderParameter(d, a.COMPILE_STATUS);
                            if (!e) {
                                var f = a.getShaderInfoLog(d);
                                throw a.deleteShader(d), "Error while compiling the shader " + f
                            }
                            return d
                        },
                        f = function(a, b, c) {
                            var d = a.createProgram();
                            return a.attachShader(d, e(a, b, a.VERTEX_SHADER)), a.attachShader(d, e(a, c, a.FRAGMENT_SHADER)), i(a, d), d
                        },
                        g = function(a) {
                            var b = a.lastIndexOf("/");
                            return "/" == b ? "./" : a.substr(0, b + 1)
                        },
                        h = function(a, c, d, e, f) {
                            f = f || {};
                            var i;
                            if (i = c.match(/#include "(.*?)"/)) {
                                var j = PhiloGL.IO.XHR,
                                    k = g(a) + i[1];
                                return f[k] && e("Recursive include"), new j({
                                    url: k,
                                    noCache: !0,
                                    onError: function(a) {
                                        e("Load included file `" + k + "` failed: Code " + a)
                                    },
                                    onSuccess: function(a) {
                                        return f[k] = !0, h(k, a, function(a) {
                                            return delete f[k], c = c.replace(/#include ".*?"/, a), c = c.replace(/\sHAS_EXTENSION\s*\(\s*([A-Za-z_\-0-9]+)\s*\)/g, function(a, c) {
                                                return b.getExtension(c) ? " 1 " : " 0 "
                                            }), h(k, c, d, e, f)
                                        }, e, f)
                                    }
                                }).send(), null
                            }
                            return d(c)
                        },
                        i = function(a, b) {
                            a.linkProgram(b);
                            var c = a.getProgramParameter(b, a.LINK_STATUS);
                            if (!c) throw "Error linking the shader: " + a.getProgramInfoLog(b);
                            return !0
                        },
                        j = function(a, c, d) {
                            var e, f, g = c.name,
                                h = b.getUniformLocation(a, g),
                                i = c.type,
                                j = !1,
                                k = !0;
                            if (c.size > 1 && d) switch (i) {
                                case b.FLOAT:
                                    e = b.uniform1fv, f = Float32Array, k = !1;
                                    break;
                                case b.INT:
                                case b.BOOL:
                                case b.SAMPLER_2D:
                                case b.SAMPLER_CUBE:
                                    e = b.uniform1iv, f = Uint16Array, k = !1
                            }
                            if (k) switch (i) {
                                case b.FLOAT:
                                    e = b.uniform1f;
                                    break;
                                case b.FLOAT_VEC2:
                                    e = b.uniform2fv, f = d ? Float32Array : new Float32Array(2);
                                    break;
                                case b.FLOAT_VEC3:
                                    e = b.uniform3fv, f = d ? Float32Array : new Float32Array(3);
                                    break;
                                case b.FLOAT_VEC4:
                                    e = b.uniform4fv, f = d ? Float32Array : new Float32Array(4);
                                    break;
                                case b.INT:
                                case b.BOOL:
                                case b.SAMPLER_2D:
                                case b.SAMPLER_CUBE:
                                    e = b.uniform1i;
                                    break;
                                case b.INT_VEC2:
                                case b.BOOL_VEC2:
                                    e = b.uniform2iv, f = d ? Uint16Array : new Uint16Array(2);
                                    break;
                                case b.INT_VEC3:
                                case b.BOOL_VEC3:
                                    e = b.uniform3iv, f = d ? Uint16Array : new Uint16Array(3);
                                    break;
                                case b.INT_VEC4:
                                case b.BOOL_VEC4:
                                    e = b.uniform4iv, f = d ? Uint16Array : new Uint16Array(4);
                                    break;
                                case b.FLOAT_MAT2:
                                    j = !0, e = b.uniformMatrix2fv;
                                    break;
                                case b.FLOAT_MAT3:
                                    j = !0, e = b.uniformMatrix3fv;
                                    break;
                                case b.FLOAT_MAT4:
                                    j = !0, e = b.uniformMatrix4fv
                            }
                            return e = e.bind(b), d && f ? function(a) {
                                e(h, new f(a))
                            } : j ? function(a) {
                                e(h, !1, a.toFloat32Array())
                            } : f ? function(a) {
                                f.set(a.toFloat32Array ? a.toFloat32Array() : a), e(h, f)
                            } : function(a) {
                                e(h, a)
                            }
                        },
                        k = function(a, c) {
                            var d = f(b, a, c);
                            if (!d) return !1;
                            for (var e, g, h, i = {}, k = {}, l = {}, m = b.getProgramParameter(d, b.ACTIVE_ATTRIBUTES), n = 0; m > n; n++) e = b.getActiveAttrib(d, n), g = e.name, h = b.getAttribLocation(d, e.name), i[g] = h;
                            for (m = b.getProgramParameter(d, b.ACTIVE_UNIFORMS), n = 0; m > n; n++) e = b.getActiveUniform(d, n), g = e.name, g = "]" == g[g.length - 1] ? g.substr(0, g.length - 3) : g, l[g] = j(d, e, e.name != g);
                            this.program = d, this.attributes = i, this.attributeEnabled = k, this.uniforms = l
                        };
                    k.prototype = {
                        $$family: "program",
                        setUniform: function(a, b) {
                            return this.uniforms[a] && this.uniforms[a](b), this
                        },
                        setUniforms: function(a) {
                            for (var b in a) this.setUniform(b, a[b]);
                            return this
                        }
                    }, ["setBuffer", "setBuffers", "use"].forEach(function(a) {
                        k.prototype[a] = function() {
                            var b = Array.prototype.slice.call(arguments);
                            return b.unshift(this), c[a].apply(c, b), this
                        }
                    }), ["setFrameBuffer", "setFrameBuffers", "setRenderBuffer", "setRenderBuffers", "setTexture", "setTextures"].forEach(function(a) {
                        k.prototype[a] = function() {
                            return c[a].apply(c, arguments), this
                        }
                    }), k.fromShaderIds = function() {
                        var b = d(arguments),
                            c = a(b.vs),
                            e = a(b.fs);
                        return h(b.path, c.innerHTML, function(a) {
                            return h(b.path, e.innerHTML, function(c) {
                                b.onSuccess(new k(a, c), b)
                            })
                        })
                    }, k.fromShaderSources = function() {
                        var a = d(arguments, {
                            path: "./"
                        });
                        return h(a.path, a.vs, function(b) {
                            return h(a.path, a.fs, function(c) {
                                try {
                                    var d = new k(b, c);
                                    if (!a.onSuccess) return d;
                                    a.onSuccess(d, a)
                                } catch (e) {
                                    if (!a.onError) throw e;
                                    a.onError(e, a)
                                }
                            })
                        })
                    }, k.fromDefaultShaders = function(a) {
                        a = a || {};
                        var b = a.vs || "Default",
                            c = a.fs || "Default",
                            d = PhiloGL.Shaders;
                        return a.vs = d.Vertex[b], a.fs = d.Fragment[c], PhiloGL.Program.fromShaderSources(a)
                    }, k.fromShaderURIs = function(b) {
                        b = a.merge({
                            path: "",
                            vs: "",
                            fs: "",
                            noCache: !1,
                            onSuccess: a.empty,
                            onError: a.empty
                        }, b || {});
                        var c = b.path + b.vs,
                            d = b.path + b.fs,
                            e = PhiloGL.IO.XHR;
                        new e.Group({
                            urls: [c, d],
                            noCache: b.noCache,
                            onError: function(a) {
                                b.onError(a)
                            },
                            onComplete: function(a) {
                                try {
                                    return h(c, a[0], function(c) {
                                        return h(d, a[1], function(a) {
                                            return b.vs = c, b.fs = a, k.fromShaderSources(b)
                                        }, b.onError)
                                    }, b.onError)
                                } catch (e) {
                                    b.onError(e, b)
                                }
                            }
                        }).send()
                    }, PhiloGL.Program = k
                }(),
                function() {
                    var b = {},
                        d = function(b) {
                            b = a.merge({
                                url: "http://philogljs.org/",
                                method: "GET",
                                async: !0,
                                noCache: !1,
                                sendAsBinary: !1,
                                responseType: !1,
                                onProgress: a.empty,
                                onSuccess: a.empty,
                                onError: a.empty,
                                onAbort: a.empty,
                                onComplete: a.empty
                            }, b || {}), this.opt = b, this.initXHR()
                        };
                    d.State = {}, ["UNINITIALIZED", "LOADING", "LOADED", "INTERACTIVE", "COMPLETED"].forEach(function(a, b) {
                        d.State[a] = b
                    }), d.prototype = {
                        initXHR: function() {
                            var a = this.req = new XMLHttpRequest,
                                b = this;
                            ["Progress", "Error", "Abort", "Load"].forEach(function(c) {
                                a.addEventListener ? a.addEventListener(c.toLowerCase(), function(a) {
                                    b["handle" + c](a)
                                }, !1) : a["on" + c.toLowerCase()] = function(a) {
                                    b["handle" + c](a)
                                }
                            })
                        },
                        send: function(b) {
                            var c = this.req,
                                e = this.opt,
                                f = e.async;
                            e.noCache && (e.url += (e.url.indexOf("?") >= 0 ? "&" : "?") + a.uid()), c.open(e.method, e.url, f), e.responseType && (c.responseType = e.responseType), f && (c.onreadystatechange = function() {
                                c.readyState == d.State.COMPLETED && (200 == c.status ? e.onSuccess(c.responseType ? c.response : c.responseText) : e.onError(c.status))
                            }), e.sendAsBinary ? c.sendAsBinary(b || e.body || null) : c.send(b || e.body || null), f || (200 == c.status ? e.onSuccess(c.responseType ? c.response : c.responseText) : e.onError(c.status))
                        },
                        setRequestHeader: function(a, b) {
                            return this.req.setRequestHeader(a, b), this
                        },
                        handleProgress: function(a) {
                            a.lengthComputable ? this.opt.onProgress(a, Math.round(a.loaded / a.total * 100)) : this.opt.onProgress(a, -1)
                        },
                        handleError: function(a) {
                            this.opt.onError(a)
                        },
                        handleAbort: function(a) {
                            this.opt.onAbort(a)
                        },
                        handleLoad: function(a) {
                            this.opt.onComplete(a)
                        }
                    }, d.Group = function(b) {
                        function c(a) {
                            return function(c) {
                                --g, b.onError(c, a), g || b.onComplete(h)
                            }
                        }

                        function e(a) {
                            return function(c) {
                                --g, h[a] = c, b.onSuccess(c, a), g || b.onComplete(h)
                            }
                        }
                        b = a.merge({
                            urls: [],
                            onError: a.empty,
                            onSuccess: a.empty,
                            onComplete: a.empty,
                            method: "GET",
                            async: !0,
                            noCache: !1,
                            sendAsBinary: !1,
                            responseType: !1
                        }, b || {});
                        var f = a.splat(b.urls),
                            g = f.length,
                            h = new Array(g),
                            i = f.map(function(a, f) {
                                return new d({
                                    url: a,
                                    method: b.method,
                                    async: b.async,
                                    noCache: b.noCache,
                                    sendAsBinary: b.sendAsBinary,
                                    responseType: b.responseType,
                                    body: b.body,
                                    onError: c(f),
                                    onSuccess: e(f)
                                })
                            });
                        this.reqs = i
                    }, d.Group.prototype = {
                        send: function() {
                            for (var a = 0, b = this.reqs, c = b.length; c > a; ++a) b[a].send()
                        }
                    };
                    var e = function(b) {
                        b = a.merge({
                            url: "http://philogljs.org/",
                            data: {},
                            noCache: !1,
                            onComplete: a.empty,
                            callbackKey: "callback"
                        }, b || {});
                        var c = e.counter++,
                            d = [];
                        for (var f in b.data) d.push(f + "=" + b.data[f]);
                        d = d.join("&"), b.noCache && (d += (d.indexOf("?") >= 0 ? "&" : "?") + a.uid());
                        var g = b.url + (b.url.indexOf("?") > -1 ? "&" : "?") + b.callbackKey + "=PhiloGL.IO.JSONP.requests.request_" + c + (d.length > 0 ? "&" + d : ""),
                            h = document.createElement("script");
                        h.type = "text/javascript", h.src = g, e.requests["request_" + c] = function(a) {
                            b.onComplete(a), h.parentNode && h.parentNode.removeChild(h), h.clearAttributes && h.clearAttributes()
                        }, document.getElementsByTagName("head")[0].appendChild(h)
                    };
                    e.counter = 0, e.requests = {};
                    var f = function(b) {
                            b = a.merge({
                                src: [],
                                noCache: !1,
                                onProgress: a.empty,
                                onComplete: a.empty
                            }, b || {});
                            var c = 0,
                                d = b.src.length,
                                e = function() {
                                    b.onProgress(Math.round(++c / d * 100)), c == d && b.onComplete(j)
                                },
                                f = function() {
                                    ++c == d && b.onComplete(j)
                                },
                                g = b.noCache,
                                h = a.uid(),
                                i = function(a) {
                                    return (a.indexOf("?") >= 0 ? "&" : "?") + h
                                },
                                j = b.src.map(function(a, b) {
                                    var c = new Image;
                                    return c.index = b, c.onload = e, c.onerror = f, c.src = a + (g ? i(a) : ""), c
                                });
                            return j
                        },
                        g = function(b) {
                            b = a.merge({
                                src: [],
                                noCache: !1,
                                onComplete: a.empty
                            }, b || {}), f({
                                src: b.src,
                                noCache: b.noCache,
                                onComplete: function(d) {
                                    var e = {};
                                    d.forEach(function(c, d) {
                                        e[b.id && b.id[d] || b.src && b.src[d]] = a.merge({
                                            data: {
                                                value: c
                                            }
                                        }, b)
                                    }), c.setTextures(e), b.onComplete()
                                }
                            })
                        };
                    b.XHR = d, b.JSONP = e, b.Images = f, b.Textures = g, PhiloGL.IO = b
                }(),
                function() {
                    var a = PhiloGL.Vec3,
                        b = PhiloGL.Mat4,
                        c = function(c, d, e, f, g) {
                            g = g || {};
                            var h = g.position,
                                i = g.target,
                                j = g.up;
                            if (this.type = g.type ? g.type : "perspective", this.fov = c, this.near = e, this.far = f, this.aspect = d, this.position = h && new a(h.x, h.y, h.z) || new a, this.target = i && new a(i.x, i.y, i.z) || new a, this.up = j && new a(j.x, j.y, j.z) || new a(0, 1, 0), "perspective" == this.type) this.projection = (new b).perspective(c, d, e, f);
                            else {
                                var k = e * Math.tan(c * Math.PI / 360),
                                    l = -k,
                                    m = l * d,
                                    n = k * d;
                                this.projection = (new b).ortho(m, n, l, k, e, f)
                            }
                            this.view = new b
                        };
                    c.prototype = {
                        update: function() {
                            if ("perspective" == this.type) this.projection = (new b).perspective(this.fov, this.aspect, this.near, this.far);
                            else {
                                var a = this.near * Math.tan(this.fov * Math.PI / 360),
                                    c = -a,
                                    d = c * this.aspect,
                                    e = a * this.aspect;
                                this.projection = (new b).ortho(d, e, c, a, this.near, this.far)
                            }
                            this.view.lookAt(this.position, this.target, this.up)
                        },
                        setStatus: function(a) {
                            var b = this,
                                c = b.position,
                                d = b.view,
                                e = b.projection,
                                f = d.mulMat4(e),
                                g = f.invert();
                            a.setUniforms({
                                cameraPosition: [c.x, c.y, c.z],
                                projectionMatrix: e,
                                viewMatrix: d,
                                viewProjectionMatrix: f,
                                viewInverseMatrix: d.invert(),
                                viewProjectionInverseMatrix: g
                            })
                        }
                    }, PhiloGL.Camera = c
                }(),
                function() {
                    function d(a, b) {
                        if (a && a.length < b) {
                            for (var c, d = a[0], e = a[1], f = a[2], g = a[3], h = [d, e, f, g], i = b / a.length; --i;) c = 4 * i, h[c] = d, h[c + 1] = e, h[c + 2] = f, h[c + 3] = g;
                            return new Float32Array(h)
                        }
                        return a
                    }
                    var e = PhiloGL.Vec3,
                        f = PhiloGL.Mat4,
                        g = Math.cos,
                        h = Math.sin,
                        i = Math.PI,
                        j = (Math.max, Array.prototype.slice),
                        k = {
                            attributeMap: {
                                position: "vertices",
                                normal: "normals",
                                pickingColor: "pickingColors",
                                colors: "color"
                            }
                        };
                    k.Model = function(b) {
                        b = b || {}, this.id = b.id || a.uid(), this.pickable = !!b.pickable, this.pick = b.pick || function() {
                            return !1
                        }, this.vertices = b.vertices, this.normals = b.normals, this.textures = b.textures && a.splat(b.textures), this.colors = b.colors, this.indices = b.indices, this.shininess = b.shininess || 0, this.reflection = b.reflection || 0, this.refraction = b.refraction || 0, b.pickingColors && (this.pickingColors = b.pickingColors), b.texCoords && (this.texCoords = b.texCoords), this.uniforms = b.uniforms || {}, this.attributes = b.attributes || {}, this.render = b.render, this.drawType = b.hasOwnProperty("drawType") ? b.drawType : "TRIANGLES", this.display = "display" in b ? b.display : !0, this.onBeforeRender = b.onBeforeRender || a.empty, this.onAfterRender = b.onAfterRender || a.empty, b.program && (this.program = b.program), this.position = new e, this.rotation = new e, this.scale = new e(1, 1, 1), this.matrix = new f, b.computeCentroids && this.computeCentroids(), b.computeNormals && this.computeNormals()
                    };
                    var l = {
                        setUniforms: function(a) {
                            a.setUniforms(this.uniforms)
                        },
                        setAttributes: function(a) {
                            var b = this.attributes;
                            for (var c in b) {
                                var d = b[c],
                                    e = this.id + "-" + c;
                                Object.keys(d).length ? (d.attribute = c, a.setBuffer(e, d), delete d.value) : a.setBuffer(e, !0)
                            }
                        },
                        setVertices: function(a) {
                            this.$vertices && (this.dynamic ? a.setBuffer("position-" + this.id, {
                                attribute: "position",
                                value: this.$vertices,
                                size: 3
                            }) : a.setBuffer("position-" + this.id))
                        },
                        setNormals: function(a) {
                            this.$normals && (this.dynamic ? a.setBuffer("normal-" + this.id, {
                                attribute: "normal",
                                value: this.$normals,
                                size: 3
                            }) : a.setBuffer("normal-" + this.id))
                        },
                        setIndices: function(a) {
                            this.$indices && (this.dynamic ? a.setBuffer("indices-" + this.id, {
                                bufferType: b.ELEMENT_ARRAY_BUFFER,
                                drawType: b.STATIC_DRAW,
                                value: this.$indices,
                                size: 1
                            }) : a.setBuffer("indices-" + this.id))
                        },
                        setPickingColors: function(a) {
                            this.$pickingColors && (this.dynamic ? a.setBuffer("pickingColor-" + this.id, {
                                attribute: "pickingColor",
                                value: this.$pickingColors,
                                size: 4
                            }) : a.setBuffer("pickingColor-" + this.id))
                        },
                        setColors: function(a) {
                            this.$colors && (this.dynamic ? a.setBuffer("color-" + this.id, {
                                attribute: "color",
                                value: this.$colors,
                                size: 4
                            }) : a.setBuffer("color-" + this.id))
                        },
                        setTexCoords: function(b) {
                            if (this.$texCoords) {
                                var c, d, e, f, g = this.id;
                                if (this.dynamic)
                                    if ("object" == a.type(this.$texCoords))
                                        for (c = 0, d = this.textures, e = d.length; e > c; c++) f = d[c], b.setBuffer("texCoord-" + c + "-" + g, {
                                            attribute: "texCoord" + (c + 1),
                                            value: this.$texCoords[f],
                                            size: 2
                                        });
                                    else b.setBuffer("texCoord-" + g, {
                                        attribute: "texCoord1",
                                        value: this.$texCoords,
                                        size: 2
                                    });
                                else if ("object" == a.type(this.$texCoords))
                                    for (c = 0, d = this.textures, e = d.length; e > c; c++) b.setBuffer("texCoord-" + c + "-" + g);
                                else b.setBuffer("texCoord-" + g)
                            }
                        },
                        setTextures: function(d) {
                            this.textures = this.textures ? a.splat(this.textures) : [];
                            for (var e = 0, f = 0, g = 0, h = this.textures, i = h.length, j = PhiloGL.Scene.MAX_TEXTURES; j > g; g++)
                                if (i > g) {
                                    var k = c.textureMemo[h[g]].isCube;
                                    k ? (d.setUniform("hasTextureCube" + (g + 1), !0), d.setTexture(h[g], b["TEXTURE" + g]), d.setUniform("samplerCube" + (f + 1), g), f++) : (d.setUniform("hasTexture" + (g + 1), !0), d.setTexture(h[g], b["TEXTURE" + g]), d.setUniform("sampler" + (e + 1), g), e++)
                                } else d.setUniform("hasTextureCube" + (g + 1), !1), d.setUniform("hasTexture" + (g + 1), !1), d.setUniform("sampler" + ++e, g), d.setUniform("samplerCube" + ++f, g)
                        },
                        setState: function(a) {
                            this.setUniforms(a), this.setAttributes(a), this.setVertices(a), this.setColors(a), this.setPickingColors(a), this.setNormals(a), this.setTextures(a), this.setTexCoords(a), this.setIndices(a)
                        },
                        unsetState: function(a) {
                            var c = a.attributes;
                            b.bindBuffer(b.ARRAY_BUFFER, null), b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, null);
                            for (var d in c) b.disableVertexAttribArray(c[d])
                        }
                    };
                    k.Model.prototype = Object.create(null, {
                        hash: {
                            get: function() {
                                return this.id + " " + this.$pickingIndex
                            }
                        },
                        vertices: {
                            set: function(a) {
                                if (!a) return delete this.$vertices, void delete this.$verticesLength;
                                var b = a.length;
                                a.BYTES_PER_ELEMENT ? this.$vertices = a : this.$verticesLength == b ? this.$vertices.set(a) : this.$vertices = new Float32Array(a), this.$verticesLength = b
                            },
                            get: function() {
                                return this.$vertices
                            }
                        },
                        normals: {
                            set: function(a) {
                                if (!a) return delete this.$normals, void delete this.$normalsLength;
                                var b = a.length;
                                a.BYTES_PER_ELEMENT ? this.$normals = a : this.$normalsLength == b ? this.$normals.set(a) : this.$normals = new Float32Array(a), this.$normalsLength = b
                            },
                            get: function() {
                                return this.$normals
                            }
                        },
                        colors: {
                            set: function(a) {
                                if (!a) return delete this.$colors, void delete this.$colorsLength;
                                var b = a.length;
                                a.BYTES_PER_ELEMENT ? this.$colors = a : this.$colorsLength == b ? this.$colors.set(a) : this.$colors = new Float32Array(a), this.$vertices && this.$verticesLength / 3 * 4 != b && (this.$colors = d(j.call(this.$colors), this.$verticesLength / 3 * 4)), this.$colorsLength = this.$colors.length
                            },
                            get: function() {
                                return this.$colors
                            }
                        },
                        pickingColors: {
                            set: function(a) {
                                if (!a) return delete this.$pickingColors, void delete this.$pickingColorsLength;
                                var b = a.length;
                                a.BYTES_PER_ELEMENT ? this.$pickingColors = a : this.$pickingColorsLength == b ? this.$pickingColors.set(a) : this.$pickingColors = new Float32Array(a), this.$vertices && this.$verticesLength / 3 * 4 != b && (this.$pickingColors = d(j.call(this.$pickingColors), this.$verticesLength / 3 * 4)), this.$pickingColorsLength = this.$pickingColors.length
                            },
                            get: function() {
                                return this.$pickingColors
                            }
                        },
                        texCoords: {
                            set: function(b) {
                                if (!b) return delete this.$texCoords, void delete this.$texCoordsLength;
                                if ("object" == a.type(b)) {
                                    var c = {};
                                    for (var d in b) {
                                        var e = b[d];
                                        c[d] = e.BYTES_PER_ELEMENT ? e : new Float32Array(e)
                                    }
                                    this.$texCoords = c
                                } else {
                                    var f = b.length;
                                    b.BYTES_PER_ELEMENT ? this.$texCoords = b : this.$texCoordsLength == f ? this.$texCoords.set(b) : this.$texCoords = new Float32Array(b), this.$texCoordsLength = f
                                }
                            },
                            get: function() {
                                return this.$texCoords
                            }
                        },
                        indices: {
                            set: function(a) {
                                if (!a) return delete this.$indices, void delete this.$indicesLength;
                                var b = a.length;
                                a.BYTES_PER_ELEMENT ? this.$indices = a : this.$indicesLength == b ? this.$indices.set(a) : this.$indices = new Uint16Array(a), this.$indicesLength = b
                            },
                            get: function() {
                                return this.$indices
                            }
                        }
                    }), a.extend(k.Model.prototype, {
                        $$family: "model",
                        update: function() {
                            var a = this.matrix,
                                b = this.position,
                                c = this.rotation,
                                d = this.scale;
                            a.id(), a.$translate(b.x, b.y, b.z), a.$rotateXYZ(c.x, c.y, c.z), a.$scale(d.x, d.y, d.z)
                        },
                        computeCentroids: function() {
                            var a = this.faces,
                                b = this.vertices,
                                c = [];
                            a.forEach(function(a) {
                                var d = [0, 0, 0],
                                    e = 0;
                                a.forEach(function(a) {
                                    var c = b[a];
                                    d[0] += c[0], d[1] += c[1], d[2] += c[2], e++
                                }), d[0] /= e, d[1] /= e, d[2] /= e, c.push(d)
                            }), this.centroids = c
                        },
                        computeNormals: function() {
                            var a = this.faces,
                                b = this.vertices,
                                c = [];
                            a.forEach(function(a) {
                                var d = b[a[0]],
                                    f = b[a[1]],
                                    g = b[a[2]],
                                    h = {
                                        x: g[0] - f[0],
                                        y: g[1] - f[1],
                                        z: g[1] - f[2]
                                    },
                                    i = {
                                        x: d[0] - f[0],
                                        y: d[1] - f[1],
                                        z: d[2] - f[2]
                                    };
                                e.$cross(i, h), e.norm(i) > 1e-6 && e.unit(i), c.push([i.x, i.y, i.z])
                            }), this.normals = c
                        }
                    }), a.extend(k.Model.prototype, l), k.Cube = function(b) {
                        k.Model.call(this, a.extend({
                            vertices: [-1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, 1, -1, 1, 1, -1, 1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, 1, -1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, -1, -1, -1, -1, -1, 1, -1, 1, 1, -1, 1, -1],
                            texCoords: [0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1],
                            normals: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0],
                            indices: [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23]
                        }, b || {}))
                    }, k.Cube.prototype = Object.create(k.Model.prototype), k.Sphere = function(b) {
                        var c = b.nlat || 10,
                            d = b.nlong || 10,
                            e = b.radius || 1,
                            f = 0,
                            j = i,
                            l = j - f,
                            m = 0,
                            n = 2 * i,
                            o = n - m,
                            p = (c + 1) * (d + 1),
                            q = new Float32Array(3 * p),
                            r = new Float32Array(3 * p),
                            s = new Float32Array(2 * p),
                            t = new Uint16Array(c * d * 6);
                        if ("number" == typeof e) {
                            var u = e;
                            e = function() {
                                return u
                            }
                        }
                        for (var v = 0; c >= v; v++)
                            for (var w = 0; d >= w; w++) {
                                var x = w / d,
                                    y = v / c,
                                    z = o * x,
                                    A = l * y,
                                    B = h(z),
                                    C = g(z),
                                    D = h(A),
                                    E = g(A),
                                    F = C * D,
                                    G = E,
                                    H = B * D,
                                    I = e(F, G, H, x, y),
                                    J = w + v * (d + 1),
                                    K = 3 * J,
                                    L = 2 * J;
                                q[K + 0] = I * F, q[K + 1] = I * G, q[K + 2] = I * H, r[K + 0] = F, r[K + 1] = G, r[K + 2] = H, s[L + 0] = x, s[L + 1] = y
                            }
                        var M = c + 1;
                        for (w = 0; c > w; w++)
                            for (v = 0; d > v; v++) {
                                var J = 6 * (w * d + v);
                                t[J + 0] = v * M + w, t[J + 1] = v * M + w + 1, t[J + 2] = (v + 1) * M + w, t[J + 3] = (v + 1) * M + w, t[J + 4] = v * M + w + 1, t[J + 5] = (v + 1) * M + w + 1
                            }
                        k.Model.call(this, a.extend({
                            vertices: q,
                            indices: t,
                            normals: r,
                            texCoords: s
                        }, b || {}))
                    }, k.Sphere.prototype = Object.create(k.Model.prototype), k.IcoSphere = function(b) {
                        var c = b.iterations || 0,
                            d = [],
                            f = [],
                            g = Math.sqrt,
                            h = Math.acos,
                            i = Math.atan2,
                            j = Math.PI,
                            l = 2 * j;
                        b.onAddVertex = b.onAddVertex || a.empty; {
                            var m = (1 + g(5)) / 2;
                            g(1 + m * m)
                        }
                        d.push(-1, 0, 0, 0, 1, 0, 0, 0, -1, 0, 0, 1, 0, -1, 0, 1, 0, 0), f.push(3, 4, 5, 3, 5, 1, 3, 1, 0, 3, 0, 4, 4, 0, 2, 4, 2, 5, 2, 0, 1, 5, 2, 1);
                        for (var n = (function() {
                                var a = {};
                                return function(b, c) {
                                    b *= 3, c *= 3;
                                    var e = c > b ? b : c,
                                        f = b > c ? b : c,
                                        h = e + "|" + f;
                                    if (h in a) return a[h];
                                    var i = d[b],
                                        j = d[b + 1],
                                        k = d[b + 2],
                                        l = d[c],
                                        m = d[c + 1],
                                        n = d[c + 2],
                                        o = (i + l) / 2,
                                        p = (j + m) / 2,
                                        q = (k + n) / 2,
                                        r = g(o * o + p * p + q * q);
                                    return o /= r, p /= r, q /= r, d.push(o, p, q), a[h] = d.length / 3 - 1
                                }
                            }()), o = 0; c > o; o++) {
                            for (var p = [], q = 0, r = f.length; r > q; q += 3) {
                                var s = n(f[q], f[q + 1]),
                                    t = n(f[q + 1], f[q + 2]),
                                    u = n(f[q + 2], f[q]);
                                p.push(u, f[q], s, s, f[q + 1], t, t, f[q + 2], u, s, t, u)
                            }
                            f = p
                        }
                        for (var r = f.length, v = new Array(3 * r), w = new Array(2 * r), o = r - 3; o >= 0; o -= 3) {
                            var x, y = f[o],
                                z = f[o + 1],
                                A = f[o + 2],
                                B = 3 * y,
                                C = 3 * z,
                                D = 3 * A,
                                E = 2 * y,
                                F = 2 * z,
                                G = 2 * A,
                                H = d[B],
                                I = d[B + 1],
                                J = d[B + 2],
                                K = h(J / g(H * H + I * I + J * J)),
                                L = i(I, H) + j,
                                M = K / j,
                                N = 1 - L / l,
                                O = d[C],
                                P = d[C + 1],
                                Q = d[C + 2],
                                R = h(Q / g(O * O + P * P + Q * Q)),
                                S = i(P, O) + j,
                                T = R / j,
                                U = 1 - S / l,
                                V = d[D],
                                W = d[D + 1],
                                X = d[D + 2],
                                Y = h(X / g(V * V + W * W + X * X)),
                                Z = i(W, V) + j,
                                $ = Y / j,
                                _ = 1 - Z / l,
                                ab = [V - O, W - P, X - Q],
                                bb = [H - O, I - P, J - Q],
                                cb = e.cross(ab, bb).$unit();
                            (0 == N || 0 == U || 0 == _) && (0 == N || N > .5) && (0 == U || U > .5) && (0 == _ || _ > .5) && (d.push(d[B], d[B + 1], d[B + 2]), x = d.length / 3 - 1, f.push(x), w[2 * x] = 1, w[2 * x + 1] = M, v[3 * x] = cb.x, v[3 * x + 1] = cb.y, v[3 * x + 2] = cb.z, d.push(d[C], d[C + 1], d[C + 2]), x = d.length / 3 - 1, f.push(x), w[2 * x] = 1, w[2 * x + 1] = T, v[3 * x] = cb.x, v[3 * x + 1] = cb.y, v[3 * x + 2] = cb.z, d.push(d[D], d[D + 1], d[D + 2]), x = d.length / 3 - 1, f.push(x), w[2 * x] = 1, w[2 * x + 1] = $, v[3 * x] = cb.x, v[3 * x + 1] = cb.y, v[3 * x + 2] = cb.z), v[B] = v[C] = v[D] = cb.x, v[B + 1] = v[C + 1] = v[D + 1] = cb.y, v[B + 2] = v[C + 2] = v[D + 2] = cb.z, w[E] = N, w[E + 1] = M, w[F] = U, w[F + 1] = T, w[G] = _, w[G + 1] = $
                        }
                        k.Model.call(this, a.extend({
                            vertices: d,
                            indices: f,
                            normals: v,
                            texCoords: w
                        }, b || {}))
                    }, k.IcoSphere.prototype = Object.create(k.Model.prototype), k.TruncatedCone = function(b) {
                        for (var c = b.bottomRadius || 0, d = b.topRadius || 0, e = b.height || 1, f = b.nradial || 10, g = b.nvertical || 10, h = !!b.topCap, i = !!b.bottomCap, j = (h ? 2 : 0) + (i ? 2 : 0), l = (f + 1) * (g + 1 + j), m = new Float32Array(3 * l), n = new Float32Array(3 * l), o = new Float32Array(2 * l), p = new Uint16Array(f * (g + j) * 6), q = f + 1, r = Math, s = r.atan2(c - d, e), t = r.sin, u = r.cos, v = r.PI, w = u(s), x = t(s), y = h ? -2 : 0, z = g + (i ? 2 : 0), A = 0, B = 0, C = y; z >= C; C++) {
                            var D, E = C / g,
                                F = e * E;
                            0 > C ? (F = 0, E = 1, D = c) : C > g ? (F = e, E = 1, D = d) : D = c + (d - c) * (C / g), (-2 == C || C == g + 2) && (D = 0, E = 0), F -= e / 2;
                            for (var G = 0; q > G; G++) {
                                var H = t(G * v * 2 / f),
                                    I = u(G * v * 2 / f);
                                m[A + 0] = H * D, m[A + 1] = F, m[A + 2] = I * D, n[A + 0] = 0 > C || C > g ? 0 : H * w, n[A + 1] = 0 > C ? -1 : C > g ? 1 : x, n[A + 2] = 0 > C || C > g ? 0 : I * w, o[B + 0] = G / f, o[B + 1] = E, B += 2, A += 3
                            }
                        }
                        for (C = 0; g + j > C; C++)
                            for (G = 0; f > G; G++) {
                                var J = 6 * (C * f + G);
                                p[J + 0] = q * (C + 0) + 0 + G, p[J + 1] = q * (C + 0) + 1 + G, p[J + 2] = q * (C + 1) + 1 + G, p[J + 3] = q * (C + 0) + 0 + G, p[J + 4] = q * (C + 1) + 1 + G, p[J + 5] = q * (C + 1) + 0 + G
                            }
                        k.Model.call(this, a.extend({
                            vertices: m,
                            normals: n,
                            texCoords: o,
                            indices: p
                        }, b || {}))
                    }, k.TruncatedCone.prototype = Object.create(k.Model.prototype), k.Cone = function(a) {
                        a.topRadius = 0, a.topCap = !!a.cap, a.bottomCap = !!a.cap, a.bottomRadius = a.radius || 3, k.TruncatedCone.call(this, a)
                    }, k.Cone.prototype = Object.create(k.TruncatedCone.prototype), k.Cylinder = function(a) {
                        a.bottomRadius = a.radius, a.topRadius = a.radius, k.TruncatedCone.call(this, a)
                    }, k.Cylinder.prototype = Object.create(k.TruncatedCone.prototype), k.Plane = function(b) {
                        var c = b.type,
                            d = c.split(","),
                            e = b[d[0] + "len"],
                            f = b[d[1] + "len"],
                            g = b["n" + d[0]] || 1,
                            h = b["n" + d[1]] || 1,
                            i = b.offset,
                            j = !!b.flipCull,
                            l = (g + 1) * (h + 1),
                            m = new Float32Array(3 * l),
                            n = new Float32Array(3 * l),
                            o = new Float32Array(2 * l),
                            p = 0,
                            q = 0;
                        j && (e = -e);
                        for (var r = 0; h >= r; r++)
                            for (var s = 0; g >= s; s++) {
                                var t = s / g,
                                    u = r / h;
                                switch (o[p + 0] = j ? 1 - t : t, o[p + 1] = u, p += 2, c) {
                                    case "x,y":
                                        m[q + 0] = e * t - .5 * e, m[q + 1] = f * u - .5 * f, m[q + 2] = i, n[q + 0] = 0, n[q + 1] = 0, n[q + 2] = j ? 1 : -1;
                                        break;
                                    case "x,z":
                                        m[q + 0] = e * t - .5 * e, m[q + 1] = i, m[q + 2] = f * u - .5 * f, n[q + 0] = 0, n[q + 1] = j ? 1 : -1, n[q + 2] = 0;
                                        break;
                                    case "y,z":
                                        m[q + 0] = i, m[q + 1] = e * t - .5 * e, m[q + 2] = f * u - .5 * f, n[q + 0] = j ? 1 : -1, n[q + 1] = 0, n[q + 2] = 0
                                }
                                q += 3
                            }
                        var v = g + 1,
                            w = [];
                        for (r = 0; h > r; r++)
                            for (s = 0; g > s; s++) {
                                var x = 6 * (r * g + s);
                                w[x + 0] = (r + 0) * v + s, w[x + 1] = (r + 1) * v + s, w[x + 2] = (r + 0) * v + s + 1, w[x + 3] = (r + 1) * v + s, w[x + 4] = (r + 1) * v + s + 1, w[x + 5] = (r + 0) * v + s + 1
                            }
                        k.Model.call(this, a.extend({
                            vertices: m,
                            normals: n,
                            texCoords: o,
                            indices: w
                        }, b))
                    }, k.Plane.prototype = Object.create(k.Model.prototype), k.id = a.time(), PhiloGL.O3D = k
                }(),
                function() {
                    var a = {
                            Vertex: {},
                            Fragment: {}
                        },
                        b = a.Vertex,
                        c = a.Fragment;
                    b.Default = ["#define LIGHT_MAX 4", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec4 color;", "attribute vec4 pickingColor;", "attribute vec2 texCoord1;", "uniform mat4 viewMatrix;", "uniform mat4 viewInverseMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewProjectionMatrix;", "uniform mat4 worldMatrix;", "uniform mat4 worldInverseMatrix;", "uniform mat4 worldInverseTransposeMatrix;", "uniform mat4 objectMatrix;", "uniform vec3 cameraPosition;", "uniform bool enableLights;", "uniform vec3 ambientColor;", "uniform vec3 directionalColor;", "uniform vec3 lightingDirection;", "uniform vec3 pointLocation[LIGHT_MAX];", "uniform vec3 pointColor[LIGHT_MAX];", "uniform int numberPoints;", "uniform bool useReflection;", "varying vec3 vReflection;", "varying vec4 vColor;", "varying vec4 vPickingColor;", "varying vec2 vTexCoord;", "varying vec4 vNormal;", "varying vec3 lightWeighting;", "void main(void) {", "vec4 mvPosition = worldMatrix * vec4(position, 1.0);", "vec4 transformedNormal = worldInverseTransposeMatrix * vec4(normal, 1.0);", "if(!enableLights) {", "lightWeighting = vec3(1.0, 1.0, 1.0);", "} else {", "vec3 plightDirection;", "vec3 pointWeight = vec3(0.0, 0.0, 0.0);", "float directionalLightWeighting = max(dot(transformedNormal.xyz, lightingDirection), 0.0);", "for (int i = 0; i < LIGHT_MAX; i++) {", "if (i < numberPoints) {", "plightDirection = normalize((viewMatrix * vec4(pointLocation[i], 1.0)).xyz - mvPosition.xyz);", "pointWeight += max(dot(transformedNormal.xyz, plightDirection), 0.0) * pointColor[i];", "} else {", "break;", "}", "}", "lightWeighting = ambientColor + (directionalColor * directionalLightWeighting) + pointWeight;", "}", "if (useReflection) {", "vReflection = (viewInverseMatrix[3] - (worldMatrix * vec4(position, 1.0))).xyz;", "} else {", "vReflection = vec3(1.0, 1.0, 1.0);", "}", "vColor = color;", "vPickingColor = pickingColor;", "vTexCoord = texCoord1;", "vNormal = transformedNormal;", "gl_Position = projectionMatrix * worldMatrix * vec4(position, 1.0);", "}"].join("\n"), c.Default = ["#ifdef GL_ES", "precision highp float;", "#endif", "varying vec4 vColor;", "varying vec4 vPickingColor;", "varying vec2 vTexCoord;", "varying vec3 lightWeighting;", "varying vec3 vReflection;", "varying vec4 vNormal;", "uniform bool hasTexture1;", "uniform sampler2D sampler1;", "uniform bool hasTextureCube1;", "uniform samplerCube samplerCube1;", "uniform bool enablePicking;", "uniform bool hasPickingColors;", "uniform vec3 pickColor;", "uniform float reflection;", "uniform float refraction;", "uniform bool hasFog;", "uniform vec3 fogColor;", "uniform float fogNear;", "uniform float fogFar;", "void main(){", "if (!hasTexture1) {", "gl_FragColor = vec4(vColor.rgb * lightWeighting, vColor.a);", "} else {", "gl_FragColor = vec4(texture2D(sampler1, vec2(vTexCoord.s, vTexCoord.t)).rgb * lightWeighting, 1.0);", "}", "if (hasTextureCube1) {", "vec3 nReflection = normalize(vReflection);", "vec3 reflectionValue;", "if (refraction > 0.0) {", "reflectionValue = refract(nReflection, vNormal.xyz, refraction);", "} else {", "reflectionValue = -reflect(nReflection, vNormal.xyz);", "}", "vec4 cubeColor = textureCube(samplerCube1, vec3(-reflectionValue.x, -reflectionValue.y, reflectionValue.z));", "gl_FragColor = vec4(mix(gl_FragColor.xyz, cubeColor.xyz, reflection), 1.0);", "}", "if (enablePicking) {", "if (hasPickingColors) {", "gl_FragColor = vPickingColor;", "} else {", "gl_FragColor = vec4(pickColor, 1.0);", "}", "}", "if (hasFog) {", "float depth = gl_FragCoord.z / gl_FragCoord.w;", "float fogFactor = smoothstep(fogNear, fogFar, depth);", "gl_FragColor = mix(gl_FragColor, vec4(fogColor, gl_FragColor.w), fogFactor);", "}", "}"].join("\n"), PhiloGL.Shaders = a
                }(),
                function() {
                    var d = PhiloGL.Vec3,
                        e = (PhiloGL.Mat4, function(b, c, d) {
                            d = a.merge({
                                lights: {
                                    enable: !1,
                                    ambient: {
                                        r: .2,
                                        g: .2,
                                        b: .2
                                    },
                                    directional: {
                                        direction: {
                                            x: 1,
                                            y: 1,
                                            z: 1
                                        },
                                        color: {
                                            r: 0,
                                            g: 0,
                                            b: 0
                                        }
                                    }
                                },
                                effects: {
                                    fog: !1
                                }
                            }, d || {}), this.program = d.program ? b[d.program] : b, this.camera = c, this.models = [], this.config = d
                        });
                    e.prototype = {
                        add: function() {
                            for (var b = 0, c = this.models, d = arguments.length; d > b; b++) {
                                var e = arguments[b];
                                e.id = e.id || a.uid(), c.push(e), this.defineBuffers(e)
                            }
                        },
                        remove: function(a) {
                            var b = this.models,
                                c = b.indexOf(a);
                            c > -1 && b.splice(c, 1)
                        },
                        getProgram: function(a) {
                            var b = this.program;
                            return "program" != b.$$family && a && a.program ? (b = b[a.program], b.use(), b) : b
                        },
                        defineBuffers: function(a) {
                            var b = this.getProgram(a),
                                c = a.dynamic;
                            a.dynamic = !0, a.setState(b), a.dynamic = c, a.unsetState(b)
                        },
                        beforeRender: function(a) {
                            this.setupLighting(a), this.setupEffects(a), this.camera && this.camera.setStatus(a)
                        },
                        setupLighting: function(b) {
                            var c = (Math.abs, this.camera),
                                e = (c.position, this.config.lights),
                                f = e.ambient,
                                g = e.directional,
                                h = g.color,
                                i = g.direction,
                                j = e.enable,
                                k = e.points && a.splat(e.points) || [],
                                l = k.length,
                                m = [],
                                n = [],
                                o = [],
                                p = [];
                            if (i = new d(i.x, i.y, i.z).$unit().$scale(-1), b.setUniform("enableLights", j), j) {
                                b.setUniform("ambientColor", [f.r, f.g, f.b]), b.setUniform("directionalColor", [h.r, h.g, h.b]), b.setUniform("lightingDirection", [i.x, i.y, i.z]), b.setUniform("numberPoints", l);
                                for (var q = 0, r = l; r > q; q++) {
                                    var s = k[q],
                                        t = s.position,
                                        u = s.color || s.diffuse,
                                        v = s.specular;
                                    m.push(t.x, t.y, t.z), n.push(u.r, u.g, u.b), o.push(+!!v), v ? p.push(v.r, v.g, v.b) : p.push(0, 0, 0)
                                }
                                m.length && (b.setUniforms({
                                    pointLocation: m,
                                    pointColor: n
                                }), b.setUniforms({
                                    enableSpecular: o,
                                    pointSpecularColor: p
                                }))
                            }
                        },
                        setupEffects: function(a) {
                            var b = this.config.effects,
                                c = b.fog,
                                d = c.color || {
                                    r: .5,
                                    g: .5,
                                    b: .5
                                };
                            c ? a.setUniforms({
                                hasFog: !0,
                                fogNear: c.near,
                                fogFar: c.far,
                                fogColor: [d.r, d.g, d.b]
                            }) : a.setUniform("hasFog", !1)
                        },
                        render: function(b) {
                            b = b || {};
                            var c = this.camera,
                                d = this.program,
                                e = b.renderProgram,
                                f = a.type(d),
                                g = !e && "object" == f,
                                h = a.extend({
                                    onBeforeRender: a.empty,
                                    onAfterRender: a.empty
                                }, b || {});
                            !g && this.beforeRender(e || d);
                            for (var i = 0, j = this.models, k = j.length; k > i; ++i) {
                                var l = j[i];
                                if (l.display) {
                                    var d = e || this.getProgram(l);
                                    g && this.beforeRender(d), l.onBeforeRender(d, c), h.onBeforeRender(l, i), this.renderObject(l, d), h.onAfterRender(l, i), l.onAfterRender(d, c)
                                }
                            }
                        },
                        renderToTexture: function(a, d) {
                            d = d || {};
                            var e = c.textures[a + "-texture"],
                                f = c.textureMemo[a + "-texture"];
                            this.render(d), b.bindTexture(f.textureType, e)
                        },
                        renderObject: function(a, c) {
                            var d = this.camera,
                                e = d.view,
                                f = (d.projection, a.matrix),
                                g = e.mulMat4(f),
                                h = g.invert(),
                                i = h.transpose();
                            a.setState(c), c.setUniforms({
                                objectMatrix: f,
                                worldMatrix: g,
                                worldInverseMatrix: h,
                                worldInverseTransposeMatrix: i
                            }), a.render ? a.render(b, c, d) : a.$indicesLength ? b.drawElements(void 0 !== a.drawType ? b.get(a.drawType) : b.TRIANGLES, a.$indicesLength, b.UNSIGNED_SHORT, 0) : b.drawArrays(void 0 !== a.drawType ? b.get(a.drawType) : b.TRIANGLES, 0, a.$verticesLength / 3), a.unsetState(c)
                        },
                        setupPicking: function() {
                            {
                                var a = PhiloGL.Program.fromDefaultShaders();
                                Math.floor
                            }
                            c.setFrameBuffer("$picking", {
                                width: 5,
                                height: 1,
                                bindToTexture: {
                                    parameters: [{
                                        name: "TEXTURE_MAG_FILTER",
                                        value: "LINEAR"
                                    }, {
                                        name: "TEXTURE_MIN_FILTER",
                                        value: "LINEAR"
                                    }, {
                                        name: "TEXTURE_WRAP_S",
                                        value: "CLAMP_TO_EDGE"
                                    }, {
                                        name: "TEXTURE_WRAP_T",
                                        value: "CLAMP_TO_EDGE"
                                    }]
                                },
                                bindToRenderBuffer: !0
                            }), c.setFrameBuffer("$picking", !1), this.pickingProgram = a
                        },
                        pick: function(a, d, e) {
                            e = e || {}, this.pickingProgram || this.setupPicking();
                            var f, g, h = {},
                                i = [],
                                j = c.usedProgram,
                                k = this.pickingProgram,
                                l = this.camera,
                                m = l.target,
                                n = l.aspect,
                                o = this.config,
                                p = o.lights.enable,
                                q = o.effects.fog,
                                r = b.canvas,
                                s = e.viewport || {},
                                t = s.width || r.offsetWidth || r.width,
                                u = s.height || r.offsetHeight || r.height,
                                v = (Math.floor, 5),
                                w = 1,
                                x = a - (s.x || 0),
                                y = d - (s.y || 0),
                                z = 2 * x / t - 1,
                                A = 1 - 2 * y / u,
                                B = this.unproject([z, A, 1], l),
                                C = [],
                                D = new Uint8Array(4);
                            this.camera.target = B, this.camera.update(), o.lights.enable = !1, o.effects.fog = !1, c.setFrameBuffer("$picking", !0), k.use(), k.setUniform("enablePicking", !0), b.disable(b.BLEND), b.viewport(0, 0, v, w), b.clear(b.COLOR_BUFFER_BIT | b.DEPTH_BUFFER_BIT), b.readPixels(0, 0, 1, 1, b.RGBA, b.UNSIGNED_BYTE, D), f = D[0] + 256 * D[1] + 256 * D[2] * 256, this.renderPickingScene({
                                background: f,
                                o3dHash: h,
                                o3dList: i,
                                hash: C
                            }), b.readPixels(2, 0, 1, 1, b.RGBA, b.UNSIGNED_BYTE, D);
                            var E, F = [D[0], D[1], D[2]].join(),
                                G = h[F];
                            if (console.log("o3dHash", F, a, d, t, u), !G)
                                for (var H = 0, I = i.length; I > H; H++) G = i[H], E = G.pick(D), E !== !1 ? G.$pickingIndex = E : G = !1;
                            return c.setFrameBuffer("$picking", !1), c.setTexture("$picking-texture", !1), k.setUniform("enablePicking", !1), /*o.lights.enable = p,*/ o.effects.fog = q, j && j.use(), b.viewport(s.x || 0, s.y || 0, t, u), l.target = m, l.aspect = n, l.update(), this.o3dHash = h, this.o3dList = i, this.pixel = D, this.capture = g, G && G.pickable && G
                        },
                        unproject: function(a, b) {
                            return b.view.invert().mulMat4(b.projection.invert()).mulVec3(a)
                        },
                        renderPickingScene: function(a) {
                            if (this.config.renderPickingScene) return void this.config.renderPickingScene.call(this, a);
                            var b = this.pickingProgram,
                                c = a.o3dHash,
                                d = a.o3dList,
                                e = a.background,
                                f = a.hash,
                                g = 0;
                            this.renderToTexture("$picking", {
                                renderProgram: b,
                                onBeforeRender: function(a, h) {
                                    h == e && (g = 1);
                                    var i = h + g,
                                        j = !!a.pickingColors;
                                    b.setUniform("hasPickingColors", j), j ? d.push(a) : (f[0] = i % 256, f[1] = (i / 256 >> 0) % 256, f[2] = (i / 65536 >> 0) % 256, b.setUniform("pickColor", [f[0] / 255, f[1] / 255, f[2] / 255]), c[f.join()] = a)
                                }
                            })
                        },
                        resetPicking: a.empty
                    }, e.MAX_TEXTURES = 10, e.MAX_POINT_LIGHTS = 4, e.PICKING_RES = 4, PhiloGL.Scene = e
                }(),
                function() {
                    function a(a, b) {
                        for (var c = this.workers = []; b--;) c.push(new Worker(a))
                    }
                    a.prototype = {
                        map: function(a) {
                            for (var b = this.workers, c = this.configs = [], d = 0, e = b.length; e > d; d++) c.push(a && a(d));
                            return this
                        },
                        reduce: function(a) {
                            for (var b = a.reduceFn, c = this.workers, d = this.configs, e = c.length, f = a.initialValue, g = function(c) {
                                    e--, f = void 0 === f ? c.data : b(f, c.data), 0 == e && a.onComplete(f)
                                }, h = 0, i = e; i > h; h++) {
                                var j = c[h];
                                j.onmessage = g, j.postMessage(d[h])
                            }
                            return this
                        }
                    }, PhiloGL.WorkerGroup = a
                }(),
                function() {
                    var b = function(b) {
                            this.opt = a.merge({
                                delay: 0,
                                duration: 1e3,
                                transition: function(a) {
                                    return a
                                },
                                onCompute: a.empty,
                                onComplete: a.empty
                            }, b || {})
                        },
                        c = b.Queue = [];
                    b.prototype = {
                        time: null,
                        start: function(b) {
                            this.opt = a.merge(this.opt, b || {}), this.time = a.time(), this.animating = !0, c.push(this)
                        },
                        step: function() {
                            if (this.animating) {
                                var b = a.time(),
                                    c = this.time,
                                    d = this.opt,
                                    e = d.delay,
                                    f = d.duration,
                                    g = 0;
                                return c + e > b ? void d.onCompute.call(this, g) : void(c + e + f > b ? (g = d.transition((b - c - e) / f), d.onCompute.call(this, g)) : (this.animating = !1, d.onCompute.call(this, 1), d.onComplete.call(this)))
                            }
                        }
                    }, b.compute = function(a, b, c) {
                        return a + (b - a) * c
                    }, b.lerp = function(a, b, c, d, e) {
                        return (a - b) / (c - b) * (e - d) + d
                    }, b.Transition = {
                        linear: function(a) {
                            return a
                        }
                    };
                    var d = b.Transition;
                    ! function() {
                        var b = function(b, c) {
                                return c = a.splat(c), a.extend(b, {
                                    easeIn: function(a) {
                                        return a
                                    },
                                    easeOut: function(a) {
                                        return a
                                    },
                                    easeInOut: function(a) {
                                        return a
                                    }
                                })
                            },
                            c = {
                                Pow: function(a, b) {
                                    return Math.pow(a, b[0] || 6)
                                },
                                Expo: function(a) {
                                    return Math.pow(2, 8 * (a - 1))
                                },
                                Circ: function(a) {
                                    return 1 - Math.sin(Math.acos(a))
                                },
                                Sine: function(a) {
                                    return 1 - Math.sin((1 - a) * Math.PI / 2)
                                },
                                Back: function(a, b) {
                                    return b = b[0] || 1.618, Math.pow(a, 2) * ((b + 1) * a - b)
                                },
                                Bounce: function(a) {
                                    for (var b, c = 0, d = 1; 1; c += d, d /= 2)
                                        if (a >= (7 - 4 * c) / 11) {
                                            b = d * d - Math.pow((11 - 6 * c - 11 * a) / 4, 2);
                                            break
                                        } return b
                                },
                                Elastic: function(a, b) {
                                    return Math.pow(2, 10 * --a) * Math.cos(20 * a * Math.PI * (b[0] || 1) / 3)
                                }
                            };
                        for (var e in c) d[e] = b(c[e]);
                        ["Quad", "Cubic", "Quart", "Quint"].forEach(function(a, c) {
                            d[a] = b(function(a) {
                                return Math.pow(a, [c + 2])
                            })
                        })
                    }();
                    var e = self || window,
                        f = function() {
                            var a = c;
                            if (c = [], a.length) {
                                for (var d, e = 0, f = a.length; f > e; e++) d = a[e], d.step(), d.animating && c.push(d);
                                b.Queue = c
                            }
                        };
                    if (e) {
                        var g = !1;
                        ["webkitAnimationTime", "mozAnimationTime", "animationTime", "webkitAnimationStartTime", "mozAnimationStartTime", "animationStartTime"].forEach(function(a) {
                            a in e && (b.animationTime = function() {
                                return e[a]
                            }, g = !0)
                        }), g || (b.animationTime = a.time), g = !1, ["webkitRequestAnimationFrame", "mozRequestAnimationFrame", "requestAnimationFrame"].forEach(function(a) {
                            a in e && (b.requestAnimationFrame = function(b) {
                                e[a](function() {
                                    f(), b()
                                })
                            }, g = !0)
                        }), g || (b.requestAnimationFrame = function(a) {
                            setTimeout(function() {
                                f(), a()
                            }, 1e3 / 60)
                        })
                    }
                    PhiloGL.Fx = b
                }(),
                function() {
                    var d = {},
                        e = function() {};
                    e.postProcess = function() {
                        var d = .16568542494923805,
                            e = new PhiloGL.O3D.Plane({
                                type: "x,y",
                                xlen: d,
                                ylen: d,
                                offset: 0
                            }),
                            f = new PhiloGL.Camera(45, 1, .1, 500, {
                                position: {
                                    x: 0,
                                    y: 0,
                                    z: .2
                                }
                            }),
                            g = new PhiloGL.Scene({}, f);
                        return function(d) {
                            var h = c.program.$$family ? c.program : c.program[d.program],
                                i = d.fromTexture ? a.splat(d.fromTexture) : [],
                                j = d.toFrameBuffer,
                                k = !!d.toScreen,
                                l = d.width || c.canvas.width,
                                m = d.height || c.canvas.height,
                                n = d.viewportX || 0,
                                o = d.viewportY || 0;
                            return f.aspect = d.aspectRatio ? d.aspectRatio : Math.max(m / l, l / m), f.update(), g.program = h, e.textures = i, e.program = h, g.models.length || g.add(e), j && (j in c.frameBufferMemo || c.setFrameBuffer(j, {
                                width: l,
                                height: m,
                                bindToTexture: {
                                    parameters: [{
                                        name: "TEXTURE_MAG_FILTER",
                                        value: "LINEAR"
                                    }, {
                                        name: "TEXTURE_MIN_FILTER",
                                        value: "LINEAR",
                                        generateMipmap: !1
                                    }]
                                },
                                bindToRenderBuffer: !1
                            }), h.use(), c.setFrameBuffer(j, !0), b.viewport(n, o, l, m), b.clear(b.COLOR_BUFFER_BIT | b.DEPTH_BUFFER_BIT), h.setUniforms(d.uniforms || {}), g.renderToTexture(j), c.setFrameBuffer(j, !1)), k && (h.use(), b.viewport(n, o, l, m), b.clear(b.COLOR_BUFFER_BIT | b.DEPTH_BUFFER_BIT), h.setUniforms(d.uniforms || {}), g.render()), this
                        }
                    }(), d.Image = e, PhiloGL.Media = d
                }()
        }(), define("philogl", function() {}), define("globe", ["philogl", "tweets"], function() {
            PhiloGL.unpack();
            var a = 1024,
                b = 576,
                c = window.innerHeight,
                d = window.innerWidth,
                e = 2 * c > d ? (d - 2 * c) / 2 : 0,
                f = d > 2 * c ? (c - d / 2) / 2 : 0,
                g = Math.max(d, 2 * c),
                h = d > 2 * c ? d / 2 : c,
                i = 3,
                j = {
                    complete: Function.prototype,
                    steps: []
                };
            if (!PhiloGL.hasWebGL()) return j.hasWebGL = !1, j;
            j.hasWebGL = !0;
            var k, l = j.earth = new PhiloGL.O3D.Sphere({
                    nlat: 30,
                    nlong: 30,
                    radius: 1,
                    textures: ["images/lon_180_bm.jpg"],
                    program: "earth",
                    uniforms: {
                        shininess: 1.0,
                        alphaUfm: 1.0
                    }
                }),
                m = {},
                n = (j.texture = new Float32Array(a * b * 4), j.tempMap = new PhiloGL.O3D.IcoSphere({
                    iterations: 6,
                    radius: .6,
                    program: "temp",
                    uniforms: {
                        delta: 0
                    },
                    drawType: "LINES"
                }));
            return j.tempMap.matrix.$rotateXYZ(Math.PI / 2, 0, 0), PhiloGL("map", {
                program: [{
                    id: "earth",
                    from: "uris",
                    path: "./shaders/",
                    vs: "earth.vs",
                    fs: "earth.fs",
                    noCache: !0
                }, {
                    id: "temp",
                    from: "uris",
                    path: "./shaders/",
                    vs: "temp.vs",
                    fs: "temp.fs",
                    noCache: !0
                }, {
                    id: "blur",
                    from: "uris",
                    path: "shaders/",
                    vs: "blur.vs",
                    fs: "blur.fs",
                    noCache: !0
                }, {
                    id: "float-scale",
                    from: "uris",
                    path: "shaders/",
                    vs: "float.vs",
                    fs: "float.fs",
                    noCache: !0
                }],
                camera: {
                    position: {
                        x: 0,
                        y: 0,
                        z: -3
                    }
                },
                scene: {
                    lights: {
                        enable: !0,
                        ambient: {
                            r: .05,
                            g: .05,
                            b: .05
                        },
                        points: {
                            diffuse: {
                                r: .7,
                                g: .7,
                                b: .8
                            },
                            specular: {
                                r: .9,
                                g: .9,
                                b: 1
                            },
                            position: {
                                x: 0,
                                y: 1,
                                z: -2
                            }
                        }
                    }
                },
                events: {
                    centerOrigin: !1,
                    onDragStart: function(a) {
                        k = k || {}, k.x = a.x, k.y = a.y, k.started = !0, m.matEarth = j.earth.matrix.clone(), m.matCities = j.tempMap.matrix.clone()
                    },
                    onDragMove: function(a) {
                        var b = (m.phi, m.theta, -(a.y - k.y) / 100),
                            c = (a.x - k.x) / 100;
                        j.rotateXY(b, c)
                    },
                    onDragEnd: function(a) {
                        var b = -(a.y - k.y) / 100,
                            c = (a.x - k.x) / 100,
                            d = (m.phi + b) % Math.PI,
                            e = (m.theta + c) % (2 * Math.PI);
                        d = 0 > d ? Math.PI + d : d, e = 0 > e ? 2 * Math.PI + e : e, m.phi = d, m.theta = e, k.started = !1
                    },
                    onMouseWheel: function(a) {
                        a.stop();
                        var b = this.camera;
                        b.position.z += a.wheel / 10, b.update()
                    }
                },
                textures: {
                    src: ["images/lon_180_bm.jpg"],
                    parameters: [{
                        name: "TEXTURE_MAG_FILTER",
                        value: "LINEAR"
                    }, {
                        name: "TEXTURE_WRAP_S",
                        value: "CLAMP_TO_EDGE"
                    }, {
                        name: "TEXTURE_WRAP_T",
                        value: "CLAMP_TO_EDGE"
                    }, {
                        name: "TEXTURE_MIN_FILTER",
                        value: "LINEAR"
                    }]
                },
                onError: function(a) {
                    console.warn("There was an error creating the app. ", a)
                },
                onLoad: function(k) {
                    function o() {
                        p.clear(p.COLOR_BUFFER_BIT | p.DEPTH_BUFFER_BIT), p.viewport(e, f, g, h), k.setFrameBuffer("grid", !0), p.lineWidth(2), p.clear(p.COLOR_BUFFER_BIT | p.DEPTH_BUFFER_BIT), l.display = !1, p.viewport(e / i, f / i, g / i, h / i), q.renderToTexture("grid"), k.setFrameBuffer("grid", !1), k.setFrameBuffer("planet", !0), p.lineWidth(1), p.clear(p.COLOR_BUFFER_BIT | p.DEPTH_BUFFER_BIT), l.display = !0, p.viewport(e, f, g, h), q.renderToTexture("grid"), k.setFrameBuffer("planet", !1), p.blendFunc(p.SRC_ALPHA, p.ZERO), /*Media.Image.postProcess({
                            fromTexture: "grid-texture",
                            toFrameBuffer: "gridX",
                            program: "blur",
                            width: r.width,
                            height: r.height,
                            aspectRatio: 1,
                            uniforms: {
                                width: r.width,
                                height: r.height,
                                blurX: 3,
                                blurY: 0,
                                melange: 0
                            }
                        }).postProcess({
                            fromTexture: ["gridX-texture", "planet-texture"],
                            aspectRatio: 1,
                            toScreen: !0,
                            program: "blur",
                            width: r.width,
                            height: r.height,
                            uniforms: {
                                width: r.width,
                                height: r.height,
                                blurX: 0,
                                blurY: 3,
                                melange: 1.4
                            }
                        }),*/ p.viewport(e, f, g, h), q.render(), Fx.requestAnimationFrame(o)
                    }
                    var p = k.gl,
                        q = k.scene,
                        r = k.canvas,
                        s = new Fx({
                            duration: 3e3,
                            transition: Fx.Transition.linear,
                            onCompute: function(a) {
                                l.uniforms.delta = a, n.uniforms.delta = a
                            }
                        });
                    if (!PhiloGL.hasWebGL() || !p.getExtension("OES_texture_float")) return j.hasWebGL = !1, void j.complete();
                    l.onBeforeRender = function() {
                        p.disable(p.BLEND), p.enable(p.DEPTH_TEST)
                    }, n.onBeforeRender = function() {
                        p.blendFunc(p.SRC_COLOR, p.ONE), p.enable(p.BLEND), p.disable(p.DEPTH_TEST)
                    }, r.width = d, r.height = c, r.style.width = d + "px", r.style.height = c + "px", k.setFrameBuffer("grid", {
                        width: r.width / i,
                        height: r.height / i,
                        bindToTexture: {
                            parameters: [{
                                name: "TEXTURE_MAG_FILTER",
                                value: "LINEAR"
                            }, {
                                name: "TEXTURE_MIN_FILTER",
                                value: "LINEAR"
                            }, {
                                name: "TEXTURE_WRAP_S",
                                value: "CLAMP_TO_EDGE"
                            }, {
                                name: "TEXTURE_WRAP_T",
                                value: "CLAMP_TO_EDGE"
                            }]
                        },
                        bindToRenderBuffer: !0
                    }).setFrameBuffer("planet", {
                        width: r.width,
                        height: r.height,
                        bindToTexture: {
                            parameters: [{
                                name: "TEXTURE_MAG_FILTER",
                                value: "LINEAR"
                            }, {
                                name: "TEXTURE_MIN_FILTER",
                                value: "LINEAR"
                            }, {
                                name: "TEXTURE_WRAP_S",
                                value: "CLAMP_TO_EDGE"
                            }, {
                                name: "TEXTURE_WRAP_T",
                                value: "CLAMP_TO_EDGE"
                            }]
                        },
                        bindToRenderBuffer: !0
                    }).setFrameBuffer("gridX", {
                        width: r.width,
                        height: r.height,
                        bindToTexture: {
                            parameters: [{
                                name: "TEXTURE_MAG_FILTER",
                                value: "LINEAR"
                            }, {
                                name: "TEXTURE_MIN_FILTER",
                                value: "LINEAR"
                            }, {
                                name: "TEXTURE_WRAP_S",
                                value: "CLAMP_TO_EDGE"
                            }, {
                                name: "TEXTURE_WRAP_T",
                                value: "CLAMP_TO_EDGE"
                            }]
                        },
                        bindToRenderBuffer: !0
                    }), p.viewport(e, f, g, h), p.clearColor(0, 0, 0, 0), p.clearDepth(1), p.enable(p.DEPTH_TEST), p.depthFunc(p.LEQUAL), p.blendFunc(p.SRC_ALPHA, p.ONE), p.enable(p.BLEND), p.disable(p.DEPTH_TEST), q.add(l, n), o();
                    var t = "from",
                        u = "to";
                    k.setFrameBuffer("from-float", {
                        width: a,
                        height: b,
                        bindToTexture: {
                            data: {
                                type: p.FLOAT,
                                width: a,
                                height: b
                            }
                        }
                    }).setFrameBuffer(u + "-float", {
                        width: a,
                        height: b,
                        bindToTexture: {
                            data: {
                                type: p.FLOAT,
                                width: a,
                                height: b
                            }
                        }
                    }).setFrameBuffer("blurX", {
                        width: a,
                        height: b,
                        bindToTexture: {
                            data: {
                                type: p.FLOAT,
                                width: a,
                                height: b
                            }
                        }
                    }), j.transitionTo = function(c, d) {
                        d = d || {}, k.setTexture("img", {
                            width: a,
                            height: b,
                            parameters: [{
                                name: "TEXTURE_MAG_FILTER",
                                value: "LINEAR"
                            }, {
                                name: "TEXTURE_MIN_FILTER",
                                value: "LINEAR"
                            }, {
                                name: "TEXTURE_WRAP_S",
                                value: "CLAMP_TO_EDGE"
                            }, {
                                name: "TEXTURE_WRAP_T",
                                value: "CLAMP_TO_EDGE"
                            }],
                            data: {
                                width: a,
                                height: b,
                                value: c
                            }
                        }), Media.Image.postProcess({
                            fromTexture: "img",
                            toFrameBuffer: u + "-float",
                            program: "float-scale",
                            width: a,
                            height: a,
                            aspectRatio: 1
                        }).postProcess({
                            fromTexture: u + "-float-texture",
                            toFrameBuffer: "blurX",
                            program: "blur",
                            width: a,
                            height: b,
                            aspectRatio: 1,
                            uniforms: {
                                width: a,
                                height: b,
                                blurX: 2,
                                blurY: 0,
                                melange: 0
                            }
                        }).postProcess({
                            fromTexture: "blurX-texture",
                            toFrameBuffer: u + "-float",
                            program: "blur",
                            width: a,
                            height: b,
                            aspectRatio: 1,
                            uniforms: {
                                width: a,
                                height: b,
                                blurX: 0,
                                blurY: 2,
                                melange: 0
                            }
                        }), n.textures = ["from-float-texture", "to-float-texture"], n.uniforms.reverse = "from" !== t, s.start({
                            duration: d.duration || 3e3,
                            transition: d.transition || Fx.Transition.linear
                        });
                        var e = t;
                        t = u, u = e
                    }, j.app = k, j.fx = new Fx, j.makeStep = function(a) {
                        var b = this,
                            c = b.app.camera,
                            d = a.deltaFrom || 0,
                            e = a.deltaTo || 1,
                            f = a.duration || 1e3,
                            g = a.transition || Fx.Transition.linear,
                            h = a.cameraTransition || g,
                            i = a.rotationTransition || g,
                            j = a.cameraFrom,
                            k = a.cameraTo,
                            l = a.cameraXFrom,
                            m = a.cameraXTo,
                            n = a.latFrom,
                            o = a.lonFrom,
                            p = a.latTo,
                            q = a.lonTo,
                            r = (a.timeFrom || Date.now(), a.timeTo || Date.now(), a.onComplete);
                        (n || o) && b.rotateToLatLong(n, o, {
                            animate: !1
                        }), new Fx({
                            delay: a.delay || 0,
                            duration: f,
                            transition: Fx.Transition.linear,
                            onCompute: function(a) {
                                {
                                    var b = (g(a), h(a));
                                    Fx.compute(d, e, a)
                                }(j || k) && (c.position.z = Fx.compute(j, k, b), c.update()), (l || m) && (c.position.x = Fx.compute(l, m, b), c.target.x = c.position.x, c.update())
                            },
                            onComplete: function() {
                                r && r()
                            }
                        }).start(), (p || q) && b.rotateToLatLong(p, q, {
                            delay: a.delay || 0,
                            transition: i,
                            duration: f,
                            animate: !0
                        })
                    }, j.rotateToLatLong = function(a, b, c) {
                        c = c || {};
                        var d = this,
                            e = j.earth,
                            f = j.tempMap,
                            g = Math.PI,
                            h = 2 * g,
                            i = h - (+b + 180) / 360 * h,
                            k = g - (+a + 90) / 180 * g,
                            l = m.phi || Math.PI / 2,
                            n = m.theta || 3 * Math.PI / 2,
                            o = k - l,
                            p = i - n;
                        j.lat = a, j.lon = b, m.matEarth = e.matrix.clone(), m.matCities = f.matrix.clone(), c && !c.animate ? (j.rotateXY(o, p), m.phi = l + o, m.theta = n + p) : j.fx.start({
                            delay: c.delay || 0,
                            duration: c.duration || 15e3,
                            transition: c.transition || Fx.Transition.linear,
                            onCompute: function(a) {
                                d.rotateXY(o * a, p * a), m.phi = l + o * a, m.theta = n + p * a
                            }
                        })
                    }, j.rotateXY = function(a, b) {
                        var c = j,
                            d = c.earth,
                            e = c.tempMap,
                            f = [1, 0, 0],
                            g = [0, 1, 0],
                            h = [0, 1, 0];
                        d.matrix = m.matEarth.clone(), e.matrix = m.matCities.clone(); {
                            var i = (new Mat4).$rotateXYZ(-Math.PI / 2, 0, 0),
                                k = new Mat4,
                                l = new Mat4;
                            new Mat4
                        }
                        k.$rotateAxis(a, f), l.$rotateAxis(a, i.mulVec3(f)), k.$mulMat4(d.matrix), l.$mulMat4(e.matrix);
                        var n = new Mat4,
                            o = new Mat4;
                        n.$rotateAxis(b, h), o.$rotateAxis(b, i.mulVec3(g)), k.$mulMat4(n), l.$mulMat4(o), d.matrix = k, e.matrix = l
                    }, window.addEventListener("resize", function() {
                        c = window.innerHeight - 225, d = window.innerWidth, e = 2 * c > d ? (d - 2 * c) / 2 : 0, f = d > 2 * c ? (c - d / 2) / 2 : 0, g = Math.max(d, 2 * c), h = d > 2 * c ? d / 2 : c, r.width = d, r.height = c, r.style.width = d + "px", r.style.height = c + "px", k.setFrameBuffer("grid", {
                            width: r.width / i,
                            height: r.height / i,
                            bindToTexture: {
                                parameters: [{
                                    name: "TEXTURE_MAG_FILTER",
                                    value: "LINEAR"
                                }, {
                                    name: "TEXTURE_MIN_FILTER",
                                    value: "LINEAR"
                                }, {
                                    name: "TEXTURE_WRAP_S",
                                    value: "CLAMP_TO_EDGE"
                                }, {
                                    name: "TEXTURE_WRAP_T",
                                    value: "CLAMP_TO_EDGE"
                                }]
                            },
                            bindToRenderBuffer: !0
                        }).setFrameBuffer("planet", {
                            width: r.width,
                            height: r.height,
                            bindToTexture: {
                                parameters: [{
                                    name: "TEXTURE_MAG_FILTER",
                                    value: "LINEAR"
                                }, {
                                    name: "TEXTURE_MIN_FILTER",
                                    value: "LINEAR"
                                }, {
                                    name: "TEXTURE_WRAP_S",
                                    value: "CLAMP_TO_EDGE"
                                }, {
                                    name: "TEXTURE_WRAP_T",
                                    value: "CLAMP_TO_EDGE"
                                }]
                            },
                            bindToRenderBuffer: !0
                        }).setFrameBuffer("gridX", {
                            width: r.width,
                            height: r.height,
                            bindToTexture: {
                                parameters: [{
                                    name: "TEXTURE_MAG_FILTER",
                                    value: "LINEAR"
                                }, {
                                    name: "TEXTURE_MIN_FILTER",
                                    value: "LINEAR"
                                }, {
                                    name: "TEXTURE_WRAP_S",
                                    value: "CLAMP_TO_EDGE"
                                }, {
                                    name: "TEXTURE_WRAP_T",
                                    value: "CLAMP_TO_EDGE"
                                }]
                            },
                            bindToRenderBuffer: !0
                        })
                    }), j.complete()
                }
            }), j
        }), require.config({
            baseUrl: "./scripts",
            paths: {},
            shim: {}
        }), require(["tweets", "globe"], function(a, b) {
            function c() {
                f.style.display = "none", i.style.display = "none";
                var a = document.createElement("div");
                a.className = "no-webgl", e.appendChild(a), a.innerHTML = "<video autoplay><source src='images/ta.webm'></source><source src='images/ta.mp4'></source></video>", document.querySelector("#nowebgl").style.display = ""
            }

            function d(a, c) {
                b.transitionTo(a, c)
            }
            for (var e = document.querySelector(".container"), f = document.querySelector("#map"), g = document.querySelector("#image-canvas").getContext("2d"), h = [].slice.call(document.querySelectorAll("nav li")), i = document.querySelector("#loading"), j = 12, names = ['0125_0000','0126_0000','0127_0000','0128_0000','0129_0000',
              '0130_0000', '0131_0000', '0201_0000', '0202_0000', '0203_0000', '0204_0000', '0205_0000'], k = [], l = 1024, m = 576; j--;) k.push("./images/height_speed_" + names[j] + ".jpg");
            var n;
            if (!b.hasWebGL) return void c();
            b.complete = function() {
                return b.hasWebGL ? void(n = new IO.Images({
                    src: k.reverse(),
                    onProgress: function(a) {
                        var b, c = Math.round(h.length * a / 100);
                        for (b = 0; c > b; ++b) h[b].className = 0 === b ? "loaded selected" : "loaded"
                    },
                    onComplete: function() {
                        i.style.display = "none", f.className = "", n.forEach(function(a, c) {
                            g.drawImage(a, 0, 0, l , m );
                            var e, f, i = g.getImageData(0, 0, l , m ).data,
                                j = [0, 0, 0];
                            for (e = 0, f = i.length; f > e; e += 4) j[0] += i[e], j[1] += i[e + 1], j[2] += i[e + 2];
                            h[c].querySelector(".marker").style.backgroundColor = "rgb(" + j.map(function(a) {
                                return a / (f / 4) >> 0
                            }).join() + ")", h[c].addEventListener("click", function() {
                                for (var e = 0, f = h.length; f > e; e++) h[e].className = "loaded";
                                h[c].className = "loaded selected", d(a, {
                                    duration: 800.0
                                })
                            }, !1)
                        }), b.steps[0]()
                    }
                })) : void c()
            };
            var o = 0,
                p = -15;
            b.steps.push(function() {
                b.timeFactor = 1, d(n[0], {
                    duration: 3e3 / b.timeFactor
                }), b.makeStep({
                    duration: 3e3 / b.timeFactor,
                    transition: Fx.Transition.linear,
                    cameraFrom: -3,
                    cameraTo: -5.4,
                    latFrom: 0,
                    lonFrom: 0,
                    latTo: 39 + o,
                    lonTo: -100 + p,
                    onComplete: function() {
                        console.log("complete")
                    }
                })
            }), b.timeFactor = 1
        }), define("main", function() {})
}();
