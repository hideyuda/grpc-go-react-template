import { createGlobalStyle } from 'styled-components'
import { Color } from './Enums'

export const BaseStyles = createGlobalStyle`
  body {
    background-color: ${Color.Base2};
    -webkit-text-size-adjust: 100%;
  }

  @media screen and (min-width: 1024px) {
    html {
      font-size: 16px;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    html {
      font-size: 14px;
    }
  }

  @media screen and (min-width: 479px) and (max-width: 768px) {
    html {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 480px) {
    html {
      font-size: 16px;
    }
  }
`
