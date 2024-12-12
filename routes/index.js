import express from "express";
import needle from "needle";

//Env variables
const API_BASE_URL = process.env.API_BASE_URL;
const API_KEY_NAME = process.env.API_KEY_NAME;
const API_KEY_VALUE = process.env.API_KEY_VALUE;
const router = express.Router();
router.get("/", async (req, res) => {
    try {
      const apiRes = await needle("get", `${API_BASE_URL}`);
      const data = apiRes.body;
      res.status(200).json(data);  
    } catch (error) {
        
    }
  
});

export default router;
