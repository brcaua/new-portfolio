const COLOR_BOLD = "#fff";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 px-24 py-6 max-w-7xl mx-auto">
      <header className="flex flex-col items-center justify-center align-center">
        <h1 className="text-3xl xl:text-4xl lg:text-4xl mb-4 font-bold">
          Hey, welcome to my website :)
        </h1>

        <section className="text-2xl">
          <p className="text-1xl font-normal text-#111 #111 mt-4 text-justify ">
            My name is Breno Pereira, I'm a Brazilian 🇧🇷 software developer 👨‍💻
            currently working on Vodafone UK 🇬🇧. I've worked with a lot of
            different technologies, but I'm currently focused on{" "}
            <span style={{ color: COLOR_BOLD }}>
              React, React Native, NodeJS and Typescript.
            </span>
          </p>

          <p className="text-1xl  font-normal text-#111 #111 mt-4 text-justify">
            <span style={{ color: COLOR_BOLD }}>
              I believe that to change society for the better, we need to invest
              politically in technology and education.
            </span>
            Enthusiastic about technology, I love learning new technologies and
            new challenges. Since the age of 15 studying programming, and going
            through vocational, and technical courses.
          </p>
          <p className="text-1xl   font-normal text-#111 #111 mt-4 text-justify">
            At 16 years old, I sold my first software to serve a store, and I
            completed several other software sales taking care of everything
            from sales to development and customer support.
          </p>

          <p className="text-1xl  font-normal text-#111 #111 mt-4 text-justify">
            Currently I'm improving my skills in AI and ML, how can be
            integrated into my work as a software developer using React. It's a
            new challenge for me, and I'm excited to see how{" "}
            <span style={{ color: COLOR_BOLD }}>Rust</span> will change the way
            we develop APIs. I'm also really excited about the future of{" "}
            <span style={{ color: COLOR_BOLD }}>WebAssembly</span> and how this
            can change the way we develop web applications - especially{" "}
            <span style={{ color: COLOR_BOLD }}>web3</span>.
          </p>

          <p className="text-1xl  font-normal #111 mt-4 text-justify">
            On the side, I enjoy exploring and making coffee - Always up for a
            chat ☕️
          </p>
        </section>
      </header>
    </main>
  );
}
