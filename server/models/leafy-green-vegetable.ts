import * as mongoose from 'mongoose';

const leafyGreenVegetableSchema = new mongoose.Schema({
  name: String,
  weight: Number,
  age: Number
});

const leafyGreenVegetable = mongoose.model('leafyGreenVegetableSchema', leafyGreenVegetableSchema);

export default leafyGreenVegetable;
