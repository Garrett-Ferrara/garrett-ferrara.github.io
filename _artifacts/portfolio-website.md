---
title: "Portfolio Website"
summary: "A professional portfolio website built with Jekyll and hosted on GitHub Pages, showcasing work, CV, and writing with responsive design and accessible features."
role: "Designer & Developer"
course: "ENC 6952 - Rhetoric and Composition Graduate Capstone"
tags: ["Agentic Coding", "Academic Writing", "Web Design"]
date: 2025-12-01
weight: 7
github: "https://github.com/Garrett-Ferrara/garrett-ferrara.github.io"
---

<iframe width="100%" height="540" src="https://www.youtube.com/embed/hUFNLTZn7QI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="aspect-ratio: 16 / 9; max-width: 80%; margin: 0 auto; display: block;"></iframe>

## The Blurred Line Of Authorship: Reflections on the Construction of This Portfolio

**Generative AI Disclaimer:** Despite my best efforts, the author acknowledges the use of ChatGPT 5.1 in proofreading this document.

As I prepare to package this site up into its official first version, it and its accompanying portfolio represent the culmination of six years of hybrid study toward my Master of Arts in Rhetoric and Composition. These years have been a confluence of professional and personal life events. I started primarily interested in rhetoric and cultural theory, then dropped the program while near the finish line for several years to focus on my professional career. I explored where I wanted to take that career, first as a knowledge manager capturing critical information to support an operations team and call center, and later as the managing editor of a team of open-source intelligence analysts investigating online harms to businesses, nonprofits, and their personnel. I faced ongoing service-connected health challenges, the loss of a close family member, and a layoff. I got married and bought a house, marking the start of a family of my own.

To summarize these critical years in a polished, nearly sterile personal website filled with finished pieces felt almost disrespectful to all that happened, showcasing the "what" without enough surviving revision history to capture the "how" and the "who". I took this reflection, one requirement for my graduate capstone class, as my opportunity to rectify those feelings, capturing just a bit of what went into my work behind the scenes. Much of my recent studies focused heavily on integrating generative AI in thoughtful and purposeful ways to elevate my writing, blurring the line between my authorship and what a machine generated.

In the same way, every piece in this portfolio, from school assignments to finished intelligence reports, is rarely entirely honest in listing myself as sole author. Though I drafted the text, each emerged through the liminal discussions and soundboarding with peers, mentors, family, and friends. The work we accomplish and the genres we accomplish them in are always a negotiation in social action; my work in the program helped show the looming specter of generative AI as its own collaborator with new contexts to negotiate. Understanding how to use it, rather than fight it, can preserve the value of human intellectual labor while giving us more agency in how we choose to engage that labor.

## Selecting Portfolio Pieces

Early in the process, I knew I wanted to capture three types of artifacts in my portfolio:

* Academic work that shows a progression from early, rough assignments to finished and polished webtexts.
* Public-facing, private-sector work I edited while working at Alethea, showcasing our team's investigations into influence campaigns and online risks.
* My most recent coding projects accomplished through Claude Code, which included the scraper used in Black Box Network Sense, the LLM analysis tool used in Brand Reputation in the Post-Search Web, and this website itself.

While the latter two types had obvious choices by the end, picking academic projects to showcase was difficult, and it was the exigence of being unsatisfied with some of my early work that led to the two webtexts appearing within. Roughly five years of fast-paced work passed since I turned in those early assignments, during which I had grown considerably in my skills and confidence in presenting academic ideas. In the early work, I see minor typos, design choices I wouldn't make today, and a lack of the drive and vision that I feel shines through in the two webtexts.

In the end, it was exactly because of this growth that I decided to include the three earlier graduate work pieces in this portfolio. "Becker in Rhetoric Theory and Praxis" was my first major assignment in grad school, an opportunity to combine my then-newfound academic interests with a book and author that held very special meaning in overcoming some post-military personal challenges. The "Applied Technical & Professional Communication Theory Worksheet" was a minor assignment I would do entirely differently today, but it captured the rhetorical situation more clearly than anything else I had records of, one of the most valuable practical applications of rhetoric theory. "The Intersection of Tech & The Writing Process" was the first research endeavor I was truly proud of, showing off how I used technology in my own writing process to comment on the idea of a linear writing process.

Though I am not credited as an author on any of the Alethea reports, each piece is intertwined with my contributions as an editor, from planning the investigations, developmental editing of ideas, and line-editing the final text. These documents had chaotic lifecycles defined often by strict deadlines, and I decided to include them to showcase what practical open-source investigations I've worked on. Though my job title was "editor", I found myself analyzing data to synthesize new conclusions, hosting working group discussions to clarify and refine ideas, and collaborating closely to optimize and combine the work of investigators from different writing backgrounds.

The coding projects contained were the final entries I wanted to include. I used github as part of the development process for each project, so adding the three public repositories was a simple and quick way to showcase the technical side of the project for those looking for those capabilities.

## Building the Site

I chose to host this site as a GitHub page for three reasons: GitHub pages are free, having a "github.io" link might offer some ethos appeal in job applications, and having to build the website myself instead of using a WordPress or Wix template meant I'd actually have to apply my web design knowledge. The only problem in a five-year gap since the last time I had to touch HTML, CSS, or JavaScript turned out not to be a problem at all for my new collaborators since then, ChatGPT and Claude Code.

In working with Claude Code to build an academic journal scraper, I found that the most effective way to build larger projects with AI coding agents is to give one, detailed set of instructions at a time rather than try to work iteratively. I started by drafting the instructions myself, but quickly decided this was a task best suited to a different LLM, in this case ChatGPT so as to preserve my Anthropic tokens for Claude Code. This [chat](https://chatgpt.com/share/6931232a-a2f0-8004-a04c-f8791d6d734f) with ChatGPT captures the entire process used to build the scaffolding for this site, summarized below:

1. My initial prompt briefly described the context then asked ChatGPT to interview me to help design a prompt I could feed into Claude Code. In this prompt, I also described some of the artifacts I wanted to include.

2. ChatGPT asked me a list of 15 questions related to the style, content, and technical considerations of the website. Though I had clear needs for content, I hadn't yet considered the style and tech stack. I answered the questions and told the chat that it could fill in the website with filler text that I would later go in and replace manually.

3. ChatGPT generated a lengthy prompt for me, which I could download as a text file. The full prompt is available in the chat link above.

4. It just worked. I edited the prompt above slightly to fine-tune it, and Claude Code designed, built, and deployed the website over about a half hour on the first try with limited input from me.

While the other 95% of the time spent working on this portfolio involved iterative prompts to customize the style and content, core visual and interactive elements from that initial build made it into the final project. In one example, I was so excited about how well the website was coming along that I sent it to a friend to review. His comment, "I really like what you did with the portfolio," confused me — I had only spent time on the home page by this point. That friend saw portfolio cards and filters before I did, which I kept in the final design of the site. Other visual aspects "chosen" by Claude Code include the hero box summary with my picture, the call to action buttons, and the pill-style design of the skills in the resume.

I didn't find this process to rob me of my own voice and creative vision any more than using existing template-based website creators like WordPress and Wix. To the contrary, I felt empowered to make my own design decisions; if I could describe what I wanted well enough, Claude Code could likely build it. In this way, I see using AI coding agents as an improvement over the design of Web 2.0 social media sites, which are mediated entirely though templates that greatly restrict what users can submit. It's not quite a return to the wild west of the Web 1.0 environment of personally hosted sites, but a middle ground that bridges accessibility with author customization.

## The Next Chapter

At the time of writing, I'm the least certain of the direction of my future as I've ever been. I'm unemployed in an abysmal job market with a broad set of skills and accomplishments, and the recent government shutdown means I will be unable to use VA vocational benefits to retreat back to school in the Spring while I figure it out. Despite that, I'm busier than I've ever been; the lack of certainty brings with it a lack of complacency. If the past six years were defined by tumult, these last six months have been defined by directing that commotion toward new creative, academic, and professional ventures. It's been rewarding, but now the next chapter will be defined by how I apply those ventures.

Will this portfolio and its reflection as an artifact have a major impact in that definition? It's unclear, but my candid assessment finds it somewhat unlikely. I've been a hiring manager for a job with over a hundred applicants; I know first-hand that most applicants get at best a few minutes of attention before deciding if someone is worth an interview. In the current job market, I frequently see job postings with thousands of applicants. From a strictly utilitarian perspective, this portfolio will have accomplished its goal if the ethos of a professional GitHub site piques a hiring manager's attention, and I'd be thrilled to find out they actually read some of the artifacts contained within. As for the academic contexts where this portfolio would serve powerful value in publishing research, that will have to wait until I stabilize my career and finances. My next steps will involve finding my next mission, whether that's in intelligence analysis, knowledge management, or somewhere I haven't thought of yet.

But this project and my entire Master's was never about assembling artifacts I could show off in a job hunt, no more than my growing use of AI throughout the program was meant to replace the rigor of thoughtful human effort that goes into writing. There were cheaper and less time-consuming avenues for those artifacts, and I've already applied the professional value of the program in my career building systems and writers that help get the right information into the right hands at the right time.

In all this uncertainty, this portfolio's value is in how it captures six years of growth in a moment to pause and reflect on the praxis that led to its creation: who I was when I began, who I became through the work, and how each assignment, job, setback, and collaboration shaped my voice and professional identity. I understand more now than I did about how I've intentionally or subconsciously applied rhetorical concepts and theory in my work, and I find myself in a place where I feel confident I can help others apply them as well. The last lesson I've realized through my final graduate work with AI and this reflection is that my writing has always been co-authored, directly or indirectly. Whether an author decides to use AI or not won't change that. The impact, seen in assembling this portfolio, will come from whether an author consciously chooses to use other voices to avoid the effort of creating and engaging with new ideas or thoughtfully synthesizes every outside influence, whether human or machine, into new ideas worth sharing.

As I deploy this last update to the site for now and close this chapter of my education, I step away confident as a member of the latter.
