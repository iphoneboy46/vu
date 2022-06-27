import Tippy from '@tippyjs/react/headless'; // different import path!
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';

import MenuItem from './MenuItem'
import Header from './Header'

const cx = classNames.bind(styles);
const defaultFn = function () {

}

function Menu({ children, items = [], onChange = defaultFn }) {

    const [history, setHistory] = useState([{ data: items }]);

    const current = history[history.length - 1];

    const renderItems = function () {
        return current.data.map(function (item, index) {
            const isParent = !!item.children
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={function () {
                        if (isParent) {
                            setHistory(function (prev) {
                                return [...prev, item.children]
                            })
                        } else {
                            onChange(item)
                        }
                    }} />
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
                            {history.length > 1 &&
                                <Header
                                    title='Language'
                                    onBack={function () {
                                        setHistory(function (prev) {
                                            return (
                                                prev.slice(0, prev.length - 1)
                                            )
                                        })
                                    }}
                                />}
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
