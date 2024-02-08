# Web Information Retrieval

## Readings

Please visit links in this section and
review the following search tips pages for Google Search,
DuckDuckGo search, and Bing search.

- Refine web searches—Google Search Help. (n.d.). Retrieved August 3, 2022,
  from [Google][googleSearchHelp]
- DuckDuckGo. (n.d.). DuckDuckGo Search Syntax. DuckDuckGo Help Pages.
  Retrieved August 3, 2022, from [DuckDuckGo][ddgHelp]
- Advanced search options [Bing]. (n.d.). Retrieved August 3, 2022, from
  [Microsoft][microHelp]

## Introduction

Whether we want to search the web,
a bibliographic database,
or our Zotero library,
it's helpful to know about
information retrieval in
order to become good at search.

In this lesson, we'll cover specific search techniques
that you can use to get better
using search engines like
Google, Bing, or DuckDuckGo.
Specifically, there are three principles
that we need to consider
when advancing our search skills.

**Principle 1:** We should understand that the
basic information retrieval model centers on **documents**.
Anything indexed in a database or on the web is treated as a document.
Documents include text, sound, images, video, etc.

**Principle 2:** We should understand that documents
do not exist independently of other documents. 
This is called the **corpus**.
For the web, the **corpus** is organized
like a **file system**,
much like the file system on your personal computers.
In a bibliographic database,
the **corpus** is organized by predefined fields
such as author names, title names, subject terms, etc.

**Principle 3:** Our queries are not divorced from the **documents**
nor the **corpus** nor the **organization of the corpus**.
These things are all intertwined.
Each time we search,
search engines and databases compare
**documents** in the **corpus**
to each other and to how they are organized
based on our **queries**,
and then rank order (in some way) those documents
by way of that comparison.
Hence, when we **construct queries**,
it's useful to think about the content (corpus)
that we are searching.

To rehash, a search engine or database uses our queries,
matches them against how they index the corpus (i.e., the web),
and then rank orders the search results based
on the query and the corpus.

To illustrate the above concepts,
I'll primarily focus on searching the web in this section, but
these techniques work across the databases 
that we use in a library.
We'll cover that
in the following section.

## The web is for storing and retrieving documents

When we use Google or another search engine to search,
we often look for documents (web pages, websites, etc.)
in a corpus
that contain specific text
that match our query.
This has some implications:

- *Text* has primacy, even for multimedia, which is often described using text.
- Our queries are matched against the text that appears in documents on the web
  or that describes documents on the web.
- The better our queries match the documents, the more precise our search
  results will be. This assumes we can construct good queries.
- The more ambiguous our queries are, the more work the search engine has to do
  to find relevant results.
- The challenge with search is that we do not always know what text a document
  contains even if that document covers the topic or concept that we think is
  relevant.
    - For example, consider *synonyms*. We might want to find web pages that
      contain terms that are synonymous with our query term but do not actually
      contain our query term. But this can get complicated. If I search for
      **star**, could I also mean **principal, lead, hero, celebrity,
      stellar**, or **sun**?
    - What if a document only uses terms like **principal, lead, hero,
      celebrity, stellar**, or **sun**? Might it still be useful if I was
      interested in documents (i.e., web pages) about **star**? Probably not
      since some of those words, although synonymous with **star**, are not
      synonymous with each other. Compare the terms **principal** and
      **celebrity**. Both of these terms are synonymous with the term **star**
      but they are not synonymous with each other. Therefore, the synonyms of a
      term may not be synonymous with each other.
    - Other *wordy* issues include things like *homonyms*, which are words that
      are pronounced or spelled the same but mean different things. Thus, by
      **bark** do I mean the bark on a tree or the word we use to signal the
      sound a dog makes?
    - Phrases are also important, with respect to **term order**. If I search
      using a phrase where the term **forest** precedes the term **fire**,
      search engines are more likely to return results where those two terms
      appear in that order. This will mean that documents that contain text
      about someone having a **camp fire in a forest** will be less likely to
      appear at the top of my results than a document that contains the phrase
      **the forest is on fire**.
    - Or consider **term adjacency**. Documents where the terms are in order
      but spaced far apart will also rank lower. E.g., if the term **forest**
      appears in the first paragraph on a web page and the term **fire**
      appears on the last paragraph of a web page, this web page will rank
      lower than a page that contains the terms near or adjacent to each other
      when searching using a query like **forest fire**.

## The web is organized

I mentioned above that the web
is a file system,
the kind that you'd find on your own computer
with its folders and files.
By this I mean that **the web is organized**.
If we know a bit about its organization,
we can take good advantage of that when we search.
For instance, we can narrow our searches to parts of the web.
So the questions are: how is it organized?
And how can we use that organization in search?

- The web is organized like a tree. This tree like structure originally
  contained a few main branches, called **top level domains (TLDs)**. Example
  TLDs are .com, .edu, .org, .gov, .mil, and .net. All domains then branched
  off of those main branches.
- The tree has grown over the years and now contains nearly 1451 (as of
  February 2024) of these main branches (TLDs). Newer TLDs include .apple,
  .attorney, .camera, .green, .joy .mobile, .office, .science, .space, and
  [many more][tld].
- Included in those are **ccTLD**s, or **country code top level domains**. For
  example:
    - **.kr** for South Korea 
    - **.ae** for the United Arab Emirates
    - **.fr** for France
    - **.us** for United States
- Each of the big branches contains smaller branches, called second level
  domains. For example:
    - Under .com is **google** for **google**.com
    - Under .edu is **uky** for **uky**.edu.
    - Under .org is **wikipedia** for **wikipedia**.org,
    - Under .gov is **usa** for **usa**.gov,
    - Under .apple is **newsroom** for **newsroom.apple**,
    - and so on.
- Those branches (second level domains) contain even smaller branches that are
  called third level domains or subdomains. Examples include:
    - **maps** for **maps**.google.com
    - **calendar** for **calendar**.uky.edu
    - **en** for **en**.wikipedia.org
    - **analytics** for **analytics**.usa.gov
    - **www** for **www**.uky.edu
    - **ci** for **ci**.uky.edu

We can take advantage of this organization
by limiting (or focusing) queries to results
within smaller sections of the web. In Google, this would entail using
what is called the `site:` operator.
We can add the `site:` operator to our search queries.
For example, let's say I do a search for the term **flu**, and
I notice that most of the results
that I'm interested in are from **.gov** domains,
and most of the results I am less interested in
are from **.com** domains.
To focus on the gov domains,
I add the site operator to my query.
This is the Google query I could use to search
for the topic **flu** only on **.gov** sites:

```
flu site:gov
```

Then perhaps I find these results too general still.
For example, let's say I live in Kentucky but Google
keeps showing me **.gov** sites from other states.
We can focus on just a smaller branch of the tree.
E.g., if I wanted to focus only on results from Kentucky, then:

```
flu site:kentucky.gov
```

This works because [https://www.kentucky.gov](https://www.kentucky.gov)
exists as a website.

Or I can specify a part of Kentucky's government, like
the *Cabinet for Health and Family Services* or
the *Kentucky Department of Education*,
both of which exist on **ky.gov** domains.
with these queries:

```
flu site:chfs.ky.gov
flu site:education.ky.gov
```

<figure>
<img src="images/5-image-1.png"
width="450" height="375"
alt="The organization of the web by top level domains"
title="The organization of the web by top level domains">
<figcaption>Fig. 1: The Organization of the Web by Top Level Domains</figcaption>
</figure>

## Constructing queries for precise results

There are more tips and tricks
we can apply to revise and make our queries more precise.
Below I cover:

- using quotes around search terms for precision
- limiting results to specific dates
- excluding results with specific terms or phrases
- varying the order of terms
- using the **OR** keyword to specify one term, another term, or both terms

### Use quotes around our search terms

With a search like `flu site:gov`,
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
alt="Google result snippets"
title="Google result snippets">
<figcaption>Fig. 2: Google result snippets</figcaption>
</figure>
  
This gives us important information
about how Google sees the text on web pages,
and we can use this information to revise our search.
For example, let's say I'm interested in web pages
that contain info about **flu vaccines** and
less interested in pages that contain information on
**flu activity** or **flu season**.
If that's the case, then I can add the additional term
to my query and enclose the whole query in quotation marks.
That will force Google to rank pages
with the literal term **"flu vaccines"**
much higher than pages with those other terms or phrases,
or exclude those other pages altogether.
So our query will now look like this
(note: only the query terms,
and not the *site* operator, are quoted):

```
"flu vaccines" site:gov
```

By enclosing our query in quotes,
we force the two terms (flu and vaccines)
to be adjacent and in order:
the term flu precedes the term vaccines.

### Get more recent pages

If I'm really interested only in recent pages,
I can click on the **Tools** button and select
**Any time, Past hour, Past 24 hours, Past week**, or etc, 
to limit results to certain time periods.

### Exclude results with the minus sign

Let's take a look at our flu vaccine search.
Instead of enclosing **"flu vaccines"** in quotes
to return only pages with that phrase and 
to reduce pages retrieved with other phrases,
I could exclude the other phrases altogether
(i.e., **activity** and **season**)
by excluding them with a minus sign.
To exclude the terms **activity** and **season**
from our search results,
this is how our search would look:

```
flu -activity -season site:gov
```

I can also exclude specific domains or specific websites:

```
flu vaccines -site:com
flu vaccines -site:webmd.com
```

By excluding domains,
I may want the search results to
include websites from .gov, .edu, .org, etc.
but just not .com or webmd.com.

### Term order matters

Results will be different depending
on the order of the query terms.
Google has gotten good over the years about natural language
(how we talk in real life),
especially as generative artificial technologies
have become more mainstream and
integrated into search.
So the suggestion is to use natural language in your query.
For example, it's generally better to use
the search terms **flu vaccine** instead of **vaccine flu**,
since the former is how we'd phrase the terms in English.
This will of course vary by language.
In many Romance languages, but also others,
it's common (but varies) for the modifier
to come after the word being modified.
For example, in Spanish, we would say **shirt red**:

```
camisa roja
```

Thus, a Spanish speaker
would want to search for `camisa roja`
and not `roja camisa`.
This of course is regardless of the country of origin,
but note that Google has separate landing pages for
Google.com depending on the country you're located in. 
For example, for those residing in Mexico, **google.com**
directs to **google.com.mx**,
where **mx** is the ccTLD for Mexico:
[Google Search - Mexico][googleMX].
For those residing in Canada, it's **google.ca**.

Although term order can determine meaning
or reflect natural language,
we can pair some terms together as lists,
without any impact on meaning or natural language.
How we pair them might change the results retrieved, though,
which becomes noticeable as we scan the search results lists.
For example, consider the following two searches:

```
google bing
```

Or:

```
bing google
```

The above two search queries are semantically equivalent
(they mean the same thing) and their order is arbitrary in our list, but
search engines implicitly place a priority on term order.
The first term in the query is prioritized over the second term.
So if you search Google using the above two queries,
the first page of results might be mostly the same, but
as you page through them, you might see more pages on Google
than on Bing, for the first search,
and vice versa for the second search.

### One OR the other OR both

When we search using multiple terms,
we can use the `OR` operator to tell Google to return pages
with either of the terms or both of the terms.
Consider the following two searches:

```
"google" "bing"
google OR bing
```

The first search will return pages with both
the terms included in the results
because the quotes enforce that.

The second search will return pages with
either the term **google** in the results,
the term **bing** in the results,
or both the terms in the results.
Note also, based on my personal experience,
that if I test the second search in
Google Search and also in Bing Search, then
Google will return more results about Google,
and Bing will return more results about Bing,
respectively.

### Other operators

There are other operators we can use in search engines, and
many of them work regardless of which search engine we use.
Here are some examples that you can test in Google or elsewhere:

  - **:related** to find related sites
    - `related:twitter.com`
    - `related:instagram.com`
    - `related:whitehouse.gov`
    - `related:google.com`
  - **:filetype** to return results in specific types of files:
    - search **uky.edu** for the term **flu vaccine** but only retrieve **PDFs**:
        - `flu vaccines filetype:pdf site:uky.edu`
    - same as above but only return Microsoft Word files:
        - `flu vaccines filetype:docx site:uky.edu`
    - same idea as above but only return Microsoft Excel files:
        - `birth weight filetype:xlsx site:gov`

## Conclusion

Information retrieval or web searching can be complex but fun.
Remember the three principals we stared with in this section,
and apply those principals when constructing your queries.

- document centered 
  - consider the text
- no document is an island
  - consider the document with respect to the corpus 
- the web is organized
  - take advantage of the how the web is structured with *site* searches

Remember and practice the techniques I discussed here:

- query construction
  - use quotes to force exact matches
  - exclude terms with the minus sign
  - term order matters
  - use OR to select alternate terms


If you forget anything, use advanced search:
[https://www.google.com/advanced_search][googleAdvanced]

Or Advanced Image Search:
[https://google.com/advanced_image_search][googleAdvancedImage]

Google provides a [list of some of these operators][googleOperators].

Other search engines also have search operators, and often they're the same:

- [DuckDuckGo][ddg]
- [Bing][bing]

## P.S.

You can get very advanced with your queries.
Here are some examples:

```
trade ("surplus" OR "deficit") (site:whitehouse.gov OR site:congress.gov)
```

Or, limit to specific filetypes:

```
trade ("surplus" OR "deficit") (site:whitehouse.gov OR site:congress.gov) filteype:pdf
```

The last search query is so complicated that it
decomposes into the following separate queries but
searches them all at the same time:

1. `trade surplus site:whitehouse.gov filetype:pdf`
1. `trade surplus site:congress.gov filetype:pdf`
1. `trade deficit site:whitehouse.gov filetype:pdf`
1. `trade deficit site:congress.gov filetype:pdf`
1. `trade surplus site:congress.gov site:whitehouse.gov filetype:pdf`
1. `trade deficit site:congress.gov site:whitehouse.gov filetype:pdf`
1. `trade surplus deficit site:congress.gov site:whitehouse.gov filetype:pdf`
1. `trade surplus deficit site:congress.gov filetype:pdf`
1. `trade surplus deficit site:whitehouse.gov filetype:pdf`
1. `trade surplus deficit site:congress.gov site:whitehouse.gov filetype:pdf`
  
[tld]:https://data.iana.org/TLD/tlds-alpha-by-domain.txt
[googleAdvanced]:https://www.google.com/advanced_search
[googleAdvancedImage]:https://google.com/advanced_image_search
[googleOperators]:https://support.google.com/websearch/answer/2466433?hl=en
[ddg]:https://help.duckduckgo.com/duckduckgo-help-pages/results/syntax/
[bing]:https://support.microsoft.com/en-us/topic/advanced-search-options-b92e25f1-0085-4271-bdf9-14aaea720930
[googleSearchHelp]:https://support.google.com/websearch/answer/2466433?hl=en
[ddgHelp]:https://help.duckduckgo.com/duckduckgo-help-pages/results/syntax/
[microHelp]:https://support.microsoft.com/en-us/topic/advanced-search-options-b92e25f1-0085-4271-bdf9-14aaea720930
[googleMX]:https://www.google.com.mx/
