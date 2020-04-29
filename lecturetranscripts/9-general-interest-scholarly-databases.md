# IS/ICT 201: Personal Knowledge Management

# General-Interest and Scholarly Databases

## Introduction

Hi Class, this week we are going to examine general interest and scholarly
databases. In this video I'm going to walk us through three databases:
*Factiva*, which is our general-interest news and online web database and *Web
of Science* and *Google Scholar*, which are our two scholarly, citation
databases. In particular, these two databases are citation databases. 

We're reading chapters 1 and 2 from Knott, and I will ask a question on the
discussion board related to chapter 2. Knott covers specific databases in these
two chapters, and UK has some of these databases, so you should explore them.
However, I want to take this opportunity to cover databases that are not
reviewed in these chapters, with the purpose of exposing us to a greater number
of really good sources.

## Factiva

So, this is *Factiva*. This is a Dow-Jones owned database, and it's really good
for news articles, market and company activity, and business related
information. Like other databases that we've covered this semester, you can set
up search alerts, saved searches, and more. 

You can search against subjects, industries, within regions, and you can add
other limits, and there are a slew of some advanced search operators that will
help power up your search. One bonus is this thing called the Query Genius,
which you can see up in the top right. I'll share with you a list of operators
and field codes to use when searching here and also demonstrate how to use
this.

Let's say I'm interested in any news about Google and open source software. To
search this in Factiva, I can approach the query simply, like so:

```
"open source" AND google 
```

This search was conducted on Feb 6, 2018, and you can see there are 2,560
results. 

On the left side you can see a distribution of articles by date of publication,
a list of relevant companies that appear in the documents that were retrieved,
as well as lists of sources, subjects, industries, languages, regions, and so
forth.

If I wanted to export any of these documents, I can click on specific check
boxes and export the results in various ways, either as an RTF or a PDF file,
or have it email the results to me or print them. We can look at the
publication data distribution and note whether there are more results on a
given day than on others. This may suggest a hot news day for this particular
topic and so that may be something we want to explore. 

Let's go back to the search builder. Say I found that the previous set of
results were rather hit or miss and, as a result,  I want to refine my search a
bit more. Now I can try the adjacent operator. The adjacent operator tells the
database to only return documents where the terms appear within a set amount of
space between each other. The assumption is that the closer any terms are to
each other, the more likely the document will be about those terms. Thus, if I
type: 

```
"open source" adj5 google
```

I'm saying that I want the term "open source" to appear within five words of
the term "google", and I'm doing this because I expect that the list of results
will be more hit than miss on this topic.

You can see that the results are much different than the previous one. Here I
only have 128 results rather than 2,597. If we investigate any of these
documents, you and confirm that our two terms, which are highlighted, appear
within five words of each other.

There are many operators in Factiva, but unless we're familiar with them, it's
hard to remember all of them, and the documentation isn't all that great,
unfortunately. But we can learn about them with a little digging and elbow
grease, and in the discussion forum for today, I'm sharing with you a list of
operators to use and a list of field tags. Remember, search operators are the
parts of a query that deal with the logic of a query. Thus, a Boolean NOT
operator tells a search system to not include some term. A field tag refers to
the metadata of a source -- that is, some part of a source that's fixed and
described, like a source title, date, etc.

There are many more search operators in *Factiva*, like there are in other
databases. Here's the page that lists them. In addition to the *adjN* operator,
there are the standard Boolean operators, which you can use as lower case in
*Factiva*, as well as other kinds, like the *nearN* operator, which works like
the *adjN* operator but is bi-directional. That means the order of terms in our
query doesn't matter, like it does in the use of the *adjN* operator. For
example, if I do this:

```
"open source" near5 google
```

Then I'm telling the system that I will accept documents or results where the
term "open source" is placed within five words before or after the term
"Google". But if I use the *adjN* operator, then I'm implying a specific
direction. That is:

```
"open source" adj5 google
```

means I'm telling the system that the term "google" must come after the term
"open source" and also must be placed within five words of each other. By
implication:

```
google adj5 "open source"
```

implies that order.

There's a lot more to *Factiva*. E.g., if I want to acquire more information
about a company, then I'd want to click on the Companies/Markets link at the
top and do a search. Here's a search for Google. I can also follow the same
kind of steps for industries.

You can use *Factiva* by going to the UK Libraries website, clicking on the
Databases tab, and searching for *Factiva*. If you're want a place to read the
news everyday, this is a good option too. It doesn't simply have to be a source
for searching for news articles when you need them.

## Web of Science

*Web of Science* is an abstract, indexing, and citation database. What this
means is that it's a database that does not provide access to full text
sources, like full text articles, but only to information about the articles,
like titles, abstracts, publications, and so forth. That's a big limitation, in
some ways, because often we want something right now when we search for it, but
it's fine, because we can usually get a full text copy of a work that we're
interested in. I'll show you how in a second.

*Web of Science* is also, as mentioned, a citation database. Whenever a scholar
cites another work, such as an article or a book, the citation database tracks
that citation and uses it to connect the two works together: the citing work
and the cited work. Having this citation link available to us provides us with
a great information retrieval tool.

Why? It turns out that this development provides a great opportunity to
retrieve articles that are like each other, and like each other in some way. In
fact, Google's PageRank algorithm, the algorithm that judges relevance based on
links to a page, is based on this citation idea.

The reason this works is because when one author cites another work, it's often
the case that the citation is given because there's a connection of some sort
between the two works. That is, when we cite a work, we don't just cite
randomly or for just any reason or for no reason at all; rather, we cite
because there's either a topical connection, a methodological connection, or
some other type of connection to the previous work. 

For example, if I'm conducting research on search engines and am writing a
paper about this research, then it's highly likely that I will cite other
research that is also on search engines. That's a topical connection. Or, if I
am doing this research but I'm gathering data using interviews with people who
use search engines, then I may cite other research on the method of
interviewing. That's a methodological connection.

A citation database doesn't tell us anything about why two or more articles are
connected to each other through citations, it simply tells us that there is a
link. Since it provides that link, it's up to us to follow it and use the
bibliographic information (author names, title, abstract, etc.) to determine if
the citation connection resulted in a new find that is relevant to our
information needs. 

Let's see how this works. I'm in *Web of Science*. Again, to find this, go to
UK Libraries, click on databases, and do a search for either *Web of Science*
or *Web of Knowledge*, which is another name.

The Core Collection is the default collection/database. This is *Web of
Sciences* main database. It's big but it's also curated---only journals that
are considered really important by the owners of this platform make it to this
database. WoS offers other databases and I can either choose among them or I
can search all of them. Note that if I search against all of them that the
results will be less precise since a number of these databases cover different
areas, including biology, ecology, medicine and health, and so on. If you
change the database, some of these search options change.

Let's try a search. We can try our open source and Google search:

```
"open source" AND google
```

We'll select the TOPIC field, which means our search scans the 
titles, abstracts, and keywords in the fields. Here are our 
results. This search was conducted on Mar 6, 2018, and we get 491 
documents returned. If I scroll down, I can add some limits to 
narrow these results down a bit. E.g., I can limit by publication 
year, by *Web of Science Categories*, by Document Type, and so 
forth.

Let's say that my search is a bit too broad still and I want to 
narrow first by refining my query. Just like in *Factiva*, *Web 
of Science* offers a proximity operator called NEAR. Let's try it 
out with the following query:

```
"open source" NEAR/5 google 
```

Now there are only 93 results, and if I examine the abstract, 
I'll see that the term "google" is placed within five words of 
the term "open source" somewhere in the title, abstract, or 
keywords of the record. If I want to really narrow down my 
search, I can change the field to Title only. Here you can see 
that I only get two results back.

The default results list is to show articles that are published 
more recently. I can change this default sorting method so that 
WoS sorts based on sources that have the highest citations first. 
Once I do this, I can go to the right side, and look at the Times 
Cited link and see which articles have been cited the most. This 
is what makes WoS a citation database. We don't have to use WoS
as a citation database, but this is what really separates WoS 
from many other scholarly databases.

Theoretically, each one of these citing articles should be 
related to the article that is cited by them. I can them peruse 
these citing articles to help me find, perhaps, even more 
relevant sources of information.

Instead of basic search, we can search by author, cited 
reference, and more. If you click on the help button in WoS, 
you'll find a guide on how to use WoS. The guide includes some 
tips on the use of various search operators, including the *near* 
operator as well as the Boolean operators. 

Remember that *Web of Science* doesn't offer direct access to 
content, but notice that there's this **View Now** link. This 
link is connected to UK Libraries' databases and if the article 
is available, we can get it directly. If not, then we can request 
it through interlibrary loan. Also, in some cases there's also a 
link to look up the full text in Google Scholar.

## Google Scholar

Let's try *Google Scholar* now. *Google Scholar* doesn't have the 
great search operators that either *Factiva* or *Web of Science* 
has, but it's also a citation database and it's free to use. So 
let's repeat our search but lose the near operator because GS 
won't know what that means:

```
"open source" google
```

You can see here we get a lot of results. Maybe even too much. If 
we want to limit our results, we have to use other tricks. The 
most common one is simply to add more specific keywords to our 
query. E.g., of I add "Android" to the query, that reduces the 
results.

There is an advanced search option. It's not as advanced as 
something you'd find in the previous two databases, but it is 
useful.

Other than that, one of the nice things about *Google Scholar* is 
that it's also a citation database. You can see the **Cited by 
N** link just below each result. That's there if something has 
been cited, and I can click on that to follow citations. This is 
super helpful.

The reason *Google Scholar* returns so many more results is 
because it casts a bigger net than something like *Web of 
Science* does, which purposefully casts a smaller net. Because of 
that, I find *Google Scholar* is kind of nice for browsing works 
and for discovery, but that *Web of Science* is better for really 
rigorous and methodical literature searches.

The observant among you may have noticed that when I'm searching 
*Google Scholar* there's also a link to **View Now @ UK** option. 
This is something you have to set up, but it's pretty simple to 
do. Just click on settings, and then go to **Library Links**, and 
then search for the University of Kentucky. Be sure that you're 
signed into Google if you want to save this as a preference. 
After that, you should see the View Now option when something is 
available via UK Libraries.

There are some basic filters -- I can filter by articles (which 
also includes books) as well as case law. I can limit to dates or 
sort by date, and I can create search alerts (which we've already 
covered). If I click on the Cite button, I can bring up a box to 
show how to format my reference according to various styles. If I 
click on the Cited by link, I can retrieve the articles that are 
citing documents, and I by clicking on Search within citing 
articles, I can add terms and search within those results.

## Conclusion

All right. That covers *Factiva*, *Web of Science*, and *Google 
Scholar*. *Factiva* is a general-interest news database, and WoS 
and GS are both citation, scholarly databases.

I'll raise a question on the discussion board that comes from our 
Knott reading. See you there.
