import React from 'react';
import TranslatedText from './TranslatedText';

function translatePage() {
  const pageElements = [];

  React.Children.forEach(document.body, (child) => {
    if (child.type === 'p') {
      pageElements.push(
        <TranslatedText text={child.props.children} to="ko" />
      );
    } else {
      pageElements.push(child);
    }
  });

  return pageElements;
}

export default translatePage;