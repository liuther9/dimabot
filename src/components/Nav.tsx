const Nav: React.FC = () => {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Hotel Admin</h1>
          <div className="space-x-4">
            <a href="/" className="text-blue-600 hover:text-blue-800">
              Home
            </a>
            <a href="/app/chat" className="text-blue-600 hover:text-blue-800">
              Contact Form
            </a>
            <a href="/app/admin" className="text-blue-600 hover:text-blue-800">
              Admin Panel
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
