import * as React from "react";

function Collection(props) {
    return (
        <div className="flex flex-col justify-center items-center  ">
            <div className="mt-8 text-6xl font-extrabold  text-slate-900 max-md:max-w-full max-md:text-4xl">
                Grow your collection
            </div>
            <div className="mt-8 text-lg leading-7 text-slate-900 max-md:max-w-full">
                Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet
                dictum pellentesque sed. Eu non turpis risus odio sapien, fames sit
                rhoncus.
                <br />
                Nec magna sed interdum sit purus tellus. Et volutpat proin neque
                placerat at bibendum quam tellus.
            </div>
            <div className="flex relative flex-col self-stretch  mt-20 w-full ">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f09f4b9401ac9988d547f8db76ef1e97d81bca639460654a08e2517c79b0cca?apiKey=3faea891e991492ab96a4c886843331a&"
                    className="object-cover absolute inset-0 size-full w-full"
                />
                <div className="relative mx-5 mb-14">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                        <div className="flex flex-col w-[21%] max-md:ml-0 max-md:w-full">
                            <div className="flex relative flex-col text-xl font-medium tracking-wide leading-6 text-slate-900 max-md:mt-10">
                                <div className="flex gap-2 p-4 bg-white rounded-lg shadow">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f442d4f70f326c247f0041490d64de59e08689d261dc48757e81d404d2f0093e?apiKey=3faea891e991492ab96a4c886843331a&"
                                        className="w-6 aspect-square"
                                    />
                                    <div className="flex-auto">Bibendum tellus</div>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/799a4a80de4643adcedd486f8d553969e1d2c591aefb65870b75edd2ddf444fe?apiKey=3faea891e991492ab96a4c886843331a&"
                                        className="w-6 aspect-square"
                                    />
                                </div>
                                <div className="flex gap-4 justify-between p-4 mt-4 rounded-lg">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc94b93ce655886a98571c3c57d7c8f513ca8a24991f1e348ccf2d9e7a7df907?apiKey=3faea891e991492ab96a4c886843331a&"
                                        className="w-6 aspect-square"
                                    />
                                    <div className="flex-auto">Cras eget</div>
                                </div>
                                <div className="flex gap-4 justify-between p-4 mt-4 rounded-lg">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec91f6502fdbf9f39c14287332efdee4c10a203992774b2cc06fee2963e5605e?apiKey=3faea891e991492ab96a4c886843331a&"
                                        className="w-6 aspect-square"
                                    />
                                    <div className="flex-auto">Dolor pharetra</div>
                                </div>
                                <div className="flex gap-4 justify-between p-4 mt-4 rounded-lg">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a7deab550902edf675ec2e5219967131d4e3f311b54caf7ae4f999ed2d73e74?apiKey=3faea891e991492ab96a4c886843331a&"
                                        className="w-6 aspect-square"
                                    />
                                    <div className="flex-auto">Amet, fringilla</div>
                                </div>
                                <div className="flex gap-4 justify-between p-4 mt-4 rounded-lg">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a31676bce9c70f1ad91df5a5a9d40ed097a284e4abd24791ddbf7c437d6e3ce?apiKey=3faea891e991492ab96a4c886843331a&"
                                        className="w-6 aspect-square"
                                    />
                                    <div className="flex-auto">Amet nibh</div>
                                </div>
                                <div className="flex gap-4 justify-between p-4 mt-4 rounded-lg">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1aae98218723b2988a29cb99a20cbc4fd5daa228f2e972e45e8e2770e36fad89?apiKey=3faea891e991492ab96a4c886843331a&"
                                        className="w-6 aspect-square"
                                    />
                                    <div className="flex-auto">Sed velit</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5  max-md:ml-0 max-md:w-full">
                            <div className="flex relative flex-col grow justify-center max-md:mt-10 max-md:max-w-full">
                                {/*<img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/620d61b8721ec1429880c90822647df5373ea41e36e5c1f096c3bf88a4fef8e8?apiKey=3faea891e991492ab96a4c886843331a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/620d61b8721ec1429880c90822647df5373ea41e36e5c1f096c3bf88a4fef8e8?apiKey=3faea891e991492ab96a4c886843331a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/620d61b8721ec1429880c90822647df5373ea41e36e5c1f096c3bf88a4fef8e8?apiKey=3faea891e991492ab96a4c886843331a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/620d61b8721ec1429880c90822647df5373ea41e36e5c1f096c3bf88a4fef8e8?apiKey=3faea891e991492ab96a4c886843331a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/620d61b8721ec1429880c90822647df5373ea41e36e5c1f096c3bf88a4fef8e8?apiKey=3faea891e991492ab96a4c886843331a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/620d61b8721ec1429880c90822647df5373ea41e36e5c1f096c3bf88a4fef8e8?apiKey=3faea891e991492ab96a4c886843331a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/620d61b8721ec1429880c90822647df5373ea41e36e5c1f096c3bf88a4fef8e8?apiKey=3faea891e991492ab96a4c886843331a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/620d61b8721ec1429880c90822647df5373ea41e36e5c1f096c3bf88a4fef8e8?apiKey=3faea891e991492ab96a4c886843331a&"
                                    className="w-full rounded-3xl border-solid shadow-lg aspect-[1.69] border-[5px] border-[color:var(--White,#FFF)] max-md:max-w-full"
                                />*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Collection;
