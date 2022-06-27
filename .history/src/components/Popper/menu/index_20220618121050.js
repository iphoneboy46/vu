import {
    faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';


const cx = classNames.bind(styles);

function Menu() {
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
            <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
        </Tippy>
    );
}

export default Menu;