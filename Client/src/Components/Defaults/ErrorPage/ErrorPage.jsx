const ErrorPage = () => {
  return (
    <>
      <div className="error-div flex flex-col justify-center items-center">
        <p className="uppercase text-2xl">Oops! Page Not Found</p>
        <h1 className="text-[300px] leading-[.8] font-bold flex gap-0">
          <span className="start">4</span>
          <span className="middle">0</span>
          <span className="end">4</span>
        </h1>
        <p className="uppercase text-2xl max-w-[45ch] text-center">
          We Are Sorry, But The Page You Requested Was Not Found
        </p>
      </div>
    </>
  );
};

export default ErrorPage;
