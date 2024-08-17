import Link from 'next/link';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold mb-4">Welcome to Receipt Generator</h1>
        <p className="text-lg mb-8">
          Effortlessly create, manage, and book appointments with our intuitive receipt generator.
        </p>
        <Link href="/appointments" className=" px-6 py-2 rounded-md transition">
          Book an Appointment
        </Link>
      </section>

      {/* Features Section */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-semibold text-center mb-6">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/auth" className="bg-gray-800 p-6 rounded-lg shadow-md text-center hover:bg-gray-700 transition">
            <h3 className="text-xl font-bold mb-2">User Authentication</h3>
            <p>Sign up or log in to manage your receipts securely.</p>
          </Link>
          <Link href="/receipts/create" className="bg-gray-800 p-6 rounded-lg shadow-md text-center hover:bg-gray-700 transition">
            <h3 className="text-xl font-bold mb-2">Create Receipt</h3>
            <p>Create professional receipts in seconds.</p>
          </Link>
          <Link href="/receipts" className="bg-gray-800 p-6 rounded-lg shadow-md text-center hover:bg-gray-700 transition">
            <h3 className="text-xl font-bold mb-2">Manage Receipts</h3>
            <p>View, edit, and delete your receipts easily.</p>
          </Link>
          <Link href="/appointments" className="bg-gray-800 p-6 rounded-lg shadow-md text-center hover:bg-gray-700 transition">
            <h3 className="text-xl font-bold mb-2">Appointment Booking</h3>
            <p>Book and manage your appointments seamlessly.</p>
          </Link>
          <Link href="/receipts/search" className="bg-gray-800 p-6 rounded-lg shadow-md text-center hover:bg-gray-700 transition">
            <h3 className="text-xl font-bold mb-2">Search Receipts</h3>
            <p>Quickly find your receipts by title or tags.</p>
          </Link>
          <Link href="/receipts/export" className="bg-gray-800 p-6 rounded-lg shadow-md text-center hover:bg-gray-700 transition">
            <h3 className="text-xl font-bold mb-2">Export Receipts</h3>
            <p>Download your receipts as PDF or CSV files.</p>
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-10">
        <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
        <Link href="/appointments" className=" px-6 py-2 rounded-md transition">
          Book an Appointment
        </Link>
      </section>
    </div>
  );
};

export default Home;