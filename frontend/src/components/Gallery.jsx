
import { useEffect, useState } from "react";


const BASE_URL = "http://127.0.0.1:8000";


export default function Gallery() {

  const [sofas, setSofas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {

    fetch(`${BASE_URL}/api/gallery/`)

      .then((response) => {

        if (!response.ok) {
          throw new Error("Failed to fetch gallery");
        }

        return response.json();

      })

      .then((data) => {
        setSofas(data);
      })

      .catch((error) => {
        console.error(error);
        setError(error.message);
      })

      .finally(() => {
        setLoading(false);
      });

  }, []);


  if (loading) {

    return (
      <section className="py-20">

        <div className="text-center">

          <p className="text-gray-500">
            Loading gallery...
          </p>

        </div>

      </section>
    );

  }


  if (error) {

    return (
      <section className="py-20">

        <div className="text-center">

          <p className="text-red-500">
            {error}
          </p>

        </div>

      </section>
    );

  }


  return (

    <section
      id="gallery"
      className="py-20"
    >

      <div className="max-w-7xl mx-auto px-6">


        <h2 className="text-4xl font-bold text-center mb-12">
          Sofa Gallery
        </h2>


        <div className="grid md:grid-cols-3 gap-6">

          {sofas.map((sofa) => (

            <div
              key={sofa.id}
              className="overflow-hidden rounded-xl"
            >

              <img
                src={sofa.image_url}
                alt={sofa.title || "Sofa"}
                className="rounded-xl h-72 w-full object-cover hover:scale-105 transition duration-500"
              />

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}
