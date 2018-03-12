import React, {Component} from 'react'
import {render} from 'react-dom'

import { asyncComponent, Placeholder } from '../../src'
const Bundle = asyncComponent(() =>
  import(/* webpackChunkName: "Bundle" */ './Bundle')
);

class Demo extends Component {
  state = { asyncComponentShown: false, placeholderShown: false }

  showAsyncComponent = () => this.setState({ asyncComponentShown: true })
  showPlaceholder = () => this.setState({ placeholderShown: true })

  render() {
    const { asyncComponentShown, placeholderShown } = this.state
    return <div>
      <h1>AsyncComponent</h1>
      <p>Higher Order Component that takes a promise returning a component. Used with the dynamic <code>import()</code> syntax to implement code-splitting.</p>
      {asyncComponentShown && <Bundle /> || <button onClick={this.showAsyncComponent}>Show</button>}
      <pre>
        {`
          const Bundle = asyncComponent(() =>
            import(/* webpackChunkName: "Bundle" */ './Bundle')
          );
        `}
      </pre>

      <h1>Placeholder</h1>
      <p>Takes a fallback and a fetch (promise), renders the fallback until the promise resolves, then passes the result to the child function.</p>
      {placeholderShown && (
        <Placeholder
          fetch={() => fetch("https://httpbin.org/ip")}
          fallback={<fieldset>Loading...</fieldset>}
        >
          {data => <fieldset>Hello, {data.origin}</fieldset>}
        </Placeholder>
      ) || <button onClick={this.showPlaceholder}>Show</button>}
      <pre>
        {`
          <Placeholder
            fetch={() => fetch("https://httpbin.org/ip")}
            fallback={<fieldset>Loading...</fieldset>}
          >
            {data => <fieldset>Hello, {data.origin}</fieldset>}
          </Placeholder>
        `}
      </pre>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
