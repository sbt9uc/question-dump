import React from 'react'
import { IDumpsterQuestion } from '../../types/question-types'
import { any } from 'prop-types'

interface IListContext {
  list: IDumpsterQuestion[]
  tab: string
}

interface IAction {
  type: string
  payload: {
    list: IDumpsterQuestion[]
  }
}

const QuestionListContext = React.createContext({
  state: any,
  dispatch: any,
})

const reducer = (state: any, action: any) => {
  switch (action.type) {
    default:
      return state
  }
}

const ListProvider = ({ children }: any) => {
  const [state, dispatch] = React.useReducer(reducer, {
    state: null,
    dispatch: null,
  })
  return (
    <QuestionListContext.Provider value={{ state, dispatch }}>
      {children}
    </QuestionListContext.Provider>
  )
}

export const listContext = {
  QuestionListContext,
  DispatchQuestionList,
}
