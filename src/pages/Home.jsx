import Card from "./Card";

const testimonials = [
    {
        text: "Maten är fantastisk och det kommer att bli min nya favoriträtt",
        author: "Gandoms customer",
    },
    {
        text: "The food arrived hot. Yogurt dishes are often good, and I thought it was pretty good with noodles. Also, being vegetarian is really important to me. Thanks.",
        author: "Gandoms customer",
    },
];

const ReviewsSection = () => {
    return (
        <section className="bg-grayLight py-16 flex justify-center gap-8 flex-wrap">
            {testimonials.map((t, i) => (
                <Card key={i} text={t.text} author={t.author} />
            ))}
        </section>
    );
};

export default ReviewsSection;
