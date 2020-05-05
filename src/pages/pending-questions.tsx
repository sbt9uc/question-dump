import React, { useState } from "react"

import Layout from "../components/layouts/layout"
import SEO from "../components/layouts/seo"
import ApproveQuestionComponent from "../modules/approval-page/approval-component"

const ApproveQuestionPage = () => {
  const [currentTab, setCurrentTab] = useState<string>("unaproved")
  return (
    <Layout title="Connection Circle Approval - Dumpster Fire Questions">
      <SEO title="Approve Questions" />
      <ApproveQuestionComponent />
    </Layout>
  )
}

export default ApproveQuestionPage
