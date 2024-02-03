import * as React from "react";
import AppleSectionCard from "./AppleSectionCard";

function JoinUs() {
    return (
        <div>
            <div className="bg-white shadow-md rounded-md px-24 py-48">
                <div className="self-end mr-24 bg-sky-700 h-[45px] rounded-[50px] w-[59px] max-md:mr-2.5"/>
                <div className="mt-7 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                        <div className="flex flex-col w-[46%] max-md:ml-0 max-md:w-full">
                            <div
                                className="flex flex-col mt-10 text-xl leading-9 text-slate-900 max-md:mt-10 max-md:max-w-full">
                                <h1 className="text-6xl font-extrabold leading-[61.6px] max-md:max-w-full max-md:text-4xl">Why
                                    join us</h1>
                                <div className="flex gap-2 justify-between mt-6 max-md:flex-wrap max-md:max-w-full">
                                    <img loading="lazy"
                                         src="https://cdn.builder.io/api/v1/image/assets/TEMP/1fcee5b8704c815a8fb7e61f69b2a33c5d007d79ccad6700ab174da1d48dbe63?apiKey=3faea891e991492ab96a4c886843331a&"
                                         className="my-auto w-6 aspect-square"/>
                                    <div className="flex-auto max-md:max-w-full">Est et in pharetra magna adipiscing
                                        ornare aliquam.
                                    </div>
                                </div>
                                <div className="flex gap-2 justify-between max-md:flex-wrap max-md:max-w-full">
                                    <img loading="lazy"
                                         src="https://cdn.builder.io/api/v1/image/assets/TEMP/1fcee5b8704c815a8fb7e61f69b2a33c5d007d79ccad6700ab174da1d48dbe63?apiKey=3faea891e991492ab96a4c886843331a&"
                                         className="my-auto w-6 aspect-square"/>
                                    <div className="flex-auto max-md:max-w-full">Tellus arcu sed consequat ac velit ut
                                        eu blandit.
                                    </div>
                                </div>
                                <div className="flex gap-2 justify-between max-md:flex-wrap max-md:max-w-full">
                                    <img loading="lazy"
                                         src="https://cdn.builder.io/api/v1/image/assets/TEMP/1fcee5b8704c815a8fb7e61f69b2a33c5d007d79ccad6700ab174da1d48dbe63?apiKey=3faea891e991492ab96a4c886843331a&"
                                         className="my-auto w-6 aspect-square"/>
                                    <div className="flex-auto max-md:max-w-full">Ullamcorper ornare in et egestas dolor
                                        orci.
                                    </div>
                                </div>
                                <button
                                    className="justify-center self-start px-8 py-4 mt-6 font-medium tracking-wide text-amber-900 whitespace-nowrap rounded-lg border-2 border-solid border-[color:var(--Amber-900,#78350F)] leading-[120%] max-md:px-5">Sign
                                    up now
                                </button>
                            </div>
                        </div>
                        <div className="relative">

                            <div className={"z-50"}>

                                <AppleSectionCard
                                    img={"https://istanbulbogazicienstitu.com/view/images/blog/onecikan/fotograf-sanatcisi.jpg"}/>
                            </div>
                            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                                <div
                                    className="absolute z-0 left-0 top-0 -translate-x-8 translate-y-8 bg-black bg-opacity-75 flex justify-between items-center p-4">
                                    <div className="flex space-x-2 ">
                                        <div className="w-24 h-24 bg-amber-800 bg-opacity-50 rounded-xl"></div>
                                    </div>

                                </div>
                                <button className="bg-white p-2 rounded-full">
                                    <svg className="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default JoinUs;
