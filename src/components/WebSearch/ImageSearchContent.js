import SearchedImage from "./SearchedImage";
import { useSearchImages } from "../../hooks/request/web-search";
import LoadingScreen from "../constant/LoadingScreen";
import ErrorBox from "../constant/ErrorBox";
import SubmitButton from "../constant/Buttons/SubmitButton";
import { useState } from "react";

const PAGE_SIZE = 12;

const ImageSearchContent = ({ query, choose }) => {
  const { imagesState, state } = useSearchImages(query);
  const [page, setPage] = useState(1);

  const images = [];
  if (imagesState.images) {
    for (
      let i = 0;
      i < imagesState.images.length && i < PAGE_SIZE * page;
      i++
    ) {
      images[i] = (
        <SearchedImage
          image={imagesState.images[i]}
          onDoubleClick={() => choose(imagesState.images[i].data)}
        />
      );
    }
  }

  return (
    <div>
      {state.pending && <LoadingScreen />}
      {state.error && (
        <ErrorBox title="Image search error" message={state.error} />
      )}
      {!state.error && images && images.length === 0 && (
        <div className="text-xl text-center text-white">
          No images found for this request. Please change your request in the search
          bar.
        </div>
      )}
      {imagesState.images && (
        <div className=" flex flex-col justify-center content-center">
          <div className="flex content-around justify-around flex-wrap">
            {images}
          </div>
          <div className="w-fit m-auto">
            {imagesState.images.length / PAGE_SIZE > page && (
              <SubmitButton
                actionName="More"
                onClickAction={(e) => setPage(page + 1)}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageSearchContent;
