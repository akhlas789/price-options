/* eslint-disable react/prop-types */
import { BsFillCheckCircleFill } from 'react-icons/bs';
const Feature = ({ feture }) => {
    return (
        <div>
            <p className='flex items-center '>
                <BsFillCheckCircleFill className='text-green-600 mr-2'></BsFillCheckCircleFill>
                {feture}
            </p>
        </div>
    );
};

export default Feature;

// BsFillCheckCircleFill