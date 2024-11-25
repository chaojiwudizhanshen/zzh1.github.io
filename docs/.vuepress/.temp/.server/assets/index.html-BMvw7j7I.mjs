import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.DEmmd0BC.mjs";
import "vue-router";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="hello-vuepress" tabindex="-1"><a class="header-anchor" href="#hello-vuepress"><span>Hello VuePress</span></a></h1><p>这是一个 VuePress 文档的示例。</p><h2 id="二级标题" tabindex="-1"><a class="header-anchor" href="#二级标题"><span>二级标题</span></a></h2><p>这是二级标题的内容。你可以在这里添加更多的描述或信息。</p><h3 id="三级标题" tabindex="-1"><a class="header-anchor" href="#三级标题"><span>三级标题</span></a></h3><p>如果你需要更细分的标题，可以使用三个 <code>#</code> 符号来创建一个三级标题。</p><h4 id="四级标题" tabindex="-1"><a class="header-anchor" href="#四级标题"><span>四级标题</span></a></h4><p>同样地，四个 <code>#</code> 符号可以创建一个四级标题，以此类推。</p><ul><li><strong>列表项</strong>：Markdown 还支持无序列表，只需在行首添加 <code>-</code> 或 <code>*</code> 符号。</li><li><strong>另一个列表项</strong>：你可以根据需要添加多个列表项。</li></ul><blockquote><p>这是一个引用块。你可以在这里引用别人的话或添加一些注释。</p></blockquote><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">// 代码块</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Hello, VuePress!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/index.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/","title":"Hello VuePress","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"二级标题","slug":"二级标题","link":"#二级标题","children":[{"level":3,"title":"三级标题","slug":"三级标题","link":"#三级标题","children":[]}]}],"git":{},"filePathRelative":"README.md"}');
export {
  index_html as comp,
  data
};
