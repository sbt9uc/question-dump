import React from "react"

import Layout from "../components/layouts/layout"
import SEO from "../components/layouts/seo"
import { QuestionForm } from "../modules/submit-page/question-form"

const zoomIntro = "Think you've got a fun Zoom background for your team? Submit it here!";
const sucessfulSubmitMessage = "Your background idea has been submitted. If approved it will appear in a channel randomly."

// createZoomTheme
// getZoomThemes
// updateZoomTheme


const NewZoomThemes = () => (
  <Layout title="Zoom Background Themes">
    <SEO title="Submit Zoom Background Ideas" />
    <QuestionForm 
        submitString="createZoomTheme"
        introText={zoomIntro}
        sucessfulSubmitMessage={sucessfulSubmitMessage}
    />
  </Layout>
)

export default NewZoomThemes
