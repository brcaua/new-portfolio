export default function About() {
  return (
    <main className="flex min-h-screen min-w-min flex-col items-start justify-center gap-0 p-8 sm:w-full lg:w-2/3 lg:p-24 xl:w-2/3">
      <header className="flex flex-col items-start justify-center w-full">
        <h1 className="text-2xl xl:text-5xl lg:text-5xl font-bold text-gray-800 dark:text-white">
          About me :)
        </h1>
        <p className="text-1xl xl:text-xl lg:text-1xl  font-normal text-yellow-300 dark:text-white mt-4 text-justify ">
          My name is Breno Pereira, I'm a Brazilian software developer currently
          working on Vodafone UK. I've worked with a lot of different
          technologies, but I'm currently focused on React, React Native, NodeJS
          and Typescript.
        </p>

        <p className="text-1xl xl:text-xl lg:text-1xl  font-normal text-yellow-300 dark:text-white mt-4 text-justify">
          A true knowledge lover, always looking to learn more and share
          information. Working with backend and frontend development since 2018,
          developing critical and scalable projects with more than 40 million
          customers.
        </p>
        <p className="text-1xl xl:text-xl lg:text-1xl  font-normal text-yellow-300 dark:text-white mt-4 text-justify">
          I believe that to change society for the better, we need to invest
          politically in technology and education. Enthusiastic about
          technology, I love learning new technologies and new challenges. Since
          the age of 15 studying programming, going through vocational, and
          technical courses, and currently have a bachelor's degree in
          Information Systems at UDESC.
        </p>
        <p className="text-1xl xl:text-xl lg:text-1xl  font-normal text-yellow-300 dark:text-white mt-4 text-justify">
          At 16 years old, I sold my first software to serve a store, and I
          completed several other software sales taking care of everything from
          sales to development and customer support.
        </p>

        <p className="text-1xl xl:text-xl lg:text-1xl font-mono font-normal text-yellow-300 dark:text-yellow mt-4 text-justify">
          On the side, I enjoy exploring and making coffee - Always up for a
          chat ☕️
        </p>
      </header>
    </main>
  );
}
