import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary-black: #0d0d0d;
    --secondary-black: #1a1a1a;
    --accent-red: #e53e3e;
    --light-red: #fc8181;
    --dark-red: #c53030;
    --white: #ffffff;
    --gray-light: #f7fafc;
    --gray-medium: #a0aec0;
    --gray-dark: #4a5568;
    --accent-gold: #d69e2e;
    --accent-blue: #3182ce;
  }

  html {
    font-size: 16px;
    
    @media (max-width: 768px) {
      font-size: 14px;
    }
    
    @media (max-width: 480px) {
      font-size: 13px;
    }
  }

  body {
    font-family: 'Inter', sans-serif;
    background: linear-gradient(135deg, var(--primary-black) 0%, #111111 50%, var(--secondary-black) 100%);
    color: var(--white);
    line-height: 1.6;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
    -webkit-tap-highlight-color: transparent;
  }

  input, textarea, select {
    font-family: inherit;
    border: none;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  ::-webkit-scrollbar {
    width: 6px;
    
    @media (max-width: 768px) {
      width: 4px;
    }
  }

  ::-webkit-scrollbar-track {
    background: var(--secondary-black);
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, var(--accent-red), var(--dark-red));
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, var(--light-red), var(--accent-red));
  }

  @media (max-width: 768px) {
    button, a, input, select, textarea {
      min-height: 44px;
      min-width: 44px;
    }
  }

  @media screen and (max-width: 768px) {
    input[type="text"],
    input[type="email"],
    input[type="tel"],
    textarea {
      font-size: 16px;
    }
  }
`;