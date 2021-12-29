/* eslint-disable react/no-unescaped-entities */
import { useRouter } from "next/router";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems } from "../reducer/basketSlice";
import classes from "../styles/Header.module.scss";
function Header() {
  const router = useRouter();
  const items = useSelector(selectItems);
  return (
    <div>
      <div className={classes.navbar1}>
        <div className={classes.navbar1__logo} onClick={() => router.push("/")}>
          <Image
            src="https://www.mabaya.com/wp-content/uploads/2019/10/amazon_PNG25.png"
            alt="logo"
            width="100"
            height="40"
          ></Image>
        </div>
        <div className={classes.navbar1__loc}>
          <div className={classes.navbar1__loc__locIcon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <div className={classes.navbar1__loc__locDesc}>
            <p className={classes.navbar1__loc__locDesc__text1}>Deliver to</p>
            <p className={classes.navbar1__loc__locDesc__text2}>Uzbekistan</p>
          </div>
        </div>
        <div className={classes.navbar1__search}>
          <form className="container-fluid">
            <div className="input-group">
              <span className="input-group-text m-0 p-0" id="basic-addon1">
                <button
                  className="btn dropdown-toggle  text-secondary"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  All
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </span>
              <input
                type="text"
                className="form-control"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <span
                className="input-group-text bg-warning border-0"
                id="basic-addon1"
              >
                <div className={classes.navbar1__search_icon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </div>
              </span>
            </div>
          </form>
        </div>
        <div className={classes.navbar1__language}>
          <div className="dropdown">
            <button
              className="btn dropdown-toggle text-secondary"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <Image
                alt="uzb"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/1000px-Flag_of_Uzbekistan.svg.png"
                height="18"
                width="24"
              />
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={classes.navbar1__signIn}>
          <div className="dropdown">
            <button
              className="btn text-secondary"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <p className={classes.sign}>Hello, sign in</p>
              <p className={classes.list}>Account & Lists</p>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={classes.navbar1__return}>
          <p className={classes.return}>Returns</p>
          <p className={classes.orders}>& Orders</p>
        </div>
        <div
          className={classes.navbar1__basket}
          onClick={() => router.push("/checkout")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-cart2 text-light"
            viewBox="0 0 16 16"
          >
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
          </svg>
          <span className="px-1 text-warning fs-5">{items.length}</span>
          <span className="text-light fw-bold">Cart</span>
        </div>
      </div>
      <div className={classes.navbar2}>
        <div className={classes.navbar2__all}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="40"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
          All
        </div>
        <div className={classes.navbar2__sections}>
          <li>
            <a href="#">Today's Deals</a>
          </li>
          <li>
            <a href="#">Customer Service</a>
          </li>
          <li>
            <a href="#">Registry</a>
          </li>
          <li>
            <a href="#">Gift Cards</a>
          </li>
          <li>
            <a href="#">Sell</a>
          </li>
        </div>
        <div className={classes.navbar2__deals}>
          <li>
            <a href="#">Epic Daily Deals</a>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Header;
