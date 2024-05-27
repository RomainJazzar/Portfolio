import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';
function LanguageSwitcher() {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en');
    };

    return (
        <div className="language-switcher">
            <div className="switch">
                <input
                    id="language-toggle"
                    className="check-toggle check-toggle-round-flat"
                    type="checkbox"
                    onChange={toggleLanguage}
                    checked={i18n.language === 'fr'}
                />
                <label htmlFor="language-toggle"></label>
                <span className="on">EN</span>
                <span className="off">FR</span>
            </div>
        </div>

    );
}

export default LanguageSwitcher;
