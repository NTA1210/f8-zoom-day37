import classNames from "classnames/bind";
import { Outlet } from "react-router";

//scss
import styles from "./DefaultLayout.module.scss";

// Comp
import Header from "./components/Header";

const cx = classNames.bind(styles);

function DefaultLayout() {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>{<Outlet />}</div>
    </div>
  );
}

export default DefaultLayout;
