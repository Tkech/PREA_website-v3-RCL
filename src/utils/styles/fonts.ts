import { createGlobalStyle } from "styled-components";

const GlobalFonts = createGlobalStyle`
/* inter-regular - latin_cyrillic-ext_cyrillic */
body, html {
    @font-face {
      font-family: 'InterP';
      src: url(${"/fonts/Inter_P-Regular.ttf"}) format('truetype');
    }

    @font-face {
      font-family: "InterP";
      src: url(${"/fonts/Inter_P-Thin.ttf"}) format('truetype');
      font-weight: 100;
    }

    @font-face {
      font-family: "InterP";
      src: url(${"/fonts/Inter_P-ThinItalic.ttf"}) format('truetype');
      font-weight: 100;
      font-style: italic;
    }

    @font-face {
      font-family: "InterP";
      src: url(${"/fonts/Inter_P-ExtraLight.ttf"}) format('truetype');
      font-weight: 200;
    }

    @font-face {
      font-family: "InterP";
      src: url(${"/fonts/Inter_P-ExtraLightItalic.ttf"}) format('truetype');
      font-weight: 200;
      font-style: italic;
    }

    @font-face {
      font-family: "InterP";
      src: url(${"/fonts/Inter_P-Light.ttf"}) format('truetype');
      font-weight: 300;
    }

    @font-face {
      font-family: "InterP";
      src: url(${"/fonts/Inter_P-LightItalic.ttf"}) format('truetype');
      font-weight: 300;
      font-style: italic;
    }

    @font-face {
      font-family: "InterP";
      src: url(${"/fonts/Inter_P-Regular.ttf"}) format('truetype');
      font-weight: 400;
    }

    @font-face {
      font-family: "InterP";
      src: url(${"/fonts/Inter_P-RegularItalic.ttf"}) format('truetype');
      font-weight: 400;
      font-style: italic;
    }

    @font-face {
      font-family: "InterP";
      src: url(${"/fonts/Inter_P-Medium.ttf"}) format('truetype');
      font-weight: 500;
    }

    @font-face {
      font-family: "InterP";
      src: url(${"/fonts/Inter_P-MediumItalic.ttf"}) format('truetype');
      font-weight: 500;
      font-style: italic;
    }


    @font-face {
      font-family: "InterP";
      src: url(${"/fonts/Inter_P-SemiBold.ttf"}) format('truetype');
      font-weight: 600;
    }

    @font-face {
      font-family: "InterP";
      src: url(${"/fonts/Inter_P-SemiBoldItalic.ttf"}) format('truetype');
      font-weight: 600;
      font-style: italic;
    }

    @font-face {
      font-family: "InterP";
      src: url(${"/fonts/Inter_P-Bold.ttf"}) format('truetype');
      font-weight: 700;
    }

    @font-face {
      font-family: "InterP";
      src: url(${"/fonts/Inter_P-BoldItalic.ttf"}) format('truetype');
      font-weight: 700;
      font-style: italic;
    }

    @font-face {
      font-family: "InterP";
      src: url(${"/fonts/Inter_P-ExtraBold.ttf"}) format('truetype');
      font-weight: 800;
    }

    @font-face {
      font-family: "InterP";
      src: url(${"/fonts/Inter_P-ExtraBoldItalic.ttf"}) format('truetype');
      font-weight: 800;
      font-style: italic;
    }

    @font-face {
      font-family: "InterP";
      src: url(${"/fonts/Inter_P-Black.ttf"}) format('truetype');
      font-weight: 900;
    }

    @font-face {
      font-family: "InterP";
      src: url(${"/fonts/Inter_P-BlackItalic.ttf"}) format('truetype');
      font-weight: 900;
      font-style: italic;
    }
`;

export default GlobalFonts;
