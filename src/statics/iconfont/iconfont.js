import { createGlobalStyle } from 'styled-components'
export const GlobalIconStyle =createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1553765468748'); /* IE9 */
  src: url('./iconfont.eot?t=1553765468748#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1553765468748') format('woff'),
  url('./iconfont.ttf?t=1553765468748') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1553765468748#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;