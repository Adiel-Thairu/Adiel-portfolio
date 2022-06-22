import "./style.css";
import Slide from "../Slide";

const Slider = () => {
  const inputs = [
    {
      img: "/img/homesmart.jpg",
      alt: "Todo App",
      heading: "ModernLandingPage",
      span: "A MORDEN LANDING PAGE BUILT WITH HTML,CSS,JAVASCRIPT",
      link1: "https://github.com/Adiel-Thairu/Modern-landing-page-in-TailwindCss",
      link2: "https://modernlandingpagetailwindcss.netlify.app",
    },
    {
      img: "/img/marketting.jpg",
      alt: "Todo App",
      heading: "InstitutionalWebsite",
      span: "A MARKETING WEBSITE BUILT WITH HTML,Tailwind CSS ",
      link1: "https://github.com/Adiel-Thairu/tailwind-webapplication",
      link2: "https://adielthairu.netlify.app",
    },
    {
      img: "/img/educational.jpg",
      alt: "fayshop",
      heading: "ONLINE-ACCOUNTING WEBSITE",
      span: "HTML,CSS, JAVASCRIPT",
      link2: "https://github.com/Adiel-Thairu/HomeUItestpage",
      link1: "https://hometestuiwebpage.netlify.app",
    },

    {
      img: "/img/organo.jpg",
      alt: "foodorder",
      heading: "FOOD-ORDER-APP",
      span: "HTML,CSS, JAVASCRIPT AND VUE",
      link1: "https://github.com/Adiel-Thairu/organic-landing-page-in-tailwindcss",
      link2: "https://organiclandingpage.netlify.app",
    },
    {
      img: "/img/ispmaps.jpg",
      alt: "expensetracker",
      heading: "ISP-MAP website",
      span: "HTML,CSS, JAVASCRIPT AND REACT",
      link1: "https://github.com/Adiel-Thairu/Google-maps-Isp",
      link2: "https://ispexperiencenetpap.netlify.app",
    },
    {
      img: "/img/bootstrapcss.jpg",
      alt: "scitylana",
      heading: "ORGANIZATION WEBSITE",
      span: "HTML,CSS,JAVASCRIPT AND BOOTSTRAP FRAMEWORK",
      link1: "https://github.com/Adiel-Thairu/tailwind-webapplication",
      link2: "https://subtle-blancmange-75eeeb.netlify.app",
    },

    // {
    //   img: "/img/piggame.png",
    //   alt: "form",
    //   heading: "PIG GAME",
    //   span: "HTML,CSS, JAVASCRIPT AND REACT",
    //   link1: "https://github.com/FaithChinonso/Pig-Game",
    //   link2: "https://faithchinonso.github.io/Pig-Game/",
    // },

    // {
    //   img: "/img/mapty.png",
    //   alt: "mapty",
    //   heading: "MAPTY",
    //   span: "HTML,CSS, JAVASCRIPT AND API",
    //   link1: "https://github.com/FaithChinonso/MAPTY",
    //   link2: "https://faithchinonso.github.io/MAPTY/",
    // },
    //{
    //  img: "/img/bankistapp.png",
    //  alt: "bankistapp",
    //  heading:
    //    "BANKIST APP (username:fu, password:1111, use to log into the app)",
    //  span: "HTML,CSS AND JAVASCRIPT",
    //  link1: "https://github.com/FaithChinonso/Bankist-App",
    //  link2: "https://faithchinonso.github.io/Bankist-App/",
    //},
    // {
    //   img: "/img/bankistwebsite.png",
    //   alt: "bankistwebsite",
    //   heading: "BANKIST WEBSITE",
    //   span: "HTML,CSS AND JAVASCRIPT",
    //   link1: "https://github.com/FaithChinonso/Bankist-Website",
    //   link2: "https://faithchinonso.github.io/Bankist-Website/",
    // },
  ];
  return (
    <div className="slider">
      <Slide
        img={inputs[0].img}
        title={inputs[0].title}
        heading={inputs[0].heading}
        span={inputs[0].span}
        link1={inputs[0].link1}
        link2={inputs[0].link2}
      />
      <Slide
        img={inputs[1].img}
        title={inputs[1].title}
        heading={inputs[1].heading}
        span={inputs[1].span}
        link1={inputs[1].link1}
        link2={inputs[1].link2}
      />
      <Slide
        img={inputs[2].img}
        title={inputs[2].title}
        heading={inputs[2].heading}
        span={inputs[2].span}
        link1={inputs[2].link1}
        link2={inputs[2].link2}
      />
      <Slide
        img={inputs[3].img}
        title={inputs[3].title}
        heading={inputs[3].heading}
        span={inputs[3].span}
        link1={inputs[3].link1}
        link2={inputs[3].link2}
      />
      <Slide
        img={inputs[4].img}
        title={inputs[4].title}
        heading={inputs[4].heading}
        span={inputs[4].span}
        link1={inputs[4].link1}
        link2={inputs[4].link2}
      />
      <Slide
        img={inputs[5].img}
        title={inputs[5].title}
        heading={inputs[5].heading}
        span={inputs[5].span}
        link1={inputs[5].link1}
        link2={inputs[5].link2}
      />
      {/*<Slide
        img={inputs[6].img}
        title={inputs[6].title}
        heading={inputs[6].heading}
        span={inputs[6].span}
        link1={inputs[6].link1}
        link2={inputs[6].link2}
      />}
      { <Slide
        img={inputs[6].img}
        title={inputs[6].title}
        heading={inputs[6].heading}
        span={inputs[6].span}
        link1={inputs[6].link1}
        link2={inputs[6].link2}
      />
      <Slide
        img={inputs[7].img}
        title={inputs[7].title}
        heading={inputs[7].heading}
        span={inputs[7].span}
        link1={inputs[7].link1}
        link2={inputs[7].link2}
      />
      <Slide
        img={inputs[8].img}
        title={inputs[8].title}
        heading={inputs[8].heading}
        span={inputs[8].span}
        link1={inputs[8].link1}
        link2={inputs[8].link2}
      />
      <Slide
        img={inputs[9].img}
        title={inputs[9].title}
        heading={inputs[9].heading}
        span={inputs[9].span}
        link1={inputs[9].link1}
        link2={inputs[9].link2}
      />
      <Slide
        img={inputs[10].img}
        title={inputs[10].title}
        heading={inputs[10].heading}
        span={inputs[10].span}
        link1={inputs[10].link1}
        link2={inputs[10].link2}
      /> */}
      {/* <Slide
        img={inputs[11].img}
        title={inputs[11].title}
        heading={inputs[11].heading}
        span={inputs[11].span}
        link1={inputs[11].link1}
        link2={inputs[12].link2}
      />
      <Slide
        img={inputs[12].img}
        title={inputs[12].title}
        heading={inputs[12].heading}
        span={inputs[12].span}
        link1={inputs[12].link1}
        link2={inputs[12].link2}
      /> */}
    </div>
  );
};
export default Slider;
