import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SuccessPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Fire Google Ads conversion event
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17867742764/TyWxCNeE0u8bEKy8gMhC',
        'value': 1.0,
        'currency': 'EUR'
      });
    }

    // Redirect after 3.5 seconds
    const timer = setTimeout(() => {
      navigate('/');
    }, 3500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="text-center px-6">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
          <svg
            className="w-10 h-10 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1 className="font-serif text-4xl md:text-5xl font-normal text-gray-900 mb-4">
          Thank you!
        </h1>
        <p className="text-lg text-gray-600">
          Your request has been submitted successfully.
        </p>
        <p className="text-sm text-gray-500 mt-2">
          We'll be in touch soon.
        </p>
      </div>
    </div>
  );
}
