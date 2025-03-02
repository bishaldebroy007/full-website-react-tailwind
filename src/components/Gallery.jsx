
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
            <div id="gallery" className="relative w-auto mt-8 mb-20 mx-10 items-center" data-carousel="slide">
                {/* Carousel wrapper */}
                <div className="relative h-56 overflow-hidden md:h-96">
                    {/* Item 1 */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item="">
                        <img
                            src="https://img.freepik.com/free-photo/sunset-night-landscape-wallpaper_1409-5511.jpg?t=st=1740573037~exp=1740576637~hmac=52e0cca72b9548e7851a913c9958d49636f6b2c1bda642357662480dd165bb5e&w=1380"
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
                            src="https://img.freepik.com/free-photo/men-women-embrace-sunset-generative-ai_188544-12581.jpg?t=st=1740572841~exp=1740576441~hmac=e833ae6c9012289e4c0078eca646b279c8cb5f86ea7e2db2cbc8236d321608d7&w=1380"
                            className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt=""
                        />
                    </div>
                    {/* Item 3 */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item="">
                        <img
                            src="https://img.freepik.com/free-photo/concept-art-sunset-city_1409-7216.jpg?t=st=1740572905~exp=1740576505~hmac=a2a8ad1cde18f2d9b4260b2a650e56e179f05538c4c764654bf711537400758b&w=1060"
                            className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt=""
                        />
                    </div>
                    {/* Item 4 */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item="">
                        <img
                            src="https://img.freepik.com/free-photo/nature-mystery-portrayed-tranquil-forest-scene-generative-ai_188544-9755.jpg?t=st=1740573126~exp=1740576726~hmac=82a718a5c7406b1cdc36c4515a7e3d14b095f4a85e6548d00d0a73e7b5da4c57&w=1380"
                            className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt=""
                        />
                    </div>
                    {/* Item 5 */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item="">
                        <img
                            src="https://img.freepik.com/free-photo/bright-pop-landscape-design_23-2149213461.jpg?t=st=1740572989~exp=1740576589~hmac=bec2a8a34fc47bb2b3e4995a3c0c80fe866e742b4aebcf8e03f76f51bcf58ad6&w=1060"
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
