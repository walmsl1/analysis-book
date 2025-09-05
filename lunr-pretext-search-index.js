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
  "body": " We are grateful to Layton Borst, whose work througout Summer 2024 got this book up and running.  "
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
  "body": " Quantifiers in Proofs   Introduction to Quantifiers and their Negations  A mathematical statement is a phrase or sentence that can reasonably be called true or false. For convenience, they are sometimes assigned a letter like or to make them easier to refer to. Consider the following mathematical statement. Is this statement true? If it is, we should be able to produce a number , compute , and verify that the quantity is positive. The number has this property, along with many other real numbers. For shorthand notation, we will write to mean ``there exists\" and s.t. to mean ``such that\". The phrase \"such that\" will always follow a ; the \"such that\" phrase describes or defines the object that exists. In shorthand, becomes or equivalently, Since we are convinced is true, let's see our very first proof.  Let . We must show . Since , then , and since , we have , as desired.  The last sentence in the above proof is quite wordy. Being wordy can make it more clear, but it also can draw out a situation which is uncomplicated. We could opt to replace the last line with something like \"Since , then , as desired.\" This concise formatting will often be preferred due to how compact it is, but it requires us to read a string of (in)equalities outloud in our head: equals , and is greater than . We then conlcude must be greater than , which had to be shown.  While this proof might seem like too much effort to prove a simple statement, we will reap many benefits by developing some general proof principles in straightforward situations. First, we will use the overall structure of this existence proof for almost every existence argument in this class. It is worth writing down a general ``proof outline\" of an existence argument.    Proof Outline for \"Existence\" Proofs  To prove: s.t. these things about happen.   Proof outline. Define (either by an equation or as a consequence of a definition ). We must show these things about happens.     Thus these things about happen, as desired.  Typically, our proofs will end with \"as desired\" to reiterate that we showed what we set out to show. This is a stylistic choice and not strictly necessary - proof writing does not have a strict set of rules. Our focus for the first several classes will be on constructing logical arguments; we will worry about some nuances of proof writing at a later day.  Let's look at another mathematical statement. Is true? Checking a few cases makes it seem so, but if it is, we cannot simply check cases, as there are infinitely many natural numbers we would have to check. Thus proving a \"for all\" statement will require a new strategy. We will need an abstract argument, and the idea is to introduce a variable , like , to stand in place for some arbitrary natural number. Then we can simply check the statement for that one arbitrary natural number , but all we know about is where it came from. We do not know its exact value, but we do know that it is some positive integer.  Let be any natural number. We must show . Since , we know . Since both and are non-negative, so is their product. Hence , which implies , which is equivalent to , as desired.  The mathematical shorthand for \"for all\" is , which allows us to more concisely write in the following way: The last example shows our general strategy for proving \"for all\" statements.  Proof Outline for \"For All\" Proofs  To prove: , this thing about happens.   Proof outline. Let We must show this thing about happens.     Thus this thing about happens, as desired.  While the proof outlines for existence and for all statements share many similarities, the philosophies are quite different. To prove existence, we need only produce one element that exists with the requisite properties. To prove a for all statement, we have to show every element has the requisite properties. Negations Consider the following statement. . Equivalently, we could write Is true? After a quick look at the graph of ,   we can see that is false; it is not true that for every real number , , because there exists a real number for which the opposite conclusion, namely , holds. For example, , or any has the opposite property that . The negation of a mathemical statement , is a new mathematical statement labeled , whose truth value is opposite that of . For the specific statement above, we have Equivalently, The benefit of the second version of not above is that it avoids inequalities, which can make writing the negation easier because one is not tempted to just reverse every inequality without thinking.  Please notice the important fact that the negation of a \"for all\" statement is a \"there exists\" statement. This is worth remembering.  Negation of \"For All\" Statements   , this thing about happens.   s.t. that thing about doesn't happen.    If we're asked to decide whether or not a statement is true and prove our claim, it is helpful to alert the reader of our proof to our strategy. Let's see a proof that is false.  We prove false by proving its negation, which is , true. Let . We must show . Since , we have , as desired.    To prove a statement false, we will almost always try to prove its negation true. Only in rare instances in this course will we employ a different strategy. Let's see one more example. Consider the statement Is true? If it were, we could produce a real number whose square is a negative number. This is not possible, because every real number has a non-negative square. In this case, the negation of is This example highlights the fact that the negation of a \"for all\" statement is a \"there exists\" statement, a fact worth remembering.  Negation of \"There Exists\" Statements   s.t. this thing about happens.   , that thing about doesn't happen.      Multiple Quantifiers  Most of the statments we will encounter throughout this course involve multiple quantifiers, like the following statement: Ultimately, this is a \"for all\" statement, so we could investigate its truth value by seeing if its true for a few values of . When , is there a real number such that ? Yes, does the trick. What about when ? Then is a we are looking for. After trying a few examples, may seem true; given , if we select to be , then . We can write a proof outline for by working through the quantifiers in order.   Part of statement   Sentence in our proof.      Let     s.t.  Define .     We must show   Putting it together in a proof might look like this. Let and define We must show Starting from the left-hand side, we have , as desired.   Unfortunately, is false! Can you see why? There is one particular value of for which is undefined, so the above proof isn't a proof at all! Let's think about the negation of one step at a time.   Part of statement   Part of statement not        s.t.    s.t.          Now we're ready for its proof outline and proof.    Part of statement not   Sentence in our proof.    s.t.  Define       Let .     We must show    Define and let We must show Since , then , which shows .   As a parting comment, the language we use in proofs isn't set in stone. The word \"define\" could have been \"let\" or \"consider\" or \"imagine\", as a student once creatively suggested. As we will see soon, sometimes the element that exists can't be written or expressed by an equation; it exists by virtue of some assumption that we made. But while our wording might change in the future, the basic structure of proving quantified statements will always remain the same.   "
},
{
  "id": "sec-quantifiers-2-3",
  "level": "2",
  "url": "sec-quantifiers.html#sec-quantifiers-2-3",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": "Let . We must show . Since , then , and since , we have , as desired. "
},
{
  "id": "sec-quantifiers-2-8",
  "level": "2",
  "url": "sec-quantifiers.html#sec-quantifiers-2-8",
  "type": "Proof",
  "number": "2",
  "title": "",
  "body": "Let be any natural number. We must show . Since , we know . Since both and are non-negative, so is their product. Hence , which implies , which is equivalent to , as desired. "
},
{
  "id": "sec-quantifiers-2-9-11",
  "level": "2",
  "url": "sec-quantifiers.html#sec-quantifiers-2-9-11",
  "type": "Figure",
  "number": "0.1.1",
  "title": "",
  "body": "  "
},
{
  "id": "sec-quantifiers-2-11-2",
  "level": "2",
  "url": "sec-quantifiers.html#sec-quantifiers-2-11-2",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " We prove false by proving its negation, which is , true. Let . We must show . Since , we have , as desired.  "
},
{
  "id": "sec-quantifiers-3-2-17",
  "level": "2",
  "url": "sec-quantifiers.html#sec-quantifiers-3-2-17",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": "Let and define We must show Starting from the left-hand side, we have , as desired. "
},
{
  "id": "sec-quantifiers-3-3-8",
  "level": "2",
  "url": "sec-quantifiers.html#sec-quantifiers-3-3-8",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": "Define and let We must show Since , then , which shows . "
},
{
  "id": "sec-integration-intro",
  "level": "1",
  "url": "sec-integration-intro.html",
  "type": "Section",
  "number": "0.2",
  "title": "Integration",
  "body": " Integration  As we learned in Calculus, a definite integral geometrically represents the area between a curve and the horizontal axis over an interval .    The area between the curve and the horizontal axis is the definite integral of over the interval .    If the function is a straight line, then the shape is a polygon whose area we can compute exactly. But when the function is curvy, how do we define the area? The idea is to rectangles, whose areas are easily computed, to approximate the true area under the curve. In Calculus I, the most common rectangle sums are the left and right hand Riemann sums. Those sums are useful because they are easy to draw and compute; we can tell a computer (human or machine) a simple algorithm to follow. But how good of an approximation is a left or right hand sum? If some of the rectangles are above the curve while others are below, this is a challenging question to answer. To develop the theory of integration, we will want to know without question whether a rectangle sum is an underestimate or overestimate. The way to guarantee this is to always stick rectangles below the curve for underestimates and above the curve for overesitmates, as in the graphic below.  The lower sum rectangles are shaded in red, while the upper sum rectangles are shaded in blue.     The set of subdivision points form what's called a partition of - a finite set of strictly increasing values starting at and ending with . On a given subinterval , the height of the \"lower rectangle\" is given by since this value is guaranteed to be less than or equal to any other -value of the function on that subinterval. Hence the area of an individual \"lower rectangle\" is just and if we sum the areas of each, we get the lower sum for over : Now each lower sum is an underestimate for the true area, so the supremum of all possible lower sums will give us a \"best underestimate\" for the area; we call this the lower integral of over :   Similarly, we take for the heights of the \"upper rectangles\", and get the upper sum  Each upper sum is an overestimate for the true area, so the infimum of all possible upper sums will give us a \"best overestimate\" for the area; we call this the upper integral of over : As we will see in class, there are functions whose upper and lower integrals can differ! If the upper and lower integrals of are the same, we say that is integrable over , and in this case, we introduce the following notation to represent the value of and ;   Apparently not every function is integrable (as we shall see in class), so which functions are integrable? Can we classify them? As a start towards answering this question, we could use an easier to check criterion for integrability. Right now, given some function , we would have to compute its upper and lower integrals, which can be a formidable task (without more powerful integration tools) even for a tame function like . Luckily, there is a criterion we can use to more easily check when a function is integrable; we will not prove this result.   A function is integrable on if and only if for all , there exists a partition such that .   The benefit of the above theorem is that we need only find one partition on which the upper sum and lower sum are close. The downside is that checking that condition won't tell us what the value of the integral is, even though we will then know the function is integrable!  Let's put this theorem in action to see why discontinuous functions can still be integrable.   This is a Doenet activity.    "
},
{
  "id": "integration_graph-figure",
  "level": "2",
  "url": "sec-integration-intro.html#integration_graph-figure",
  "type": "Figure",
  "number": "0.2.1",
  "title": "",
  "body": " The area between the curve and the horizontal axis is the definite integral of over the interval .   "
},
{
  "id": "integration_graph-figure2",
  "level": "2",
  "url": "sec-integration-intro.html#integration_graph-figure2",
  "type": "Figure",
  "number": "0.2.2",
  "title": "",
  "body": " The lower sum rectangles are shaded in red, while the upper sum rectangles are shaded in blue.   "
},
{
  "id": "sec-integration-intro-5",
  "level": "2",
  "url": "sec-integration-intro.html#sec-integration-intro-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "partition lower sum lower integral "
},
{
  "id": "sec-integration-intro-6",
  "level": "2",
  "url": "sec-integration-intro.html#sec-integration-intro-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "upper sum upper integral integrable "
},
{
  "id": "sec-integration-intro-7-3",
  "level": "2",
  "url": "sec-integration-intro.html#sec-integration-intro-7-3",
  "type": "Theorem",
  "number": "0.2.3",
  "title": "",
  "body": "  A function is integrable on if and only if for all , there exists a partition such that .   "
},
{
  "id": "darboux_interactive",
  "level": "2",
  "url": "sec-integration-intro.html#darboux_interactive",
  "type": "Figure",
  "number": "0.2.4",
  "title": "",
  "body": " This is a Doenet activity.   "
},
{
  "id": "sec-limits_of_functions",
  "level": "1",
  "url": "sec-limits_of_functions.html",
  "type": "Section",
  "number": "0.3",
  "title": "Function Limits",
  "body": " Function Limits  As you have seen in a Calculus class, the notation roughly means that is close to when is close to . But how close should be to ? And how close must be to ? We need quantifiers for a precise statement.  Let We say the limit of at is , and write , if s.t. .  Let's focus on the very last piece, namely . Here, is measuring how far away and can be; it is required that , meaning must lie in the horizontal strip between the horizontal lines and . And for what values of must this be true? We need to pick to guarantee it is true for any satisfying . Let's explore this with an activity.  This is a Doenet activity.     "
},
{
  "id": "sec-limits_of_functions-2-10",
  "level": "2",
  "url": "sec-limits_of_functions.html#sec-limits_of_functions-2-10",
  "type": "Definition",
  "number": "0.3.1",
  "title": "",
  "body": "Let We say the limit of at is , and write , if s.t. . "
},
{
  "id": "function_limits_activity",
  "level": "2",
  "url": "sec-limits_of_functions.html#function_limits_activity",
  "type": "Figure",
  "number": "0.3.2",
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
