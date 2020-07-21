import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { ToggleGroup } from '../../components/toggle-headder/toggle-group'
import { IDumpsterQuestion, IParams } from '../../types/question-types'
import { QuestionItem } from './list-item'
import { doFetch } from './services'
import { listContext } from './list-context'

const StyledToggle = styled(ToggleGroup)`
  margin-bottom: 25px;
`

const headerOptions = [
  {
    id: 'unaproved',
    textDisplay: 'Questions Pending Approval',
  },
  {
    id: 'approved-unasked',
    textDisplay: 'Approved & Unasked',
  },
  {
    id: 'approved-asked',
    textDisplay: 'Approved & Asked',
  },
]

const ApproveQuestionComponent = () => {
  const [currentTab, setCurrentTab] = useState<string>('unaproved')
  const questionListC = React.useContext(listContext.QuestionListContext)
  const [questionsList, setQuestionsList] = useState<IDumpsterQuestion[]>([])

  const renderQuestionsList = () => {
    return questionsList?.map((q: IDumpsterQuestion) => {
      return (
        <QuestionItem
          question={q}
          key={q.id}
          questionList={[]}
          updateList={(a: IDumpsterQuestion[]) => {
            /** TEST */
          }}
        />
      )
    })
  }

  useEffect(() => {
    debugger
    if (currentTab === 'unaproved') {
      doFetch(
        { isActive: true, isApproved: 0 },
        questionsList,
        setQuestionsList
      )
    }
    if (currentTab === 'approved-unasked') {
      doFetch(
        { isActive: true, isApproved: 1 },
        questionsList,
        setQuestionsList
      )
    }
    if (currentTab === 'approved-asked') {
      doFetch(
        { isActive: false, isApproved: 1 },
        questionsList,
        setQuestionsList
      )
    }
  }, [currentTab, questionsList])

  const a = {
    isActive: false,
    question: 'What is your biggest pet peeve?',
    updatedOn: 1588257990888,
    isApproved: 1,
    id: '61172680-8af1-11ea-9929-c54e9d09a1cd',
    createdOn: 1588257990888,
  }

  return (
    <>
      <StyledToggle onChange={setCurrentTab} headerTitles={headerOptions} />
      {currentTab !== 'unaproved' && (
        <QuestionItem
          question={a}
          questionList={questionsList}
          updateList={setQuestionsList}
          isTitle
        />
      )}
      {renderQuestionsList()}
    </>
  )
}

export default ApproveQuestionComponent
