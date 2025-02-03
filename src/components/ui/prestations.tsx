export const prestationsText = [
  {
    title: "Tarif horaire",
  },
  {
    title: "Tarif forfaitaire",
  },
  {
    title: "Petits tatouages",
  },
  {
    title: "Moyens tatouages",
  },
  {
    title: "Grandes pièces",
  },
  {
    title: "Détails et couleurs",
  },
  {
    title: "Dessins sur mesure",
  },
  {
    title: "Retouche",
  },
  {
    title: "Style",
  },
  {
    title: "Réservation et acompte",
  },
  {
    title: "Soins",
  },
];

export default function Prestations() {
  return (
    <div className="h-screen mt-24 flex flex-col gap-24">
      <div className="border-y-2">
        <h2 className="flex items-center justify-between text-[110px] font-ppEiko font-thin text-[#F5F8F1] px-32">
          Prestations<span className="text-[30px] mt-14">[05]</span>
        </h2>
      </div>
      <section className="px-32 flex gap-8">
        <div className="w-[400px] h-[450px] bg-white"></div>
        <div className="w-full">
          {prestationsText.map((item) => (
            <p
              key={item.title}
              className="relative text-5xl font-ppEiko font-thin py-1.5 text-white border-b-[0.5px]"
            >
              {item.title}
            </p>
          ))}
        </div>
      </section>
    </div>
  );
}
