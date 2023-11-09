import ButtonOne from '../../../Buttons/ButtonOne';
import styles from '../StartGuide.module.sass';
const SlideThree = () => {
    return (
        <article className={styles.article}>
            <h1>
                <span>Этикет общения</span>
            </h1>
            <ul>
                <li>
                    <span className={styles.numbers}>01</span>
                    <div>
                        <h2>Как правильно связаться с коллегой и рассказать о проблеме </h2>
                        <div>
                            <ul className={styles.circleList}>
                                <li>Одно сообщение</li>
                                <li>Емко, четко, кратко</li>
                                <li>Ссылка на задачу</li>
                                <li>Срочный вопрос - звони</li>
                            </ul>
                            <ButtonOne>
                                {
                                    'Пример:\nПривет! У меня вопрос: подскажи, пожалуйста, удалось ли тебе разобраться вот с этой задачей <ссылка>? Какие сложности? Как будет пара минут, посмотри, пожалуйста.'
                                }
                            </ButtonOne>
                        </div>
                    </div>
                </li>
                <li>
                    <span className={styles.numbers}>02</span>
                    <div>
                        <h2>Все и всегда записывай в Асане, чтобы ничего не потерять</h2>
                        <div>
                            <ul className={styles.circleList}>
                                <li>Документировать подробно и четко</li>
                                <li>Таски в Асане должны быть закрыты на том, кто ее сделал</li>
                                <li>Не оставляйте сроки задач в прошлом</li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li>
                    <span className={styles.numbers}>03</span>
                    <div>
                        <h2>Отвечай на вопрос сразу или говори, когда будет фидбэк</h2>
                        <div>
                            <ul className={styles.circleList}>
                                <li>Главное правило — не допускать повторного запроса</li>
                                <li>
                                    Если задача большая — то попросить поставить таск в Асане, чтобы ее встроить в свой
                                    график
                                </li>
                                <li>
                                    В работе с клиентами ответ на запрос на почте или в сообщениях не должен
                                    откладываться никогда и ни на сколько.
                                </li>
                                <li>
                                    Время ответа на сообщение во время рабочего дня не должно быть больше часа, в
                                    исключительных случаях — двух
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li>
                    <span className={styles.numbers}>04</span>
                    <div>
                        <h2>Пиши только тем, кому действительно нужна твоя информация</h2>
                        <div>
                            <ul className={styles.circleList}>
                                <li>Правильно выбор чата в Google Chat</li>
                                <li>Использование тредов</li>
                                <li>Не пинговать друг-друга в переписках с клиентом</li>
                            </ul>
                        </div>
                    </div>
                </li>

                <li>
                    <span className={styles.numbers}>05</span>
                    <div>
                        <h2>Не бери чужую ответственность и не делись своей </h2>
                        <div>
                            <ul className={styles.circleList}>
                                <li>Оставаться в рамках своих обязанностей</li>
                                <li>Пространство для отказа в просьбе</li>
                                <li>Взаимное уважение</li>
                                <li>Не использовать слово “коллега”</li>
                            </ul>
                            <ButtonOne>
                                <span>Пример:</span>
                                <br />
                                <span>Привет! Сори, я забыл вчера написать. Можешь, пожалуйста, скинуть бриф?</span>
                            </ButtonOne>
                        </div>
                    </div>
                </li>
                <li>
                    <span className={styles.numbers}>06</span>
                    <div>
                        <h2>Не отвлекай всех от работы второстепенными объявлениями</h2>
                        <ul className={styles.circleList}>
                            <li>Делаем общие анонсы или утром (до 12), или вечером (после 18)</li>
                        </ul>
                    </div>
                </li>
                <li>
                    <span className={styles.numbers}>07</span>
                    <div>
                        <h2>Не уходи в личные сообщения </h2>
                    </div>
                </li>
            </ul>
        </article>
    );
};

export default SlideThree;
