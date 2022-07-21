# IS/ICT 201: Personal Knowledge Management

# Understanding Metadata

## Slide 1: Title page

Hi Class, this week we're going to talk about metadata, which means information
about information, or the process of describing information.

We're also going to talk about annotating the web, but I'll create a second
video for that.

## Slide 2: What is metadata?

In order to say something about what it means to describe information, we
should probably say something about information itself---and how exactly it's
defined.

It turns out that defining the term *information* in a way that makes the term
robust and easy to research is difficult, but for a moment let's define
information simply. Let's say that information is a proposition that is true.
Although this is a simplistic definition, as a concept it captures an important
aspect of what we think information is. An example of this definition in action
is in this proposition:

- On January 1, 1990, the maximum temperature in Lexington, KY was 36 degrees
  Fahrenheit, as measured by KLEX.

That statement has a binary truth value---it's either true or false, and so
it's an example of a propositional statement that is true---and because it's
true, it's informative.

Source: [KLEX weather, Lexington, KY, 1/1/1990][1]

## Slide 3: What is metadata?

So what is metadata?

- Metadata is *data about data*. The term highlights what it's about---*meta*,
  as in *over* and *data* as in *data*---so, in a sense, that which is *over
  data*.
- Or we can think about it more generally, as information about some
  thing that helps to identify, locate, and manage that thing.

Side note:

* We do not include *disinformation* or *misinformation*. Misinformation is
  simply information that is false. Disinformation is a kind of misinformation;
  specifically, disinformation is false information that is designed to
  mislead---you can think of propaganda as a kind of disinformation.

## Slide 4: Why is metadata helpful?

When we create metadata, our goal is to create data about data---or simply
describe information---in order to organize it so that we may retrieve it. For
example, one of my favorite books is Larry McMurtry's *Lonesome Dove*. When we
start to describe this book, we could focus on the book's title, *Lonesome
Dove*, or the author, *Larry McMurtry*, or the year it was published, how many
pages are in the book, the main characters, and so forth. If were were to
collect all this information and place it in a record, we'd have metadata. If
such a metadata record were then added to other such records, then that
collection could be searched efficiently. This is essentially how all
information retrieval works, whether it's a library's online catalog or Google
search.

Source: [The Alamo][2]

## Slide 5: Author/creator metadata

Another example: The author of that book, *Beloved*, is *Toni Morrison*, so
*Toni Morrison* is **author metadata** for that book.

Source: [Toni Morrison][3]

## Slide 6: Location/identifier metadata

Metadata should also contain location or identifier information---that is,
information about where and who it is. In the past, for a book, we might be
interested in the book's call number if we were looking for that book at
a library. That call number would act as location or identifier metadata. We
might be still interested in call numbers today if we're interested in finding
a physical book at a library, but often we're also interested in locating the
book on the web, and so a URL may also function as identifier or location
metadata.

Thus the URL for that book's record is [www.worldcat.org/oclc/9342768][10].

So, that URL is *location metadata* about that book's record on the internet.

The interesting thing about this URL is that it is a permanent URL. Web pages,
as you know, often change, update, or get deleted. Everyone, I'm sure, has
seen the 404 page not returned error while web browsing. But this is a
permanent URL by a named authority, worldcat.org, so this URL is forever,
theoretically, as long as the internet exists. Therefore it exists as a 
location string and a identifier string since it will always point to this 
record for Agatha Christie's book, *The Orient Express*.

Source: [Agatha Christie][4]

## Slide 7: Element:Value

There's another way to think about this. Each of those examples can be thought
of as a relationship between an element or variable and a value contained by
the element or variable. If you know something about computer programming, then
this is all it is:

```
title = "lonesome dove"
```

where title is the variable's name (the element) and "lonesome dove" is the
stored value. In many cases, the variable names are fixed. So there will be a
scheme where *title* is always that variable's name, *creator* is always that
variable's name, *date* is always that variable's name, and so forth. So you
cannot just create new variable names for these elements, and do things like
replace the term 'date' with some other term, like *time*, or 'creator' with
some other term, like 'author'.

## Slide 8: Where is metadata?

So where is metadata? Well, it's all over the place. The header information
in an email contains information about the email, and so it contains metadata
E.g.:

- **To:** field
- **From:** field
- **Date:** field

Those fields can be searched in whatever email service you use. These metadata
play important roles in administering information and communication on the
web---this is because computers need to process the sending and receiving of
emails, and metadata helps this happen.

## Slide 9: Automated metadata creation

In the book examples above, metadata is manually created, but metadata is also
automatically created simply by our use of a lot of different technologies.
Social media, email, and other ICTs automatically generate a lot of metadata in
the course of operation. As soon as we send or compose an email or tweet,
upload a photo to Instagram, post text or a photo to Facebook, or any of
a number of social media applications, metadata about that use is created and
tied to our identity.

## Slide 10: Metadata is social

Thus, metadata is social. E.g., as well as the tweet's content, each tweet
includes this kind of metadata:

- Name
- Timestamp that it was sent
- Favorited, whether it was favorited
- Favorited count, how many times it was favorited
- A reply, whether it was reply
- Twitter client, what client you were using (iPhone, Android, Browser)
- User name, the account associated with the tweet
- A retweet, whether it was retweeted
- Retweet count, how many times it was retweeted
- Longitude/latitude, the geographic location (where the tweet was sent from),
  if sent from a phone
- Followers/following, the number of followers and of those being followed by
  the user account
- & more! 

We generate tons of metadata in the process of using the web. As many of you
know, this is related to privacy and political issues. Think of, as an example, 
the recent Facebook / Cambridge Analytica stories, as well as the collection of 
identity information by Google, purchasing data by Amazon, etc. Many other 
major websites/companies use this kind of metadata as a part of their business 
plans.

## Slide 11: Metadata has utility

Metadata has utility. In order for many of these to function:

- ICT applications need metadata. E.g., I need an email
  address (user/location) in order to send an email to user@location.
- A search engine needs metadata to identify different objects (i.e., web
  pages) to return and to differentiate between these objects.
- Objects (like books) need to be described in order to identify their
  important characteristics (title/name, author/creator, creation/publication
  date, etc.)
- Because this is essential in *retrieving* information from search engines and 
  bibliographic databases.

So we need metadata to classify, categorized, and process all the different
kinds of informational objects that we have. 

## Slide 12: Metadata and privacy

And as I already mentioned, there are privacy issues with metadata that I
want you to be aware of, as I'm sure many of you are. So:

- Remember that metadata is often exposed to the public. If you tweet it,
  instagram it, etc., anyone with the right skill set can grab that data.

Read this interesting hypothetical use case by sociologist Kieren Healy. He
used metadata from real historical records to show that if the British had the
technology and methods we have today, they could have identified Paul Revere as
a Patriot. It's a fun read, but it's also a kind of warning. It identifies the
need to have a discussion about the privacy protections that we want and need
in order to function as a democracy, and how much privacy we should give up to
have the kinds of tools that we find useful or enjoyable.

Source: [Paul Revere][5]

## Slide 13: Controlled metadata creation 
 
Metadata is created purposefully too. Here is an example of a record for
Agatha Christie's *Murder on the Orient Express*, which I linked to above
when referring to identifier/location metadata. This is a screen shot of the
catalog record for this book from worldcat.org, which itself is an online
catalog for 1000s of library holdings across the US and other nations. 

We see that the author metadata is *Agatha Christie*. Publisher metadata is
*Bantam Books* and the publication date is 1983 and copyright date is 1960.
These dates may be somewhat misleading, as the former date indicates the
printing of this edition and the latter date indicates when the copyright
was renewed and not the original publication date.

There are other metadata fields to be aware of. The Summary field displays a
short summary or description of the work. The Subjects field highlights
three terms that are used to describe what the books is about: one on the
fictional main character, Poirot. One titled *Private Investigators*, and
the other titled *Orient Express*. Notice that these are all hyperlinked,
such that they function as access points to other works that share those
subject terms. As such, these subject links do the work of collating all
other works that share one of these subject headings. In a sense, they
function as a kind of digital file cabinet.

## Slide 14: Structured metadata

Dublin Core is an element set created to describe web objects, probably one
of the most commonly used element sets to do so, but it can also be used to
describe physical objects.

## Slide 15: Dublin Core: 15 elements

Dublin Core uses 15 metadata elements to help us describe information. I'm am
only going to cover a few of these, but the goal here is for you to think about
how information is described, i.e., how metadata is created and used, in order
to take advantage of this to find and organize information. 


## Slide 16: Creator element

The definition of the creator element is "an entity or person responsible for
making the resource." This is an element meant to broadly capture a number of
functions, such as author, painter, artist, musician, composer, etc. So think
of creator as a kind of a term that subsumes all these different aspects of
what it means to be a creator. For example, Julian Fellowes is one of the
persons who created the show *Downton Abbey*, and thus if I were to describe
the TV show *Downton Abbey*, I would assign Fellowes to the creator field, as
well as anyone else who was a primary creator of the show.

Source: [dublincore.org/documents/dces][6]

## Slide 17: Date element

The definition of the date element is "a point or period of time associated
with an event in the life cycle of the resource." The date can include a range,
e.g., 2010 through 2013, but also specify a single point, such as September 26,
2010, which is the start of the show *Downton Abbey*.

Source: [dublincore.org/documents/dces][6]  
Source: [en.wikipedia.org/wiki/Downton_Abbey][7]

## Slide 18: Description element

The description element is defined as "an account of the resource," which
functions as a kind of a summary. E.g., from *Wikipedia*, the introduction
section of the article on *Downton Abbey* provides a short summary of the
show. This summary could be used in the Description element if we were
creating a Dublin Core record for the show, although we wouldn't copy it
without also attributing the source of the description to *Wikipedia*.

Source: [dublincore.org/documents/dces][6]  
Source: [en.wikipedia.org/wiki/Downton_Abbey][7]

## Slide 19: Format element

Here we refer to "the file format, [the] physical medium, or [the]
dimensions of the resource." In this case, you should think of a PDF file, a
HTML file for web pages, a DOCX file for Microsoft Word documents, JPG and
PNG for photo files. In the case of a physical object, like a printed book,
think of the actual dimensions of the book: 23cm x 15cm.

Source: [dublincore.org/documents/dces][6]  

## Slide 20: Identifier element

I've mentioned the identifier element before. This is defined as "an
unambiguous reference to the resource within a given context." Here I want
you to think about a kind of ID number. In the case of a book, whether
printed or online, think of the book's ISBN number, which you can find on
the opposite side of its title page (called the *verso*, if you're
interested). Or think of an ISSN number for a journal or a magazine, or more
broadly, a periodical. A DOI number is used to identify a specific scholarly
article. 

- ISBN stands for International Standard Book Number
- ISSN stands for International Standard Serial Number
- DOI stands for digital object identifier

Some of these identifiers (not all are listed) can be converted to URLs.
E.g., if you prefix http://dx.doi.org/ to a DOI that is 10.2002/ece3.1480,
you get http://dx.doi.org/10.2002/ece3.1480, then you'll be taken to the web
page for that scholarly article.

Source: [dublincore.org/documents/dces][6]

## Slide 21: Subject element

I pointed out the subject issue earlier, when we were talking about the *Murder
on the Orient Express* book. There we had three subject headings referring to
the main fictional character of the book, the role that character played in the
book (private investigator), and the location or setting of the book, the train
*Orient Express*. Those subjects are a way to describe what the object is about
but also help collate all resources that have the same subjects. In order to
accomplish this, subject terms are often controlled. E.g., instances of this
kind of *controlled vocabulary* include the *Library of Congress Subject
Headings*. Here are two examples. The term *Clouds* is a subject heading in the
Library of Congress Subject Headings list. If you go to InfoKat, the UK
Libraries online catalog, and do a subject search for *Clouds*, you'll pull up
all works that share that subject. *Cardiovascular abnormalities* is a MeSH
subject heading for that topic. MeSH, standing for Medical Subject Headings, is
a derivation of the LCSH -- it is like the LCSH, just more specific for medical
subject matters. Controlled vocabularies are maintained by committees and
organizations of experts. They oversee these list of terms, that added to
thesauri -- and they constantly revise these terms -- add new ones when
relevant, remove old ones when they go out of style or out of use.

We also see a lot of uncontrolled vocabulary. When you tag someone on
Facebook, Twitter, Instagram, you are creating a kind of subject term for
that Facebook post, that tweet, or that photo. When you click on those tags,
you'll pull up all other posts, tweets, photos that share that same tag.
Think of a common example, such as the throwback Thursday tag that's used
across all three of these sites.

Source: [dublincore.org/documents/dces][6]  

## Slide 22: Title element

The definition of the title element is "a name given to the resource." This
is fairly straightforward. In our previous example, *Downton Abbey* is the
title of the TV show by that name, and so this is what you'd use in the
title element.

Source: [dublincore.org/documents/dces][6]  

## Slide 23: Dublin Core Implementation

Dublin Core can be implemented in lots of web languages, such as XML, XHTML,
and so forth. Here's an example of a Dublin Core record that I created on the
fly. It refers to Larry McMurtry's book *Lonesome Dove* and I used XML markup
to code the record. So you see things like *dc.title* to refer to the title of
the book. *dc.creator* to refer to the author. You see that I repeated the
*dc.identifier* element twice. One identifier refers to the ISBN for the book.
The other one refers to the permanent URL that the Library of Congress uses for
their record of the book. You also see that I repeated the use of the
*dc.format* element -- one is dedicated to the number of pages of the book and
the other is dedicated to the length of the printed book, specifically, this
instance of the book. And so forth. 

Dublin Core can be fairly straightforward. Unlike librarians, who spend
several years mastering the techniques involved in cataloging works, Dublin
Core was designed to be friendly to general practitioners. This is not to
say that it doesn't take some practice, but overall, it is fairly user
friendly.

Source: [dublincore.org/documents/dc-xml-guidelines/][8]  
Source: [lccn.loc.gov/85002192][9]

## Slide 24: Summary

- Metadata is data about data
- Its ability to describe data/information makes it a fundamental and
  ubiquitous part of information and communication technologies
- It makes automation possible, such as the sending of email
- It makes information retrieval possible, such as using a search engine or a 
  library database
- Values are automatically generated by our use of information and
  communication technologies, which creates 
- Privacy issues: so we need pay attention to the metadata we create and
  where we create it and who has access to it

## Slide 25: Summary

- It is also purposefully generated by our need to describe and organize
  information (e.g., Dublin Core)

[1]:http://www.wunderground.com/history/airport/KLEX/1990/1/1/DailyHistory.html?req_city=Lexington&req_state=KY&req_statename=&reqdb.zip=40536&reqdb.magic=1&reqdb.wmo=99999
[2]:https://commons.wikimedia.org/wiki/File:The_Alamo_at_Dusk.jpg
[3]:http://en.wikipedia.org/wiki/Toni_Morrison
[4]:http://commons.wikipedia.org/wiki/File:Christie1925.jpg
[5]:http://kieranhealy.org/blog/archives/2013/06/09/using-metadata-to-find-paul-revere/
[6]:http://dublincore.org/documents/dces
[7]:https://en.wikipedia.org/wiki/Downton_Abbey
[8]:http://dublincore.org/documents/dc-xml-guidelines/
[9]:http://lccn.loc.gov/85002192
[10]:https://www.worldcat.org/oclc/9342768
