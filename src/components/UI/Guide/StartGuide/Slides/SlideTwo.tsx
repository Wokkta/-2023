import ButtonOne from '../../../Buttons/ButtonOne';
import styles from '../StartGuide.module.sass';
const SlideTwo = () => {
    return (
        <article className={styles.article}>
            <h1>
                Добро пожаловать в <span>PROSCOM</span>
            </h1>
            <ul>
                <li>
                    <span className={styles.numbers}>01</span>
                    <div>
                        <span>Как работают профиль и уведомления? </span>
                        <ButtonOne>Изучить</ButtonOne>
                    </div>
                </li>
                <li>
                    <span className={styles.numbers}>02</span>
                    <div>
                        <span>Как работает раздел «Обучение»?</span>
                        <ButtonOne>Изучить</ButtonOne>
                    </div>
                </li>
                <li>
                    <span className={styles.numbers}>03</span>
                    <div>
                        <span>Как работает раздел «Помощь»?</span>
                        <ButtonOne>Изучить</ButtonOne>
                    </div>
                </li>
            </ul>
        </article>
    );
};

export default SlideTwo;
