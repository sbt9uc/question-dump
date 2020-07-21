import React from 'react'
import { IDefaultProps } from '../../types/default-props'
import styled from 'styled-components'
import colors from '../../components/colors'
import { IDumpsterQuestion } from '../../types/question-types'
import { BasicButton } from '../../components/button'
import { doUpdate } from './services'

export interface IRowProps extends IDefaultProps {
  /**
   * [required] Callback when user clicks button
   * `id` or `null` will be passed to `onClick`
   */
  onClick?: (id?: string) => void
  /**
   * [required] question object to display
   */
  question: IDumpsterQuestion
  /**
   * is it a title row
   */
  isTitle?: boolean

  questionList: IDumpsterQuestion[]
  updateList: (a: IDumpsterQuestion[]) => void
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

const StyledBasicButton = styled(BasicButton)`
  font-size: 12px;
  line-height: 16px;
  background-color: ${colors.periwinkle};
`

const TextWrapper = styled.div`
  display: flex;
  align-self: center;
  margin: ${(props: IRowProps) => (props.isTitle ? '10px;' : '0px;')};
`

export const QuestionItem: React.FunctionComponent<IRowProps> = (
  props: IRowProps
) => {
  const renderButton = () => {
    props.question.createdOn
    const { createdOn, updatedOn, ...q } = props.question
    return (
      <div>
        <StyledBasicButton
          onClick={() =>
            doUpdate(
              { ...q, isApproved: 1 },
              props.questionList,
              props.updateList
            )
          }
        >
          Approve
        </StyledBasicButton>
        <StyledBasicButton
          onClick={() =>
            doUpdate(
              { ...q, isActive: false, isApproved: 0 },
              props.questionList,
              props.updateList
            )
          }
        >
          Delete
        </StyledBasicButton>
      </div>
    )
  }

  const renderLastUpdated = () => {
    const updatedDate = new Date(props.question.updatedOn || 0)
    return <TextWrapper>{updatedDate.toLocaleDateString('en-US')}</TextWrapper>
  }

  return props.isTitle ? (
    <TableHeader {...props}>
      <TextWrapper>Question</TextWrapper>
      <TextWrapper>Last Updated</TextWrapper>
    </TableHeader>
  ) : (
    <QuesstionWrapper {...props}>
      <TextWrapper style={{ maxWidth: '600px' }}>
        {props.question.question}
      </TextWrapper>
      {!props.question.isApproved && props.question.isActive && renderButton()}
      {props.question.isApproved ? renderLastUpdated() : null}
    </QuesstionWrapper>
  )
}
