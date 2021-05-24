import {Link} from "react-router-dom";
import classes from './MainNavigation.module.css'


function MainNavigation() {
    return <header className={classes.header}>
        <div className={classes.logo}>WebShop</div>
        <nav className={classes.nav}>
            <ul className={classes.mainList}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation
