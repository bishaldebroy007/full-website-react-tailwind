

import { useEffect } from 'react';

const Gallery = () => {
    useEffect(() => {
        const items = document.querySelectorAll('[data-carousel-item]');
        let currentIndex = 0;

        const showItem = (index) => {
            items.forEach((item, i) => {
                item.classList.toggle('hidden', i !== index);
                item.setAttribute('data-carousel-item', i === index ? 'active' : '');
            });
        };

        const nextItem = () => {
            currentIndex = (currentIndex + 1) % items.length;
            showItem(currentIndex);
        };

        const prevItem = () => {
            currentIndex = (currentIndex - 1 + items.length) % items.length;
            showItem(currentIndex);
        };

        document.querySelector('[data-carousel-next]').addEventListener('click', nextItem);
        document.querySelector('[data-carousel-prev]').addEventListener('click', prevItem);

        showItem(currentIndex);
    }, []);
    return (
        <>
            <div id="gallery" className="relative w-auto my-20 items-center" data-carousel="slide">
                {/* Carousel wrapper */}
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                    {/* Item 1 */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item="">
                        <img
                            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                            className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt=""
                        />
                    </div>
                    {/* Item 2 */}
                    <div
                        className="hidden duration-700 ease-in-out"
                        data-carousel-item="active"
                    >
                        <img
                            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                            className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt=""
                        />
                    </div>
                    {/* Item 3 */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item="">
                        <img
                            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                            className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt=""
                        />
                    </div>
                    {/* Item 4 */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item="">
                        <img
                            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
                            className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt=""
                        />
                    </div>
                    {/* Item 5 */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item="">
                        <img
                            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
                            className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt=""
                        />
                    </div>
                </div>
                {/* Slider controls */}
                <button
                    type="button"
                    className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-prev=""
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg
                            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
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
                                d="M5 1 1 5l4 4"
                            />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button
                    type="button"
                    className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-next=""
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg
                            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
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
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
        </>
    )
}

export default Gallery
