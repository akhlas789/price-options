/* eslint-disable react/prop-types */
const Link = ({route}) => {
    return (
        <li
            className="mr-6 hover:bg-yellow-500 rounded-xl px-5"> <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;