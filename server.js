import express from 'express';
import axios from 'axios';
import cors from 'cors'; 
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3000;
const key = process.env.GEMINI_API_KEY;

if (!key) {
  throw new Error("La clé API n'est pas définie dans les variables d'environnement.");
}

app.use(cors());
app.use(express.json());

app.post('/api/generate-content', async (req, res) => {
    try {
    const response = await axios.post('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent', req.body, {
      headers: {
        'Content-Type': 'application/json',
      },
      params: {
        key: key,  
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error(error.message);  
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
