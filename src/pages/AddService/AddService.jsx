import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet";


const AddService = () => {
    const { user } = useAuth();




    const handleAdd = (e) => {
        e.preventDefault();
        const form = e.target;
        const serviceName = form.serviceName.value;
        const serviceImage = form.serviceImage.value;
        const servicePrice = form.servicePrice.value;
        const serviceArea = form.serviceArea.value;
        const description = form.description.value;


        const providerName = form.providerName.value;
        const providerEmail = form.providerEmail.value;
        const providerPhoto = form.providerPhoto.value;


        const service = { serviceName, serviceImage, servicePrice, serviceArea, description, providerName, providerEmail, providerPhoto }
        // console.log(service);


        // post
        fetch('https://doctor-consulta-server.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'added service successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    form.reset();

                }
            })

    }
    return (
        <div className="lg:mt-0  lg:p-14 md:p-14 p-6 bg-[linear-gradient(45deg,rgba(0,0,0,0.2),rgba(0,0,0,0.3)),url(https://i.ibb.co/p48PxQv/heal.jpg)] bg-center bg-cover object-cover object-center ">

            <Helmet>
                <title>Add Service</title>
            </Helmet>



            <div className="max-w-4xl mx-auto  bg-base-100 rounded-xl shadow-xl ">


                <form onSubmit={handleAdd} className="card-body" >
                    <h1 className="text-4xl font-bold text-cyan-500">Add New Service</h1>

                    <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 ">

                        {/* left side form */}
                        <div>
                            {/* 1 */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text lg:text-lg text-base font-semibold text">Service Name</span>
                                </label>
                                <input type="text" name="serviceName" placeholder="Service Name" className="input input-bordered" required />
                            </div>
                            {/* 2 */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text lg:text-lg text-base font-semibold">Service Price</span>
                                </label>
                                <input type="text" name="servicePrice" placeholder="Service Price" className="input input-bordered" required />
                            </div>


                        </div>


                        {/* right side  */}
                        <div>


                            {/* 1 */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text lg:text-lg text-base font-semibold">Service Image</span>
                                </label>
                                <input type="text" name="serviceImage" placeholder="Image Url" className="input input-bordered" required />
                            </div>
                            {/* 2*/}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text lg:text-lg text-base font-semibold">Service Area</span>
                                </label>
                                <input type="text" name="serviceArea" placeholder="Service Area" className="input input-bordered" required />
                            </div>



                        </div>



                    </div>
                    <div className="form-control">

                        <label className="label">
                            <span className="label-text lg:text-lg text-base font-semibold">Service Description</span>
                        </label>

                        <textarea name="description" placeholder="Service Description" className="textarea textarea-bordered textarea-sm w-full d" required >
                        </textarea>




                    </div>

                    {/* service provider info */}
                    <div className="form-control">

                        <label className="label">
                            <span className="label-text lg:text-lg text-base font-semibold">Provider Name</span>
                        </label>

                        <input type="text" defaultValue={user?.displayName} name="providerName" placeholder="Provider Name" className="input input-bordered" required />


                    </div>
                    <div className="form-control">

                        <label className="label">
                            <span className="label-text lg:text-lg text-base font-semibold">Provider Email</span>
                        </label>

                        <input type="text" defaultValue={user?.email} name="providerEmail" placeholder="Provider Email" className="input input-bordered" required />


                    </div>
                    <div className="form-control">

                        <label className="label">
                            <span className="label-text lg:text-lg text-base font-semibold">Provider Photo</span>
                        </label>

                        <input type="text" defaultValue={user?.photoURL} name="providerPhoto" placeholder="Photo Url" className="input input-bordered" required />

                    </div>



                    <div className="form-control mt-6">
                        <input type="submit" value="Add Service" className="btn text-xl text-white outline-non bg-cyan-500" />
                    </div>


                </form>


            </div>

        </div>
    );
};

export default AddService;