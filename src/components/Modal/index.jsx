import classNames from "classnames/bind";
import { useEffect } from "react";

//scss
import styles from "./Modal.module.scss";

const cx = classNames.bind(styles);

function Modal({
  children,
  isOpen = false,
  onAfterOpen = () => {},
  onAfterClose = () => {},
  onRequestClose = () => {},
  closeTimeoutMS = 0,
  overlayClassName,
  className,
  bodyOpenClassName,
  htmlOpenClassName,
  shouldCloseOnOverlayClick = true,
  shouldCloseOnEsc = true,
}) {
  const handleRequestClose = () => {
    setTimeout(() => {
      onRequestClose();
      onAfterClose();
    }, closeTimeoutMS);
  };

  useEffect(() => {
    if (!shouldCloseOnEsc) return;

    const handle = (e) => {
      if (e.code === "Escape") {
        handleRequestClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keyup", handle);
    }

    return () => {
      document.removeEventListener("keyup", handle);
    };
  }, [isOpen, shouldCloseOnEsc]);

  useEffect(() => {
    isOpen &&
      bodyOpenClassName &&
      document.body.classList.add(bodyOpenClassName);

    isOpen &&
      htmlOpenClassName &&
      document.body.classList.add(htmlOpenClassName);

    if (isOpen && onAfterOpen) {
      onAfterOpen();
    }

    return () => {
      document.body.classList.remove(bodyOpenClassName, htmlOpenClassName);
    };
  }, [bodyOpenClassName, isOpen]);

  useEffect(() => {
    const handleClick = (e) => {
      if (e.target.classList.contains(cx("overlay"))) {
        handleRequestClose();
      }
    };

    shouldCloseOnOverlayClick &&
      document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [isOpen, shouldCloseOnOverlayClick]);

  return (
    <div className={cx("wrapper")}>
      <div
        // style={{ "--transition-duration": `${closeTimeoutMS}ms` }}
        className={cx("overlay", isOpen && "open", overlayClassName)}
      >
        <div className={cx("body", className)}>
          <div className={cx("header")}>
            <p className={cx("title")}>Modal</p>
            <button className={cx("closeBtn")} onClick={handleRequestClose}>
              X
            </button>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
