import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ApiRequest, jsonCreator } from "../../api";

function QuestionPart() {
  const { type } = useParams<{ type: string }>(); // Récupérer le paramètre "type" de l'URL
  const [selectedType, setSelectedType] = useState(type); // Stocker le type sélectionné
  const navigate = useNavigate(); // Pour naviguer dynamiquement dans l'URL
  const [reponse, setReponse] = useState("");
  const [estCorrect, setEstCorrect] = useState<boolean | null>(null);
  const [questionActuelle, setQuestionActuelle] = useState("");
  const [inputLocked, setInputLocked] = useState(false);
  const [bonneReponse, setBonneReponse] = useState("");

  // Lancer une nouvelle question lorsqu'on arrive sur la page
  useEffect(() => {
    nouvelleQuestion();
  }, [selectedType]); // Dépendance à `selectedType` pour relancer si le type change

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && !inputLocked) {
      const reponseUtilisateur = (event.target as HTMLInputElement).value;
      setReponse(reponseUtilisateur);

      // Vérification de la réponse
      if (reponseUtilisateur.toLowerCase() === bonneReponse.toLowerCase()) {
        setEstCorrect(true);
      } else {
        setEstCorrect(false);
      }

      // Verrouille le champ une fois que la réponse est soumise
      setInputLocked(true);
    }
  };

  const nouvelleQuestion = async () => {
    const data = jsonCreator(selectedType ?? "");
    const question = await ApiRequest(data);
    if (typeof question === "object") {
      setQuestionActuelle(question[0]);
      console.log(question[1])
      setBonneReponse(question[1]);
    } else {
      console.error('Unexpected response from ApiRequest');
    }
    setReponse("");
    setEstCorrect(null);
    setInputLocked(false);
  };

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newType = event.target.value;
    setSelectedType(newType);
    navigate(`/question/${newType}`); // Naviguer vers une nouvelle URL avec le type mis à jour
  };

  return (
    <>
      <div className="w-64 mx-auto pt-9">
        <select
          id="combo-box"
          name="combo-box"
          className="block w-full bg-white border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm text-center"
          value={selectedType}
          onChange={handleTypeChange} 
        >
          <option value="" disabled>
            Sujet
          </option>
          <option value="Histoire">Histoire</option>
          <option value="Geographie">Geographie</option>
          <option value="Personnalité">Personnalité</option>
          <option value="Musique">Musique</option>
          <option value="Art">Art</option>
        </select>
      </div>
      <div className="pt-10 text-center">
        <p className="text-2xl">Question</p>
        <p className="pt-2">{questionActuelle}</p>

        <div className="flex justify-center pt-4">
          <input
            type="text"
            value={reponse}
            className={`border rounded px-3 py-2 w-64 
                     ${estCorrect === true ? "bg-green-500" : ""} 
                     ${estCorrect === false ? "bg-red-500" : ""}`}
            placeholder="Votre réponse ici"
            onKeyDown={handleKeyDown}
            onChange={(e) => setReponse(e.target.value)}
            disabled={inputLocked}
          />
        </div>

        <div className="pt-4">
          {estCorrect === false && (
            <p className="mt-2 text-red-500">{bonneReponse}</p>
          )}
        </div>

        <div>
          {estCorrect != null && (
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={nouvelleQuestion}
            >
              Question suivante
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default QuestionPart;
