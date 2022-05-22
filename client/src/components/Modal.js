import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ isOpen, setIsOpen, classes, children }) => {
    return ReactDOM.createPortal(
        <>
            {isOpen && (
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="top-0 right-0 bottom-0 left-0 fixed bg-dark bg-opacity-95 flex justify-center items-center z-50"
                >
                    <div
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                        className={`bg-white px-3 p-5 md:p-11 min-w-[300px] min-h-[150px] rounded-md md:rounded-lg lg:rounded-xl relative ${classes}`}
                    >
                        {children}
                    </div>
                </div>
            )}
        </>,
        document.querySelector("#portal")
    );
};

export default Modal;
