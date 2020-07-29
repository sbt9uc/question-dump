export interface IDumpsterItem {
  id: string
  question?: string
  zoomTheme?: string
  isActive: boolean
  isApproved: number
  createdOn?: number
  updatedOn?: number
}

export interface IParams {
  isActive: boolean
  isApproved: number
}

export enum ApprovalTab {
  UNAPPROVED = 'unaproved',
  APPROVED = 'approved',
  ALREADY_ASKED = 'alreadyAsked'
}

export enum ApprovalMode {
  QUESTIONS = 'question',
  ZOOM_BACKGROUNDS =  'zoomTheme'
}

export interface IAction {
  type: string,
  payload: any,
}