export {
  isSatisfactoryModule,
  isSatisfactoryCollection,
  isSatisfactoryFlashcard,
};

function isSatisfactoryFlashcard(flashcard, query) {
  if (query) {
    query = query.toLowerCase();
    return (
      flashcard.frontSide.text.toLowerCase().includes(query) ||
      flashcard.backSide.text.toLowerCase().includes(query)
    );
  } else {
    return true;
  }
}

function isSatisfactoryCollection(collection, query) {
  if (query) {
    query = query.toLowerCase();
    return (
      collection.collectionName.toLowerCase().includes(query) ||
      collection.size.toString().toLowerCase().includes(query)
    );
  } else {
    return true;
  }
}

function isSatisfactoryModule(module, query) {
  if (query) {
    query = query.toLowerCase();
    return (
      module.moduleName.toLowerCase().includes(query) ||
      module.shortDescription.toLowerCase().includes(query) ||
      module.access.toLowerCase().includes(query) ||
      module.collections.some((collection) =>
        collection.collectionName.toLowerCase().includes(query)
      )
    );
  } else {
    return true;
  }
}
