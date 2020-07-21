import axios from 'axios'
import { request } from '../../../endpoints'
import { IParams, IDumpsterQuestion } from '../../types/question-types'

export const doFetch = (
  p: IParams,
  qList: IDumpsterQuestion[],
  setQuestionsList: (t: IDumpsterQuestion[]) => void
) => {
  axios
    .get(`${request.url}/dev/getFireQuestions`, {
      headers: request.header,
      params: { isActive: p.isActive, isApproved: p.isApproved },
    })
    .then(response => {
      if (response.status === 200 || response.status === 201) {
        const existingIds = qList.map((a: IDumpsterQuestion) => a.id)
        const newIds =
          response.data.questions?.map((a: IDumpsterQuestion) => a.id) || []
        const listsAreTheSame =
          JSON.stringify(existingIds) == JSON.stringify(newIds)
        if (!qList.includes(response.data.questions) && !listsAreTheSame) {
          setQuestionsList(response.data.questions)
        }
      }
    })
}

export const doUpdate = (
  b: IDumpsterQuestion,
  qList: IDumpsterQuestion[],
  setQuestionsList: (t: IDumpsterQuestion[]) => void
) => {
  axios
    .post(
      `${request.url}/dev/updateFireQuestion`,
      { ...b },
      { headers: request.header }
    )
    .then(response => {
      if (response.status === 200 || response.status === 201) {
        // const newList = qList.filter(i => i.id !== response.data.id)
        // debugger
        // setQuestionsList(newList)
        doFetch(
          { isApproved: b.isApproved, isActive: b.isActive },
          qList,
          setQuestionsList
        )
      }
    })
}
