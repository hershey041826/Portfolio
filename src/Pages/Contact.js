import img from '../assets/bg3.png'
export const Contact = () => {
  
  return (
    <main>
    <div className='component bg-contain bg-no-repeat bg-right' style={{ backgroundImage: `url(${img})` }}>
    <div>
    <div className="py-8 px-6 mt-10 max-w-md bg-gradient-to-r from-blue-300 to-purple-500 bg-opacity-30 rounded-lg shadow-lg backdrop-blur-xl backdrop-filter">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-5">Drop me a message</h1>
        <form className="flex flex-col">
            <div className="mb-5">
                <label className="text-gray-700 font-semibold mb-2" for="name">Name</label>
                <input className="bg-transparent border rounded-lg shadow border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 py-2 px-4 block w-full appearance-none leading-normal" type="text" id="name" name="name" required/>
            </div>
            <div className="mb-5">
                <label className="text-gray-700 font-semibold mb-2" for="email">Email</label>
                <input className="bg-transparent border rounded-lg shadow border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 py-2 px-4 block w-full appearance-none leading-normal" type="email" id="email" name="email" required/>
            </div>
            <div className="mb-5">
                <label className="text-gray-700 font-semibold mb-2" for="message">Message</label>
                <textarea className="bg-transparent border rounded-lg shadow border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 py-2 px-4 block w-full appearance-none leading-normal" id="message" name="message" rows="5" required></textarea>
            </div>
            <button className="bg-gradient-to-r from-purple-400 to-indigo-500 text-white font-semibold py-2 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out mb-5" type="submit">Send Message</button>
        </form>
        
    </div>
</div>
    
</div>
    </main>
  );
};



