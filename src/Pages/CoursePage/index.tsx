import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

interface ITag {
    icon: string;
    text: string;
}
interface IPartition {
    id: number;
    type: string;
    name: string;
}
interface ICourse {
    id: number;
    title: string;
    percentage: number;
    image: string;
    tags: ITag[];
    partitions: IPartition[];
}

const CoursePage = () => {
    const { id } = useParams();
    const [course, setCourse] = useState<ICourse>({
        id: 0,
        title: 'Социализация: учимся общаться и адаптироваться в обществе',
        percentage: 54,
        image: 'courses/background_1.jpg',
        tags: [
            {
                icon: 'dummy',
                text: '2 недели',
            },
            {
                icon: 'dummy',
                text: 'Обязательно',
            },
        ],
        partitions: [
            {
                id: 0,
                type: 'video',
                name: 'partition 1',
            },
            {
                id: 1,
                type: 'text',
                name: 'partition 2',
            },
            {
                id: 2,
                type: 'test',
                name: 'partition 3',
            },
            {
                id: 3,
                type: 'text',
                name: 'partition 4',
            },
            {
                id: 4,
                type: 'test',
                name: 'partition 5',
            },
        ],
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://95.165.137.33:5678/api/course?id=' + id);
                setCourse(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching dictionary:', error);
            }
        };

        fetchData();
    }, [id]);
    return (
        <div>
            {course.image}
            {course.percentage}
            {course.title}
        </div>
    );
};

export default CoursePage;
