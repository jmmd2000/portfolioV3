import { CiGlobe } from "react-icons/ci";
import { FaCodepen } from "react-icons/fa";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
import profile from "./assets/profile.jpg";

function App() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16 font-mono">
      <section className="bg-white mx-auto w-full max-w-2xl flex items-center justify-between print:space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-gray-950">James Doyle</h1>
          <p className="text-sm text-gray-500 text-pretty max-w-[65ch]">I'm a developer who is passionate about web development and design, currently working with Kubernetes, Postgres and Helm.</p>
          <div className="flex items-center gap-2">
            <CiGlobe className="text-gray-700" />
            <p className="text-xs text-gray-600 font-semibold">Dublin, Ireland 🍀</p>
          </div>
          <div className="flex gap-2">
            <div className="border border-gray-300 w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-200 hover:cursor-pointer group">
              <a href="https://www.linkedin.com/in/james-doyle-4b47ba245/">
                <IoLogoLinkedin className="text-gray-500 group-hover:text-gray-700" />
              </a>
            </div>
            <div className="border border-gray-300 w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-200 hover:cursor-pointer group">
              <a href="https://github.com/jmmd2000">
                <IoLogoGithub className="text-gray-500 group-hover:text-gray-700" />
              </a>
            </div>
            <div className="border border-gray-300 w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-200 hover:cursor-pointer group">
              <a href="https://codepen.io/jmmd2000">
                <FaCodepen className="text-gray-500 group-hover:text-gray-700" />
              </a>
            </div>
          </div>
        </div>
        <img className="w-32 h-32 rounded-lg hover:translate-x-2 hover:-translate-y-2 hover:border-l-gray-950 hover:border-2 transition-all hover:border-b-gray-950" src={profile} alt="James Doyle" />
      </section>
    </main>
  );
}

export default App;
