import type { Meta as MetaObj, StoryObj } from '@storybook/react';

export const Anchor: StoryObj = {
  render: () => (
    <main>
      <p>
        The current Node.js security policy can be found at{' '}
        <a href="https://github.com/nodejs/node/security/policy#security">
          https://github.com/nodejs/node/security/policy#security
        </a>
        , including information on how to report a vulnerability in Node.js.
        Subscribe to the low-volume announcement-only nodejs-sec mailing list at{' '}
        <a href="https://groups.google.com/forum/#!forum/nodejs-sec">
          https://groups.google.com/forum/#!forum/nodejs-sec
        </a>{' '}
        to stay up to date on security vulnerabilities and security-related
        releases of Node.js and the projects maintained in the nodejs GitHub
        organization.
      </p>
    </main>
  ),
};

export const InlineCode: StoryObj = {
  render: () => (
    <main>
      <p>
        This is an example of <code>inline code block</code>
      </p>
      <p>
        This is an example of{' '}
        <a href="https://nodejs.org/">
          <code>inline code block inside link</code>
        </a>
      </p>
    </main>
  ),
};

export const Headings: StoryObj = {
  render: () => (
    <main>
      <h1>HTML Section Heading 1</h1>
      <h2>HTML Section Heading 2</h2>
      <h3>HTML Section Heading 3</h3>
      <h4>HTML Section Heading 4</h4>
      <h5>HTML Section Heading 5</h5>
      <h6>HTML Section Heading 6</h6>
    </main>
  ),
};

// Create the behavior of the headings with links
// on nodejs.org, this is happening due to `rehype-autolink-headings`
export const HeadingsWithLinks: StoryObj = {
  render: () => (
    <main>
      <h1 id="heading-1">
        <a href="#heading-1">HTML Section Heading 1</a>
      </h1>
      <h2 id="heading-2">
        <a href="#heading-2">HTML Section Heading 2</a>
      </h2>
      <h3 id="heading-3">
        <a href="#heading-3">HTML Section Heading 3</a>
      </h3>
      <h4 id="heading-4">
        <a href="#heading-4">HTML Section Heading 4</a>
      </h4>
      <h5 id="heading-5">
        <a href="#heading-5">HTML Section Heading 5</a>
      </h5>
      <h6 id="heading-6">
        <a href="#heading-6">HTML Section Heading 6</a>
      </h6>
    </main>
  ),
};

export const BoldAndLinks: StoryObj = {
  render: () => (
    <main>
      <p>
        <strong>Bold text (should inherit normal text color)</strong>
      </p>
      <p>
        <strong>
          <a href="#">Bold green link (link inside bold)</a>
        </strong>
      </p>
      <p>
        <a href="#">
          <strong>Bold green link (bold inside link)</strong>
        </a>
      </p>
    </main>
  ),
};

export default { title: 'Design System' } as MetaObj;
