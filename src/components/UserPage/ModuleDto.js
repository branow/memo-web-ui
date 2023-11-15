export const modules = [
  {
    moduleId: "1",
    moduleName: "first Module",
    shortDescription: "Some module descriptiond asd asda asdasd asdas dasdsa asdasdas asdas d awdwad awd",
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
    scores: [75, 96], //ScoreAggregatedDto
  },
  {
    moduleId: "2",
    moduleName: "second Module",
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
    ], //CollectionShortDetailsDto
    scores: [35, 81], //ScoreAggregatedDto
  },
];
