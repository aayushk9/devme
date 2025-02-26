const blogs =[
    {
        website: "https://aayushk.hashnode.dev/computer-networks-osi-model-cookies",
        image: "/",
        title: "Computer Networks, OSI Model, Cookies",
        dataImage: "/",
        description: "Learn cn, osi model, cookies and all about how internet evolved back in the day"
    }, 
    {
        image: "/",
        title: "An update on my tech journey",
        dataImage: "/",
        description: "Learn cn, osi model, cookies and all about how internet evolved back in the day"   
    }, 
    {
        image: "/",
        title: "Learn Pagination",
        dataImage: "/",
        description: "Learn cn, osi model, cookies and all about how internet evolved back in the day"
    },
    {
        image: "/",
        title: "Rest Apis",
        dataImage: "/",
        description: "Learn cn, osi model, cookies and all about how internet evolved back in the day"
    }
]
export function Blogs (){
    return (
       <section className="text-center text-white">
          <div>
            <h2>Most recent blogs</h2>
          </div>
          <div>
           {blogs.map((blog, key) => (
              <div key={key}>
                <a href={blog.website}>
                </a>
                <img src={blog.image}></img>
                <p>{blog.title}</p>
                <img src={blog.dataImage}></img>
                <p>{blog.description}</p>
              </div>
           ))}
          </div>
       </section>
    )
}  