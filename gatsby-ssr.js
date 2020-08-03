/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

const React = require("react")
exports.onRenderBody = ({
  setPostBodyComponents,
}) => {
    setPostBodyComponents([
    <script
      key="1"
      type="text/javascript"
      src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
    />,
  ])
  setPostBodyComponents([
    <script
      key="2"
      type="text/javascript"
      src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
    />,
  ])
  setPostBodyComponents([
    <script
      key="3"
      type="text/javascript"
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
    />,
  ])
}