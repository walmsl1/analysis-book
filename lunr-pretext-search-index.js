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
  "body": " Quantifiers in Proofs  A mathematical statement is a phrase or sentence that can reasonably be called true or false. For convenience, they are sometimes assigned a letter like or to make them easier to refer to. Consider the following mathematical statement. Is this statement true? If it is, we should be able to produce a number , compute , and verify that the quantity is positive. The number has this property, along with many other real numbers. For shorthand notation, we will write to mean ``there exists\" and s.t. to mean ``such that\". The phrase \"such that\" will always follow a ; the \"such that\" phrase describes or defines the object that exists. In shorthand, becomes or equivalently, Now that we are convinced is true, let's see our very first proof.  Let . We must show . Since , then , and since , we have , as desired.  While this proof might seem like too much effort to prove a simple statement, we will reap many benefits by developing some general proof principles in straightforward situations. First, we will use the overall structure of this existence proof for almost every existence argument in this class. It is worth writing down a general ``proof outline\" of an existence argument.  Proof Outline for \"Existence\" Proofs  To prove: s.t. these things about happen.   Proof outline. Define (either by an equation or as a consequence of a definition ). We must show these things about happens.     Thus these things about happen, as desired.  Typically, our proofs will end with \"as desired\" to reiterate that we showed what we set out to show. This is a stylistic choice and not strictly necessary - proof writing does not have a strict set of rules. Our focus for the first several classes will be on constructing logical arguments; we will worry about some nuances of proof writing at a later day.  The last sentence in the above proof is quite wordy. Being wordy can make it more clear, but it also can draw out a situation which is uncomplicated. We could opt to replace the last line with something like \"Since , then , as desired.\" This concise formatting will often be preferred due to how compact it is, but it requires us to read a string of (in)equalities outloud in our head: equals , and is greater than . We then conlcude, by looking at the beginning and ending expressions in the string, that is greater than , which had to be shown.  Let's look at another mathematical statement. Is true? Checking a few cases makes it seem so, but if it is, we cannot simply check cases, as there are infinitely many natural numbers we would have to check. Thus proving a \"for all\" statement will require a new strategy. We will need an abstract argument, and the idea is to introduce a variable , like , to stand in place for some arbitrary natural number. Then we can simply check the statement for that one arbitrary natural number , but all we know about is where it came from. We do not know its exact value, but we do know that it is some positive integer.  Let be any natural number. We must show . Since , we know . Since both and are non-negative, so is their product. Hence , which implies , which is equivalent to , as desired.  The mathematical shorthand for \"for all\" is , which allows us to more concisely write in the following way: The last example shows our general strategy for proving \"for all\" statements.  Proof Outline for \"For All\" Proofs  To prove: , this thing about happens.   Proof outline. Let We must show this thing about happens.     Thus this thing about happens, as desired.  While the proof outlines for existence and for all statements share many similarities, the philosophies are quite different. To prove existence, we need only produce one element that exists with the requisite properties. To prove a for all statement, we have to show every element has the requisite properties. Negations Consider the following statement. . Equivalently, we could write Is true? A quick look at the graph of will convince us that is false.   It is not true that for every real number , , because there exists a real number for which the opposite conclusion, namely , holds. For example, , or any has the opposite property that . The negation of a mathemical statement , is a new mathematical statement labeled , whose truth value is opposite that of . For the specific statement above, we have Equivalently, The benefit of the second version of not above is that it avoids inequalities, which can make writing the negation easier because one is not tempted to just reverse every inequality without thinking.  Please notice the important fact that the negation of a \"for all\" statement is a \"there exists\" statement. This is worth remembering.  Negation of \"For All\" Statements   , this thing about happens.   s.t. that thing about doesn't happen.    If we're asked to decide whehter a statement is true or false and prove our claim, it is helpful to alert the reader of our proof to our strategy. Let's see a proof that is false.  We prove false by proving its negation, which is , true. Let . We must show . Since , we have , as desired.    To prove a statement false, we will almost always try to prove its negation true. Only in rare instances in this course will we employ a different strategy. Let's see one more example. Consider the statement Is true? If it were, we could produce a real number whose square is a negative number. This is not possible, because every real number has a non-negative square. In this case, the negation of is This example highlights the fact that the negation of a \"for all\" statement is a \"there exists\" statement, a fact worth remembering.  Negation of \"There Exists\" Statements   s.t. this thing about happens.   , that thing about doesn't happen.    "
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
  "id": "sec-quantifiers-7",
  "level": "2",
  "url": "sec-quantifiers.html#sec-quantifiers-7",
  "type": "Proof",
  "number": "0.1.2",
  "title": "",
  "body": "Let be any natural number. We must show . Since , we know . Since both and are non-negative, so is their product. Hence , which implies , which is equivalent to , as desired. "
},
{
  "id": "sec-quantifiers-10-2",
  "level": "2",
  "url": "sec-quantifiers.html#sec-quantifiers-10-2",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " We prove false by proving its negation, which is , true. Let . We must show . Since , we have , as desired.  "
},
{
  "id": "ch_intro-4",
  "level": "1",
  "url": "ch_intro-4.html",
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
