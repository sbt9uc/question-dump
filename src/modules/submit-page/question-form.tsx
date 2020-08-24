import React, { useState } from 'react'
import styled from 'styled-components'
import { BasicButton } from '../../components/button'
import axios from 'axios'
import { request } from '../../../endpoints'
import { images } from '../../components/image-components'
import { useStore } from '../store'
import { ApprovalMode } from '../../types/question-types'
import { FaChevronLeft } from 'react-icons/fa'
import { navigate } from 'gatsby'
import colors from '../../components/colors'

const IntroText = styled.div`
  font-size: 20px;
  line-height: 28px;
  font-weight: 300;
  margin: 20px 0px;
`

const InputWrapper = styled.input`
  width: 600px;
  height: 35px;
  border: 1px solid lightgrey;
  border-radius: 3px;
`

const BasicButtonLong = styled(BasicButton)`
  width: 180px;
  margin: 10px 0px;
`

const SubmitWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const BackButton = styled(BasicButton)`
  margin: 15px 0px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${colors.gray5};
`

const DumpsterPic = styled(images.DumpsterImage)`
  height: 300px;
  width: 300px;
`

const ZoomPic = styled(images.ZoomImage)`
  height: 300px;
  width: 300px;
`

const PicWrapper = styled.div`
  height: 300px;
  width: 300px;
`

interface ISubmitFormProps extends React.HTMLProps<HTMLElement> {
  /**
   * [required] end of url
   */
  mode: ApprovalMode
  /**
   * [required] default text to show with input and submit button
   */
  introText: string
  /**
   * [required] message to show after submit
   */
  sucessfulSubmitMessage: string
}

export const QuestionForm: React.FunctionComponent<ISubmitFormProps> = props => {
  const [inputValue, setInputValue] = useState<string>('')
  const [requestSuccess, setRequestSuccess] = useState<boolean>(false)

  console.log(props.mode)
  const submitEndpoint =
    props.mode === ApprovalMode.QUESTIONS
      ? 'createFireQuestion'
      : props.mode === ApprovalMode.ZOOM_BACKGROUNDS
      ? 'createZoomTheme'
      : ''
  const submitObject =
    props.mode === ApprovalMode.QUESTIONS
      ? { question: inputValue }
      : props.mode === ApprovalMode.ZOOM_BACKGROUNDS
      ? { zoomTheme: inputValue }
      : {}

  const handleSubmit = (e: any) => {
    axios
      .post(`${request.url}/dev/${submitEndpoint}`, submitObject, {
        headers: request.header,
      })
      .then(response => {
        if (response.status === 200 || response.status === 201) {
          setRequestSuccess(true)
        }
      })
  }

  const renderSucessfulSubmit = () => {
    return (
      <SubmitWrapper>
        {props.mode === ApprovalMode.QUESTIONS && (
          <PicWrapper>
            <DumpsterPic />
          </PicWrapper>
        )}
        {props.mode === ApprovalMode.ZOOM_BACKGROUNDS && (
          <PicWrapper>
            <ZoomPic />
          </PicWrapper>
        )}
        <IntroText>{props.sucessfulSubmitMessage}</IntroText>
        <BasicButtonLong onClick={() => setRequestSuccess(false)}>
          Submit Again
        </BasicButtonLong>
      </SubmitWrapper>
    )
  }

  const renderQuestionForm = () => (
    <>
      <BackButton onClick={() => navigate('/')}>
        {' '}
        <FaChevronLeft /> Back{' '}
      </BackButton>
      <IntroText>{props.introText}</IntroText>
      <InputWrapper onBlur={(e: any) => setInputValue(e.target.value)} />
      <BasicButton onClick={handleSubmit}> Submit </BasicButton>
    </>
  )

  return requestSuccess ? renderSucessfulSubmit() : renderQuestionForm()
}
