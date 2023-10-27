const MemorizeSection = () => {
    return ( 
    <section className="relative h-[60vh] w-full text-center">
      <div className="relative inline-block w-[40vw] text-white bottom-[20vh] text-left">
        <span className="text-4xl font-semibold"
          >Memorize anything with free digital flashcards</span>
        <div className="text-xl mt-[5vh]">
          <span
            >Research shows that self-testing using flashcards is more effective
            than rereading notes. Find ready-made flashcards created by your
            peers and teachers, or create your own instantly.</span>
        </div>
      </div>
      <div className="inline-block max-w-[50vw] h-auto mt-[10vh] ml-[10vh]">
        <img src="img/memorize_section_img.jpg" alt="" />
      </div>
    </section>
     );
}
 
export default MemorizeSection;