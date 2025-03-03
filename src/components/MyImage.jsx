import MyPicture from '../assets/MyPicture.jpg';

import Linkedin from './Linkedin';
import TimeLines from './TimeLines';

const MyImage = () => {
    return (
        <div className='flex flex-col mx-4 my-4 md:mx-10 md:my-10 order-1'>
            <div className="p-2">
                <img className="rounded-4xl p-2 w-full h-auto max-w-xs sm:max-w-sm md:max-w-md md:items-center drop-shadow-lg" src={MyPicture} alt="My picture will be added here" />
            </div>
            <div className="mt-4">
                <Linkedin />
                {/* Added margin-top for spacing */}
                <TimeLines />
            </div>
        </div>
    );
}

export default MyImage;
