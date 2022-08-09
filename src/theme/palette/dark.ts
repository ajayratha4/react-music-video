import grey from './shared/grey'
// Pallet colors according Bonnie design: https://www.figma.com/file/pj9Ufe03CNfNAXHD1DLd68/Material-UI-%3C%3E-Ambient?node-id=4633%3A39347
const dark = {
  tonalOffset: 0.1,
  primary: {
    main: '#298AFF',
    light: '#5CA6FF',
    dark: '#216ECC',
    contrastText: '#FFFFFF',
  },
  // DEPRECATED: please do not use. Use primary instead.
  secondary: {
    main: '#298AFF',
    light: '#5CA6FF',
    dark: '#216ECC',
    contrastText: '#FFFFFF',
    // TODO(@stephen | AMB-5729): remove the extra colors below and map these colors
    // to existing colors that we have.
    50: '#DEF4FF',
    100: '#ABE4FE',
    500: '#00A4FA',
    900: '#0052A1',
  },
  error: {
    light: '#FF80BF',
    main: '#FF3366',
    dark: '#800040',
    contrastText: '#FFFFFF',
  },
  warning: {
    light: '#EAFF80',
    main: '#FEA22A',
    dark: '#6A8000',
    contrastText: 'rgb(0, 0, 0, 87)',
  },
  info: {
    light: '#99C3FF',
    main: '#194480',
    dark: '#194480',
    contrastText: '#F8FBFF',
  },
  success: {
    light: '#80E5CF',
    main: '#00CCA0',
    dark: '#006650',
    green: '#11B69D',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  grey,
  neutralGrey: {
    4: '#BDBDBD',
    9: '#F3F3F3',
  },
  text: {
    primary: '#E5E5E5',
    secondary: '#BFBFBF',
    disabled: '#666666',
    hint: 'rgba(255,255,255, 0.38)',
  },
  common: {
    black: '#222428',
    white: '#FFFFFF',
    // custom
    tertiary: '#4242FF',
    greenPastel: '#18FFA6', // tetradic to primary https://www.beautycolorcode.com/1881ff
    greenPastelLight: '#B5FFE3',
    greenNeon: '#81FF18', // triadic
    greenBluePastel: '#1DC8C3', // tritanopia https://encycolorpedia.com/1881ff
    neonYellow: '#E1FF18',
    errorLightPink: '#FFEFF3',
    grey: '#808080',
    inputGrey: '#454B54',
    buttonBlue: '#00BFFF',
    modalBackground: '#333333',
    lighterBlue: '#298AFF',
    shadows: {
      hard: '0px 2px 6px rgba(34, 36, 40, 0.2)',
      soft: '0px 1px 50px rgba(98, 100, 105, 0.15)',
    },
  },
  background: {
    default: '#222428',
    paper: '#222428', // Palette: #241F1E. Need to check with Bonnie. Looks like color doesn't fit as universal
    levels: {
      1: '#222428',
      2: '#333333',
      3: '#454B54',
      4: '#BDBDBD',
    },
    layers: {
      100: '#352E2B',
      200: '#2B2B35',
      300: '#3B3B49',
      400: '#D5D5D5',
      500: '#1F252D',
      600: '#1F252D',
      bg: '#FFFFFF',
      // The colors below are based on the design standards from the figma:
      // https://www.figma.com/file/pj9Ufe03CNfNAXHD1DLd68/Material-UI-Components-(Atoms-and-Molecules)?node-id=5671%3A12120
      background: '#000000',
      main: '#1F252D',
      light: '#2A3038',
      dark: '#191E24',
      container: {
        header: '#1F252D',
        fill: '#191E24',
      },
    },
  },
  border: {
    default: '#3B3B49',
    container: '#616161',
  },
  action: {
    active: '#1881FF',
    hover: '#6EB0FF',
    disabled: '#FFFFFF',
    selected: '#0056CB',
  },
}

export default dark
