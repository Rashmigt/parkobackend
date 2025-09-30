// DOT ENV CONFIGURATION
require("dotenv").config();

// IMPORTING MODULES
const mongoose = require("mongoose");

// DATABASE CONFIGURATION
const connectDatabase = async () => {
  try {
    DATABASE_STRING = `mongodb+srv://basedb_admin:iEOIUEeEaQjFgWV9@basedb.u992lst.mongodb.net/parkodb?retryWrites=true&w=majority`;
    await mongoose
      .connect(DATABASE_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Database Connected ✅");
      })
      .catch((error) => {
        console.error("Database Connection Error ❌", error);
      });
  } catch (error) {
    console.log("Database Connection Error ❌", error);
  }
};

// EXPORTING MODULE
module.exports = { CONNECTDATABSE: connectDatabase };
