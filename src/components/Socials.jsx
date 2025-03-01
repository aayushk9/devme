import { Home, FileText, Github, Linkedin, X, Mail} from "lucide-react";

export function Socials() {
  return (
    <div className="grid">
      <div>
        <a href="/" target="_blank" rel="noopener noreferrer">
          <Home className="text-white hover:text-gray-400"/>
        </a>
      </div>   
      <div>
        <a href="/blogs" target="_blank" rel="noopener noreferrer">
          <FileText className="text-white hover:text-gray-400 transition"/>
        </a>
      </div>
      <div>
        <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
          <Github className="text-white hover:text-gray-400 `transition"/>
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/aayushcodes" target="_blank" rel="noopener noreferrer">
          <Linkedin className="text-white hover:text-gray-400 transition" />
        </a>
      </div>
      <div>
        <a href="https://x.com/aayushk999" target="_blank" rel="noopener noreferrer">
          <X className="text-white hover:text-gray-400 transition" />
        </a>
      </div>
      <div>
        <a href="mailto:aayushk.dev@gmail.com">
          <Mail className="text-white hover:text-gray-400 transition" />
        </a>
      </div>
      </div>
  );
}
