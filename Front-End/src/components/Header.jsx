import React from 'react'
import { Navbar, Dropdown, Avatar, Toast } from 'flowbite-react'
import { NavLink, Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <div className='bg-creme sm:bg-none'>
        <Navbar
          fluid={true}
          rounded={true}
          className={"border-b mx-auto  w-11/12 px-2 sm:bg-creme md:bg-creme lg:bg-creme  border-gray-100"}
        >
          <Navbar.Brand>
            <Link to={'/'}>
              <span className="sr-only">Logo</span>
              <span className="inline-block h-10 w-32 pl-3 rounded-lg text-2xl">Partsly</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <div className="flex flex-1 items-center justify-end">
              <label className="sr-only" htmlFor="search"> Search </label>

              <input
                className="h-10 w-full rounded-full border-none bg-white pl-4 pr-10 text-sm shadow-sm sm:w-56"
                id="search"
                type="search"
                placeholder="Search website..."
              />


              <div className="ml-8 flex items-center">
                <div className="flex items-center divide-x divide-gray-300 border-x border-gray-100">
                  <Dropdown
                    arrowIcon={false}
                    inline={true}
                    label={<span>
                      <div
                        className="block border-b-4 border-transparent p-6 hover:border-brand"
                      >
                        <svg
                          className="h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                        <span className="sr-only"> Account </span>
                      </div>
                    </span>}
                  >
                    <Dropdown.Header>
                      <span className="block text-sm">
                        Michael Scott
                      </span>
                      <span className="block truncate text-sm font-medium">
                        michaelscott@mail.com
                      </span>
                    </Dropdown.Header>
                    <Dropdown.Item>
                      <Link to={'/Profile'}>Profile</Link>

                    </Dropdown.Item>
                    <Dropdown.Item>
                      Orders
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>
                      Sign out
                    </Dropdown.Item>
                  </Dropdown>
                  <span>
                    <a
                      href="/cart"
                      className="block border-b-4 border-transparent p-6 hover:border-brand"
                    >
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        />
                      </svg>

                      <span className="sr-only">Cart</span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <NavLink
              to={'/'}
              className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-brand"
            >
              Home
            </NavLink>

            <NavLink
              to={'/Shop'}
              className={"block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-brand"
              }>
              Shop
            </NavLink>
            <NavLink
              to={'/About'}
              className={"block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-brand"
              }>
              About
            </NavLink>
            <NavLink
              to={'/Contact'}
              className={"block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-brand"
              }>
              Contact
            </NavLink>
          </Navbar.Collapse>



          {/* <div className=" flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8">


          <div className="flex flex-1 items-center justify-end">
            <label className="sr-only" for="search"> Search </label>

            <input
              className="h-10 w-full rounded-full border-none bg-white pl-4 pr-10 text-sm shadow-sm sm:w-56"
              id="search"
              type="search"
              placeholder="Search website..."
            />


            <div className="ml-8 flex items-center">
              <div
                className="flex items-center divide-x divide-gray-100 border-x border-gray-100"
              >

                <Dropdown
                  arrowIcon={false}
                  inline={true}
                  label={<span>
                    <div
                      className="block border-b-4 border-transparent p-6 hover:border-brand"
                    >
                      <svg
                        className="h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      <span className="sr-only"> Account </span>
                    </div>
                  </span>}
                >
                  <Dropdown.Header>
                    <span className="block text-sm">
                      Michael Scott
                    </span>
                    <span className="block truncate text-sm font-medium">
                      michaelscott@mail.com
                    </span>
                  </Dropdown.Header>
                  <Dropdown.Item>
                    <Link to={'/Register'}>Profile</Link>

                  </Dropdown.Item>
                  <Dropdown.Item>
                    Orders
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>
                    Sign out
                  </Dropdown.Item>
                </Dropdown>


                <span>
                  <a
                    href="/cart"
                    className="block border-b-4 border-transparent p-6 hover:border-brand"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>

                    <span className="sr-only">Cart</span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div> */}







        </Navbar>
      </div>

















      {/* <div className='container  bg-zinc-100 '>
        <Navbar
          fluid={true}
          rounded={true}
          className={'mx-auto w-11/12 px-4 bg-zinc-100'}
        >
          <Navbar.Brand>
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Ajzaa
            </span>
          </Navbar.Brand>
          <div className="flex md:order-2">
            <Dropdown
              arrowIcon={false}
              inline={true}
              label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />}
            >
              <Dropdown.Header>
                <span className="block text-sm">
                  John Smith
                </span>
                <span className="block truncate text-sm font-medium">
                  Johnsmith@Mail.com
                </span>
              </Dropdown.Header>
              <Dropdown.Item>
                Profile
              </Dropdown.Item>
              <Dropdown.Item>
                Settings
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>
                Sign out
              </Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <NavLink to={'/'}>
              Home
            </NavLink>
            <NavLink>
              About
            </NavLink>
            <NavLink>
              Services
            </NavLink>
            <NavLink>
              Pricing
            </NavLink>
            <NavLink>
              Contact
            </NavLink>
          </Navbar.Collapse>
        </Navbar>
      </div> */}
    </>
  )
}
