import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HeaderWrapper = styled.div`
  maxwidth: 960px;
  padding: 30px 160px;
  display: flex;
  flex-direction: row;
`

const TextWrapper = styled.h1`
  margin: 0px;
`

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#348a69`,
      marginBottom: `1.45rem`,
    }}
  >
    <HeaderWrapper>
      <TextWrapper>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </TextWrapper>
    </HeaderWrapper>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
