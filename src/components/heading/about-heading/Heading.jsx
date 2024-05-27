// Header.js
import React from "react";
import "./heading.scss"; // Make sure to create a corresponding CSS file
import { useTranslation } from 'react-i18next';
const Heading = () => {
  const { t } = useTranslation();
  return (
    <header>
      <h1>{t('WhatI')} <span style={{ color: 'var(--headings--color)' }}>{t('Do')}</span></h1>
      <h3>{t('CrazyFullStackDeveloper')}</h3>
    </header >
  );
};

export default Heading;
