import { Popover } from 'antd';
import styles from './Texts.module.sass';
import axios from 'axios';
import { useEffect, useState } from 'react';
interface ITerm {
  term: string;
  definition: string;
}
type Text = {
  children: string;
};
const Texts: React.FC<Text> = ({ children }) => {
  const [dictionary, setDictionary] = useState<ITerm[]>([]);
  const text = children;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://95.165.137.33:5678/api/dictionary');
        setDictionary(response.data);
      } catch (error) {
        console.error('Error fetching dictionary:', error);
      }
    };

    fetchData();
  }, []);
  console.log(dictionary);
  return (
    <span className={styles.texts}>
      {text.split(' ').map((text) => {
        if (dictionary.map((el) => el.term).includes(text)) {
          return (
            <Popover
              key={text}
              content={
                <span className={styles.popover}>
                  {dictionary[dictionary.map((el) => el.term).indexOf(text)].definition}
                </span>
              }>
              <span className={styles.term}>{text}</span>{' '}
            </Popover>
          );
        }
        return <span key={text}>{text + ' '}</span>;
      })}
    </span>
  );
};

export default Texts;
