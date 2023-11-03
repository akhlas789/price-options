/* eslint-disable react/prop-types */
const PriceOption = ({option}) => {
    return (
        <div>
            <h2>
                <span className="text-5xl">Price: {option.price}$</span>
                <span className="text-2xl ml-3">/Mon</span>
            </h2>
            <h4 className="text-3xl">{option.name}</h4>
        </div>
    );
};

export default PriceOption;