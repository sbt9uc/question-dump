export interface IDefaultProps {
  /**
   * Automatically populated className prop passed in by Styled Components
   */
  className?: string

  /**
   * Children of component (something's wrong with my types, so this should be temporary)
   */
  children?: any

  /**
   * Callback to fire when a component is clicked
   */
  onClick?: (...args: any[]) => any
}
