import React from "react"
import styled from "styled-components"
import { IDefaultProps } from "../../types/default-props"
import { useStore } from "../store"
import { ApprovalMode } from "../../types/question-types"
import { images } from "../../components/image-components"
import { Fonts } from "../../components/fonts"
import ApproveQuestionComponent from "./approval-component"
import { BasicButton } from "../../components/button"
import { FaChevronLeft } from 'react-icons/fa';

const ButtonWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
width: 780px;
`

const BackButton = styled(BasicButton)`
margin: 30px 0px;
width: 220px;
display: flex;
align-items: center;
justify-content: space-evenly;
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
const Whitespace = styled.div`
height: 100px;
`


export const SelectApprovalModeComponet: React.FunctionComponent<IDefaultProps> = (
  props: IDefaultProps
) => {
    
    const {state, dispatch} = useStore();

    const chooseSiteMode = (mode: ApprovalMode) => {
        dispatch( { type: 'SELECT_SITE_MODE', payload: { mode }});
    };


    return (
        <>
            { state.mode && <BackButton onClick={() => chooseSiteMode(ApprovalMode.NONE)}> <FaChevronLeft/> Switch Approval Mode </BackButton>}
            { !state.mode && 
            (<>
                <Fonts.Display3> Select Approval Mode : </Fonts.Display3>
                <ButtonWrapper>  
                    <ImageButton onClick={() => chooseSiteMode(ApprovalMode.QUESTIONS)}>  <SizedDumpster/> </ImageButton>
                    <ImageButton onClick={() => chooseSiteMode(ApprovalMode.ZOOM_BACKGROUNDS)}> <SizedZoomLogo/></ImageButton>
                </ButtonWrapper>
            </>)}
            { state.mode && <ApproveQuestionComponent/> }
            <Whitespace/>
        </>
    )
}
