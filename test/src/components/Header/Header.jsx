import { useContext } from 'react'
import './Header.css'
import PropTypes from 'prop-types'
import { Context } from '../../context/context'
const Header = () => {
  const { context, setContext } = useContext(Context)
  console.log(context)
  return (
    <>
      <h1>Header</h1>
      <input type="text" onChange={e => setContext(e.target.value)} />
    </>
  )
}

Header.propTypes = {
  title: PropTypes.string
}

export default Header
