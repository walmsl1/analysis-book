var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "   copyright   "
},
{
  "id": "frontmatter-3",
  "level": "1",
  "url": "frontmatter-3.html",
  "type": "Dedication",
  "number": "",
  "title": "Dedication",
  "body": " "
},
{
  "id": "frontmatter-4",
  "level": "1",
  "url": "frontmatter-4.html",
  "type": "Acknowledgements",
  "number": "",
  "title": "Acknowledgements",
  "body": " "
},
{
  "id": "xOf",
  "level": "1",
  "url": "preface.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": "  David Walmsley, Ph.D.  St. Olaf College, 2019   "
},
{
  "id": "sec-quantifiers",
  "level": "1",
  "url": "sec-quantifiers.html",
  "type": "Section",
  "number": "0.1",
  "title": "Quantifiers in Proofs",
  "body": " Quantifiers in Proofs  A mathematical statement is a phrase or sentence that can reasonably be called true or false. For convenience, they are sometimes assigned a letter like or to make them easier to refer to. Consider the following mathematical statement. Is this statement true? If it is, we should be able to produce a number , compute , and verify that the quantity is positive. The number has this property, along with many other real numbers. For shorthand notation, we will write to mean ``there exists\" and s.t. to mean ``such that\". The phrase \"such that\" will always follow a ; the \"such that\" phrase describes or defines the object that exists. In shorthand, becomes or equivalently, Now that we are convinced is true, let's see our very first proof.  Let . We must show . Since , then , and since , we have , as desired.  While this proof might seem like too much effort to prove a simple statement, we will reap many benefits by developing some general proof principles in straightforward situations. First, we will use the overall structure of this existence proof for almost every existence argument in this class. It is worth writing down a general ``proof outline\" of an existence argument.  Proof Outline for Existence  To prove: s.t. these things about happen.   Proof outline. Define (either by an equation or as a consequence of a definition ). We must show these things about happens.     Thus this thing about happens, as desired.  Typically, our proofs will end with \"as desired\" to reiterate that we showed what we set out to show. This is a stylistic choice and not strictly necessary - proof writing does not have a strict set of rules. Our focus for the first several classes will be on constructing logical arguments; we will worry about some nuances of proof writing at a later day.  The last sentence in the above proof is quite wordy. Being wordy can make it more clear, but it also can cloud a situation which is uncomplicated. We could opt to replace the last line with something like \"Since , then , as desired.\" This concise formatting will often be preferred due to how compact it is, but it requires us to read a string of equalities and inequalities outloud in our head: equals , and is greater than . We then conlcude, by looking at the beginning and ending expressions in the string, that is greater than , which had to be shown.  The other quantifier is \"for all\", whose shorthand is . Let's see it in action by considering this new mathematical statement . Is true? A quick look at the graphs of   Let's change the above into a and consider what happens in the following statement. or equivalently, The negation of a mathematical statement is a new statment, which we will denote by , whose truth value is opposite that of . A mathematical proof is a logical argument to convince the reader that a mathematical statement is true or false.  Consider the statement   This is a proof in a proof block. What does it look like?  Trying out line break.  To see if it works.    Suppose this were not the case. That is, suppose there are only finitely many primes. Then there must be a last, largest prime, call it . Consider the number .  Now is certainly larger than . Also, is not divisible by any number less than or equal to , since every number less than or equal to divides . Thus the prime factorization of contains prime numbers (possibly just itself) all greater than . So is not the largest prime, a contradiction. Therefore there are infinitely many primes.  Look, here's the deal. "
},
{
  "id": "sec-quantifiers-3",
  "level": "2",
  "url": "sec-quantifiers.html#sec-quantifiers-3",
  "type": "Proof",
  "number": "0.1.1",
  "title": "",
  "body": "Let . We must show . Since , then , and since , we have , as desired. "
},
{
  "id": "sec-quantifiers-8",
  "level": "2",
  "url": "sec-quantifiers.html#sec-quantifiers-8",
  "type": "Proof",
  "number": "0.1.2",
  "title": "",
  "body": " This is a proof in a proof block. What does it look like?  Trying out line break.  To see if it works.  "
},
{
  "id": "qGS",
  "level": "2",
  "url": "sec-quantifiers.html#qGS",
  "type": "Proof",
  "number": "0.1.3",
  "title": "",
  "body": " Suppose this were not the case. That is, suppose there are only finitely many primes. Then there must be a last, largest prime, call it . Consider the number .  Now is certainly larger than . Also, is not divisible by any number less than or equal to , since every number less than or equal to divides . Thus the prime factorization of contains prime numbers (possibly just itself) all greater than . So is not the largest prime, a contradiction. Therefore there are infinitely many primes.  "
},
{
  "id": "sec-continuity",
  "level": "1",
  "url": "sec-continuity.html",
  "type": "Section",
  "number": "0.2",
  "title": "Continuity",
  "body": " Continuity  Roughly speaking, a function is continuous at a point provided when is close to , is close to . This loose definition conveys the intuition, but is not rigorous enough for a formal definition. How close should be to ? How close must be to ? We need quantifiers for a precise statement.  We say is continuous at if s.t. , .  The challenge is that, given an , we must conclude that , or rather . Here, is measuring how far away and can be. To meet the conclusion graphically, we need to keep the graph of between the horizontal lines and .  Any value of corresponding to a point in between those horizontal lines is a value of which makes . Our task is to find an interval of such values centered at ; is the radius of this interval, and it measures how far away from we can move on the horizontal axis before the function first escapes the horizontal strip.    This is a Doenet activity.     "
},
{
  "id": "sec-continuity-2-11",
  "level": "2",
  "url": "sec-continuity.html#sec-continuity-2-11",
  "type": "Definition",
  "number": "0.2.1",
  "title": "",
  "body": "We say is continuous at if s.t. , . "
},
{
  "id": "continuity_activity",
  "level": "2",
  "url": "sec-continuity.html#continuity_activity",
  "type": "Figure",
  "number": "0.2.2",
  "title": "",
  "body": " This is a Doenet activity.   "
},
{
  "id": "sec-integration-intro",
  "level": "1",
  "url": "sec-integration-intro.html",
  "type": "Section",
  "number": "0.3",
  "title": "Integration",
  "body": " Integration  Geometrically, a definite integral represents the area between a curve and the horizontal axis over an interval .    The area between the curve and the horizontal axis is the definite integral of over the interval .    To underestimate the area , we place rectangles below the curve by first creating a partition  of the interval as . Each subinterval on the horizontal axis serves as the base of a rectangle, and to produce a rectangle below the curve, we take to be the rectangles height. If instead we take , we get a rectangle above the curve over that subinterval. Adding up the areas of each lower rectangle gives us a lower sum over the partition , which we denote by . Any lower sum is an underestimate of the true area , so the supremum of all possible lower estimates gives us a sort of \"best underestimate\" of , and we call it the lower integral of over : Whatever the area is, the geometric intuition is that Similarly, the upper sum over is given by and the infimum over all possible upper sums gives us a ``best overestimate\" of , called the upper integral of over :   Geometrically, we suspect , and so we should have . When , we say that is integrable over , and we define its area under the curve as (or , since they are equal), and we write You may find it surprising that there are functions for which , which is to say not every function is integrable. But fear not; we will show that every continuous function is integrable, ensuring that everything you did in Calculus was not for naught! It is worth checking that is in fact no greater than , and this fact follows from checking several details which themselves follow from our groundwork in sups and infs. We will leave the details of the following facts to the exercises.   If and are partitions of and , then .  For any partitions and of , .  .   The definition of being integrable was built upon intuitive geometric principles, but it is not the most practical definition to check; it requires computing both and exactly, which is typically a formidable task even for relatively tame functions, as we will see. Luckily, there is an easier to check -criterion at our disposal.    A function is integrable on if and only if for all , there exists a partition such that .    Let's put this theorem in action to see why discontinuous functions can still be integrable.   This is a Doenet activity.    "
},
{
  "id": "integration_graph-figure",
  "level": "2",
  "url": "sec-integration-intro.html#integration_graph-figure",
  "type": "Figure",
  "number": "0.3.1",
  "title": "",
  "body": " The area between the curve and the horizontal axis is the definite integral of over the interval .   "
},
{
  "id": "sec-integration-intro-6",
  "level": "2",
  "url": "sec-integration-intro.html#sec-integration-intro-6",
  "type": "Theorem",
  "number": "0.3.2",
  "title": "",
  "body": "  A function is integrable on if and only if for all , there exists a partition such that .   "
},
{
  "id": "darboux_interactive",
  "level": "2",
  "url": "sec-integration-intro.html#darboux_interactive",
  "type": "Figure",
  "number": "0.3.3",
  "title": "",
  "body": " This is a Doenet activity.   "
},
{
  "id": "ch_intro-6",
  "level": "1",
  "url": "ch_intro-6.html",
  "type": "References",
  "number": "0",
  "title": "References and Suggested Readings",
  "body": " References and Suggested Readings   "
},
{
  "id": "appendix-list-results",
  "level": "1",
  "url": "appendix-list-results.html",
  "type": "Appendix",
  "number": "A",
  "title": "Theorems and Lemmas",
  "body": " Theorems and Lemmas   "
},
{
  "id": "GjC",
  "level": "1",
  "url": "backmatter-3.html",
  "type": "Appendix",
  "number": "B",
  "title": "List of Symbols",
  "body": " List of Symbols   "
},
{
  "id": "backmatter-4",
  "level": "1",
  "url": "backmatter-4.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
},
{
  "id": "backmatter-5",
  "level": "1",
  "url": "backmatter-5.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
