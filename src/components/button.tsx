import React from "react"
import { IDefaultProps } from "../types/default-props"
import styled from "styled-components"

export interface IBaseButtonProps extends IDefaultProps {
  /**
   * [optional] Identifier to pass to onClick callback
   */
  id?: string
  /**
   * [required] Callback when user clicks button
   *
   * `id` or `null` will be passed to `onClick`
   */
  onClick: (id?: string) => void
  /**
   * [optional] Disables button interactions and applies styling
   * when `true`
   */
  disabled?: boolean
  /**
   * [optional] primary vs secondary buttons to indicate colors
   */
  secondary?: boolean
}

const StyledButton = styled.button`
  border-radius: 5px;
  background-color: ${(props: IBaseButtonProps) =>
    props.secondary ? "#d9dafa" : "#060a91"};
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  margin-left: 15px;
  height: 35px;
  width: 100px;
  font-size: 16px;
`

export const BasicButton: React.FunctionComponent<IBaseButtonProps> = (
  props: IBaseButtonProps
) => {
  return <StyledButton {...props}>{props.children}</StyledButton>
}
