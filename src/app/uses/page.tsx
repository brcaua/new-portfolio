export default function Uses() {
  return (
    <main className="flex min-h-screen min-w-min flex-col items-start justify-around p-8 sm:w-full lg:w-2/3  lg:p-24 xl:w-2/3">
      <header className="flex flex-col items-start">
        <h1 className="mb-2 text-4xl letter-spacing-[0.05em] sm:text-sm lg:text-4xl xl:text-4xl">
          /uses
        </h1>
        <hr className="border-whitesmoke-300 mb-4 w-full border-2" />
        <p className="lg:text-md xl:text-md mt-4 text-justify text-lg font-normal lg:text-left xl:text-left">
          Welcome to my “Uses” page, where I share the details about the
          hardware, software, and services I use on a daily basis. Whether I’m
          working on personal projects or client work, these are my go-to
          resources.
        </p>
      </header>

      <section className="mt-10 flex flex-col items-start">
        <h3 className="text-2xl">Hardware</h3>
        <ul className="mt-4 flex flex-col items-start gap-2">
          <li className="flex flex-col items-start">
            <h4 className="text-lg ">Laptop</h4>
            <p className="text-md  font-normal text-#111">
              <a
                href="https://www.apple.com/macbook-air/"
                target="_blank"
                rel="noopener noreferrer"
              >
                MacBook Air (M1, 2020)
              </a>{" "}
              - 8GB RAM, 256GB SSD, 7-core GPU. <strong>Works magic.</strong>{" "}
              Windows never again. I just not recommend it for gaming.
            </p>
          </li>
          <li className="flex flex-col items-start">
            <h4 className="text-lg ">Mouse</h4>
            <p className="text-md  font-normal text-#111">
              <a
                href="https://www.apple.com/shop/product/MRME2LL/A/magic-mouse-2-silver"
                target="_blank"
                rel="noopener noreferrer"
              >
                Magic Mouse 2
              </a>{" "}
              - Silver
            </p>
          </li>
          <li className="flex flex-col items-start">
            <h4 className="text-lg  ">Keyboard</h4>
            <p className="text-md   font-normal text-#111">
              <a
                href="https://www.apple.com/shop/product/MLA22LL/A/magic-keyboard-us-english"
                target="_blank"
                rel="noopener noreferrer"
              >
                Magic Keyboard
              </a>{" "}
              - US English. Honestly, the best keyboard I've ever used.
            </p>
          </li>
          <li className="flex flex-col items-start">
            <h4 className="text-lg ">Earphones</h4>
            <p className="text-md   font-normal  text-#111">
              <a
                href="https://www.apple.com/shop/product/MMEF2AM/A/airpods"
                target="_blank"
                rel="noopener noreferrer"
              >
                AirPods
              </a>{" "}
              - 1st Generation
            </p>
          </li>
          <li className="flex flex-col items-start">
            <h4 className="text-lg ">Headset</h4>
            <p className="text-md   font-normal  text-#111">
              <a
                href="https://www.apple.com/shop/product/MRJ62ZM/A/airpods-max-space-gray"
                target="_blank"
                rel="noopener noreferrer"
              >
                AirPods Max
              </a>{" "}
              - Space Gray. I use it to listen to music and participate in
              calls. Works very well.
            </p>
          </li>
          <li className="flex flex-col items-start">
            <h4 className="text-lg ">Monitor</h4>
            <p className="text-md   font-normal  text-#111">
              <a
                href="https://www.amazon.co.uk/Arzopa-Portable-1920x1080-Resolution-Computer/dp/B08L5Q4CZB"
                target="_blank"
                rel="noopener noreferrer"
              >
                Arzopa 15.6" Portable Monitor
              </a>{" "}
              - 2K Resolution, 60Hz Refresh Rate.
            </p>
          </li>
        </ul>
      </section>

      <section className="mt-10 flex flex-col items-start">
        <h3 className="text-2xl ">Software</h3>
        <ul className="mt-4 flex flex-col items-start gap-2">
          <li className="flex flex-col items-start">
            <h4 className="text-lg ">Operating System</h4>
            <p className="text-md   font-normal  text-#111">
              <a
                href="https://www.apple.com/macos/big-sur/"
                target="_blank"
                rel="noopener noreferrer"
              >
                macOS Sonoma - I love it because it's a Unix based system with a
                awesome UI.
              </a>
            </p>
          </li>
          <li className="flex flex-col items-start">
            <h4 className="text-lg ">Code Editor</h4>
            <p className="text-md   font-normal  text-#111">
              <a
                href="https://code.visualstudio.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visual Studio Code
              </a>{" "}
              - Dark theme. Yeah, I know, I'm a basic guy.
            </p>
          </li>
          <li className="flex flex-col items-start">
            <h4 className="text-lg  ">Terminal</h4>
            <p className="text-md  font-normal text-#111">
              <a
                href="https://www.iterm2.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                iTerm2 with Oh My Zsh/Fish
              </a>{" "}
              using Dracula Theme. My productivity is boosted by using this
              config.
            </p>
          </li>
          <li className="flex flex-col items-start">
            <h4 className="text-lg ">Browser</h4>
            <p className="text-md   font-normal  text-#111">
              <a
                href="https://www.google.com/chrome/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Arc Browser - I love it Arc because it's a Chrome version with a
                lot of awesome features
              </a>
            </p>
          </li>
          <li className="flex flex-col items-start">
            <h4 className="text-lg ">Password Manager</h4>
            <p className="text-md  font-normal  text-#111">
              <a
                href="https://1password.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                1Password - I use it to store all my passwords and secrets.
              </a>
            </p>
          </li>
          <li className="flex flex-col items-start">
            <h4 className="text-lg ">Communication</h4>
            <p className="text-md  font-normal  text-#111">
              <a
                href="https://www.microsoft.com/en-ww/microsoft-teams/group-chat-software"
                target="_blank"
                rel="noopener noreferrer"
              >
                Microsoft Teams - I know, I know, but it's the company's choice.
              </a>

              <a
                href="https://discord.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discord - I use it to talk with my students. Yeah, I'm a teacher
                at SouJunior.
              </a>
            </p>
          </li>

          <li className="flex flex-col items-start">
            <h4 className="text-lg ">Productivity</h4>
            <p className="text-md   font-normal  text-#111">
              <a
                href="https://www.grammarly.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Grammarly - AI writing assistance to communicate with confidence
                and make writing faster and more delightful.
              </a>
            </p>
          </li>

          <li className="flex flex-col items-start">
            <h4 className="text-lg ">Productivity</h4>
            <p className="text-md   font-normal  text-#111">
              <a
                href="https://www.pearl.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pearl - The quickest way to see yourself, with just a click in
                your menubar.
              </a>
            </p>
          </li>
        </ul>
      </section>

      <section className="mt-10 flex flex-col items-start">
        <h3 className="text-2xl ">Services</h3>
        <ul className="mt-4 flex flex-col items-start gap-2">
          <li className="flex flex-col items-start">
            <h4 className="text-lg ">VPN</h4>
            <p className="text-md   font-normal  text-#111">
              <a
                href="https://www.atlasvpn.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Atlas VPN - I use it to protect my privacy. It's very fast and
                cheap.
              </a>
            </p>
          </li>
          <li className="flex flex-col items-start">
            <h4 className=" text-lg  ">Cloud Storage</h4>
            <p className="text-md font-normal   text-#111">
              <a
                href="https://www.dropbox.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dropbox - I use it to store my files. It's very fast and cheap.
              </a>
            </p>
          </li>
          <li className="flex flex-col items-start">
            <h4 className="text-lg ">Email</h4>
            <p className="text-md font-normal  text-#111">
              <a
                href="https://www.google.com/gmail/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gmail - no much to say about it. It's the best email service.
              </a>
            </p>
          </li>
          <li className="flex flex-col items-start">
            <h4 className="text-lg ">Calendar</h4>
            <p className="text-md font-normal  text-#111">
              <a
                href="https://calendar.google.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Calendar
              </a>
            </p>
          </li>
        </ul>
      </section>

      <section className="mt-10 flex flex-col items-start">
        <h3 className="text-2xl">Contact</h3>

        <ul className="mt-4 flex flex-col items-start gap-2">
          <li className="flex flex-col items-start">
            <h4 className="text-lg  ">Email</h4>
            <p className="text-md   font-normal  text-#111">
              <a
                href="mailto:breno.pereira.dev@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                E-mail me
              </a>
            </p>
          </li>

          <li className="flex flex-col items-start">
            <h4 className="text-lg ">GitHub</h4>
            <p className="text-md   font-normal text-#111">
              <a
                href="https://github.com/brcaua"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </p>
          </li>

          <li className="flex flex-col items-start">
            <h4 className="text-lg ">Linkedin</h4>
            <p className="text-md   font-normal text-#111">
              <a
                href="https://www.linkedin.com/in/breno3g/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </p>
          </li>
        </ul>
      </section>
    </main>
  );
}
