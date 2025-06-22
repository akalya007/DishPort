const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white p-8 flex items-center justify-center">
      <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Contact Us</h1>
        
        <p className="text-center text-gray-600 mb-8">
          We'd love to hear from you! Fill out the form below and we’ll get back to you soon.
        </p>

        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input type="text" placeholder="Your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input type="email" placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea rows="4" placeholder="Write your message here..."
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          <div className="text-center">
            <button type="submit"  className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
