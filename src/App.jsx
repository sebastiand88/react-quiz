import { useEffect, useMemo, useState } from "react";
import Quiz from "./components/Quiz";
import Timer from "./components/Timer";
import Start from "./components/Start";
import "./app.css";

function App() {
  const [username, setUsername] = useState(null);
  const [questionNr, setQuestionNr] = useState(1);
  const [stop, setStop] = useState(false);
  const [won, setWon] = useState("£ 0 😥");

  const data = [
    {
      id: 1,
      question: "What's is 12+200?",
      answers: [
        {
          text: "122",
          correct: false,
        },
        {
          text: "112",
          correct: false,
        },
        {
          text: "212",
          correct: true,
        },
        {
          text: "211",
          correct: false,
        },
      ],
    },

    {
      id: 2,
      question: "Whose nose grew longer every time he lied?",
      answers: [
        {
          text: "Sam",
          correct: false,
        },
        {
          text: "Geppetto",
          correct: false,
        },
        {
          text: "Simbad",
          correct: false,
        },
        {
          text: "Pinocchio",
          correct: true,
        },
      ],
    },

    {
      id: 3,
      question: "On which holiday do you go trick-or-treating?",
      answers: [
        {
          text: "Easter",
          correct: false,
        },
        {
          text: "Christmas",
          correct: false,
        },
        {
          text: "Halloween",
          correct: true,
        },
        {
          text: "New Year",
          correct: false,
        },
      ],
    },

    {
      id: 4,
      question: "Where is the Great Pyramid of Giza?",
      answers: [
        {
          text: "Egypt",
          correct: true,
        },
        {
          text: "Japan",
          correct: false,
        },
        {
          text: "Russia",
          correct: false,
        },
        {
          text: "Mexico",
          correct: false,
        },
      ],
    },

    {
      id: 5,
      question: "How many planets are in our solar system?",
      answers: [
        {
          text: "Three",
          correct: false,
        },
        {
          text: "Eight",
          correct: true,
        },
        {
          text: "Six",
          correct: false,
        },
        {
          text: "Twelve",
          correct: false,
        },
      ],
    },

    {
      id: 6,
      question: "H2O is the chemical formula for what?",
      answers: [
        {
          text: "Bauxite",
          correct: false,
        },
        {
          text: "Acetylene",
          correct: false,
        },
        {
          text: "Water",
          correct: true,
        },
        {
          text: "Carbon Dioxide",
          correct: false,
        },
      ],
    },

    {
      id: 7,
      question: "What is the capital of New Zealand?",
      answers: [
        {
          text: "Wellington",
          correct: true,
        },
        {
          text: "Manila",
          correct: false,
        },
        {
          text: "Canberra",
          correct: false,
        },
        {
          text: "Hawke's Bay",
          correct: false,
        },
      ],
    },

    {
      id: 8,
      question: "What is the currency of Denmark?",
      answers: [
        {
          text: "Lev",
          correct: false,
        },
        {
          text: "Krone",
          correct: true,
        },
        {
          text: "Hryvnia",
          correct: false,
        },
        {
          text: "Baht",
          correct: false,
        },
      ],
    },

    {
      id: 9,
      question: "What are the five colours of the Olympic rings?",
      answers: [
        {
          text: "Orange, Red, Green, Blue and Yellow.",
          correct: false,
        },
        {
          text: "Black, Green, Yellow, White and Red.",
          correct: false,
        },
        {
          text: "Yellow, Orange, White, Green and Purple.",
          correct: false,
        },
        {
          text: "Blue, Yellow, Black, Green and Red.",
          correct: true,
        },
      ],
    },

    {
      id: 10,
      question:
        "What is the only American state with a name that consists of just one syllable?",
      answers: [
        {
          text: "Utah",
          correct: false,
        },
        {
          text: "Maine",
          correct: true,
        },
        {
          text: "Texas",
          correct: false,
        },
        {
          text: "Iowa",
          correct: false,
        },
      ],
    },

    {
      id: 11,
      question:
        "Name the composer behind the soundtracks of The Lion King, Inception and Pirates of the Caribbean.",
      answers: [
        {
          text: "James Dillon",
          correct: false,
        },
        {
          text: "Arvo Part",
          correct: false,
        },
        {
          text: "Hanz Zimmer",
          correct: true,
        },
        {
          text: "Mark-Anthony Turnage",
          correct: false,
        },
      ],
    },

    {
      id: 12,
      question: "How many keys are there on a piano?",
      answers: [
        {
          text: "94",
          correct: false,
        },
        {
          text: "62",
          correct: false,
        },
        {
          text: "88",
          correct: true,
        },
        {
          text: "82",
          correct: false,
        },
      ],
    },

    {
      id: 13,
      question:
        "Which Stephen King novel takes place mostly in the fictional Overlook Hotel?",
      answers: [
        {
          text: "The Stand",
          correct: false,
        },
        {
          text: "The Shining",
          correct: true,
        },
        {
          text: "Pet Sematary",
          correct: false,
        },
        {
          text: "The Institute",
          correct: false,
        },
      ],
    },

    {
      id: 14,
      question: "How many permanent teeth does a dog have?",
      answers: [
        {
          text: "48",
          correct: false,
        },
        {
          text: "44",
          correct: false,
        },
        {
          text: "42",
          correct: true,
        },
        {
          text: "52",
          correct: false,
        },
      ],
    },

    {
      id: 15,
      question:
        "In terms of volume, which is the largest fresh lake in the world?",
      answers: [
        {
          text: "Lake Baikal in southern Siberia, Russia",
          correct: true,
        },
        {
          text: "Lake Victoria, Africa",
          correct: false,
        },
        {
          text: "Lake Superior in north America",
          correct: false,
        },
        {
          text: "Lake Michigan, USA",
          correct: false,
        },
      ],
    },
  ];

  const prisePyramid = useMemo(
    () =>
      [
        { id: 1, amount: "£ 10" },
        { id: 2, amount: "£ 20" },
        { id: 3, amount: "£ 30" },
        { id: 4, amount: "£ 40" },
        { id: 5, amount: "£ 50" },
        { id: 6, amount: "£ 60" },
        { id: 7, amount: "£ 70" },
        { id: 8, amount: "£ 80" },
        { id: 9, amount: "£ 90" },
        { id: 10, amount: "£ 100" },
        { id: 11, amount: "£ 200" },
        { id: 12, amount: "£ 400" },
        { id: 13, amount: "£ 600" },
        { id: 14, amount: "£ 800" },
        { id: 15, amount: "£ 1000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    if (questionNr > 1) {
      setWon(prisePyramid.find(m => m.id === questionNr - 1).amount);
      questionNr > 15 && setStop(true);
    } else {
    }
  }, [prisePyramid, questionNr]);

  return (
    <div className="app">
      {username ? (
        <>
          <div className="main">
            {stop ? (
              <h1 className="endText">
                You Won: {won}
                <button
                  className="playAgainBtn"
                  onClick={() => window.location.reload(false)}
                >
                  Play Again
                </button>
              </h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer setStop={setStop} questionNr={questionNr} />
                  </div>
                </div>
                <div className="bottom">
                  <Quiz
                    data={data}
                    setStop={setStop}
                    questionNr={questionNr}
                    setQuestionNr={setQuestionNr}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="prise">
              {prisePyramid.map(m => (
                <li
                  className={
                    questionNr === m.id
                      ? "priseListItem active"
                      : "priseListItem"
                  }
                >
                  <span className="priseListItemNumber">{m.id}</span>
                  <span className="priseListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <Start setUsername={setUsername} />
      )}
    </div>
  );
}

export default App;
