export const module = {
  moduleId: "1",
  moduleName: "First Module",
  description:
    "Some module descriptiond asd asda asdasd asdas dasdsa asdasdas asdas d awdwad aw dssas asdasdaasdasd asdasd asdasdsd asdasdasd sadasd",
  access: "public",
  collections: [
    {
      collectionId: "1",
      collectionName: "Collection1",
      size: "4",
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
      ],
    },
    {
      collectionId: "2",
      collectionName: "Collection2",
      size: "10",
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
      ],
    },
    {
      collectionId: "3",
      collectionName: "Collection3",
      size: "20",
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
      ],
    },
  ],
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
  ],
};

