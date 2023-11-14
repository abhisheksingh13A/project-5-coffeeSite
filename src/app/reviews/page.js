import ReviewCard from "../elements/reviewcard/page";


export default function Reviews() {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className="font-semibold text-center text-4xl lg:mt-14 mt-24">Customer Reviews</h1>
      
      <div className="flex flex-col lg:flex-row gap-5 justify-center py-4 my-8">
        <ReviewCard Image="/ai.jpeg" title="Olivia Ava"/>
        <ReviewCard Image="/ai.jpeg" title="Olivia Ava"/>
        <ReviewCard Image="/ai.jpeg" title="Olivia Ava"/>
      </div>
    </div>
  );
}
