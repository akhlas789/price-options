import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": 29.99,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Personal training available at extra cost",
                "Access to swimming pool"
            ]
        },
        {
            "id": 2,
            "name": "Standard Membership",
            "price": 49.99,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Group fitness classes included",
                "Personal training available at extra cost",
                "Access to sauna"
            ]
        },
        {
            "id": 3,
            "name": "Premium Membership",
            "price": 79.99,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Group fitness classes included",
                "Unlimited tanning services",
                "Personal training included",
                "Access to all amenities including pool and sauna"
            ]
        }
    ]

    return (
        <div className="m-12">
            <h2 className="text-5xl text-center mt-5 mb-5">Best Prices in the town</h2>
            <div className="grid grid-cols-3 gap-6">
                {
                    priceOptions.map(option => <PriceOption option={option} key={option.id}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;