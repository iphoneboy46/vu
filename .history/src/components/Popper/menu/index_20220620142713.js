import Tippy from '@tippyjs/react/headless'; // different import path!
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';

import MenuItem from './MenuItem'
import Header from './Header'

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

            delay={[0, 800]}
            interactive
            placement="bottom-end"
            render={function (attrs) {
                return (
                    <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                        <PopperWrapper className={cx('menu-popper')}>
                            <Header></Header>
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
