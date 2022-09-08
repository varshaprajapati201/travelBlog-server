import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

const articleSchema = mongoose.Schema({
    title: String,
    category: String,
    content: String
});

autoIncrement.initialize(mongoose.connection);
articleSchema.plugin(autoIncrement.plugin, "Article")

const Article = mongoose.model("Article",articleSchema);

export default Article;