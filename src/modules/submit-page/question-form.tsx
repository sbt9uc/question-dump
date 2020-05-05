import React, { useState } from "react"
import styled from "styled-components"
import { BasicButton } from "../../components/button"
import axios from "axios"
import { request } from "../../../endpoints"
import { DumpsterImage } from "../../components/happy-dumpster"

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

export const QuestionForm: React.FunctionComponent<React.HTMLProps<
  HTMLElement
>> = () => {
  const [question, setQuestion] = useState<string>("")
  const [requestSuccess, setRequestSuccess] = useState<boolean>(false)

  const handleSubmit = (e: any) => {
    axios
      .post(
        `${request.url}/dev/createFireQuestion`,
        {
          question: question,
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
        <DumpsterImage />
        <IntroText>
          Your question has been submitted. If approved it will appear in the
          dmv-social channel randomly.
        </IntroText>
        <BasicButtonLong onClick={() => setRequestSuccess(false)}>
          Submit Again
        </BasicButtonLong>
      </SubmitWrapper>
    )
  }

  const renderQuestionForm = () => (
    <>
      <IntroText>
        Think you've got a question that will spark some debate in #dmv-social?
        Submit them here!
      </IntroText>
      <InputWrapper onBlur={(e: any) => setQuestion(e.target.value)} />
      <BasicButton onClick={handleSubmit}> Submit </BasicButton>
    </>
  )

  return requestSuccess ? renderSucessfulSubmit() : renderQuestionForm()
}
