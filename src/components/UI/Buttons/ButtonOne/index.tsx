import { ReactNode } from 'react';
import styles from './ButtonOne.module.sass';

type MyComponentProps = {
    children: ReactNode;
};
// eslint-disable-next-line react/prop-types
const ButtonOne: React.FC<MyComponentProps> = ({ children }) => {
    return <button className={styles.btn}>{children}</button>;
};

export default ButtonOne;
