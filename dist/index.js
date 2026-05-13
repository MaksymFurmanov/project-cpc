"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  ArticleLayout: () => ArticleLayout,
  ArticleLoading: () => ArticleLoading,
  ArticleType: () => ArticleType,
  ArticlesListLoading: () => ArticlesListLoading,
  BackBtn: () => BackBtn,
  Gallery: () => Gallery,
  languages: () => languages,
  useImgPreload: () => useImgPreload
});
module.exports = __toCommonJS(index_exports);

// src/ui/articles/BackBtn.tsx
var import_articles = __toESM(require("./articles.module-BY7OUETJ.module.css"));
var import_jsx_runtime = require("react/jsx-runtime");
function BackBtn({ children, onBack }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: import_articles.default.backBtn, onClick: () => onBack(), children });
}

// src/ui/articles/Gallery.tsx
var import_articles2 = __toESM(require("./articles.module-BY7OUETJ.module.css"));
var import_io = require("react-icons/io");
var import_embla_carousel_react = __toESM(require("embla-carousel-react"));
var import_clsx2 = __toESM(require("clsx"));

// src/ui/articles/skeletons/GalleryLoading.tsx
var import_articles_skeletons = __toESM(require("./articles-skeletons.module-V6WRGZMG.module.css"));
var import_clsx = __toESM(require("clsx"));
var import_jsx_runtime2 = require("react/jsx-runtime");
function GalleryLoading() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: (0, import_clsx.default)(import_articles_skeletons.default.gallerySkeleton, import_articles_skeletons.default.skeleton) });
}

// src/hooks/useImgPreload.ts
var import_react = require("react");
function useImgPreload(images) {
  const [ready, setReady] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    let active = true;
    Promise.all(
      images.map(
        (src) => new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve();
          img.onerror = reject;
        })
      )
    ).then(() => {
      if (active) setReady(true);
    });
    return () => {
      active = false;
    };
  }, [images]);
  return ready;
}

// src/ui/articles/Gallery.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
function Gallery({ images }) {
  const [emblaRef, emblaApi] = (0, import_embla_carousel_react.default)({
    dragFree: true,
    loop: true,
    containScroll: "trimSnaps"
  });
  const preloaded = useImgPreload(images);
  if (!preloaded) return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(GalleryLoading, {});
  const isOneImg = images.length === 1;
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: (0, import_clsx2.default)(import_articles2.default.gallery, "not-selectable"), children: [
    !isOneImg && emblaApi?.canScrollPrev() && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      import_io.IoIosArrowBack,
      {
        className: import_articles2.default.galleryIcon,
        onClick: () => emblaApi.scrollPrev()
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: import_articles2.default.carousel, ref: emblaRef, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: import_articles2.default.wrapper, children: images.map((img, index) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      "img",
      {
        className: import_articles2.default.image,
        src: img,
        alt: ""
      },
      index
    )) }) }),
    !isOneImg && emblaApi?.canScrollNext() && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      import_io.IoIosArrowForward,
      {
        className: import_articles2.default.galleryIcon,
        onClick: () => emblaApi.scrollNext()
      }
    )
  ] }) });
}

// src/ui/articles/ArticleLayout.tsx
var import_articles3 = __toESM(require("./articles.module-BY7OUETJ.module.css"));
var import_jsx_runtime4 = require("react/jsx-runtime");
function ArticleLayout({ navigation, gallery, title, date, content }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("article", { className: import_articles3.default.mainContainer, children: [
    navigation,
    gallery,
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: import_articles3.default.textContent, children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h2", { className: import_articles3.default.titleField, children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("b", { className: import_articles3.default.dateField, children: date }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: import_articles3.default.textField, children: content })
    ] })
  ] });
}

// src/ui/articles/skeletons/ArticleLoading.tsx
var import_articles_skeletons2 = __toESM(require("./articles-skeletons.module-V6WRGZMG.module.css"));
var import_jsx_runtime5 = require("react/jsx-runtime");
function ArticleLoading() {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: import_articles_skeletons2.default.card, children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(GalleryLoading, {}),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: import_articles_skeletons2.default.textContent, children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: `${import_articles_skeletons2.default.titleSkeleton} ${import_articles_skeletons2.default.skeleton}` }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: `${import_articles_skeletons2.default.dateSkeleton} ${import_articles_skeletons2.default.skeleton}` }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: import_articles_skeletons2.default.textSkeleton, children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: import_articles_skeletons2.default.skeleton }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: import_articles_skeletons2.default.skeleton }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: import_articles_skeletons2.default.skeleton }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: import_articles_skeletons2.default.skeleton })
      ] })
    ] })
  ] });
}

// src/ui/articles/skeletons/ArticlesListLoading.tsx
var import_articles_skeletons3 = __toESM(require("./articles-skeletons.module-V6WRGZMG.module.css"));
var import_jsx_runtime6 = require("react/jsx-runtime");
function ArticlesListLoading() {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: import_articles_skeletons3.default.container, children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: `${import_articles_skeletons3.default.paginationSkeleton} ${import_articles_skeletons3.default.skeleton}` }) }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ArticleLoading, {})
  ] });
}

// src/types/articles.ts
var ArticleType = /* @__PURE__ */ ((ArticleType2) => {
  ArticleType2["NEWS"] = "news";
  ArticleType2["EVENT"] = "event";
  return ArticleType2;
})(ArticleType || {});

// src/utils/languages.ts
var languages = [
  {
    label: "SK",
    flagImg: "/langFlags/sk.webp",
    systemName: "sk"
  },
  {
    label: "EN",
    flagImg: "/langFlags/en.webp",
    systemName: "en"
  },
  {
    label: "UA",
    flagImg: "/langFlags/ua.webp",
    systemName: "uk"
  }
];
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ArticleLayout,
  ArticleLoading,
  ArticleType,
  ArticlesListLoading,
  BackBtn,
  Gallery,
  languages,
  useImgPreload
});
//# sourceMappingURL=index.js.map