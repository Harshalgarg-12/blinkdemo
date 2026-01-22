import Container from "./Container.jsx";
export default function Footer() {
    return (
        <Container>
        <div>
            <div className="grid grid-cols-3 justify-around capitalize mx-auto mb-10 mt-12 ">
                <div className="Col-span-auto justify-center ">
                    <h3 className="my-3-[18px] font-semibold text-[rgb(0,0,0)] ">Useful Links</h3>
                    <div className="grid grid-cols-3 gap-6 ">
                        <div>
                            <ul className="text-[14px] text-[rgb(102,102,102)]">
                                <li className="my-3">blog  </li>
                                <li className="my-3">Privacy</li>
                                <li className="my-3"> terms</li>
                                <li className="my-3"> FAQs </li>
                                <li className="my-3"> Security</li>
                                <li className="my-3"> contact </li>

                            </ul>
                        </div>
                        <div>
                            <ul className="text-[14px] text-[rgb(102,102,102)]">
                                <li className="my-3">partner</li>
                                <li className="my-3">franchise</li>
                                <li className="my-3"> seller</li>
                                <li className="my-3"> warehouse </li>
                                <li className="my-3"> deliver</li>
                                <li className="my-3"> resources </li>

                            </ul>
                        </div>
                        <div>
                            <ul className="text-[14px] text-[rgb(102,102,102)]">
                                <li className="my-3">recipes</li>
                                <li className="my-3">bistro </li>
                                <li className="my-3">district</li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-span-2">
                    <h3 className="my-3-[18px] font-semibold text-[rgb(0,0,0)] ">Categories
                        <span className="text-[16px] text-[rgb(12,131,31)] px-4 lowercase">see all</span>
                    </h3>
                    <div className="grid grid-cols-3">
                        <div>
                            <ul className="text-[14px] text-[rgb(102,102,102)]">
                                <li className="my-3"> Vegetables & Fruits</li>
                                <li className="my-3"> Cold Drinks & Juices</li>
                                <li className="my-3">Bakery & Biscuits </li>
                                <li className="my-3"> Dry Fruits, Masala & Oil</li>
                                <li className="my-3"> Paan Corner</li>
                                <li className="my-3">Pharma & Wellness </li>
                                <li className="my-3">Personal Care </li>
                                <li className="my-3">Kitchen & Dining </li>
                                <li className="my-3"> Stationery Needs</li>
                                <li className="my-3">Print Store</li>

                            </ul>
                        </div>
                        <div>
                            <ul className="text-[14px] text-[rgb(102,102,102)]">
                                <li className="my-3"> Dairy & Breakfast</li>
                                <li className="my-3">Instant & Frozen Food </li>
                                <li className="my-3">Sweet Tooth </li>
                                <li className="my-3"> Sauces & Spreads</li>
                                <li className="my-3"> Organic & Premium</li>
                                <li className="my-3"> Cleaning Essentials</li>
                                <li className="my-3"> Pet Care</li>
                                <li className="my-3"> Fashion & Accessories</li>
                                <li className="my-3">Books</li>
                                <li className="my-3">E-Gift Cards</li>
                            </ul>
                        </div>
                        <div>
                            <ul className="text-[14px] text-[rgb(102,102,102)]">
                                <li className="my-3">Munchies </li>
                                <li className="my-3"> Tea, Coffee & Milk Drinks</li>
                                <li className="my-3"> Atta, Rice & Dal</li>
                                <li className="my-3">Chicken, Meat & Fish </li>
                                <li className="my-3">Baby Care </li>
                                <li className="my-3"> Home Furnishing & Decor</li>
                                <li className="my-3"> Beauty & Cosmetics</li>
                                <li className="my-3"> Electronics & Electricals</li>
                                <li className="my-3">Toys & Games</li>
                                <li className="my-3">Rakhi Gifts</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3  w-[1002px] mx-auto">
                <div>
                    <span className="text-[12px] text-[rgb(102,102,102)]"> © Blink Commerce Private Limited, 2016-2025</span>
                </div>
                <div className="flex gap-4 justify-around items-center">
                    <span className="text-[14px] font-semibold text-[rgb(102,102,102)]">Download App</span>
                    <img src="images/176.png" alt="" width={"92px"} height={"30px"}/>
                    <img src="images/177.png" alt=""  width={"92px"} height={"30px"}/>
                </div>
                <div></div>
            </div>

            <div className="text-start my-3 mx-auto w-fit">
                <span className="text-[14px] text-[rgb(102,102,102)] mx-auto ">“Blinkit” is owned & managed by "Blink Commerce Private Limited" and is not related, linked or interconnected in whatsoever manner or nature, to “GROFFR.COM” which is a real estate services business operated by “Redstone Consultancy Services Private Limited”.
                </span>
            </div>
        </div>
        </Container>
    )
}

