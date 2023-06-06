---
title: "Building Bó"
tags:
  - case study
date: 2019-06-26
callout: Can good design help those struggling to save to take their first step towards a financially secure future?
info:
  date: April — December 2018
  timeline: 6 weeks from idea to developer handoff (for the feature detailed in this case study)
  client: Royal Bank of Scotland (RBS)
  role: UX/UI Designer
showToc: true
---

## Summary

RBS, one of the largest banks in the UK, had been losing customers to the growing number of ‘neobanks’ in the market, such as Monzo and Revolut. They therefore wanted to create a greenfield digital bank, uncoupled from their legacy systems and interacting with the customer through a modern, usable app rather than brick-and-mortar branches. To differentiate themselves from competitor apps, the product was to be initially targeted towards those in society who struggled to save each month, giving them the resources to start their savings journey.

I was involved in the project as a design consultant from Oliver Wyman and was part of a design team that included brand designers, UX designers and UI designers. I spent almost a year helping to build the bank and led the design on several sections of the app, including the home screen and onboarding. I also led the creation of the central mechanism that aimed to help users save week by week, which is the focus of this case study. For this feature, I developed a conceptual model for saving money week by week and made key product strategy decisions. The designs were validated through behavioural change research, user interviews generated during the discovery period, and regular tests with users during the build phase.

<light-box @src="https://cdn-images-1.medium.com/max/2000/1*djm02id1QPc-F4r-jnbQbg.jpeg"></light-box>

After rounds of testing and iteration, users responded well to the central saving metaphor and were able to intuitively use it to put away extra money each week. RBS was happy with the user feedback, and after further iteration and a beta release, the app was successfully launched on the App Store in October 2019.

<light-box @src="https://cdn-images-1.medium.com/max/3294/1*VDQx5d9apSM7O0onaRBKmA.jpeg"></light-box>

## Background

For most of its existence, retail banking has been a very hard industry for new entrants to succeed in and had therefore consolidated into a few big players. However, the playing field was levelled considerably from 2015 onwards in the UK, when so-called ‘neobanks’ entered the market, taking advantage of the Open Banking regulations introduced by the government, as well as the proliferation of smartphones and the demanding expectations of younger users. By applying an iterative, agile approach and modern tech principles to banking, they were very quickly able to disrupt the market, whilst incumbent banks were unable to match their speed due to being built on antiquated systems, processes, and languages (if you’re interested, read about [COBOL](https://www.tpr.org/technology-entrepreneurship/2019-05-23/how-cobol-still-powers-the-global-economy-at-60-years-old) - a 60-year-old programming language that sits at the heart of most legacy banking).

The Royal Bank of Scotland, one of the largest UK banks, believed they could fend off these neobanks by creating their own greenfield app, completely separate from the rest of the bank’s systems and brand, but still benefiting from the bank’s customer base and experience. They encouraged a start-up culture by placing workers in a separate office and hiring fresh talent from outside traditional banking — the team grew from 30 to 120 members in the time I was there. Initially, we built out the basic banking functions (transaction lists; search; transfer and top-up flows) as well as hygiene features (onboarding; settings), and a separate branding team came up with the brand elements, including the name (which was Bó, *please* don’t ask me why).

<light-box @src="https://cdn-images-1.medium.com/max/6000/1*Yq3FDrdKk7yJzF61u7nGdw.png">Some earlier work: a humungous onboarding wireflow.</light-box>

Whilst these features were important, one thing was missing: the USP. No feature differentiated the app from others currently in the market, and it was a priority for RBS to find something that would draw users in before launching the product. This case study covers the development of that feature.

- **The challenge**: Utilise user and market research (both existing and new) to create a central money-saving mechanism for the app, that would be the driver of usage in the app and that would tangibly help those without savings to save money in the long term.

- **The team and my role**: For this feature, I worked on a cross-functional team which included product managers, business analysts, and finance subject matter experts. The design team initially consisted of myself and a Head of Design, who aided with initial conversations and guidance, before taking a less involved role. I was involved in the initial workshops, designed all wireframes, wireflows, and high-fidelity screens, and was the lead on the usability testing. Towards the end, I worked with an interaction/UI designer to design the animations and final flows.

- **The timeline**: From initial idea to developer handoff in 6 weeks (3 sprints).

<light-box @src="https://cdn-images-1.medium.com/max/3840/1*4cy_mpeB2aJgtQI21sARlw.jpeg">The elements in orange show how the new USP feature would fit into the feature set that had already been developed.</light-box>

## Starting from a scribble

Often, the hardest design challenges are those that require solving a user’s needs but also very rigid business needs *and* the needs of individual stakeholders within the organisation. This was certainly true on Bó, and most evident in the development of the money-saving feature.

The COO of RBS was made CEO of Bó, his background being mostly (perhaps entirely) in traditional banking. He had some very strong opinions about what the USP should be. One day, a scribble on a piece of paper was left on a colleague’s desk, which outlined the vision for the product:

<light-box @src="https://cdn-images-1.medium.com/max/4160/1*YBFDzRNaqom3kl0r18p-ow.png"></light-box>

This scribble, which we understood to be the CEO’s outline of the money-saving model, was then turned into a decidedly more detailed diagram by the business analysts:

<light-box @src="https://cdn-images-1.medium.com/max/4356/1*d0UL8MjSok_oCyyj77umIQ.png"></light-box>

The question, then, was clear: how do we combine an out-the-box feature request from a key stakeholder with a customer-first approach that was actually predicated on research? And how could we avoid the bias implicit in being given a ‘solution’ before we started our ideation?

## Let’s start by looking at the research

I decided to take a step back and initially remove myself entirely from the solution presented. We were very lucky in that there was already a wealth of user and market research already available to us that had been produced by specific research teams since the startup had been founded. This included 30 lengthy, recorded user interviews and several insights from a behavioural economist about different people’s spending habits.

I went through this research and synthesised the most salient elements for use in a kick-off workshop.

### Focusing on the ‘Strugglers’

One of the main outputs from this initial research had been the development of 5 user archetypes and a matrix of how they spent and how much money they earned:

<light-box @src="https://cdn-images-1.medium.com/max/2944/1*hhDxBFKOl7bc69U6ReLgpA.jpeg">The Strugglers are engaged with money-saving but often don’t earn enough to get ahead.</light-box>

The team had identified the ‘*Strugglers*’ archetype as one that was underserved by the current market and also someone that could tangibly benefit from money-saving techniques, so the focus would be on this user:

<light-box @src="https://cdn-images-1.medium.com/max/5852/1*kpZdJgJQAynT7ZDvzO-IBQ.jpeg">The characteristics of the ‘Struggler’ persona, based on our research.</light-box>

I called out several key elements from this persona which I thought would influence this feature:

- **Strugglers have no savings:** they are currently unable to — or *feel* unable to — realistically plan for the future by putting aside money on a weekly or monthly basis.

- **Strugglers are driven by negative emotions:** Strugglers feel out of control and anxious, and deal with these emotions daily.

- **Strugglers need help staying on top of their day-to-day**: They need daily reminders to manage their spending and need support in thinking about how these daily decisions will translate into long-term benefits.

- **Strugglers need a safety net**: Because of high levels of debt and low savings, they are highly vulnerable when there are unplanned expenses. A ‘*rainy day fund’* is a very good initial saving goal.

## Design Pt 1: Using research to rethink The Scribble

Armed with the user archetype and synthesised research, I organised a workshop with product managers, developers, and subject matter experts, where we reviewed the above research and ideated solutions, using the CEO’s model as just one of the many ideas under consideration.

<light-box @src="https://cdn-images-1.medium.com/max/4080/1*lUQ9wGlVQBCTF8tZHIeKCw.jpeg">Some of the workshop walls.</light-box>

The solution that we decided to develop consisted of the user setting a weekly budget, that they would then be encouraged to spend less than during the week. At the end of each week, the remaining money would be swept into a savings pot. This solution incorporated some elements of the CEO’s original idea but with some key differences based on user research. For example, we decided to do the money sweep on a weekly (rather than monthly) basis, knowing how important it was that we help users see how their daily decisions transform into long-term benefits.

### Visualising the solution

This process — from budgeting to weekly saving sweeps — was linear yet complex, so the next step was to plot the process out in a series of clear wireflows, which were then iterated on multiple times based on team feedback:

<light-box @src="https://cdn-images-1.medium.com/max/3506/1*MINoXdRm740JKJoHIG23zw.jpeg">Extremely ugly sketches.</light-box>

<light-box @src="https://cdn-images-1.medium.com/max/4800/1*kI4vxJOWwyTKUMTqRcX6GA.png">One of the first full wireflows.</light-box>

<light-box @src="https://cdn-images-1.medium.com/max/4384/1*-HCQ5Csa5QwRYPU-SOf-wA.png">A zoomed section of the wireflow.</light-box>

After rounds of iteration, I felt I had designed a simple conceptual model of saving that might help struggling users understand how daily wins could add up to long-term benefits. These four screens best demonstrate how this conceptual model worked:

<light-box @src="https://cdn-images-1.medium.com/max/3444/1*TjJa8SsxihWQKzXh_pAheQ.png"></light-box>

From left to right:

- The **budgeting tool**, which would use the information provided by the user to recommend a weekly ‘savings goal’ (removing the cognitive load that often would lead to inaction in Strugglers)

- A **daily** **visualisation** of a user’s weekly disposable income, and how much they should aim to have left over at the end of the week

- A **weekly** **moment of delight** in which the leftover money in the user’s disposable income is swept into their savings account (helping to give them regular positive reinforcement)

- A **savings screen** which shows them how much they’ve saved and visualises it as part of a larger savings goal (giving them the feeling of progress, no matter how little the saving)

Each screen in this flow is designed to guide the user through the savings journey, *carefully* shifting the user’s focus from short-term to long-term.

I also realised that repeated visual symbols would be essential in carrying meaning throughout the app for Strugglers, who were often overwhelmed with money and required simplicity. I used existing brand assets to inject this meaning:

<light-box @src="https://cdn-images-1.medium.com/max/2856/1*0tRw6PqLB1FhGuRpMTFZnA.jpeg"></light-box>

- The thin yellow circle represented a user’s *weekly* savings

- The full yellow ‘sun’ (resembling Bó’s logo) represented a user’s *long-term* savings

One thing that stuck out to me from the research and interviews was that no matter how much we tried, we couldn’t find a consistent *conceptual model for saving* across users. Users all seemed to approach saving in different ways, and indeed, could even have a different relationship with it depending on the time of week, month, or year. Creating a successful MVP required us to prescribe one model to all users, and even to this day, I question whether this is an achievable goal for any company (more on this in the [Reflections section](/work/bo/#reflections)).

### The ‘Savings’ screen

How do you encourage someone who is purely focused on making it to their next paycheque to embark on a savings journey that could take months or even years? And how do you make even the smallest amount of savings (even £1 or £2) feel like progress?

These were some of the challenges that we faced when designing the ‘Savings’ screen, one of the most critical elements in the overall money-saving feature. It was a particularly juicy problem, so for the rest of this case study, I’m going to zoom in on it and show how I iterated the design through rounds of feedback and user testing.

Based on our understanding of the user, the assumed problem statement was:

> Strugglers need a way to visualise their current savings as part of a larger ‘savings goal,’ so that they are motivated to keep saving.

I designed several ways to go about this, the two final options being:

<light-box @src="https://cdn-images-1.medium.com/max/2000/1*AaQryxV19qs0RacwXo6whw.png"></light-box>

- **Option 1** automatically sets a monthly goal for the user, by multiplying their weekly goal by 4.

- **Option 2** was more complex, not only setting this automatic goal but allowing the user to create a longer-term custom goal with a name. Visually, the automatic monthly goal is shown as a portion of the larger custom goal.

Whilst Option 2 made the goal more tangible (by giving it a name), we decided against it because:

 1. The screen was overly-complex and potentially overwhelming to Strugglers

 2. There was a risk that a very small weekly saving would not even show up on the visualisation, leading to the discouragement of the user.

Therefore, we included Option 1 in our first feedback session.

### Feedback session with the originator of The Scribble

In this session, we had just one hour with the CEO to explain the designs, justify the changes to his original vision, and receive feedback. Being a long (albeit linear) process which included several novel concepts, I knew this would prove a challenge. So, I decided to print out huge, blown-up versions of the end-to-end wireflows and stick them on the wall, so he could physically engage with the designs and absorb them linearly. The results from the workshop were:

- For the most part, he was happy with the conceptual model used to solve the core user need.

- Despite the print-outs, there was still confusion as to what was happening in the app and each stage of the month-long saving process. It was a bloody complex process.

- Specifically regarding the savings screen, he noticed the lack of a long-term goal and requested more be done in this area.

<light-box @src="https://cdn-images-1.medium.com/max/8064/1*Ystq3OOgei0bKWt1nKMmBw.png"></light-box>

## Design Pt 2: Real users!

Having got the base conceptual models past the decision-making stakeholder, we were now able to take our designs to the most important stakeholders: the users themselves. However, I first iterated on a number of areas within the product.

### Reframing as a persona

I felt that the wireflow / experience map that we had created didn’t put the user at the centre of the experience, which led to confusion for those trying to digest it. In fact, in the mad rush to design the flow, we’d completely forgotten to apply basic UX principles to the flow, including a persona. So, I reframed the experience map from a specific user’s perspective, and rewrote the design challenge:

> Sam needs to be encouraged to continue saving, despite not saving much each week, **because she struggles to plan long-term**.

<light-box @src="https://cdn-images-1.medium.com/max/3544/1*06YXByuBisslmGy3l8R7lg.png">A user-centric wireflow, with more human-centred language.</light-box>

### Visualising small steps

The new design challenge required long-term goals to be central to the savings designs, which matched our previous findings from the research phase.

<light-box @src="https://cdn-images-1.medium.com/max/2000/1*7LJu2GUSimQSeB01r4ddmQ.png">This screen did not adequately visualise long-term goals.</light-box>

However, when I had designed this last time, the screen had become confusing and overcomplicated. How could we avoid the same problem this iteration?

The answer: to enforce a standardised rainy-day goal (calculated at 5 weeks net monthly salary) and then show the user increments leading up to that long-term goal. This would solve two problems associated with the research that we’d done previously:

 1. The user wouldn’t have to input their own goal and would be given a pre-set one (research found that the best thing for Strugglers to do first was to create a safety net, rather than save for future expenses).

 2. The user would make significant steps towards an incremental goal each week, no matter how little money they put in (research said that Strugglers save little to no money each week, and suffer from unrealistic goals in the medium and long term)

<light-box @src="https://cdn-images-1.medium.com/max/5304/1*pr75tfIxZkRrdY5CVAFyag.png">The new designs, with a new visual symbol to represent their savings.</light-box>

### Now to test with users

I ran six moderated, face-to-face usability tests with users sourced from a research agency, on a mobile prototype of the app. Alas, the designs weren’t a roaring success. We found:

- Users didn’t understand the visuals: they had no idea which number was their savings and which number was their goal.

- Users didn’t understand the core mechanism: that is, how the app could predict how long it would take them to reach their goal.

- In a more general sense, the usability of the screen was trash. There were too many numbers, a new conceptual model to absorb, and a quasi hidden affordance.

Back to the drawing board.

<light-box @src="https://cdn-images-1.medium.com/max/2028/1*mBKkHtc4Bu4arqPyx5geNQ.png">A user literally scratching their head.</light-box>

## Design Pt 3: Almost there, I think?

Okay, new design challenge!

> Sam needs to be encouraged to continue saving, despite not saving much each week, because she struggles to plan long-term… without confusing the hell out of her.

### Designs, but (hopefully) good this time

After some brainstorming and iterating, I came up with a new set of designs which I thought addressed the main usability issues with the last screens:

<light-box @src="https://cdn-images-1.medium.com/max/5400/1*JG78I5emISU_miW8pccNwA.png"></light-box>

 1. I removed almost all of the complexity from the first screen (far left). The user now landed on a page with extremely low-cognitive load: a big yellow Bó sun with their current savings inside, and two buttons. Based on testing, this was what users expected to see on a page labelled ‘Savings.’ Additionally, it better incorporated the visual motif of the full yellow ‘sun’ which was central to the Bó branding.

 2. The ‘incremental goals’ were placed behind a very clear tap on the first screen, with human-centred language explaining clearly to the user the most important information, and what would be behind the tap.

 3. Since, within the conceptual model, the yellow circle now represented the user’s savings, I had to redesign the incremental savings visualisation to maintain this. The ‘projections screen’ used a combination of clear visuals, and simple, human, explanatory language to tell users how long it would take them to reach their goals.

### Testing

Another seven users were brought in for moderated face-to-face usability tests of the entire flow, including the savings screens. This time, I set up a live feed of the usability tests in another room in the office and invited stakeholders to come and observe. I hoped this would increase investment and buy-in to the solutions that we had developed.

<light-box @src="https://cdn-images-1.medium.com/max/4000/1*61smN51SP1LnCCTkCkRFxg.png"></light-box>

There was a *huge* improvement (phew!) in usability compared to the last round of testing.

- Users immediately understood the concept, could explain it well and navigated through all the screens with ease.

- They also understood and liked the concept of a ‘rainy day fund’, however felt it was quite hard to locate in the screens.

- The conceptual crossover between the yellow circle on the home page and the Savings page wasn’t as clear to users as I would have hoped.

## Design Pt 4: Rounding the final bend

To everyone’s delight (especially mine, since this case study is getting way too long already), the designs were almost in a state to be fully handed over to developers to put into the beta launch app. After this round of testing, I tweaked the designs but was overall very confident in the usability of the fundamental concept.

### Iterations to the conceptual model

To address the conceptual model challenges from the last test, as well as create overarching visual symbols to simplify the experience (an early goal for the design team), I created a walkthrough of the process from goal-setting to savings growth:

<light-box @src="https://cdn-images-1.medium.com/max/2298/1*Um_TGakYTcoEHiojqxILzA.jpeg"></light-box>

This was used in the onboarding and helped bring together the different elements of the experience in one congruent flow.

### Animation to convey meaning

I realised that animation would be a useful tool in communicating the connection between these concepts. I worked with another designer to animate the end-of-the-week ‘sweep’ from their spending money into their savings. Whilst I see animation as typically a waste of time for an MVP release, I felt that this was a hugely important moment in the experience, and warranted special focus. This moment of delight would be a large factor in whether the user would be motivated to start the savings journey all over again the following week.

<yt-embed id="8QEXUkD3p54"></yt-embed>

## Results

The feature was handed over to developers in the ensuing weeks and we continued to receive strong feedback for the screens from users and other stakeholders. I found that users were able to very quickly learn how Bó’s central saving mechanism worked.

### Wider project outcomes

Once dev work was completed on the central USP detailed in this case study, an alpha version of the app was released to family and friends of the project. This release took place about 12 months after the start of the project. At this point, I left the project, and there were about 8 more months of testing and iteration before the app was fully launched on the App Store in September 2019. Here’s a walkthrough of the app that was released:

<yt-embed id="3m1dh98hhN4"></yt-embed>

Unfortunately, RBS decided to shut down the app after only a few months of it being live. I have a lot of feelings about this and touch on it in my ‘Reflections’ below.

Overall, RBS injected more than £100 million into the product over its development.

## Reflections

### Business-led design, with UX playing catchup, rather than design based on identified user needs

A glaring red flag you may have noticed in this case study is the fact that the original ‘concept’ for the feature didn’t come from research and user problems but was birthed, fully formed and kicking wildly, from the traditional banking CEO of the start-up. Whilst, in my experience, some interference from stakeholders in the early product design process is fairly common, in this case, it was indicative of a wider issue with the way this project was run.

As much as RBS wanted to emulate a neobank, they were unable to. They brought many elements (and people) from traditional banking into the product development process. I could fill a whole article about this, and plan to soon.

<light-box @src="https://cdn-images-1.medium.com/max/8064/1*kOqbM0l1wesiw7qwuLFBYQ.jpeg">Some of the final Savings flows on the wall in the office.</light-box>

### Does the concept of MVP even work for large established organisations?

To be fair to RBS, myriad external factors impeded them from acting like a startup. As an example, Eric Ries’ concept of an MVP is based on the idea of early adopters being naturally forgiving. However, some large companies such as RBS do not have such freedom: anything they release will be subject to huge public scrutiny and judged based on its first public release, bugs and all.

This was especially true for RBS, which already had intense public pressure on it since being bailed out by the government in 2008. Being majority public owned, the quality of the first release would be critiqued not only in and of itself but as proper or improper use of public funds.

<light-box @src="https://cdn-images-1.medium.com/max/4096/1*yri-y5Aj9E5Sxybk9372CQ.png">The app received a lot of constructive criticism on Twitter.</light-box>

My belief is that (some, not all) large companies are restricted to making a Minimum Marketable Product — essentially, the minimum product that would actually be marketable based on their established branding and market context. This, for RBS, was unfortunately a lot more than the simple MVP that a smaller start-up might be able to release.

### On being late to the party

An important element of new product development is the first-mover advantage. Unfortunately for RBS, they didn’t even have the second, (or eighth, or ninth) mover advantage. What they did have going for them was knowledge of what worked for the neobanks, the backing of a traditional bank, and lots and lots of money.

Unfortunately, the latter two elements did not translate into real benefits to users over the competitors, and the knowledge of ‘what worked’ only showed them how little space there was to differentiate in a very user-centric market.

I think that it would have been hard for any start-up to compete in such a competitive space as the UK fintech industry, and it was especially hard for RBS, whose stakeholders wanted to see signs of rapid success and market share capture rather than slow-burning growth and the gradual establishment of quality brand associations.

<light-box @src="https://cdn-images-1.medium.com/max/4000/1*wD083I735_BshdWrIbVMkA.jpeg">Here’s a photo from the project for no other reason than to break up the wall of text.</light-box>

### Building a ‘universal money model’ is difficult, and perhaps impossible

Something that I noticed early on in the design process — and which I told the team often — was that the research failed to find any unifying model for how users thought about money. Certainly, there were trends across personas, but even then, I was surprised by how little consistency there was across mental models.

For example, we did research to find out how users split finances in their minds when they received their monthly pay. There were many different models, but some examples included:

- Seeing their money as coming into their ‘Spending’ account and then putting money into ‘Saving’ and ‘Bills’ accounts, and spending the rest per month

- Seeing the money as coming into a ‘General’ account which they split into ‘Spending’, ‘Bills’ and ‘Savings’

- Keeping all their money in one account and letting bills and spending come out, shifting the leftover ‘savings’ into another account at the end of the month

It was clear that, even amongst our persona groups, the ways that different people conceptualised spending and saving changed based on a variety of factors.

So, when the executive team decided that they wanted to enforce one conceptual model of saving on all users who used the app, and that users shouldn’t be able to use the app without it, I was sceptical. Whilst we were able to build out a savings model that users *understood*, and scored high on *usability*, it’s hard to know whether it would have actually fit their day-to-day lives in a practical, applicable way. RBS shutting down the app after 4 months meant that the jury is still out on whether it would have worked in the long term.

My opinion is that the best thing that financial apps can do is to hand over control of these models as much as possible to the users themselves, rather than dictate how they should think about money. Money is an *extremely* personal thing, and people’s relationships with money are rooted in their upbringing, their financial situation, their financial literacy, their culture, and many other factors. To try to codify that relationship is a task.

<light-box @src="https://cdn-images-1.medium.com/max/2416/1*Ca4IOa5ouL_ffwvUvKK3NQ.png">From my competitor research: lots of apps good at one thing, very few good at them all.</light-box>

Other banks such as Monzo, N26 and Revolut seem to have all realised the same thing. They give users tools — pots, goal setting, automatic sweeping — and then allow users to set up the method that best works for them. This is admittedly hard when your target users are not financially literate, but I believe that leading a horse to water is the only way to get buy-in for your product from users in the current market context.

### Transactional and planning mindsets: the conceptual model of personal banking

Whilst it is incredibly hard to find a universal mental model for money (say that 5 times fast), I *did* find a pattern amongst the research that I thought contradicted some of the decisions made by the team at Bó.

From the user interviews, I was able to identify two distinct mental states of users when using banking apps. Each mindset was distinct in the way the user felt about money at that time, the context in which they were, and the emotions that they were feeling.

<light-box @src="https://cdn-images-1.medium.com/max/4080/1*eYZM6ATaOjEJc0jdx_Zjsg.jpeg"></light-box>

- **The transactional mindset:** Typical in day-to-day spending. In this state, users are interested in quick access to basic financial information. Payments, balances, transfers, daily totals. These interactions with the product usually take place on the go, and often in a rush: in cafes, whilst walking, etc. Users in this state are highly goal-oriented: they know what they need to do, and are accessing the product with that goal in mind.

- **The planning mindset:** Typical when thinking about recent spending and savings. The user in this state is more reflective and time-rich, and are typically opening the app in downtime, in the evenings or on a weekend. They want to see insights into their past spending, future projections, and overall, to gain an understanding of their financial position.

There’s a clear contradiction between these two states — one requires instant, unhindered access to data, and the other requires complexity, personalised data, and customisable features. It could be assumed, therefore, that any crossover in the interface between these two mental states might create user frustration: for example, if a user enters the app in the transactional mindset, but has to wade through saving elements to get access to their basic spending information.

I was convinced, therefore, that there had to be a clear delineation between these two mental states in the design of the app. For example, a bottom navbar with clear differentiation for users between ‘spending’ and ‘saving’ tasks would allow users in the different states to quickly access the experience they were looking for, and even better, it would help us design interfaces based on the differing needs of the users in these two states.

Unfortunately, despite pushing hard for this, the executive team wanted the main saving mechanism to be central to the experience and therefore felt it needed to integrate into the ‘day-to-day spending’ section of the app. This extended to making them literally inseparable — whatever money a user had in the app had to be part of the weekly savings sweep.

It’s hard to say how important this task-based separation is in making a financial app that users want to use, but it’s worth noting that when the app launched 9 months after my departure, they *had* changed the feature so that a user could partition only a part of their money to the savings mechanism.

Alas, the search for the perfect financial app continues.

---

_Thanks for reading! Remember to follow me [on Medium](https://medium.com/@jamchiller) and Twitter ([@jamchiller](https://twitter.com/JamChiller)) for more content._


