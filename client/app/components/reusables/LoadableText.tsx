import { ILoadableText } from "../../utils/templates/ILoadableText";
import Spinner from "./Spinner";


const LoadableText = ({loading,className,children }:ILoadableText) => {
    if (loading) {
        return (
            <div className="flex mx-5">
                <Spinner className={ className } />
            </div>
        )
    }
    else {
        return (
            <span className=" lg:text-lg md:text-md text-sm">
                {children}
            </span>
        )
    }
}

export default LoadableText;