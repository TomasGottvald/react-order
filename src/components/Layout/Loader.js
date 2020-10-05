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
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    z-index: 9999;
    width: 20px;
    height: 20px;
`
const Rotated = styled.div`
    animation: ${rotate} 5s linear infinite;
`

function Loader(){
    return (
        <LoaderStyle>
            <Rotated>
                <img src={LoaderSvg} alt="Loader circle" />
            </Rotated>
        </LoaderStyle>
    )
}

export default Loader;
