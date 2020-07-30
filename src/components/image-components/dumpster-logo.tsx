import React, { ReactHTMLElement } from "react"
import styled from "styled-components"
import logo from "../../images/flame-icon.png"

const Image = styled.img`
  width: inherit;
  height: inherit;
  margin-bottom: 0px;
`

export const DumpsterLogo: React.FunctionComponent<React.HTMLProps<
  HTMLElement
>> = props => {
  return <Image src={logo} alt="Logo" />
}
