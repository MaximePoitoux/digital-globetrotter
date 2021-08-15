import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const SnackbarCustom = ({ isFavorite, city, openAlert, handleCloseAlert }) => {
  return (
    <>
      {isFavorite ? (
        <Snackbar
          open={openAlert}
          autoHideDuration={3000}
          onClose={handleCloseAlert}
        >
          <Alert onClose={handleCloseAlert} severity="success">
            {city} has been added to your favorites !
          </Alert>
        </Snackbar>
      ) : (
        <Snackbar
          open={openAlert}
          autoHideDuration={3000}
          onClose={handleCloseAlert}
        >
          <Alert onClose={handleCloseAlert} severity="error">
            {city} was removed from your favorites
          </Alert>
        </Snackbar>
      )}
    </>
  );
};

export default SnackbarCustom;
