import React, { useState } from 'react'
import styled from 'styled-components'

import Layout from '../components/layouts/layout'
import SEO from '../components/layouts/seo'
import ApproveQuestionComponent from '../modules/approval-page/approval-component'
import { BasicButton } from '../components/button'
import { secretWord as pw } from '../../endpoints'
import { StoreProvider } from '../modules/store'
import { SelectApprovalModeComponet } from '../modules/approval-page/landing-page'

const InputWrapper = styled.input`
  width: 150px;
  height: 35px;
  border: 1px solid lightgrey;
  border-radius: 3px;
`
const EnterButton = styled(BasicButton)`
  width: 100px;
  margin: 10px;
`

const ApproveQuestionPage = () => {
  const [lockScreen, setLockScreen] = useState<boolean>(true)
  const [secretWord, setSecretWord] = useState<string>('')

  const handleSecretWord = (sw: string) => {
    if (sw === pw) {
      setLockScreen(false)
    }
  }

  const renderTest = () => {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          width: '200',
        }}
      >
        <InputWrapper onBlur={(e: any) => setSecretWord(e.target.value)} />
        <EnterButton onClick={() => handleSecretWord(secretWord)}>
          Enter
        </EnterButton>
      </div>
    )
  }

  return (
    <StoreProvider>
      <Layout title="Connection Circle Approval">
        <SEO title="Approve Questions" />
        {lockScreen ? renderTest() : <SelectApprovalModeComponet />}
      </Layout>
    </StoreProvider>
  )
}

export default ApproveQuestionPage
