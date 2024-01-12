import { CONTACT_ROUTE, ABOUT_ROUTE, PORTFOLIO_ROUTE, HOME_ROUTE } from '../../app/routing/config';
import '../../styles/style.css';
import { Link } from 'react-router-dom';

const navbar = () => {
    return ( 
        <>
            <div className='route'>
                <Link to={CONTACT_ROUTE} className='routeLink'>Страница контактов</Link>
                <Link to={ABOUT_ROUTE} className='routeLink'>Страница О нас</Link>
                <Link to={PORTFOLIO_ROUTE} className='routeLink'>Страница Портфолио</Link>
                <Link to={HOME_ROUTE} className='routeLink'>Домашняя Страница</Link>
                <button className='btn'>
                    Войти
                </button>
            </div>
        </>
     );
}
 
export default navbar;