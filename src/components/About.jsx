export function About() {
  return (
    <div className="max-w-[600px] mx-auto px-4 py-4 flex flex-col items-start text-left space-y-4">
      <h2 className="text-black text-2xl font-mono font-bold">About</h2>
      <p className="text-black text-lg md:text-xl font-mono">
        long story short; full stack engineer, crypto guy.
      </p>
      <p className="text-black text-lg md:text-xl font-mono">
        i like to code, read about startups, brew coffee and enjoy a good game of cricket.
      </p>
      <p className="text-black text-lg md:text-xl font-mono">
        if you'd like to connect over a chat, say hello on
        <a
          href="https://x.com/aayushk999"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 font-mono ml-2 underline"
        >
          x.com
        </a>
        {" "}or book a meeting with me{" "}
        <a
          className="font-mono text-blue-600 underline"
          href="https://cal.com/aayushdev"
        >
          here
        </a>
      </p>
    </div>
  );
}