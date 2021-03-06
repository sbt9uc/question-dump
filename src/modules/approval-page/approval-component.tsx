import React, { useEffect } from 'react'
import styled from 'styled-components'

import { ToggleGroup } from '../../components/toggle-headder/toggle-group'
import { IDumpsterItem, ApprovalTab} from '../../types/question-types'
import { QuestionItem } from './list-item'
import { doFetchList } from './actions'
import { useStore } from '../store'

const StyledToggle = styled(ToggleGroup)`
  margin-bottom: 25px;
`

const headerOptions = [
  {
    id: ApprovalTab.UNAPPROVED,
    textDisplay: 'Questions Pending Approval',
  },
  {
    id: ApprovalTab.APPROVED,
    textDisplay: 'Approved & Unasked',
  },
  {
    id: ApprovalTab.ALREADY_ASKED,
    textDisplay: 'Approved & Asked',
  },
];

const dummyQForHeader: IDumpsterItem = {
  isApproved: 0,
  isActive: false,
  id: 'testId'
}

const ApproveQuestionComponent = () => {
  const {state, dispatch} = useStore();

  const renderQuestionsList = () => {
    console.log(state.displayList);
    return state?.displayList?.map((q: IDumpsterItem) => {
      return (
        <QuestionItem
          item={q}
          key={q.id}
        />
      )
    })
  }

  useEffect(() => {
    if (state.currentTab === ApprovalTab.UNAPPROVED) {
      doFetchList({ isActive: true, isApproved: 0 }, state, dispatch);
    }
    if (state.currentTab === ApprovalTab.APPROVED) {
      doFetchList( { isActive: true, isApproved: 1 }, state, dispatch);
    }
    if (state.currentTab === ApprovalTab.ALREADY_ASKED) {
      doFetchList( { isActive: false, isApproved: 1 }, state, dispatch );
    }
  }, [state.currentTab, state.displayList?.length])

  const switchTab = (newTab: ApprovalTab) => dispatch({type: 'SWITCH_TAB', payload: {newTab}});

  return (
    <>
      <StyledToggle onChange={switchTab} headerTitles={headerOptions} />
      <QuestionItem item={dummyQForHeader} isTitle />
      { renderQuestionsList()}
    </>
  )
}

export default ApproveQuestionComponent
