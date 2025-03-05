export function Edu() {
  return (
    <div className="max-w-[600px] mx-auto text-left mt-10">
      <h2 className="text-black text-2xl font-bold">Education</h2>

      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center space-x-4">
          <a href="https://www.linkedin.com/school/savitribai-phule-pune-university-sppu/">
            <img
              className="h-12 w-12 rounded-full object-cover border border-gray-400"
              src="/unilogo.jpg"
              alt="University Logo"
            />
          </a>
          <div>
            <p className="text-black font-semibold">Pune University</p>
            <p className="text-black text-sm">Bachelors of Engineering (Electronics)</p>
          </div>
        </div>

        <span className="text-black text-sm">2021 - 2025</span>
      </div>
    </div>
  );
}