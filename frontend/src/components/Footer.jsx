const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">DEVOUR TO CRUSH</h3>
            <p className="text-gray-400">
              Your ultimate JAMB exam preparation platform.
            </p>
          </div>

          <div>
            <h4 className="text-md font-semibold mb-4">Features</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Question Bank</li>
              <li>Exam Simulator</li>
              <li>Progress Tracking</li>
              <li>Community Support</li>
            </ul>
          </div>

          <div>
            <h4 className="text-md font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>FAQ</li>
              <li>Terms of Service</li>
            </ul>
          </div>

          <div>
            <h4 className="text-md font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 DEVOUR TO CRUSH. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
