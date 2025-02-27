const blogs =[
    {
        website: "https://aayushk.hashnode.dev/computer-networks-osi-model-cookies",
        image: "/bigbrain.png",
        title: "Computer Networks, OSI Model, Cookies",
        description: "Learn cn, osi model, cookies and all about how internet evolved back in the day"
    }, 
    {
        website: "https://aayushk.hashnode.dev/an-update-on-my-tech-journey",
        image: "/logo.png",
        title: "An update on my tech journey",
        description: "Hello there, In this post I'm going to reflect on my tech journey."   
    }, 
    {
        website: "https://www.geeksforgeeks.org/how-to-build-a-restful-api-using-node-express-and-mongodb/?itm_source=auth&itm_medium=contributions&itm_campaign=articles",
        image: "/logo.png",
        title: "Rest APIs using node.js, express and mongodb",
        description: "This article guides developers through the process of creating a RESTful API using Node.js, Express.js, and MongoDB"
    }, 
    {
        website: "https://www.geeksforgeeks.org/pagination-using-node-mongo-express-js-and-ejs/?itm_source=auth&itm_medium=contributions&itm_campaign=articles",
        image: "/logo.png",
        title: "Pagination using node.js, express and mongodb",
        description: "Implement pagination in your web application using Node.js, MongoDB, Express and EJS for dynamic HTML rendering"
    }
]

export function Blogs (){
    return (
       <section className="text-center text-white">
          <div>
            <h2>Blogs</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 px-4 max-w-5xl mx-auto">
           {blogs.map((blog, key) => (
              <div key={key} className="relative group bg-black p-5 rounded-2xl shadow-lg hover:shadow-2xl transition border-solid">
                <a href={blog.website}  className="absolute inset-0 top-0 h-1/2 bg-opacity-0 group-hover:bg-opacity-20 transition rounded-t-2xl text-white">
                    
                </a>
                <img src={blog.image} className="w-full rounded-xl"></img>
                <p>{blog.title}</p>
                <p>{blog.description}</p>  
              </div>
           ))}
          </div>  
       </section>
    )
}  