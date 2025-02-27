import MyPicture from '../assets/MyPicture.jpg';

const Linkedin = () => {
    return (
        <div>
            <div>
                <button
                    data-popover-target="popover-user-profile"
                    type="button"
                    className="text-white bg-blue-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800 mx-27 shadow-md cursor-progress"
                >
                    LinkedIn
                </button>
                <div
                    data-popover=""
                    id="popover-user-profile"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-xs opacity-0 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600"
                >
                    <div className="p-3">
                        <div className="flex items-center justify-between mb-2">
                            <a href="https://www.linkedin.com/in/bishal-deb-roy-0b31241a0/">
                                <img
                                    className="w-10 h-10 rounded-full"
                                    src={MyPicture}
                                    alt="Bishal Deb Roy"
                                />
                            </a>
                            <div>
                                <button
                                    type="button"
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                >
                                    <a href="https://www.linkedin.com/in/bishal-deb-roy-0b31241a0/">Connect</a>
                                </button>
                            </div>
                        </div>
                        <p className="text-base font-semibold leading-none text-gray-900 dark:text-white">
                            <a href="#">Bishal Deb Roy</a>
                        </p>
                        <p className="mb-3 text-sm font-normal">
                            <a href="https://www.linkedin.com/in/bishal-deb-roy-0b31241a0/" className="hover:underline">
                                @bishal-deb-roy-0b31241a0
                            </a>
                        </p>
                        <p className="mb-4 text-sm">
                            Aspiring Web Developer | Focused on Python & JavaScript{" "}
                            {/* <a
                                href="https://www.pentabd.com/"
                                className="text-blue-600 dark:text-blue-500 hover:underline"
                            >
                                Penta Globals LTD
                            </a> */}
                            .
                        </p>
                        <ul className="flex text-sm">
                            <li className="me-2 items-center">
                                <a href="#" className="hover:underline">
                                    <span className="font-semibold text-gray-900 dark:text-white">
                                        382+
                                    </span>
                                    <span> Connections</span>
                                </a>
                            </li>
                            {/* <li>
                                <a href="#" className="hover:underline">
                                    <span className="font-semibold text-gray-900 dark:text-white">
                                        3,758
                                    </span>
                                    <span>Followers</span>
                                </a>
                            </li> */}
                        </ul>
                    </div>
                    <div data-popper-arrow="" />
                </div>
            </div>
        </div>
    )
}

export default Linkedin
