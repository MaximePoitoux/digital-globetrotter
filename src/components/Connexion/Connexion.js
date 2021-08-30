import ModalConnexion from "./ModalConnexion/ModalConnexion";

// Tuto => https://www.youtube.com/watch?v=PKwu15ldZ7k
// https://blog.crowdbotics.com/how-to-use-formik-and-context-api-build-crowdbotics-react-native-apps-with-firebase/

const Connexion = ({ openModal, handleCloseModal }) => {
  return (
    <ModalConnexion openModal={openModal} handleCloseModal={handleCloseModal} />
  );
};

export default Connexion;
