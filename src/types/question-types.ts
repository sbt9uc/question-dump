export interface IDumpsterQuestion {
  id: string
  question: string
  isActive: boolean
  isApproved: number
  createdOn?: number
  updatedOn?: number
}

export interface IParams {
  isActive: boolean
  isApproved: number
}
