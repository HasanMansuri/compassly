import { Helmet } from "react-helmet";
import CompassCard from "../components/CompassCard";

export default function CompassPage() {

  return (

    <>

      <Helmet>

        <title>

          Online Compass - Compassly

        </title>

        <meta

          name="description"

          content="Use Compassly free online compass with real-time heading and direction."

        />

      </Helmet>

      <div className="max-w-6xl mx-auto p-4">

        <CompassCard />

      </div>

    </>

  );

}