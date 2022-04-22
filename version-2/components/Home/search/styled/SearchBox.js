import styled, { css } from "styled-components"
import SearchBox from "../SearchBox"

const open = css`
  background: ${({ theme }) => theme.background};
  cursor: text;
  margin-left: -2.5em;
  padding-left: 1.6em;
  border-radius: 50px;
  padding: 26px 50px;
  height: 46px;
`

// const closed = css`
//   margin-left: -2.5em;
//   padding-left: 1.6em;
//   padding: 26px 50px;
//   height: 46px;
//   border-radius: 50px;
// `

export default styled(SearchBox)`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  margin-bottom: 30px;
  margin-top: 10px;
  .SearchInput {
    width: 100% !important;
    outline: none;
    border: ${({ hasFocus }) => (hasFocus ? "none" : "none")} !important;
    font-size: 1em;
    transition: 100ms;
    color: ${({ theme }) => theme.foreground};
    ::placeholder {
      color: ${({ theme }) => theme.faded};
    }
    ${({ hasFocus }) => (hasFocus ? open : open)}    
    box-shadow: rgb(87 200 241 / 25%) 3px 5px 4px 2px;
  }

  .SearchIcon {
    width: 20px !important;
    margin: 0.3em;
    color: #38a2d5;
    pointer-events: none;
  }

  input:valid:not(:focus){
      border-radius: 50px;
  }

  input:valid:visited{
    border: red;
  }

  .SearchInput:valid{ 
    border-bottom-left-radius:0px;
    border-bottom-right-radius:0px;
    border-top-left-radius:20px;
    border-top-right-radius:20px;
  }

`