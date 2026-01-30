import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'information-collection', title: 'Information We Collect' },
    { id: 'information-use', title: 'How We Use Your Information' },
    { id: 'data-sharing', title: 'Data Sharing and Disclosure' },
    { id: 'data-security', title: 'Data Security' },
    { id: 'data-retention', title: 'Data Retention' },
    { id: 'your-rights', title: 'Your Rights and Choices' },
    { id: 'cookies', title: 'Cookies and Tracking' },
    { id: 'international', title: 'International Data Transfers' },
    { id: 'children', title: 'Children\'s Privacy' },
    { id: 'changes', title: 'Changes to This Policy' },
    { id: 'contact', title: 'Contact Us' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Professional Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="text-xl font-medium text-gray-900 tracking-tight hover:text-gray-600 transition-colors"
            >
              Nerd Logistics
            </Link>
            <Link
              to="/"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Privacy Policy</h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <div>
                <span className="font-medium text-gray-300">Effective Date:</span> January 30, 2026
              </div>
              <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
              <div>
                <span className="font-medium text-gray-300">Last Updated:</span> January 30, 2026
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-7xl mx-auto flex gap-12">
          {/* Table of Contents - Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                Contents
              </h3>
              <nav className="space-y-1">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                      setActiveSection(section.id);
                    }}
                    className={`block py-2 px-3 text-sm rounded-lg transition-colors ${
                      activeSection === section.id
                        ? 'bg-gray-900 text-white font-medium'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 max-w-3xl">
            <div className="prose prose-lg prose-gray max-w-none">
              
              <section id="introduction" className="mb-16 scroll-mt-28">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Introduction</h2>
                <p className="text-gray-700 leading-relaxed">
                  At Nerd Logistics, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy describes how we collect, use, store, and disclose information when you use our AI-native logistics operations platform and related services.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
                </p>
              </section>

              <section id="information-collection" className="mb-16 scroll-mt-28">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Information You Provide</h3>
                <p className="text-gray-700 leading-relaxed">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-3">
                  <li>Account information (name, email address, company name, phone number)</li>
                  <li>Profile information and preferences</li>
                  <li>Payment and billing information</li>
                  <li>Communications with our support team</li>
                  <li>Logistics and operational data you input into our platform</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Automatically Collected Information</h3>
                <p className="text-gray-700 leading-relaxed">
                  When you use our services, we automatically collect:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-3">
                  <li>Usage data (features used, actions taken, time spent)</li>
                  <li>Device information (IP address, browser type, operating system)</li>
                  <li>Log data (access times, pages viewed, error logs)</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </section>

              <section id="information-use" className="mb-16 scroll-mt-28">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                <p className="text-gray-700 leading-relaxed">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-4">
                  <li><strong>Service Delivery:</strong> To provide, maintain, and improve our logistics platform</li>
                  <li><strong>Account Management:</strong> To create and manage your account</li>
                  <li><strong>Communication:</strong> To send you technical notices, updates, and support messages</li>
                  <li><strong>Analytics:</strong> To understand usage patterns and optimize our services</li>
                  <li><strong>Security:</strong> To detect, prevent, and address fraud and security issues</li>
                  <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
                  <li><strong>Business Operations:</strong> To process payments and maintain business records</li>
                </ul>
              </section>

              <section id="data-sharing" className="mb-16 scroll-mt-28">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Sharing and Disclosure</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may share your information in the following circumstances:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-4">
                  <li><strong>Service Providers:</strong> With trusted third-party vendors who perform services on our behalf</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                  <li><strong>With Your Consent:</strong> When you explicitly authorize us to share information</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  We do not sell your personal information to third parties.
                </p>
              </section>

              <section id="data-security" className="mb-16 scroll-mt-28">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Security</h2>
                <p className="text-gray-700 leading-relaxed">
                  We implement industry-standard security measures to protect your information, including:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-4">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Employee training on data protection practices</li>
                  <li>Incident response procedures</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  While we strive to protect your information, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security.
                </p>
              </section>

              <section id="data-retention" className="mb-16 scroll-mt-28">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Retention</h2>
                <p className="text-gray-700 leading-relaxed">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
                </p>
              </section>

              <section id="your-rights" className="mb-16 scroll-mt-28">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Rights and Choices</h2>
                <p className="text-gray-700 leading-relaxed">
                  Depending on your location, you may have the following rights:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-4">
                  <li><strong>Access:</strong> Request a copy of your personal information</li>
                  <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Receive your data in a portable format</li>
                  <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications</li>
                  <li><strong>Object:</strong> Object to certain processing activities</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  To exercise these rights, please contact us at privacy@nerdlogistics.com.
                </p>
              </section>

              <section id="cookies" className="mb-16 scroll-mt-28">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
                <p className="text-gray-700 leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your experience. You can control cookies through your browser settings, though disabling cookies may affect functionality.
                </p>
              </section>

              <section id="international" className="mb-16 scroll-mt-28">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">International Data Transfers</h2>
                <p className="text-gray-700 leading-relaxed">
                  Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with this policy.
                </p>
              </section>

              <section id="children" className="mb-16 scroll-mt-28">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children.
                </p>
              </section>

              <section id="changes" className="mb-16 scroll-mt-28">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date. Your continued use of our services after changes constitutes acceptance of the updated policy.
                </p>
              </section>

              <section id="contact" className="mb-16 scroll-mt-28">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-semibold text-gray-900">Email:</span>
                      <a href="mailto:privacy@nerdlogistics.com" className="ml-2 text-gray-900 hover:text-gray-700 underline">
                        privacy@nerdlogistics.com
                      </a>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-gray-900">Data Protection Officer:</span>
                      <a href="mailto:dpo@nerdlogistics.com" className="ml-2 text-gray-900 hover:text-gray-700 underline">
                        dpo@nerdlogistics.com
                      </a>
                    </div>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
