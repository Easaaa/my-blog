---
title: 'Why start using TailwindCss in 2021.'
excerpt: 'Let’s get straight to the point. Why bother learning this new way of writing CSS? Well I’d start by saying it’s fucking fast!.'
date: '2021-04-10T22:40:32.169Z'
ogImage:
  url: ''
---

Hi, this is Leonardo.

I'm a simple human that tries to improve day by day, step by step. If it’s your first time here you can read who I am in this blog post <mark>[“Who am I”](https://www.leonardotononi.com/posts/my-presentation)</mark>, <strong>otherwise skip this part.</strong>

### Introduction

From their website we understand that TailwindCss is a utility first css framework. It allows us to write our style directly in the html. “Yes OK” you will say “but I have a thousand of questions!” Don’t worry, in the article I will try to answer everything you should evaluate to see if it is a right fit for your needs.

### What it is and what are the advantages?

Let’s get straight to the point. Why bother learning this new way of writing CSS? Well I’d start by saying it’s fucking fast! What do I mean by fast? Imagine no longer having to create separate files for component markups and its styles. Imagine no longer having to think of names for “Wrapper” or “WrapperOfWrapperOfWrapper”. Not having to continually import or export css variables. Imagine you can do it all in one line.

Imagine being able to copy and paste entire structures of components already created by someone else, where you can apply your personal style in the blink of an eye. Imagine being able to focus primarily on creating the logic of your application.
That is Tailwind.

### Why is it better than others?

I have never really tried other css frameworks in the same way I tried Tailwind. But what I can tell you is that while others have a more defined and less easily customizable style, with tailwind everything remains in our hands, but at the same time it allows you to have a good level of predefined style guidelines.
So if you are like me, you don’t have a strong knowledge of design, you can still create beautiful applications or web pages without compromise the unicity of your style.

A site created with tailwind is difficult to detect at first sight, on the contrary the sites created with other frameworks have a more marked and recognizable imprint.

I want to show you some example of what triggered my curiosity.
Below an example of an easily integrated dark mode:

```
// tailwind.config.js
module.exports = {
  darkMode: ‘medium’,
  // …
}
```

```
<div className=“bg-white dark:bg-gray-800”>
  // .....
</div>
```

Not to mention the media query, which can be integrated with a simple "md: text-white" to say "@media (min-width: 768px) {…}".
In my humble opinion this is really cool and everything is so easily customizable.

> Also, most Tailwind projects ship less than 10KB of CSS to the client.

### Why not just use CSS?

Because Tailwind requires a minimal learning curve and the documentation it’s really well done. Over time, it will make the creation of projects much easier and faster, without having to leave behind the flexibility of pure css.

Furthermore, once you have decided to create a project with tailwind, it will always be possible to apply other types of css, like styled components.

### Recap

- Speed up the creation and the design of any project
- Allows you to raise the bar of your style
- You can say goodbye to having to create fancy names for your components or Css variables = Easy
- Highly customizable
- Dev friendly, covers the real needs that a developer may have in 2021

### EXTRA: some useful FREE resources

- [Tailwind CSS Components. Examples and templates](https://tailwindcomponents.com/)
- [Tailblocks — Ready-to-use Tailwind CSS blocks](https://tailblocks.cc/)
- [Meraki UI Tailwindcss Components](https://merakiui.com/)
- [Tailwind UI KIT – 250 components and templates for React, VueJS and Angular.](https://www.tailwind-kit.com/)
