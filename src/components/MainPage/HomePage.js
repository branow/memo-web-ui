import GetStartedSection from "./GetStartedSection";
import MemorizeSection from "./MemorizeSection";

const HomePage = ({user}) => {
    return (  
        <div>
            <GetStartedSection user={user}></GetStartedSection>
            <MemorizeSection></MemorizeSection>
        </div>
    );
}
 
export default HomePage;


