import { useEffect } from "react";

const ContactUs = () => {
  useEffect(() => {
    return () => {
      console.log("unmount");
    };
  }, []);
  return (
    <div className="flex justify-center pb-4 fixed w-full top-[88px] bg-white left-0 z-10">
      <h4>
        Get In <b>Touch</b>
      </h4>
      <h2>Head Office</h2>
      <p>
        <b>Bundl Technologies Pvt. Ltd.</b> <br />
        No. 55 Sy No 8 to 14 I & J Block - Ground Floor, Embassy Tech Village |
        Outer Ring Road, Devarbisanahalli, Varthur Bengaluru - 560130
      </p>
    </div>
  );
};

export default ContactUs;
