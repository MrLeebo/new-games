import React from 'react'
import PropTypes from 'prop-types'

export default class Placeholder extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    fetch: PropTypes.func.isRequired,
    fallback: PropTypes.node
  }

  static defaultProps = {
    fallback: null
  }

  state = { payload: null }

  async componentDidMount() {
    const res = await this.props.fetch()
    const payload = await res.json()
    this.setState({ payload })
  }

  render() {
    const { payload } = this.state;
    return payload ? this.props.children(payload) : this.props.fallback;
  }
}
