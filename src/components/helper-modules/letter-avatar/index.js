import React, { PropTypes} from 'react'
import _ from 'lodash'
import google from './colors'

const propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  radius: PropTypes.number,
};

const defaultProps = {
  name: 'X',
  size: 50,
  radius: 0,
};

class ReactLetterAvatar extends React.Component {

  render(){
    let {name, size, radius} = this.props
    let char = name.trim()[0].toUpperCase()

    let bgColor
    if( /[А-Я]/.test(char) ){
      let index = char.charCodeAt() - 1040
      bgColor = google[index]
    }else
    if( /[A-Z]/.test(char) ){
      let index = char.charCodeAt() - 65
      bgColor = google[index]
    }else if( /[\d]/.test(char) ){
      bgColor = google[parseInt(char,10)]
    }else{
      bgColor = [0,0,0]
    }

    let cicle=size<50?'0':'3px solid #fff'
    let style = {
      width: size,
      height: size,
      backgroundColor: `rgb(${bgColor})`,
      font: Math.floor(size/2) + 'px/140px  Calibri Light, sans-serif',
      lineHeight: (size - Math.floor(size/14)) + 'px',
      color: "white",  
      textAlign: 'center',
      vertialAlign: 'middle', 
      borderRadius: radius ,
      margin: 'auto',
      border: cicle
    }

    return(
      <div style={ style }>
        {char}
      </div>
    )
  };
};

ReactLetterAvatar.propTypes = propTypes;
ReactLetterAvatar.defaultProps = defaultProps;
export default ReactLetterAvatar;