# Information Retrieval: The Web

## Introduction

Whether we want to search the web,
a bibliographic database,
or our Zotero (or like RM) library,
it's helpful to know a bit how 
information retrieval works in
order to become good at search.

In this lesson, we'll cover specific techniques
that you can use to get better at search,
but there are three ideas that we
need to consider when advancing our skills with search.

First, we should understand that the
basic information retrieval model centers on **documents**.
Anything indexed in a database or on the web is treated as a document.
Documents include text, sound, images, video, etc.

Second, we should understand that documents
do not exist independently of other documents. 
Let's call this the **corpus**.
For the web, the **corpus** is organized
like a **file system**,
much like the file system on your personal computers, and 
in a bibliographic database,
the **corpus** is organized by predefined fields, such
author names, titles, subject terms, etc.

Third, our queries are not divorced from the **documents**
nor the **corpus**.
That is, each time we search,
search engines and databases compare
**documents** in the **corpus**
to each other based on our **query constructions**,
and then rank order (in some way) those documents
by way of that comparison.
Hence, when we **construct queries**,
it's useful to think about the content (corpus)
that we are searching.

To rehash, a search engine or database uses our queries,
matches them against how they have indexed the corpus,
and then rank orders the results based
on the query and the corpus.

In order to illustrate the above concepts,
I'll primarily focus on searching the web, but
these techniques work across the databases 
that we use in a library.

## The web is for storing and retrieving documents

When we use Google or another search engine to search,
we are often looking for documents in a corpus that
contain specific text that match our query.
This has some implications:

- *Text* has primacy, even for multimedia, which is often described using text.
- Our queries are matched against the text that appears in documents on the web
  or that describes documents on the web.
- The better our queries match the documents, the better (or more precise) our
  search results will be. (This assumes we can construct good queries.)
- The more ambiguous our queries are, the more work the search engine has to do
  to find relevant results.
- The challenge with search is that we do not always know what text a document
  contains even if that document covers the topic or concept that we think is
  relevant.
- For example, consider *synonyms*. We might want web pages that contain terms
  that are synonymous with our query term but do not actually contain our query
  term. But this can get complicated. If I search for ``star``, could I also
  mean ``principal, lead, hero, celebrity, stellar``, or ``sun``?
- What if a document only uses terms like ``principal, lead, hero, celebrity,
  stellar``, or the ``sun``? Might it still be useful if I was interested in
  documents (i.e., web pages) about ``star``? Probably not since some of those
  words, although synonymous with **star**, are not synonymous with each other
  (cf, **principal** and **celebrity**)
- Other *wordy* issues include things like *homonyms*, which are words that are
  pronounced or spelled the same but mean different things. Thus, by `bark`, do
  I mean the bark on a tree or the word we use to signal the sound a dog makes?
- Phrases are also important, with respect to term adjacency and word order. If
  I search for `forest fire`, search engines are more likely to return results
  where those two terms appear next to each other and in that order. This will
  mean that documents that contain text about someone having a ``camp fire in a
  forest`` will be less likely to appear at the top of my results than a
  document that contains the phrase ``the forest is on fire``. Or documents
  where the terms are or in order but spaced far apart will also rank lower.
  E.g., if the term **forest** appears in the first paragraph on a web page and
  the term **fire** appears on the last paragraph of a web page, this web page
  will rank lower than a page that contains the terms near or adjacent to each
  other.

## The web is organized

I mentioned above that the web
is like a file system,
the kind that you'd find on your own computer.
By this I mean that the web is organized,
even though it may not appear so.
But if we know a bit about its organization,
we can take good advantage of that when we search
by narrowing our searches to just parts of the web.
So the question is, how is it organized?

- The web is organized like a tree. This tree like structure originally
  contained just a few main branches, called **top level domains**, such as:
  .com, .edu, .org, .gov, .mil, and .net. All domains then branched off of
  those main branches.
- The tree has grown over the years and now contains about 1500 of these main
  branches, or top level domains. Examples include .apple, .attorney, .camera,
  .green, .joy .mobile, .office, .science, .space, and [many more][tld].
- Included in those are **ccTLD**s, or country code top level domains. For
  example:
    - **.kr** for South Korea 
    - **.ae** for the United Arab Emirates
    - **.fr** for France
    - **.us** for United States
- Each of the big branches contains smaller branches, called second level
  domains. For example:
    - Under .com is **google** for **google.com**
    - Under .edu is **uky** for **uky.edu**.
    - Under .org is **wikipedia** for **wikipedia.org**,
    - Under .gov is **usa** for **usa.gov**,
    - Under .apple is **newsroom** for **newsroom.apple**,
    - and so on.
- Those branches (second level domains) contain even smaller branches that are
  called third level domains. Examples include:
    - **maps**.google.com
    - **calendar**.uky.edu
    - **en**.wikipedia.org
    - **analytics**.usa.gov
    - **www**.uky.edu
    - **ci**.uky.edu

We can take advantage of this organization
by limiting (or focusing) queries to results
within smaller sections of the web. In Google, this would entail using
what is called the ``site:`` operator.
We use this in combination with our search queries.
For example, let's say I do a search for the term ``flu``, and
I notice that most of the results
that I'm interested in are from ``.gov`` domains,
and most of the results I am less interested in
are from ``.com`` domains.
To focus on the gov domains,
I add the site operator to my query.
This is the query I could use to search Google:

```
flu site:gov
```

Then perhaps I find these results too general still.
For example, let's say I live in Kentucky but Google
is showing me a lot of **.gov** sites from other states.
We can focus on just a smaller branch of the tree.
E.g., if I wanted to focus only on results for Kentucky, then:

```
flu site:ky.gov
```

Or I can specify a part of Kentucky's government, like
the *Cabinet for Health and Family Services* or
the *Kentucky Department of Education*.
Then I could try these queries:

```
flu site:chfs.ky.gov
flu site:education.ky.gov
```

<figure>
<img src="images/5-image-1.png"
width="600" height="500"
alt="The organization of the web by top level domains"
title="The organization of the web by top level domains">
<figcaption>Fig. 1: The Organization of the Web by Top Level Domains</figcaption>
</figure>

## Constructing queries for precise results

There are all sorts of other tips and tricks
we can apply to revise and make our queries more precise.

**Use quotes around our search terms:**

With a search like ``flu site:gov``,
Google provided us with snippets of text
that highlighted where the term **flu** appears
in the web pages that are retrieved.
For example, we see terms like these in the search results:

- *flu symptoms*
- *flu activity*,
- *flu vaccines*, and
- *flu season*.

<figure>
<img src="images/5-image-2.png"
width="600" height="500"
alt="Google result snippets"
title="Google result snippets">
<figcaption>Fig. 2: Google result snippets</figcaption>
</figure>
  
This tells us important information
about how Google sees the text on web pages,
and we can use this information to revise our search.
For example, let's say that I'm interested in web pages
that contain info about *flu vaccines* and
less interested in pages that contain information on
*flu activity* or *flu season*.
If that's the case, then I can add the additional term
to my query and enclose the whole query in quotation marks.
That will force Google to rank pages
with the literal term *"flu vaccines"*
much higher than pages with those other terms or phrases,
or exclude those other pages altogether.
So our query will now look like this
(note: only the query terms,
and not the *site* operator, are quoted):

```
"flu vaccines" site:gov
```

**Get more recent pages:**

If I'm really interested only in recent pages,
I can click on the **Tools** button and select
**Any time**, Past hour, Past 24 hours, Past week, or etc, 
to limit results to certain time frames.

**Exclude results with the minus sign:**

Let's take a look at our flu vaccine search.
Instead of enclosing ``"flu vaccines"`` in quotes
to return only pages with that phrase and 
to reduce pages retrieved with other phrases,
I could exclude the other phrases altogether
(i.e., **activity** and **season**)
by excluding them with a minus sign.
To exclude the terms **season** and **activity**
from our search results,
this is how our search would look:

```
flu -season -activity site:gov
```

I can also exclude specific domains or specific websites:

```
flu vaccines -site:com
flu vaccines -site:webmd.com
```

**Term order matters**:

Results will be different depending
on the order of the query terms.
Google has gotten good over the years about natural language
(how we talk in real life),
and so the suggestion is to use natural language in your query.
For example, it's generally better to use
the search terms **flu vaccine** instead of **vaccine flu**,
since this is how we'd phrase the terms in English.
This will of course vary by language.
In many Romance languages, but also others,
it's common (but varies) for the modifier
to come after the word being modified.
For example, in Spanish, we would say **shirt red**:

```
camisa roja
```

Thus, a Spanish speaker from Mexico
would want to search for ``camisa roja`` and not
``roja comisa`` on Google.com's default landing
page for those residing in Mexico:

[Google Search - Mexico][googleMX]

[googleMX]:https://www.google.com.mx/


However, we can pair some terms together and 
not change the meaning of the query, but
how we pair them might change the results retrieved,
especially as you page through the results list.
For example, consider the following two searches:

```
google bing
```

Or:

```
bing google
```

The above two search queries are semantically equivalent
(they mean the same thing), but
search engines implicitly place a priority on term order.
The first term in the query is prioritized over the second term.
So if you search Google using the above two queries,
the first page of results might be mostly the same, but
as you page through them, you might see more pages on Google
than on Bing, for the first search,
and vice versa for the second search.

**One OR the other OR both:**

When we search using multiple terms,
we can use the ``OR`` operator to tell Google to return pages
with either of the terms or both of the terms.
Consider the following two searches:

```
"google" "bing"
google OR bing
```

The first search will return pages with both
the terms included in the results.
The second search will return pages with
either the term **google** in the results,
the term **bing** in the results,
or both the terms in the results.
Note also, based on my personal experience,
that if I test the second search in
Google Search and in Bing Search, then
Google will return more results about Google,
and Bing will return more results about Bing.

**Other operators:**

There are other operators we can use in search engines, and
many of them work regardless of which search engine we use.
Here are some examples:

  - ``:related`` to find related sites
    - ``related:twitter.com`` 
    - ``related:instagram.com`` 
    - ``related:whitehouse.gov`` 
    - ``related:google.com``
  - ``:filetype`` to find to return results in specific types of files:
    - search **uky.edu** for the term *flu vaccine* but only retrieve **PDFs**:
        - ``flu vaccines filetype:pdf site:uky.edu``
    - same as above but only return Microsoft Word files:
        - ``flu vaccines filetype:docx site:uky.edu``
    - same idea as above but only return Microsoft Excel files:
        - ``birth weight filetype:xlsx site:gov``

## Conclusion

- documents on the web
  - consider the text
- web organization
  - take advantage of the how the web is structured with *site* searches
- query construction
  - use quotes
  - exclude terms with the minus sign
  - term order matters
  - use OR to select alternate terms
- if you forget anything, use advanced search:
  [https://www.google.com/advanced_search][googleAdvanced]
- Or Advanced Image Search:
  [https://google.com/advanced_image_search][googleAdvancedImage]
- Google provides a [list of some of these operators][googleOperators].
- Other search engines also have search operators, and often they're the same:
  - [DuckDuckGo][ddg]
  - [Bing][bing]

## P.S.

Final tip: You can get very advanced:

```
trade ("surplus" OR "deficit") (site:whitehouse.gov OR site:congress.gov)
```

Or, limit to specific filetypes:

```
trade ("surplus" OR "deficit") (site:whitehouse.gov OR site:congress.gov) filteype:pdf
```

The last search decomposes into the following
separate queries but searches them all at the same time:

1. ``trade surplus site:whitehouse.gov filetype:pdf``
1. ``trade surplus site:congress.gov filetype:pdf``
1. ``trade deficit site:whitehouse.gov filetype:pdf``
1. ``trade deficit site:congress.gov filetype:pdf``
1. ``trade surplus site:congress.gov site:whitehouse.gov filetype:pdf``
1. ``trade deficit site:congress.gov site:whitehouse.gov filetype:pdf``
1. ``trade surplus deficit site:congress.gov site:whitehouse.gov filetype:pdf``
1. ``trade surplus deficit site:congress.gov filetype:pdf``
1. ``trade surplus deficit site:whitehouse.gov filetype:pdf``
1. ``trade surplus deficit site:congress.gov site:whitehouse.gov filetype:pdf``
  
[tld]:https://data.iana.org/TLD/tlds-alpha-by-domain.txt
[googleAdvanced]:https://www.google.com/advanced_search
[googleAdvancedImage]:https://google.com/advanced_image_search
[googleOperators]:https://support.google.com/websearch/answer/2466433?hl=en
[ddg]:https://help.duckduckgo.com/duckduckgo-help-pages/results/syntax/
[bing]:https://support.microsoft.com/en-us/topic/advanced-search-options-b92e25f1-0085-4271-bdf9-14aaea720930
