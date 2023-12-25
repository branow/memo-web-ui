export {
  isSatisfactoryModule,
  isSatisfactoryCollection,
  isSatisfactoryFlashcard,
};

function isSatisfactoryFlashcard(flashcard, query) {
  if (query) {
    query = query.toLowerCase();
    return (
      isSatisfactoryString(flashcard.frontSide.text, query) ||
      isSatisfactoryString(flashcard.backSide.text, query)
    );
  } else {
    return true;
  }
}

function isSatisfactoryCollection(collection, query) {
  if (query) {
    query = query.toLowerCase();
    return (
      isSatisfactoryString(collection.collectionName, query) ||
      isSatisfactoryString(collection.size, query)
    );
  } else {
    return true;
  }
}

function isSatisfactoryModule(module, query) {
  if (query) {
    query = query.toLowerCase();
    return (
      isSatisfactoryString(module.moduleName, query) ||
      isSatisfactoryString(module.shortDescription, query) ||
      isSatisfactoryString(module.access, query) ||
      module.collections.some((collection) =>
        collection.collectionName.toLowerCase().includes(query)
      )
    );
  } else {
    return true;
  }
}

function isSatisfactoryString(str, query) {
  return str && str.toLowerCase().includes(query);
}
