import SoupsCard from "../../../components/SoupsCard";
import CoverSoups from "../../../assets/Images/2.Dishes/_Cover Soups.png";
import AsheReshteh from "../../../assets/Images/2.Dishes/Ashe Reshteh.png";
import AsheDoogh from "../../../assets/Images/2.Dishes/Ashe Doogh.png";
import AsheAnar from "../../../assets/Images/2.Dishes/Ashe Anar.png";

const SoupsPage = () => {
  const soups = [
    { title: "Ashe Reshteh", calories: "220–300 kcal", description: "Traditional soup with beans, herbs & noodles", image: AsheReshteh },
    { title: "Ashe Doogh", calories: "250–320 kcal", description: "Yogurt and herb soup", image: AsheDoogh },
    { title: "Ashe Anar", calories: "250–320 kcal", description: "Pomegranate-flavored soup", image: AsheAnar },
  ];

  return (
    <div className="p-8">
      {/* Cover Section */}
      <section className="flex flex-col md:flex-row items-center justify-center mb-12">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-bold text-primaryHover mb-4">Healthy</h1>
          <h2 className="text-4xl text-blue-600 font-light">Soups</h2>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img src={CoverSoups} alt="Soups Cover" className="w-full h-auto object-contain" />
        </div>
      </section>

      {/* Soups Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {soups.map((soup, idx) => (
          <SoupsCard
            key={idx}
            title={soup.title}
            calories={soup.calories}
            description={soup.description}
            image={soup.image}
          />
        ))}
      </section>
    </div>
  );
};

export default SoupsPage;
