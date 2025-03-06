const projects = [
   {
      title: "Bigbrain",
      date: "February 2025",
      description: "Get various research papers, whitepapers, crypto news and startup news at one place.",
      githubURL: "https://github.com/aayushk9/BigBrain",
      techStack: ["React.js", "Tailwind", "Node.js", "Express", "Mongodb", "Redis"],
      website: "https://bigbrain-bb.vercel.app/",
      image: "/icons/bigbrain.png"
   },
   {
      title: "Zcount",
      date: "January 2025",
      description: "Sleep debt app which lets you calculate your ideal sleep hours",
      githubURL: "https://github.com/aayushk9/ZCount",
      techStack: ["HTML", "CSS", "VanillaJS", "Node.js", "Express", "Mongodb"],
      website: "https://z-count.vercel.app/",
      image: "/icons/zcount.png"
   }
];

export function Projects() {
   return (
      <section className="py-3 text-white">
         <div className="max-w-[600px] mx-auto px-4 text-left mt-10">
            <h2 className="text-black text-2xl font-bold font-mono">Projects</h2>
            <p className="text-black text-lg font-mono mt-2">
               I build cool things, here are some of my favorites.
            </p>
         </div>

         <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 mx-auto max-w-[700px] px-4">
            {projects.map((project, index) => (
               <div
                  key={index}
                  className="p-5 rounded-2xl transition shadow-lg hover:scale-[1.02] bg-white w-full max-w-[320px] mx-auto"
               >
                  <a href={project.website} target="_blank" rel="noopener noreferrer">
                     <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-[200px] object-cover rounded-t-2xl"
                     />
                  </a>

                  <div className="mt-4 text-left">
                     <h3 className="text-xl font-bold text-black font-mono">{project.title}</h3>
                     <p className="text-black text-sm font-mono">{project.date}</p>

                     <div className="mt-2">
                        <a
                           href={project.githubURL}
                           className="flex items-center space-x-2 text-gray-700 hover:text-gray-800 font-mono text-lg"
                        >
                           <span>github repository</span>
                        </a>
                     </div>

                     <div className="mt-3 flex flex-wrap gap-2">
                        {project.techStack.map((tech, key) => (
                           <span key={key} className="px-3 py-1 bg-gray-200 rounded-full text-xs text-black font-mono">
                              {tech}
                           </span>
                        ))}
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </section>
   )
}