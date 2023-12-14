export { isSatisfactoryModule };

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
