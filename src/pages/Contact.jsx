import { Helmet } from "react-helmet-async";

export default function Contact() {

return (

<>

<Helmet>

<title>

Contact Compassly

</title>

<meta

name="description"

content="Contact Compassly."

/>

</Helmet>

<div className="max-w-4xl mx-auto px-5 py-10">

<div

className="

bg-slate-900

rounded-3xl

p-7

text-center

"

>

<h1

className="

text-4xl

font-black

mb-6

"

>

Contact Us

</h1>

<p

className="

text-slate-400

leading-8

"

>

Have questions,

feedback or suggestions?

</p>

<div

className="

mt-10

"

>

<a

href="mailto:contact@getcompassly.com"

className="

bg-green-600

hover:bg-green-700

px-7

py-4

rounded-2xl

font-bold

inline-block

transition

"

>

📧 [contact@getcompassly.com](mailto:contact@getcompassly.com)

</a>

</div>

<p

className="

text-slate-500

mt-8

"

>

We usually reply within 24-48 hours.

</p>

</div>

</div>

</>

)

}
