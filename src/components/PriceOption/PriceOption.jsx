import Feature from "../Feature/Feature";

/* eslint-disable react/prop-types */
const PriceOption = ({ option }) => {
    return (
        <div className="bg-blue-400 p-4 rounded-xl flex flex-col">
            <h2 className="text-center">
                <span className="text-5xl font-extrabold">{option.price}$</span>
                <span className="text-2xl ml-3">/Mon</span>
            </h2>
            <h4 className="text-3xl text-center my-8">{option.name}</h4>
            <div className="md:pl-6 flex-grow">
                {
                    option.features.map((feture, index) => <Feature key={index} feture={feture}></Feature>)
                }
            </div>
            <div className="text-center">
                <button className="bg-green-600 mt-5 px-4 py-2 rounded-lg font-bold w-9/12">Buy Now</button>
            </div>
        </div>
    );
};

export default PriceOption;