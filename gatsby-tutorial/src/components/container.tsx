import styled from "styled-components"
import { ThemedStyledComponentsModule } from "styled-components"

type Props = {}

const Container = styled.div`
  padding: 10px;
  h1 {
    color: red;
    size: 10rem;
  }
  p {
    color: blue;
  }
`

export const UserTheme = styled.div`
  border: solid 1px #000;
  padding: 10px;
  p {
    size: 10px;
    color: green;
  }
`

export default Container
