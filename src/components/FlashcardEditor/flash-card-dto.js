

const flashcardDto = {
  flashcardId: 5417,
  frontSide: {
    textId: 4516,
    text: "measured or judged by how similar or different it is to something else\nThen he was living in comparative comfort (= compared with others or with his own life at a previous time).\nThe company is a comparative newcomer to the software market (= other companies have been in business much longer).",
    format: "",
    image: {
      mediaId: '4564',
      mediaUrl: 'https://www.kdnuggets.com/wp-content/uploads/tree-todd-quackenbush-unsplash.jpg',
    },
    audio: null,
  },
  backSide:  {
    textId: 4517,
    text: "comparative",
    format: "",
    image: null,
    audio: {
      mediaId: '561665',
      mediaUrl: 'https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/c/com/compa/comparative__gb_1.mp3',
    }
  },
  scores: [
    {
      studyType: {
        studyId: "1",
        studyName: "memorization",
      }, //StudyTypeDto
      score: "35",
      resetTime: "4d 2h",
    },
    {
      studyType: {
        studyId: "2",
        studyName: "writing",
      }, //StudyTypeDto
      score: "83",
      resetTime: "21h",
    },
  ], //ScoreAggregatedDto
}

export default flashcardDto;
