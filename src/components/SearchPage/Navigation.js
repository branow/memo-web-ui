import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useContext } from "react";
import { SearchContext } from "./SearchPage";
import ButtonWrapper from "../constant/Buttons/ButtonWrapper";

const Navigation = () => {
  const { pageNumberState, totalPagesState } = useContext(SearchContext);
  const { pageNumber, setPageNumber } = pageNumberState;
  const { totalPages } = totalPagesState;

  const hasBack = () => pageNumber > 0;
  const hasNext = () => pageNumber < totalPages - 1;

  const next = () => {
    if (hasNext()) {
      setPageNumber(pageNumber + 1);
    }
  };

  const back = () => {
    if (hasBack()) {
      setPageNumber(pageNumber - 1);
    }
  };

  return (
    <div className="w-[10vw] flex flex-row gap-4">
      <ButtonWrapper onClickAction={back} disabled={!hasBack()}>
        <FaArrowLeft size="30px" />
      </ButtonWrapper>
      <div className="h-fit m-auto text-2xl font-medium">
        {totalPages > 0 ? pageNumber + 1 : pageNumber}/{totalPages}
      </div>
      <ButtonWrapper onClickAction={next} disabled={!hasNext()}>
        <FaArrowRight size="30px" />
      </ButtonWrapper>
    </div>
  );
};

export default Navigation;
