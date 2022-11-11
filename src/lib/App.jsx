import { useState } from "react";
import Modal from "./Modal";

export default function App() {
  const [modal, setModal] = useState(false);

  return (
    <div className="container">
      <div className="btn-modal" onClick={() => setModal(true)}>
        Modal
      </div>
      <Modal openModal={modal} onClose={() => setModal(false)}>
        Employee created
      </Modal>
    </div>
  );
}
