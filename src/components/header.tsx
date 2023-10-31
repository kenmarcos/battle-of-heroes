import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

import { SearchIcon } from "lucide-react";

const Header = () => {
  return (
    <header>
      <div className="container relative py-4">
        <h1 className="relative flex flex-col items-center justify-center pt-5 text-primary">
          <span className="absolute top-0 text-lg font-medium sm:text-3xl">
            Battle of
          </span>
          <span className="text-shadow bg-gradient-to-r from-primary to-secondary bg-clip-text text-3xl font-black text-transparent sm:text-6xl">
            HeroeS
          </span>
        </h1>

        <Popover>
          <PopoverTrigger
            asChild
            className="absolute right-4 top-1/2 -translate-y-1/2"
          >
            <Button size="icon" className="rounded-full">
              <SearchIcon size={20} />
            </Button>
          </PopoverTrigger>

          <PopoverContent className="mt-4 w-screen sm:mr-4 sm:mt-1 sm:w-[520px]">
            <div className="w-full">
              <form className="flex items-center gap-2">
                <Input placeholder="Nome do personagem" />
                <Button type="submit">Pesquisar</Button>
              </form>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
};

export default Header;
