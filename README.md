## Storybook

How Storybook works

There are 2 ways. The easiest way if you want to docs to functions, hooks and so on which is not rendering any component.

Easiest way

Create a Folder in that specific function or hook or other functionality called story

Lets take for example the hook useMediaQuery for better understanding

Then you create inside the story Folder a file names useMediaQuery.stories.mdx

You copy and use the Template of 1. Docs mdx down there

Component Documentation

Create a folder in the component called story

Story (Canvas)

Create file inside of the folder story called PRCard.stories.tsx

And then Copy the Template and replace with your stuff because you can render out components and also define the props so storybook is like a playground for components

Template.bind means that you have multiple states of a component. Like a Button could be outlined, solid, disabled and much more. You need to of course import your attributes.

Also you need to reference the Docs which you created

import React from 'react';
import { PRCard } from '../index';
import PRCardMDXDocumentation from './PRCard.documentation.mdx'; //🔆 important

const exportComponent = {
title: 'Modules/Card/PRCard',
component: PRCard,
parameters: {
docs: {
page: PRCardMDXDocumentation //🔆 important
}
}
};
export default exportComponent;

const Template = args => <PRCard isDark={args.isDark} bgColor={args.bgColor} width={args.width} />;
const Template_2 = args => <PRCard isDark={args.isDark} bgColor={args.bgColor} width={args.width} />;

export const Basic = Template.bind({});
export const Basic_2 = Template_2.bind({});

Basic.args = {
bgColor: 'var(--moon-D7)',
width: '30%'
};

Basic.args = {
width: '30%',
isDark: true
};

Docs

Create File {component}.documentation.mdx // {component} need to renamed

Then Copy the bottom part and replace the stuff in the curly braces.

# {component_name}

🗂 **Relative File Path:** `{file_path}`

🧐 **Description:** {short_description}

## Media Queries

**📱 Mobile:** {short_description}

**💻 Tablet:** {short_description}

**🖥 Desktop:** {short_description}

## ⚖️ Types

```ts
{
  code_of_the_types_interface;
}
```

## Implementation

{description_what_problem_should_be_solved}

### 🈳 Component

```ts
{
  component_code;
}
```

### 💅 Styles

```ts
{
  component_code;
}
```

How to write Documentation

Header 1: Name of the Component

File Path: The relative path of the component-folder - right-click on folder > copy relative path

short description

Header 3: Media query

short description about the behavior

in Bold: Tablet - write below that what we should see in tablet

in Bold: Smartphone - write below that what we should see in smartphone

Header 2: Types

in a Code-Block: copy and paste the types of your component

write a description

Template: copy and use

Docs mdx

If you want only docs this is your bet

{if only Docs for hooks for example && <Meta title="🪝 Hooks/useMediaQuery" />} // This will create the folder path in storybook preview

# {component_name}

🗂 **Relative File Path:** `{file_path}`

🧐 **Description:** {short_description}

## Media Queries

**📱 Mobile:** {short_description}

**💻 Tablet:** {short_description}

**🖥 Desktop:** {short_description}

## ⚖️ Types

```ts
{
  code_of_the_types_interface;
}
```

## Implementation

{description_what_problem_should_be_solved}

### 🈳 Component

```ts
{
  component_code;
}
```

### 💅 Styles

```ts
{
  component_code;
}
```
