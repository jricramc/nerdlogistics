import { Link } from 'react-router-dom';

const footerSections = [
  {
    title: 'Company',
    links: [
      { label: 'How It Works', href: '#how-it-works', external: false },
      { label: 'Features', href: '#features', external: false },
      { label: 'Testimonials', href: '#testimonials', external: false },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '/privacy', external: false },
      { label: 'Terms', href: '/terms', external: false },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-24 pb-12">
      <div className="container mx-auto px-6 pt-20 pb-14 md:pt-24 md:pb-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a
              href="#"
              className="logo-text text-lg font-normal text-gray-800 tracking-tight hover:text-gray-600 transition-colors"
            >
              Nerd Logistics
            </a>
            <p className="mt-3 text-sm text-gray-500 max-w-[200px]">
              AI-native operations for logistics teams.
            </p>
          </div>

          {/* Contact Information */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xs font-normal text-gray-500 uppercase tracking-wider mb-4">
              Contact
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-600">
                  121 Nassau Street<br />
                  New York, NY 10038
                </p>
              </div>
              <div>
                <a
                  href="tel:+12147806726"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  +1 214 780 6726
                </a>
              </div>
            </div>
          </div>

          {/* Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs font-normal text-gray-500 uppercase tracking-wider mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('/') ? (
                      <Link
                        to={link.href}
                        className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-gray-200/80">
          <p className="text-sm text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} Nerd Logistics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
