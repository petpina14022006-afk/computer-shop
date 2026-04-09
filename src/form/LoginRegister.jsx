import React, { useState } from 'react'

const LoginRegister = ({ isLogin, setShowModal }) => {
 const [mode, setMode] = useState(isLogin);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (mode) {
      alert(`Login:\nEmail: ${email}`);
    } else {
      alert(`Register:\nName: ${name}\nEmail: ${email}`);
    }

    setShowModal(false);
  };

  return (
    <div className="fixed inset-0 text-black bg-opacity-50 flex items-center justify-center z-50 px-4 mt-55">
  
  <div className="bg-white w-full max-w-md sm:max-w-lg md:max-w-md p-4 sm:p-6 rounded-xl relative">
    
    {/* Close */}
    <button
      onClick={() => setShowModal(false)}
      className="absolute top-2 right-3 text-gray-500"
    >
      ✖
    </button>

    <h2 className="text-lg sm:text-xl font-bold text-center mb-4">
      {mode ? "Login" : "Register"}
    </h2>

    <form onSubmit={handleSubmit} className="space-y-3 text-black">

      {!mode && (
        <input
          type="text"
          placeholder="Name"
          className="w-full border p-2 rounded text-sm sm:text-base"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      )}

      <input
        type="email"
        placeholder="Email"
        className="w-full border p-2 rounded text-sm sm:text-base"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full border p-2 rounded text-sm sm:text-base"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="w-full bg-blue-500 text-white p-2 rounded text-sm sm:text-base">
        {mode ? "Login" : "Register"}
      </button>
    </form>

    <p className="text-xs sm:text-sm text-center mt-3">
      {mode ? "No account?" : "Already have account?"}{" "}
      <button
        onClick={() => setMode(!mode)}
        className="text-blue-500 underline"
      >
        {mode ? "Register" : "Login"}
      </button>
    </p>
  </div>
</div>
  );
};

export default LoginRegister
