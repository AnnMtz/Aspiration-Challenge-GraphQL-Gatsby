import * as React from "react"
import { css } from "@emotion/react"
import Layout from "../components/layout"
import Logo from '../images/react.png'


const IndexPage = () => (
  <Layout>
    <div
      css={`
        display: flex;
        flex-direction: column;
        align-items: center;
      `}
    >
      <blockquote css={`font-size: 30px;
                        font-weight: bolder;
                        color: purple;`}
    >
      Here you can view all the topics related to React, just click on the menu TOPICS at the header
    </blockquote>
      <img src={Logo} alt="react image" css={`width: 50%;`}/>
    </div>
      
  </Layout>
)

export default IndexPage