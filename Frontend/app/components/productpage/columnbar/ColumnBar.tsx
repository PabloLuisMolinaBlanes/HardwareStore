import style from './columnbar.module.css'

export default function ColumnBar() {
    return (<nav className={style.columnbar}>
        <h3 className={style.item}>Basics</h3>
        <h3 className={style.item}>Lighting</h3>
        <h3 className={style.item}>Ceilings</h3>
    </nav>)
}