import Tippy from '@tippyjs/react/headless'; // different import path!
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';

import MenuItem from './MenuItem'

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {

    const renderItems = function () {
        return items.map(function (item, index) {
            return (
                <MenuItem key={index} data={item} />
            )
        })
    }

    return (
        <Tippy
            visible
            interactive
            placement="bottom-end"
            render={function (attrs) {
                return (
                    <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                        <PopperWrapper className={cx('menu-popper')}>
                            {renderItems()}
                        </PopperWrapper>
                    </div>
                );
            }}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
