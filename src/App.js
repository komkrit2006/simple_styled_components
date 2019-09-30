import React, { Fragment } from 'react'
import styled, { keyframes } from 'styled-components'

const Background = styled.div`
  background: navy;
  padding: 20px 0px 0px 0px;
  margin: 0px;
  text-align: center;
`
const Title = styled.h1`
  font-side: 1.5em;
  color: white;
  margin: 0px;
`
const Button = styled.button`
  background: ${props => props.teal ? "teal" : "white"};
  color: ${props => props.teal ? "white" : "teal"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${props => props.teal ? "teal" : "white"};
  border-radius: 3px;
  cursor: pointer;
  outline: none;
  :hover {
    background: darkgreen;
    border-color: darkgreen;
  }
`
const Input = styled.input`
  padding: 0.7em;
  margin: 0.5em;
  color: ${props => props.inputColor || "white"};
  background: white;
  border: none;
  outline: none;
  border-radius: 3px;
`
const FaceBookButton = styled.button`
  color: teal;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  cursor: pointer;
  ::before {
    content: '🚀';
  }
  :hover {
    color: red;
  }
`
const rotate = keyframes`
  form {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`

const App = () => (
  <Fragment>
    <Background>
      <Title>
        Hello world!
      </Title>
      <Button type="button" onClick={() => alert('welcome sir')} teal>Alert</Button>
      <Input type="text" placeholder="please fill up..." inputColor="teal"/>
      <FaceBookButton onClick={() => alert(`welcome facebook`)}>&nbsp;Facebook</FaceBookButton>
      <Rotate>💅</Rotate>
    </Background>
  </Fragment>
)

export default App