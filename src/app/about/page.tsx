const COLOR_BOLD = "#111";

export default function About() {
  return (
    <main className="flex overflow-hidden min-h-0 min-w-min flex-col items-start justify-center gap-0 p-8 sm:w-full lg:w-2/3 lg:p-16 xl:w-2/3">
      <header className="flex flex-col items-start justify-center w-full">
        <h1 className="text-1xl xl:text-4xl lg:text-4xl text-gray-800 #111">
          About me :)
        </h1>
        <p className="text-1xl xl:text-lg lg:text-lg  font-normal text-#111 #111 mt-4 text-justify ">
          My name is Breno Pereira, I'm a Brazilian software developer currently
          working on Vodafone UK. I've worked with a lot of different
          technologies, but I'm currently focused on{" "}
          <span style={{ color: COLOR_BOLD }}>
            React, React Native, NodeJS and Typescript.
          </span>
        </p>

        <p className="text-1xl xl:text-lg lg:text-lg font-normal text-#111 #111 mt-4 text-justify">
          <span style={{ color: COLOR_BOLD }}>
            I believe that to change society for the better, we need to invest
            politically in technology and education.
          </span>
          Enthusiastic about technology, I love learning new technologies and
          new challenges. Since the age of 15 studying programming, and going
          through vocational, and technical courses.
        </p>
        <p className="text-1xl xl:text-lg lg:text-lg  font-normal text-#111 #111 mt-4 text-justify">
          At 16 years old, I sold my first software to serve a store, and I
          completed several other software sales taking care of everything from
          sales to development and customer support.
        </p>

        <p className="text-1xl xl:text-lg lg:text-lg font-normal text-#111 #111 mt-4 text-justify">
          I had some opportunities to work with Node.js in these last 5 years
          and I'm excited to see how{" "}
          <span style={{ color: COLOR_BOLD }}>Rust</span> will change the way we
          develop APIs. I'm also really excited about the future of{" "}
          <span style={{ color: COLOR_BOLD }}>WebAssembly</span> and how this
          can change the way we develop web applications - especially{" "}
          <span style={{ color: COLOR_BOLD }}>web3</span>.
        </p>

        <p className="text-1xl xl:text-lg lg:text-lg font-normal #111 mt-4 text-justify">
          On the side, I enjoy exploring and making coffee - Always up for a
          chat ☕️
        </p>
      </header>
    </main>
  );
}
