import { styles } from "../styles";

const Hero = () => {
  return (
    <section
      className={`relative w-full min-h-screen mx-auto md:pt-[150px] pt-[100px] `}
    >
      <div
        className={`max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="md:flex flex-col justify-center items-center hidden mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="w-full max-w-[800px]">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Hamza</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A passionate React.js, Next.js, and TypeScript developer dedicated
            to creating exceptional web experiences. With a blend of technical
            expertise and creative flair, I bring ideas to life.
          </p>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Think of me as your friendly neighborhood developer, here to
            sprinkle some technical magic and creative flair into your project.
            Whether you're looking for a sleek and responsive website, a dynamic
            web application, or expert guidance on your next project, you're in
            the right place.
          </p>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Let's talk about your vision and how we can make it shine online!
          </p>
          <form className="mt-5 sm:flex w-full gap-2">
            <input
              type="email"
              name="email"
              placeholder="jhon@example.com"
              maxLength={250}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium
              w-full sm:mb-0 mb-2"
            />
            {/* <span className="text-red-700 text-xs my-[2px]">Your email</span> */}

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-small shadow-md shadow-primary sm:w-[200px] w-full"
            >
              {/* {loading ? "Sending..." : "Send"} */}
              Let's Meet
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
