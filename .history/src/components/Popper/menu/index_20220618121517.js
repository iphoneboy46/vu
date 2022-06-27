import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless'; // different import path!
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';

const cx = classNames.bind(styles);

function Menu({ children }) {
    return (
        <Tippy
            interactive
            placement="bottom-end"
            render={function (attrs) {
                return (
                    <div className={cx('content')} tabIndex="-1" {...attrs}>
                        <PopperWrapper></PopperWrapper>
                    </div>
                );
            }}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
