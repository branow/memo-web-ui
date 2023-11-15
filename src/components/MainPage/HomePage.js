import { useContext } from "react";
import GetStartedSection from "./GetStartedSection";
import MemorizeSection from "./MemorizeSection";
import { UserContext } from "../App";

const HomePage = () => {
    const userState = useContext(UserContext);

    return (  
        <div>
            <GetStartedSection></GetStartedSection>
            <MemorizeSection></MemorizeSection>
        </div>
    );
}
 
export default HomePage;


