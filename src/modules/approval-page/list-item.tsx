import React from 'react'
import { IDefaultProps } from '../../types/default-props'
import styled from 'styled-components'
import colors from '../../components/colors'
import { IDumpsterItem } from '../../types/question-types'
import { BasicButton } from '../../components/button'
import { doUpdate } from './actions'
import { useStore } from '../store'

export interface IRowProps extends IDefaultProps {
  /**
   * [required] question object to display
   */
  item: IDumpsterItem
  /**
   * is it a title row
   */
  isTitle?: boolean
}

const QuesstionWrapper = styled.div`
  border-radius: 5px;
  border: 1px solid ${colors.gray1};
  &:hover {
    background-color: ${colors.gray1};
  }
  padding: 10px;
  font-size: 16px;
  lineheight: 20px;
  margin-top: 5px;
  min-height: 30px;
  min-width: 800px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const TableHeader = styled(QuesstionWrapper)`
  background-color: ${colors.periwinkle};
  &:hover {
    background-color: ${colors.periwinkle};
  }
  font-weight: 600px;
`
const TextWrapper = styled.div`
  display: flex;
  align-self: center;
  margin: 0px;
`

const StyledBasicButton = styled(BasicButton)`
  font-size: 12px;
  line-height: 16px;
  background-color: ${colors.periwinkle};
`



export const QuestionItem: React.FunctionComponent<IRowProps> = (
  props: IRowProps
) => {
  const {state, dispatch } = useStore();

  const renderButton = () => {
    props.item.createdOn
    const { createdOn, updatedOn, ...q } = props.item
    return (
      <div>
        <StyledBasicButton
          onClick={() =>
            doUpdate(
              { ...q, isApproved: 1 },
              state,
              dispatch,
            )
          }
        >
          Approve
        </StyledBasicButton>
        <StyledBasicButton
          onClick={() =>
            doUpdate(
              { ...q, isActive: false, isApproved: 0 },
              state,
              dispatch,
            )
          }
        >
          Delete
        </StyledBasicButton>
      </div>
    )
  }

  const renderLastUpdated = () => {
    const updatedDate = new Date(props.item.updatedOn || 0)
    return <TextWrapper>{updatedDate.toLocaleDateString('en-US')}</TextWrapper>
  }

  const renderValue = props.item.question || props.item.zoomTheme;

  return props.isTitle ? (
    <TableHeader {...props}>
      <TextWrapper>Question</TextWrapper>
      <TextWrapper>Last Updated</TextWrapper>
    </TableHeader>
  ) : (
    <QuesstionWrapper {...props}>
      <TextWrapper style={{ maxWidth: '600px' }}>
        {renderValue}
      </TextWrapper>
      {!props.item.isApproved && props.item.isActive && renderButton()}
      {props.item.isApproved ? renderLastUpdated() : null}
    </QuesstionWrapper>
  )
}
