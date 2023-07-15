import { create } from '@storybook/theming';
import logo from '../public/images/costco-logo.png'
import './index.css'

export default create({
  base: 'light',
  colorPrimary: '#0060a9',
  colorSecondary: '#0b6e22',

  //ui
  appBg: '#eeeeee',
  appContentBg: 'white',
  appBorderColor: '#5f5f5f',
  appBorderRadius: 4,

  //typography
  fontBase: 'Roboto',
  //  fontCode: "monospace",

  //text colors
  textColor: '#333333',
  textInverseColor: '#eeeeee',

  //toolbar default and active colors
  barTextColor: '#eeeeee',
  barSelectedColor: '#fff',
  barBg: '#0060a9',

  //forms
  inputBg: '#fff',
  inputBorder: '#909090',
  inputTextColor: '#333333',
  inputBorderRadius: 4,

  //branding
  brandTitle: 'Costco Web Components',
  brandUrl: '/',
  brandImage: logo,
});
