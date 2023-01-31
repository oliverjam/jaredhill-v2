---
title: "Standard Bank: a case study"
tags:
  - case study
date: 2017-10-27
callout: A greenfield, ground-up digital rebuild of a corporate banking platform for Africa's largest bank, giving businesspeople a faster, easier and more transparent way to access banking services.
info:
  date: May 2019 - Jun 2020
  timeline: Fully operational MVP in 14 weeks; iteration and feature build-out for the subsequent 9 months.
  client: Standard Bank
  role: Lead Product Designer
showToc: true
---

## Project Summary

Standard Bank, the largest bank in Africa with a presence in 17 African countries, had been losing corporate clients rapidly, with feedback that their systems and processes were falling behind their competitors’. Myself and my team from Oliver Wyman were asked to help build a greenfield corporate banking platform that gave businesspeople faster, easier and more transparent way to access banking services.

The discovery period — which included interviews and tests with users in the pilot country of Uganda — found that a number of the underlying assumptions about the user problems were wrong, and a solution was developed from idea to live product in 14 weeks, which completely redesigned the way that the bank’s clients applied for and received transaction products.

I led a design team of four as we undertook user interviews on the ground in Uganda, workshopped and tested solutions, designed the responsive PWA and managed delivery with the development team.

<light-box @src="sb-image1.webp" @alt="Jared interviewing users in Uganda.">Interviewing users in Uganda.</light-box>

By creating a highly transparent, accessible process, the new platform greatly increased user satisfaction, and was able to reduce lead times on applications from 2–3 days down to less than an hour. Thanks to the strong feedback from users, the product is now being iterated upon and rolled out in other markets. The project also won the [Innovation in Digital Banking Award](https://www.iol.co.za/business-report/companies/standard-bank-wins-innovation-in-digital-banking-africa-award-2aea5d1e-8589-4eb3-a6b3-d68ac620a94b) from The Banker.

<light-box @src="https://cdn-images-1.medium.com/max/3376/0*szBphppLDhM9GSKo.png"></light-box>

## Background

Over the past 20 years, banking in Africa has evolved very differently to banking in the Western world. Banking access is not universal, and for those who do have access, banking has had to adapt to the unique requirements of African users, such as varied access to internet services and the proliferation of mobile. However, by 2019, a number of factors meant that the digitisation of African banking was starting to look more and more feasible. Standard Bank, who were experiencing high levels of customer dissatisfaction as well as rising fixed costs, saw an opportunity to completely rethink and rebuild their digital offering to businesses. They called the program ‘Quantum Leap’.

**The challenge:** To understand the key problems that users had with the current process and platform and build an MVP which would address these problems. The MVP needed to be robust enough to scale with the addition of features over the next 3 years of iteration, to become the hub for all corporate banking across the bank.

**The team and my role**: The design team consisted of 4 product designers, headquartered at Standard Bank headquarters in Johannesburg and spending time in the pilot country, Uganda, as part of discovery and testing. I worked as Design Lead. As such, I led the UX, UI, branding, and was involved in product strategy decisions as well as client interactions and feedback.

**The timeline:** The MVP was to be operational in 14 weeks.

## Understanding the problem

The discovery phase started with a number of workshops held in London and Joburg with client stakeholders to understand the current situation, process, and business requirements. We didn’t have access to users at this time, but user research and interviews had been conducted by the client-side team, and we used this opportunity to synthesise this research as a group. We created _empathy maps_ and _as-is experience maps_, to understand the current process and identify the pain points of applying for banking products such as Letters of Credit and Guarantees.

<light-box @src="https://cdn-images-1.medium.com/max/2560/1*Qa0xVo-HgYKHxCkOenUBcQ.jpeg">Creating empathy maps as a group.</light-box>

<light-box @src="https://cdn-images-1.medium.com/max/8064/1*w6bwgtZe1-0zucYznayyug.jpeg">Analysing the existing customer journey and finding pain points.</light-box>

As expected based on customer churn, user feedback (as relayed by the stakeholders) was overwhelmingly negative:

- Users felt the the process was convoluted and confusing, and still overly relied on phone calls, paper, and antiquated digital products. For example, to get approval from signatories, the bank would often have to send the documents via _boda boda_ (motorcycle) across Kampala to the various signatories.

- Users felt it took too long to go from application to issuance - up to 3 days.

### User survey

In lieu of more comprehensive and qualitative user research (which we did not have access to at this stage), we carried out a survey to ask users about their main pain points and desired features. We found out a few interesting things:

- _Not knowing the status of my application_ was the most cited pain point, with 83% of users rating it ‘high’ or ‘very high’ in terms of pain

- _Application taking too long_ was also a big issue for 75% of users

- We also found out that the two most popular browsers for users were Chrome and _Internet Explorer _(used by 35% of users!)_._ What joy! This became an important consideration and I spent a lot of time working with developers to make sure that the interface decisions would not push IE’s capabilities too far.

The survey results were analysed with the caveat that they were self-declared pain points, and therefore needed to be validated before forming the base of our UX and product decisions.

<light-box @src="https://cdn-images-1.medium.com/max/7808/1*h0dkSf1eoJIFV9l368hn2w.jpeg"></light-box>

## Synthesising the initial research

Based on our understanding of the problems and users, proto-personas were created to get represent the key findings and frustrations for the three main user groups:

<light-box @src="https://cdn-images-1.medium.com/max/19196/1*bEQYB9rB7ipEP1e-1E4xPA.jpeg"></light-box>

To guide design direction, early versions of design principles were also created:

- _Simple_: The current application process is highly complex and confusing for both end-users and colleagues. The new product must reduce complexity (or perceived complexity) and be simple enough for a layperson to understand.

- _Personalised_: Users complained that no matter how many times they run the process, it never got smarter. The interface must adapt to each individual user’s needs and requirements.

- _Mobile-first_: All previous banking products had been desktop-only. However, business in Uganda was increasingly done on-the-go with smartphones, on-the-go. The new product should be designed mobile-first, to future-proof it and make it easier to manage the process from anywhere.

## Initial designs

Whilst I didn’t feel we had collected enough primary research to be certain about our design decisions, I decided that early work on information architecture and high-level interface structure would be helpful to get the ball rolling, and also have a straw-man to test with the users in Uganda.

<light-box @src="https://cdn-images-1.medium.com/max/8064/1*8UzRAmyf-JjsswnpXZYTUg.jpeg">Some early wire flows.</light-box>

<light-box @src="https://cdn-images-1.medium.com/max/5728/1*DvxvVnWMJSAxRxz94eQoAg.jpeg">Early explorations of the interface, attempting to get our head around the process and the best way of representing it on the interface.</light-box>

Research suggested that the bank’s clients had higher expectations of products due to advancements in personal banking, and so the wireframes aimed to take cues from popular personal banking apps in order to simplify the experience. There was no reason why corporate banking couldn’t be as simple and intuitive as personal banking had become.

<light-box @src="https://cdn-images-1.medium.com/max/6394/1*redXY1JogKcauJI3Ce2HRA.png">Mid-fidelity wireframes for testing.</light-box>

In preparation for interviews with users, I lead the design of a mid-fidelity prototype in order to test some of the key assumptions made in the discovery stage. The prototype would allow a user to log on, make an application through a personalised application form, and watch the application move through the process. We wanted to find out whether the users understood the process, whether some of the IA decisions matched the users’ mental models, and added some colour to the wireframes to see how we could use the information hierarchy to emphasise areas of the interface and therefore make the process clearer to the users.

## On the ground user interviews and tests

Armed with the proto-personas, design principles, and various assumptions around user problems, I spent a week in Uganda with a couple of client stakeholders, talking to clients as well as colleagues who were typically involved in the process from the Standard Bank side. The conversations with users started with interview questions which aimed to validate some of the secondary research, and then a usability test of the current prototype (link [here](<https://www.figma.com/proto/JhZjQ8jdLqXgA94kPkakhd/Trade-Core---Flow-Graveyard-V1-(Copy)?page-id=1%3A2213&node-id=7%3A3408&viewport=4979%2C1413%2C0.25&scaling=scale-down-width&starting-point-node-id=7%3A3408&hide-ui=1>)).

<light-box @src="https://cdn-images-1.medium.com/max/2560/1*yLkd-J2kNiE63P3dVmd77Q.jpeg"></light-box>

We learned a huge amount through this first round of testing, which countered a lot of the assumptions made about the users previously:

- We assumed that users wanted the _fastest possible process_, but this was wrong. Users didn’t really mind if the process took one hour or day. They complained about how unpredictable it was: sometimes it would take one hour, but sometimes it would take one week.

- In addition to the _consistency_ theme, users said that sometimes an application would get ‘stuck’ in the process and they would not know for days. Colleagues said that this was a problem too; sometimes a colleague would be assigned a task and then forget to do it, and the application would become ‘lost in the process.

- We were surprised to learn that colleagues themselves had a very confused understanding of the application process too. They were aware of what they had to do, but very few had a wholistic understanding of everything that needed to happen to have an application granted.

In addition to these key findings, I identified a number of usability issues with the early interface designs.

<light-box @src="https://cdn-images-1.medium.com/max/6796/1*v2Sv1nso0Uu3WcWwVVCCfA.png">Some of the many usability issues.</light-box>

- Users liked that the new process digitised a lot of the offline work, but were still very unclear about the process as a whole, and the product still had a steep learning curve, with a lot of banking terminology.

- We noticed that users were less familiar with some of the more common desktop UX patterns we take for granted with users in the UK and US, and struggled to find key buttons to move to next stages of the process.

## Iterating our assumptions

Based on this feedback, we iterated the personas, principles and user problems to reflect the new findings:

<light-box @src="https://cdn-images-1.medium.com/max/17956/1*Mud1_DuKy6Binm0ItA5ROA.jpeg">The new design principles.</light-box>

<light-box @src="https://cdn-images-1.medium.com/max/19218/1*0G8tuCJW-el2UQePFy6qrQ.jpeg">Personas adapted to reflect some of the interview findings.</light-box>

There were some key changes to the product strategy and user experience that resulted from these new findings.

### The Product page and the Primary Action button

It was clear that the core of the experience for all parties was the application (for either a Letter of Credit or Guarantee). As such, we decided to build out a highly robust and scalable ‘hub’ for each individual application, which would host all relevant information and actions for that application. We would aim to make this the place that all colleagues and end-users would come to find out more information about their application.

<light-box @src="https://cdn-images-1.medium.com/max/19400/1*sEyrDenvNijlSBu2QX7mvA.png">Different explorations and iterations of the Product page, with accordions and key action buttons.</light-box>

The application process, whilst long and complex, was also quite linear — that is, an application is moved between stakeholders, each with a single action to complete. I saw this as an opportunity, and decided to introduce a pattern called the ‘Primary Action Button’, which would sit at the top right hand side of the Product page, and only appear when there was a critical action that the user needed to complete to move to the next stage of the application. Combined with stripped back UI design, this button really stood out visually, hopefully demarcating the key action for users.

### The Status Tracker

The decision was made that the obscured process for colleagues and clients had to be surfaced _even more explicitly_ in order to genuinely resolve the pain points. I designed and implemented the Status Tracker, which transparently represented the entire process of an application from start to finish, including all tasks that needed to be done. This radical transparency was new to the bank, and added accountability to all parties responsible for moving the application to the next stage. It gave clients the ability to see where their application was in the process, and if it was stuck in the process, where it was stuck.

<light-box @src="https://cdn-images-1.medium.com/max/4938/1*xWX0ollVgdKi-1ie0-0gMA.png">An early iteration of the Status Tracker.</light-box>

### The ‘draft’ conceptual model

From a service design perspective, I lead the implementation of a new step in the process, the ‘draft’ stage. Previously, an application would be produced by the bank for the client, but then this would be amended multiple times, creating a lot of back and forth with the bank, and a lot of waiting.

By introducing the ‘draft’ conceptual model borrowed from email (something the users understood), I introduced a new stage in the process that allowed the users to create and edit draft applications multiple times before they even got the bank involved. The hope was that this new step would be able to be added intuitively to the process without much cognitive load, given the familiarity that users have with the model.

### The Colleague view

One of the biggest findings from the testing was that a lot of the issues with the application sat not with the bank’s clients but with the colleagues, and it was clear how much improving their experience would as a consequence improve the clients’. Colleagues complained that they didn’t know the process well, and sometimes didn’t know what they needed to do to move the application to the next stage of the process.

Creating a separate platform for the colleagues to manage the administrative side of applications was clearly not going to solve this. Using the ‘transparency’ design principle, we decided that the colleague platform would be a ‘mirror’ image of the client platform, with the colleagues viewing the same pages that clients would, with adjusted permissions showing more information and actions.

<light-box @src="https://cdn-images-1.medium.com/max/20000/1*-6BtPBv_2qRugu8ZISw9AA.png">An IA diagram comparing the client vs colleague experience, and how they mirror each other.</light-box>

In this way, the colleagues would benefit from the same levels of transparency and simplicity that we were creating for the clients.

## Further Testing

Having iterated on the designs, high fidelity prototypes were built out and two more rounds of usability testing were carried out (an example of one of the iterated prototypes can be seen [here](<https://www.figma.com/proto/JhZjQ8jdLqXgA94kPkakhd/Trade-Core---Flow-Graveyard-V1-(Copy)?page-id=86%3A7032&node-id=87%3A7508&viewport=2357%2C1548%2C0.13&scaling=scale-down-width&starting-point-node-id=87%3A11694&hide-ui=1]>)). We learnt lots and lots of things — a few of the key findings are below.

<light-box @src="https://cdn-images-1.medium.com/max/8064/1*UCzN2lpYDXL4m7nPB9FbPA.jpeg">We drove around Kampala, running tests in clients’ offices using this setup.</light-box>

### The Product Page and Primary Action button

The Product page turned out to be a game changer in terms of helping users easily and quickly navigate the interface and find the actions that they wanted to complete. Users were able to find their way from the home page to the Product page of the specific application, and from there, complete their tasks.

The Primary Action button also resulted in large improvements in the success that users had with completing tasks. Feeling like we were onto something good, in the next iterations of the Product page I focussed more and more on stripping back visual clutter so that the big blue button would be even easier to find. In the below screenshots, you can see that we isolated the button entirely in the top right hand corner, and when there was no key action for the user to complete, that area was blank.

The success of this conceptual model gave me the idea to extend the model to the secondary actions on the page too. In the below screens, you can see that early iterations of the screen had secondary actions all over the place — one next to the primary button, the tiny ‘History’ button, one in the ‘This is a draft’ container, and the ‘Delete’ button at the bottom. On newer iterations, we consolidated all of these actions into a ‘secondary action button’ section to the left of the Primary Action button.

We found this worked well for users — if they needed to complete an action, they knew exactly where to look.

<light-box @src="https://cdn-images-1.medium.com/max/13664/1*5agABkgz3S_KDscUQomlBQ.png"></light-box>

The concept of the Primary Action button became central to the entire platform, and I implemented it on other sections of the platform later. However, I worked hard to make sure that the blue button was only used for actions that were critical to moving the application forward, to not dilute the effect.

### The Status Tracker

After its introduction, the Status Tracker became the bell of the ball for the platform, which I was incredibly surprised by. Clients and colleagues sung its praises — Roger from a large manufacturing firm said:

> The status tracker is so useful, I love it. Calling my RM all the time was really annoying.

What surprised me was how something so simple could make such a difference to the experience for all the stakeholders. I think as designers we want our best, most revolutionary ideas to be the ones that truly change our users’ lives, but sometimes it’s just the most obvious ones that work best.

<light-box @src="https://cdn-images-1.medium.com/max/2000/1*HTIpZHO6z-AVMA2IlSXqBA.png">A later iteration of the Status Tracker.</light-box>

Apart from a few cosmetic changes, the Status Tracker stayed as it was. Just like the Primary Action Button, it became central to the experience of Quantum Leap and as I built out the platform, it was co-opted for every process a user was involved in.

### The ‘draft’ conceptual model

The concept of ‘draft’ applications required multiple iterations to get right. Remember, this was a big change for the bank in terms of terminology, and whilst I was convinced that it was the best for the future of the bank, I was intent on designing it in a way that users could pick up the new process without training.

Users weren’t understanding that when they created a draft application, Standard Bank wouldn’t be involved until they clicked _Issue Letter of Credit._ Some reacted negatively to this, saying that they wanted their Relationship Managers to check the application before it was issued.

<light-box @src="https://cdn-images-1.medium.com/max/4164/1*XU7bh8t3wI1kdb7PDK4sPg.png"></light-box>

However, this complaint seemed to go away when we changed the button text from ‘Issue Letter of Credit’ to ‘Submit Application’. Suddenly, users seemed to understand the process better and feel more relaxed about submitting.

<light-box @src="https://cdn-images-1.medium.com/max/3756/1*pDvWy174TCJQMPhHfVUlnA.png"></light-box>

I would guess that this was a result of properly aligning our conceptual model with the users’ mental models. A user can imagine ‘submitting an application’ to their Relationship Manager, who could then review it and send it back if there were any changes needed. ‘Issue Letter of Credit’ was much more final, and a much scarier button to press.

### The Colleague view

Designing the colleague’s view of the platform to be a mirror image of the clients’ was a double-edged sword — in some ways, it was restrictive (since all colleague functionality had to sit within the structure created for clients) whilst in other ways, it was an incredible learning opportunity.

In our research, we found that colleague-side systems tended to be particularly badly designed, confusing, and complex; frankenstein’s monsters, hack jobs cobbled together from various third party systems. It’s not surprising then, that when colleagues were given a platform that was designed to be as simple as personal banking, they were very happy with it. Even more importantly, colleagues continued to comment that they could ‘speak the users’ language’ because they could see what was going on in their platform, which helped with troubleshooting. We saw huge efficiencies created once colleagues were able to properly diagnose and fix errors in applications.

<light-box @src="https://cdn-images-1.medium.com/max/4752/1*RnJb3Q6MspfVZq9EV8pyRA.jpeg">The sitemap, when really boiled down to the basics.</light-box>

That being said, as can be seen in the original personas, the colleagues and clients differ in some major ways, and as complexity was added to the platform, the delta between the two became wider. Colleagues required ways to action more than one task at a time, to sort through large swathes of information quickly, and to use ‘power user’ functionalities.

The ‘mirrored’ interfaces was not something that would last forever, but I would suggest that when they do split and become separate codebases, that some of the key learnings — such as transparency and the ability to see exactly what the client sees — be maintained when designing the new platform.

## Results

After 14 weeks, we onboarding 10 Ugandan clients onto the Quantum Leap platform, and that day, the first application was created and approved in less than an hour. This was unprecedented for the bank and as more clients were onboarded, there was some fantastic feedback.

> It is a great platform. This is simpler than taking a boda to Umoja! Thank you because some of us were eventually going to die.
> Today we’ve had our first LC draft generated at Lubowa. Our Feedback is that the platform is so user friendly, understandable and indeed a solution in as far as making our work easy, running up and down for amendments, acceptances and opening of letters of credit is concerned.
> You mean I don’t have to submit my application 2 weeks in advance!!! We used to start our bid application process 2 weeks prior to the submission date just to ensure we get our bids in time. But with this new innovation from Stanbic, we can do it within a day or two.
> The system is too simple.

The project was expanded and I spent almost a year in total building out the MVP, testing, iterating and adding new features. As part of this, I lead the development of a design team in Johannesburg, building out the design system, and implementing a culture of design thinking. The Quantum Leap program won the [Innovation in Digital Banking Award](https://www.iol.co.za/business-report/companies/standard-bank-wins-innovation-in-digital-banking-africa-award-2aea5d1e-8589-4eb3-a6b3-d68ac620a94b) for Africa from The Banker.

<light-box @src="https://cdn-images-1.medium.com/max/2560/1*dY5neiGZkobC_xJ4Nw58Rg.jpeg">Senior bank stakeholders and the first client to issue an transaction online.</light-box>

This case study is really the tip of the iceberg when it comes to the decisions made on this project. There was a lot of service and business design carried out to bring a lot of the processes online, as well as complexities around building an entirely new, responsive banking platform within an existing bank. I hope to write a few more case studies on the particulars of these problems and how they were solved.

Some of the key discoveries and patterns that were developed, such as the Primary Action button, would be so successful that it would go on to be used throughout the platform as a unifying pattern. This made the development of future features a lot easier as I found that users intuitively knew what to do with never-before-seen flows.

<light-box @src="https://cdn-images-1.medium.com/max/5600/1*2-Zqt8rlmwgcyuJpi8Z_lw.png"></light-box>

## Reflections

There were a few takeaways from this initial build that are worth mentioning.

### Balancing complexity and simplicity

The challenge of balancing complexity and simplicity was one faced daily on Quantum Leap. I fought hard to simplify at every stage — reducing steps in the process, using simpler language, organising the IA, and using progressive disclosure to hide less important content. And yet, our usability tests showed that certain elements of the process just had to be ‘learned’ rather than being immediately obvious to the user. I often had to remind myself of Tesler’s Law:

> For any system there is a certain amount of complexity which cannot be reduced.

These complexities sometimes had to do with rigid banking procedures, regulatory requirements, and technological requirements.

Whilst I was given the freedom to challenge even the most basic assumptions, the final product was still aligned with some of the old processes. A question I ask myself is: if we had the opportunity to design something completely and unashamedly new-to-market, ridding ourselves of all old banking processes and current mental models, starting afresh, would that have been better? Or, alternatively, was the success of this product partially due to the fact that it was rooted in the familiar, and hence a smaller leap for users? To throw out another quote from “The Laws of Simplicity” from John Maeda:

> Good design relies to some extent on the ability to instill a sense of instant familiarity.

In this way, perhaps utilising current practices was something worth doing.

<light-box @src="https://cdn-images-1.medium.com/max/8064/1*ZyTnX50HYck0pztOPpSoyA.jpeg"></light-box>

### Focusing on outcomes rather than features

There are enough problems that consulting companies experience as a result of their business model to fill a very hefty book, and a lot of this comes back to the requirement to _sell_. To explain for those lucky enough to have avoided consulting, part of the planning of a project happens during the pitch process, and therefore a team is often beholden to the promises made during a pitch.

For a digital project, these promises are often made by people who are not going to be closely involved in the process, and can often included lists of ‘expected features’, for example, an onboarding, a home page, etc. This hobbles a product before it has even had a chance to get started, by prescribing features before any design thinking has taken place.

Within Oliver Wyman, I’ve been leading the push for initial conversations to focus on outcomes — for users, ideally — rather than features. Quantum Leap was a great example of how this style of thinking can positively affect a project. Our aims were broad: solve users’ problems within the application process. We didn’t know what these problems were — and in fact, our perception of them changed during the build, for example, when I noticed that transparency was much more important to clients than speed.

This sort of thinking lead to some interesting decisions, such as the decision _not_ to build out an onboarding, which is usually part of the ‘assumed features’ for a digital project. However, I challenged the idea that an onboarding would lead to learning about user problems, and we decided to manually onboard users and focus on the features that provided true value.

The outcomes vs features focus is an important conversation for organisations to have. For me, the main message that needs to be taken away is that design is not just the delivery of set of digital features. Sometimes, design includes the _removal_ of digital (and non-digital) features.

And, by framing things as ‘problems to solve’ rather than ‘features to build’, we allow _everyone_ to be involved in innovative thinking, not just designers. There are ways to solve problems outside feature development (such as business model and service design) that many other stakeholders need to help to innovate in.

---