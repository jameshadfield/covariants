import styled from 'styled-components'

import { LinkSmart } from 'src/components/Link/LinkSmart'

export const Pre = styled.pre`
  padding: 0.5rem 1rem;

  background-color: ${(props) => props.theme.code.pre.background};

  code {
    background-color: ${(props) => props.theme.code.pre.background};
  }

  overflow-x: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
`

export const mdxComponents = {
  a: LinkSmart,
  pre: Pre,
}
