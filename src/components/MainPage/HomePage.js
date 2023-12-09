import GetStartedSection from "./GetStartedSection";
import MemorizeSection from "./MemorizeSection";
import { memo } from "react";

const HomePage = memo(() => {
    return (  
        <div className="bg-charcoal">
            <GetStartedSection />
            <MemorizeSection />
        </div>
    );
});
 
export default HomePage;


