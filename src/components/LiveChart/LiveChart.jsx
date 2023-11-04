import { LineChart, Line } from 'recharts';

const LiveChart = () => {
    const subjectMarkData = [
        {
            "id": 1,
            "name": "Alice",
            "mathMarks": 80,
            "physicsMarks": 75,
            "chemistryMarks": 85
        },
        {
            "id": 2,
            "name": "Bob",
            "mathMarks": 85,
            "physicsMarks": 80,
            "chemistryMarks": 90
        },
        {
            "id": 3,
            "name": "Charlie",
            "mathMarks": 70,
            "physicsMarks": 65,
            "chemistryMarks": 75
        },
        {
            "id": 4,
            "name": "David",
            "mathMarks": 90,
            "physicsMarks": 85,
            "chemistryMarks": 95
        },
        {
            "id": 5,
            "name": "Emily",
            "mathMarks": 65,
            "physicsMarks": 60,
            "chemistryMarks": 70
        },
        {
            "id": 6,
            "name": "Frank",
            "mathMarks": 75,
            "physicsMarks": 70,
            "chemistryMarks": 80
        },
        {
            "id": 7,
            "name": "George",
            "mathMarks": 88,
            "physicsMarks": 83,
            "chemistryMarks": 91
        },
        {
            "id": 8,
            "name": "Hannah",
            "mathMarks": 92,
            "physicsMarks": 87,
            "chemistryMarks": 96
        },
        {
            "id": 9,
            "name": "Irene",
            "mathMarks": 78,
            "physicsMarks": 73,
            "chemistryMarks": 83
        },
        {
            "id": 10,
            "name": "Jack",
            "mathMarks": 82,
            "physicsMarks": 77,
            "chemistryMarks": 87
        }
    ]


    return (
        <div>
            <LineChart width={400} height={400} data={subjectMarkData}>
                <Line dataKey="mathMarks"/>
                <Line dataKey="physicsMarks"></Line>
                <Line dataKey="chemistryMarks"></Line>
            </LineChart>
        </div>
    );
};

export default LiveChart;