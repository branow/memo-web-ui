export const collection = {
  collectionId: "1",
  collectionName: "Collection1",
  size: "2",
  flashcardIds: [5417, 5418], //Integer
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
};