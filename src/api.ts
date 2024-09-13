import axios from 'axios'; // Utilise import pour axios

export function jsonCreator(type: string) {
  let data = {
    "contents": [
      {
        "parts": [
          {
            "text": ""
          }
        ]
      }
    ]
  };

  // Modifier le texte en fonction du type
  if (type === "Geographie") {
    data.contents[0].parts[0].text = "Donne-moi une question géographique compliquée à laquelle on peut répondre en un mot. presede la reponse par **Réponse :** et ne rajoute pas de point apres la reponse ";
  } else if (type === "Histoire") {
    data.contents[0].parts[0].text = "Donne-moi une question historique compliquée à laquelle on peut répondre en un mot. presede la reponse par **Réponse :** et ne rajoute pas de point apres la reponse ";
  } else if (type === "Musique") {
    data.contents[0].parts[0].text = "Donne-moi une question musicale compliquée à laquelle on peut répondre en un mot. presede la reponse par **Réponse :** et ne rajoute pas de point apres la reponse ";
  } else if (type === "Art") {
    data.contents[0].parts[0].text = "Donne-moi une question Art compliquée à laquelle on peut répondre en un mot. presede la reponse par **Réponse :** et ne rajoute pas de point apres la reponse ";
  } else if (type === "Personnalité") {
    data.contents[0].parts[0].text = "Donne-moi une question personnalité célèbre compliquée à laquelle on peut répondre en un mot. presede la reponse par **Réponse :** et ne rajoute pas de point apres la reponse ";
  } else {
    data.contents[0].parts[0].text = "Donne-moi une question générale.";
  }

  // Convertir en JSON
  return JSON.stringify(data);
}


export async function ApiRequest(data: any) {
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:3000/api/generate-content',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };

  try {
    const response = await axios.request(config);
    console.log("Réponse de l'API :", response.data); // Vérifier la réponse
    const textContent = response.data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (textContent) {
      return parseQuestionAndAnswer(textContent);
    } else {
      throw new Error("Le format de la réponse ne correspond pas.");
    }
  } catch (error) {
    console.error("Erreur lors de la requête :", (error as any).message);
    return ["", ""];
  }
}

function parseQuestionAndAnswer(fullText: { split: (arg0: string) => [any, any]; }) {
  const [questionPart, answerPart] = fullText.split("**Réponse :**");

  const question = questionPart?.trim().split("\n").filter((line: string) => line.trim() !== "").join(" ") || "";
  const answer = answerPart?.trim().split("\n").filter((line: string) => line.trim() !== "").join(" ") || "";

  return [question, answer];
}

