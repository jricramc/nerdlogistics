import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    { id: 'acceptance', title: 'Acceptance of Terms' },
    { id: 'eligibility', title: 'Eligibility' },
    { id: 'account', title: 'Account Registration' },
    { id: 'use-of-services', title: 'Use of Services' },
    { id: 'prohibited-conduct', title: 'Prohibited Conduct' },
    { id: 'intellectual-property', title: 'Intellectual Property' },
    { id: 'user-content', title: 'User Content and Data' },
    { id: 'fees-payment', title: 'Fees and Payment' },
    { id: 'service-availability', title: 'Service Availability' },
    { id: 'warranties', title: 'Warranties and Disclaimers' },
    { id: 'limitation-liability', title: 'Limitation of Liability' },
    { id: 'indemnification', title: 'Indemnification' },
    { id: 'termination', title: 'Termination' },
    { id: 'dispute-resolution', title: 'Dispute Resolution' },
    { id: 'changes', title: 'Changes to Terms' },
    { id: 'general', title: 'General Provisions' },
    { id: 'contact', title: 'Contact Information' },
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Terms of Service</h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Please read these terms carefully before using our services. These terms govern your access to and use of Nerd Logistics.
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
              
              <section id="acceptance" className="mb-16 scroll-mt-28">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  By accessing or using Nerd Logistics' AI-native logistics operations platform and related services (the "Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use our Services.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  These Terms constitute a legally binding agreement between you and Nerd Logistics. Please read them carefully.
                </p>
              </section>

              <section id="eligibility" className="mb-16 scroll-mt-28">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Eligibility</h2>
                <p className="text-gray-700 leading-relaxed">
                  You must be at least 18 years old and have the legal authority to enter into these Terms. If you are using the Services on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.
                </p>
              </section>

              <section id="account" className="mb-16 scroll-mt-28">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Account Registration</h2>
                <p className="text-gray-700 leading-relaxed">
                  To access certain features of our Services, you must create an account. You agree to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-4">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain and promptly update your account information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Accept responsibility for all activities under your account</li>
                  <li>Notify us immediately of any unauthorized access</li>
                </ul>
              </section>

              <section id="use-of-services" className="mb-16 scroll-mt-28">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Use of Services</h2>
                <p className="text-gray-700 leading-relaxed">
                  Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use our Services for your business operations.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Permitted Uses</h3>
                <p className="text-gray-700 leading-relaxed">
                  You may use our Services to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-3">
                  <li>Manage and optimize your logistics operations</li>
                  <li>Access AI-powered insights and recommendations</li>
                  <li>Integrate with your existing systems and workflows</li>
                  <li>Collaborate with team members</li>
                </ul>
              </section>

              <section id="prohibited-conduct" className="mb-16 scroll-mt-28">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Prohibited Conduct</h2>
                <p className="text-gray-700 leading-relaxed">
                  You agree not to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-4">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe upon intellectual property rights</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with or disrupt the Services</li>
                  <li>Reverse engineer, decompile, or disassemble our software</li>
                  <li>Use the Services for competitive purposes</li>
                  <li>Upload malicious code or viruses</li>
                  <li>Scrape or harvest data from the Services</li>
                  <li>Resell or redistribute the Services</li>
                </ul>
              </section>

              <section id="intellectual-property" className="mb-16 scroll-mt-28">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
                <p className="text-gray-700 leading-relaxed">
                  All content, features, functionality, software, and technology underlying the Services are owned by Nerd Logistics and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property laws.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Our trademarks, service marks, and logos may not be used without our prior written consent.
                </p>
              </section>

              <section id="user-content" className="mb-16 scroll-mt-28">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">User Content and Data</h2>
                <p className="text-gray-700 leading-relaxed">
                  You retain all rights to the data and content you submit to the Services ("User Content"). By submitting User Content, you grant us a license to use, store, process, and display it solely for the purpose of providing the Services.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  You represent that you have all necessary rights to the User Content and that it does not violate any laws or third-party rights.
                </p>
              </section>

              <section id="fees-payment" className="mb-16 scroll-mt-28">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Fees and Payment</h2>
                <p className="text-gray-700 leading-relaxed">
                  Certain features of the Services may require payment of fees. You agree to pay all applicable fees as described in your subscription plan. All fees are non-refundable except as required by law or expressly stated otherwise.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  We may modify our fees with 30 days' prior notice. Continued use of the Services after the effective date constitutes acceptance of the new fees.
                </p>
              </section>

              <section id="service-availability" className="mb-16 scroll-mt-28">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Availability</h2>
                <p className="text-gray-700 leading-relaxed">
                  We strive to maintain high availability and reliability of our Services. However, we do not guarantee uninterrupted, error-free, or secure access. We may suspend, modify, or discontinue any aspect of the Services at any time, with or without notice.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  We will make reasonable efforts to provide advance notice of planned maintenance that may affect availability.
                </p>
              </section>

              <section id="warranties" className="mb-16 scroll-mt-28">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Warranties and Disclaimers</h2>
                <p className="text-gray-700 leading-relaxed font-semibold">
                  THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  We disclaim all warranties, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the Services will meet your requirements or that operation will be uninterrupted or error-free.
                </p>
              </section>

              <section id="limitation-liability" className="mb-16 scroll-mt-28">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed font-semibold">
                  TO THE FULLEST EXTENT PERMITTED BY LAW, NERD LOGISTICS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Our total liability for any claims arising out of or relating to these Terms or the Services shall not exceed the amount you paid us in the 12 months preceding the claim.
                </p>
              </section>

              <section id="indemnification" className="mb-16 scroll-mt-28">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Indemnification</h2>
                <p className="text-gray-700 leading-relaxed">
                  You agree to indemnify, defend, and hold harmless Nerd Logistics from any claims, liabilities, damages, losses, and expenses arising out of your use of the Services, violation of these Terms, or infringement of any rights of another party.
                </p>
              </section>

              <section id="termination" className="mb-16 scroll-mt-28">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Termination</h2>
                <p className="text-gray-700 leading-relaxed">
                  Either party may terminate these Terms at any time. We may suspend or terminate your access to the Services immediately if you breach these Terms or for any other reason at our sole discretion.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Upon termination, your right to use the Services will immediately cease. We will provide you with access to export your User Content for a reasonable period following termination.
                </p>
              </section>

              <section id="dispute-resolution" className="mb-16 scroll-mt-28">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Dispute Resolution</h2>
                <p className="text-gray-700 leading-relaxed">
                  Any disputes arising from these Terms or the Services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. The arbitration shall be conducted in English in the State of Delaware.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  You agree to waive any right to a jury trial or to participate in a class action.
                </p>
              </section>

              <section id="changes" className="mb-16 scroll-mt-28">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to modify these Terms at any time. We will notify you of material changes via email or through the Services. Your continued use after the effective date constitutes acceptance of the modified Terms.
                </p>
              </section>

              <section id="general" className="mb-16 scroll-mt-28">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">General Provisions</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><strong>Governing Law:</strong> These Terms are governed by the laws of the State of Delaware</li>
                  <li><strong>Severability:</strong> If any provision is found unenforceable, the remaining provisions remain in effect</li>
                  <li><strong>Waiver:</strong> No waiver of any term shall be deemed a further or continuing waiver</li>
                  <li><strong>Assignment:</strong> You may not assign these Terms without our written consent</li>
                  <li><strong>Entire Agreement:</strong> These Terms constitute the entire agreement between you and Nerd Logistics</li>
                </ul>
              </section>

              <section id="contact" className="mb-16 scroll-mt-28">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  For questions, concerns, or notices regarding these Terms of Service, please contact us:
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-semibold text-gray-900">Legal Department:</span>
                      <a href="mailto:legal@nerdlogistics.com" className="ml-2 text-gray-900 hover:text-gray-700 underline">
                        legal@nerdlogistics.com
                      </a>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-gray-900">General Inquiries:</span>
                      <a href="mailto:support@nerdlogistics.com" className="ml-2 text-gray-900 hover:text-gray-700 underline">
                        support@nerdlogistics.com
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
