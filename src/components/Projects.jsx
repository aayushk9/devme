const projects = [
   {
      title: "Zcount",
      date: "January 2025",
      description: "Sleep debt app which lets you calculate your ideal sleep hours",
      techStack: ["HTML", "CSS", "VanillaJS", "Node.js", "Express", "Mongodb"],
      website: "https://z-count.vercel.app/",
      image: "/icons/zcount.png"
   },
   {
      title: "Bigbrain",
      date: "February 2025",
      description: "Get various research papers, whitepapers, crypto news and startup news at one place.",
      techStack: ["React.js", "Tailwind", "Node js", "Express", "Mongodb", "Redis"],
      website: "https://bigbrain-bb.vercel.app/",
      image: "/icons/bigbrain.png"
   }
];

export function Projects() {
   return (
      <section className="py-10 text-white text-center">
         <div className="text-center max-w-[600px] mx-auto text-left mt-10">
            <h2 className="text-black text-2xl font-bold">Projects</h2>
            <p className="text-black text-base">I love building cool stuff. Here are some of the projects</p>
         </div>

         <div className="mt-10 grid grid-cols-1 md:grid-cols-1 gap-4 mr-50">
            {projects.map((project, index) => (
               <div
                  key={index}
                  className="p-5 rounded-2xl hover:shadow-2xl transition w-full max-w-[400px] mx-auto min-h-[400px]"
               >
                  <a href={project.website} target="_blank" rel="noopener noreferrer">
                     <img src={project.image}
                        alt={project.title}
                        className="w-full h-[200px] object-cover rounded-t-2xl" />
                  </a>

                  <div className="mt-4">
                     <h3 className="text-xl font-bold text-black">{project.title}</h3>
                     <p className="text-black text-sm">{project.date}</p>
                     <p className="text-black mt-1">{project.description}</p>

                     <div className="mt-3 flex flex-wrap gap-6">
                        {project.techStack.map((tech, key) => (
                           <span key={key} className="px-2 py-1 rounded-full text-xs text-black">{tech}</span>
                        ))}
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </section>
   )
}   