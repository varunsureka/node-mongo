require('dotenv').config()
const mongoose = require('mongoose');
mongoose.connect(`mongodb://${process.env.DB_HOST}/my-db`)
.then(
    (response) => {
        console.log('connected successfully');
    }
).catch(
    (err) => {
        console.log(err)
    }
);

//creating schema

const courseSchema = mongoose.Schema({
    name: String,
    price: Number,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
  });

  //creating a model

const Course = mongoose.model("Course", courseSchema);
async function createCourse() {
  const course = new Course({
    name: "React Js Course",
    price: 20,
    author: "Varun Surekha",
    tags: ["react js", "frontend"],
    isPublished: false,
  });

  const result = await course.save();
  console.log(result);
}
createCourse();