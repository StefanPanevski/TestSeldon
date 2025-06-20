/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { HTMLTh } from "../native-react/HTML.Th"
import { CSSProperties } from "react"

export type TableHeaderVariant01Props =
  ThHTMLAttributes<HTMLTableCellElement> & {}

export const TableHeaderVariant01 = ({
  style,
  ...props
}: TableHeaderVariant01Props) => {
  const styles = style || defaultStyles

  return <HTMLTh style={styles} {...{ ...defaultProps.component, ...props }} />
}
type DefaultProps = {
  component: TableHeaderVariant01Props
  children: TableHeaderVariant01Props
}
const defaultProps: DefaultProps = {
  component: {
    children: "Column",
  },
  children: {},
}
const defaultStyles: CSSProperties = {
  cursor: "pointer",
  color: "hsl(18deg 12% 8%)",
  paddingTop: "0.409rem",
  paddingRight: "0.409rem",
  paddingBottom: "0.409rem",
  paddingLeft: "0.409rem",
  alignSelf: "stretch",
  height: "fit-content",
  fontFamily: "Raleway",
  fontWeight: 400,
  fontSize: "1rem",
  lineHeight: 1.25,
  textAlign: "left",
  whiteSpace: "normal",
  verticalAlign: "inherit",
}
