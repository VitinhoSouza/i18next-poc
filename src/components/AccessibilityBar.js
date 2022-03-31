import React from 'react';
import i18n from '../translate/i18n';
import { useTranslation } from 'react-i18next';

export function AccessibilityBar() {

  const { t } = useTranslation();

  const handleLanguage = event => {
      event.preventDefault();
      const language = event.target.value;
      console.log(language);
      i18n.changeLanguage(language);
  }

  //Adding a commentary

  return (
    <div>
        <header>
            <h2>Component: {t('accessibilityBar:title')}</h2>
            <button>{t('accessibilityBar:textButton')}</button>
            <span>{t('accessibilityBar:warning')}</span>
        </header>
        <main>
            <p></p>
            <select
                defaultValue="pt" onChange={handleLanguage}
            >
                <option value="pt">Português</option>
                <option value="en">English</option>
            </select>
        </main>
    </div>
  );
}
