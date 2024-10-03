const mongoose = require("mongoose")

const connectDatabase =async  () => {
    try {
        await mongoose.connect("mongodb+srv://anshtalaviya22:nJMd6rcNbLcUPrpT@cluster0.czh4e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("MongoDB Connection Successfully")
        
    } catch (error) {
        console.log(error)
    }



}

module.exports = connectDatabase


// nJMd6rcNbLcUPrpT
// anshtalaviya22