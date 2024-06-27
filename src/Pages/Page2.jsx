import Form from "../Component/Form/Form"

function Page2() {
    return (
        <>
            <div className="container mt-3">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="py-4 col-lg-5 col-md-5">
                        <div className="">
                            <h3 className="text-center fw-semibold ">
                                Step # 2
                            </h3>
                            <h3 className="text-center fw-semibold mt-3">
                                Details
                            </h3>
                            <p className="text-center text-secondary fw-semibold mt-3">
                                We’re thrilled at the opportunity to help you grow your business online. Please let us know the best way to reach you.
                            </p>
                        </div>
                       <Form/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page2