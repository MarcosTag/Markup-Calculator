export const Buttons = ({ onClick }: { onClick: () => void }) => {
  return (
    <>
      <button
        onClick={onClick}
        className="bg-lime-400 text-lime-900 h-10 w-63 mt-4 font-semibold cursor-pointer hover:bg-lime-500"
      >
        CALCULAR
      </button>
    </>
  );
};