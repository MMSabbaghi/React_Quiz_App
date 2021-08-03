const dbQuestions = [
  {
    id: 1,
    description: "Inside which HTML element do we put the JavaScript?",
    choices: [
      { questionId: 1, slot: 1, text: " <script>", isCorrect: true },
      { questionId: 1, slot: 2, text: " <javascript>", isCorrect: false },
      { questionId: 1, slot: 3, text: " <scripting>", isCorrect: false },
      { questionId: 1, slot: 4, text: " <js>", isCorrect: false },
    ],
    lastChoice: 0,
  },
  {
    id: 2,
    description: "Where is the correct place to insert a JavaScript?",
    choices: [
      { questionId: 2, slot: 1, text: " The <head> section", isCorrect: false },
      {
        questionId: 2,
        slot: 2,
        text: " Both the <head> section and the <body> section are correct",
        isCorrect: true,
      },
      { questionId: 2, slot: 3, text: " The <body> section", isCorrect: false },
    ],
    lastChoice: 0,
  },
  {
    id: 3,
    description:
      'What is the correct syntax for referring to an external script called "xxx.js"?',
    choices: [
      {
        questionId: 3,
        slot: 1,
        text: ' <script src="xxx.js">',
        isCorrect: true,
      },
      {
        questionId: 3,
        slot: 2,
        text: ' <script name="xxx.js">',
        isCorrect: false,
      },
      {
        questionId: 3,
        slot: 3,
        text: ' <script href="xxx.js">',
        isCorrect: false,
      },
    ],
    lastChoice: 0,
  },
];

export default dbQuestions;
