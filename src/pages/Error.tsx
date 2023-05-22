import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/layout/MainNavigation";
import PageContent from "../components/interiors/PageContent";

const ErrorPage = () => {
  const error: any = useRouteError();
  console.log(error)

  let title = "An error occured!";
  let message = "Something went wrong.";

  if (error.status === 500) {
    message = error.message;
  }

  if (error.status === 404) {
    title = "Not Found!";
    message = "Could not find resource or page.";
  }

  if(error.status === 402) {
    title= "Unautorized";
    message=  "Authorization is failed."
  }

  return (
    <>
      <MainNavigation />
      <main>
        <PageContent title={title}>
          <p>{message}</p>
        </PageContent>
      </main>
    </>
  );
};

export default ErrorPage;
