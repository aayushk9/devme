import { Home, FileText, Github, Linkedin, X, Mail, Moon } from "lucide-react";

export function Socials() {
  return (
    <div className="flex justify-center m-8 mb=0 fixed bottom-0 left-1/2 -translate-x-1/2 ">
      <div className="flex items-center space-x-4 bg-[#181818] px-6 py-3 rounded-full shadow-lg">
        <a href="/" target="_blank" rel="noopener noreferrer">
          <Home className="text-white hover:text-gray-400 transition" />
        </a>
        <a href="/blogs" target="_blank" rel="noopener noreferrer">
          <FileText className="text-white hover:text-gray-400 transition" />
        </a>
        <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
          <Github className="text-white hover:text-gray-400 transition" />
        </a>
        <a href="https://www.linkedin.com/in/aayushcodes" target="_blank" rel="noopener noreferrer">
          <Linkedin className="text-white hover:text-gray-400 transition" />
        </a>
        <a href="https://x.com/aayushk999" target="_blank" rel="noopener noreferrer">
          <X className="text-white hover:text-gray-400 transition" />
        </a>
        <a href="mailto:aayushk.dev@gmail.com">
          <Mail className="text-white hover:text-gray-400 transition" />
        </a>
        <button className="text-white hover:text-gray-400 transition">
          <Moon />
        </button>
      </div>
    </div>
  );
}
