import React, { useState } from 'react'
import styled from 'styled-components'
import { BasicButton } from '../../components/button'
import axios from 'axios'
import { request } from '../../../endpoints'
import { DumpsterImage } from '../../components/image-components/happy-dumpster'

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

interface ISubmitFormProps extends React.HTMLProps<HTMLElement> {
  /**
   * [required] end of url
   */
  submitString: string,
  /**
   * [required] default text to show with input and submit button
   */
  introText: string,
  /**
   * [required] message to show after submit
   */
  sucessfulSubmitMessage: string,
  /**
   * [optional] indicates whether to show happy dumpster image
   */
  showDumpsterPic?: boolean;
}

export const QuestionForm: React.FunctionComponent<ISubmitFormProps> = (props) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [requestSuccess, setRequestSuccess] = useState<boolean>(false);

  const handleSubmit = (e: any) => {
    axios
      .post(
        `${request.url}/dev/${props.submitString}`,
        {
          question: inputValue,
        },
        { headers: request.header }
      )
      .then(response => {
        if (response.status === 200 || response.status === 201) {
          setRequestSuccess(true)
        }
      })
  }

  const renderSucessfulSubmit = () => {
    return (
      <SubmitWrapper>
        { props.showDumpsterPic && <DumpsterImage />}
        <IntroText>{props.sucessfulSubmitMessage}</IntroText>
        <BasicButtonLong onClick={() => setRequestSuccess(false)}>
          Submit Again
        </BasicButtonLong>
      </SubmitWrapper>
    )
  }

  const renderQuestionForm = () => (
    <>
      <IntroText>{props.introText}</IntroText>
      <InputWrapper onBlur={(e: any) => setInputValue(e.target.value)} />
      <BasicButton onClick={handleSubmit}> Submit </BasicButton>
    </>
  )

  return requestSuccess ? renderSucessfulSubmit() : renderQuestionForm()
}
