import express from "express"
import path from"path";
import cors from 'cors'

import { config } from "dotenv";
import { fileURLToPath } from 'url';

import dbConnect from "./db/dbConnect.js";
import Model from "./routes/productRoute.js";


const app = express();
config();
dbConnect();

app.use(cors())
app.use(express.json())
 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "../client/dist/")));
app.use(express.urlencoded({extended:true}));

// routes
app.use('/api/', Model)

app.use((req, res, next) => {
  if (/(.ico|.js|.css|.jpg|.png|.map)$/i.test(req.path)) {
    next();
  } else {
    res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
    res.header("Expires", "-1");
    res.header("Pragma", "no-cache");
    res.sendFile(path.join(__dirname, "../client/dist/", "index.html"));
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));