import React, { useState, useEffect } from 'react';
import translate from 'google-translate-api';

function TranslatedText({ text, to }) {
  const [translatedText, setTranslatedText] = useState('');

  useEffect(() => {
    translate(text, { to }).then(res => {
      setTranslatedText(res.text);
    }).catch(err => {
      console.error(err);
    });
  }, [text, to]);

  return <p>{translatedText}</p>;
}

export default TranslatedText;