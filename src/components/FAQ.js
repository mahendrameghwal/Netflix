
import Faq from "react-faq-component";



const data = {
    title: "Frequently Asked Questions",
    rows: [
        {
            title: "What is Netflix ?",
            content: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.

            You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!`,
        },
        {
            title: "How much does Netflix cost ?",
            content:
                "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.",
        },
        {
            title: "Where can I Watch ?",
            content: `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

            You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere. `,
        },
        {
            title: "How can I Cancel ?",
            content: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
        },
    ],
};

const styles = {
    bgColor: 'rgb(51, 51, 51)',
    titleTextColor: "white",
    rowTitleColor: "white",
    rowContentColor: 'white',
    arrowColor: "white",
    };

const config = {
    animate: true,
    arrowIcon: "+",
    tabFocus: true
};

const FAQ = () => {
  return (

    <div className="faq-div">
        <div className="faq">
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>

        </div>
    );
    

  }
export default FAQ