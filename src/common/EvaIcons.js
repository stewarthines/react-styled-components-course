import React, { Component } from 'react';
import * as eva from 'eva-icons';

/**
 * Creates an icon using the Eva Icons library
 * https://github.com/akveo/eva-icons/
 * @prop {string} use - the icon to use
 * @prop {string} animation - the animation to use
 * @prop {boolean = true} hover - controls whether the animation plays on hover
 * @prop {boolean = false} infinite - controls whether the animation plays infinitely
 * @prop {string} fill - the fill for the SVG icon
 * @prop {string | number} width - width of the icon
 * @prop {string | number} height - height of the icon
 * 
 * @example 
 * import EvaIcon from './path/to/eva-icon';
 * 
 * function ExampleContainer() {
 *   return (
 *      <EvaIcon use="github"/>
 *   )
 * }
 * 
 */
export default class EvaIcon extends Component {
  componentDidMount() {
    eva.replace();
  }

  render() {
    const { use, animation = '', hover = true, infinite = false, fill, width = 24, height = 24, className} = this.props;
    return (
      <i
        className={className}
        data-eva={use}
        data-eva-fill={fill}
        data-eva-height={height}
        data-eva-width={width}
        data-eva-animation={animation}
        data-eva-hover={hover}
        data-eva-infinite={infinite}
      />
    )
  }
}