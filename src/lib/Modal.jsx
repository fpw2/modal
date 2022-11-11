import close from "../assets/close.png"

export default function Modal({ openModal, onClose, children }) {
  if (!openModal) {
    return null;
  } 

  window.addEventListener("keydown", (e) => {
    if(e.key === "Escape" || e.key === "Esc") {
      openModal = false
    }
  })

  return (<>
    <div onClick={onClose} className={`modal-container ${openModal ? "active" : ""}` }>
      <div onClick={(e) => {e.stopPropagation()}} className="modal-background">
        <div className="modal-txt">
          <p>{children}</p>
          <svg className="modal-svg"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            preserveAspectRatio="none"
            >
            <rect
              x="0"
              y="0"
              fill="none"
              rx="3"
              ry="3"
            ></rect>
          </svg>
        </div>
      </div>
    <img onClick={onClose} className="close-button" src={close} alt="button close" />
    </div>
  </>);
}

