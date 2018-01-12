import React, { Component } from 'react'
import PropTypes from 'prop-types'
  
class ScriptLoader extends Component {
  
	onLoad = (el) => {
    if (el) return this.mount(el)
    else return this.unMount()
  }
  
  mount = (el) => {
    
    const { children, src, ...otherProps } = this.props
    
		// Load the stripe client script, needed to create a payment token
		var script = document.createElement('script')
		script.type = "text/javascript"
		script.src = src
    
    Object.keys(otherProps).forEach(key => 
      script.setAttribute(key, otherProps[key]))
    
    script.addEventListener('load', () => {
      this.script = script
      this.forceUpdate()
    })
    
    this.parentNode_ = el.parentNode
    el.parentNode.replaceChild(script, el)
    
  };
  
  unMount = () => {
		this.parentNode_.removeChild(this.script)
  };

	render = () => {
		return <span ref={this.onLoad} />
	}
}

export default ScriptLoader