import LogoProduct from "./components/logo/LogoProduct"
import Caroussel from "./components/caroussel/Caroussel"
import style from './productpage.module.css'

export default function ProductPage() {
    return (<main className={style.productpage}>
    <LogoProduct />
    <Caroussel />
    </main>)
}