import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAddButton}) => {
  const location = useLocation()

  return (
    <header className='header'>
        <h1>{title}</h1>
        { location.pathname === '/' && (
          <Button 
            color={showAddButton ? 'green' : 'red'}
            text={showAddButton ? 'Add' : 'Close'} 
            onClick={onAdd}
          />
        )}
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