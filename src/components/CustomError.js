import { useRouteError } from "react-router-dom";

const CustomError = () => {
    const err = useRouteError();
    console.log(err);
  return (
    <div>
      <h1>oops</h1>
      <p>Something Wrong!</p>
      <p>{err.status} : {err.statusText}</p>
    </div>
  )
}

export default CustomError;


