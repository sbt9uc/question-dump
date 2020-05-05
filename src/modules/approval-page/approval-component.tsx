import React, { useState, useEffect } from "react"
import axios from "axios"
import styled from "styled-components"

import { ToggleGroup } from "../../components/toggle-headder/toggle-group"
import { request } from "../../../endpoints"
import { tempList, approvedList, usedList } from "./temp-list"
import { IDumpsterQuestion } from "../../types/question-types"
import { QuestionItem } from "./list-item"

interface IParams {
  isActive: boolean
  isApproved: number
}

const StyledToggle = styled(ToggleGroup)`
  margin-bottom: 25px;
`

const headerOptions = [
  {
    id: "unaproved",
    textDisplay: "Questions Pending Approval",
  },
  {
    id: "approved-unasked",
    textDisplay: "Approved & Unasked",
  },
  {
    id: "approved-asked",
    textDisplay: "Approved & Asked",
  },
]

const headers = {
  header: request.header,
}

const ApproveQuestionComponent = () => {
  const [currentTab, setCurrentTab] = useState<string>("unaproved")
  const [questionsList, setQuestionsList] = useState<IDumpsterQuestion[]>()

  const doFetch = (p: IParams) => {
    axios
      .get(`${request.url}/dev/getFireQuestions`, {
        headers,
        params: { isActive: p.isActive, isApproved: p.isApproved },
      })
      .then(response => {
        if (response.status === 200 || response.status === 201) {
          debugger
        }
      })
  }

  const renderQuestionsList = () => {
    return questionsList?.map((q: IDumpsterQuestion) => {
      return <QuestionItem question={q} key={q.id} />
    })
  }

  useEffect(() => {
    if (currentTab === "unaproved") {
      setQuestionsList(tempList)
    }
    if (currentTab === "approved-unasked") {
      setQuestionsList(approvedList)
    }
    if (currentTab === "approved-asked") {
      setQuestionsList(usedList)
    }
  }, [currentTab])

  const a = {
    isActive: false,
    question: "What is your biggest pet peeve?",
    updatedOn: 1588257990888,
    isApproved: 1,
    id: "61172680-8af1-11ea-9929-c54e9d09a1cd",
    createdOn: 1588257990888,
  }

  return (
    <>
      <StyledToggle onChange={setCurrentTab} headerTitles={headerOptions} />
      {currentTab !== "unaproved" && <QuestionItem question={a} isTitle />}
      {renderQuestionsList()}
    </>
  )
}

export default ApproveQuestionComponent
