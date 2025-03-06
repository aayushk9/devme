import { FileText, Github, Linkedin, X, Mail } from "lucide-react";
import { Link } from "react-router-dom"

export function Socials() {
  return (

    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white shadow-xl rounded-full px-6 py-3 flex items-center space-x-6">
      <ul className="flex flex-row space-x-6">
        <li>
          <Link to="/blogs">
            <FileText className="hover:text-gray-400 text-black hover:scale-120 transition-transform duration-200" />
          </Link>
        </li>
        <li>
          <Link to="https://github.com/aayushk9">
            <Github className="hover:text-gray-400 text-black hover:scale-120 transition-transform duration-200" />
          </Link>
        </li>
        <li>
          <Link to="https://www.linkedin.com/in/aayushcodes">
            <Linkedin className="hover:text-gray-400 text-black hover:scale-120 transition-transform duration-200" />
          </Link>
        </li>
        <li>
          <Link to="https://x.com/aayushk999">
            <X className="hover:text-gray-400 text-black hover:scale-120 transition-transform duration-200" />
          </Link>
        </li>
        <li>
          <Link to="mailto:aayushk.dev@gmail.com">
            <Mail className="hover:text-gray-400 text-black hover:scale-120 transition-transform duration-200" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
