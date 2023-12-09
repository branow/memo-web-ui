import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useContext } from "react";
import { SearchContext } from "./SearchPage";
import ButtonWrapper from "../constant/Buttons/ButtonWrapper";
import {
  HiOutlineArrowCircleLeft,
  HiOutlineArrowCircleRight,
} from "react-icons/hi";
import { useHistory } from "react-router-dom";

const Navigation = () => {
  const history = useHistory();
  const { searchType, search, pageNumber, totalPagesState } =
    useContext(SearchContext);
  const { totalPages } = totalPagesState;

  const hasBack = () => pageNumber > 0;
  const hasNext = () => pageNumber < totalPages - 1;

  const next = () => {
    if (hasNext()) {
      history.push(
        `/search/${searchType}?search=${search}&page=${pageNumber + 2}`
      );
    }
  };

  const back = () => {
    if (hasBack()) {
      history.push(
        `/search/${searchType}?search=${search}&page=${pageNumber}`
      );
    }
  };

  return (
    <div className="w-[10vw] flex flex-row gap-[10px] justify-center items-center">
      <ButtonWrapper onClickAction={back} disabled={!hasBack()}>
        <HiOutlineArrowCircleLeft size="40px" />
      </ButtonWrapper>
      <div className="h-fit m-auto text-2xl font-medium">
        {totalPages > 0 ? pageNumber + 1 : pageNumber}/{totalPages}
      </div>
      <ButtonWrapper onClickAction={next} disabled={!hasNext()}>
        <HiOutlineArrowCircleRight size="40px" />
      </ButtonWrapper>
    </div>
  );
};

export default Navigation;
