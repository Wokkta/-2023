import { Avatar, Card } from 'antd';
import ButtonOne from '../../../Buttons/ButtonOne';
import styles from '../StartGuide.module.sass';
import Meta from 'antd/es/card/Meta';
const SlideOne = () => {
    return (
        <article className={styles.article}>
            <h1>Добро пожаловать в PROSCOM</h1>
            <ul>
                <li>
                    <span className={styles.numbers}>01</span>
                    <span>Ознакомьтесь с вводной информацией, чтобы с легкостью работать на платформе. Успехов!</span>
                </li>
                <li>
                    <span className={styles.numbers}>02</span>
                    <span>
                        За выполненные задания вы получаете баллы, они могут стать приятными бонусами. Помимо этого
                        баллы определяют уровень вашего прогресса, который виден как вам, так и вашим руководителям.
                    </span>
                </li>
                <li>
                    <span className={styles.numbers}>03</span>
                    <div>
                        <span>
                            Пройдите тест, чтобы приступить к работе на платформе. На основе полученных результатов мы
                            сможем определить ваш профессиональный уровень и составим индивидуальный план обучения.
                        </span>
                        <ButtonOne>Выполнить тест</ButtonOne>
                    </div>
                </li>
                <li>
                    <span className={styles.numbers}>04</span>
                    <div>
                        <span>Перейдите по всем полезным ссылкам, так же вы можете найти их в разделе «Помощь» </span>
                        <div>
                            <Card className={styles.card}>
                                <Meta
                                    avatar={<Avatar src="#" />}
                                    title="Google Chat - коммуникация"
                                    className={styles.meta}
                                />
                            </Card>
                            <Card className={styles.card}>
                                <Meta
                                    avatar={<Avatar src="#" />}
                                    title="Boris Daily - бот, который интересуется твоим прогрессом"
                                    className={styles.meta}
                                />
                            </Card>
                            <Card className={styles.card}>
                                <Meta
                                    avatar={<Avatar src="#" />}
                                    title="Violet - трекер времени на решение задач"
                                    className={styles.meta}
                                />
                            </Card>
                            <Card className={styles.card}>
                                <Meta
                                    avatar={<Avatar src="#" />}
                                    title="Asana - основной инструмент для работы над задачами"
                                    className={styles.meta}
                                />
                            </Card>
                        </div>
                    </div>
                </li>
            </ul>
        </article>
    );
};

export default SlideOne;
