export default function Home() {
  return (
    <main className="flex min-h-screen min-w-min flex-col items-start justify-center gap-8 p-8 sm:w-full lg:w-2/3  lg:p-24 xl:w-2/3">
      <header className="flex flex-col items-start justify-center w-full">
        <h1 className="text-2xl xl:text-5xl lg:text-5xl font-bold text-gray-800 dark:text-white">
          Hey, welcome to my website :)
        </h1>
        <p className="text-1xl xl:text-2xl lg:text-2xl font-mono font-normal text-yellow-300 dark:text-yellow mt-2">
          My name is Breno Pereira, I'm a Brazilian software developer currently
          working on Vodafone UK. Here you can find a little bit about me.
        </p>
      </header>

      <section className="flex flex-col items-start justify-center w-full mt-0">
        <h3 className="text-2xl xl:text-2xl lg:text-2xl font-bold text-gray-800 dark:text-white">
          Links:
        </h3>

        <ul className="flex flex-col items-start justify-center w-full">
          <li className="text-1xl xl:text-2xl lg:text-2xl  font-mono font-normal text-yellow-300 dark:text-yellow border-b-2 border-gray-800 dark:border-white">
            <a href="/about"> About me</a>
          </li>
          <li className="text-1xl xl:text-2xl lg:text-2xl  font-mono font-normal text-yellow-300 dark:text-yellow border-b-2 border-gray-800 dark:border-white">
            <a href="/uses">Uses</a>
          </li>
          <li className="text-1xl xl:text-2xl lg:text-2xl  font-mono font-normal text-yellow-300 dark:text-yellow border-b-2 border-gray-800 dark:border-white">
            <a href="mailto:breno.pereira.dev@gmail.com">Email</a>
          </li>
          <li className="text-1xl xl:text-2xl lg:text-2xl  font-mono font-normal text-yellow-300 dark:text-yellow border-b-2 border-gray-800 dark:border-white">
            <a href="https://www.linkedin.com/in/breno3g/">Linkedin</a>
          </li>
          <li className="text-1xl xl:text-2xl lg:text-2xl  font-mono font-normal text-yellow-300 dark:text-yellow border-b-2 border-gray-800 dark:border-white">
            <a href="https://www.github/brcaua">Github</a>
          </li>
        </ul>
      </section>

      <footer className="flex flex-col items-center justify-center w-full mt-4">
        <p className="text-1xl xl:text-2xl lg:text-2xl  font-mono font-normal text-yellow-300 dark:text-yellow">
          Made with 💛 by Breno Pereira
        </p>
      </footer>
    </main>
  );
}
