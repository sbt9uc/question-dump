import React from "react"

import Layout from "../components/layouts/layout"
import SEO from "../components/layouts/seo"
import { QuestionForm } from "../modules/submit-page/question-form"

const zoomIntro = "Think you've got a question that will spark some debate in #dmv-social? Submit it here!";
const sucessfulSubmitMessage = "Your background idea has been submitted. If approved it will appear in some? channel randomly."

// createZoomTheme
// getZoomThemes
// updateZoomTheme


const NewZoomThemes = () => (
  <Layout title="Dumpster Fire Bot">
    <SEO title="Submit Zoom Background Ideas" />
    <QuestionForm 
        submitString="createZoomTheme"
        introText={zoomIntro}
        sucessfulSubmitMessage={sucessfulSubmitMessage}
    />
  </Layout>
)

export default NewZoomThemes
