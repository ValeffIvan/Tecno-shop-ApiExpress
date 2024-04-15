import {connectMongo} from './src/db/db.mjs'
import {productRoutes} from './src/routes/product.route.js'
import {userRoutes} from './src/routes/user.route.js'

const express = require('express')
const app = express()

app.use(express.json());

connectMongo()
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(productRoutes);
app.use(userRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server Listening on PORT:", port);
  });

