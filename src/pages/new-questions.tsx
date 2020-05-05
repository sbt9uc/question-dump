import React from "react"

import Layout from "../components/layouts/layout"
import SEO from "../components/layouts/seo"
import { QuestionForm } from "../modules/submit-page/question-form"

const NewQuestionPage = () => (
  <Layout title="Dumpster Fire Questions">
    <SEO title="Submit Questions" />
    <QuestionForm />
  </Layout>
)

export default NewQuestionPage
