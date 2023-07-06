import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer>
      <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023&nbsp;
          <Link to="/" target="_blank" className="hover:underline">
            CineZone
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/"
              className="mr-4 hover:underline md:mr-6 "
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/login"
              rel="noreferrer"
              className="mr-4 hover:underline md:mr-6"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.youtube.com"
              rel="noreferrer"
              className="mr-4 hover:underline md:mr-6"
            >
              Youtube
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://github.com/"
              rel="noreferrer"
              className="hover:underline"
            >
              Github
            </a>
          </li>
        </ul>
      </footer>
    </footer>
  );
};
