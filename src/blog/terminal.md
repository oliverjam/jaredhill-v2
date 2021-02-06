---
title: How to make your terminal nicer to use
date: 2020-08-13
tags:
  - beginner
  - tools
  - terminal
---

I mentor a lot of junior developers, and it makes me sad to see so many stuck with the ugly, hard-to-use default terminal setup their machine came with. As a developer you probably spend a large chunk of your day using it, so it's a good idea to invest a little bit of time in making it look prettier and work more like a modern application.

<!-- excerpt -->

It can be overwhelming looking at power users' configurations since they tend to have years of accumulated stuff, and little explanation for what everything does. This guide will keep things as minimal as possible—just setting up a few useful things. If you dump 200 cool aliases and plugins into your setup you won't even remember most of them are there and they'll never get used.

## A little computing history

I got a little carried away here so feel free to [skip this section](#what-is-a-shell) if you'd rather get straight to the configuration.

Using a terminal to control your computer feels unnatural and different at first. This is because to a certain extent they are relics from the past.

### What is the terminal?

Way back before Graphical User Interfaces (or GUIs) were invented a [terminal](https://en.wikipedia.org/wiki/Computer_terminal) was a separate piece of hardware that let an operator interact with a computer that probably filled an entire separate room.

Operators would use a textual interface to enter commands and interact with programs and files on the computer. These are known as Command-Line Interfaces (or CLIs).

Eventually computers were small enough to fit under a desk, and came with GUIs. However although graphical interfaces were good at letting new users discover features, they were slower for experienced operators. If you know exactly what you want to do and the right commands to do it a text-based interface can be faster and more powerful.

So computers came with "terminal emulator" programs that allowed the use of CLIs. The default Terminal.app that comes with a Mac is an example of a terminal emulator.

### What is a shell?

Operating systems have what's called a "shell" (often more than one). This is the bit at the edges of the system that the user interacts with. For example you can think of Mac's Finder & Dock or Windows' Explorer & Start Menu as the graphical shell.

Terminals also have a shell—this is the set of commands and language features you can type to interact with the computer. Nowadays most [Unix-like](https://en.wikipedia.org/wiki/Unix-like) operating systems use Bash or Zsh as their command-line shell (this includes Mac, Linux, and Windows if you're using WSL).

The shell is what you interact with when you type commands into a terminal. When you enter `ls` the shell interprets the command as "list the files in the current directory", accesses the storage drive to read all the file names, then prints them to the terminal.

All popular shells descend from a common ancestor, which is why most commands and syntax work whether you're using Bash, Zsh or Fish.
