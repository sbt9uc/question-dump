import React from "react"
import styled from "styled-components"
import { IDefaultProps } from "../../types/default-props"
import { useStore } from "../store"
import { ApprovalMode, BoldnessLevels } from "../../types/question-types"
import { navigate } from 'gatsby'
import { images } from "../../components/image-components"
import { Fonts } from "../../components/fonts"

const ButtonWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
width: 780px;
`

const Title = styled(Fonts.Display3)`
margin: 30px 0px;
`;

const CenterTitle = styled(Title)`
margin: 40px 180px;
`

const BotText = styled(Fonts.Display4)`
margin: 5px 0 px;
display: flex;
flex-direction: row;
justify-content: flex-start;
`

const BotName = styled(Fonts.Display4)`
min-width: 235px;
`

const BotInfo = styled.span`
width: inherit;
`

const ImageButton = styled.button`
margin: 10px;
height: 250px;
width: 250px;
border: 0px;
background-color: white;
`

const SizedDumpster = styled(images.DumpsterLogo)`
height: 250px;
width: 250px;
margin: 0px;
`

const SizedZoomLogo = styled(images.ZoomImage)`
height: 250px;
width: 250px;
margin: 0px;
`
const TextWrapper = styled.div`
margin: 50px 0px
`

const Whitespace = styled.div`
height: 100px;
`


export const SelectModeComponet: React.FunctionComponent<IDefaultProps> = (
  props: IDefaultProps
) => {
    const {state, dispatch} = useStore();
    
    const chooseSiteMode = (mode: ApprovalMode) => {
        dispatch({type: 'SELECT_SITE_MODE', payload: {mode}});
        const redirectUrl = mode === ApprovalMode.ZOOM_BACKGROUNDS ? '/new-zoom-themes' : mode === ApprovalMode.QUESTIONS ? '/new-questions' : '/';
        navigate(redirectUrl);
    };


    return (
        <>
            <TextWrapper>
                <Title boldness={BoldnessLevels.BOLD}>There are currently two bots managed: </Title>
                <BotText>
                    <BotName tag="span" boldness={BoldnessLevels.BOLD}>Dumpster Fire Bot: </BotName>
                    <BotInfo>Asks a fun question in dmv-social every day @1:30 PM EST</BotInfo>
                </BotText>
                <BotText>
                    <BotName tag="span" boldness={BoldnessLevels.BOLD}>Zoom Backgrounds: </BotName>
                    <BotInfo>Selects a theme for fins to use as their Zoom virtual background. Posts @ 9:00 AM EST</BotInfo>
                </BotText>

                <CenterTitle boldness={BoldnessLevels.SEMI_BOLD}>Select an image below to submit ideas! </CenterTitle>
            </TextWrapper>
            <ButtonWrapper>
                <ImageButton onClick={() => chooseSiteMode(ApprovalMode.QUESTIONS)}>  <SizedDumpster/> </ImageButton>
                <ImageButton onClick={() => chooseSiteMode(ApprovalMode.ZOOM_BACKGROUNDS)}> <SizedZoomLogo/></ImageButton>
            </ButtonWrapper>
            <Whitespace/>
        </>
    )
}
