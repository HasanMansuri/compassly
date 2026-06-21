import { Helmet } from "react-helmet-async";

export default function PrivacyPolicy() {

return (

<>

<Helmet>

<title>

Privacy Policy - Compassly

</title>

<meta

name="description"

content="Compassly Privacy Policy."

/>

</Helmet>

<div className="max-w-4xl mx-auto px-5 py-10">

<div

className="

bg-slate-900

rounded-3xl

p-7

"

>

<h1

className="

text-4xl

font-black

mb-8

"

>

Privacy Policy

</h1>

<p

className="

text-slate-400

leading-8

"

>

At Compassly,

we respect your privacy.

</p>

<h2

className="

text-2xl

font-bold

mt-10

mb-4

"

>

What we DON'T collect

</h2>

<ul

className="

space-y-3

text-slate-300

"

>

<li>❌ GPS Location</li>

<li>❌ Compass Heading</li>

<li>❌ Qibla Direction</li>

<li>❌ Coordinates</li>

<li>❌ Personal Information</li>

</ul>

<h2

className="

text-2xl

font-bold

mt-10

mb-4

"

>

How Compassly Works

</h2>

<p

className="

text-slate-400

leading-8

"

>

All calculations happen directly

inside your browser.

No data is stored or shared.

</p>

</div>

</div>

</>

)

}
