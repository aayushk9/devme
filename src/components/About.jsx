export function About() {
  return (
    <div className="max-w-[600px] mx-auto text-left text-wrap">
      <h2 className="text-black-2xl font-bold">About</h2>
      <p className="text-black py-1 text-base mb-2">
        long story short; full stack engineer, crypto guy
      </p>
      <p className="text-black text-base mb-2">
        i like to read about startups, build complex backends and brew coffee
      </p>
      <p className="text-black text-base mb-2">
        if you'd like to connect over a chat, say hello on  
        <a 
          href="https://x.com/aayushk999" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="font-bold text-black hover:text-blue-400 ml-2"
        >
          x.com
        </a>
      </p> 
    </div>
  );
}
