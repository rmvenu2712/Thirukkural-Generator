// src/components/TranslateWidget.js
import React, { useEffect, useState } from 'react';

const TranslateWidget = () => {
  const [selectedLang, setSelectedLang] = useState('');

  // These language names will NOT be translated
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ta', name: 'தமிழ்' },
    { code: 'hi', name: 'हिन्दी' },
    { code: 'fr', name: 'Français' },
    { code: 'es', name: 'Español' },
    { code: 'de', name: 'Deutsch' },
    { code: 'ar', name: 'العربية' },
    { code: 'zh-CN', name: '中文' },
    { code: 'ja', name: '日本語' },
    { code: 'ru', name: 'Русский' },
  ];

  useEffect(() => {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({
        pageLanguage: 'ta',
        includedLanguages: 'en,ta,hi,fr,es,de,ar,zh-CN,ja,ru',
        autoDisplay: false,
      }, 'google_translate_element');
    };

    const script = document.createElement('script');
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);

    // Hide default widget and add custom styles
    const style = document.createElement('style');
    style.innerHTML = `
      #google_translate_element {
        display: none;
      }
      .goog-te-banner-frame, .goog-te-balloon-frame {
        display: none !important;
      }
      body {
        top: 0 !important;
      }
      .skiptranslate {
        display: none !important;
      }
      /* Prevent translation of dropdown */
      .notranslate {
        translate: no;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.querySelectorAll('script[src*="translate.google.com"]').forEach(s => s.remove());
    };
  }, []);

  const handleLanguageChange = (e) => {
    const langCode = e.target.value;
    setSelectedLang(langCode);
    
    const selectElement = document.querySelector('.goog-te-combo');
    if (selectElement) {
      selectElement.value = langCode;
      selectElement.dispatchEvent(new Event('change'));
    }
  };

  return (
    <>
      <div id="google_translate_element"></div>
      {/* Add notranslate class to prevent translation */}
      <div className="relative inline-block notranslate">
        <select
          value={selectedLang}
          onChange={handleLanguageChange}
          className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-4 pr-8 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer notranslate"
          translate="no"
        >
          <option value="" className="notranslate">Select Language</option>
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code} className="notranslate">
              {lang.name}
            </option>
          ))}
        </select>
        <svg
          className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </>
  );
};

export default TranslateWidget;
