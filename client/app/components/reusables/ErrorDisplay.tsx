import { Message } from "rsuite";
import { IErrorDisplay } from "../../utils/templates/IErrorDisplay";

const ErrorDisplay = ({isError,error}:IErrorDisplay) => {

    if(!isError){
        return (
            <>
            </>
        )
    }

    return (  
        <Message type="error">
            {error}
        </Message>
    );
}
 
export default ErrorDisplay;