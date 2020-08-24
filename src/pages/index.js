import React from 'react'

import Layout from '../components/layouts/layout'
import SEO from '../components/layouts/seo'
import { StoreProvider } from '../modules/store'
import { SelectModeComponet } from '../modules/select-mode/select-mode-landing-page'

const NewQuestionPage = () => (
  <StoreProvider>
    <Layout title="Pariveda DC Slackbots">
      <SEO title="DC Slackbots" />
      <SelectModeComponet />
    </Layout>
  </StoreProvider>
)

export default NewQuestionPage
