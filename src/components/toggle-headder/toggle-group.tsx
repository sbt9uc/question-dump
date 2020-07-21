import React, { useState } from 'react'
import { IDefaultProps } from '../../types/default-props'
import styled from 'styled-components'
import colors from '../colors'
import { ToggleButton } from './toggle-button'

export interface IFilterProps extends IDefaultProps {
  /**
   * [optional] Identifier to pass to onClick callback
   */
  id?: string
  /**
   * [optional] Disables button interactions and applies styling
   * when `true`
   */
  disabled?: boolean
  /**
   * [required] the list of values to display in the toggle
   */
  headerTitles: ITextPairs[]
  /**
   * [required] onChange to pass to page
   */
  onChange: (id: string) => void
}

interface ITextPairs {
  id: string
  textDisplay: string
}

const StyledHeader = styled.div`
  min-height: 50px;
  min-width: 500px;
`

export const ToggleGroup: React.FunctionComponent<IFilterProps> = (
  props: IFilterProps
) => {
  const [currentId, setCurrentId] = useState<string>(props.headerTitles[0].id)

  const handleToggle = (id: string) => {
    setCurrentId(id)
    props.onChange(id)
  }

  const renderHeaderButtons = () => {
    return props.headerTitles.map(header => {
      const isSelected = currentId === header.id
      return (
        <ToggleButton
          isSelected={isSelected}
          id={header.id}
          onClick={() => handleToggle(header.id)}
          key={header.id}
        >
          {header.textDisplay}
        </ToggleButton>
      )
    })
  }

  return (
    <StyledHeader
      {...props}
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderRadius: '5px',
        backgroundColor: colors.gray1,
        padding: '10px',
      }}
    >
      {renderHeaderButtons()}
    </StyledHeader>
  )
}
