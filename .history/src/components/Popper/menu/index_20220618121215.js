import {
    faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless'; // different import path!

const cx = classNames.bind(styles);

function Menu({ children }) {
    return (
        <Tippy
            interactive
            placement='bottom-end'
            render={function (attrs) {
                return (
                    <div className={cx('menu-Items')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Account</h4>
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                        </PopperWrapper>
                    </div>
                )
            }}
        >
            {children}
        </Tippy>
    );
}

export default Menu;