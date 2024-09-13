import express from 'express';
import axios from 'axios';
import cors from 'cors';  // Import du middleware CORS
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3000;
const key = process.env.GEMINI_API_KEY;

if (!key) {
  throw new Error("La clé API n'est pas définie dans les variables d'environnement.");
}

// Utilisation de cors pour autoriser toutes les origines (tu peux le restreindre si besoin)
app.use(cors());
app.use(express.json());

app.post('/api/generate-content', async (req, res) => {
    try {
    const response = await axios.post('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent', req.body, {
      headers: {
        'Content-Type': 'application/json',
      },
      params: {
        key: key,  // Utilisation de la clé API ici
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error(error.message);  // Log d'erreur pour plus de clarté
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
