import Navbar from "./constant-components/Navbar";
import GetStartedSection from "./MainPage-components/GetStartedSection";
import MemorizeSection from "./MainPage-components/MemorizeSection";
import '../input.css';
function MainPage() {
  return (
    <div className="bg-body-background-grey">
      <Navbar></Navbar>
      <GetStartedSection></GetStartedSection>
      <MemorizeSection></MemorizeSection>
    </div>
  );
}

export default MainPage;
