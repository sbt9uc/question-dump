import React from "react"
import { IDefaultProps } from "../../types/default-props"
import styled from "styled-components"
import colors from "../colors"

export interface IButtonProps extends IDefaultProps {
  /**
   * [optional] Identifier to pass to onClick callback
   */
  id?: string
  /**
   * [required] Callback when user clicks button
   * `id` or `null` will be passed to `onClick`
   */
  onClick: (id?: string) => void
  /**
   * [optional] indicates whether the button is selected or not
   */
  isSelected?: boolean
}

const StyledToggleButton = styled.div`
  border-radius: 5px;
  background-color: ${(props: IButtonProps) =>
    props.isSelected ? colors.gray2 : colors.gray1};
  padding: 10px;
  font-size: 16px;
  lineheight: 20px;
  margin-left: 15px;
  min-width: 260px;
  display: flex;
  justify-content: center;
  cursor: pointer;
`

export const ToggleButton: React.FunctionComponent<IButtonProps> = (
  props: IButtonProps
) => {
  return <StyledToggleButton {...props}>{props.children}</StyledToggleButton>
}
