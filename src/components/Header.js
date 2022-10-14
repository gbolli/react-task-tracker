import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color='green' text='Add'/>
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

// Testing inline CSS
// const headingStyle = {
//     color: 'Red',
//     backgroundColor: 'Black'
// }

export default Header