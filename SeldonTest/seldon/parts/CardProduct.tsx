/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { CSSProperties, HTMLAttributes } from "react"
import { DescriptionProps } from "../primitives/Description"
import { IconProps } from "../primitives/Icon"
import { LabelButtonProps } from "../primitives/LabelButton"
import { TaglineProps } from "../primitives/Tagline"
import { TitleProps } from "../primitives/Title"
import { Frame } from "../frames/Frame"
import { ButtonProps } from "../elements/Button"
import { ButtonBarProps, ButtonBar } from "../elements/ButtonBar"
import { ButtonIconicProps } from "../elements/ButtonIconic"
import {
  TextblockDetailsProps,
  TextblockDetails,
} from "../elements/TextblockDetails"

export type CardProductProps = HTMLAttributes<HTMLElement> & {
  textblockDetailsProps?: TextblockDetailsProps
  textblockDetailsTaglineProps?: TaglineProps
  textblockDetailsTitleProps?: TitleProps
  textblockDetailsDescriptionProps?: DescriptionProps
  buttonBarProps?: ButtonBarProps
  buttonBarButtonProps?: ButtonProps
  buttonBarButtonIconProps?: IconProps
  buttonBarButtonLabelButtonProps?: LabelButtonProps
  buttonBarButtonIconicProps?: ButtonIconicProps
  buttonBarButtonIconicIconProps?: IconProps
}

export const CardProduct = ({
  style,
  textblockDetailsProps,
  textblockDetailsTaglineProps,
  textblockDetailsTitleProps,
  textblockDetailsDescriptionProps,
  buttonBarProps,
  buttonBarButtonProps,
  buttonBarButtonIconProps,
  buttonBarButtonLabelButtonProps,
  buttonBarButtonIconicProps,
  buttonBarButtonIconicIconProps,
  ...props
}: CardProductProps) => {
  const styles = style || defaultStyles

  return (
    <Frame style={styles} {...{ ...defaultProps.component, ...props }}>
      <TextblockDetails
        style={{
          cursor: "pointer",
          borderBottomStyle: "none",
          overflow: "hidden",
          flexWrap: "nowrap",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          marginTop: "1rem",
          marginRight: "1rem",
          marginBottom: "1rem",
          marginLeft: "1rem",
          alignSelf: "stretch",
          height: "fit-content",
        }}
        {...{
          ...defaultProps.children.textblockDetailsProps,
          ...textblockDetailsProps,
        }}
        taglineProps={{
          ...defaultProps.children.textblockDetailsTaglineProps,
          ...textblockDetailsTaglineProps,
        }}
        titleProps={{
          ...defaultProps.children.textblockDetailsTitleProps,
          ...textblockDetailsTitleProps,
        }}
        descriptionProps={{
          ...defaultProps.children.textblockDetailsDescriptionProps,
          ...textblockDetailsDescriptionProps,
        }}
      ></TextblockDetails>
      <ButtonBar
        style={{
          flexWrap: "wrap",
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          marginTop: "1rem",
          marginRight: "1rem",
          marginBottom: "1rem",
          marginLeft: "1rem",
          width: "fit-content",
          height: "fit-content",
        }}
        {...{ ...defaultProps.children.buttonBarProps, ...buttonBarProps }}
        buttonProps={{
          ...defaultProps.children.buttonBarButtonProps,
          ...buttonBarButtonProps,
        }}
        buttonIconProps={{
          ...defaultProps.children.buttonBarButtonIconProps,
          ...buttonBarButtonIconProps,
        }}
        buttonLabelButtonProps={{
          ...defaultProps.children.buttonBarButtonLabelButtonProps,
          ...buttonBarButtonLabelButtonProps,
        }}
        buttonIconicProps={{
          ...defaultProps.children.buttonBarButtonIconicProps,
          ...buttonBarButtonIconicProps,
        }}
        buttonIconicIconProps={{
          ...defaultProps.children.buttonBarButtonIconicIconProps,
          ...buttonBarButtonIconicIconProps,
        }}
      ></ButtonBar>
    </Frame>
  )
}
type DefaultProps = {
  component: CardProductProps
  children: CardProductProps
}
const defaultProps: DefaultProps = {
  component: {},
  children: {
    textblockDetailsProps: {
      style: {
        cursor: "pointer",
        borderBottomStyle: "none",
        overflow: "hidden",
        flexWrap: "nowrap",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        marginTop: "1rem",
        marginRight: "1rem",
        marginBottom: "1rem",
        marginLeft: "1rem",
        alignSelf: "stretch",
        height: "fit-content",
      },
    },
    textblockDetailsTaglineProps: {
      children: "Tagline",
      style: {
        color: "hsl(0deg 4% 98%)",
        alignSelf: "stretch",
        height: "fit-content",
        fontFamily: "Inter",
        fontStyle: "normal",
        fontSynthesisStyle: "none",
        fontWeight: 500,
        fontSize: "0.75rem",
        lineHeight: 1.25,
        whiteSpace: "normal",
        overflow: "hidden",
        display: "-webkit-box",
        WebkitLineClamp: 2,
        lineClamp: 2,
        WebkitBoxOrient: "vertical",
        boxOrient: "vertical",
      },
    },
    textblockDetailsTitleProps: {
      children: "Product Card Title",
      style: {
        color: "hsl(0deg 4% 98%)",
        marginBottom: "1rem",
        alignSelf: "stretch",
        height: "fit-content",
        fontFamily: "Inter",
        fontStyle: "normal",
        fontSynthesisStyle: "none",
        fontWeight: 600,
        fontSize: "2.002rem",
        lineHeight: 1.25,
        whiteSpace: "normal",
        overflow: "hidden",
        display: "-webkit-box",
        WebkitLineClamp: 2,
        lineClamp: 2,
        WebkitBoxOrient: "vertical",
        boxOrient: "vertical",
      },
    },
    textblockDetailsDescriptionProps: {
      children:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus. Donec euismod in fringilla.",
      style: {
        color: "hsl(0deg 4% 98%)",
        alignSelf: "stretch",
        height: "fit-content",
        fontFamily: "Inter",
        fontStyle: "normal",
        fontSynthesisStyle: "none",
        fontWeight: 500,
        fontSize: "0.75rem",
        lineHeight: 1.25,
        whiteSpace: "normal",
      },
    },
    buttonBarProps: {
      style: {
        flexWrap: "wrap",
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
        marginTop: "1rem",
        marginRight: "1rem",
        marginBottom: "1rem",
        marginLeft: "1rem",
        width: "fit-content",
        height: "fit-content",
      },
    },
    buttonBarButtonProps: {
      style: {
        backgroundColor: "hsl(0deg 0% 15%)",
        cursor: "pointer",
        borderTopWidth: "0.069rem",
        borderTopStyle: "solid",
        borderTopColor: "hsl(0deg 0% 15%)",
        borderRightWidth: "0.069rem",
        borderRightStyle: "solid",
        borderRightColor: "hsl(0deg 0% 15%)",
        borderBottomWidth: "0.069rem",
        borderBottomStyle: "solid",
        borderBottomColor: "hsl(0deg 0% 15%)",
        borderLeftWidth: "0.069rem",
        borderLeftStyle: "solid",
        borderLeftColor: "hsl(0deg 0% 15%)",
        borderTopRightRadius: "99999px",
        borderBottomRightRadius: "99999px",
        borderBottomLeftRadius: "99999px",
        borderTopLeftRadius: "99999px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
        paddingTop: "0.5rem",
        paddingRight: "0.875rem",
        paddingBottom: "0.5rem",
        paddingLeft: "0.75rem",
        width: "fit-content",
        height: "fit-content",
      },
    },
    buttonBarButtonIconProps: {
      icon: "__default__",
      style: {
        color: "hsl(0deg 4% 98%)",
        fontSize: "0.8rem",
      },
    },
    buttonBarButtonLabelButtonProps: {
      children: "Label",
      style: {
        color: "hsl(0deg 4% 98%)",
        marginTop: "0.5rem",
        marginRight: "0.5rem",
        marginBottom: "0.5rem",
        marginLeft: "0.5rem",
        fontFamily: "Inter",
        fontStyle: "normal",
        fontSynthesisStyle: "none",
        fontWeight: 500,
        fontSize: "0.8rem",
        lineHeight: 1.15,
        letterSpacing: "0.1px",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden",
      },
    },
    buttonBarButtonIconicProps: {
      style: {
        backgroundColor: "hsl(0deg 0% 15%)",
        cursor: "pointer",
        borderTopWidth: "0.069rem",
        borderTopStyle: "solid",
        borderTopColor: "hsl(0deg 0% 15%)",
        borderRightWidth: "0.069rem",
        borderRightStyle: "solid",
        borderRightColor: "hsl(0deg 0% 15%)",
        borderBottomWidth: "0.069rem",
        borderBottomStyle: "solid",
        borderBottomColor: "hsl(0deg 0% 15%)",
        borderLeftWidth: "0.069rem",
        borderLeftStyle: "solid",
        borderLeftColor: "hsl(0deg 0% 15%)",
        borderTopRightRadius: "99999px",
        borderBottomRightRadius: "99999px",
        borderBottomLeftRadius: "99999px",
        borderTopLeftRadius: "99999px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "0.5rem",
        paddingRight: "0.5rem",
        paddingBottom: "0.5rem",
        paddingLeft: "0.5rem",
        width: "fit-content",
        height: "fit-content",
      },
    },
    buttonBarButtonIconicIconProps: {
      icon: "__default__",
      style: {
        color: "hsl(210deg 80% 90%)",
        fontSize: "0.8rem",
      },
    },
  },
}
const defaultStyles: CSSProperties = {
  backgroundColor: "hsl(18deg 12% 98%)",
  backgroundImage:
    "linear-gradient(90deg, hsl(18deg 60% 45% / 80%) 0%, hsl(18deg 60% 45% / 0%) 75%), url(/seldon/image-default.jpg)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  cursor: "pointer",
  borderTopWidth: "var(--hairline)",
  borderTopStyle: "solid",
  borderTopColor: "hsl(18deg 60% 45%)",
  borderRightWidth: "var(--hairline)",
  borderRightStyle: "solid",
  borderRightColor: "hsl(18deg 60% 45%)",
  borderBottomWidth: "var(--hairline)",
  borderBottomStyle: "solid",
  borderBottomColor: "hsl(18deg 60% 45%)",
  borderLeftWidth: "var(--hairline)",
  borderLeftStyle: "solid",
  borderLeftColor: "hsl(18deg 60% 45%)",
  borderTopRightRadius: "0.409rem",
  borderBottomRightRadius: "0.409rem",
  borderBottomLeftRadius: "0.409rem",
  borderTopLeftRadius: "0.409rem",
  flexWrap: "nowrap",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "space-between",
  gap: "auto",
  alignSelf: "stretch",
  height: "fit-content",
}
