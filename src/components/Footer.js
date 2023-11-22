import { Link } from 'react-router-dom';

function FooterSection({ title, children }) {
  return (
    <div className="footer-section">
      <h2 className="footer-title">{title}</h2>
      {children}
    </div>
  );
}

function SocialLink({ icon, to }) {
  return (
    <Link to={to} className='socialLink hover:text-white'>
      <i className={`bi ${icon}`}></i>
    </Link>
  );
}

export const Footer = () => {
  return (
    <footer className="p-4 bg-purple-700 shadow md:flex md:items-center border-t-2 border-whitemd:justify-center dark:bg-gray-800 bo">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-center">
        <span className="text-sm text-slate-950 sm:text-center dark:text-purple-700">
          <ul className="flex items-center mt-3 text-sm font-medium text-slate-950 dark:text-purple-700 sm:mt-0">
            <FooterSection title="Connect to Me">
              <div className="social text-2xl space-x-3 font-bold">
                <SocialLink icon="bi-facebook" to="https://www.facebook.com/eshey0418/" />
                <SocialLink icon="bi-github" to="https://github.com/hershey041826" />
                <SocialLink icon="bi-linkedin" to="https://www.linkedin.com/" />
                <SocialLink icon="bi-telegram" to="https://telegram.org/" />
              </div>
              <h2 className="footer-title">Created by: Cristel Aban</h2>
            </FooterSection>
          </ul>
          <Link to="/" className="hover:underline hover:text-white text-xs">
            ©2023 All Rights Reserved.
          </Link>
        </span>
      </div>
    </footer>
  );
};
