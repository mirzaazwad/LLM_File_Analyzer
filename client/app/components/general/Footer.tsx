import { roboto } from "../../themes/fonts";

const Footer = () => {
  return (
    <div className={`static w-full flex md:text-lg sm:text-md text-sm justify-center items-center static bottom-0 text-gray-800 px-8 py-6 ${roboto.className}`}>
      Copyright &copy; Mirza Mohammad Azwad 2024
    </div>
  );
};

export default Footer;
