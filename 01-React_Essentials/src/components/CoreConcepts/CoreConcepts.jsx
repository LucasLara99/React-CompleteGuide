import CoreConcept from "../CoreConcept/CoreConcept";
import { CORE_CONCEPTS } from "../../data";

export default function CoreConcepts() {
   return (
      <section id="core-concepts">
         <h2>Core concepts</h2>
         <ul>
            {CORE_CONCEPTS.map((concepItem) => <CoreConcept key={concepItem.title} {...concepItem} />)}
         </ul>
      </section>
   );
}