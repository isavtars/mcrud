
import mongoose from "mongoose";


const bookaddSchema= new mongoose.Schema({

name:{
    type:String,
    required:true,
    minlength:2,
},


author:{
    type:String,
    required:true,
    minlength:2,
},

gener:{
    type:String,
    required:true,
    minlength:2,
},


decriprions:{
    type:String,
    required:true,
    minlength:2,
},
image:{
    type:String,
    required:true,

},

})


const bookmodel= new mongoose.model("book",bookaddSchema);

export default bookmodel;