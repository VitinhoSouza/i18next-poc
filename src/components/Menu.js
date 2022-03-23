import React from 'react';
import { useTranslation } from 'react-i18next';

export function Menu() {

  const { t } = useTranslation();

  return (
    <div>
        <header>
            <h2>Component: {t('menu:title')}</h2>
            <span>{t('menu:textMenu')}</span>
        </header>
        <main>
            <p></p>
        </main>
    </div>
  );
}
