# Working with Generative AI

Understanding and utilizing Generative AI as a Personal Knowledge Management (PKM) tool can be a useful way
to use applications like [ChatGPT][chatgpt], [Claude][claude], [Gemini][bard], and others.
There are two fundamental keys to success:

- asking good questions, and
- engaging in lengthened exchanges with the AI.

These interactions are not simply about getting answers;
they're about generating ideas, understanding and creating content, and making informed decisions,
which you'll further enrich with credible information from library and web sources later in the semester.

In this section, we'll delve into the science of **Prompt Engineering**.
This is the act of crafting your questions and commands in a way that guides the AI to understand and respond
with the most useful and relevant information.
A well-constructed prompt can be the difference between getting a generic response and unlocking valuable insights.

## Using AI

To use generative AI successfully, you should implement the following practices ([Prompt Engineering Guide][prompt_engineering_guide]):

1. **Write Clear Instructions**: The clearer your request, the better the AI can meet your needs.
2. **Provide Reference Text**: Supplying context or examples can significantly steer the AI towards the kind of response you're looking for.
3. **Split Complex Tasks into Simpler Subtasks**: Breaking down bigger challenges makes them more manageable for the AI.
4. **Give Generative AI Models Time to Think**: Sometimes, complex queries require a moment for the AI to process and respond thoughtfully.
5. **Using External Tools**: Learn how to integrate other tools and resources to augment the AI's capabilities.
6. **Testing Changes Systematically**: Experiment and evaluate how different approaches impact the AI's responses.

Below I demonstrate a session with Google's Gemini where I construct a series of prompts to talk about prompt engineering.
The goal of the session is to show how using generative AI effectively is iterative,
which means that I apply answers from Gemini to generate new responses.

The Prompt Engineering link above provides other important information on prompting.
The **Examples of Prompts** page covers the following topics on ways to use generative AI:

- Text summarization
- Information extraction
- Question answering
- Text classification
- Conversation
- Code generation
- Reasoning

In the [Prompting Techniques][prompting_techniques] section,
the Prompt Engineering Guide describes multiple ways to engage with generative AI.
The first few items listed are good entry level approaches to construct prompts.
These include:

- [Zero-shot prompting][zero_shot]
- [Few-shot prompting][few_shot]
- [Chain-of-thought prompting][chain_of_thought]

And more.
Please read through these techniques.

## Prompt Exchange with Google 

The following is a link to a session I conducted with Google Gemini.

- [Prompt Engineering: Crafting Instructions for AI (Example exchange)][prompt_example]

In this session, I perform the following steps:

1. I prompt Gemini about prompt engineering and how it works
2. I prompt it to provide an example of **few-shot prompting**
3. I prompt it to provide an example of **chain-of-thought prompting**
4. I give Gemini an example of [an abstract from a medical journal article][article_source], and I ask it to:
    - **summarize** the abstract so that a layperson can understand it
    - **extract** from the text what the study said was new about its findings
    - use the **question/answering** technique to find out about future studies and to suggest future studies

Lastly, we should know what generative AI **hallucinates**.
That is, these applications can totally **make up** things about the world.
To demonstrate this, in my last prompt to Gemini, I tell it that I'm sharing the first paragraph of a famous novel,
and that I'd like it to tell me what novel it's from and to **classify** the text as neutral, positive, or negative.
However, in my prompt, I leave out the novel's first paragraph.
The problem is that Gemini does not catch this **error** but proceeds to tell me about the book *A Tale of Two Cities* by Charles Dickens.
In the last prompt, I point out to Gemini that I didn't share the novel's paragraph with it.
I then share it and it proceeds to tell me the source and classify the text.
In short, though, this is a good reminder that generative AI can make stuff up.

## Projects and Notebooks

One off sessions with generative AI are helpful, but oftentimes we might want to use generative AI for a project.
To help with this, OpenAI's ChatGPT offers [Projects][using_projects_in_chatgpt] as well as does
Anthropic's [Claude AI][collaborate_with_claude_on_projects].
Google offers a separate generative AI app for projects called [NotebookLM][notebooklm].
These applications allow us to upload multiple documents, query those documents, and sometimes collaborate with others
(much of this depends on the paid plans that are also offered).

These services also are able to connect with other services.
For example, OpenAI's ChatGPT can connect with Google Drive and Microsoft OneDrive plus accept uploads from your computer.
NotebookLM can connect to Google Drive, accept links to sources, copied text, and accept uploads.

As an example use case, I can use the print function of this work (see the printer icon at the top of the page)
to print out a PDF copy of this book.
I can then create a project in NotebookLM called Personal Knowledge Management, and upload that PDF to that project.
I can also add other sources, such as links to the sites that this book links to.
Using all of this, I can ask NotebookLM to create study guides, an audio overview or even a *fake* podcast on the document,
using two make believe podcasters who discuss the book, study guides, mind maps, and more.
I can **prompt** NotebookLM and ask questions about the uploaded content.
In short, it's like having a personal teacher's assistant.

## AI Agents

AI agents are applications that use other applications or tools and data to accomplish tasks.
Think of them as the beginnings of something like [JARVIS][jarvis_wiki], the AI assistant that Tony Stark uses in the Avengers movies.
This entails what you think it does: things like a persona and capabilities like memories.

We will begin to see AI agents in the near future, although they already exist, and
Google provides a nice overview of [What is an AI agent?][what_agent]
But in short, AI agents will be able to act interactively or autonomously,
as a single agent operating independently, or as a multi-agent that collaborates with other AI agents
(AI Agent Swarm anyone???).

What exactly will AI agents do?
In healthcare settings, they might assist medical professionals in diagnostics, surgery, and more.
In educational settings, they might assist professors in course management, students as TAs, and more.
Google provides other examples, including AI agents as customer agents, employee agents, creative agents,
data agents, code agents, and security agents.

## The Ethical Issues with AI

### Environmental Considerations

There are a number of ethical considerations with AI that we need to be mindful of and that should shape our use of this technology.
First, AI uses a lot of resources.

- AI uses a lot of electricity and water.
    - In 2026, AI data centers are expected to use as much electricity as all of Japan and billions of gallons of fresh water to cool the hardware ([Berreby, 2024][berreby_2024]; [Zewe, 2025][zewe_2025]).
- AI requires hardware, which requires:
    - [mining][mining_wiki], which damages ecosystems, results in deforestation, soil erosion, etc. 
    - pollutes water sources
    - contributes to carbon emissions
- IT manufacturing:
    - is energy intensive
    - uses hazardous chemicals ([Roy et al., 2025][roy_2025])
- AI data labelling can be labor exploitative ([Pogrebna, 2024][pogrebna_2024])

The industry hopes to use AI to counter some of these impacts.
For example, AI might help the efficiency of heating and cooling systems and minimize the impact the use of carbon-based energy sources.
Still, it's important to know that IT has a serious impact on our planet and the people living on it.

### Cheating Considerations

Second, as students, you are responsible for your own learning and proving to instructors that you have learned the material.
Your eventual degree is a certification that you have acquired the skills and knowledge needed to begin working in your field of choice.
If you use AI to *cheat*, then you will not be prepared to work in your field, having relinquished your ability to **think** to a machine.

You should also know that each of your instructors may have their own policy on the use of AI in their courses.
While it may be allowed in some courses, it may not be allowed at all in others.
Or if it's allowed, it may be allowed in certain scenarios only.
You need to be mindful of the policies that your instructors have for their courses.

The ethical aspect of being a student is grounded in your role as a learner.
If you use AI, use it to augment your learning and your thinking and not to replace it.
As the author [Neal Stephenson][stephenson_ai] wrote:

> Speaking of the effects of technology on individuals and society as a whole, Marshall McLuhan wrote that every augmentation is also an amputation. [...] Today, quite suddenly, billions of people have access to AI systems that provide augmentations, and inflict amputations, far more substantial than anything McLuhan could have imagined. This is the main thing I worry about currently as far as AI is concerned. I follow conversations among professional educators who all report the same phenomenon, which is that their students use ChatGPT for everything, and in consequence learn nothing. We may end up with at least one generation of people who are like the Eloi in H.G. Wells's The Time Machine, in that they are mental weaklings utterly dependent on technologies that they don't understand and that they could never rebuild from scratch were they to break down. Earlier I spoke somewhat derisively of lapdogs. We might ask ourselves who is really the lapdog in a world full of powerful AIs.

## Conclusion

Generative AI is a technology that offers a lot of potential for personal knowledge management.
In this lesson, we learned how to use generative AI effectively by engaging in lengthy sessions
that involve creating well-constructed prompts.
To construct good prompts, we employed tactics such as **few-shot prompting** and **chain-of-thought** prompting and
demonstrated other aspects of prompting.

With tools such as Google's NotebookLM, we learned how to incorporate our own data that we have collected to
continue to work on our prompts and to generate new content, ideas, and perhaps even, knowledge.

Ethically, we should be aware of the environmental costs of IT, which includes AI and its associated technologies.
As students, we should recognize that we are learners first and foremost and that to use AI, unthinkingly,
may result in losing our ability to think ourselves.

[article_source]:https://pubmed.ncbi.nlm.nih.gov/30944985/
[berreby_2024]:https://e360.yale.edu/features/artificial-intelligence-climate-energy-emissions
[chain_of_thought]:https://www.promptingguide.ai/techniques/cot
[chatgpt]:https://chat.openai.com
[claude]:https://claude.ai
[collaborate_with_claude_on_projects]:https://www.anthropic.com/news/projects
[few_shot]:https://www.promptingguide.ai/techniques/fewshot
[gemini]:https://gemini.google.com/
[jarvis_wiki]:https://en.wikipedia.org/wiki/J.A.R.V.I.S.
[mining_wiki]:https://en.wikipedia.org/wiki/Environmental_impact_of_mining
[notebooklm]:https://notebooklm.google.com/
[pogrebna_2024]:https://theconversation.com/ai-is-a-multi-billion-dollar-industry-its-underpinned-by-an-invisible-and-exploited-workforce-240568
[prompt_engineering_guide]:https://www.promptingguide.ai/introduction/examples
[prompt_example]:https://g.co/gemini/share/e00100b403e1
[prompting_techniques]:https://www.promptingguide.ai/techniques
[roy_2025]:https://arxiv.org/abs/2505.11236
[stephenson_ai]:https://nealstephenson.substack.com/p/remarks-on-ai-from-nz
[using_projects_in_chatgpt]:https://help.openai.com/en/articles/10169521-using-projects-in-chatgpt
[what_agent]:https://cloud.google.com/discover/what-are-ai-agents
[zero_shot]:https://www.promptingguide.ai/techniques/zeroshot
[zewe_2025]:https://news.mit.edu/2025/explained-generative-ai-environmental-impact-0117
