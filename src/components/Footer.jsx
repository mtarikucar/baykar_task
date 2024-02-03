import * as React from "react";

function Footer(props) {
    return (
        <div className="flex flex-col justify-center px-20 bg-slate-900 max-md:px-5 bg-[#0F172A] text-white">
            <div className="py-12 border-t border-b border-solid border-b-[color:var(--Blue-Gray-700,#334155)] border-t-[color:var(--Blue-Gray-700,#334155)] max-md:max-w-full">
                <div className="grid grid-cols-1 sm:grid-cols-4  gap-5 max-md:flex-col ">
                    <div className="flex flex-col max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow py-3 text-base leading-6 whitespace-nowrap text-slate-200 max-md:mt-10">
                            <div className="font-medium text-white leading-[110%]">
                                Product
                            </div>
                            <div className="mt-6">Pricing</div>
                            <div className="mt-6">Overview</div>
                            <div className="mt-6">Browse</div>
                            <div className="mt-6">Accessibility</div>
                            <div className="mt-6">Five</div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow py-3 text-base leading-6 whitespace-nowrap text-slate-200 max-md:mt-10">
                            <div className="font-medium text-white leading-[110%]">
                                Solutions
                            </div>
                            <div className="mt-6">Brainstorming</div>
                            <div className="mt-6">Ideation</div>
                            <div className="mt-6">Wireframing</div>
                            <div className="mt-6">Research</div>
                            <div className="mt-6">Design</div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow py-3 text-base leading-6 text-slate-200 max-md:mt-10">
                            <div className="font-medium text-white leading-[110%]">
                                Support
                            </div>
                            <div className="mt-6">Contact Us</div>
                            <div className="mt-6">Developers</div>
                            <div className="mt-6">Documentation</div>
                            <div className="mt-6">Integrations</div>
                            <div className="mt-6">Reports</div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col pt-3 max-md:mt-10">
                            <div className="text-base font-medium leading-4 text-white">
                                Get the App
                            </div>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/56f55028ab94e7c48dd53746afe51dd82ab564e9751940ccff6648a6555f9094?apiKey=3faea891e991492ab96a4c886843331a&"
                                className="mt-6 max-w-full aspect-[3.03] w-[120px]"
                            />
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/90c4e9e4289bdf31e24653684d224567f4a62d7b81a8740cc8f40fed58f1f23c?apiKey=3faea891e991492ab96a4c886843331a&"
                                className="mt-3.5 max-w-full aspect-[3.33] w-[135px]"
                            />
                            <div className="mt-14 text-base font-medium leading-4 text-slate-200 max-md:mt-10">
                                Follow Us
                            </div>
                            <div className="flex gap-4 pr-20 mt-5 max-md:pr-5">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/872635241f7e2c4efecf97e4cc3bc4a202dbd12cb9615454f3dc4d392483dd7f?apiKey=3faea891e991492ab96a4c886843331a&"
                                    className="w-6 aspect-square"
                                />
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/524351f5c2781b1922a86c10fd58d133a3cedbfc2840077c789c049b84fcfb15?apiKey=3faea891e991492ab96a4c886843331a&"
                                    className="w-6 aspect-square"
                                />
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/41865e8c61e6c73251c3a81228e5be82a5f242f1fd6a00e4ddb916e5e2349f45?apiKey=3faea891e991492ab96a4c886843331a&"
                                    className="w-6 aspect-square"
                                />
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e618d44ac59f1efe0b2740ad9982f9ebd52dbc32ab9a5fa4bc347db6a3728101?apiKey=3faea891e991492ab96a4c886843331a&"
                                    className="w-6 aspect-square"
                                />
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/db7f5f53bd968d03f2d776782f8d89829ddf2c5b9cdf12ec153849381557b51f?apiKey=3faea891e991492ab96a4c886843331a&"
                                    className="w-6 aspect-square"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-5 justify-between py-6 text-base leading-6 text-slate-200 max-md:flex-wrap max-md:max-w-full">
                <div className="grow my-auto max-md:max-w-full">
                    Collers @ 2023. All rights reserved.
                </div>
                <div className="flex gap-5 justify-between items-center whitespace-nowrap">
                    <div className="self-stretch my-auto">Terms</div>
                    <div className="self-stretch my-auto">Privacy</div>
                    <div className="self-stretch my-auto">Contact</div>
                    <div className="flex gap-2 justify-between self-stretch py-3">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe7e092a1b2483c13420e0264d4501d7fe404301463c3437c6d0ba182c053d67?apiKey=3faea891e991492ab96a4c886843331a&"
                            className="w-6 aspect-square"
                        />
                        <div>EN</div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Footer;
