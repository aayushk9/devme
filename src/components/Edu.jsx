export function Edu(){
    return (
        <div className="py-10 ml-10">
          <h2 className="text-white text-2xl font-bold text-lg mr-80">Education</h2>
          <div className="flex flex-col items-center mt-4">
        <img 
          className="h-10 w-10 rounded-full object-cover border border-gray-400 mr-89" 
          src="/unilogo.jpg" 
          alt="University Logo"
        />
        
        <div className="mb-40">
        <p className="text-white mt-2 font-semibold">Pune University</p>
        <p className="text-white text-sm">Bachelors of Engineering (Electronics)</p>
        </div>
        
      </div>
      <span className="text-white text-sm">2021-2025</span>
        </div>
    )
}