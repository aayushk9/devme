const projects = [
   {
     title: "Bigbrain",
     date: "February 2025",
     description: "Get various research papers, whitepapers, crypto news and startup news at one place.",
     techStack: ["React.js", "Tailwind", "Node js", "Express", "Mongodb", "Redis"],
     website: "https://bigbrain-bb.vercel.app/",
     image: "/bigbrain.png"
   },
   {
     title: "Zcount",
     date: "January 2025",
     description: "Sleep debt app which lets you enter your daily sleep hours for a minimum of 4 days and it will calculate your ideal sleep hours",
     techStack: ["HTML", "CSS", "VanillaJS", "Node.js", "Express", "Mongodb"],
     website: "https://z-count.vercel.app/",
     image: "/"
   }, 
   {
      title: "TaxCrafter",
      date: "January 2024",
      description: "Software solution for managing gst calculations for different product categories",
      techStack: ["HTML", "CSS", "VanillaJS", "Node.js", "Express", "Mongodb"],
      image: "/"
   }
 ];

export function Projects() {
   return (
      <section className="py-10 text-white text-center">
         <div className="text-center mb-6">
            <span className="text-white">My projects</span>
            <p className="text-white">Here is some cool stuff i have built</p>
         </div>  

         <div className="grid md:grid-cols-2 gap-6 px-4 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="relative group bg-black p-5 rounded-2xl shadow-lg hover:shadow-2xl transition border-solid">
            
            <a href={project.website} target="_blank" rel="noopener noreferrer" 
               className="absolute inset-0 top-0 h-1/2 bg-opacity-0 group-hover:bg-opacity-20 transition rounded-t-2xl">
            </a>

            <img src={project.image} alt={project.title} className="w-full rounded-xl" />
            
            <div className="mt-4">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-gray-400 text-sm">{project.date}</p>
              <p className="text-gray-300 mt-2">{project.description}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="bg-gray-800 px-2 py-1 rounded-full text-xs">{tech}</span>
                ))}
              </div>

              <a href={project.website} target="_blank" rel="noopener noreferrer"
                 className="mt-3 inline-block text-sm text-white bg-gray-700 px-3 py-1 rounded-full hover:bg-gray-600 transition">
                🌍 Website
              </a>
            </div>
          </div>
        ))}
      </div>
      </section>
   )
}   