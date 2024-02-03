import React, {useState} from "react";

function Card(props) {
    return (<div
        className="flex flex-col flex-1  rounded-md border border-solid shadow-lg bg-slate-900 border-[color:var(--Blue-Gray-900,#0F172A)] shadow-lg shadow-white">
        <div className={"relative"}></div>
        <div className="flex flex-col rounded-md   ">
            <img loading="lazy"
                 srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/59874601227eb55bcd3d9f12869494734bcd479c7e95d9696d541c5da55f2d59?apiKey=3faea891e991492ab96a4c886843331a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/59874601227eb55bcd3d9f12869494734bcd479c7e95d9696d541c5da55f2d59?apiKey=3faea891e991492ab96a4c886843331a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/59874601227eb55bcd3d9f12869494734bcd479c7e95d9696d541c5da55f2d59?apiKey=3faea891e991492ab96a4c886843331a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/59874601227eb55bcd3d9f12869494734bcd479c7e95d9696d541c5da55f2d59?apiKey=3faea891e991492ab96a4c886843331a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/59874601227eb55bcd3d9f12869494734bcd479c7e95d9696d541c5da55f2d59?apiKey=3faea891e991492ab96a4c886843331a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/59874601227eb55bcd3d9f12869494734bcd479c7e95d9696d541c5da55f2d59?apiKey=3faea891e991492ab96a4c886843331a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/59874601227eb55bcd3d9f12869494734bcd479c7e95d9696d541c5da55f2d59?apiKey=3faea891e991492ab96a4c886843331a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/59874601227eb55bcd3d9f12869494734bcd479c7e95d9696d541c5da55f2d59?apiKey=3faea891e991492ab96a4c886843331a&"
                 className="z-10 w-full rounded-t-md"/>
            <div className={"text-white "}>

                <div className="flex flex-col self-start px-4 py-8  max-md:max-w-full">
                    <h2 className="text-2xl font-bold leading-7 max-md:max-w-full">
                        Title
                    </h2>
                    <p className="mt-4 text-lg leading-7 max-md:max-w-full">
                        Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
                    </p>
                    <div
                        className="flex justify-center items-center self-end px-16 py-4 mt-8 w-full text-xl font-medium tracking-wide leading-6 rounded-lg border-2 border-solid border-[color:var(--White,#FFF)] max-md:px-5 max-md:max-w-full">
                        <div className="flex gap-4">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7b4f9374111f28a865784edf666e0c0c78623d3cd758399e07f065c6efc235e?apiKey=3faea891e991492ab96a4c886843331a&"
                                className="w-6 aspect-square"
                                alt=""
                            />
                            <div className="flex-auto">Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

function Best() {

    return (
        <div className={"bg-[#0F172A] p-20"}>
            <div className='flex flex-col items-center text-white sm:flex-row sm:justify-between'>
                <div className="text-3xl font-bold mb-4 sm:mb-0">
                    The best of the best
                </div>
                <span className="border rounded-md border-white p-4 font-bold">
                Sign up now
            </span>
            </div>

            <div className={"mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4"}>
                <Card/>
                <Card/>
                <Card/>
            </div>


        </div>);
}

export default Best;
