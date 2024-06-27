import { useNavigate } from 'react-router-dom';
import success from '../assets/success.png'
import { useGlobalState } from '../Context_Api/Context';
function Page3() {
    const { setProgressWidth } = useGlobalState();
    const navigate = useNavigate()
    const increaseProgress = () => {
        setProgressWidth(33.333);
        navigate('/')
    };
    return (
        <>
            <div className="container mt-1">
                <div className="row border d-flex justify-content-center align-items-center " style={{ height: "90vh" }}>
                    <div className="py-4 col-lg-4 col-md-4">
                        <div className="d-flex justify-content-center align-items-center">
                            <img src={success} alt="" />
                        </div>
                        <div className="text-center mt-5">
                            <h3 className='mt-3'>Your Request for a Proposal Has Been Submitted!</h3>
                            <p className='mt-4'>Lorem ipsum dolor sit amet consectetur. Tincidunt ultrices dis gravida parturient urna tristique congue. Curabitur volutpat nulla convallis eget pellentesque. Luctus tellus eu ultrices egestas.</p>
                        </div>
                        <div className="m-5 d-flex justify-content-center align-items-center">
                            <button className='fw-semibold text-decoration-none text-center btn btn-success py-3 px-4' onClick={() => { increaseProgress() }}>Return Home</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page3