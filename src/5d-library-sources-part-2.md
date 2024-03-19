# Library Sources: Part 2

UK Libraries provides access to many millions of sources
that include books (ebooks and print books),
databases, journals, archival works, image collections,
multimedia collections, and more.
In the prior section,
I focused on using Infokat to search some of these collections.
In this section, I focus on a handful of the
databases that UK Libraries offers.

I can only focus on a handful of databases
because UK Libraries,
as a major research institution and because of its 
large student body and wide range of majors,
provides access to 734 total databases
(as of spring 2024).
Many of these databases are specialized 
(e.g., African American and Africana Studies, Appalachian Studies)
or cover a broad general research area (e.g., Chemistry, Education).
But a few are designed to be super broad;
that is, they are databases of databases.
I've already covered *Academic Search Complete* in prior sections,
which is one example of a database of databases.
In this section, I'll cover another one plus some 
citation databases.

Remember that if you have desktop Zotero 
plus the Zotero browser add-on installed,
Zotero will automatically recognize when you have a
web page open for a specific item in of these databases.
Thus, use Zotero when examining these databases 
to collect information on your Wikipedia topic.

While I will only cover a few databases in this section,
I encourage you to explore all that's offered.
To access the databases,
you can browse the list on UK Libraries' website:

[A-Z Databases][azDatabases]

You can also search that list using
topical keywords in the search box,
you can limit results to specific subject areas, and
you can focus on *database types*.
Like *document types* in the *ASC* database,
database types indicate something about the source.
Potential types include:

- Audio/Video
- Digitize primary sources
- E-book collections
- Government documents
- Image collections, and more.

<figure>
<img src="images/10-image-1.png"
alt="A-Z Databases"
title="A-Z Databases">
<figcaption>Fig. 1: A-Z Databases</figcaption> 
</figure>

## Factiva

[*Factiva*][factiva] is a helpful database for locating news,
market, and company information.
You can search against subjects, industries, within regions, and
you can add other limits.
There are a slew of some advanced search operators that 
help power up your search.
You can [read through the list of operators][factivaOperators] and
field codes to use when searching *Factiva*.

<figure>
<img src="images/10-image-2.png"
alt="Factiva Search Builder"
title="Factiva Search Builder">
<figcaption>Fig. 2: Factiva Search Builder</figcaption> 
</figure>

We can try an example search.
Let's say I'm interested in any news about
Google and open source software.
To search this in *Factiva*,
I can approach the query simply, like so
(being sure to wrap *open source* in quotes):

```
"open source" AND google 
```

This search was conducted on Aug 1, 2022, and
you can see there are 4,244 results. 

On the left side you can see a distribution of articles
by date of publication,
a list of relevant companies that appear
in the documents that were retrieved,
as well as lists of sources, subjects, industries,
languages, regions, and so forth.

If I wanted to export any of these documents,
I can click on specific check boxes and
export the results in various ways,
either as RTF or a PDF files,
or have it email the results to me or print them.
We can look at the publication data distribution and
note whether there are more results on a
given day than on others.
This may suggest a hot news day for this particular topic and
that may be something we want to explore. 

Let's go back to the search builder.
Say I found that the previous set of results
were hit or miss and, as a result,
I want to refine my search.
Now I can try the **adjacent operator**.
The adjacent operator tells the database to only return documents
where the query terms appear within a
set amount of space between each other.
The assumption is that the closer any terms are to each other,
the more likely the document will be about those terms.
Thus, if I replace the **and** operator with the **adj5** operator,
I ask *Factiva* to return documents where the term *open source* 
is within five words of the term *Google*: 

```
"open source" adj5 google
```

You can see that the results are much different than the previous one.
Here I only have 205 results.
The list of companies have also changed, and more.
If we investigate any of these documents,
you and confirm that our two terms,
which are highlighted,
appear within five words of each other
in all the results.

As stated,
there are [many operators in Factiva][factivaOperators]
besides **adj[N]**.
At that link, you can see that the standard Boolean
operators are available: **and**, **or**, **not**.
There are more proximity and other operators, such as:

-  **w/N**
  - ``"open soruce" w/5 google``
  - like the ``adj`` operators 
- **same**
  - ``"open source" same google``
  - terms must appear in same paragraph
- **near[N]**
  - ``"open source" near5 google``
  - like ``adj`` but bi-directional
- **atleastN**
  - ``atleast5 google and "open source"``
  - 'google' must appear at least 5 times in document 


Remember that you can create an account for *Factiva*
if you want to save or export your searches.
Zotero is also capable of extracting bibliographic information
from *Factiva* and
will recognize that a source document is,
for example,
a news article or like.

## Web of Science

[*Web of Science (WoS)*][wos] is an abstract & indexing citation database.
This means that the database does not directly provide full text access
but it does link to UK Library when full text is available for results.
As a citation database,
it also provides the number of citations each result has received,
and this is a way to find additional relevant documents.

The **Core Collection** is the default collection/database.
This is *Web of Sciences'* main database and
includes coverage of the sciences, the arts, and the humanities.
*WoS* offers other databases that mostly cover the sciences, and
you can search all of those databases at the same time, but
it's often better to focus on the core collection when starting.

Let's try a search. We can try our open source and Google search,
as seen in Figure 3:

<figure>
<img src="images/10-image-3.png"
alt="WoS search for 'open source' and google"
title="WoS search for 'open source' and google">
<figcaption>Fig. 3: <i>WoS</i> search for 'open source' and google</figcaption> 
</figure>

I can keep the default field search set to **All Fields**, or
focus on other fields, like **Topic**,
which searches titles, abstracts, and keywords.

As of August 1, 2022, this query retrieves 1,134 results.
Let's say that my search is a bit too broad still, and
I want to refine my query to narrow my results.
Just like in *Factiva*,
*WoS* offers a proximity operator called NEAR.
Let's try it out with the following query
on the *WoS* advanced search page:

<figure>
<img src="images/10-image-4.png"
alt="WoS advanced search for TS=("open source" NEAR google)"
title="WoS advanced search for TS=("open source" NEAR google)">
<figcaption>Fig. 4: <i>WoS</i> advanced search for TS=("open source" NEAR google)</figcaption> 
</figure>

Now there are only 9 results,
and if I examine the title, abstract, or keywords for the results, 
I'll see that the term "google" is placed within five words of 
the term "open source".
If I want to really narrow down my search,
I can change the field to **Title** only.

The default results list is to show articles
that are published more recently.
I can change this default sorting method so that
*WoS* sorts based on sources that have the highest citations first. 
Once I do this, I can go to the right side,
and look at the **Times Cited** link and
see which articles have been cited the most.
This is what makes *WoS* a citation database.
We don't have to use *WoS* as a citation database,
but this is what separates *WoS*
from many other scholarly databases.

Theoretically, each one of these citing articles should be 
related to the article that is cited by them. I can them peruse 
these citing articles to help me find even more 
relevant sources of information.

Instead of basic search, we can search
by author, cited reference, and more.
If you click on the big question mark button in *WoS*, 
you'll find a guide on how to use *WoS*.
The guide includes some tips on the use of various search operators,
including the *NEAR* operator as well as the Boolean operators. 

Remember that *Web of Science* doesn't offer direct access to content,
but notice that there is this **Full Text @ W. T. Young** link
at the bottom of some records in the search results.
This link is connected to Infokat,
which knows that if the article is available,
Infokat can retrieve it.
If not, then we can request it through interlibrary loan.
Also, in some cases there's also a link
to look up the full text in Google Scholar if the source
is freely available on the web
(this is usually called **open access**).

Remember that you can create an account for *WoS*
if you want to save your searches or create folders
(called **Marked Lists**) in *WoS*.
Although the vendor that provides *WoS*
is also the same vendor that provides the *EndNote* reference manager,
Zotero is also capable of extracting bibliographic information here.

## JSTOR

[*JSTOR*][jstor] is multi-disciplinary database.
Like other databases,
you can limit results by **Item Type**, **Language**,
**Publication Date**, **subject area**, and more.
*JSTOR* also provides proximity search using the **NEAR** operator.

JSTOR covers subjects such as:

- Arts
- Business & Economics
- History
- Medicine & Allied Health
- Science & Mathematics
- Security studies
- Social Sciences, and more.

Each of these subject areas includes access to many journal titles, and
therefore, many journal articles.
*JSTOR* has long focused on back issues of journals, but
in recent years has made moves to include current literature and
open access content (this is content that is freely available).
The content in *JSTOR* is high quality, peer-reviewed work, which 
makes *JSTOR* a great place to gather documents on a topic
that you want to research in-depth.
My **"open source" and google** query for Images
returns 26 results.

<figure>
<img src="images/10-image-8.png"
alt="JSTOR image search"
title="JSTOR image search">
<figcaption>Fig. 8: <i>JSTOR</i> Image Search</figcaption> 
</figure>

*JSTOR* also includes *ARTSTOR*.
which is located in the *JSTOR* images search above.
*ARTSTOR* is database of art and multimedia objects,
much of which is also available as open access.

Again, remember that if you have desktop Zotero 
plus the Zotero browser add-on installed,
Zotero will automatically recognize when you have a
web page open for a specific item in in *JSTOR*. 
Thus, you can use Zotero with *JSTOR* 
to collect information on your Wikipedia topic.

## Conclusion

That covers *Factiva*, *Web of Science*,
*Google Scholar*, and *JSTOR*.
Remember that *Factiva* is a general-interest news database; 
*WoS* and *Google Scholar* are both citation, scholarly databases
(I'll cover *Google Scholar* in the next lesson); and
*JSTOR* is a scholarly and image database.

In the next section,
we begin to cover web sources.

[azDatabases]:https://libguides.uky.edu/az.php
[factiva]:https://libguides.uky.edu/720
[wos]:https://libguides.uky.edu/467
[googleScholar]:https://scholar.google.com
[jstor]:https://libguides.uky.edu/266
[factivaOperators]:http://factiva.com/CP_Developer/ProductHelp/FDK/FDK38/search_factiva/query_expressions/search_statement_operators.htm
