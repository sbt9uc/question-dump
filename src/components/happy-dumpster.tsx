import React, { ReactHTMLElement } from "react"
import styled from "styled-components"
import logo from "../images/dumpster-fire.gif"

const Image = styled.img`
  width: 400px;
  height: 400px;
  margin-bottom: 0px;
`

export const DumpsterImage: React.FunctionComponent<React.HTMLProps<
  HTMLElement
>> = props => {
  return <Image src={logo} alt="Logo" />
}
