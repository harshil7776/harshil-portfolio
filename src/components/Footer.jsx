export default function Footer() {
    return (
      <footer className="border-t border-white/10 py-8 px-6">
  
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-4">
  
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Harshil Thakkar. All rights reserved.
          </p>
  
          <p className="text-gray-600 text-sm">
            Designed & built with React.
          </p>
  
        </div>
  
      </footer>
    );
  }