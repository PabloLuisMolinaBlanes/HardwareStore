import Logo from "../logo/Logo"
import style from './navbar.module.css'

export default function NavBar() {
    return (
    <nav className={style.navigation}>
        <Logo />
        <h3 className={style.item}>Browse</h3>
        <h3 className={style.item}>Cart</h3>
        <h3 className={style.item}>Support</h3>
        <h3 className={`${style.item} ${style.right}`}>Account</h3>        
    </nav>
    )
}