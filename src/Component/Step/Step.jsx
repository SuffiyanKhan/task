import { useGlobalState } from '../../Context_Api/Context';
import './styles.css';  

function Step() {
    const { progressWidth } = useGlobalState(); 

    

    return (
        <>
            <div
                className="progress "
                role="progressbar"
                aria-valuenow={progressWidth}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ height: "7px" }}
            >
                <div className="progress-bar custom-progress-bar" style={{ width: `${progressWidth}%` }} />
            </div>
            {/* <button >Increase Progress</button> */}
        </>
    );
}

export default Step;
