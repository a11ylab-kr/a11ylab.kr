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
      function setupIframeResize(iframe) {
        iframe.addEventListener('load', function() {
          try {
            var body = iframe.contentDocument.body;
            iframe.style.height = body.scrollHeight + 'px';
            new ResizeObserver(function() {
              iframe.style.height = body.scrollHeight + 'px';
            }).observe(body);
          } catch(e) {}
        });
      }

      var langScript = document.createElement('script');
      langScript.src = 'https://cusdis-sigma-one.vercel.app/js/widget/lang/ko.js';
      langScript.defer = true;
      langScript.onload = function() {
        var script = document.createElement('script');
        script.src = 'https://cusdis-sigma-one.vercel.app/js/cusdis.es.js';
        script.async = true;
        script.defer = true;
        script.onload = function() {
          var thread = document.getElementById('cusdis_thread');
          if (!thread) return;
          var existing = thread.querySelector('iframe');
          if (existing) {
            setupIframeResize(existing);
          } else {
            var mo = new MutationObserver(function() {
              var iframe = thread.querySelector('iframe');
              if (iframe) { mo.disconnect(); setupIframeResize(iframe); }
            });
            mo.observe(thread, { childList: true });
          }
        };
        document.body.appendChild(script);
      };
      document.body.appendChild(langScript);
    })();
  `

  return Cusdis
}) satisfies QuartzComponentConstructor
