import { FaCircle } from "react-icons/fa";

const sections = [
  {
    title: "Hardware",
    items: [
      {
        title: "Laptop",
        description: (
          <>
            <a
              href="https://www.apple.com/macbook-air/"
              target="_blank"
              rel="noopener noreferrer"
            >
              MacBook Air (M1, 2020)
            </a>{" "}
            - 8GB RAM, 256GB SSD, 7-core GPU. <strong>Works magic.</strong>{" "}
            Windows never again. I just not recommend it for gaming.
          </>
        ),
      },
      {
        title: "Mouse",
        description: (
          <>
            <a
              href="https://www.apple.com/shop/product/MRME2LL/A/magic-mouse-2-silver"
              target="_blank"
              rel="noopener noreferrer"
            >
              Magic Mouse 2
            </a>{" "}
            - Silver
          </>
        ),
      },
      {
        title: "Keyboard",
        description: (
          <>
            <a
              href="https://www.apple.com/shop/product/MLA22LL/A/magic-keyboard-us-english"
              target="_blank"
              rel="noopener noreferrer"
            >
              Magic Keyboard
            </a>{" "}
            - US English. Honestly, the best keyboard I've ever used.
          </>
        ),
      },
      {
        title: "Earphones",
        description: (
          <>
            <a
              href="https://www.apple.com/shop/product/MMEF2AM/A/airpods"
              target="_blank"
              rel="noopener noreferrer"
            >
              AirPods
            </a>{" "}
            - 1st Generation
          </>
        ),
      },
      {
        title: "Headset",
        description: (
          <>
            <a
              href="https://www.apple.com/shop/product/MRJ62ZM/A/airpods-max-space-gray"
              target="_blank"
              rel="noopener noreferrer"
            >
              AirPods Max
            </a>{" "}
            - Space Gray. I use it to listen to music and participate in calls.
            Works very well.
          </>
        ),
      },
      {
        title: "Monitor",
        description: (
          <>
            <a
              href="https://www.amazon.co.uk/Arzopa-Portable-1920x1080-Resolution-Computer/dp/B08L5Q4CZB"
              target="_blank"
              rel="noopener noreferrer"
            >
              Arzopa 15.6" Portable Monitor
            </a>{" "}
            - 2K Resolution, 60Hz Refresh Rate.
          </>
        ),
      },
    ],
  },
  {
    title: "Software",
    items: [
      {
        title: "Operating System",
        description: (
          <a
            href="https://www.apple.com/macos/big-sur/"
            target="_blank"
            rel="noopener noreferrer"
          >
            macOS Sonoma - I love it because it's a Unix based system with an
            awesome UI.
          </a>
        ),
      },
      {
        title: "Code Editor",
        description: (
          <>
            <a
              href="https://code.visualstudio.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visual Studio Code
            </a>{" "}
            - Dark theme. Yeah, I know, I'm a basic guy.
          </>
        ),
      },
      {
        title: "Terminal",
        description: (
          <>
            <a
              href="https://www.iterm2.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              iTerm2 with Oh My Zsh/Fish
            </a>{" "}
            using Dracula Theme. My productivity is boosted by using this
            config.
          </>
        ),
      },
      {
        title: "Browser",
        description: (
          <a
            href="https://www.google.com/chrome/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Arc Browser - I love Arc because it's a Chrome version with a lot of
            awesome features
          </a>
        ),
      },
      {
        title: "Password Manager",
        description: (
          <a
            href="https://1password.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            1Password - I use it to store all my passwords and secrets.
          </a>
        ),
      },
      {
        title: "Communication",
        description: (
          <>
            <a
              href="https://www.microsoft.com/en-ww/microsoft-teams/group-chat-software"
              target="_blank"
              rel="noopener noreferrer"
            >
              Microsoft Teams - I know, I know, but it's the company's choice.
            </a>
            <br />
            <a
              href="https://discord.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discord - I use it to talk with my students. Yeah, I'm a teacher
              at SouJunior.
            </a>
          </>
        ),
      },
      {
        title: "Productivity",
        description: (
          <>
            <a
              href="https://www.grammarly.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Grammarly - AI writing assistance to communicate with confidence
              and make writing faster and more delightful.
            </a>
            <br />
            <a
              href="https://www.pearl.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pearl - The quickest way to see yourself, with just a click in
              your menubar.
            </a>
          </>
        ),
      },
    ],
  },
  {
    title: "Services",
    items: [
      {
        title: "VPN",
        description: (
          <a
            href="https://www.atlasvpn.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Atlas VPN - I use it to protect my privacy. It's very fast and
            cheap.
          </a>
        ),
      },
      {
        title: "Cloud Storage",
        description: (
          <a
            href="https://www.dropbox.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dropbox - I use it to store my files. It's very fast and cheap.
          </a>
        ),
      },
      {
        title: "Email",
        description: (
          <a
            href="https://www.google.com/gmail/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gmail - not much to say about it. It's the best email service.
          </a>
        ),
      },
      {
        title: "Calendar",
        description: (
          <a
            href="https://calendar.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Calendar
          </a>
        ),
      },
    ],
  },
  {
    title: "Contact",
    items: [
      {
        title: "Email",
        description: (
          <a
            href="mailto:breno.pereira.dev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            E-mail me
          </a>
        ),
      },
      {
        title: "GitHub",
        description: (
          <a
            href="https://github.com/brcaua"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        ),
      },
      {
        title: "LinkedIn",
        description: (
          <a
            href="https://www.linkedin.com/in/breno3g/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        ),
      },
    ],
  },
];

export default function Uses() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-around p-8 sm:w-full lg:w-2/3 lg:p-24 xl:w-2/3 mx-auto">
      <header className="w-full mb-12">
        <h1 className="text-5xl font-bold mb-4 text-yellow-600">/uses</h1>
        <hr className="border-yellow-200 mb-6 w-full border-2" />
        <p className="text-xl text-white-700 leading-relaxed">
          Welcome to my "Uses" page, where I share the details about the
          hardware, software, and services I use on a daily basis. Whether I'm
          working on personal projects or client work, these are my go-to
          resources.
        </p>
      </header>

      {sections.map((section) => (
        <section key={section.title} className="w-full mb-12">
          <h2 className="text-3xl font-bold mb-6 text-yellow-500">
            {section.title}
          </h2>
          <ul className="space-y-6">
            {section.items.map((item) => (
              <li key={item.title} className="flex items-start">
                <FaCircle className="text-yellow-400 mt-1.5 mr-4" size={8} />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-white-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
