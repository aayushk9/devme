export function Edu() {
  return (
    <div className="max-w-[600px] mx-auto px-4 text-left mt-10">
      <h2 className="text-black font-bold text-2xl font-mono">Education</h2>

      <div className="flex items-center justify-between mt-1">
        <div className="flex items-center space-x-4">
          <a href="https://www.linkedin.com/school/savitribai-phule-pune-university-sppu/">
            <img
              className="h-12 w-12 rounded-full object-cover border border-gray-400"
              src="/unilogo.jpg"
              alt="University Logo"
            />
          </a>
          <div>
            <p className="text-black font-mono text-xl">Pune University</p>
            <p className="text-black text-sm font-mono text-lg">Bachelors of Engineering (Electronics)</p>
          </div>
        </div>

        <span className="text-black text-sm text-lg ml-auto font-mono">2021 - 2025</span>
      </div>
    </div>
  );
}