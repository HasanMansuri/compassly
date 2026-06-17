import { Helmet } from "react-helmet";

import BearingCalculator from "../components/BearingCalculator";

export default function BearingPage() {

  return (

    <>

      <Helmet>

        <title>

          Bearing Calculator - Compassly

        </title>

        <meta

          name="description"

          content="Calculate GPS bearing between two locations instantly."

        />

      </Helmet>

      <div className="max-w-6xl mx-auto p-4">

        <BearingCalculator />

      </div>

    </>

  );

}