import Logo from "../constant/Icons/Logo";
import Image from "../CollectionPage/Image";
import { Link } from "react-router-dom";

const AboutPage = () => {
    return (
      <div className="w-full bg-dark-grey text-white font-sans">
        <div className="px-[15vw] py-[5vh]">
          <div className="text-5xl font-semibold text-center">About</div>
          <div className="flex flex-row gap-[10vw] my-[8vh] justify-center">
            <div className="flex flex-col w-[33vw]">
              <div className="text-3xl text-center my-[2vh]">
                Project description
              </div>
              <div className="text-2xl text-gray-300 flex flex-col gap-4">
                <div>
                  This project was made with the aim of implementing a
                  convenient and accessible application that allows you to study
                  any material using electronic flash cards.
                </div>
                <div>
                  The application is more focused on learning English vocabulary
                  and offers users features that allow them to automatically
                  download information about the desired word in the form of
                  definition, transcription, pictures, and pronunciation
                </div>
              </div>
            </div>
            <div className="m-auto">
              <Logo />
            </div>
          </div>
          <div className="flex flex-row gap-[10vw] my-[15vh] justify-center">
            <div className="h-[20vw] m-auto">
              <Image src="https://classmaster.io/wp-content/uploads/2020/12/Flashcards_Bigicon_600h-1.png" />
            </div>
            <div className="flex flex-col w-[33vw]">
              <div className="text-3xl text-center my-[2vh]">
                History of creation
              </div>
              <div className="text-2xl text-gray-300 flex flex-col gap-4">
                <div>
                  The idea for the project came about after we began to deepen
                  our knowledge of English and look for sources to learn it. So
                  we have various resources like Quizlet, but we always lacked
                  something in them. That's why we decided to create an app that
                  would satisfy our own needs and also be useful to someone
                  else.
                </div>
                <div>
                  After we got the assignment for the course project, we
                  immediately realized that we could create a web application
                  that would be useful not only for the course project but also
                  for us, since we needed such a resource for learning English
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-[10vw] my-[15vh] justify-center">
            <div className="flex flex-col w-[33vw]">
              <div className="text-3xl text-center my-[2vh]">
                Used technologies
              </div>
              <div className="text-2xl text-gray-300 flex flex-col gap-4">
                <div>
                  The following technologies were used to create this web
                  application:
                </div>
                <div>
                  To create the back-end, the Java programming language was
                  used, and the Spring framework was also used. The front-end
                  was created using the ReactJS framework. And for the database,
                  we used the MySQL relational database management system.
                </div>
              </div>
            </div>
            <div className="w-[35vw] grid grid-cols-2 gap-[30px]">
              <div className="h-[8vw]">
                <Image src="https://1000logos.net/wp-content/uploads/2020/09/Java-Logo.png" />
              </div>
              <div className="h-[3vw] m-auto">
                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Spring_Framework_Logo_2018.svg/2560px-Spring_Framework_Logo_2018.svg.png" />
              </div>
              <div className="h-[12vw]">
                <Image src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" />
              </div>
              <div className="h-[7vw] m-auto">
                <Image src="https://upload.wikimedia.org/wikipedia/labs/8/8e/Mysql_logo.png" />
              </div>
            </div>
          </div>
          <div className="text-2xl text-center">
            If you have any questions or suggestions, or find any bugs, please
            write to us on{" "}
            <Link>
              <span className="hover:text-blue-600 hover:underline">
                Telegram
              </span>
            </Link>
          </div>
        </div>
      </div>
    );
}
 
export default AboutPage;