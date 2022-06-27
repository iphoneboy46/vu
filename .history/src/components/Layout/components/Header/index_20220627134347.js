import styles from './Header.module.scss';
import { useState, useEffect } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import logo from '~/image/logo.png';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleNotch,
    faCircleQuestion,
    faCircleXmark,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faMagnifyingGlass,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';


import 'tippy.js/dist/tippy.css'; // optional
import HeadlessTippy from '@tippyjs/react/headless'; // different import path!
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/menu';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/icons';
import Image from '~/components/image';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tieng Viet',
                },
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',

    }
]

const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View Profile',
        to: '/@user'
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
        to: '/coins'
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/settings'
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
]

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    const currentUser = true;

    const handleMenuChange = function (menuItem) {
        switch (menuItem.type) {
            case 'language':
                //Handle language
                break;
            default:
        }
    }



    useEffect(function () {
        setTimeout(function () {
            return setSearchResult([]);
        }, 0);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('logo')}>
                    <img src={logo} alt="logo" />
                </div>
                <HeadlessTippy
                    visible={searchResult.length > 0}
                    interactive
                    placement="bottom"
                    render={function (attrs) {
                        return (
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <h4 className={cx('search-title')}>Account</h4>
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                </PopperWrapper>
                            </div>
                        );
                    }}
                >
                    <div className={cx('search')}>
                        <input type="text" placeholder="Search account and video" spellcheck="false" />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faCircleNotch} />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadlessTippy>
                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy
                                content="Upload Video"
                                placement='bottom'
                                delay={[0, 200]}
                                offset={[0, 5]}
                            >
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>

                            <Tippy
                                content="Message"
                                placement='bottom'
                                delay={[0, 200]}
                                offset={[0, 5]}
                            >
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>

                            <Tippy
                                content="Inbox"
                                placement='bottom'
                                delay={[0, 200]}
                                offset={[0, 5]}
                            >
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>

                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu
                        items={
                            currentUser ? userMenu : MENU_ITEMS
                        }
                        onChange={handleMenuChange}
                    >
                        {currentUser ?
                            (
                                <Image src="https://tse1.mm.bing.net/th?id=OIP." className={cx('user-avatar')} alt="Nguyen Van A"
                                />
                            )
                            :
                            (
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            )}
                    </Menu>
                </div>
            </div >
        </header >
    );
}

export default Header;
