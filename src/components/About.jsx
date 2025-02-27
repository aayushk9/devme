export function About() {
  return (
    <div className="max-w-[600px] mx-auto text-left">
      <h2 className="text-white text-2xl font-bold">About</h2>
      <p className="text-gray-400 py-1 text-base mb-2">
        long story short; full stack engineer, crypto guy
      </p>
      <p className="text-gray-400 text-base mb-2">
        i like to read about startups, build complex backends and brew coffee
      </p>
      <p className="text-gray-400 text-base mb-2">
        if you'd like to connect over a chat, say hello on  
        <a 
          href="https://x.com/aayushk999" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="font-bold text-white hover:text-blue-400 ml-2"
        >
          x
        </a>
      </p> 
    </div>
  );
}
