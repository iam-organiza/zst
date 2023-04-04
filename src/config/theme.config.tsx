import {extendTheme} from 'native-base';

const theme = extendTheme({
  fontConfig: {
    Montserrat: {
      100: {
        normal: 'Montserrat-Thin',
        italic: 'Montserrat-ThinItalic',
      },
      200: {
        normal: 'Montserrat-ExtraLight',
        italic: 'Montserrat-ExtraLightItalic',
      },
      300: {
        normal: 'Montserrat-Light',
        italic: 'Montserrat-LightItalic',
      },
      400: {
        normal: 'Montserrat-Regular',
        // italic: 'Montserrat-RegularItalic', // Google fonts has no Be Vietnam Pro Regular Italic Font
      },
      500: {
        normal: 'Montserrat-Medium',
        italic: 'Montserrat-MediumItalic',
      },
      600: {
        normal: 'Montserrat-SemiBold',
        italic: 'Montserrat-SemiBoldItalic',
      },
      700: {
        normal: 'Montserrat-Bold',
        italic: 'Montserrat-BoldItalic',
      },
      800: {
        normal: 'Montserrat-ExtraBold',
        italic: 'Montserrat-ExtraBoldItalic',
      },
      900: {
        normal: 'Montserrat-Black',
        italic: 'Montserrat-BlackItalic',
      },
    },
  },
  colors: {},
  fonts: {
    Montserrat: 'Montserrat',
  },
  components: {},
});

export default theme;
