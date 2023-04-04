import MainNavigation from "../components/layout/MainNavigation";

const ErrorPage = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <div>
          <h1>Something went wrong...</h1>
          <p>couldn't found page.</p>
        </div>
      </main>
    </>
  );
};

export default ErrorPage;
