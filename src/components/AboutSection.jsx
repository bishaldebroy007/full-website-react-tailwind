



const AboutSection = () => {
    return (
        <>
            <div id="About-Section" className="mt-8 mb-5 gap-5 p-2 bg-white border border-gray-200 rounded-4xl shadow-lg dark:bg-gray-800 dark:border-gray-700 hover:opacity-95 duration-500">
                <ul
                    className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800"
                    id="defaultTab"
                    data-tabs-toggle="#defaultTabContent"
                    role="tablist"
                >
                    <li className="me-2">
                        <button
                            id="about-tab"
                            data-tabs-target="#about"
                            type="button"
                            role="tab"
                            aria-controls="about"
                            aria-selected="true"
                            className="inline-block p-3 hover:underline duration-500 cursor-pointer transform hover:scale-110"
                        >
                            About Me
                        </button>
                    </li>
                    <li className="me-2">
                        <button
                            id="education-tab"
                            data-tabs-target="#education"
                            type="button"
                            role="tab"
                            aria-controls="education"
                            aria-selected="false"
                            className="inline-block p-3 hover:underline duration-500 cursor-pointer transform hover:scale-110"
                        >
                            Education
                        </button>
                    </li>
                    {/* <li className="me-2">
                        <button
                            id="statistics-tab"
                            data-tabs-target="#statistics"
                            type="button"
                            role="tab"
                            aria-controls="statistics"
                            aria-selected="false"
                            className="inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                        >
                            Languages
                        </button>
                    </li> */}
                </ul>
                <div id="defaultTabContent">
                    <div
                        className="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
                        id="about"
                        role="tabpanel"
                        aria-labelledby="about-tab"
                    >
                        <h2 className="mb-3 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">

                            Internship at Penta Globals LTD.
                        </h2>
                        <p className="mb-3 text-gray-500 dark:text-gray-400">
                            Empower Developers, IT Ops, and business teams to collaborate at high
                            velocity. Respond to changes and deliver great customer and employee
                            service experiences fast.
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700"
                        >
                            Learn more
                            <svg
                                className=" w-2.5 h-2.5 ms-2 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 6 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="m1 9 4-4-4-4"
                                />
                            </svg>
                        </a>
                    </div>
                    <div
                        className="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
                        id="education"
                        role="tabpanel"
                        aria-labelledby="education-tab"
                    >
                        {/* <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                            We invest in the world’s potential
                        </h2> */}
                        {/* List */}
                        <ul role="list" className="space-y-4 text-gray-500 dark:text-gray-400">
                            <li className="flex space-x-2 rtl:space-x-reverse items-center">
                                <svg
                                    className="shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="leading-tight">Computer Science Graduate at BRAC University, Dhaka, Bangladesh [2020 - 2024]</span>
                            </li>
                            <li className="flex space-x-2 rtl:space-x-reverse items-center">
                                <svg
                                    className="shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="leading-tight">Higher Secondary Certificate(HSC) at Scholarshome Majortila College, Sylhet [2017 - 2019]</span>
                            </li>
                            <li className="flex space-x-2 rtl:space-x-reverse items-center">
                                <svg
                                    className="shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="leading-tight">Secondary Secondary Certificate(SSC) at Scholarshome Majortila College, Sylhet [2015 - 2017]</span>
                            </li>
                            <li className="flex space-x-2 rtl:space-x-reverse items-center">
                                <svg
                                    className="shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="leading-tight">N/A</span>
                            </li>
                        </ul>
                    </div>
                    <div
                        className="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
                        id="statistics"
                        role="tabpanel"
                        aria-labelledby="statistics-tab"
                    >
                        <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
                            <div className="flex flex-col">
                                <dt className="mb-2 text-3xl font-extrabold">73M+</dt>
                                <dd className="text-gray-500 dark:text-gray-400">Developers</dd>
                            </div>
                            <div className="flex flex-col">
                                <dt className="mb-2 text-3xl font-extrabold">100M+</dt>
                                <dd className="text-gray-500 dark:text-gray-400">
                                    Public repositories
                                </dd>
                            </div>
                            <div className="flex flex-col">
                                <dt className="mb-2 text-3xl font-extrabold">1000s</dt>
                                <dd className="text-gray-500 dark:text-gray-400">
                                    Open source projects
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </>

    )
}

export default AboutSection
