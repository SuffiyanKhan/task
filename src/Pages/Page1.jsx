import Buttons from "../Component/Buttons/Buttons"

function Page1() {
  return (
    <>
        <div className="container mt-2">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="py-4 col-lg-5 col-md-5" >
                    <div className="">
                        <h3 className="text-center fw-semibold ">
                        Step # 1
                        </h3>
                        <h3 className="text-center fw-semibold mt-5">
                        What is your monthly digital marketing budget?
                        </h3>
                    </div>
                    <Buttons/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Page1