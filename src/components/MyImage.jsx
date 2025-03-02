import MyPicture from '../assets/MyPicture.jpg';

import Linkedin from './Linkedin';
import TimeLines from './TimeLines';


const MyImage = () => {
    return (
        <div className='flex flex-col h-min mx-10 my-10'>
            <div className="p-2">
                <img className="rounded-4xl p-2 w-80 h-100 drop-shadow-lg" src={MyPicture} alt="My picture will be added here" />
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
