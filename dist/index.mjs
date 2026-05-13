// src/ui/articles/BackBtn.tsx
import styles from "./articles.module-BY7OUETJ.module.css";
import { jsx } from "react/jsx-runtime";
function BackBtn({ children, onBack }) {
  return /* @__PURE__ */ jsx("button", { className: styles.backBtn, onClick: () => onBack(), children });
}

// src/ui/articles/Gallery.tsx
import styles3 from "./articles.module-BY7OUETJ.module.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import useEmblaCarousel from "embla-carousel-react";
import clsx2 from "clsx";

// src/ui/articles/skeletons/GalleryLoading.tsx
import styles2 from "./articles-skeletons.module-V6WRGZMG.module.css";
import clsx from "clsx";
import { jsx as jsx2 } from "react/jsx-runtime";
function GalleryLoading() {
  return /* @__PURE__ */ jsx2("div", { className: clsx(styles2.gallerySkeleton, styles2.skeleton) });
}

// src/hooks/useImgPreload.ts
import { useEffect, useState } from "react";
function useImgPreload(images) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
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
import { jsx as jsx3, jsxs } from "react/jsx-runtime";
function Gallery({ images }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    dragFree: true,
    loop: true,
    containScroll: "trimSnaps"
  });
  const preloaded = useImgPreload(images);
  if (!preloaded) return /* @__PURE__ */ jsx3(GalleryLoading, {});
  const isOneImg = images.length === 1;
  return /* @__PURE__ */ jsx3("div", { children: /* @__PURE__ */ jsxs("div", { className: clsx2(styles3.gallery, "not-selectable"), children: [
    !isOneImg && emblaApi?.canScrollPrev() && /* @__PURE__ */ jsx3(
      IoIosArrowBack,
      {
        className: styles3.galleryIcon,
        onClick: () => emblaApi.scrollPrev()
      }
    ),
    /* @__PURE__ */ jsx3("div", { className: styles3.carousel, ref: emblaRef, children: /* @__PURE__ */ jsx3("div", { className: styles3.wrapper, children: images.map((img, index) => /* @__PURE__ */ jsx3(
      "img",
      {
        className: styles3.image,
        src: img,
        alt: ""
      },
      index
    )) }) }),
    !isOneImg && emblaApi?.canScrollNext() && /* @__PURE__ */ jsx3(
      IoIosArrowForward,
      {
        className: styles3.galleryIcon,
        onClick: () => emblaApi.scrollNext()
      }
    )
  ] }) });
}

// src/ui/articles/ArticleLayout.tsx
import styles4 from "./articles.module-BY7OUETJ.module.css";
import { jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
function ArticleLayout({ navigation, gallery, title, date, content }) {
  return /* @__PURE__ */ jsxs2("article", { className: styles4.mainContainer, children: [
    navigation,
    gallery,
    /* @__PURE__ */ jsxs2("div", { className: styles4.textContent, children: [
      /* @__PURE__ */ jsx4("h2", { className: styles4.titleField, children: title }),
      /* @__PURE__ */ jsx4("b", { className: styles4.dateField, children: date }),
      /* @__PURE__ */ jsx4("div", { className: styles4.textField, children: content })
    ] })
  ] });
}

// src/ui/articles/skeletons/ArticleLoading.tsx
import styles5 from "./articles-skeletons.module-V6WRGZMG.module.css";
import { jsx as jsx5, jsxs as jsxs3 } from "react/jsx-runtime";
function ArticleLoading() {
  return /* @__PURE__ */ jsxs3("div", { className: styles5.card, children: [
    /* @__PURE__ */ jsx5(GalleryLoading, {}),
    /* @__PURE__ */ jsxs3("div", { className: styles5.textContent, children: [
      /* @__PURE__ */ jsx5("div", { className: `${styles5.titleSkeleton} ${styles5.skeleton}` }),
      /* @__PURE__ */ jsx5("div", { className: `${styles5.dateSkeleton} ${styles5.skeleton}` }),
      /* @__PURE__ */ jsxs3("div", { className: styles5.textSkeleton, children: [
        /* @__PURE__ */ jsx5("span", { className: styles5.skeleton }),
        /* @__PURE__ */ jsx5("span", { className: styles5.skeleton }),
        /* @__PURE__ */ jsx5("span", { className: styles5.skeleton }),
        /* @__PURE__ */ jsx5("span", { className: styles5.skeleton })
      ] })
    ] })
  ] });
}

// src/ui/articles/skeletons/ArticlesListLoading.tsx
import styles6 from "./articles-skeletons.module-V6WRGZMG.module.css";
import { jsx as jsx6, jsxs as jsxs4 } from "react/jsx-runtime";
function ArticlesListLoading() {
  return /* @__PURE__ */ jsxs4("div", { className: styles6.container, children: [
    /* @__PURE__ */ jsx6("div", { children: /* @__PURE__ */ jsx6("div", { className: `${styles6.paginationSkeleton} ${styles6.skeleton}` }) }),
    /* @__PURE__ */ jsx6(ArticleLoading, {})
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
export {
  ArticleLayout,
  ArticleLoading,
  ArticleType,
  ArticlesListLoading,
  BackBtn,
  Gallery,
  languages,
  useImgPreload
};
//# sourceMappingURL=index.mjs.map