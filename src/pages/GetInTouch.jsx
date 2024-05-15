const GetInTouch = () => {
    return (
        <div data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"    
        data-aos-easing="ease-in-out"    
        data-aos-once="false">
            <div className="container lg:my-20 px-4 my-8 mx-auto">
                    <div
                        className="flex flex-col justify-center text-center items-center border-dashed border-b-2 border-t-2 border-[#13131833]">
                        <h1 className="mt-8 text-3xl lg:text-3xl font-bold">Get In Touch</h1>
                        <p className="my-8 font-medium max-w-[610px]">We encourage you to get in touch with
                            us!
                            Your questions, feedback, and inquiries are invaluable to us. Whether you are seeking
                            information, exploring opportunities, or have specific needs, our team is ready to assist
                            you.
                        </p>
                    </div>

                    
                    <div className="flex flex-col lg:flex-row mt-10">
                        
                        <div className="lg:w-[50%] p-6 border-[1px] rounded-2xl">
                            
                            <div className="bg-[#BCED6D1A] rounded-2xl mb-6">
                                <img src="/images/Group 1171275317.png" alt="" className="pt-8 pl-8"/>
                                <p className="mt-6 ml-8">Phone Number : </p>
                                <p className="text-black-color text-[18px] font-extrabold mt-3 ml-8 pb-12">(+880) 123-321-543
                                </p>
                            </div>
                            
                            <div className="bg-[#FDDD5F1A] rounded-2xl mb-6">
                                <img src="/images/Group 1171275318.png" alt="" className="pt-8 pl-8"/>
                                <p className="mt-6 ml-8">Email : </p>
                                <p className="text-black-color text-[18px] font-extrabold mt-3 ml-8 pb-12">
                                support@volunteervoyage.com
                                </p>
                            </div>
                           
                            <div className="bg-[#629CF31A] rounded-2xl mb-6">
                                <img src="/images/Group 1171275321.png" alt="" className="pt-8 pl-8"/>
                                <p className="mt-6 ml-8">Location : </p>
                                <p className="text-black-color text-[18px] font-extrabold mt-3 ml-8 pb-12">Uttara, Dhaka 1230</p>
                            </div>
                        </div>                      

                        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-6 lg:ml-6 mt-6 lg:mt-0">
                            <div className="flex flex-col space-y-4">
                                <p className="text-black-color text-xl font-bold">Your Name</p>
                                <input className="bg-[#13131808] p-4 rounded-xl outline-none" type="text"
                                    placeholder="Enter your full name" />
                            </div>
                            <div className="flex flex-col space-y-4">
                                <p className="text-black-color text-xl font-bold">Your Email</p>
                                <input className="bg-[#13131808] p-4 rounded-xl outline-none" type="text"
                                    placeholder="Enter your email" />
                            </div>
                            <div className="flex flex-col space-y-4">
                                <p className="text-black-color text-xl font-bold">Subject</p>
                                <input className="bg-[#13131808] p-4 rounded-xl outline-none" type="text"
                                    placeholder="Enter your subject" />
                            </div>
                            <div className="flex flex-col space-y-4">
                                <p className="text-black-color text-xl font-bold">Phone Number</p>
                                <input className="bg-[#13131808] p-4 rounded-xl outline-none" type="text"
                                    placeholder="Enter your phone number" />
                            </div>
                            <div className="flex flex-col lg:col-span-2 space-y-4">
                                <p className="text-black-color text-xl font-bold">Message</p>
                                <textarea className="bg-[#13131808] p-4 rounded-xl outline-none resize-none"
                                    placeholder="Write your message" rows="10"></textarea>
                            </div>
                            <button
                                className="lg:col-span-2 btn bg-red-400 text-white text-[1.125rem] lg:text-[1.25rem] font-bold border-orange-col">
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>            
        </div>
    );
};

export default GetInTouch;