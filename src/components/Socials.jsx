import { Home, FileText, Github, Linkedin, X, Mail} from "lucide-react";

export function Socials() {
  return (

    <ul className="flex flex-row justify-center space-x-6 mt-auto pb-2">
      <li>
        <a href="/" target="_blank" rel="noopener noreferrer">
          <Home className="text-black hover:text-gray-400" />
        </a>
      </li>
      <li>
        <a href="/blogs" target="_blank" rel="noopener noreferrer">
          <FileText className="text-black hover:text-gray-400 transition" />
        </a>
      </li>
      <li>
        <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
          <Github className="text-black hover:text-gray-400 `transition" />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/aayushcodes" target="_blank" rel="noopener noreferrer">
          <Linkedin className="text-black hover:text-gray-400 transition" />
        </a>
      </li>
      <li>
        <a href="https://x.com/aayushk999" target="_blank" rel="noopener noreferrer">
          <X className="text-black hover:text-gray-400 transition" />
        </a>
      </li>
      <li>
        <a href="mailto:aayushk.dev@gmail.com">
          <Mail className="text-black hover:text-gray-400 transition" />
        </a>
      </li>
    </ul>
  );
}
