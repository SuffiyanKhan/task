import { useGlobalState } from "../../Context_Api/Context";
import { BackButton } from "../../services/backbutton"
import Step from "../Step/Step"

function Navbar() {
    const { setProgressWidth } = useGlobalState(); 

    const increaseProgress = () => {
        setProgressWidth(prevWidth => {
            if (prevWidth >= 100) {
                return 33.33;
            }
            return Math.min(prevWidth - 33.3333, 100);
        });
        BackButton()
    };
    return (
        <>
            <nav className="border-bottom py-1 px-5 bg-white">
                <div className="d-flex justify-content-between ">
                    <button className="btn d-flex align-items-center fw-semibold" style={{ border: "none" }} onClick={()=>{increaseProgress()}}><span className="me-3 " style={{fontSize:"16px"}}><i className="fa-solid fa-arrow-left"></i></span>Go Back</button>
                    <button className="btn d-flex align-items-center fw-semibold" style={{ border: "none" }}>Exit<span className="ms-3 " style={{fontSize:"16px"}}><i className="fa-solid fa-xmark"></i></span></button>
                </div>
            </nav>
            {/* #019F44 */}
            <Step/>
        </>
    )
}

export default Navbar