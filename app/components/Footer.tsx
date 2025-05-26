export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p>P.O Box 28460 – 00200 Nairobi</p>
            <p>Phone: +254725745922</p>
            <p>Email: info@cekolengineering.co.ke</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Certifications</h3>
            <p>NCA Certified</p>
            <p>ISO 9001:2015</p>
            <p>AGPO Certified</p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Cekol Engineering Ltd. All rights reserved.</p>
          <p className="text-center text-sm mt-2" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                Developed by{' '}
                    <a href="https://bhakitah.co.ke" target="_blank" rel="noopener" className="text-[#ffffff] hover:text-[#8bc34a] transition">
                        BhakitahTech
                    </a>
            </p>
        </div>
      </div>
    </footer>
  );
}