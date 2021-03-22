
const lightStyleSheet = {
  dark: 'black',
  light: 'white',
  primary: '#5DB075',
  secondary: '#4B9460',
  lightgray: '#F6F6F6',
  gray: '#E8E8E8',
  darkgray: '#BDBDBD',
  text: '#666666'
}

const darkStyleSheet = {

}

export default (function ColorTheme(useDarkTheme){
     return useDarkTheme ? darkStyleSheet : lightStyleSheet;
})()
