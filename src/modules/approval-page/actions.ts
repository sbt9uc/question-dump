import axios from 'axios'
import { request } from '../../../endpoints'
import { IParams, IDumpsterItem, ApprovalMode } from '../../types/question-types'

export const doFetchList = (
  params: IParams,
  state: any,
  dispatch: React.Dispatch<any>,
) => {
  const endpoint = state.mode === ApprovalMode.QUESTIONS ? 'getFireQuestions' : state.mode === ApprovalMode.ZOOM_BACKGROUNDS ? 'getZoomThemes' : ''

  axios
    .get(`${request.url}/dev/${endpoint}`, {
      headers: request.header,
      params,
    })
    .then(response => {
      if (response.status === 200 || response.status === 201) {
        const data = response?.data?.questions || response?.data?.zoomThemes;
        return dispatch({type: 'FETCH_LIST', payload: { list: data }});
      }
    })
}

export const doUpdate = (
  b: IDumpsterItem,
  state: any,
  dispatch: React.Dispatch<any>,
) => {
  const endpoint = state.mode === ApprovalMode.QUESTIONS ? 'updateFireQuestion' : state.mode === ApprovalMode.ZOOM_BACKGROUNDS ? 'updateZoomTheme' : ''
  axios
    .post(
      `${request.url}/dev/${endpoint}`,
      { ...b },
      { headers: request.header }
    )
    .then(response => {
      if (response.status === 200 || response.status === 201) {
        doFetchList(
          { isApproved: 0, isActive: true },
          state,
          dispatch
        )
      }
    })
}
