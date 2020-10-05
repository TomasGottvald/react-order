import React from 'react'
import styled, { keyframes } from 'styled-components'
import LoaderSvg from "../../Images/logo_circle.svg"

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const LoaderStyle = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: rgba(255,255,255,0.65);
    text-align: center;
    z-index: 9999;
`
const Rotated = styled.div`
    animation: ${rotate} 5s linear infinite;
`

class Loader extends React.Component {
    render () {
        return (
            <LoaderStyle>
                <Rotated>
                    <img src={LoaderSvg} alt="Loader circle" />
                </Rotated>
            </LoaderStyle>
        )
    }
}

export default Loader;
