import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <div className="text-2xl font-bold">
          <Link href="/" className="hover:text-yellow-300 transition-colors duration-300 ease-in-out">
            MyApp
          </Link>
        </div>
        <ul className="flex space-x-8">
          <li>
            <Link href="/" className="hover:text-yellow-300 transition-colors duration-300 ease-in-out">
              Home
            </Link>
          </li>
          <li>
            <Link href="/traffic-anylisis" className="hover:text-yellow-300 transition-colors duration-300 ease-in-out">
              Traffic Anylisis
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-yellow-300 transition-colors duration-300 ease-in-out">
              Services
            </Link>
          </li>
          <li>
            <Link href="/api" className="hover:text-yellow-300 transition-colors duration-300 ease-in-out">
              API
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
