import ImageSearchContent from "./ImageSearchContent";
import WebSearch from "./WebSearch";

const ImageWebSearch = ({ choose }) => {
  return (
    <>
      <WebSearch
        defaultQuery={null}
        Content={ImageSearchContent}
        choose={choose}
      />
    </>
  );
};

export default ImageWebSearch;
