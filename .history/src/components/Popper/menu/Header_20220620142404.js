
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';

import MenuItem from './MenuItem'

const cx = classNames.bind(styles);

function Header({ title, onBack }) {
    return (
        <header className={cx('header')}>

        </header>
    );
}

export default Header;
