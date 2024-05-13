import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import IconFloatLeft from "../components/IconFloatLeft";
import { ModalStoreState } from "../context/ModalStoreState";
import ModalMain from "../components/ModalMain";
const AppLayout = () => {
  const { isOpen, modalComponent } = ModalStoreState();

  return (
    <>
      {/* Modal Show Logic */}
      {isOpen && <ModalMain>{modalComponent}</ModalMain>}
      <Navbar />
      <IconFloatLeft />
      <Outlet />
    </>
  );
};

export default AppLayout;
