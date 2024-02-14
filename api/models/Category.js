const mongoose = require("mongoose")



const CategorySchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        }
    },

{timestamp:true}
);

export const Book = mongoose.model('Category', CategorySchema);