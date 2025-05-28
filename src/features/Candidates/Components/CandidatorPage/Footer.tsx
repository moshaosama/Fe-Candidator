import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { TbCircleLetterMFilled } from "react-icons/tb";

export const Footer = () => {
  return (
    <>
      <div className="mx-44 rounded-xl py-2 bg-neutral-800 text-white mt-10">
        <div className="flex justify-center ite flex-col">
          <div className="flex justify-center">
            <h1 className="flex items-center gap-2 text-xl">
              Powered by <TbCircleLetterMFilled size={40} />
              Mploya
            </h1>
          </div>
          <div className="mx-40 mt-16 flex justify-between items-center">
            <div className="flex flex-col gap-3">
              <h1>Mploya Careers</h1>
              <h1>US Only: Review Accommodations for Disability</h1>
              <h1>Contact Us</h1>
              <h1>FAQS</h1>
            </div>
            <div className="flex gap-5">
              <FaXTwitter size={34} color="pink" cursor={"pointer"} />
              <FaLinkedinIn size={34} color="pink" cursor={"pointer"} />
              <FaFacebook size={34} color="pink" cursor={"pointer"} />
              <FaInstagram size={34} color="pink" cursor={"pointer"} />
            </div>
          </div>
          <div className="mx-40 mt-5 flex justify-between items-center">
            <div>
              <h1>© Mploya AG, 2025 – 2025</h1>
            </div>
            <div className="flex gap-4 items-center">
              <h1>Terms</h1>
              <h1>Digital ID</h1>
              <h1>Privacy Notice</h1>
              <h1>Privacy Policy</h1>
              <h1>Cookie Policy</h1>
              <h1>Whistleblowing</h1>
            </div>
          </div>
          <div className="mx-40 mt-5">
            <p>
              Important note: For all job applicants looking to join us, please
              note Siemens does not ask for fees prior/during/after the
              application process. We do not ask for banking details or personal
              financial information in return for the assurance of employment.
              Similarly, please do not open documents in e-mails that appear to
              be sent by a Siemens recruiter unless you are sure you are being
              contacted by one of our professionals for an active application
              process.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
