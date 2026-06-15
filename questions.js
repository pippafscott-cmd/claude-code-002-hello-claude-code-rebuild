// ============================================================
// YOUR QUIZ — edit this file to make it yours!
// ============================================================
//
// This is the only file you need to change.
// Ask Claude to help you add questions, update the answers,
// and write results messages that fit your personality.
//
// HOW IT WORKS:
//   - Add as many questions as you like to the array below
//   - Each question has 4 options and one correct answer
//   - "correct" is the index of the right answer (0, 1, 2, or 3)
//   - The results messages show based on how well the quiz-taker scores
// ============================================================

const quizConfig = {

  // Your name — shown on the intro screen
  name: "Pippa",

  // The tagline shown under your name on the intro screen
  intro: "Think you know me? There's only one way to find out.",

  // Messages shown on the results screen based on score
  results: {
    high: "You really know me! We must be close. 🎉",   // 80% or above
    mid:  "Not bad — but there's definitely more to learn about me.",  // 50–79%
    low:  "Looks like we need to hang out more. Come find me!",        // below 50%
  },

  // Your questions — replace these two examples with your own!
  questions: [
    {
      question: "What is my favourite color?",
      options: ["Green", "Blue", "Purple", "Red"],
      correct: 0,  // Green
    },
    {
      question: "What superpower would I want to have?",
      options: ["Teleportation", "Telekinesis", "Flying", "Shapeshifting"],
      correct: 3,  // Shapeshifting
    },
    {
      question: "Where was I born?",
      options: ["San Francisco", "New York", "Chicago", "Los Angeles"],
      correct: 0,  // San Francisco
    },
    {
      question: "True or false: I like potatoes?",
      options: ["True", "False", "Only as chips", "Depends on how they're cooked"],
      correct: 1,  // False
    },
    {
      question: "What is my zodiac sign?",
      options: ["Leo", "Scorpio", "Gemini", "Virgo"],
      correct: 0,  // Leo
    },
    {
      question: "Where have I NOT traveled to?",
      options: ["Greece", "Austria", "Portugal", "England"],
      correct: 2,  // Portugal
    },
    {
      question: "How many toes do I have?",
      options: ["8", "9", "10", "11"],
      correct: 2,  // 10
    },
  ],

};
