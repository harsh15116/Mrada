const mongoose = require("mongoose");

const mongoURL = "mongodb+srv://harshsingh15116:Atulsingh15116@cluster0.odkfz.mongodb.net/gofoodmern?retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    // Connect to MongoDB using async/await
    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
     useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB successfully");
    const fetched_data= await mongoose.connection.db.collection('food_items');
    const data = await fetched_data.find({}).toArray();
      global.food_items = data;
      console.log(global.food_items);
    const Category_data = await mongoose.connection.db.collection("foodCategory");
    const data2 = await Category_data.find({}).toArray();
    global.foodCategory= data2;
    console.log(global.foodCategory)
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit the process if there's an error
  }
};

module.exports = mongoDB;
