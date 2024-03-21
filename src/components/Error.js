import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return (
        <div className="error">
            <h1>Error</h1>
            <h3>{err?.data}</h3>
            <h4>Status : {err?.status}</h4>
            <h4>Message : {err?.statusText}</h4>
        </div>
    )
}

export default Error;