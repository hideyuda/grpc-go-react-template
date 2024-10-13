import { createGlobalStyle } from 'styled-components'

export const ResetStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  button {
    padding: 0;
    background: transparent;
    border: 0;
  }

  ol,
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
`
