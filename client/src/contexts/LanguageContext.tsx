import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'cn' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('cn');

  useEffect(() => {
    // 检查本地存储中是否有语言设置
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage) {
      setLanguage(savedLanguage);
      return;
    }

    // 如果没有保存的语言设置，则通过 IP 检测
    fetch('https://ipapi.co/json/')
      .then(response => response.json())
      .then(data => {
        // 根据国家/地区代码设置语言
        const chineseRegions = ['CN', 'HK', 'TW', 'MO'];
        const detectedLanguage = chineseRegions.includes(data.country_code) ? 'cn' : 'en';
        setLanguage(detectedLanguage);
        localStorage.setItem('language', detectedLanguage);
      })
      .catch(() => {
        // 如果 API 调用失败，保持默认的中文
        localStorage.setItem('language', 'cn');
      });
  }, []);

  // 修改 setLanguage 函数以同时更新 localStorage
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 