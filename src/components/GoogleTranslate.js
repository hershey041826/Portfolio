import React, { useState, useEffect } from 'react';

const GoogleTranslate = () => {
  const apiKey = 'a71a6e73e0msha31b18e1db580b6p155ed0jsn7cdf796a7a4a'; 
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // Default language
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const translateText = async (text, languageCode) => {
    const url = 'https://microsoft-translator-text.p.rapidapi.com/translate/v0.3';

    const requestOptions = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
      },
      body: JSON.stringify({
        'to': languageCode,
        'api-version': '3.0',
        'profanityAction': 'NoAction',
        'textType': 'plain',
        'text': [text]
      })
    };

    try {
      const response = await fetch(url, requestOptions);
      const data = await response.json();

      if (data && data[0] && data[0].translations && data[0].translations.length > 0 && data[0].translations[0].text) {
        return data[0].translations[0].text;
      } else {
        console.error('Invalid or empty response from translation API:', data);
        return '';
      }
    } catch (error) {
      console.error('Error translating text:', error);
      return '';
    }
  };

  useEffect(() => {
    const translateWebContent = async () => {
      const elementsToTranslate = document.querySelectorAll('.translate-content');

      elementsToTranslate.forEach(async (element) => {
        const originalText = element.textContent;
        const translatedText = await translateText(originalText, selectedLanguage);
        element.textContent = translatedText;
      });
    };

    translateWebContent();
  }, [selectedLanguage]);

  const handleLanguageSelect = (languageCode) => {
    setSelectedLanguage(languageCode);
    setIsOpen(false);
  };

  return (
    <div onClick={toggleDropdown} className="relative ml-4">
      <button className="p-2 text-sm text-purple-700 border border-gray-300 rounded-lg bg-gray-50 focus:ring-white focus:border-black dark:bg-purple-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-white dark:focus:border-black-500">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-translate" viewBox="0 0 16 16">
  <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z"/>
  <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z"/>
</svg>
      </button>

      <div className={`absolute ${isOpen ? 'block' : 'hidden'} mt-2 space-y-2 dark:bg-white bg-purple-700 border-black rounded-lg text-white dark:text-purple-700 font-bold `}>
        <button className="block px-4 py-2 hover:text-purple-700 dark:hover:text-white dark:font-black hover:bg-white dark:hover:bg-purple-700" onClick={() => handleLanguageSelect('en')}>
          En
        </button>
        <button className="block px-4 py-2 hover:text-purple-700 dark:hover:text-white dark:font-black hover:bg-white dark:hover:bg-purple-700" onClick={() => handleLanguageSelect('es')}>
          Es
        </button>
        <button className="block px-4 py-2 hover:text-purple-700 dark:hover:text-white dark:font-black hover:bg-white dark:hover:bg-purple-700" onClick={() => handleLanguageSelect('fr')}>
          Fr
        </button>
        {/* Add more language options as needed */}
      </div>
    </div>
  );
};

export default GoogleTranslate;
