import * as React from "react";
import Header from "./Header";

function Introduce() {
    return (
        <div className="self-stretch px-20 py-12 max-md:px-5">
            <div className="flex gap-5 flex-col sm:flex-row">
                <div className="flex flex-col w-3/5  sm:w-full items-center justify-center">
                    <div className="flex flex-col self-stretch my-auto text-slate-900 max-md:mt-10 md:max-w-full">
                        <h1 className="text-7xl font-extrabold leading-[79.2px] max-md:max-w-full max-md:text-4xl">
                            Collectible Sneakers
                        </h1>
                        <div className="mt-8 text-lg leading-7 max-md:max-w-full ">
                            Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
                            suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum
                            ultrices amet.
                        </div>
                        <div
                            className="flex gap-4 self-start mt-8 font-medium tracking-wide text-amber-900 whitespace-nowrap">
                            <button
                                className="grow justify-center px-8 py-4 text-xl leading-6 rounded-lg border-2 border-solid border-[color:var(--Amber-900,#78350F)] max-md:px-5"
                                type="submit"
                            >
                                Sign up now
                            </button>
                            <div
                                className="flex gap-2 justify-center px-2 py-3 my-auto text-base leading-6 rounded-lg"
                                href="..."
                            >
                                <img
                                    loading="lazy"
                                    src="../assets/svg/play-circle.svg"
                                    className="w-6 aspect-square"
                                    alt="Watch Demo"
                                />
                                <div className="grow">Watch Demo</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
                    <div className={"absolute top-0  w-[200px] h-[200px] bg-[#FBBF24] rounded-xl"}/>
                    <img
                        src="../assets/img/sneaker.png"
                        className="self-stretch my-auto w-full aspect-[1.15] max-md:mt-10 max-md:max-w-full z-50"
                        alt="Sneakers"
                    />
                </div>
            </div>
            <div className={"grid grid-cols-1 sm:grid-cols-3 mt-24"}>

                <div className="flex flex-col  col-span-1 items-center text-center sm:items-start sm:text-start">
                    <img loading="lazy"
                         srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c171f3d1d883912d174d5184af841a86a35f7bcaf672e511ba5a126f4a1c1f40?apiKey=3faea891e991492ab96a4c886843331a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c171f3d1d883912d174d5184af841a86a35f7bcaf672e511ba5a126f4a1c1f40?apiKey=3faea891e991492ab96a4c886843331a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c171f3d1d883912d174d5184af841a86a35f7bcaf672e511ba5a126f4a1c1f40?apiKey=3faea891e991492ab96a4c886843331a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c171f3d1d883912d174d5184af841a86a35f7bcaf672e511ba5a126f4a1c1f40?apiKey=3faea891e991492ab96a4c886843331a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c171f3d1d883912d174d5184af841a86a35f7bcaf672e511ba5a126f4a1c1f40?apiKey=3faea891e991492ab96a4c886843331a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c171f3d1d883912d174d5184af841a86a35f7bcaf672e511ba5a126f4a1c1f40?apiKey=3faea891e991492ab96a4c886843331a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c171f3d1d883912d174d5184af841a86a35f7bcaf672e511ba5a126f4a1c1f40?apiKey=3faea891e991492ab96a4c886843331a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c171f3d1d883912d174d5184af841a86a35f7bcaf672e511ba5a126f4a1c1f40?apiKey=3faea891e991492ab96a4c886843331a&"
                         className="w-16 aspect-square" alt="Image description"/>
                    <h2 className="mt-4 text-xl font-medium leading-6 whitespace-nowrap">
                        Nibh viverra
                    </h2>
                    <p className="mt-4 text-lg leading-7">
                        Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque
                        leo, massa.
                    </p>
                </div>

                <div className="flex flex-col  col-span-1 items-center text-center sm:items-start sm:text-start">

                    <img loading="lazy"
                         srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c171f3d1d883912d174d5184af841a86a35f7bcaf672e511ba5a126f4a1c1f40?apiKey=3faea891e991492ab96a4c886843331a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c171f3d1d883912d174d5184af841a86a35f7bcaf672e511ba5a126f4a1c1f40?apiKey=3faea891e991492ab96a4c886843331a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c171f3d1d883912d174d5184af841a86a35f7bcaf672e511ba5a126f4a1c1f40?apiKey=3faea891e991492ab96a4c886843331a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c171f3d1d883912d174d5184af841a86a35f7bcaf672e511ba5a126f4a1c1f40?apiKey=3faea891e991492ab96a4c886843331a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c171f3d1d883912d174d5184af841a86a35f7bcaf672e511ba5a126f4a1c1f40?apiKey=3faea891e991492ab96a4c886843331a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c171f3d1d883912d174d5184af841a86a35f7bcaf672e511ba5a126f4a1c1f40?apiKey=3faea891e991492ab96a4c886843331a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c171f3d1d883912d174d5184af841a86a35f7bcaf672e511ba5a126f4a1c1f40?apiKey=3faea891e991492ab96a4c886843331a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c171f3d1d883912d174d5184af841a86a35f7bcaf672e511ba5a126f4a1c1f40?apiKey=3faea891e991492ab96a4c886843331a&"
                         className="w-16 aspect-square" alt="Image description"/>
                    <h3 className="mt-4 text-xl font-medium leading-6 whitespace-nowrap">
                        Cursus amet
                    </h3>
                    <p className="mt-4 text-lg leading-7">
                        Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis
                        natoque leo, massa.
                    </p>

                </div>

                <div className="flex flex-col  col-span-1 items-center text-center sm:items-start sm:text-start">

                    <img loading="lazy"
                         srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c171f3d1d883912d174d5184af841a86a35f7bcaf672e511ba5a126f4a1c1f40?apiKey=3faea891e991492ab96a4c886843331a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c171f3d1d883912d174d5184af841a86a35f7bcaf672e511ba5a126f4a1c1f40?apiKey=3faea891e991492ab96a4c886843331a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c171f3d1d883912d174d5184af841a86a35f7bcaf672e511ba5a126f4a1c1f40?apiKey=3faea891e991492ab96a4c886843331a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c171f3d1d883912d174d5184af841a86a35f7bcaf672e511ba5a126f4a1c1f40?apiKey=3faea891e991492ab96a4c886843331a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c171f3d1d883912d174d5184af841a86a35f7bcaf672e511ba5a126f4a1c1f40?apiKey=3faea891e991492ab96a4c886843331a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c171f3d1d883912d174d5184af841a86a35f7bcaf672e511ba5a126f4a1c1f40?apiKey=3faea891e991492ab96a4c886843331a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c171f3d1d883912d174d5184af841a86a35f7bcaf672e511ba5a126f4a1c1f40?apiKey=3faea891e991492ab96a4c886843331a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c171f3d1d883912d174d5184af841a86a35f7bcaf672e511ba5a126f4a1c1f40?apiKey=3faea891e991492ab96a4c886843331a&"
                         className="w-16 aspect-square" alt="Image description"/>
                    <h3 className="mt-4 text-xl font-medium leading-6 whitespace-nowrap">
                        Ipsum fermentum
                    </h3>
                    <p className="mt-4 text-lg leading-7">
                        Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis
                        natoque leo, massa.
                    </p>

                </div>


            </div>
        </div>);
}

export default Introduce;
