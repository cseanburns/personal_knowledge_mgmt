# Working with Generative AI

## Introduction

Understanding and utilizing Generative AI as a Personal Knowledge Management (PKM) tool can be a useful way
to use applications like [ChatGPT][chatgpt], [Claude][claude], [Gemini][gemini], and others.
There are some fundamental keys to success to using them, though.
These include:

- asking good questions,
- engaging in lengthened exchanges with the AI versus one-off questions, and
- thinking critically about our engagement with AI.

Our interactions with AI are not simply about getting answers.
It's difficult to get good answers if we ask bad questions;
and sometimes it's necessary to ask a series of questions, to have *conversations*, in order to get:
good answers, to generate ideas, to understand or to create content, and to make informed decisions.

We also have to be critical about the questions we ask, the questions AI asks us in return, and the answers that AI provides.
Companies that provide AI services are providing them for profit, and
that often means they design these systems to encourage engagement because more engagement means more profit.
Engagement is the purpose of algorithms that keep us on TikTok, Instagram, and other social media platforms, and
this kind of designed engagement can be harmful to our physical and mental health
([Minamitani, 2024][minamitani_2024]; [Hill, 2025][hill_2025]).

Engagement with AI is driven less by algorithms that encourage us to endlessly and mindlessly scroll some feed
and more about using these technologies for all of our questions or tasks.
On the one hand, engaging substantially with AI is the key to getting good responses, but
it can also lead to conspiratorial thinking, as Hill (2025) illustrates.
This is because AI is the most human of all technologies humankind has created, and like humans,
it can give false answers, deceive us, or lead us astray in other ways.

In short, as I was told when I was growing up, <q>don't believe everything you read,</q>
and I believe axiom is as important as ever.
In addition to the keys to success listed above, verify everything AI tells you.
Part of the work of this course is to learn how to use information resources to do just that.

To start though, in this section, we'll delve into the art and science of **Prompt Engineering**.
This is the act of crafting your questions to AI in a way that guides AI to understand and
respond with the most useful and relevant information.
A well-constructed prompt, or series of prompts, can be the difference between getting a generic response and unlocking valuable insights.

## Using AI

To use generative AI successfully, you should implement the following practices:

1. **Choose a model**: Currently, AI technologies are often GPT-based or Reasoning-based. Both models are based on language ([LLMs][llm_wiki]) but are trained differently and have different architectures.
    - GPT-based models are more general-purpose, faster, and better at text generation. Their output is based on statistical probabilities in language.
    - Reasoning-based models are optimized for problem-solving, analysis, computation, and like. Reasoning-based models are better at math, science, engineering (including coding), and finance challenges.
1. **Write clear instructions/prompts**: Think carefully about what you're asking AI.
    - For GPT models, prompts should be clear, specific, provide context, break down tasks, and utilize examples.
    - For reasoning models, minimal prompts are best since these models were designed to reason.
1. **Provide Reference Text**: If using a GPT model, supply context or examples. This can help steer the AI towards the kind of response you're looking for.
1. **Split Complex Tasks into Simpler Subtasks**: If using a GPT model, break down bigger challenges to make them more manageable for the AI. This helps GPT models reason better, but it requires you to know how to reason yourself.
5. **Use External Tools**: If using a GPT model, integrate other tools and resources to augment the AI's capabilities.
6. **Test Changes Systematically**: If using a GPT model, experiment and evaluate how different approaches impact the AI's responses.

We can learn a lot about how to write clear instructions and prompts, and
the [Prompt Engineering Guide][prompt_engineering_guide] provides some guidance on this.
The **Examples of Prompts** page covers the following topics on ways to use generative AI.
Using Google's Gemini, I've added two additional columns that show which model is better suited for which task and why:

| Task | Better Suited Model Type | Why       |
|------|--------------------------|-----------|
| Text summarization | GPT models | GPT models are adept at understanding the main ideas of text and generating concise summaries. Their strength in text generation and pattern recognition makes them suitable for summarizing information quickly and efficiently. |
| Information extraction | Both, depending on complexity | For simple information extraction from well-structured text, both GPT and Reasoning models can be effective. However, for extracting information from ambiguous or complex sources, Reasoning models, with their emphasis on logical deduction and "needle-in-a-haystack" capabilities, may excel. |
| Question/Answering | Both, depending on complexity | For straightforward questions and clear answers, GPT models are generally sufficient. For multi-hop questions, complex queries, or questions requiring analysis of diverse sources, Reasoning models are better equipped to arrive at accurate and comprehensive answers. |
| Text classification | GPT models | While Reasoning models can be used for sentiment analysis, GPT models, particularly when fine-tuned, have shown strong performance in classifying emotions and sentiment. Their ability to understand context and language nuances is beneficial for this task. |
| Conversation | GPT models | GPT models are specifically designed for engaging in natural and coherent conversations. Their ability to generate human-like text and adapt to evolving contexts makes them ideal for building conversational AI applications. |
| Code generation | Reasoning models | Reasoning models, with their focus on step-by-step thinking and understanding of structured data, are better suited for code generation, especially for complex or multi-step tasks. They can generate more accurate and reliable code, and even suggest improvements. |
| Reasoning | Reasoning models | Reasoning models are specifically designed to excel at tasks requiring logical deduction, problem-solving, and multi-step breakdowns. They are trained to "think" through problems and arrive at accurate and well-reasoned conclusions. |

In the [Prompting Techniques][prompting_techniques] section,
the Prompt Engineering Guide describes multiple ways to engage with generative AI.
The first few items listed are good entry level approaches for constructing prompts.
These include:

- [Zero-shot prompting][zero_shot]: a prompt that does not provide AI with examples of how to answer the prompt.
- [Few-shot prompting][few_shot]: a prompt that provides some examples of how to answer the prompt.
- [Chain-of-thought prompting][chain_of_thought]: a series of prompts that encourage AI to show its reasoning process. Most useful for GPT-based models. Reasoning-based models are designed to include chain-of-thought prompting.

Please read through these techniques.

## Prompt Exchange with Google 

To illustrate these types of prompts,
below I demonstrate a session with Google's Gemini where I construct a series of prompts to talk about prompt engineering.
The goal of the session is to show how using generative AI effectively is iterative,
which means that I apply answers from Gemini to generate new responses.
You can read through the exchange at the following link:

- [Prompt Engineering: Crafting Instructions for AI (Example exchange)][prompt_example]

In this session, I perform the following steps:

1. I prompt Gemini about prompt engineering and how it works
2. I prompt it to provide an example of **few-shot prompting**
3. I prompt it to provide an example of **chain-of-thought prompting**
4. I give Gemini an example of [an abstract from a medical journal article][article_source], and I ask it to:
    - **summarize** the abstract so that a layperson can understand it
    - **extract** from the text what the study said was new about its findings
    - use the **question/answering** technique to find out about future studies and to suggest future studies

Lastly, we should know that generative AI can **hallucinate**.
That is, these applications can totally **make up** things about the world or lead us to conspiratorial thinking (Hill, 2025).
To demonstrate this, in my last prompt to Gemini, I tell it that I'm sharing the first paragraph of a famous novel,
and that I'd like it to tell me what novel it's from and to **classify** the text as neutral, positive, or negative.
However, in my prompt, I leave out the novel's first paragraph.
The problem is that Gemini does not catch this **error** but
still proceeds to answer the prompt, which it does by referring to the book *A Tale of Two Cities* by Charles Dickens.
In the last prompt, I point out to Gemini that I didn't share the novel's paragraph with it.
I then share it and it proceeds to tell me the source and classify the text appropriately.
In short, this is a good reminder that generative AI can make stuff up.

## Projects and Notebooks

One off sessions with generative AI are helpful, but oftentimes we might want to use generative AI for a project.
To help with this, OpenAI's ChatGPT and Anthropic's [Claude AI][collaborate_with_claude_on_projects]
offer [Projects][using_projects_in_chatgpt].
Google offers a separate generative AI app for projects called [NotebookLM][notebooklm].
These applications allow us to organize our work, upload multiple documents, query those documents, and
sometimes collaborate with others
(much of this depends on the paid plans that are also offered).

These services also are able to connect with other services.
For example, OpenAI's ChatGPT can connect with Google Drive and Microsoft OneDrive plus accept uploads from your computer.
NotebookLM can connect to Google Drive, accept links to sources, copied text, and accept uploads.

As an example use case, I can print this book as a PDF (see the printer icon at the top of the page),
create a project in NotebookLM called Personal Knowledge Management, and upload that PDF to that project.
I can add other sources, such as links to the sites that this book links to.
Using all of this, I can ask NotebookLM to create study guides, an audio overview or even a *fake* podcast on the document,
study guides, mind maps, and more.
I can **prompt** NotebookLM and ask questions about the uploaded content.
In short, it's like having a personal teacher's assistant.

## AI Agents

AI agents are applications that use other applications or tools and data to accomplish tasks.
Think of them as the beginnings of something like [JARVIS][jarvis_wiki],
the AI assistant that Tony Stark uses in the Avengers movies.
This entails what you think it does: things like a persona and capabilities like memories.

We will begin to see AI agents in the near future, although they already exist, and
Google provides a nice overview of [What is an AI agent?][what_agent]
But in short, AI agents will be able to act interactively or autonomously,
as a single agent operating independently, or as a multi-agent that collaborates with other AI agents
(AI Agent Swarm anyone???).

What exactly will AI agents do?
In healthcare settings, AI agents might assist medical professionals in diagnostics, surgery, and more.
In educational settings, they might assist professors in course management, students as TAs, and more
(see: [Canvas and Gemini AI][canvas_gemini]).
The Google documentation provides other examples, including AI agents as customer agents, employee agents, creative agents,
data agents, code agents, and security agents.

## The Ethical Issues with AI

### Environmental Considerations

There are a number of ethical considerations with AI that we need to be mindful of and that should shape our use of this technology.
First, AI uses a lot of resources.

- AI uses a lot of electricity and water.
    - In 2026, AI data centers are expected to use as much electricity as all of Japan, which means they'll use billions of gallons of fresh water to cool the hardware ([Berreby, 2024][berreby_2024]; [Zewe, 2025][zewe_2025]).
- AI requires hardware, which requires:
    - [mining][mining_wiki], which damages ecosystems, results in deforestation, soil erosion, pollutes water sources, and contributes to carbon emissions.
- IT manufacturing:
    - is energy intensive and uses hazardous chemicals ([Roy et al., 2025][roy_2025]).
- AI data labeling can be labor exploitative ([Pogrebna, 2024][pogrebna_2024]).

The industry hopes to use AI to counter some of these impacts.
For example, AI might help create more efficient heating and cooling systems and
minimize the impact of carbon-based energy sources.
Still, it's important to know that while information technologies have always had a negative environmental impact,
AI technologies increase how serious this impact is on our planet and the people living on it.

### Health considerations

AI technologies are non-deterministic.
This means that if we each give the same AI the same prompt, we each may get different answers.
And these differences may only grow as we ask it more questions.
Given this and the tendency for AI to hallucinate, it's no surprise that AI can cause conspiratorial thinking,
as illustrated in Hall (2025), and has allegedly cause some to harm themselves,
as reported in the news ([Payne, 2024][payne_2024]).

> Please, if you ever consider harming yourself, get help as soon as possible:
> Text 988, or call or chat at the [988 Suicide & Crisis Lifeline][988_suicide].
> Learn more about suicide prevention [https://www.nimh.nih.gov/health/topics/suicide-prevention][prevention].

### Cheating Considerations

Second, as students, you are responsible for your own learning and proving to instructors that you have learned the material.
Your eventual degree is a certification that you have acquired the skills and knowledge needed
to begin working in your field of choice.
If you use AI to *cheat*, then you will not be prepared to work in your field,
having relinquished your ability to **think** to a machine.

You should also know that each of your instructors may have their own policy on the use of AI in their courses.
While it may be allowed in some courses, it may not be allowed at all in others.
Or if it's allowed, it may be allowed in certain scenarios only.
You need to be mindful of the policies that your instructors have for their courses.
The same holds true for your future employers.

The ethical aspect of being a student is grounded in your role as a learner.
If you use AI, use it to augment your learning and your thinking and not to replace it.
As the science fiction author [Neal Stephenson][stephenson_ai] wrote:

> Speaking of the effects of technology on individuals and society as a whole, Marshall McLuhan wrote that every augmentation is also an amputation. [...] Today, quite suddenly, billions of people have access to AI systems that provide augmentations, and inflict amputations, far more substantial than anything McLuhan could have imagined. This is the main thing I worry about currently as far as AI is concerned. I follow conversations among professional educators who all report the same phenomenon, which is that their students use ChatGPT for everything, and in consequence learn nothing. We may end up with at least one generation of people who are like the Eloi in H.G. Wells's The Time Machine, in that they are mental weaklings utterly dependent on technologies that they don't understand and that they could never rebuild from scratch were they to break down. Earlier I spoke somewhat derisively of lapdogs. We might ask ourselves who is really the lapdog in a world full of powerful AIs.

## Conclusion

Generative AI is a technology that offers a lot of potential for personal knowledge management.
In this lesson, we learned how to use generative AI effectively by engaging in lengthy sessions
that involve creating well-constructed prompts.
To construct good prompts, we employed tactics such as **few-shot prompting** and **chain-of-thought** prompting and
demonstrated other aspects of prompting.

With tools such as Google's NotebookLM, we learned how to incorporate our own data that we have collected to
continue to work on our prompts and to generate new content, ideas, and perhaps even, knowledge.

Ethically, we should be aware of the environmental costs of IT, which includes AI and its associated technologies,
the mental and physical health risks of these technologies, and
as students, we should recognize that we are learners first and foremost and that to use AI, unthinkingly,
may result in losing our ability to think ourselves.

[988_suicide]:https://988lifeline.org/
[article_source]:https://pubmed.ncbi.nlm.nih.gov/30944985/
[berreby_2024]:https://e360.yale.edu/features/artificial-intelligence-climate-energy-emissions
[chain_of_thought]:https://www.promptingguide.ai/techniques/cot
[chatgpt]:https://chat.openai.com
[claude]:https://claude.ai
[collaborate_with_claude_on_projects]:https://www.anthropic.com/news/projects
[few_shot]:https://www.promptingguide.ai/techniques/fewshot
[gemini]:https://gemini.google.com/
[hill_2025]:https://www.nytimes.com/2025/06/13/technology/chatgpt-ai-chatbots-conspiracies.html
[jarvis_wiki]:https://en.wikipedia.org/wiki/J.A.R.V.I.S.
[minamitani_2024]:https://law.stanford.edu/2024/05/20/social-media-addiction-and-mental-health-the-growing-concern-for-youth-well-being/
[mining_wiki]:https://en.wikipedia.org/wiki/Environmental_impact_of_mining
[notebooklm]:https://notebooklm.google.com/
[payne_2024]:https://apnews.com/article/chatbot-ai-lawsuit-suicide-teen-artificial-intelligence-9d48adc572100822fdbc3c90d1456bd0
[pogrebna_2024]:https://theconversation.com/ai-is-a-multi-billion-dollar-industry-its-underpinned-by-an-invisible-and-exploited-workforce-240568
[prevention]:https://www.nimh.nih.gov/health/topics/suicide-prevention
[prompt_engineering_guide]:https://www.promptingguide.ai/introduction/examples
[prompt_example]:https://g.co/gemini/share/e00100b403e1
[prompting_techniques]:https://www.promptingguide.ai/techniques
[roy_2025]:https://arxiv.org/abs/2505.11236
[stephenson_ai]:https://nealstephenson.substack.com/p/remarks-on-ai-from-nz
[using_projects_in_chatgpt]:https://help.openai.com/en/articles/10169521-using-projects-in-chatgpt
[what_agent]:https://cloud.google.com/discover/what-are-ai-agents
[zero_shot]:https://www.promptingguide.ai/techniques/zeroshot
[zewe_2025]:https://news.mit.edu/2025/explained-generative-ai-environmental-impact-0117
[canvas_gemini]:https://www.instructure.com/resources/blog/unleash-power-ai-canvas-gemini-ltitm
[llm_wiki]:https://en.wikipedia.org/wiki/Large_language_model
