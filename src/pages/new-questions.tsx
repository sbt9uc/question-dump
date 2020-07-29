import React from "react"

import Layout from "../components/layouts/layout"
import SEO from "../components/layouts/seo"
import { QuestionForm } from "../modules/submit-page/question-form"

const questionsIntro = "Think you've got a question that will spark some debate in #dmv-social? Submit it here!";
const sucessfulSubmitMessage = "Your question has been submitted. If approved it will appear in the dmv-social channel randomly."


const NewQuestionPage = () => (
  <Layout title="Dumpster Fire Questions">
    <SEO title="Submit Questions" />
    <QuestionForm 
      submitString="createFireQuestion"
      introText={questionsIntro}
      sucessfulSubmitMessage={sucessfulSubmitMessage}
    />
  </Layout>
)

export default NewQuestionPage
