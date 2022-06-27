import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless'; // different import path!
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import classNames from 'classnames/bind';

import MenuItem from './MenuItem'

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {

    const renderItems = function () {
        return items.map(function (item, index) {
            <MenuItem key={index} />
        })
    }

    return (
        <Tippy
            interactive
            placement="bottom-end"
            render={function (attrs) {
                return (
                    <div className={cx('content')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
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
