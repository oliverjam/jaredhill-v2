---
title: "Redesigning MedicSpot: a case study"
tags:
  - case study
date: 2017-10-27
callout: Creating an intuitive video chat system that builds patient-doctor engagement — without getting in the way.
info:
  date: November 2017
  timeline: 2 week design sprint
  client: Medicspot - a healthcare startup
  role: Freelance Product Designer
---

## Summary

Fast-growing telemedicine startup MedicSpot required a complete redesign of the interface used by their doctors during video calls.

As part of this client project at General Assembly, I undertook a two-week sprint with three other team members, utilising the entire UX process, including interviews with GPs, three Design Studios and a tonne of user testing. With a focus on increased engagement, automation and convenience, we built an interface that gave doctors access to all consultation notes without clicking outside the app, allowing them to concentrate on the thing that matters most: the patient.

The redesigns received extremely strong feedback from the startup, and they are currently in the process of implemented the design with their developers.

Reader beware: this is a big ol’ case study. Don’t have time to read the whole thing? You can skip straight to the final prototype [here](https://invis.io/8ADVRPKP5#/257589082_1-_Navigates_To_Website).

<light-box @src="https://cdn-images-1.medium.com/max/10368/1*BVlp9trTPkqwqBcNIE6bnw.jpeg"></light-box>

## Background

MedicSpot is an on-demand telemedicine service that allows patients to have video consultations with doctors through special Clinical Stations set up in pharmacies. The real appeal of MedicSpot: they are one of the only telemedicine companies _in the world_ that can remotely check temperature, blood pressure, oxygen levels and listen to a patient’s heartbeat, using special medical instruments located inside their Clinical Stations.

Launched in October 2016, they are currently in over 40 locations across the UK and expanding quickly.

### The Brief

With the company expanding rapidly and with many competitor services on the market, it was essential that MedicSpot create a digital environment in which both patients and doctors have the most positive experience possible.

They needed us to redesign the doctor-side interface to improve the efficiency and ease of consultation for the doctor.

I acted as team facilitator during this sprint, meaning that I was first port of call for client communications and managing the team decisions and process (whilst making sure that all decisions were verydemocratic).

**Sprint length:** 2 weeks.

**Skills required:** Project Canvasing, Stakeholder Management, User Interviews, Empathy Mapping, User Flows, Participatory Design, Experience Mapping, Sketching, Rapid Prototyping, Usability Testing, Visual Design.

### My Role

Each team member participated in every stage of the UX design process, however I played a particular role in the synthesis of findings from the user interviews, early decisions related to structure and layout, and designing the high fidelity prototype.

I also acted as team facilitator, meaning that I was first port of call for client communications and managing the team decisions and process (whilst making sure that all decisions were democratic).

## Discovery

For the project, we followed the Double Diamond approach so that we’d have the time to correctly identify user needs and problems before launching into the design phase. This was especially important due to the complexity of the consultation process, a process that I was largely unfamiliar with going into the project — the closest I’ve been to the medical profession is playing the board game ‘Operation’ as a kid.

### Contextual Enquiry

To get a full understanding of the current MedicSpot process, we observed one of the doctors undertaking a video consultation using the current MedicSpot system. There were very evidently a lot of issues causing frustration during the call, at the end of which the doctor described himself as ‘stressed out.’ Our key findings were that:

1.  **Issues with layout** were affecting the doctor’s pace during the consultation, including a small clinical notes box and a lot of scrolling required

2.  **Very little access to important resources** meant that the doctor had to switch between windows during the call, breaking engagement with the patient

Essentially, we noticed there was a lot of **multitasking** involved during the consultation, and the system hadn’t been designed to allow for this.

<light-box @src="https://cdn-images-1.medium.com/max/2000/1*iVDdLHIa85yMtyam-n3NGA.png">The current MedicSpot interface.</light-box>

### Digging deeper with user interviews

As part of our user-centred approach, we conducted sixteen in-depth interviews with a range of medical professionals, including 8 GPs and 5 current MedicSpot doctors. From this, some key themes emerged:

#### **Engaged**

Doctors wanted to feel _engaged._ One of my interviewees, GP Dr Craig Thompson, said:

> _My main job satisfaction comes from interacting with patients and building a rapport._

This sentiment was overwhelmingly shared by the cohort of doctors interviewed. The main frustration linked with this? Anything that required the doctor’s attention, or distracted the doctor, whilst they were trying to focus on the patient.

We realised that the new system needed to add a **‘personal touch**’ for the doctors. It also needed to allow the doctors to engage with the patient at all times without being distracted by the system. It just needed to get out of their way.

<light-box @src="https://cdn-images-1.medium.com/max/2000/1*kHgrc8FpN1G04kH37_dnLw.jpeg"></light-box>

#### Intuitive

Doctors wanted their systems to be _intuitive_.

We found that the current state of IT in the medical world is quite dire. Doctors were very vocal in their complaints, saying systems were complicated, overly-governed and difficult to learn and use.

However, doctors said they wouldn’t mind learning new systems if they were more intuitive than current systems — after all, it would make their lives easier!

We realised our system, whilst providing the vast range of tools that doctors needed, would have to be extremely easy to learn and use.

#### Convenient

We initially thought from our contextual research that we could improve the experience for doctors by increasing efficiency, and therefore shortening consultation length.

Through user research, however, we found that doctors did not so much care about the length of the consultation, but more the _quality of the consultation_. In my interview with Dr Wasif Razzaq, a current MedicSpot doctor, he said:

> _“A good consultation is one that flows easily, when you’re not distracted by the system, and have the time and tools to make an accurate diagnosis.”_

We realised that providing **convenient and efficient access to all the tools** necessary to the doctors would be of tantamount importance to the design, as well as providing an accurate diagnosis for the doctors.

### Personas: meet Sanjeev & Julie

Our two user personas, Sanjeev and Julie, are both are in their mid-late 30s, married and have children, which reflected the majority of the GPs that we interviewed.

<light-box @src="https://cdn-images-1.medium.com/max/2000/1*13bLTAg8JhKiNmG8FQPXFg.png"></light-box>

**Dr Julie Wong** lives in Glasgow and has been on maternity leave for the last 6 months, after having her first child. Previously, she worked for the NHS 4 days a week, and has never heard of MedicSpot before.

<light-box @src="https://cdn-images-1.medium.com/max/2000/1*gFOn6ZV0VA-8PTFBYhgJZA.png"></light-box>

**Dr Sanjeev Patel** lives in Amersham, and currently works for MedicSpot one day per week. We chose Dr Patel as our primary persona as his paint points most depict the problems that we were trying to solve.

As such, his main goal is to feel like he has provided quality care for his patients. His frustrations are learning new cumbersome systems, and undertaking difficult consultations.

**But what constitutes a difficult consultation?**

To understand this, we built an experience map depicting Dr Patel’s current journey from receiving a call from MedicSpot to answering it, diagnosing the illness, and then fulfilling a prescription and sick note for the patient. As can be seen below, for a large part of the experience, Dr Patel is not a happy chappy:

<light-box @src="https://cdn-images-1.medium.com/max/8612/1*OpUCExqv1I5DQgsPJ74CRw.jpeg"></light-box>

Of note is the dip in mood when the doctor begins the consultation and is met by a number of challenges, including the patient _not following instructions_, the _inability to fill a prescription during the call_, and a _difficulty in filling in clinical notes whilst talking to the patient_.

Understanding these key frustrations is what led us to come up with a specific **design challenge**:

> Redesign the interface to be more **engaging**, intuitive and convenient.

By tackling this, we would allow doctors to conduct **quality consultations,** which importantly would not only improve the doctor’s satisfaction, but the _patient’s_ satisfaction as well.

### The third ingredient: design principles

Before launching into the design phase, one final ingredient was needed: principles with which we would design the system. Combining aspects of MedicSpot’s brand with doctor feedback and the findings from user interviews, the system’s design had to be:

1.  Efficient

2.  Easily-accessible

3.  Intuitive

The sun was dawning on the Discovery phase, but a new phase beckoned: the Design phase. Buckle up.

## Design

They say an apple a day keeps the doctor away, but nobody ever told us what food would keep the doctor coming back for consultation after consultation. Whilst not foodstuffs, we hoped that the designs we created would adequately achieve this goal.

### Running an inclusive Design Studio

Armed with our design challenges, personas, and design principles, the stage was set to design solutions that would make up the new interface. We ran three Design Studios with the founders of MedicSpot, and were amazed by the amount of innovative ideas came out in such a short period of time.

<light-box @src="https://cdn-images-1.medium.com/max/8064/1*Sy5MiN7oXoo9YKkFtC2nfw.jpeg">The team in deep concentration.</light-box>

Refining the ideas turned out to be difficult, but the most popular solutions were:

<light-box @src="https://cdn-images-1.medium.com/max/2000/1*CNn-Y_bpuoL_LxkRGZ8HMQ.png"></light-box>

#### 1. Tabs

The amount of information and text fields that a doctor needs access to is vast and ever-changing. Hence, tabs were agreed to be a simple, scalable way to organise content and provide all-in-one access to information without having to scroll. Giving the doctor quick access to all this information would hopefully increase the **engagement** the doctor has with their patient.

#### 2. Prompts

A huge concern for doctors was the fact that they had to remember to ask certain regulatory questions to the patient, and risked getting into legal trouble if they didn’t. Prompts that let doctors know when they needed to ask questions — whilst also _not getting in their way_ — would make the system **intuitive** and easy for the doctor.

#### 3. Online referral and sick note process

Currently, to refer a patient to a specialist or create a sick note required the doctor to print off and send physical documents — a process that would take up to 15 minutes. The idea to build an automated online referral/sick note process was unanimously agreed to to be extremely important in making the system **convenient** for doctors.

### Structure and layout

At this stage, it was obvious that the _structure_ _and_ _layout_ of the all-important ‘consultation screen’ (the screen in which the doctor conducts the video call) would be absolutely essential to the success or failure of the designs to solve the Dr Patel’s problems. Hence, before diving into a full design, the team took stock, and invested a lot of time into making decisions around this. This culminated in _three key design considerations:_

#### 1. Information prioritisation

Clinical notes, past appointments, two video streams of the patient, medical instruments, patient information, chat, patient instructions, prescriptions, attachments… phew! That’s a lot of content to fit onto one screen without any scrolling, whilst _also_ making sure the doctor doesn’t have to think about any of these things, and can focus entirely on the patient.

Therefore, we asked GPs to rate these elements in terms of their importance during the call. Below are the results:

<light-box @src="https://cdn-images-1.medium.com/max/2000/1*DWwME-4qKZih6d5zh9XcaQ.png"></light-box>

This early data hugely influenced our designs. We were sure to never, ever obstruct the doctor’s access to the Clinical Notes tabbed box, as users said that they always needed to be able to input something in here at a moment’s notice.

There were a number of other elements that would need to be overlayed over some part of the screen, for example, instrument instructions, and prompts. We decided that they would have to cover the bottom left half where Instruments, Patient Information, and the Chat box were located.

<light-box @src="https://cdn-images-1.medium.com/max/2410/1*h1IJFNQRBtGKzmsudRHiBw.png"></light-box>

In the paper prototype (above left), you can see the decision to place the overlay window over a section of the patient video and the other less important elements. On testing, users didn’t want any obstruction to the patient video, so the overlay was moved further down.

#### 2. Eye Contact

With the knowledge that engagement was one of the key indicators of success of the interface for Dr Patel, an important consideration was _eye contact with the patient_, and how the interface could help improve this. We wanted to know whether where the doctor looked on the screen affected the how engaged the patient felt, as this would then affect where we put important elements in the design.

Why maximise the engagement for the patient when the primary user is the doctor? Well, we found throughout the user interviews that the experience of the patient — whether they were cooperative and in a good state of mind — was inextricably linked to the experience of the doctor.

To explore this issue, I set up and ran a small study. I sat participants in front of a laptop connected by video call to a another laptop. They were asked to rate how engaged they felt on a scale from 1–10 as the person on the other laptop spoke whilst looking at different places on their screen.

<light-box @src="https://cdn-images-1.medium.com/max/8064/1*YIe8ye9AztJvx5rO9RpGIQ.jpeg">User rating their engagement levels.</light-box>

<light-box @src="https://cdn-images-1.medium.com/max/8064/1*zYb3Lvf1YUF6Opr6YTDhuQ.jpeg">Hello from the other side.</light-box>

The results of this study showed that the level of engagement the patient felt was, in fact, _very much affected_ by where the doctor was looking on the screen when talking to them. As the below graph indicates, patients felt extremely engaged when the doctor looked down the laptop camera at them (unfortunately, this is not viable for large portions of the consultation), with diminishing engagement as the gaze moved farther away from the camera.

<light-box @src="https://cdn-images-1.medium.com/max/2000/1*yXDPSLjUIH1cg6uzMuLiWA.png"></light-box>

We took this through to our interface designs, ensuring that we avoided placing anything used regularly by the doctors on the far left, far right, and bottom of the screen.

#### 3. Screen width

Initially, we designed the ideal interface to a standard 1024 pixel width, but on testing, doctors again and again gave feedback that they felt cramped. Due to the very specific usage scenario of the interface (at home, on a 13"-15" laptop), we made the decision to design to a widescreen 1440 pixels. Although the site would still function at 1024px, we worked with the founders of MedicSpot to ensure that it would be possible to recommend usage at this screen width for the best user experience.

<light-box @src="https://cdn-images-1.medium.com/max/2362/1*n0rMVBrTxVCIU5A5i6kzhg.png">Mid-fidelity (left) was designed to 1024px width, before we moved to 1440px on the high fidelity (right).</light-box>

### Prompts

As part of a private medical consultation, there are a number of governance-related questions that need to be asked to a patient. Our user, Dr Patel, wanted a system that would intuitively prompt him at the right times for him, whilst not getting in his way when trying to run a consultation.

#### Global Prompts

There are three questions that need to be asked to every patient during a consultation: the ‘Global Prompts.’ In our initial designs (below left), the prompts restricted access to the Patient Details until the doctor ticked them. However, on testing, doctor’s were frustrated by being forced to tick them immediately, as although it is usually something they would do at the beginning of the consultation, it’s not always necessarily the case.

In the next round of design (below right), the prompts were placed at the bottom of the screen, but testing showed that doctors wanted a visual reminder at the start of the call to ask the questions.

<light-box @src="https://cdn-images-1.medium.com/max/2434/1*90ktOEPu1EzBXKezkejCng.png"></light-box>

Finally, in high fidelity we introduced a sidebar with a ‘Reminders’ tab, which would automatically open when a patient call is answered. The doctor has the choice of ticking the boxes immediately, or minimising the box until later in the call:

<light-box @src="https://cdn-images-1.medium.com/max/2026/1*RSPH1q3Y-fjlalcFT_ERbQ.png"></light-box>

#### Prescription Prompts

A similar process was followed with prescription-related prompts. Initial designs used a modal box which restricted functionality until the boxes were ticked, but after testing, this was reduced to a less intrusive set of tick boxes under the prescribed drug.

Once the boxes have been ticked, at which point, the border around the prescription turns green, and the prescription can be filled:

<light-box @src="https://cdn-images-1.medium.com/max/2000/1*4KE5CcqCSndcas4Pinr-OA.gif"></light-box>

### Tasks

During one of our interviews to one of the MedicSpot GPs, I noticed that the doctor had a number of bits of paper around, with scribbles on them. When asked, he told me that there were often things that came up during the consultation, related to the patient, that he needed to remind himself to do later in the day, so he would scribble them down. He told me that there was no place in the MedicSpot interface (or any other consultation system, for that matter) to input information that was not part of the official Clinical Notes.

<light-box @src="https://cdn-images-1.medium.com/max/5990/1*cgdZVbFdTJ6xD4giwuCZgw.jpeg">Before the Tasks feature: there’s a prize for whoever can decipher what’s written.</light-box>

Talking to other GPs, this was a common problem, and one that we solved using the **Tasks** feature.

At any point during a consultation or post-consultation, a doctor can click the ‘Tasks’ tab in the sidebar to get an input box for tasks that he can input. These are stored on the dashboard screen, for the doctor to tick off later.

In testing, our users absolutely loved this feature.

<light-box @src="https://cdn-images-1.medium.com/max/2000/1*1VRzoNXF85v27NjGpdtJ0Q.gif">Adding items to the ‘Tasks’ tab.</light-box>

### Clickable prototype

Step inside the shoes of a real-life doctor, by viewing the final Invision prototype [here](https://invis.io/8ADVRPKP5#/257589082_1-_Navigates_To_Website).

## Results

The usability tests showed that we had created a system that gave GPs access to the many resources and notes they need to give the good diagnosis, whilst most importantly, staying out of the way so that they could build a strong rapport with the patient.

MedicSpot were extremely happy with the new designs and features, and are currently in the process of implementing the designs into their new system. Dr Tarlochan Tor, one of the founders, said:

> Working with Jared was an excellent experience for MedicSpot. From the beginning, I found him to be an extremely knowledgeable UX designer and a creative thinker, and he and the team exceeded even our loftiest of expectations in their redesign of the doctor interface of the system. We were amazed at how quickly they understood the entire consultation process, interviewed lots of GPs and then came up with some incredible solutions to key problems for our doctors.
> Their designs make it a lot easier for doctors to interact our patients, and we’re in the process of implementing them now.

![](https://cdn-images-1.medium.com/max/10944/1*7MzrBp2wfebgFmDS0_IkDw.jpeg)

<light-box @src="https://cdn-images-1.medium.com/max/2362/1*n0rMVBrTxVCIU5A5i6kzhg.png">Mid-fidelity (left) was designed to 1024px width, before we moved to 1440px on the high fidelity (right).</light-box>

## Next Steps

So much was achieved in the two-week sprint, but there were many more things that came up in user interviews that we were unable to implement due to the time limit:

### Communicating with colleagues

Many doctors said a big part of their job satisfaction working for the NHS was interacting with their colleagues, which is clearly something that is harder to do when working from home on a digital system.

However, I believe that it is something that MedicSpot could provide using a forum or group chat feature.

### Snooze button

As the company grows, there will be a bigger backlog of patients waiting to be seen by doctors. Some doctors said that it would be helpful to be able to put a 5 minute timer on a patient waiting, which would give the patient an idea for how long they’ll be waiting as well as letting the doctor complete the clinical notes of the previous consultation without being rushed.
