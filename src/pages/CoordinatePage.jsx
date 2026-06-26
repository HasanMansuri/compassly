import { Helmet } from "react-helmet";

import CoordinateConverter from "../components/CoordinateConverter";

export default function CoordinatePage() {

  return (

    <>

      <Helmet>

        <title>

          Coordinate Converter - Compassly

        </title>

        <meta

          name="description"

          content="Convert GPS coordinates to Decimal and DMS formats."

        />

      </Helmet>

      <div className="max-w-4xl mx-auto p-4">

        <CoordinateConverter />

      </div>

    </>

  );

}