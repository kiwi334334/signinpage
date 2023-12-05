export default function BaseHTML({ children, title }) {
    return (
      <html lang="US">
        <head>
          <script src="https://cdn.tailwindcss.com"></script>
          <script src="https://unpkg.com/htmx.org@1.9.8"></script>
          <title>{title}</title>
        </head>
        <body id="body" class="transition-all">
          {children}
        </body>
      </html>
    )
  };