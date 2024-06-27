import { Link } from "react-router-dom"
import { useGlobalState } from "../../Context_Api/Context";

function Buttons() {
    const { setProgressWidth } = useGlobalState(); 

    const increaseProgress = () => {
        setProgressWidth(prevWidth => {
            if (prevWidth >= 100) {
                return 33.33;
            }
            return Math.min(prevWidth + 33.3333, 100);
        });
    };
    return (
        <>
            <div className="mt-5 w-100 ">
                <Link className="fw-semibold w-100 text-decoration-none text-secondary text-center" onClick={increaseProgress} to={'/page2'}o >
                    <div className="w-100 border rounded-3  p-3">
                        <span className="me-1">&lt;</span> $1,000/mo
                    </div>
                </Link>
                <Link className="fw-semibold w-100 text-decoration-none text-secondary text-center" onClick={increaseProgress} to={'/page2'}o >
                    <div className="w-100 border rounded-3 mt-3 p-3">
                        $1,000 - $2,000
                    </div>
                </Link>
                <Link className="fw-semibold w-100 text-decoration-none text-secondary text-center" onClick={increaseProgress} to={'/page2'}o >
                    <div className="w-100 border rounded-3 mt-3 p-3">
                        $2,000 - $5,000
                    </div>
                </Link>
                <Link className="fw-semibold w-100 text-decoration-none text-secondary text-center" onClick={increaseProgress} to={'/page2'}o >
                    <div className="w-100 border rounded-3 mt-3 p-3">
                        $5,000 - $10,000
                    </div>
                </Link>
                <Link className="fw-semibold w-100 text-decoration-none text-secondary text-center" onClick={increaseProgress} to={'/page2'}o >
                    <div className="w-100 border rounded-3 mt-3 p-3">
                        $10,000 - $25,000
                    </div>
                </Link>
                <Link className="fw-semibold w-100 text-decoration-none text-secondary text-center" onClick={increaseProgress} to={'/page2'}o >
                    <div className="w-100 border rounded-3 mt-3 p-3">
                        $25,000+
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Buttons