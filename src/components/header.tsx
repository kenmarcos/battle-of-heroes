const Header = () => {
  return (
    <header>
      <div className="container py-4">
        <h1 className="relative flex flex-col items-center justify-center pt-5 text-primary">
          <span className="absolute top-0 text-lg font-medium sm:text-3xl">
            Battle of
          </span>
          <span className="text-shadow bg-gradient-to-r from-primary to-secondary bg-clip-text text-3xl font-black text-transparent sm:text-6xl">
            HeroeS
          </span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
