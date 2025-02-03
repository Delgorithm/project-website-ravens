type BtnCTAProps = {
  text: string;
};

export default function BtnCTA({ text }: BtnCTAProps) {
  return (
    <button className="w-60 h-11 bg-white text-black font-medium hover:opacity-65 hover:bg-black hover:text-white transition-all ease-in-out">
      {text}
    </button>
  );
}
