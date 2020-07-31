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
  ZOOM_BACKGROUNDS =  'zoomTheme',
  NONE = '',
}

export enum BoldnessLevels {
  LIGHT = 300,
  NORMAL = 400,
  SEMI_BOLD = 500,
  BOLD =  600,
  EXTRA_BOLD = 800
}

export interface IAction {
  type: string,
  payload: any,
}