export function TypographyDemo() {
  return (
    <>
      <div>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
      </div>
      <div>
        <p>This is body text. It provides the main content for the application.</p>
        <p className="text-secondary">This is secondary text with muted color.</p>
        <p className="text-tertiary">This is tertiary text with even more muted color.</p>
        <p><small>This is small text for captions and labels.</small></p>
      </div>
      <div>
        <p><strong>Bold text</strong> and <em>italic text</em> and <code>inline code</code></p>
        <pre><code>{'const example = "code block";'}</code></pre>
        <p><a href="#">This is a link</a> that users can click.</p>
      </div>
    </>
  );
}
