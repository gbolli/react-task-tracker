import Proptypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
  return (
    <button 
        className='btn' 
        style={{ backgroundColor: color }}
        onClick={onClick}
    >
        { text }
    </button>
  )
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.prototypes = {
    text: Proptypes.string,
    color: Proptypes.string,
    onClick: Proptypes.func
}

export default Button