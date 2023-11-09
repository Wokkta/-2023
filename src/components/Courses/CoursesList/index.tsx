import { useEffect, useState } from 'react';
import axios from 'axios';
import CourseCard from '../CourseCard';
import styles from './Courses.module.sass';
interface ITag {
    icon: string;
    text: string;
}
interface ICourse {
    id: number;
    title: string;
    percentage: number;
    image: string;
    tags: ITag;
}
const Courses = () => {
    const [courses, setCourses] = useState<ICourse[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://95.165.137.33:5678/api/courses?limit=0');
                setCourses(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching dictionary:', error);
            }
        };

        fetchData();
    }, []);
    useEffect(() => {
        console.log(courses);
    }, [courses]);
    return (
        <section className={styles.container}>
            <h1>Курсы</h1>
            <div className={styles.list}>
                {courses.map((el, i) => (
                    <CourseCard
                        title={el.title}
                        progress={el.percentage}
                        coverImage={'http://95.165.137.33:5678/images/' + el.image}
                        to={'' + el.id}
                        key={i}
                    />
                ))}
            </div>
        </section>
    );
};

export default Courses;
