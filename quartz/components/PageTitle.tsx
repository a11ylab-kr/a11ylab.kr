import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px" }}>
        <img src="/static/a11ylab-logo.png" alt="알리의 접근성 연구소 로고" style={{ height: "120px", width: "auto" }} />
        <span style={{ fontSize: "0.7em", lineHeight: "1.2", textAlign: "center" }}>{title}</span>
      </a>    
    </h2>
    <a href="https://hits.sh/a11ylab.kr/"><img alt="방문자 카운터" src="https://hits.sh/a11ylab.kr.svg?view=today-total&style=plastic&color=1818f0"/></a>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
