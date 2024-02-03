import { CiGlobe } from "react-icons/ci";
import { FaCodepen, FaJava } from "react-icons/fa";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  SiKubernetes,
  SiHelm,
  SiJenkins,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiWordpress,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiPython,
  SiFigma,
  SiSpotify,
  SiPrisma,
} from "react-icons/si";
import profile from "./assets/profile.jpg";
import ericsson from "./assets/ericsson.png";
import fusio from "./assets/fusio.png";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

function App() {
  const copyEmail = () => {
    try {
      navigator.clipboard.writeText("jamesmddoyle@gmail.com");
      toast("Email copied to clipboard.");
    } catch (err) {
      toast("Error copying email to clipboard.");
    }
  };
  return (
    <ThemeProvider
      defaultTheme="dark"
      storageKey="vite-ui-theme"
    >
      <Toaster
        toastOptions={{
          unstyled: true,
          classNames: {
            toast:
              "border border-gray-300 text-sm p-4 dark:border-gray-700 bg-white dark:bg-gray-950 w-auto text-gray-500 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 hover:cursor-pointer",
          },
        }}
      />
      <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16 font-mono dark:bg-gray-950">
        <div className="flex items-center justify-center lg:justify-start">
          <ModeToggle />
        </div>
        <section className="mx-auto w-full max-w-2xl flex items-center justify-between print:space-y-6">
          <div className="space-y-3">
            <h1 className="text-2xl font-bold text-gray-950 dark:text-zinc-100 font-sans">
              James Doyle
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-pretty max-w-[65ch]">
              A developer who's passionate about web development and design,
              currently working with Kubernetes, Postgres and Helm.
            </p>

            <div className="flex items-center gap-2">
              <CiGlobe className="text-gray-700 dark:text-gray-300" />
              <p className="text-xs text-gray-600 font-semibold dark:text-gray-400">
                Dublin, Ireland 🍀
              </p>
            </div>
            <div className="flex gap-2">
              <div className="border border-gray-300 dark:border-gray-700 w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 hover:cursor-pointer group">
                <button onClick={copyEmail}>
                  <MdOutlineEmail className="text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300" />
                </button>
              </div>
              <div className="border border-gray-300 dark:border-gray-700 w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 hover:cursor-pointer group">
                <a href="https://www.linkedin.com/in/james-doyle-4b47ba245/">
                  <IoLogoLinkedin className="text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300" />
                </a>
              </div>
              <div className="border border-gray-300 dark:border-gray-700 w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 hover:cursor-pointer group">
                <a href="https://github.com/jmmd2000">
                  <IoLogoGithub className="text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300" />
                </a>
              </div>
              <div className="border border-gray-300 dark:border-gray-700 w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 hover:cursor-pointer group">
                <a href="https://codepen.io/jmmd2000">
                  <FaCodepen className="text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300" />
                </a>
              </div>
            </div>
          </div>
          <img
            className="w-32 h-32 rounded-lg hover:translate-x-2 hover:-translate-y-2 hover:border-l-gray-800 hover:border-2 hover:shadow-2xl transition-all hover:border-b-gray-800"
            src={profile}
            alt="James Doyle"
          />
        </section>
        <Section title="About">
          <p className="text-sm text-gray-500 dark:text-gray-400 text-pretty">
            My journey into web development kicked off at a young age at
            CoderDojo, sparking a passion that led me to pursue a degree in
            Computer Science and Software Engineering at Maynooth University,
            where I graduated with a 2.1. I am currently a Software Engineer at
            Ericsson, managing Kubernetes clusters and PostgreSQL databases,
            challenging and expanding my technical skills. Outside of work, I'm
            usually found enjoying music, playing video games, or spending time
            with my partner.
          </p>
        </Section>
        <Section title="Work Experience">
          <ExperienceSection
            company="Ericsson"
            title="Software Engineer"
            date_range="July 2023 - Present"
            image={ericsson}
            description="I joined Ericsson through their graduate program, where I became
          part of a team based around the management and maintenance of
          PostgreSQL databases within Kubernetes clusters using Helm charts.
          Day-to-day tasks include heartbeat activities such as regression
          testing a number of products, troubleshooting issues, and supporting
          team members with a variety of tasks. My current focus is on
          improvements to a number of Jenkins pipelines."
          >
            <div className="flex gap-2 flex-wrap">
              <SkillChip
                name="Kubernetes"
                icon={
                  <SiKubernetes className="text-gray-600 group-hover:text-gray-700 dark:group-hover:text-gray-300" />
                }
              />
              <SkillChip
                name="PostgreSQL"
                icon={
                  <BiLogoPostgresql className="text-gray-600 group-hover:text-gray-700 dark:group-hover:text-gray-300" />
                }
              />
              <SkillChip
                name="Helm"
                icon={
                  <SiHelm className="text-gray-600 group-hover:text-gray-700 dark:group-hover:text-gray-300" />
                }
              />
              <SkillChip
                name="Jenkins"
                icon={
                  <SiJenkins className="text-gray-600 group-hover:text-gray-700 dark:group-hover:text-gray-300" />
                }
              />
            </div>
          </ExperienceSection>

          <ExperienceSection
            company="Fusio"
            title="Frontend Intern"
            date_range="Jan 2022 - July 2022"
            image={fusio}
            description="In my role as a Frontend Intern, I mainly used HTML, CSS, JavaScript, and WordPress. My responsibilities were dynamic and varied, offering me the opportunity to engage in a multitude of tasks each day. Whether it was creating UI elements for a website, processing and integrating client-supplied content into their digital presence, or testing webpages and snippets of code, my days were filled with diverse and interesting challenges."
          >
            <div className="flex gap-2 flex-wrap">
              <SkillChip
                name="HTML"
                icon={
                  <SiHtml5 className="text-gray-600 group-hover:text-gray-700 dark:group-hover:text-gray-300" />
                }
              />
              <SkillChip
                name="CSS"
                icon={
                  <SiCss3 className="text-gray-600 group-hover:text-gray-700 dark:group-hover:text-gray-300" />
                }
              />
              <SkillChip
                name="JavaScript"
                icon={
                  <SiJavascript className="text-gray-600 group-hover:text-gray-700 dark:group-hover:text-gray-300" />
                }
              />
              <SkillChip
                name="Wordpress"
                icon={
                  <SiWordpress className="text-gray-600 group-hover:text-gray-700 dark:group-hover:text-gray-300" />
                }
              />
            </div>
          </ExperienceSection>
        </Section>
        <Section title="Skills">
          <div className="flex flex-wrap gap-2">
            <SkillChip
              name="HTML"
              icon={
                <SiHtml5 className="text-gray-600 group-hover:text-gray-700 dark:group-hover:text-gray-300" />
              }
            />
            <SkillChip
              name="CSS"
              icon={
                <SiCss3 className="text-gray-600 group-hover:text-gray-700 dark:group-hover:text-gray-300" />
              }
            />
            <SkillChip
              name="JavaScript"
              icon={
                <SiJavascript className="text-gray-600 group-hover:text-gray-700 dark:group-hover:text-gray-300" />
              }
            />
            <SkillChip
              name="TypeScript"
              icon={
                <SiTypescript className="text-gray-600 group-hover:text-gray-700 dark:group-hover:text-gray-300" />
              }
            />
            <SkillChip
              name="React"
              icon={
                <SiReact className="text-gray-600 group-hover:text-gray-700 dark:group-hover:text-gray-300" />
              }
            />
            <SkillChip
              name="TailwindCSS"
              icon={
                <SiTailwindcss className="text-gray-600 group-hover:text-gray-700 dark:group-hover:text-gray-300" />
              }
            />
            <SkillChip
              name="Next.js"
              icon={
                <SiNextdotjs className="text-gray-600 group-hover:text-gray-700 dark:group-hover:text-gray-300" />
              }
            />
            <SkillChip
              name="Kubernetes"
              icon={
                <SiKubernetes className="text-gray-600 group-hover:text-gray-700 dark:group-hover:text-gray-300" />
              }
            />
            <SkillChip
              name="PostgreSQL"
              icon={
                <BiLogoPostgresql className="text-gray-600 group-hover:text-gray-700 dark:group-hover:text-gray-300" />
              }
            />
            <SkillChip
              name="Helm"
              icon={
                <SiHelm className="text-gray-600 group-hover:text-gray-700 dark:group-hover:text-gray-300" />
              }
            />
            <SkillChip
              name="Jenkins"
              icon={
                <SiJenkins className="text-gray-600 group-hover:text-gray-700 dark:group-hover:text-gray-300" />
              }
            />
            <SkillChip
              name="Java"
              icon={
                <FaJava className="text-gray-600 group-hover:text-gray-700 dark:group-hover:text-gray-300" />
              }
            />
            <SkillChip
              name="Python"
              icon={
                <SiPython className="text-gray-600 group-hover:text-gray-700 dark:group-hover:text-gray-300" />
              }
            />
            <SkillChip
              name="Figma"
              icon={
                <SiFigma className="text-gray-600 group-hover:text-gray-700 dark:group-hover:text-gray-300" />
              }
            />
          </div>
        </Section>
        <Section title="Projects">
          <div className="flex flex-col gap-2">
            <ProjectSection
              title="JamesReviewsMusic"
              link="https://www.jamesreviewsmusic.com/"
              status="active"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400 text-pretty font-mono mb-2">
                A custom, full-stack, personal music blog built with Next.js,
                TailwindCSS, and TypeScript. Uses the Spotify API for album,
                track and artist data and Prisma to manage the database.
              </p>
              <div className="flex flex-wrap gap-2">
                <SkillChip
                  name="TypeScript"
                  icon={
                    <SiTypescript className="text-gray-600 group-hover:text-gray-700 dark:group-hover:text-gray-300" />
                  }
                />
                <SkillChip
                  name="TailwindCSS"
                  icon={
                    <SiTailwindcss className="text-gray-600 group-hover:text-gray-700 dark:group-hover:text-gray-300" />
                  }
                />
                <SkillChip
                  name="Next.js"
                  icon={
                    <SiNextdotjs className="text-gray-600 group-hover:text-gray-700 dark:group-hover:text-gray-300" />
                  }
                />
                <SkillChip
                  name="Prisma"
                  icon={
                    <SiPrisma className="text-gray-600 group-hover:text-gray-700 dark:group-hover:text-gray-300" />
                  }
                />
                <SkillChip
                  name="Spotify API"
                  icon={
                    <SiSpotify className="text-gray-600 group-hover:text-gray-700 dark:group-hover:text-gray-300" />
                  }
                />
              </div>
            </ProjectSection>
            <ProjectSection
              title="GunfightTracker"
              link="https://gunfight-tracker.com/"
              status="inactive"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400 text-pretty font-mono mb-2">
                A full-stack web app with auth for tracking players scores and
                stats in the <i>Call of Duty</i> gamemode called <i>Gunfight</i>
                . Built with Next.js, TailwindCSS, and TypeScript.
              </p>
              <div className="flex flex-wrap gap-2">
                <SkillChip
                  name="TypeScript"
                  icon={
                    <SiTypescript className="text-gray-600 group-hover:text-gray-700 dark:group-hover:text-gray-300" />
                  }
                />
                <SkillChip
                  name="TailwindCSS"
                  icon={
                    <SiTailwindcss className="text-gray-600 group-hover:text-gray-700 dark:group-hover:text-gray-300" />
                  }
                />
                <SkillChip
                  name="Next.js"
                  icon={
                    <SiNextdotjs className="text-gray-600 group-hover:text-gray-700 dark:group-hover:text-gray-300" />
                  }
                />
                <SkillChip
                  name="Prisma"
                  icon={
                    <SiPrisma className="text-gray-600 group-hover:text-gray-700 dark:group-hover:text-gray-300" />
                  }
                />
              </div>
            </ProjectSection>
            <ProjectSection
              title="Vintage Recreations"
              link="https://codepen.io/jmmd2000"
              status="active"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400 text-pretty font-mono mb-2">
                A collection of old documents e.g. timesheets, invoices, report
                cards etc. that I have recreated using HTML and CSS. Very
                satisfying and fun to do.
              </p>
              <div className="flex flex-wrap gap-2">
                <SkillChip
                  name="HTML"
                  icon={
                    <SiHtml5 className="text-gray-600 group-hover:text-gray-700 dark:group-hover:text-gray-300" />
                  }
                />
                <SkillChip
                  name="CSS"
                  icon={
                    <SiCss3 className="text-gray-600 group-hover:text-gray-700 dark:group-hover:text-gray-300" />
                  }
                />
              </div>
            </ProjectSection>
          </div>
        </Section>
      </main>
    </ThemeProvider>
  );
}

export default App;

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section = (props: SectionProps) => {
  return (
    <section className="mx-auto my-12 space-y-3 w-full max-w-2xl print:space-y-6">
      <h2 className="text-xl font-bold text-gray-950 dark:text-zinc-100 font-sans">
        {props.title}
      </h2>
      <div className="flex flex-col gap-1">{props.children}</div>
    </section>
  );
};

interface ExperienceSectionProps {
  company: string;
  title: string;
  date_range: string;
  image: string;
  description: string;
  children: React.ReactNode;
}

const ExperienceSection = (props: ExperienceSectionProps) => {
  return (
    <section className="mx-auto mb-6 space-y-3 w-full max-w-2xl print:space-y-6 font-sans">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between gap-2">
          <img
            className="w-10 aspect-square rounded-md"
            src={props.image}
            alt={`Logo for ${props.company}`}
          />
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-300 font-sans">
              {props.title}
            </h4>
            <p className="text-sm text-gray-500 text-pretty font-mono tracking-tight">
              {props.company}
            </p>
          </div>
        </div>
        <p className="text-sm font-semibold text-gray-500 text-pretty">
          {props.date_range}
        </p>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400 text-pretty font-mono">
        {props.description}
      </p>
      {props.children}
    </section>
  );
};

interface SkillChipProps {
  name: string;
  icon: React.ReactNode;
}

const SkillChip = (props: SkillChipProps) => {
  return (
    <div className="border border-gray-300 dark:border-gray-700 w-auto h-8 p-2 flex gap-1 items-center justify-center rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 hover:cursor-pointer group">
      {props.icon}
      <p className="text-xs text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300">
        {props.name}
      </p>
    </div>
  );
};

interface ProjectSectionProps {
  title: string;
  link: string;
  status: "active" | "inactive" | "offline";
  children: React.ReactNode;
}

const ProjectSection = (props: ProjectSectionProps) => {
  const getStatusIndicator = () => {
    switch (props.status) {
      case "active":
        return (
          <div className="w-[6px] aspect-square bg-green-500 rounded-full shadow-xl shadow-green-500"></div>
        );
      case "inactive":
        return (
          <div className="w-[6px] aspect-square bg-yellow-400 rounded-full shadow-xl shadow-yellow-400"></div>
        );
      default:
        return (
          <div className="w-[6px] aspect-square bg-red-500 rounded-full shadow-xl shadow-red-500"></div>
        );
    }
  };

  return (
    <section className="mx-auto space-y-3 border border-gray-300 dark:border-gray-700 rounded-md p-4  font-sans">
      <div className="flex items-center gap-2">
        <h4 className="font-semibold text-gray-800 dark:text-gray-300">
          <a
            href={props.link}
            className="hover:underline"
          >
            {props.title}
          </a>
        </h4>
        {getStatusIndicator()}
      </div>
      <div className="flex flex-col gap-1">{props.children}</div>
    </section>
  );
};
