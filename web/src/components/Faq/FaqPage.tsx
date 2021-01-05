import React from 'react'

import { Col, Row } from 'reactstrap'
import { Editable } from 'src/components/Common/Editable'

import { Layout } from 'src/components/Layout/Layout'

import Faq from '../../../../content/Faq.md'

export function FaqPage() {
  return (
    <Layout>
      <Row noGutters>
        <Col>
          <h1>{'Frequently asked questions'}</h1>
        </Col>
      </Row>

      <Row noGutters>
        <Col>
          <Editable githubUrl="blob/master/content/Faq.md">
            <Faq />
          </Editable>
        </Col>
      </Row>
    </Layout>
  )
}
