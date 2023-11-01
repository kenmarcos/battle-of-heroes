import { ReactNode } from "react";

interface CharacterInforContentProps {
  title?: string;
  children: ReactNode;
}

const CharacterInfoContent = ({
  title,
  children,
}: CharacterInforContentProps) => {
  return (
    <div className="absolute bottom-0 w-full space-y-2 bg-info-gradient p-4 font-bold">
      <h3 className="text-3xl font-black underline underline-offset-4">
        {title}
      </h3>

      <ul className="grid grid-cols-2">{children}</ul>
    </div>
  );
};

export default CharacterInfoContent;
