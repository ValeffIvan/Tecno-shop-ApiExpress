import mongoose from "mongoose";

export const connectMongo = async () => {
  try {
    const db = {
      uri: "mongodb://localhost:27017/", 
      databaseName: "Tecno-Shop" 
    };

    await mongoose.connect(db.uri + db.databaseName);
    console.log("Base de Datos conectada");
  } catch (error) {
    console.error("Error al conectarse a la Base de Datos:", error.message);
  }
};
