import React, {createContext, useContext, useReducer, Dispatch}  from 'react'
import { ApprovalTab, IDumpsterItem, IAction, ApprovalMode} from '../types/question-types'

interface IApprovalReducer {
  displayList: IDumpsterItem[]
  currentTab: ApprovalTab,
  mode: ApprovalMode,
};

const defaultState = {
  displayList: [],
  currentTab: ApprovalTab.UNAPPROVED,
  mode: ApprovalMode.QUESTIONS
};

const StoreContext = React.createContext<{
  state: IApprovalReducer,
  dispatch: React.Dispatch<any>;
}>({
  state: defaultState,
  dispatch: () => null,
});

const reducer = (state: IApprovalReducer, action: IAction) => {
  switch (action.type) {
    case 'FETCH_LIST':
      return {
        ...state,
        displayList: action.payload.list
      }
    case 'SWITCH_TAB': 
      return {
        ...state,
        currentTab: action.payload.newTab,
      }
    case 'SELECT_SITE_MODE':
      return {
        ...state,
        mode: action.payload.mode,
      }
    case 'APPROVE_QUESTION':
      return state;
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  };
};

export const StoreProvider = ({children}: any) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <StoreContext.Provider value={{state, dispatch}}>
      {children}
    </StoreContext.Provider>
  )
};

export const useStore = () => useContext(StoreContext);