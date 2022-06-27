import Button from "~/components/Button";
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';

function MenuItem({ data }) {
    return (
        <Button leftIcon={data.icon} to={data.to} >{data.title}</Button>
    );
}

export default MenuItem;