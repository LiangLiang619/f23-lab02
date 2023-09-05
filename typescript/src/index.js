"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var renderer_js_1 = require("./renderer.js");
var rectangle_js_1 = require("./shapes/rectangle.js");
var rectangle = (0, rectangle_js_1.newRectangle)(2, 3);
var renderer = (0, renderer_js_1.newRenderer)(rectangle);
renderer.draw();
