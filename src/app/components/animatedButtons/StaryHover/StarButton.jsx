const StarButton = () => {
  return (
    <button className="relative px-8 py-5 bg-white text-black text-lg font-semibold rounded-full border-none shadow-[0_0_10px_rgb(255,255,255)] transition-all duration-300 ease-in-out hover:bg-black hover:text-white hover:shadow-[0_0_80px_#ffffff8c] cursor-pointer">
      Hover me
      {[1, 2, 3, 4, 5, 6].map((star) => (
        <div
          key={star}
          className={`absolute z-[-5] transition-all duration-[800ms] ease-[cubic-bezier(0.05,0.83,0.43,0.96)] star-${star}`}>
          <svg
            viewBox="0 0 784.11 815.53"
            className="fill-[#fffdef]"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" />
          </svg>
        </div>
      ))}
    </button>
  );
};

export default StarButton;
