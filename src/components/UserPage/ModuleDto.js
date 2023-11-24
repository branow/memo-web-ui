export const modules = [
  {
    moduleId: "1",
    moduleName: "First Module",
    shortDescription: "Some module descriptiond asd asda asdasd asdas dasdsa asdasdas asdas d awdwad aw dssas asdasdaasdasd asdasd asdasdsd asdasdasd sadasd",
    access: "public",
    collections: [
      {
        collectionId: "1",
        collectionName: "collection1",
        size: "4",
      },
      {
        collectionId: "2",
        collectionName: "collection2",
        size: "10",
      },
      {
        collectionId: "3",
        collectionName: "collection3",
        size: "24",
      },
    ], //CollectionShortDetailsDto
    scores: [
      {
        studyType: {
          studyId: '1',
          studyName: "memorization",
        }, //StudyTypeDto
        score:'67',
        resetTime:'1d 1h',
      },
      {
        studyType: {
          studyId: '2',
          studyName: "writing",
        }, //StudyTypeDto
        score:'83',
        resetTime:'2d 12h',
      }
    ], //ScoreAggregatedDto
  },
  {
    moduleId: "2",
    moduleName: "Second Module",
    shortDescription: "Some other module description",
    access: "private",
    collections: [
      {
        collectionId: "1",
        collectionName: "collection1",
        size: "45",
      },
      {
        collectionId: "2",
        collectionName: "collection2",
        size: "25",
      },
      {
        collectionId: "3",
        collectionName: "collection3",
        size: "47",
      },
      {
        collectionId: "4",
        collectionName: "collection4",
        size: "21",
      },
    ], //CollectionShortDetailsDto
    scores: [
      {
        studyType: {
          studyId: '1',
          studyName: "memorization",
        }, //StudyTypeDto
        score:'35',
        resetTime:'4d 2h',
      },
      {
        studyType: {
          studyId: '2',
          studyName: "writing",
        }, //StudyTypeDto
        score:'83',
        resetTime:'21h',
      }
    ], //ScoreAggregatedDto
  },
];
