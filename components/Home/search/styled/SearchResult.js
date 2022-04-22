import styled, { css } from "styled-components"
import SearchResult from "../SearchResult"

const Popover = css`
  max-height: 40vh;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  z-index: 2;
  right: 0;
  top: 100%;
  margin-top: 0em;
  width: 100%;
  max-width: 100em;
  box-shadow: rgb(87 200 241 / 25%) 3px 5px 4px 2px;
  border-radius: 2px;
  background: ${({ theme }) => theme.background};
  left: 0;
  border-bottom-left-radius:20px;
  border-bottom-right-radius:20px;
  padding-top: 0px;
`

export default styled(SearchResult)`

  display: ${props => (props.show ? `block` : `none`)};

  ::-webkit-scrollbar {
    width: 0;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
  }
  ${Popover}

  .HitCount {
    display: flex;
    justify-content: flex-end;  
  }

  .Hits {
    ul {
      list-style: none;
      margin-left: 0;
      padding-left: 0px;
      margin-bottom: 0px !important;
    }

    li.ais-Hits-item {
      border-top: 1px solid #80808030;
      /* padding: 12px;
      padding-left: 18px; */

      a {
        color: ${({ theme }) => theme.foreground};

        h4 {
          margin-bottom: 0.2em;
        }
      }
    }

    li.ais-Hits-item:hover{
      background-color: #80808030;
    }
  }

  .ais-PoweredBy {
    display: flex;
    justify-content: flex-end;
    font-size: 80%;
    margin-top:15px;

    svg {
      width: 50px;
    }

    .sc-gsTEea{
      display: none !important;
    }
  }
`