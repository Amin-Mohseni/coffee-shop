"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { MdFavoriteBorder } from "react-icons/md";
import { LiaRandomSolid } from "react-icons/lia";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

function Navbar(props: { isLogin: any }) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleMenuHandler = () => {
    setToggleMenu(!toggleMenu);
  };
  console.log(toggleMenu);

  const [fixNavbar, setFixNavbar] = useState(false);

  useEffect(() => {
    const fixNavbarToTop = () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > 105) {
        setFixNavbar(true);
      } else {
        setFixNavbar(false);
      }
    };
    window.addEventListener("scroll", fixNavbarToTop);

    return () => window.removeEventListener("scroll", fixNavbarToTop);
  }, []);

  return (
    <>
      <div
        onClick={() => setToggleMenu(false)}
        className={`w-screen h-screen bg-black/70 z-[50] duration-300 ${
          toggleMenu ? "fixed" : "hidden"
        }`}
      ></div>
      <div className="z-[99999]">
        <div
          className={`fixed top-0 z-50 transition-all ease-out ${
            toggleMenu ? "left-0 opacity-100" : "left-[-250px] opacity-0"
          }`}
        >
          <ul className="flex flex-col bg-white h-screen shadow w-72 duration-700">
            <div className="shadow-md flex justify-between items-center">
              <input
                type="text"
                className="w-full input-lg outline-none"
                placeholder="جستجوی محصولات"
              />
              <span>
                <CiSearch size={25} className="cursor-pointer ml-2" />
              </span>
            </div>
            <Link
              className="rounded-none active:bg-gray-200 transition-all"
              href={"/"}
            >
              <li className="p-5 border-b">صفحه اصلی</li>
            </Link>
            <Link
              className="rounded-none active:bg-gray-200 transition-all"
              href={"/"}
            >
              <li className="p-5 border-b">فروشگاه</li>
            </Link>
            <Link
              className="rounded-none active:bg-gray-200 transition-all"
              href={"/"}
            >
              <li className="p-5 border-b">وبلاگ</li>
            </Link>
            <Link
              className="rounded-none active:bg-gray-200 transition-all"
              href={"/"}
            >
              <li className="p-5 border-b">تماس با ما</li>
            </Link>
            <Link
              className="rounded-none active:bg-gray-200 transition-all"
              href={"/"}
            >
              <li className="p-5 border-b">درباره ما</li>
            </Link>
            <Link
              className="rounded-none active:bg-gray-200 transition-all"
              href={"/"}
            >
              <li className="p-5 border-b">قوانین</li>
            </Link>
            <Link
              className="rounded-none active:bg-gray-200 transition-all"
              href={"/"}
            >
              <li className="p-5 border-b">لیست علاقه‌مندی‌ها</li>
            </Link>
            {!props.isLogin ? (
              <Link
                className="rounded-none active:bg-gray-200 transition-all"
                href={"/login-register"}
              >
                <li className="p-5 border-b">ورود / عضویت</li>
              </Link>
            ) : (
              <Link
                className="rounded-none active:bg-gray-200 transition-all"
                href={"/"}
              >
                <li className="p-5 border-b">حساب کاربری</li>
              </Link>
            )}
          </ul>
        </div>
      </div>
      <div className="absolute w-full z-50 hidden md:flex">
        <div>
          <nav
            className={`shadow navbar px-6 bg-white fixed z-50 hidden md:flex transition-all ${
              fixNavbar ? "translate-y-0" : "-translate-y-32"
            }`}
          >
            <div className="container m-auto duration-500">
              <div className="navbar-start lg:w-2/3 hidden lg:flex ml-3">
                <Link href={"/"}>
                  <img src="/images/logonew.png" alt="logo" />
                </Link>
              </div>
              <div className="navbar-center lg:w-[70%] w-full text-nowrap text-[14px]">
                <ul className="flex items-center justify-between w-full font-bold">
                  <li>
                    <Link href={"/"}>صفحه اصلی</Link>
                  </li>
                  <div className="dropdown dropdown-hover">
                    <Link
                      className="flex items-center justify-center"
                      href={"/category"}
                    >
                      فروشگاه{" "}
                      <span className="text-xs text-gray-400">
                        <IoIosArrowDown />
                      </span>
                    </Link>
                    <div className="dropdown-content rounded-lg w-40 bg-white font-normal shadow">
                      <ul className="menu">
                        <li>
                          <Link className="p-3 hover:bg-gray-100" href={"/"}>
                            1
                          </Link>
                        </li>
                        <li>
                          <Link className="p-3 hover:bg-gray-100" href={"/"}>
                            1
                          </Link>
                        </li>
                        <li>
                          <Link className="p-3 hover:bg-gray-100" href={"/"}>
                            1
                          </Link>
                        </li>
                        <li>
                          <Link className="p-3 hover:bg-gray-100" href={"/"}>
                            1
                          </Link>
                        </li>
                        <li>
                          <Link className="p-3 hover:bg-gray-100" href={"/"}>
                            1
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <li>
                    <Link href={"/blog"}>وبلاگ</Link>
                  </li>
                  <li>
                    <Link href={"/contact-us"}>تماس با ما</Link>
                  </li>
                  <li>
                    <Link href={"/about-us"}>درباره ما</Link>
                  </li>
                  <li>
                    <Link href={"/rules"}>قوانین</Link>
                  </li>
                  {!props.isLogin ? (
                    <li>
                      <Link href={"/login-register"}>ورود / عضویت</Link>
                    </li>
                  ) : (
                    <div className="dropdown dropdown-hover">
                      <Link className="flex items-center" href={"/p-user"}>
                        حساب کاربری{" "}
                        <span className="text-xs text-gray-400">
                          <IoIosArrowDown />
                        </span>
                      </Link>
                      <div className="dropdown-content rounded-lg shadow w-52 bg-white font-normal">
                        <ul className="menu w-full">
                          <li>
                            <Link
                              className="p-3 hover:bg-gray-100"
                              href={"/p-user/orders"}
                            >
                              سفارشات
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="p-3 hover:bg-gray-100"
                              href={"/p-user/tickets"}
                            >
                              تیکت های پشتیبانی
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="p-3 hover:bg-gray-100"
                              href={"/p-user/comments"}
                            >
                              کامنت‌ها
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="p-3 hover:bg-gray-100"
                              href={"/p-user/wishlist"}
                            >
                              علاقه‌مندی‌ها
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="p-3 hover:bg-gray-100"
                              href={"/p-user/account-details"}
                            >
                              جزئیات اکانت
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </ul>
              </div>
              <div className="navbar-end w-2/4 hidden lg:flex">
                <ul className="flex items-center justify-between gap-4 text-xl">
                  <li className="relative">
                    <MdFavoriteBorder />
                    <div className="badge badge-xs absolute top-[-8px] right-3 w-4 h-4">
                      ۰
                    </div>
                  </li>
                  <li className="relative">
                    <LiaRandomSolid />
                    <div className="badge badge-xs absolute top-[-8px] right-3 w-4 h-4">
                      ۰
                    </div>
                  </li>
                  <li className="relative">
                    <FiShoppingCart />
                    <div className="badge badge-xs absolute top-[-8px] right-3 w-4 h-4">
                      ۰
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <nav className="container m-auto shadow h-20 navbar px-6 bg-white rounded-xl mt-5">
          <div className="navbar-start lg:w-2/3 hidden lg:flex ml-3">
            <Link href={"/"}>
              <img src="/images/logonew.png" alt="logo" />
            </Link>
          </div>
          <div className="navbar-center lg:w-[70%] w-full text-nowrap text-[14px]">
            <ul className="flex items-center justify-between w-full font-bold">
              <li>
                <Link href={"/"}>صفحه اصلی</Link>
              </li>
              <div className="dropdown dropdown-hover">
                <Link
                  className="flex items-center justify-center"
                  href={"/category"}
                >
                  فروشگاه{" "}
                  <span className="text-xs text-gray-400">
                    <IoIosArrowDown />
                  </span>
                </Link>
                <div className="dropdown-content rounded-lg w-40 bg-white font-normal shadow">
                  <ul className="menu">
                    <li>
                      <Link className="p-3 hover:bg-gray-100" href={"/"}>
                        1
                      </Link>
                    </li>
                    <li>
                      <Link className="p-3 hover:bg-gray-100" href={"/"}>
                        1
                      </Link>
                    </li>
                    <li>
                      <Link className="p-3 hover:bg-gray-100" href={"/"}>
                        1
                      </Link>
                    </li>
                    <li>
                      <Link className="p-3 hover:bg-gray-100" href={"/"}>
                        1
                      </Link>
                    </li>
                    <li>
                      <Link className="p-3 hover:bg-gray-100" href={"/"}>
                        1
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <li>
                <Link href={"/blog"}>وبلاگ</Link>
              </li>
              <li>
                <Link href={"/contact-us"}>تماس با ما</Link>
              </li>
              <li className="dropdown dropdown-hover">
                <Link
                  className="flex items-center justify-center"
                  href={"/about-us"}
                >
                  درباره ما
                  <span className="text-xs text-gray-400">
                    <IoIosArrowDown />
                  </span>
                </Link>
                <div className="dropdown-content bg-white w-56 shadow">
                  <ul className="text-gray-500 font-normal py-3">
                    <Link href={"/"}>
                      <li className="p-3 hover:bg-gray-100">شرایط و قوانین</li>
                    </Link>

                    <Link className="" href={"/"}>
                      <li className="p-3 w-full hover:bg-gray-100">
                        ثبت شکایات
                      </li>
                    </Link>
                  </ul>
                </div>
              </li>
              <li>
                <Link href={"/rules"}>قوانین</Link>
              </li>
              {!props.isLogin ? (
                <li>
                  <Link href={"/login-register"}>ورود / عضویت</Link>
                </li>
              ) : (
                <div className="dropdown dropdown-hover">
                  <Link className="flex items-center" href={"/p-user"}>
                    حساب کاربری{" "}
                    <span className="text-xs text-gray-400">
                      <IoIosArrowDown />
                    </span>
                  </Link>
                  <div className="dropdown-content rounded-lg shadow w-52 bg-white font-normal">
                    <ul className="menu w-full">
                      <li>
                        <Link
                          className="p-3 hover:bg-gray-100"
                          href={"/p-user/orders"}
                        >
                          سفارشات
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="p-3 hover:bg-gray-100"
                          href={"/p-user/tickets"}
                        >
                          تیکت های پشتیبانی
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="p-3 hover:bg-gray-100"
                          href={"/p-user/comments"}
                        >
                          کامنت‌ها
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="p-3 hover:bg-gray-100"
                          href={"/p-user/wishlist"}
                        >
                          علاقه‌مندی‌ها
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="p-3 hover:bg-gray-100"
                          href={"/p-user/account-details"}
                        >
                          جزئیات اکانت
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </ul>
          </div>
          <div className="navbar-end w-2/4 hidden lg:flex">
            <ul className="flex items-center justify-between gap-4 text-xl">
              <li className="relative">
                <MdFavoriteBorder />
                <div className="badge badge-xs absolute top-[-8px] right-3 w-4 h-4">
                  ۰
                </div>
              </li>
              <li className="relative">
                <LiaRandomSolid />
                <div className="badge badge-xs absolute top-[-8px] right-3 w-4 h-4">
                  ۰
                </div>
              </li>
              <li className="relative">
                <FiShoppingCart />
                <div className="badge badge-xs absolute top-[-8px] right-3 w-4 h-4">
                  ۰
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="w-full md:hidden fixed z-40 bg-white">
        <div className="navbar">
          <div className="navbar-start">
            <label className="btn btn-circle bg-transparent outline-none hover:bg-transparent border-none shadow-none swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                checked={toggleMenu}
                readOnly
                onClick={toggleMenuHandler}
              />
              {/* hamburger icon */}
              <svg
                className="swap-off fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>

              {/* close icon */}
              <svg
                className="swap-on fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </label>
          </div>
          <div className="navbar-center">
            <Link href={"/"}>
              <img src="/images/logonew.png" alt="logo" />
            </Link>
          </div>
          <div className="navbar-end"></div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
