

const Footer = () => {
    return (
        <div>
            
<footer className="bg-gray-900 text-white py-10">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Column 1 */}
      <div>
        <h3 className="text-xl font-bold mb-4">About Us</h3>
        <p className="text-sm">
          We are a team of passionate individuals dedicated to providing the best services for our customers. Hard work brought us here, and we’re committed to going further!
        </p>
      </div>

      {/* Column 2 */}
      <div>
        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
        <ul>
          <li className="mb-2">
            <a href="/" className="text-sm hover:underline">Home</a>
          </li>
          <li className="mb-2">
            <a href="" className="text-sm hover:underline">Menu</a>
          </li>
          <li className="mb-2">
            <a href="/about" className="text-sm hover:underline">About</a>
          </li>
          <li className="mb-2">
            <a href="/contact" className="text-sm hover:underline">Contact</a>
          </li>
        </ul>
      </div>

      {/* Column 3 */}
      <div>
        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
        <ul>
          <li className="text-sm mb-2">
            <i className="fas fa-phone-alt mr-2"></i> +1 (555) 123-4567
          </li>
          <li className="text-sm mb-2">
            <i className="fas fa-envelope mr-2"></i> info@ourcompany.com
          </li>
          <li className="text-sm mb-2">
            <i className="fas fa-map-marker-alt mr-2"></i> 1234 Main St, Anytown, USA
          </li>
        </ul>
      </div>
    </div>

    <div className="mt-8 text-center text-sm text-gray-500">
      <p>&copy; 2024 Our Company. All rights reserved.</p>
    </div>
  </div>
</footer>
        </div>
    )
}

export default Footer;