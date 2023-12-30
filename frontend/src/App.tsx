import React, { useEffect } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import BasicCard from "./components/BasicCard";

// TODO:
// - extract data fetching to a separate file
// - swap out simple API fetch for react query library
// - create typing for custom art objects
// - move pages to separate files and add routing

function App() {
  const [displayArtData, setDisplayArtData] = React.useState([]);
  const [storeArtData, setStoreArtData] = React.useState([]);
  const [userArtData, setUserArtData] = React.useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const displayArtResponse = await fetch("/display_art_items");
    const displayArtData = await displayArtResponse.json();
    setDisplayArtData(displayArtData);

    const storeArtResponse = await fetch("/store_art_items");
    const storeArtData = await storeArtResponse.json();
    setStoreArtData(storeArtData);

    const userArtResponse = await fetch("/user_art_items");
    const userArtData = await userArtResponse.json();
    setUserArtData(userArtData);

    // console.log(" ------------------- ");
    // console.log(displayArtData);
    // console.log(storeArtData);
    // console.log(userArtData);
    // console.log(" ------------------- ");
  };

  return (
    <>
      <Navigation />
      <div className="h-screen bg-blue">
        <div className="w-2/5 mx-auto mt-10 mb-3">
          <h1 className="text-5xl mb-3"> Test Tester </h1>
          <p className="text-2xl text-cyan-500 ml-2">
            Art Maker Extraordinaire
          </p>
        </div>

        <div className="flex space-between w-2/4 m-auto py-10 border rounded-sm px-3 shadow">
          <img
            alt="profile"
            className="rounded-full w-32 h-32 mx-8"
            src="./profile_picture.jpeg"
          />
          <div>
            <h5 className="text-2xl text-slate-800 border-b-2 border-slate-200">
              "I'm Dirty Dan!"
            </h5>
            <p className="pt-3">
              Famed for putting on a cowboy hat and exclaiming "I'm Dirty Dan",
              Tia Bo Bia Pia claims to have become cowboy alter ego 'Dirty Dan'.
            </p>
          </div>
        </div>
      </div>

      {/* DISPLAY ART SECTION*/}
      <div className="h-screen pt-16">
        <div className="mb-5 mx-5">
          <h1 className="text-5xl mb-3">Display Art</h1>
          <p className="text-lg text-gray-500">
            Check out my wife's cool art she has created
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 mx-5">
          {displayArtData.map((artItem: any) => (
            <BasicCard
              key={artItem.id}
              title={artItem.title}
              description={artItem.description}
              image={artItem.image}
            />
          ))}
          {/* <BasicCard
            title="Art 1 - Marceline Embroidery on tee"
            description="This is a very long and artistic description of the art piece. It is sewn with thread from Jo Ann's and encapsulated in a rectangle border. Marcy is wearing a green crop top and looking very too cool for you."
          />
          <BasicCard
            title="Art 2 - Photography: Kala posing with accents of blue"
            description="This is a picture that displays composition and photograpy skill. The subject is Kala, who is posing on a comfortable blue stool with a fabric seat. The blue living room is accented by various very nice blue decor."
          />
          <BasicCard
            title="Art 3 - Sailor Moon Embroidery"
            description="This embroidered sweater is folded and wrapped in string to be given as a gift. The sweater is white and the embroidery is of Sailor Moon, a popular anime character."
          /> */}
        </div>
      </div>

      {/* STORE ART SECTION*/}
      <div className="h-screen pt-16">
        <div className="mb-5 mx-5">
          <h1 className="text-5xl mb-3">Store Art</h1>
          <p className="text-lg text-gray-500">
            This is theoretically art that is for sale. It maybe should just be
            in the store section, but that doesn't exist yet so it's here. This
            is cool cement art that comes in variations of grey, white, and
            terrazo.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 mx-5">
          {storeArtData.map((artItem: any) => (
            <BasicCard
              key={artItem.id}
              title={artItem.title}
              description={artItem.description}
              image={artItem.image}
            />
          ))}
        </div>
      </div>

      {/* USER ART SECTION*/}
      <div className="h-screen">
        <div className="mb-5 mx-5">
          <h1 className="text-5xl mb-3">User Art</h1>
          <p className="text-lg text-gray-500">
            This is your art! Well not you, but maybe you? It's the art of our
            users and you can see it here.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 mx-5">
          {userArtData.map((artItem: any) => (
            <BasicCard
              key={artItem.id}
              title={artItem.title}
              description={artItem.description}
              image={artItem.image}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
