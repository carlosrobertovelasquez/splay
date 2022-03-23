import React from 'react';
import iconBird from '../../../public/icons/bird.png';
import iconHome from '../../../public/icons/home.png';
import icon1 from '../../../public/icons/icon1.png';
import Logo from '../../../public/Logo02.png';
import Link from 'next/link';
import { useAuth } from '../../../lib/auth';
export default function index() {
<<<<<<< HEAD
  const { user, signout } = useAuth()
  return (
    <React.Fragment>
      <nav
        className="flex items-center justify-between flex-wrap bg-teal-500 p-2"
        style={{ background: "#B2DFDD" }}
      >
        <div className="flex items-center flex-shrink-0 text-white mr-6 py-2">
          <img className="fill-current mr-2" width="100" src={Logo}></img>
          <div className="pl-4">
            <input
              type="text"
              className="px-2"
              style={{
                width: "250px",
                borderRadius: "7px",
                height: "35px",
                background: "#d5eceb",
              }}
              placeholder="Buscar"
            />
          </div>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow"></div>
          <div>
            <a
              href="#"
              className="inline-block text-sm px-4 leading-none mt-4 lg:mt-0"
            >
              <img style={{ width: "40px" }} src={iconHome} />
            </a>
            <Link href="/W/[id]" as={`/W/${user.uid}`}>
              <a className="inline-block text-sm px-4 leading-none mt-4 lg:mt-0">
                <img style={{ width: "40px" }} src={icon1} />
              </a>
            </Link>
=======
	const { user } = useAuth();
	return (
		<React.Fragment>
			<nav
				className="flex items-center justify-between flex-wrap bg-teal-500 p-2"
				style={{ background: '#B2DFDD' }}
			>
				<div className="flex items-center flex-shrink-0 text-white mr-6 py-2">
					<img className="fill-current mr-2" width="100" src={Logo} />
					<div className="pl-4">
						<input
							type="text"
							className="px-2"
							style={{
								width: '250px',
								borderRadius: '7px',
								height: '35px',
								background: '#d5eceb'
							}}
							placeholder="Buscar3"
						/>
					</div>
				</div>
				<div className="block lg:hidden">
					<button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
						<svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<title>Menu</title>
							<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
						</svg>
					</button>
				</div>
				<div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
					<div className="text-sm lg:flex-grow" />
					<div>
						<a href="#" className="inline-block text-sm px-4 leading-none mt-4 lg:mt-0">
							<img style={{ width: '40px' }} src={iconHome} />
						</a>
						<Link href="/W/[id]" as={`/W/${user.uid}`}>
							<a className="inline-block text-sm px-4 leading-none mt-4 lg:mt-0">
								<img style={{ width: '40px' }} src={icon1} />
							</a>
						</Link>
>>>>>>> 8fabb158d17784b9863fb13ad9403f5bdf9f7589

						<a href="#" className="inline-block text-sm px-4 leading-none mt-4 lg:mt-0">
							<img style={{ width: '80px' }} src={iconBird} />
						</a>
					</div>
				</div>
			</nav>
		</React.Fragment>
	);
}
