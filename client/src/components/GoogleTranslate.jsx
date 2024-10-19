import React, { useEffect } from "react";

const GoogleTranslate = () => {
  useEffect(() => {
    window.googleTranslateInit = () => {
      if (!window.google?.translate?.TranslateElement) {
        setTimeout(window.googleTranslateInit, 100);
      } else {
        new window.google.translate.TranslateElement({
          pageLanguage: 'en',
          includedLanguages: 'en,hi,pa,sa,mr,ur,bn,es,ja,ko,zh-CN,es,nl,fr,de,it,ta,te',
          layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
          defaultLanguage: 'en',
          autoDisplay: false,
        }, 'google_element');
      }
    };

    const loadGoogleTranslateScript = () => {
      if (!document.getElementById("google_translate_script")) {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateInit";
        script.id = "google_translate_script";
        script.onerror = () => console.error('Error loading Google Translate script');
        document.body.appendChild(script);
      }
    };

    loadGoogleTranslateScript();

    if (window.google && window.google.translate) {
      window.googleTranslateInit();
    }

    return () => {
      // Cleanup logic if necessary
    };
  }, []);

  return (
    <div id="google_element" className="google-translate-container pl-20 md:pl-0">
      <style jsx>{`
        .goog-te-combo {
          background-color: #e0f2ff; /* Light blue background */
          border: 2px solid #0056b3; /* Dark blue border */
          border-radius: 0.5rem; /* Slightly more rounded */
          // padding: 0.5rem 1rem; /* Tailwind: p-2 */
          font-size: 0.875rem; /* Tailwind: text-sm */
          transition: all 0.3s ease; /* Smooth transition */
          outline: none;
          color: #000; /* Black text */
          font-weight: 500; /* Tailwind: font-medium */
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Slight shadow */
          width: 100%;
          margin : auto;
        }

        .goog-te-combo:hover {
          background-color: #b3e0ff; /* Lighter blue on hover */
          border-color: #004494; /* Darker blue on hover */
          box-shadow: 0 6px 8px rgba(0, 0, 0, 0.25); /* Stronger shadow on hover */
        }

        .goog-logo-link {
          display: none !important;
        }

        .goog-te-gadget{
          color: transparent !important;
        }

        .goog-te-gadget > span > a {
          display: none !important;
        }

        .goog-te-gadget .goog-te-combo {
          color: #0056b3 !important; /* Dark blue text */
        }

        #google_translate_element .goog-te-gadget-simple .goog-te-menu-value span:first-child {
          display: none;
        }

        #google_translate_element .goog-te-gadget-simple .goog-te-menu-value:before {
          content: 'Translate'; /* Change the default text */
          color: #0056b3; /* Dark blue text */
        }

        .goog-te-banner-frame {
          display: none !important;
        }

        .goog-te-menu-frame {
          max-height: 400px !important;
          overflow-y: auto !important;
          background-color: #fff; /* White background for dropdown */
          border: 1px solid #cce5ff; /* Light blue border */
          border-radius: 0.5rem; /* Slightly more rounded */
        }

        /* Hide the banner frame */
        .goog-te-banner-frame {
          display: none !important;
        }

        /* Customize the iframe */
        .skiptranslate > iframe {
          height: 0 !important;
          border-style: none;
          box-shadow: none;
        }
          /* Ensure the body margin isn't affected by Google Translate */
  body {
    top: 0px !important;
    position: relative;
  }
      `}
      </style>
    </div>
  );
};

export default GoogleTranslate;
