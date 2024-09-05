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
  "id": "sec-set_notation",
  "level": "1",
  "url": "sec-set_notation.html",
  "type": "Section",
  "number": "0.1",
  "title": "Set Notation",
  "body": " Set Notation  A set  set is a collection of objects called elements  elements . The main actor is the set of real numbers , whose elements include familiar faces like .  "
},
{
  "id": "sec-quantifiers",
  "level": "1",
  "url": "sec-quantifiers.html",
  "type": "Section",
  "number": "0.2",
  "title": "Quantifiers in Proofs",
  "body": " Quantifiers in Proofs  A mathematical statement is a phrase or sentence that can reasonably be called true or false. For convenience, they are sometimes assigned a letter like or to make them easier to refer to. Consider the following mathematical statement. Is this statement true? If it is, we should be able to produce a number , compute , and verify that the quantity is positive. The number has this property, along with many other real numbers. For shorthand notation, we will write to mean ``there exists\" and s.t. to mean ``such that\". In shorthand, becomes or equivalently, Now that we are convinced is true, let's see our very first proof. Let . We must show . Since , we have , as desired. While this proof might seem like too much trouble, we will reap many benefits by developing some general proof principles in simple situations. First, we will use the overall structure of this existence proof for almost every existence argument in this class. It is worth writing down a general ``proof outline\" of an existence argument.  Proof Outline for Existence  To prove: s.t. this thing about happens.A tree is a connected graph containing no cycles. Sometimes this is stated as a tree is an acyclic connected graph;  acyclic is just a fancy word for containing no cycles.    There are a few things to take away from this proof. The negation of a mathematical statement is a new statment, which we will denote by , whose truth value is opposite that of . A mathematical proof is a logical argument to convince the reader that a mathematical statement is true or false.  Consider the statement   This is a proof in a proof block. What does it look like?  Trying out line break.  To see if it works.    Suppose this were not the case. That is, suppose there are only finitely many primes. Then there must be a last, largest prime, call it . Consider the number .  Now is certainly larger than . Also, is not divisible by any number less than or equal to , since every number less than or equal to divides . Thus the prime factorization of contains prime numbers (possibly just itself) all greater than . So is not the largest prime, a contradiction. Therefore there are infinitely many primes.   "
},
{
  "id": "sec-quantifiers-2",
  "level": "2",
  "url": "sec-quantifiers.html#sec-quantifiers-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "tree "
},
{
  "id": "sec-quantifiers-4",
  "level": "2",
  "url": "sec-quantifiers.html#sec-quantifiers-4",
  "type": "Proof",
  "number": "0.2.1",
  "title": "",
  "body": " This is a proof in a proof block. What does it look like?  Trying out line break.  To see if it works.  "
},
{
  "id": "qGS",
  "level": "2",
  "url": "sec-quantifiers.html#qGS",
  "type": "Proof",
  "number": "0.2.2",
  "title": "",
  "body": " Suppose this were not the case. That is, suppose there are only finitely many primes. Then there must be a last, largest prime, call it . Consider the number .  Now is certainly larger than . Also, is not divisible by any number less than or equal to , since every number less than or equal to divides . Thus the prime factorization of contains prime numbers (possibly just itself) all greater than . So is not the largest prime, a contradiction. Therefore there are infinitely many primes.  "
},
{
  "id": "sec-preimages",
  "level": "1",
  "url": "sec-preimages.html",
  "type": "Section",
  "number": "0.3",
  "title": "Pre-Images",
  "body": " Pre-Images  For a function and a subset of , the pre-image of under is the set of all inputs whose image belongs to ; in notation, . Consider the example and . We want to determine all values of for which , and we can do this analytically. If , then either or ; hence . Graphically, any point on the graph of that lies in the horizontal strip yields a value of for which .   The solid line at indicates we include all inputs for which , and the dotted line at indicates we exclude all inputs for which .     Check Your Understanding     Preview Exercise    "
},
{
  "id": "preimages_graph-figure",
  "level": "2",
  "url": "sec-preimages.html#preimages_graph-figure",
  "type": "Figure",
  "number": "0.3.1",
  "title": "",
  "body": " The solid line at indicates we include all inputs for which , and the dotted line at indicates we exclude all inputs for which .   "
},
{
  "id": "preimages_understanding-figure",
  "level": "2",
  "url": "sec-preimages.html#preimages_understanding-figure",
  "type": "Figure",
  "number": "0.3.2",
  "title": "Check Your Understanding",
  "body": " Check Your Understanding   "
},
{
  "id": "preimages_preview-figure",
  "level": "2",
  "url": "sec-preimages.html#preimages_preview-figure",
  "type": "Figure",
  "number": "0.3.3",
  "title": "Preview Exercise",
  "body": " Preview Exercise   "
},
{
  "id": "sec-1-2",
  "level": "1",
  "url": "sec-1-2.html",
  "type": "Section",
  "number": "0.4",
  "title": "Intervals",
  "body": " Intervals       Parsons Problems  parsons problems  Parsons Problem for . Prove that if is even and is odd, then is odd.   Suppose is an even integer.    Suppose is an odd integer.    Since is even, then for some .  Since is even, then for some .    Since is odd, then for some .  Since is odd, then for some .    Let \\xi= a**2 + b.    Then .    Since is an integer, is odd by definition.    is even.    Parsons Problem, Partial Ordering  Parsons problems can specify a partial ordering that allows for multiple valid solutions.  Try putting the blocks in a valid order to calculate and print c Only use the required blocks. There are many valid orderings.    import math    import antigravity    a = 3     b = 4    4 = b     cSquared = a ** 2 + b ** 2    c = math.sqrt(cSquared)    print(c)       Interval  Name  Definition  Sketch     Open Interval         Closed Interval         Half-Open Interval         Half-Open Interval         Open Ray         Closed Ray         Open Ray         Closed Ray         Suppose this were not the case. That is, suppose there are only finitely many primes. Then there must be a last, largest prime, call it . Consider the number .  Now is certainly larger than . Also, is not divisible by any number less than or equal to , since every number less than or equal to divides . Thus the prime factorization of contains prime numbers (possibly just itself) all greater than . So is not the largest prime, a contradiction. Therefore there are infinitely many primes.   A reference to the further reading is here .  "
},
{
  "id": "first-parsons",
  "level": "2",
  "url": "sec-1-2.html#first-parsons",
  "type": "Exercise",
  "number": "0.4.1",
  "title": "Parsons Problem.",
  "body": "Parsons Problem for . Prove that if is even and is odd, then is odd.   Suppose is an even integer.    Suppose is an odd integer.    Since is even, then for some .  Since is even, then for some .    Since is odd, then for some .  Since is odd, then for some .    Let \\xi= a**2 + b.    Then .    Since is an integer, is odd by definition.    is even.   "
},
{
  "id": "parsons-with-partial-order",
  "level": "2",
  "url": "sec-1-2.html#parsons-with-partial-order",
  "type": "Exercise",
  "number": "0.4.2",
  "title": "Parsons Problem, Partial Ordering.",
  "body": "Parsons Problem, Partial Ordering  Parsons problems can specify a partial ordering that allows for multiple valid solutions.  Try putting the blocks in a valid order to calculate and print c Only use the required blocks. There are many valid orderings.    import math    import antigravity    a = 3     b = 4    4 = b     cSquared = a ** 2 + b ** 2    c = math.sqrt(cSquared)    print(c)   "
},
{
  "id": "qGS",
  "level": "2",
  "url": "sec-1-2.html#qGS",
  "type": "Proof",
  "number": "0.4.1",
  "title": "",
  "body": " Suppose this were not the case. That is, suppose there are only finitely many primes. Then there must be a last, largest prime, call it . Consider the number .  Now is certainly larger than . Also, is not divisible by any number less than or equal to , since every number less than or equal to divides . Thus the prime factorization of contains prime numbers (possibly just itself) all greater than . So is not the largest prime, a contradiction. Therefore there are infinitely many primes.  "
},
{
  "id": "hPw",
  "level": "1",
  "url": "sec_intro-intro.html",
  "type": "Section",
  "number": "0.5",
  "title": "Example Formatting",
  "body": " Example Formatting    This is an Investigation!     Assemblage     is read and , and called a conjunction . conjunction  and (logical connective)    logical and (conjunction)        Example with Hint and Solution   Find recursive definitions and closed formulas for the arithmetic sequences below. Assume the first term listed is .    .  .      First we should check that these sequences really are arithmetic by taking differences of successive terms. Doing so will reveal the common difference .     , , etc. To get from each term to the next, we add three, so . The recursive definition is therefore with . The closed formula is .   Here the common difference is , since we add to 50 to get 43, and so on. Thus we have a recursive definition of with . The closed formula is .       Insert hint here!     A Sample Aside  Here is some text inside a sample aside. I'm going to put the Pythagorean identity below: .  This aside has two paragraphs. You can't do that with a footnote.     non-planar graph  planar graph non-planar graph   is not planar.      Insert lemma    "
},
{
  "id": "sec_intro-intro-2",
  "level": "2",
  "url": "sec_intro-intro.html#sec_intro-intro-2",
  "type": "Investigate!",
  "number": "0.1",
  "title": "",
  "body": "  This is an Investigation!   "
},
{
  "id": "sec_intro-intro-3-2",
  "level": "2",
  "url": "sec_intro-intro.html#sec_intro-intro-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "conjunction "
},
{
  "id": "sec_intro-intro-4",
  "level": "2",
  "url": "sec_intro-intro.html#sec_intro-intro-4",
  "type": "Example",
  "number": "0.5.1",
  "title": "Example with Hint and Solution.",
  "body": " Example with Hint and Solution   Find recursive definitions and closed formulas for the arithmetic sequences below. Assume the first term listed is .    .  .      First we should check that these sequences really are arithmetic by taking differences of successive terms. Doing so will reveal the common difference .     , , etc. To get from each term to the next, we add three, so . The recursive definition is therefore with . The closed formula is .   Here the common difference is , since we add to 50 to get 43, and so on. Thus we have a recursive definition of with . The closed formula is .       Insert hint here!   "
},
{
  "id": "sec_intro-intro-6",
  "level": "2",
  "url": "sec_intro-intro.html#sec_intro-intro-6",
  "type": "Theorem",
  "number": "0.5.2",
  "title": "",
  "body": "  non-planar graph  planar graph non-planar graph   is not planar.   "
},
{
  "id": "sec_intro-intro-7",
  "level": "2",
  "url": "sec_intro-intro.html#sec_intro-intro-7",
  "type": "Lemma",
  "number": "0.5.3",
  "title": "",
  "body": "  Insert lemma   "
},
{
  "id": "ch_intro-8",
  "level": "1",
  "url": "ch_intro-8.html",
  "type": "References",
  "number": "0",
  "title": "References and Suggested Readings",
  "body": " References and Suggested Readings  Burnside, W. Theory of Groups of Finite Order . 2nd ed. Cambridge University Press, Cambridge, 1911; Dover, New York, 1953. A classic. Also available at books.google.com.  "
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
