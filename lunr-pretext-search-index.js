var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "frontmatter-4",
  "level": "1",
  "url": "frontmatter-4.html",
  "type": "Acknowledgements",
  "number": "",
  "title": "Acknowledgements",
  "body": " We are grateful to Layton Borst, whose work throughout Summer 2024 got this book up and running.  "
},
{
  "id": "preface",
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
  "body": " Quantifiers in Proofs   Introduction to Quantifiers  A mathematical statement is a phrase or sentence that can reasonably be called true or false. For convenience, they are sometimes assigned a letter like or to make them easier to refer to. Consider the following mathematical statement. Is this statement true? If it is, we should be able to produce a number , compute , and verify that the quantity is positive. The number has this property, along with many other real numbers. For shorthand notation, we will write to mean ``there exists\" and s.t. to mean ``such that\". The phrase \"such that\" will always follow a ; the \"such that\" phrase describes or defines the object that exists. In shorthand, becomes or equivalently, Since we are convinced is true, let's see our very first proof.  Let . We must show . Since , then , and since , we have , as desired.  The last sentence in the above proof is quite wordy. Being wordy can make it more clear, but it also can draw out a situation which is uncomplicated. We could opt to replace the last line with something like \"Since , then , as desired.\" This concise formatting will often be preferred due to how compact it is, but it requires us to read a string of (in)equalities out loud in our head: equals , and is greater than . We then conclude must be greater than , which had to be shown.  While this proof might seem like too much effort to prove a simple statement, we will reap many benefits by developing some general proof principles in straightforward situations. First, we will use the overall structure of this existence proof for almost every existence argument in this class. It is worth writing down a general ``proof outline\" of an existence argument.    Proof Outline for \"Existence\" Proofs  To prove: s.t. these things about happen.   Proof outline. Define (either by an equation or as a consequence of a definition ). We must show these things about happens.     Thus these things about happen, as desired.  Typically, our proofs will end with \"as desired\" to reiterate that we showed what we set out to show. This is a stylistic choice and not strictly necessary - proof writing does not have a strict set of rules. Our focus for the first several classes will be on constructing logical arguments; we will worry about some nuances of proof writing at a later day.  Let's look at another mathematical statement. Is true? Checking a few cases makes it seem so: , , . But checking cases can never finish the job. The statement is really infinitely many statements bundled together, one for each natural number, and a proof is a finite list of sentences. We cannot prove infinitely many statements one at a time, so proving a \"for all\" statement requires a new strategy.  Instead of many arguments, we write one argument that serves as a template for all of them. We introduce a variable , like , to stand for a natural number, and we argue about using only the fact that is a natural number. We do not know the exact value of ; all we know about is where it came from. Because the argument never uses anything else about , we could erase everywhere and write in any specific natural number, like or , and every sentence of the argument would still be true. This is how one finite argument proves infinitely many statements.  Let be any natural number. We must show . Since , we know . Since both and are non-negative, so is their product. Hence , which implies , which is equivalent to , as desired.  The mathematical shorthand for \"for all\" is , which allows us to more concisely write in the following way: The last example shows our general strategy for proving \"for all\" statements.   Proof Outline for \"For All\" Proofs  To prove: , this thing about happens.   Proof outline. Let We must show this thing about happens.     Thus this thing about happens, as desired.   While the proof outlines for existence and for all statements share many similarities, the philosophies are quite different. To prove existence, we need only produce one element that exists with the requisite properties. To prove a for all statement, we have to show every element has the requisite properties, and we do that with one argument about an arbitrary element.  The word arbitrary is easy to misread. An arbitrary natural number is not a random natural number, and it is not every natural number at once. After the sentence Let be any natural number, the letter names one natural number. We just don't know which one, and the argument must not depend on which one it is. It may help to imagine that someone else picked the number and kept it hidden from us; our argument has to work no matter what they picked. Once the argument is finished, the for all has been established. No single sentence in the proof establishes it. It is established by the fact that the whole argument works for every possible value of .   Don't put the for all back  A common slip is to write something like this:   Let . We must show that for all , .   After Let , the letter names one natural number, and the for all has been taken care of. What is left to show is for that one . Writing for all again causes two problems.    It undoes the previous sentence. The goal for all , is exactly the statement we started with, so the sentence Let made no progress. The inside for all is not the we just introduced. It is a placeholder that ranges over every natural number: the statement for all , means exactly the same thing as for all , .      It gives one letter two meanings. From then on, the reader cannot tell whether means the one natural number we introduced or every natural number.     There is also a mismatch at the end. The argument shows for one arbitrary and then says as desired. But the stated goal was a claim about every natural number, and no sentence about a single can establish that. As described above, the for all comes from the argument as a whole.  The fix is to state the full goal before the Let sentence, if you want to state it at all, and to state only what is left after it:   We must show that for all , . Let . We must show .      Negations  Consider the following statement. . Equivalently, we could write Is true? After a quick look at the graph of ,   we can see that is false; it is not true that for every real number , , because there exists a real number for which the opposite conclusion, namely , holds. For example, , or any has the opposite property that . The negation of a mathematical statement , is a new mathematical statement labeled , whose truth value is opposite that of . For the specific statement above, we have Equivalently, The benefit of the second version of not above is that it avoids inequalities, which can make writing the negation easier because one is not tempted to just reverse every inequality without thinking.  Please notice the important fact that the negation of a \"for all\" statement is a \"there exists\" statement. This is worth remembering.  Negation of \"For All\" Statements   , this thing about happens.   s.t. that thing about doesn't happen.    If we're asked to decide whether or not a statement is true and prove our claim, it is helpful to alert the reader of our proof to our strategy. Let's see a proof that is false.  We prove false by proving its negation, which is , true. Let . We must show . Since , we have , as desired.    To prove a statement false, we will almost always try to prove its negation true. Only in rare instances in this course will we employ a different strategy. Let's see one more example. Consider the statement Is true? If it were, we could produce a real number whose square is a negative number. This is not possible, because every real number has a non-negative square. In this case, the negation of is This example highlights the fact that the negation of a \"there exists\" statement is a \"for all\" statement, a fact worth remembering.  Negation of \"There Exists\" Statements   s.t. this thing about happens.   , that thing about doesn't happen.      Multiple Quantifiers  Most of the statements we will encounter throughout this course involve multiple quantifiers, like the following statement: Ultimately, this is a \"for all\" statement, so we could investigate its truth value by seeing if its true for a few values of . When , is there a real number such that ? Yes, does the trick. What about when ? Then is a we are looking for. After trying a few examples, may seem true; given , if we select to be , then . We can write a proof outline for by working through the quantifiers in order.   Part of statement   Sentence in our proof.      Let     s.t.  Define .     We must show   Putting it together in a proof might look like this. Let and define We must show Starting from the left-hand side, we have , as desired.   Unfortunately, is false! Can you see why? There is one particular value of for which is undefined, so the above proof isn't a proof at all! Let's think about the negation of one step at a time.   Part of statement   Part of statement not        s.t.    s.t.          Now we're ready for its proof outline and proof.    Part of statement not   Sentence in our proof.    s.t.  Define       Let .     We must show    Define and let We must show Since , then , which shows .   Notice what each sentence of these proofs does to the goal. Each Let or Define sentence takes care of the first quantifier that remains, and the next We must show sentence states what is left. The goal shrinks by one quantifier at a time. Here is that bookkeeping for the true statement     Sentence in our proof  What we still must show    (before the proof begins)     Let .     Define .  and     Let . We must show there exists such that . Define . We must show and . Since , we have , so . Also, since , we have , as desired.    Putting the for all back can change the statement  With several quantifiers, re-quantifying a variable after a Let sentence can do more than confuse the reader. It can make the proof claim something false. Suppose the proof of began like this:   Let . We must show that for all , there exists such that . Define .   The number was built from the we introduced, which is one fixed number. But the stated goal now begins with for all , so this one would have to work for every positive . To see the problem concretely, replace the we introduced with a specific number, say . Then , and the goal demands that for all , . That is false: is a counterexample. Read literally, the proof is now attempting which is a false statement: it is with its quantifiers in the opposite order. In itself, each gets its own , and that is exactly why is allowed to depend on . Stating the goal one quantifier at a time, as in the table above, keeps that order straight.   As a parting comment, the language we use in proofs isn't set in stone. The word \"define\" could have been \"let\" or \"consider\" or \"imagine\", as a student once creatively suggested. As we will see soon, sometimes the element that exists can't be written or expressed by an equation; it exists by virtue of some assumption that we made. But while our wording might change in the future, the basic structure of proving quantified statements will always remain the same.   "
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
  "id": "sec-quantifiers-2-9",
  "level": "2",
  "url": "sec-quantifiers.html#sec-quantifiers-2-9",
  "type": "Proof",
  "number": "2",
  "title": "",
  "body": "Let be any natural number. We must show . Since , we know . Since both and are non-negative, so is their product. Hence , which implies , which is equivalent to , as desired. "
},
{
  "id": "warning-requantify",
  "level": "2",
  "url": "sec-quantifiers.html#warning-requantify",
  "type": "Warning",
  "number": "0.1.1",
  "title": "Don’t put the “for all” back.",
  "body": " Don't put the for all back  A common slip is to write something like this:   Let . We must show that for all , .   After Let , the letter names one natural number, and the for all has been taken care of. What is left to show is for that one . Writing for all again causes two problems.    It undoes the previous sentence. The goal for all , is exactly the statement we started with, so the sentence Let made no progress. The inside for all is not the we just introduced. It is a placeholder that ranges over every natural number: the statement for all , means exactly the same thing as for all , .      It gives one letter two meanings. From then on, the reader cannot tell whether means the one natural number we introduced or every natural number.     There is also a mismatch at the end. The argument shows for one arbitrary and then says as desired. But the stated goal was a claim about every natural number, and no sentence about a single can establish that. As described above, the for all comes from the argument as a whole.  The fix is to state the full goal before the Let sentence, if you want to state it at all, and to state only what is left after it:   We must show that for all , . Let . We must show .   "
},
{
  "id": "sec-quantifiers-3-2-5",
  "level": "2",
  "url": "sec-quantifiers.html#sec-quantifiers-3-2-5",
  "type": "Figure",
  "number": "0.1.2",
  "title": "",
  "body": "  "
},
{
  "id": "sec-quantifiers-3-4-2",
  "level": "2",
  "url": "sec-quantifiers.html#sec-quantifiers-3-4-2",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " We prove false by proving its negation, which is , true. Let . We must show . Since , we have , as desired.  "
},
{
  "id": "sec-quantifiers-4-2-17",
  "level": "2",
  "url": "sec-quantifiers.html#sec-quantifiers-4-2-17",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": "Let and define We must show Starting from the left-hand side, we have , as desired. "
},
{
  "id": "sec-quantifiers-4-3-8",
  "level": "2",
  "url": "sec-quantifiers.html#sec-quantifiers-4-3-8",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": "Define and let We must show Since , then , which shows . "
},
{
  "id": "sec-quantifiers-4-6",
  "level": "2",
  "url": "sec-quantifiers.html#sec-quantifiers-4-6",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " Let . We must show there exists such that . Define . We must show and . Since , we have , so . Also, since , we have , as desired.  "
},
{
  "id": "warning-requantify-swap",
  "level": "2",
  "url": "sec-quantifiers.html#warning-requantify-swap",
  "type": "Warning",
  "number": "0.1.3",
  "title": "Putting the “for all” back can change the statement.",
  "body": " Putting the for all back can change the statement  With several quantifiers, re-quantifying a variable after a Let sentence can do more than confuse the reader. It can make the proof claim something false. Suppose the proof of began like this:   Let . We must show that for all , there exists such that . Define .   The number was built from the we introduced, which is one fixed number. But the stated goal now begins with for all , so this one would have to work for every positive . To see the problem concretely, replace the we introduced with a specific number, say . Then , and the goal demands that for all , . That is false: is a counterexample. Read literally, the proof is now attempting which is a false statement: it is with its quantifiers in the opposite order. In itself, each gets its own , and that is exactly why is allowed to depend on . Stating the goal one quantifier at a time, as in the table above, keeps that order straight.  "
},
{
  "id": "sec-open_sets",
  "level": "1",
  "url": "sec-open_sets.html",
  "type": "Section",
  "number": "0.2",
  "title": "Open Sets",
  "body": " Open Sets  Just as a number can have many properties, like even, prime, rational, etc., so to can a subset of . Some of the most important subsets of belong to the family of open sets.    Open set   A subset of is an open set   open set  if s.t. . Or, spelling out the hidden quantifier in the symbol, is open if s.t. .    Roughly speaking, a set is open we can put every element in the set inside a tiny open interval which is contained completely inside . Let's look at a general proof outline for showing is open.   is open if...  Proof outline      Let     s.t.  Define      Let      We must show    For example, the interval is open for any . Let's see a proof.  Let Let Define Let We must show   Since we know And since we have which implies as desired.    In the previous proof, represented the distance from the element to the left endpoint of . The interval is also open whenever , but now there are two endpoints to consider for an element : the distance to the left endpoint, and the distance to the right endpoint. We will pick to be the lesser of these two distances, which will ensure is contained completely inside of .  Let and let . Define and let We must show or rather and   By virtue of being the minimum of and , we know . Rearranging yields and since we must have .  Similarly, we know , which yields after rearranging. Hence , which implies . Then since and we know as desired.    Observe that the only properties of that are needed are that both and There are certainly other numbers with those two properties that we could have chosen for such as Using a minimum makes it clear what is important about .  Not every set of real numbers is open. Negating the definition of open gives us the following.  Not open set   A subset of is not an open set if s.t. s.t. .   For example, the interval is not open because of the inclusion of the pesky left endpoint; no open interval is contained completely within .  Let and consider . Let and let . Observe because is the midpoint of and . We must show . Since , we have which shows and as desired.    Get some practice with negations and proof outlines below! These should match the preview.   Proof outline practice   Problem 1  Let be a subset of and let . We say that is bounded away from  if s.t. . Put the given blocks in a correct proof outline order. Some blocks are not needed.    Restate what and are. (this is first)    Define .    Let    We must show    Let    Define .    We must show      Problem 2  By negating the definition of \"bounded away from\" above, put the given blocks in a correct order to complete the sentence \" is not bounded away from if...\"       s.t.        s.t.            "
},
{
  "id": "sec-open_sets-3",
  "level": "2",
  "url": "sec-open_sets.html#sec-open_sets-3",
  "type": "Definition",
  "number": "0.2.1",
  "title": "Open set.",
  "body": " Open set   A subset of is an open set   open set  if s.t. . Or, spelling out the hidden quantifier in the symbol, is open if s.t. .   "
},
{
  "id": "sec-open_sets-4-7",
  "level": "2",
  "url": "sec-open_sets.html#sec-open_sets-4-7",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " Let Let Define Let We must show   Since we know And since we have which implies as desired.  "
},
{
  "id": "sec-open_sets-5-12",
  "level": "2",
  "url": "sec-open_sets.html#sec-open_sets-5-12",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " Let and let . Define and let We must show or rather and   By virtue of being the minimum of and , we know . Rearranging yields and since we must have .  Similarly, we know , which yields after rearranging. Hence , which implies . Then since and we know as desired.  "
},
{
  "id": "sec-open_sets-7",
  "level": "2",
  "url": "sec-open_sets.html#sec-open_sets-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "not an open set "
},
{
  "id": "first-parsons",
  "level": "2",
  "url": "sec-open_sets.html#first-parsons",
  "type": "Exercise",
  "number": "0.2.1",
  "title": "Problem 1.",
  "body": " Problem 1  Let be a subset of and let . We say that is bounded away from  if s.t. . Put the given blocks in a correct proof outline order. Some blocks are not needed.    Restate what and are. (this is first)    Define .    Let    We must show    Let    Define .    We must show    "
},
{
  "id": "second-parsons",
  "level": "2",
  "url": "sec-open_sets.html#second-parsons",
  "type": "Exercise",
  "number": "0.2.2",
  "title": "Problem 2.",
  "body": " Problem 2  By negating the definition of \"bounded away from\" above, put the given blocks in a correct order to complete the sentence \" is not bounded away from if...\"       s.t.        s.t.          "
},
{
  "id": "sec-integration-intro",
  "level": "1",
  "url": "sec-integration-intro.html",
  "type": "Section",
  "number": "0.3",
  "title": "Integration",
  "body": " Integration  As we learned in Calculus, a definite integral geometrically represents the area between a curve and the horizontal axis over an interval .    The area between the curve and the horizontal axis is the definite integral of over the interval .    If the function is a straight line, then the shape is a polygon whose area we can compute exactly. But when the function is curvy, how do we define the area? The idea is to rectangles, whose areas are easily computed, to approximate the true area under the curve. In Calculus I, the most common rectangle sums are the left and right hand Riemann sums. Those sums are useful because they are easy to draw and compute; we can tell a computer (human or machine) a simple algorithm to follow. But how good of an approximation is a left or right hand sum? If some of the rectangles are above the curve while others are below, this is a challenging question to answer. To develop the theory of integration, we will want to know without question whether a rectangle sum is an underestimate or overestimate. The way to guarantee this is to always stick rectangles below the curve for underestimates and above the curve for overesitmates, as in the graphic below.  The lower sum rectangles are shaded in red, while the upper sum rectangles are shaded in blue.     The set of subdivision points form what's called a partition of - a finite set of strictly increasing values starting at and ending with . On a given subinterval , the height of the \"lower rectangle\" is given by since this value is guaranteed to be less than or equal to any other -value of the function on that subinterval. Hence the area of an individual \"lower rectangle\" is just and if we sum the areas of each, we get the lower sum for over : Now each lower sum is an underestimate for the true area, so the supremum of all possible lower sums will give us a \"best underestimate\" for the area; we call this the lower integral of over :   Similarly, we take for the heights of the \"upper rectangles\", and get the upper sum  Each upper sum is an overestimate for the true area, so the infimum of all possible upper sums will give us a \"best overestimate\" for the area; we call this the upper integral of over : As we will see in class, there are functions whose upper and lower integrals can differ! If the upper and lower integrals of are the same, we say that is integrable over , and in this case, we introduce the following notation to represent the value of and ;   Apparently not every function is integrable (as we shall see in class), so which functions are integrable? Can we classify them? As a start towards answering this question, we could use an easier to check criterion for integrability. Right now, given some function , we would have to compute its upper and lower integrals, which can be a formidable task (without more powerful integration tools) even for a tame function like . Luckily, there is a criterion we can use to more easily check when a function is integrable; we will not prove this result.   A function is integrable on if and only if for all , there exists a partition such that .   The benefit of the above theorem is that we need only find one partition on which the upper sum and lower sum are close. The downside is that checking that condition won't tell us what the value of the integral is, even though we will then know the function is integrable!  Let's put this theorem in action to see why discontinuous functions can still be integrable.   This is a Doenet activity.    "
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
  "id": "integration_graph-figure2",
  "level": "2",
  "url": "sec-integration-intro.html#integration_graph-figure2",
  "type": "Figure",
  "number": "0.3.2",
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
  "number": "0.3.3",
  "title": "",
  "body": "  A function is integrable on if and only if for all , there exists a partition such that .   "
},
{
  "id": "darboux_interactive",
  "level": "2",
  "url": "sec-integration-intro.html#darboux_interactive",
  "type": "Figure",
  "number": "0.3.4",
  "title": "",
  "body": " This is a Doenet activity.   "
},
{
  "id": "sec-limits_of_functions",
  "level": "1",
  "url": "sec-limits_of_functions.html",
  "type": "Section",
  "number": "0.4",
  "title": "Function Limits",
  "body": " Function Limits  As you have seen in a Calculus class, the notation roughly means that is close to when is close to . But how close should be to ? And how close must be to ? We need quantifiers for a precise statement.    Let We say the limit of at is , and write , if s.t. .    Let's focus on the very last piece, namely . Here, is measuring how far away and can be; it is required that , meaning must lie in the horizontal strip between the horizontal lines and . And for what values of must this be true? We need to pick to guarantee it is true for any satisfying . Let's explore this with an activity.   This is a Doenet activity.    "
},
{
  "id": "sec-limits_of_functions-3",
  "level": "2",
  "url": "sec-limits_of_functions.html#sec-limits_of_functions-3",
  "type": "Definition",
  "number": "0.4.1",
  "title": "",
  "body": "  Let We say the limit of at is , and write , if s.t. .   "
},
{
  "id": "function_limits_activity",
  "level": "2",
  "url": "sec-limits_of_functions.html#function_limits_activity",
  "type": "Figure",
  "number": "0.4.2",
  "title": "",
  "body": " This is a Doenet activity.   "
},
{
  "id": "sec-convergence_hypothesis",
  "level": "1",
  "url": "sec-convergence_hypothesis.html",
  "type": "Section",
  "number": "0.5",
  "title": "Convergence as a Hypothesis",
  "body": " Convergence as a Hypothesis  Recall that if s.t. . In each problem below, a convergence statement is something we know , and the proof applies it to a positive number of its own choosing.   Proof practice: using convergence    Squaring a sequence that converges to 0  Suppose . Put the given blocks in a correct order to prove that . Some blocks are not needed.    Assume .    We must prove that .    Let .    Because and , by definition there exists such that for all , .    With this , we will show that for all , .    Let with .    Since , we have .    Squaring nonnegative numbers preserves the inequality, so .    Thus for all , .    By definition, .    Because and , by definition there exists such that for all , .    Choose .    Because and , by definition there exists such that for all , .       A sequence and its absolute values  Put the given blocks in a correct order to prove that if and only if .    First, assume .    We must prove that .    Let .    Because and , by definition there exists such that for all , .    With this , we will show that for all , .    Let with .    Then .    Thus for all , , so by definition .    Conversely, assume .    We must prove that .    Let .    Because and , by definition there exists such that for all , .    With this , we will show that for all , .    Let with .    Then .    Thus for all , , so by definition .       Terms that stay above  Suppose and . Put the given blocks in a correct order to prove that there exists such that for all , . Some blocks are not needed.    Assume and .    We must prove that there exists such that for all , .    Because and , by definition there exists such that for all , .    With this , we will show that for all , .    Let with .    Then , so .    Adding to both sides gives .    Thus for all , , as desired.    Let .    Choose .    Because and , by definition there exists such that for all , .      "
},
{
  "id": "parsons-squares-null",
  "level": "2",
  "url": "sec-convergence_hypothesis.html#parsons-squares-null",
  "type": "Exercise",
  "number": "0.5.1",
  "title": "Squaring a sequence that converges to 0.",
  "body": " Squaring a sequence that converges to 0  Suppose . Put the given blocks in a correct order to prove that . Some blocks are not needed.    Assume .    We must prove that .    Let .    Because and , by definition there exists such that for all , .    With this , we will show that for all , .    Let with .    Since , we have .    Squaring nonnegative numbers preserves the inequality, so .    Thus for all , .    By definition, .    Because and , by definition there exists such that for all , .    Choose .    Because and , by definition there exists such that for all , .    "
},
{
  "id": "parsons-abs-null",
  "level": "2",
  "url": "sec-convergence_hypothesis.html#parsons-abs-null",
  "type": "Exercise",
  "number": "0.5.2",
  "title": "A sequence and its absolute values.",
  "body": " A sequence and its absolute values  Put the given blocks in a correct order to prove that if and only if .    First, assume .    We must prove that .    Let .    Because and , by definition there exists such that for all , .    With this , we will show that for all , .    Let with .    Then .    Thus for all , , so by definition .    Conversely, assume .    We must prove that .    Let .    Because and , by definition there exists such that for all , .    With this , we will show that for all , .    Let with .    Then .    Thus for all , , so by definition .    "
},
{
  "id": "parsons-stay-above",
  "level": "2",
  "url": "sec-convergence_hypothesis.html#parsons-stay-above",
  "type": "Exercise",
  "number": "0.5.3",
  "title": "Terms that stay above <span class=\"process-math\">\\(a\\)<\/span>.",
  "body": " Terms that stay above  Suppose and . Put the given blocks in a correct order to prove that there exists such that for all , . Some blocks are not needed.    Assume and .    We must prove that there exists such that for all , .    Because and , by definition there exists such that for all , .    With this , we will show that for all , .    Let with .    Then , so .    Adding to both sides gives .    Thus for all , , as desired.    Let .    Choose .    Because and , by definition there exists such that for all , .    "
},
{
  "id": "sec-epsilon_delta",
  "level": "1",
  "url": "sec-epsilon_delta.html",
  "type": "Section",
  "number": "0.6",
  "title": "The <span class=\"process-math\">\\(\\epsilon\\)<\/span>–<span class=\"process-math\">\\(\\delta\\)<\/span> Property",
  "body": " The – Property   Continuity at a point can be described without sequences. The description is equivalent to the sequential definition; in Ross this is Theorem 17.2.   The – property   Let . The function is continuous at if and only if s.t. with , .    This section uses the theorem in two ways. In and , it proves that a function is continuous. In , continuity is a hypothesis, and the theorem tells us what that hypothesis gives us. Each part ends with Parsons problems for practice.    A first proof:  By , to prove that is continuous at it is enough to prove A proof follows the quantifiers in order:     : begin with Let . You do not get to pick ; it is arbitrary.     : say Choose . You pick , and it may depend on .     with : say Let with . Again, is arbitrary.    Finally, show that .    The hard part is finding . That is done in scratch work, which is not part of the proof.  The order of the quantifiers matters. Because comes first, is chosen after is known, so may depend on . Problem 1 in the activity below works the same way: each row gives you , and you find .   A Doenet activity for .      Use your three answers to Problem 1 in the activity.   Find one that works for all three values of .    Is there one such that for all and all with , ?       (a) Any with works, such as . A that works for also works for and .  (b) No. Given any , take and . Then , but . So must depend on . That is why the – property puts for all before there exists .     Your answers to Problem 1 suggest a rule for choosing from . Here is how to find that rule and turn it into a proof.    Let . Then is continuous at every .     Proof outline  First write the parts of the proof that the quantifiers dictate. Leave holes, in brackets, for the rest.   Let . By the – property, we must prove that for all , there exists such that for all with , .  Let . [Choose .] Let with . We must show that .  [Use to show that .]   The outline has two holes: the choice of , and the argument at the end. Scratch work fills in both.    Scratch work  We need for every with . Simplify the left side: So we need , which is the same as . If , then every with satisfies , which is what we need. This reasoning starts from the goal and works backward, so it is not a proof. The proof below runs the same steps forward.  This matches Problem 1: for , and , the largest that works is , and . Any smaller positive , such as , works too, and a proof needs only one. Notice also that does not depend on .    Let . By the – property, we must prove that for all , there exists such that for all with , .  Let . Choose , which is positive since . Let with . We must show that .  Since , we have as desired.   The proof is the outline with its two holes filled in: the choice , and a last paragraph that runs the scratch work forward.   Proof practice: solving for    A decreasing linear function  Let . Put the given blocks in a correct order to prove that is continuous at every by verifying the – property. Some blocks are not needed.    Let .    By the – property, we must prove that for all , there exists such that for all with , .    Let .    Choose , which is positive since .    Let with .    We must show that .    Since , we get , as desired.    Choose , which is positive since .    Choose .       The square root function at  Let , with . Put the given blocks in a correct order to prove that is continuous at by verifying the – property. Some blocks are not needed.    By the – property, we must prove that for all , there exists such that for all with , .    Let .    Choose , which is positive since .    Let with .    We must show that .    Since and , we have .    Taking square roots of nonnegative numbers preserves the inequality, so .    Thus , as desired.    Choose , which is positive since .        When the bound depends on :  For , was a constant times , so came straight from solving for . For most functions, the factor multiplying changes with . Take and . Factoring gives The factor is the one that controls, but the factor changes with . The fix is to decide in advance that . Then gives , so and Now would finish the job. To get both and , choose The first problem at the end of this subsection turns this into a proof that works at every point ; at its is exactly this one. First, explore the graph.   A Doenet activity for .      Let , and . Find the largest such that for all with , . Why isn't it the same distance on both sides of ?    Solve for .    The allowed near fill . The right end is closer to : , while . So the largest is . The graph is steeper to the right of , so the right side decides.      Why does on its own fail? Try . Then explain why works for every .    With , . Then satisfies , but . The bound needed . With , both and hold, so .     How depends on  The same idea works at any . If , the triangle inequality gives so works. This depends on as well as on , while for the same worked at every . Is the dependence on just a feature of our formula, or is it forced?  The next section, , asks exactly this question: when can one serve every point at once?    Proof practice: a minimum in    The square function at every point  Let . Put the given blocks in a correct order to prove that is continuous at every by verifying the – property. Some blocks are not needed. Notice that your depends on .    Let .    By the – property, we must prove that for all , there exists such that for all with , .    Let .    Choose .    Let with .    We must show that .    Since , the triangle inequality gives .    Since also , we get , as desired.    Choose .       The reciprocal function at  Let , with . Put the given blocks in a correct order to prove that is continuous at by verifying the – property. Some blocks are not needed.    By the – property, we must prove that for all , there exists such that for all with , .    Let .    Choose .    Let with .    We must show that .    Since , we have , so .    Since also , we get , as desired.    Choose .        Continuity as a hypothesis  In , a convergence statement was something we knew , and each proof applied it to a positive number of its own choosing. Continuity works the same way. If is continuous at , then the – property ( ) holds for every positive number, so a proof may apply it to whichever positive number it needs: , , or a fixed number such as or . The sentence has the chosen number in both places:   Because is continuous at and , by the – property there exists such that for all with , .    Continuous functions keep their sign nearby   Suppose is continuous at and . Then there exists such that for all with , .    Assume is continuous at and . We must prove that there exists such that for all with , .  Because is continuous at and , by the – property there exists such that for all with , . With this , we will show that for all with , .  Let with . Then , so . Adding to both sides gives , as desired.     The goal has no in it, so the proof never says Let . The number in the box is , the distance from down to . This is the function version of the third problem in , where went in the box. A proof with the sequential definition is possible too, but it needs a proof by contradiction.    Proof practice: using continuity    Constant multiples of a continuous function  Let with , and suppose is continuous at . The function has the same domain as , and . Put the given blocks in a correct order to prove that is continuous at . Some blocks are not needed.    Assume is continuous at .    By the – property, we must prove that for all , there exists such that for all with , .    Let .    Because is continuous at and , by the – property there exists such that for all with , .    With this , we will show that for all with , .    Let with .    Then , as desired.    Because is continuous at and , by the – property there exists such that for all with , .    Choose .       Continuous functions are bounded nearby  Suppose is continuous at . Put the given blocks in a correct order to prove that there exist and such that for all with , . Some blocks are not needed.    Assume is continuous at .    We must prove that there exist and such that for all with , .    Because is continuous at and , by the – property there exists such that for all with , .    Choose , which is positive.    With this and this , we will show that for all with , .    Let with .    By the triangle inequality, , as desired.    Let .    Choose .       "
},
{
  "id": "thm-epsilon-delta",
  "level": "2",
  "url": "sec-epsilon_delta.html#thm-epsilon-delta",
  "type": "Theorem",
  "number": "0.6.1",
  "title": "The <span class=\"process-math\">\\(\\epsilon\\)<\/span>–<span class=\"process-math\">\\(\\delta\\)<\/span> property.",
  "body": " The – property   Let . The function is continuous at if and only if s.t. with , .   "
},
{
  "id": "fig-linear-activity",
  "level": "2",
  "url": "sec-epsilon_delta.html#fig-linear-activity",
  "type": "Figure",
  "number": "0.6.2",
  "title": "",
  "body": " A Doenet activity for .   "
},
{
  "id": "ex-one-delta-every-epsilon",
  "level": "2",
  "url": "sec-epsilon_delta.html#ex-one-delta-every-epsilon",
  "type": "Checkpoint",
  "number": "0.6.3",
  "title": "",
  "body": "  Use your three answers to Problem 1 in the activity.   Find one that works for all three values of .    Is there one such that for all and all with , ?       (a) Any with works, such as . A that works for also works for and .  (b) No. Given any , take and . Then , but . So must depend on . That is why the – property puts for all before there exists .    "
},
{
  "id": "prop-linear-continuous",
  "level": "2",
  "url": "sec-epsilon_delta.html#prop-linear-continuous",
  "type": "Proposition",
  "number": "0.6.4",
  "title": "",
  "body": "  Let . Then is continuous at every .   "
},
{
  "id": "subsec-first-proof-12",
  "level": "2",
  "url": "sec-epsilon_delta.html#subsec-first-proof-12",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " Let . By the – property, we must prove that for all , there exists such that for all with , .  Let . Choose , which is positive since . Let with . We must show that .  Since , we have as desired.  "
},
{
  "id": "parsons-linear-decreasing",
  "level": "2",
  "url": "sec-epsilon_delta.html#parsons-linear-decreasing",
  "type": "Exercise",
  "number": "1",
  "title": "A decreasing linear function.",
  "body": " A decreasing linear function  Let . Put the given blocks in a correct order to prove that is continuous at every by verifying the – property. Some blocks are not needed.    Let .    By the – property, we must prove that for all , there exists such that for all with , .    Let .    Choose , which is positive since .    Let with .    We must show that .    Since , we get , as desired.    Choose , which is positive since .    Choose .    "
},
{
  "id": "parsons-sqrt-at-0",
  "level": "2",
  "url": "sec-epsilon_delta.html#parsons-sqrt-at-0",
  "type": "Exercise",
  "number": "2",
  "title": "The square root function at <span class=\"process-math\">\\(0\\)<\/span>.",
  "body": " The square root function at  Let , with . Put the given blocks in a correct order to prove that is continuous at by verifying the – property. Some blocks are not needed.    By the – property, we must prove that for all , there exists such that for all with , .    Let .    Choose , which is positive since .    Let with .    We must show that .    Since and , we have .    Taking square roots of nonnegative numbers preserves the inequality, so .    Thus , as desired.    Choose , which is positive since .    "
},
{
  "id": "fig-x-squared-activity",
  "level": "2",
  "url": "sec-epsilon_delta.html#fig-x-squared-activity",
  "type": "Figure",
  "number": "0.6.5",
  "title": "",
  "body": " A Doenet activity for .   "
},
{
  "id": "ex-largest-delta-x2",
  "level": "2",
  "url": "sec-epsilon_delta.html#ex-largest-delta-x2",
  "type": "Checkpoint",
  "number": "0.6.6",
  "title": "",
  "body": "  Let , and . Find the largest such that for all with , . Why isn't it the same distance on both sides of ?    Solve for .    The allowed near fill . The right end is closer to : , while . So the largest is . The graph is steeper to the right of , so the right side decides.   "
},
{
  "id": "ex-why-the-one",
  "level": "2",
  "url": "sec-epsilon_delta.html#ex-why-the-one",
  "type": "Checkpoint",
  "number": "0.6.7",
  "title": "",
  "body": "  Why does on its own fail? Try . Then explain why works for every .    With , . Then satisfies , but . The bound needed . With , both and hold, so .   "
},
{
  "id": "parsons-x-squared-anywhere",
  "level": "2",
  "url": "sec-epsilon_delta.html#parsons-x-squared-anywhere",
  "type": "Exercise",
  "number": "1",
  "title": "The square function at every point.",
  "body": " The square function at every point  Let . Put the given blocks in a correct order to prove that is continuous at every by verifying the – property. Some blocks are not needed. Notice that your depends on .    Let .    By the – property, we must prove that for all , there exists such that for all with , .    Let .    Choose .    Let with .    We must show that .    Since , the triangle inequality gives .    Since also , we get , as desired.    Choose .    "
},
{
  "id": "parsons-reciprocal-at-1",
  "level": "2",
  "url": "sec-epsilon_delta.html#parsons-reciprocal-at-1",
  "type": "Exercise",
  "number": "2",
  "title": "The reciprocal function at <span class=\"process-math\">\\(1\\)<\/span>.",
  "body": " The reciprocal function at  Let , with . Put the given blocks in a correct order to prove that is continuous at by verifying the – property. Some blocks are not needed.    By the – property, we must prove that for all , there exists such that for all with , .    Let .    Choose .    Let with .    We must show that .    Since , we have , so .    Since also , we get , as desired.    Choose .    "
},
{
  "id": "thm-sign-preservation",
  "level": "2",
  "url": "sec-epsilon_delta.html#thm-sign-preservation",
  "type": "Theorem",
  "number": "0.6.8",
  "title": "Continuous functions keep their sign nearby.",
  "body": " Continuous functions keep their sign nearby   Suppose is continuous at and . Then there exists such that for all with , .    Assume is continuous at and . We must prove that there exists such that for all with , .  Because is continuous at and , by the – property there exists such that for all with , . With this , we will show that for all with , .  Let with . Then , so . Adding to both sides gives , as desired.   "
},
{
  "id": "subsec-continuity-hypothesis-5",
  "level": "2",
  "url": "sec-epsilon_delta.html#subsec-continuity-hypothesis-5",
  "type": "Remark",
  "number": "0.6.9",
  "title": "",
  "body": " The goal has no in it, so the proof never says Let . The number in the box is , the distance from down to . This is the function version of the third problem in , where went in the box. A proof with the sequential definition is possible too, but it needs a proof by contradiction.  "
},
{
  "id": "parsons-constant-multiple-continuous",
  "level": "2",
  "url": "sec-epsilon_delta.html#parsons-constant-multiple-continuous",
  "type": "Exercise",
  "number": "1",
  "title": "Constant multiples of a continuous function.",
  "body": " Constant multiples of a continuous function  Let with , and suppose is continuous at . The function has the same domain as , and . Put the given blocks in a correct order to prove that is continuous at . Some blocks are not needed.    Assume is continuous at .    By the – property, we must prove that for all , there exists such that for all with , .    Let .    Because is continuous at and , by the – property there exists such that for all with , .    With this , we will show that for all with , .    Let with .    Then , as desired.    Because is continuous at and , by the – property there exists such that for all with , .    Choose .    "
},
{
  "id": "parsons-locally-bounded",
  "level": "2",
  "url": "sec-epsilon_delta.html#parsons-locally-bounded",
  "type": "Exercise",
  "number": "2",
  "title": "Continuous functions are bounded nearby.",
  "body": " Continuous functions are bounded nearby  Suppose is continuous at . Put the given blocks in a correct order to prove that there exist and such that for all with , . Some blocks are not needed.    Assume is continuous at .    We must prove that there exist and such that for all with , .    Because is continuous at and , by the – property there exists such that for all with , .    Choose , which is positive.    With this and this , we will show that for all with , .    Let with .    By the triangle inequality, , as desired.    Let .    Choose .    "
},
{
  "id": "sec-uniform_continuity",
  "level": "1",
  "url": "sec-uniform_continuity.html",
  "type": "Section",
  "number": "0.7",
  "title": "Uniform Continuity",
  "body": " Uniform Continuity   How depends on  In , we proved that is continuous at every . Here is the scratch work again. When , This is less than when also , so we chose   This depends on . For , it is at , at , and at . The farther out is, the steeper the graph, and the closer must stay to .  The explorer shows the same thing. For , it finds the largest that works at each in and graphs it at the bottom. Press the play button to sweep across .   The – explorer for with .      Use the explorer with .   Where on is the largest smallest? About how big is it there?    Change to , then to . What happens to the smallest value? What does this suggest for ?       (a) At , where it is about . So one , such as , works at every point of .  (b) It shrinks: about on and on . This suggests that on , no single works.      One for every point  Let . Written with every quantifier, is continuous on if Since comes before , may depend on , as it does for . Uniform continuity moves the box past .   Uniform continuity   Let . The function is uniformly continuous on  uniformly continuous if     Now is chosen before , so one must work at every point of . For example, is uniformly continuous on , because the proof of chose , which does not depend on .    on    Let . Then is uniformly continuous on .     Scratch work  Every has , so the scratch work above gives, when , This is less than when also . So , the from the formula at , works at every . It does not depend on , so the proof can choose it before appears.    We must prove that for all , there exists such that for all with , .  Let . Choose , which is positive. Let with . We must show that . Since and , we have . Since also , as desired.     on  On , the 's from the formula shrink to as grows. To prove that no single works, prove the negation of uniform continuity: The points and come after , so they may depend on .    Let . Then is not uniformly continuous on .     Scratch work  Take . Given , put , so . For , This is at least once , so choose , far enough out that the graph is steep.    We prove the negation: there exists such that for all , there exist with such that .  Choose . Let . Choose and . We must show that and . First, . Second, and are positive, so as desired.   So is continuous at every point of and uniformly continuous on , but not uniformly continuous on . Ross proves that a function that is continuous on a closed, bounded interval is uniformly continuous there (Theorem 19.2).   "
},
{
  "id": "fig-uc-explorer",
  "level": "2",
  "url": "sec-uniform_continuity.html#fig-uc-explorer",
  "type": "Figure",
  "number": "0.7.1",
  "title": "",
  "body": " The – explorer for with .   "
},
{
  "id": "ex-uc-explore",
  "level": "2",
  "url": "sec-uniform_continuity.html#ex-uc-explore",
  "type": "Checkpoint",
  "number": "0.7.2",
  "title": "",
  "body": "  Use the explorer with .   Where on is the largest smallest? About how big is it there?    Change to , then to . What happens to the smallest value? What does this suggest for ?       (a) At , where it is about . So one , such as , works at every point of .  (b) It shrinks: about on and on . This suggests that on , no single works.   "
},
{
  "id": "def-uniformly-continuous",
  "level": "2",
  "url": "sec-uniform_continuity.html#def-uniformly-continuous",
  "type": "Definition",
  "number": "0.7.3",
  "title": "Uniform continuity.",
  "body": " Uniform continuity   Let . The function is uniformly continuous on  uniformly continuous if    "
},
{
  "id": "prop-x2-uc-interval",
  "level": "2",
  "url": "sec-uniform_continuity.html#prop-x2-uc-interval",
  "type": "Proposition",
  "number": "0.7.4",
  "title": "",
  "body": "  Let . Then is uniformly continuous on .   "
},
{
  "id": "subsec-uc-on-interval-4",
  "level": "2",
  "url": "sec-uniform_continuity.html#subsec-uc-on-interval-4",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " We must prove that for all , there exists such that for all with , .  Let . Choose , which is positive. Let with . We must show that . Since and , we have . Since also , as desired.  "
},
{
  "id": "prop-x2-not-uc-R",
  "level": "2",
  "url": "sec-uniform_continuity.html#prop-x2-not-uc-R",
  "type": "Proposition",
  "number": "0.7.5",
  "title": "",
  "body": "  Let . Then is not uniformly continuous on .   "
},
{
  "id": "subsec-uc-not-on-R-5",
  "level": "2",
  "url": "sec-uniform_continuity.html#subsec-uc-not-on-R-5",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " We prove the negation: there exists such that for all , there exist with such that .  Choose . Let . Choose and . We must show that and . First, . Second, and are positive, so as desired.  "
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
  "id": "backmatter-3",
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
