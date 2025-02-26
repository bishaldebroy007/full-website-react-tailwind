import dummyImage from '../assets/dummyImage.jpg';
import TimeLines from './TimeLines';

const MyImage = () => {
    return (
        <div className='flex flex-col h-min mx-10 my-15'>
            <div className="p-2">
                <img className="rounded-4xl p-2 w-70 h-70" src={dummyImage} alt="My picture will be added here" />
            </div>
            <div className="mt-4"> {/* Added margin-top for spacing */}
                <TimeLines />
            </div>
        </div>
    );
}

export default MyImage;
