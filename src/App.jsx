function App() {

  return (
    <>
      <section className="bg-stone1 w-full h-screen flex justify-center lg:pt-2">
        <div className=" bg-white lg:w-1/2 margin-auto flex flex-col items-center lg:rounded-xl lg:p-6">
          <img
            src="/image-omelette.jpeg"
            className="object-contain w-full lg:rounded-xl"
            alt="omelette"
          />
          <div className="flex flex-col items-center gap-4 px-6 mt-6 lg:items-start">
            <h1 className="mt-2 text-stone4 text-4xl">
              Simple Omelette Recipe
            </h1>
            <p>
              An easy and quick dish, perfect for any meal. This classic
              omelette combines beaten eggs cooked to perfection, optionally
              filled with your choice of cheese, vegetables, or meats.
            </p>
            <div className="bg-rose1 py-5 rounded-lg flex flex-col justify-start mt-6 lg:w-full">
              <p className="text-xl !text-rose !font-semibold pl-10">
                Preparation time
              </p>
              <ul className="list-disc px-18">
                <li className="text-stone3 pt-3 ">
                  <span className="font-bold">Total:</span> Approximately 10
                  minutes
                </li>
                <li className="text-stone3 pt-3 ">
                  <span className="font-bold">Preparation:</span> 5 minutes
                </li>
                <li className="text-stone3 pt-3 ">
                  <span className="font-bold">Cooking:</span> 5 minutes
                </li>
              </ul>
            </div>
            <div className="ml-4 mt-4 border-b-1 border-stone1">
              <h4 className="text-brown text-3xl">Ingredients</h4>
              <ul className="list-disc text-stone3 mt-4 pl-4">
                <li className="mb-4 ml-2">2-3 large eggs</li>
                <li className="mb-4 ml-2">Salt, to taste</li>
                <li className="mb-4 ml-2">Pepper, to taste</li>
                <li className="mb-4 ml-2">1 tablespoon of butter or oil</li>
                <li className="mb-4 ml-2">
                  Optional fillings: cheese, diced vegetables, cooked meats,
                  herbs.
                </li>
              </ul>
            </div>
          </div>
          <div className="ml-4 mt-4 border-b-1 border-stone1 px-8 lg:px-4">
            <h4 className="text-brown text-3xl">Instructions</h4>
            <ol className="list-decimal mt-4 pl-4">
              <li className="mb-4 lg:mb-2 font-light text-stone3">
                <span className="font-semibold">Beat the eggs:</span> In a bowl,
                beat the eggs with a pinch of salt and pepper until they are
                well mixed. You can add a tablespoon of water or milk for a
                fluffier texture.
              </li>
              <li className="mb-4 lg:mb-2 font-light text-stone3">
                <span className="font-semibold">Heat the pan:</span> Place a
                non-stick frying pan over medium heat and add butter or oil.
              </li>
              <li className="mb-4 lg:mb-2 font-light text-stone3">
                <span className="font-semibold">Cook the omelette:</span> Once
                the butter is melted and bubbling, pour in the eggs. Tilt the
                pan to ensure the eggs evenly coat the surface.
              </li>
              <li className="mb-4 lg:mb-2 font-light text-stone3">
                <span className="font-semibold">Add fillings (optional):</span>{" "}
                When the eggs begin to set at the edges but are still slightly
                runny in the middle, sprinkle your chosen fillings over one half
                of the omelette.
              </li>
              <li className="mb-4 lg:mb-2 font-light text-stone3">
                <span className="font-semibold">Fold and serve:</span> As the
                omelette continues to cook, carefully lift one edge and fold it
                over the fillings. Let it cook for another minute, then slide it
                onto a plate.
              </li>
              <li className="mb-4 lg:mb-2 font-light text-stone3">
                <span className="font-semibold">Enjoy:</span> Serve hot, with
                additional salt and pepper if needed.
              </li>
            </ol>
          </div>
          <div className="ml-4 mt-4 px-4">
            <h4 className="text-brown text-3xl">Nutrition</h4>
            <p className="text-stone3 mt-4  mb-6">
              The table below shows the nutritional values per serving without
              the additional fillings.
            </p>
            <div className="flex flex-col items-center">
            <div className="flex justify-around gap-12 px-12 w-full pb-4 mb-4 border-b border-stone1">
              <p className="w-full">Calories</p><p className="!font-bold !text-brown w-full">277kcal</p> 
            </div> 
            <div className="flex justify-around gap-12 px-12 w-full pb-4 mb-4 border-b border-stone1">
              <p className="w-full">Carbs</p> <p className="!font-bold !text-brown w-full">0g</p>
            </div> 
            <div className="flex justify-around gap-12 px-12 w-full pb-4 mb-4 border-b border-stone1">
              <p className="w-full">Protein</p><p className="!font-bold !text-brown w-full">20g</p> 
            </div> 
            <div className="flex justify-around gap-12 px-12 w-full pb-4 mb-4 border-b border-stone1">
              <p className="w-full">Fat</p><p className="!font-bold !text-brown w-full"> 22g</p>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
