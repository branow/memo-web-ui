export { isSatisfactoryModule, isSatisfactoryCollection };

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
