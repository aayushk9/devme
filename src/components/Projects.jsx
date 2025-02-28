const projects = [
   {
      title: "Bigbrain",
      date: "February 2025",
      description: "Get various research papers, whitepapers, crypto news and startup news at one place.",
      techStack: ["React.js", "Tailwind", "Node js", "Express", "Mongodb", "Redis"],
      website: "https://bigbrain-bb.vercel.app/",
      image: "/icons/bigbrain.png"
   },
   {
      title: "Zcount",
      date: "January 2025",
      description: "Sleep debt app which lets you enter your daily sleep hours for a minimum of 4 days and it will calculate your ideal sleep hours",
      techStack: ["HTML", "CSS", "VanillaJS", "Node.js", "Express", "Mongodb"],
      website: "https://z-count.vercel.app/",
      image: "/icons/zcount.png"
   },
   {
      title: "TaxCrafter",
      date: "January 2024",
      description: "Software solution for managing gst calculations for different product categories",
      techStack: ["HTML", "CSS", "VanillaJS", "Node.js", "Express", "Mongodb"],
      website: "https://github.com/aayushk9/TaxCrafter",
      image: "/"
   }
];

export function Projects() {
   return (
      <section className="py-10 text-white text-center">
         <div className="text-center max-w-[600px] mx-auto text-left mt-10">
            <h2 className="text-white text-2xl font-bold">Projects</h2>
            <p className="text-gray-400 text-base">I love building cool stuff. Here are some of the projects</p>
         </div>

         <div className="mt-10 grid grid-cols-1 md:grid-cols-1 gap-4 mr-50">
            {projects.map((project, index) => (
               <div

                  key={index}
                  className="bg-black p-5 rounded-2xl shadow-lg hover:shadow-2xl transition w-full max-w-[400px] mx-auto min-h-[400px] border-solid border border-[#1a1a1a]"
               >
                  <a href={project.website} target="_blank" rel="noopener noreferrer">
                     <img src={project.image}
                        alt={project.title}
                        className="w-full h-[200px] object-cover rounded-t-2xl" />
                  </a>

                  <div className="mt-4">
                     <h3 className="text-xl font-bold text-white">{project.title}</h3>
                     <p className="text-gray-400 text-sm">{project.date}</p>
                     <p className="text-gray-300 mt-1">{project.description}</p>

                     <div className="mt-3 flex flex-wrap gap-6">
                        {project.techStack.map((tech, key) => (
                           <span key={key} className="bg-gray-800 px-2 py-1 rounded-full text-xs text-white">{tech}</span>
                        ))}
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </section>
   )
}   