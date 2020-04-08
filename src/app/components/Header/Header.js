import { ref } from 'delta'

import logo from './logo.svg'
import './Header.css'

const Header = ({ useTheme, useEffect }) => {
  const logoRef = ref()
  const toggleTheme = useTheme()
  
  useEffect(() => {
    logoRef().addEventListener('click', toggleTheme)
    
    return () => {
      logoRef().removeEventListener('click', toggleTheme)
    }
  })
  
  return `
    <header class='header'>
        <div class='header-content'>
            <img id=${logoRef()} class='content-logo' src=${logo} alt='логотип'>
            <nav class='content-menu'>
                <ul class='menu-items'>
                    <li class='menu-item'><a href='#'>Главная</a></li>
                    <li class='menu-item'><a href='#charizard'>Чаризард</a></li>
                </ul>
            </nav>
        </div>
    </header>
`
}

export default Header





