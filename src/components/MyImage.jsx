import dummyImage from '../assets/dummyImage.jpg';


const MyImage = () => {
    return (
        <div className="m-10 p-2">
            <img className="rounded-4xl p-2 w-72 h-72" src={dummyImage} alt="My picture will be added here" />
        </div>
    );
}

export default MyImage;
