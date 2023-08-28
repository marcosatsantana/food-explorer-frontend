import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global'
import darkTheme from './styles/theme';
import { AuthProvider } from './hooks/auth';
import { FavoritesProvider } from './hooks/favorites';
import { CartProvider } from './hooks/cart';

import { Routes } from './routes';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthProvider>
            <CartProvider>
                <FavoritesProvider>
                    <ThemeProvider theme={darkTheme}>
                        <GlobalStyles />
                        <Routes />
                    </ThemeProvider>
                </FavoritesProvider>
            </CartProvider>
        </AuthProvider>
    </React.StrictMode>
)