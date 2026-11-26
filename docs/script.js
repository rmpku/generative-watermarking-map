const I18N = {
  en: {
    navFigures: "Survey figures",
    navPapers: "Papers",
    navStats: "Stats",
    surveyStatus: "Survey · Under review",
    heroTitle: "<em>LocWM:</em> A Survey on Blind Generative Watermarking for Diffusion Models",
    heroDescription: "LocWM maps where watermarks enter the diffusion pipeline and how those choices shape recovery. Browse figures from the survey and search the literature index for papers and code.",
    starNote: "If this map helps your research, please <a href=\"https://github.com/rmpku/generative-watermarking-map\" target=\"_blank\" rel=\"noreferrer\">star the project</a> and support our papers",
    explorePapers: "Explore papers",
    exploreFigures: "View survey figures",
    figuresTitle: "Survey figures",
    openFigure: "Open full-size figure",
    taxonomyTitle: "Where watermarks are embedded",
    taxonomyCaption: "The four families target the training dataset, latent states, the denoising network, or the VAE decoder. Latent methods act on initial noise, intermediate sampling states, or the final latent.",
    taxonomyAlt: "Tree of watermark embedding loci with four primary families and a hybrid branch.",
    pipelineTitle: "From training data to rendered image",
    pipelineCaption: "Follow the diffusion pipeline from training data and initial noise to the denoiser, final latent, and VAE decoder. A separate path shows how post-hoc methods mark an already rendered image.",
    pipelineAlt: "Diffusion pipeline with representative watermarking methods marked at the stages they modify.",
    timelineTitle: "Watermarking milestones, 2017–2026",
    timelineCaption: "Selected papers trace the field from learned image watermarking to generative methods. Each year reflects the version cited in the survey.",
    timelineAlt: "Timeline from 2017 to 2026 with color-coded milestones for conventional learned methods, generative methods, and surveys.",
    experimentTitle: "Payload, recovery, and image diversity",
    experimentCaption: "The SD2.1-base experiment measures bit recovery under Gaussian noise and compares within-prompt diversity against unmarked outputs using the same seeds. Watermark identity is held fixed within each prompt. Recovery accuracy uses returned messages. At 512 bits, PRC returned 101 of 128 messages.",
    experimentAlt: "Three plots track recovery under noise, perceptual diversity, and semantic diversity as payload increases.",
    expandPapers: "Show all",
    collapsePapers: "Show first 3",
    metricPapers: "Papers indexed",
    metricPapersNote: "core method papers",
    metricCode: "Public code",
    metricRatio: "Code ratio",
    metricRatioNote: "official + third-party + source unspecified",
    papersTitle: "Paper index",
    searchLabel: "Search papers",
    searchPlaceholder: "Search title, author, venue...",
    yearLabel: "Year",
    codeLabel: "Code",
    locusLabel: "Watermark locus",
    modalityLabel: "Media",
    allYears: "All years",
    allStatuses: "All statuses",
    allLoci: "All watermark loci",
    allMedia: "Image + video",
    tableLegend: "official + third-party + source unspecified = public code",
    thYear: "Year",
    thPaper: "Paper / authors",
    thVenue: "Venue",
    thInstitution: "First institution",
    thCode: "Code",
    emptyState: "No records match this query.",
    statsCaption: "Automatically generated from the paper index.",
    yearChartTitle: "Papers by year",
    venueChartTitle: "Venues",
    footerText: "Built as a living research index",
    results: "records",
    public: "Public",
    official: "Official",
    thirdParty: "Third-party",
    sourceUnspecified: "Source unspecified",
    unverified: "Pending review",
    noneFound: "No code",
    papers: "papers"
  },
  zh: {
    navFigures: "综述图表",
    navPapers: "论文",
    navStats: "统计",
    surveyStatus: "综述 · 审稿中",
    heroTitle: "<em>LocWM：</em>扩散模型盲生成式水印综述",
    heroDescription: "LocWM 梳理水印在扩散模型中的嵌入位置，以及这些位置如何影响水印恢复。可浏览综述图表，也可在文献索引中检索论文和代码。",
    starNote: "如果这个文献库对您的研究有帮助，欢迎 <a href=\"https://github.com/rmpku/generative-watermarking-map\" target=\"_blank\" rel=\"noreferrer\">Star 我们的项目</a>，也欢迎关注我们的论文",
    explorePapers: "浏览论文",
    exploreFigures: "查看综述图表",
    figuresTitle: "综述图表",
    openFigure: "查看高清图",
    taxonomyTitle: "按嵌入位置划分水印方法",
    taxonomyCaption: "四类方法分别作用于训练数据集、潜空间、去噪网络或 VAE 解码器。潜空间方法进一步按采样阶段划分为初始噪声、中间状态和最终潜变量。",
    taxonomyAlt: "水印嵌入位置分类树，包含四个主要类别和一个混合分支。",
    pipelineTitle: "从训练数据到生成图像",
    pipelineCaption: "图中标出了训练数据、初始噪声、去噪网络、最终潜变量和 VAE 解码器等水印嵌入位置。右侧展示在图像生成后添加水印的路径。",
    pipelineAlt: "扩散生成流程示意图，标出代表性水印方法及其作用阶段。",
    timelineTitle: "水印研究的演进（2017–2026）",
    timelineCaption: "时间线选取代表性论文，回顾从学习式图像水印到生成式水印的发展。年份以综述引用的论文版本为准。",
    timelineAlt: "2017 至 2026 年水印研究时间线，以颜色区分传统学习式方法、生成式方法和综述。",
    experimentTitle: "水印容量、恢复与图像多样性",
    experimentCaption: "实验在 SD2.1-base 上测量高斯噪声下的比特恢复率，并用相同种子生成的无水印图像作为参照，比较同一提示词下的图像多样性。每个提示词内固定水印身份。比特准确率按成功返回的消息计算，在 512 比特容量下，PRC 从 128 张图像中成功返回了 101 条消息。",
    experimentAlt: "三张曲线图展示随水印容量变化的噪声下恢复表现、感知多样性和语义多样性。",
    expandPapers: "展开全部",
    collapsePapers: "折叠到前 3 篇",
    metricPapers: "收录论文",
    metricPapersNote: "核心方法论文",
    metricCode: "公开代码",
    metricRatio: "代码比例",
    metricRatioNote: "官方 + 第三方 + 来源未说明",
    papersTitle: "论文索引",
    searchLabel: "搜索论文",
    searchPlaceholder: "搜索标题、作者、venue...",
    yearLabel: "年份",
    codeLabel: "代码",
    locusLabel: "水印位置",
    modalityLabel: "模态",
    allYears: "全部年份",
    allStatuses: "全部状态",
    allLoci: "全部水印位置",
    allMedia: "图像 + 视频",
    tableLegend: "官方 + 第三方 + 来源未说明 = 公开代码",
    thYear: "年份",
    thPaper: "论文 / 作者",
    thVenue: "发表 venue",
    thInstitution: "第一单位",
    thCode: "代码",
    emptyState: "没有符合条件的记录。",
    statsCaption: "根据论文索引自动生成。",
    yearChartTitle: "按年份统计",
    venueChartTitle: "主要 venue",
    footerText: "持续更新的研究索引",
    results: "条记录",
    public: "公开",
    official: "官方",
    thirdParty: "第三方",
    sourceUnspecified: "来源未说明",
    unverified: "待核验",
    noneFound: "无代码",
    papers: "篇论文"
  }
};

const state = { lang: "en", query: "", year: "all", code: "all", locus: "all", modality: "all", expanded: false };
let papers = [];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function t(key) { return I18N[state.lang][key] || I18N.en[key] || key; }

function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[character]));
}

function formatNumber(value) { return new Intl.NumberFormat(state.lang === "zh" ? "zh-CN" : "en-US").format(value); }
function percentage(value) { return `${(value * 100).toFixed(1)}%`; }

function metricCount(value) {
  const unit = state.lang === "zh" ? "篇" : "papers";
  return `${formatNumber(value)}<span class="metric-unit">${unit}</span>`;
}

function codeLabel(status) {
  return { official: t("official"), third_party: t("thirdParty"), source_unspecified: t("sourceUnspecified"), unverified: t("unverified"), none_found: t("noneFound") }[status] || t("unverified");
}

function codeClass(status) {
  return { official: "status-official", third_party: "status-third-party", source_unspecified: "status-source-unspecified", none_found: "status-none" }[status] || "status-unverified";
}

function countryLabel(country) {
  if (!country || country === "Unverified") return t("unverified");
  const names = {
    CN: state.lang === "zh" ? "中国" : "China",
    US: state.lang === "zh" ? "美国" : "USA",
    SG: state.lang === "zh" ? "新加坡" : "Singapore",
    AU: state.lang === "zh" ? "澳大利亚" : "Australia",
    KR: state.lang === "zh" ? "韩国" : "South Korea",
    DE: state.lang === "zh" ? "德国" : "Germany",
    FR: state.lang === "zh" ? "法国" : "France",
    IE: state.lang === "zh" ? "爱尔兰" : "Ireland",
    CA: state.lang === "zh" ? "加拿大" : "Canada",
    IL: state.lang === "zh" ? "以色列" : "Israel",
    TW: state.lang === "zh" ? "中国台湾" : "Taiwan",
    HK: state.lang === "zh" ? "中国香港" : "Hong Kong",
    MO: state.lang === "zh" ? "中国澳门" : "Macau",
    AE: state.lang === "zh" ? "阿联酋" : "UAE",
    RU: state.lang === "zh" ? "俄罗斯" : "Russia"
  };
  return names[country] || country;
}

function compactVenue(venue) {
  return venue
    .replace(/^Proceedings of the /, "")
    .replace(/^The [A-Za-z]+th International Conference on /, "ICLR / ")
    .replace(/\s*\([^)]*\)$/, "")
    .replace(/International Conference on /, "IC ")
    .replace(/Advances in Neural Information Processing Systems/, "NeurIPS")
    .replace(/Proceedings of the IEEE\/CVF /, "IEEE/CVF ")
    .trim();
}

function safeHref(value) {
  return /^https?:\/\//i.test(value || "") ? value : "";
}

function applyLanguage() {
  document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";
  $$('[data-i18n]').forEach((element) => { element.innerHTML = t(element.dataset.i18n); });
  $$('[data-i18n-alt]').forEach((image) => { image.alt = t(image.dataset.i18nAlt); });
  document.title = $("#surveyTitle").textContent;
  $("#languageLabel").textContent = state.lang === "en" ? "中文" : "EN";
  $("#languageToggle").setAttribute("aria-label", state.lang === "en" ? "Switch to Chinese" : "切换到英文");
  $("#searchInput").placeholder = t("searchPlaceholder");
  populateFilters();
  renderAll();
}

function makeOption(value, label, selected) {
  return `<option value="${escapeHTML(value)}"${selected ? " selected" : ""}>${escapeHTML(label)}</option>`;
}

function populateFilters() {
  const years = [...new Set(papers.map((paper) => paper.year).filter(Boolean))].sort((a, b) => b - a);
  const loci = [...new Set(papers.map((paper) => paper.locus).filter(Boolean))].sort((left, right) => {
    if (left === right) return 0;
    if (left === "Other") return 1;
    if (right === "Other") return -1;
    return left.localeCompare(right);
  });
  const modalities = [...new Set(papers.map((paper) => paper.modality).filter(Boolean))].sort();
  const statuses = ["official", "third_party", "source_unspecified", "none_found"];
  $("#yearFilter").innerHTML = makeOption("all", t("allYears"), state.year === "all") + years.map((year) => makeOption(year, year, String(state.year) === String(year))).join("");
  $("#codeFilter").innerHTML = makeOption("all", t("allStatuses"), state.code === "all") + makeOption("public", `${t("public")} code`, state.code === "public") + statuses.map((status) => makeOption(status, codeLabel(status), state.code === status)).join("");
  $("#locusFilter").innerHTML = makeOption("all", t("allLoci"), state.locus === "all") + loci.map((locus) => makeOption(locus, locus, state.locus === locus)).join("");
  $("#modalityFilter").innerHTML = makeOption("all", t("allMedia"), state.modality === "all") + modalities.map((modality) => makeOption(modality, modality, state.modality === modality)).join("");
}

function filteredPapers() {
  const query = state.query.trim().toLowerCase();
  return papers
    .filter((paper) => paper.inCore)
    .filter((paper) => !query || [paper.title, paper.authors.join(" "), paper.venue, paper.firstInstitution, paper.firstCountry].join(" ").toLowerCase().includes(query))
    .filter((paper) => state.year === "all" || String(paper.year) === String(state.year))
    .filter((paper) => state.code === "all" || (state.code === "public" ? ["official", "third_party", "source_unspecified"].includes(paper.codeStatus) : paper.codeStatus === state.code))
    .filter((paper) => state.locus === "all" || paper.locus === state.locus)
    .filter((paper) => state.modality === "all" || paper.modality === state.modality)
    .sort((a, b) => (b.year || 0) - (a.year || 0) || a.title.localeCompare(b.title));
}

function renderPapers() {
  const results = filteredPapers();
  const visibleResults = state.expanded ? results : results.slice(0, 3);
  $("#resultCount").textContent = `${formatNumber(results.length)} ${t("results")}`;
  $("#papersBody").innerHTML = visibleResults.map((paper) => {
    const paperHref = safeHref(paper.paperLink || paper.paperSearchLink);
    const paperMarker = paper.paperLink ? "↗" : "⌕";
    const title = paperHref ? `<a href="${paperHref}" target="_blank" rel="noreferrer">${escapeHTML(paper.title)} ${paperMarker}</a>` : escapeHTML(paper.title);
    const authors = paper.authors.length > 2 ? `${paper.authors.slice(0, 2).join(", ")} +${paper.authors.length - 2}` : paper.authors.join(", ");
    const codeHref = safeHref(paper.codeLink);
    return `<tr>
      <td class="year-cell">${escapeHTML(paper.year || "—")}</td>
      <td><div class="paper-title">${title}</div><div class="paper-authors">${escapeHTML(authors)}</div><div class="paper-tags"><span class="paper-tag">${escapeHTML(paper.modality)}</span><span class="paper-tag">${escapeHTML(paper.locus)}</span></div></td>
      <td class="venue-cell" title="${escapeHTML(paper.venue)}">${escapeHTML(compactVenue(paper.venue))}</td>
      <td class="unit-cell">${escapeHTML(paper.firstInstitution === "Unverified" ? t("unverified") : paper.firstInstitution)}<span class="country-label">${escapeHTML(countryLabel(paper.firstCountry))}</span></td>
      <td class="code-cell"><span class="status-pill ${codeClass(paper.codeStatus)}">${escapeHTML(codeLabel(paper.codeStatus))}</span>${codeHref ? `<a class="code-link" href="${codeHref}" target="_blank" rel="noreferrer"><span>repo</span><span class="code-link-arrow" aria-hidden="true">↗</span></a>` : ""}</td>
    </tr>`;
  }).join("");
  $("#emptyState").hidden = results.length !== 0;
  $("#tableActions").hidden = results.length <= 3;
  $("#expandToggle").setAttribute("aria-expanded", String(state.expanded));
  const expandLabel = state.expanded ? t("collapsePapers") : `${t("expandPapers")} ${formatNumber(results.length)} ${t("papers")}`;
  $("#expandToggle").innerHTML = `<span class="expand-rule" aria-hidden="true"></span><span class="expand-label">${expandLabel}</span><span class="expand-icon" aria-hidden="true">⌄</span><span class="expand-rule" aria-hidden="true"></span>`;
}

function entriesBy(items, key) {
  const map = new Map();
  items.forEach((item) => map.set(key(item), (map.get(key(item)) || 0) + 1));
  return [...map.entries()].sort((a, b) => b[1] - a[1] || String(a[0]).localeCompare(String(b[0])));
}

function renderYearChart(core) {
  const entries = entriesBy(core, (paper) => paper.year).sort((a, b) => a[0] - b[0]);
  const max = Math.max(...entries.map((entry) => entry[1]), 1);
  $("#yearChart").innerHTML = entries.map(([year, count]) => `<div class="bar-item"><span class="bar-fill" style="height:${Math.max(4, count / max * 100)}%"><span class="bar-value">${count}</span></span><span class="bar-label">${year}</span></div>`).join("");
}

function renderVenueList(core) {
  const entries = entriesBy(core, (paper) => compactVenue(paper.venue)).slice(0, 6);
  $("#venueList").innerHTML = entries.map(([venue, count]) => `<div class="venue-card"><strong title="${escapeHTML(venue)}">${escapeHTML(venue)}</strong><span>${count} ${t("papers")}</span></div>`).join("");
}

function renderStats() {
  const core = papers.filter((paper) => paper.inCore);
  const publicCode = core.filter((paper) => ["official", "third_party", "source_unspecified"].includes(paper.codeStatus));
  $("#metricPapers").innerHTML = metricCount(core.length);
  $("#metricCode").innerHTML = metricCount(publicCode.length);
  $("#metricCodeNote").textContent = `${core.filter((paper) => paper.codeStatus === "official").length} ${t("official")} · ${core.filter((paper) => paper.codeStatus === "third_party").length} ${t("thirdParty")} · ${core.filter((paper) => paper.codeStatus === "source_unspecified").length} ${t("sourceUnspecified")}`;
  $("#metricRatio").textContent = percentage(publicCode.length / Math.max(core.length, 1));
  renderYearChart(core);
  renderVenueList(core);
}

function renderAll() { renderPapers(); renderStats(); }

function bind() {
  $("#languageToggle").addEventListener("click", () => { state.lang = state.lang === "en" ? "zh" : "en"; applyLanguage(); });
  $("#searchInput").addEventListener("input", (event) => { state.query = event.target.value; state.expanded = false; renderPapers(); });
  [["#yearFilter", "year"], ["#codeFilter", "code"], ["#locusFilter", "locus"], ["#modalityFilter", "modality"]].forEach(([selector, key]) => $(selector).addEventListener("change", (event) => { state[key] = event.target.value; state.expanded = false; renderPapers(); }));
  $("#expandToggle").addEventListener("click", () => { state.expanded = !state.expanded; renderPapers(); });
}

async function init() {
  bind();
  try {
    const response = await fetch("data/papers.json");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    papers = await response.json();
    applyLanguage();
  } catch (error) {
    $("#papersBody").innerHTML = `<tr><td colspan="5" class="empty-state">Data load failed: ${escapeHTML(error.message)}</td></tr>`;
  }
}

init();
