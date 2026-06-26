import { Helmet } from "react-helmet";

import DistanceCalculator from "../components/DistanceCalculator";

export default function DistancePage() {

  return (

    <>

      <Helmet>

        <title>

          Distance Calculator - Compassly

        </title>

        <meta

          name="description"

          content="Calculate distance between two GPS locations instantly."

        />

      </Helmet>

      <div className="max-w-4xl mx-auto p-4">

        <DistanceCalculator />

      </div>

    </>

  );

}