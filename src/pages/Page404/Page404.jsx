import { useHistory } from "react-router-dom";

import Button from "@material-ui/core/Button";

const Page404 = () => {
  let history = useHistory();
  const goToPreviousPath = () => {
    history.goBack()
  };
  return (
    <div>
      <h1>Unfortunately, there is no such page.</h1>

      <Button variant="contained" color="primary" onClick={goToPreviousPath}>
        Back
      </Button>
    </div>
  );
};

export default Page404;
