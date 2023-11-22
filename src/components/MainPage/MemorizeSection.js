import { memo } from "react";

const MemorizeSection = memo(() => {
    return (
      <div className="relative h-fit w-screen p-[3vw] text-center flex">
        <div className="relative w-[40vw] p-[2vw] text-white  text-left">
          <span className="text-4xl font-semibold">
            Memorize anything with free digital flashcards
          </span>
          <div className="text-xl mt-[5vh]">
            <span>
              Research shows that self-testing using flashcards is more
              effective than rereading notes. Find ready-made flashcards created
              by your peers and teachers, or create your own instantly.
            </span>
          </div>
        </div>
        <div className="max-w-[50vw] h-auto m-auto">
          <img src="img/memorize_section_img_2.jpg" alt="" />
        </div>
      </div>
    );
});
 
export default MemorizeSection;