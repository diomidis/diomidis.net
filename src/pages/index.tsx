import * as React from "react"
import type { PageProps } from "gatsby"

const comingSoonStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  fontSize: "3em",
  fontWeight: "bold",
}

const IndexPage: React.FC<PageProps> = () => (
  <div style={comingSoonStyles}>
    Coming Soon
  </div>
)

export default IndexPage