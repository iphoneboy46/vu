import classNames from "classnames/bind";
import styles from "./Button.module.scss"

import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({ to, href, onClick, children, primary, outline, small, large, text, disabled, rounded, leftIcon, ...passProps }) {
    let Comp = "button";
    const props = {
        onClick,
        ...passProps,

    }

    // remove event listeners when btn is disabled

    // if (disabled) {
    //     Object.keys(props).forEach(function (key) {
    //         if (key.startsWith('on ') && typeof props[key] === 'function ') {
    //             delete props[key];
    //         }
    //     })
    // }

    if (to) {
        props.to = to
        Comp = Link
    } else if (href) {
        props.href = href
        Comp = "a"
    }


    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        text,
        disabled,
        leftIcon,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>
                {children}
            </span>
        </Comp>
    );

}

export default Button;