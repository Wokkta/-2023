import { Carousel } from 'antd';
import SlideOne from './Slides/SlideOne';
import styles from './StartGuide.module.sass';
import SlideTwo from './Slides/SlideTwo';
import SlideThree from './Slides/SlideThree';
const contentStyle: React.CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const StartGuide = () => {
    return (
        <div className={styles.section}>
            <Carousel dotPosition={'top'} className={styles.carousel}>
                <SlideOne />
                <SlideTwo />
                <SlideThree />
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>
        </div>
    );
};

export default StartGuide;
