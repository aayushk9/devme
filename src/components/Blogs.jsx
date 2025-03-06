const blogs = [
    {
        website: "https://aayushk.hashnode.dev/computer-networks-osi-model-cookies",
        title: "Computer Networks, OSI Model, Cookies",
        date: "Jan 4 2024"
    },
    {
        website: "https://www.geeksforgeeks.org/pagination-using-node-mongo-express-js-and-ejs/?itm_source=auth&itm_medium=contributions&itm_campaign=articles",
        title: "Pagination using node.js, express and mongodb",
        date: "March 27, 2024"
    },
    {
        website: "https://www.geeksforgeeks.org/how-to-build-a-restful-api-using-node-express-and-mongodb/?itm_source=auth&itm_medium=contributions&itm_campaign=articles",
        title: "Rest APIs using node.js, express and mongodb",
        date: "July 24, 2024"
    },
    {
        website: "https://aayushk.hashnode.dev/an-update-on-my-tech-journey",
        title: "An update on my tech journey",
        date: "April 20, 2023"
    }
]

export function Blogs() {
    return (

        <section className="max-w-[600px] mx-auto px-4 text-left mt-10">
            <h2 className="text-black text-2xl font-semibold font-mono">blog</h2>
            <div className="grid md:grid-cols-1 gap-4 px-4 max-w-5xl mx-auto mt-6">
                {blogs.map((blog, index) => (
                    <div key={index} className="space-y-1">
                        <a href={blog.website} className="block">
                            <p className="text-black text-sm font-mono">{blog.title}</p>
                        </a>
                        <p className="text-gray-500 text-xs font-mono">{blog.date}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}  