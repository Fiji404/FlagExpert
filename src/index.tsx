import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.tsx';
import { i18n } from '@/translations/i18n';
import { I18nextProvider } from 'react-i18next';

const root = createRoot(document.getElementById('root')!);

root.render(
    <React.StrictMode>
        <I18nextProvider i18n={i18n}>
            <App />
        </I18nextProvider>
    </React.StrictMode>
);
