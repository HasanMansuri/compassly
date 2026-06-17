import { Helmet } from "react-helmet";

import QiblaFinder from "../components/QiblaFinder";

export default function QiblaPage() {

  return (

    <>

      <Helmet>

        <title>

          Qibla Finder Online - Compassly

        </title>

        <meta

          name="description"

          content="Find the accurate Qibla direction from anywhere using Compassly."

        />

      </Helmet>

      <div className="max-w-6xl mx-auto p-4">

        <QiblaFinder />

      </div>

    </>

  );

}