import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  const Cusdis: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
    const pageId = fileData.slug ?? "index"
    const pageUrl = `https://a11ylab.kr/${pageId}`
    const pageTitle = fileData.frontmatter?.title ?? pageId

    return (
      <div
        id="cusdis_thread"
        data-host="https://cusdis-sigma-one.vercel.app"
        data-app-id="c0afea0a-5496-401a-977c-a5b8a1903ba6"
        data-page-id={pageId}
        data-page-url={pageUrl}
        data-page-title={pageTitle}
        data-lang="ko"
        dangerouslySetInnerHTML={{ __html: "" }}
      />
    )
  }

  Cusdis.afterDOMLoaded = `
    (function() {
      var script = document.createElement('script');
      script.src = 'https://cusdis.com/js/cusdis.es.js';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    })();
  `

  return Cusdis
}) satisfies QuartzComponentConstructor
