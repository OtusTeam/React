import React from 'react'
import styled, { css, createGlobalStyle } from 'styled-components'
import {
  PlainLayout,
  DefaultLayout,
} from '@saitonakamura/presa/lib/components/slide/layouts'
import { Slide, SlideProps, Fragment } from '@saitonakamura/presa'
import CameraImgUrl from '../assets/image3.png'
import AvatarImgUrl from '../assets/avatar.jpg'
import QuestionImgUrl from '../assets/questions.png'
import SlackImgUrl from '../assets/slack.png'
import TalkImgUrl from '../assets/talk.png'
import TimeImgUrl from '../assets/time.png'
// import ReduxImgUrl from '../assets/time.png'
import { theme } from './theme'

export const Text = styled.span<{ size: Size }>`
  font-size: ${p => matchSize(18, 36, 48)(p.size)};
  line-height: 1.2em;
`

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    box-sizing: border-box;
  }

  * {
    box-sizing: inherit;
  }

  ul, h1, h2, h3, h4, h5, h6, li, pre {
    margin: 0;
  }
`

const headingTypography = css`
  font-family: Nunito, ${(p) => p.theme.baseFont};
`

type Size = 's' | 'm' | 'l' | number
type Color = 'primary' | 'secondary' | 'white'

const dividerRight = css`
  border-right: 1px solid ${(p) => p.theme.mutedTextColor};
`

const dividerLeft = css`
  border-left: 1px solid ${(p) => p.theme.mutedTextColor};
`

const centered = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

// export const absolutePosition

const verticallyCentered = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
`

const verticalFlex = css`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: flex-start;
  flex-wrap: no-wrap;
`

const horizontalFlex = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: no-wrap;
`

const horizontalWrapFlex = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
`

export const GradientBlock = styled.div`
  background: linear-gradient(
    to right,
    ${(p) => p.theme.primaryColor},
    ${(p) => p.theme.secondaryColor}
  );
  color: ${(p) => p.theme.whiteTextColor};
`

export const Alert = styled(GradientBlock)`
  width: 100%;
  height: 250px;
  padding: 50px 50px;
  font-size: 56px;
  font-weight: bold;
  ${centered};
  ${headingTypography};
`

export const CenteredPlainLayout = styled(PlainLayout)`
  ${centered};
`

export const HorizontalWrapLayout = styled(DefaultLayout)<{ gapSize?: Size }>`
  ${horizontalWrapFlex};
  > * + * {
    margin-left: ${(p) => matchSize(20, 40, 80)(p.gapSize || 'm')};
  }
`
export const HorizontalWrapPlainLayout = styled(PlainLayout)<{
  gapSize?: Size
}>`
  ${horizontalWrapFlex};
  > * + * {
    margin-left: ${(p) => matchSize(20, 40, 80)(p.gapSize || 'm')};
  }
`
export const HorizontalPlainLayout = styled(PlainLayout)<{
  gapSize?: Size
}>`
  ${horizontalFlex};
  > * + * {
    margin-left: ${(p) => matchSize(20, 40, 80)(p.gapSize || 'm')};
  }
`
export const HorizontalLayout = styled(DefaultLayout)<{
  gapSize?: Size
}>`
  ${horizontalFlex};
  > * + * {
    margin-left: ${(p) => matchSize(20, 40, 80)(p.gapSize || 'm')};
  }
`

export const HorizontalWrapSlide = (props: SlideProps) => (
  <Slide
    {...props}
    layout={(children) => <HorizontalWrapLayout children={children} />}
  />
)

export const AlertDescription = styled.span`
  margin-top: 20px;
  font-size: 25px;
  font-weight: normal;
`

export const AlertSlide = (props: SlideProps) => (
  <Slide
    {...props}
    layout={(children) => <CenteredPlainLayout children={children} />}
  />
)

const TitleContainer = styled(GradientBlock)`
  ${verticallyCentered};
  width: 100%;
  padding: 10px 50px;
  height: 120px;
  ${headingTypography};
`

export const Title = styled.h1`
  font-size: 45px;
  font-weight: bold;
  ${headingTypography};
`

const TitleSlideContent = styled.div`
  ${verticalFlex};
  padding: 50px;
`

export const TitleSlide = (props: SlideProps & { title: React.ReactNode }) => (
  <Slide {...props} layout={(children) => <PlainLayout children={children} />}>
    <TitleContainer>
      <Title>{props.title}</Title>
    </TitleContainer>
    <TitleSlideContent>{props.children}</TitleSlideContent>
  </Slide>
)

export const CameraImage = styled.img.attrs({
  src: CameraImgUrl,
})`
  width: 350px;
`

export const Paper = styled.div`
  background-color: ${(p) => p.theme.paperBackgroundColor};
  border-radius: 5px;
  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
    0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  padding: 20px;
`

export const Avatar = styled.img.attrs({ src: AvatarImgUrl })`
  width: 100px;
  border-radius: 50%;
`

export const CardTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  ${headingTypography};
  margin: 0;
`

export const CardDesc = styled.p`
  font-size: 18px;
  margin: 0;
`

export const CardContent = styled.div`
  ${verticalFlex};
  padding-left: 20px;
  height: 100%;
  justify-content: space-between;

  ${CardTitle} + ${CardDesc} {
    margin-top: 10px;
  }

  ${CardDesc} + ${CardDesc} {
    margin-top: 10px;
  }
`

export const Card = styled(Paper)`
  ${verticallyCentered};

  ${CardContent} {
    ${dividerLeft};
    margin-left: 20px;
  }
`

export const ListItem = styled.li``

export const List = styled.ul<{ gapSize?: Size }>`
  ${verticalFlex};
  list-style-type: none;

  > * + * {
    margin-top: ${p => matchSize(15, 20, 30)(p.gapSize || 'm')};
  }
`

export type Icon = 'talk' | 'time' | 'slack' | 'questions' | 'camera'

export const iconToUrl = (icon: Icon) => {
  switch (icon) {
    case 'camera':
      return CameraImgUrl
    case 'questions':
      return QuestionImgUrl
    case 'slack':
      return SlackImgUrl
    case 'talk':
      return TalkImgUrl
    case 'time':
      return TimeImgUrl
  }
}

export const Icon = styled.img`
  width: 2em;
  height: 2em;
`

export const IconTextContainer = styled.div`
  font-size: 30px;
  ${verticallyCentered};

  ${Icon} {
    margin-right: 30px;
  }
`

export const IconText = (props: { icon: Icon; children: React.ReactNode }) => (
  <IconTextContainer>
    <Icon src={iconToUrl(props.icon)} />
    <span>{props.children}</span>
  </IconTextContainer>
)

const matchSize = (s: number, m: number, l: number) => (size: Size) => {
  if (typeof size === 'number') return `${size}px`;

  switch (size) {
    case 's':
      return `${s}px`
    case 'm':
      return `${m}px`
    case 'l':
      return `${l}px`
  }
}

const matchColor = (color: Color) => {
  switch (color) {
    case 'primary':
      return theme.primaryColor
    case 'secondary':
      return theme.secondaryColor
    case 'white':
      return theme.whiteTextColor
  }
}

export const NoticeBlock = styled.div<{
  horizontalPadding?: Size
  backgroundColor?: Color
  fullWidth?: boolean
}>`
  background-color: ${(p) => matchColor(p.backgroundColor ?? 'primary')};
  font-weight: bold;
  font-size: 35px;
  border-radius: 10px;
  color: ${(p) => p.theme.whiteTextColor};
  padding: 15px ${(p) => matchSize(20, 40, 80)(p.horizontalPadding ?? 'm')};
  width: ${(p) => (p.fullWidth ? '100%' : 'auto')};
  text-align: center;
  ${headingTypography};
`

export const FullWidthFragment = styled(Fragment)`
  width: 100%;
`

export const elevated = css`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
