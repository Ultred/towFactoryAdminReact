import { Outlet } from "react-router-dom";
import { ModalStoreState } from "../context/ModalStoreState";
import ModalMain from "../components/ModalMain";
import Map from "../page/Map";

const TrackDriverLayout = () => {
  const { isOpen, modalComponent } = ModalStoreState();

  return (
    <>
      {isOpen && <ModalMain>{modalComponent}</ModalMain>}

      <div className="grid-cols-2 grid">
        <div>
          <Outlet />
        </div>
        <div className="h-screen">
          <Map />
        </div>
      </div>
    </>
  );
};

export default TrackDriverLayout;
