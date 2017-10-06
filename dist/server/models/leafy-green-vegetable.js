"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var leafyGreenVegetableSchema = new mongoose.Schema({
    name: String,
    weight: Number,
    age: Number
});
var leafyGreenVegetable = mongoose.model('leafyGreenVegetableSchema', leafyGreenVegetableSchema);
exports.default = leafyGreenVegetable;
//# sourceMappingURL=leafy-green-vegetable.js.map