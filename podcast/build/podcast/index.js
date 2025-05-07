/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/podcast/block.json":
/*!********************************!*\
  !*** ./src/podcast/block.json ***!
  \********************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/podcast","version":"0.1.0","title":"Podcast","category":"widgets","icon":"smiley","description":"Example block scaffolded with Create Block tool.","example":{},"supports":{"html":false},"textdomain":"podcast","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js","attributes":{"podcastSeries":{"type":"array","enum":["The Story","The Royals with Roya and Kate","How to win an election","Politics Unpacked","Your History","Off Air with Jane & Fi","Times news briefing","World in 10"]},"titleOverride":{"type":"string","default":""},"summaryOverride":{"type":"string","default":""}}}');

/***/ }),

/***/ "./src/podcast/edit.js":
/*!*****************************!*\
  !*** ./src/podcast/edit.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fixtures_podcastList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fixtures/podcastList */ "./src/podcast/fixtures/podcastList.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/podcast/editor.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */





/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

async function getPodcastByTitle(title) {
  // Simulate an API call to fetch podcast data
  await new Promise(resolve => setTimeout(resolve, 1500));
  const podcast = _fixtures_podcastList__WEBPACK_IMPORTED_MODULE_3__.podcastList.find(podcast => podcast.title === "Politics Unpacked");
  if (podcast) {
    return podcast;
  } else {
    return null;
  }
}
function Edit({
  attributes
}) {
  const {
    podcastSeries,
    titleOverride,
    summaryOverride,
    episodeId
  } = attributes;
  const [data, setData] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)();
  const [loading, setLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(true);
  const [error, setError] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    async function fetchData() {
      try {
        const podcast = await getPodcastByTitle(podcastSeries);
        if (podcast) {
          setData(podcast);
        } else {
          setError("Podcast not found");
        }
      } catch (err) {
        setError("An error occurred while fetching the podcast data");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  console.log("Podcast data:", data);
  let selectedPodcast = _fixtures_podcastList__WEBPACK_IMPORTED_MODULE_3__.podcastList.find(podcast => podcast.title === podcastSeries);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)(),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
      children: "LATEST EPISODE"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
      tagName: "h2" // The tag here is the element output and editable in the admin
      ,
      value: titleOverride || podcastSeries // Any existing content, either from the database or an attribute default
      ,
      allowedFormats: [] // Allow the content to be made bold or italic, but do not allow other formatting options
      ,
      onChange: newTitleOverride => setAttributes({
        titleOverride: newTitleOverride
      }) // Store updated content as a block attribute
      ,
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(selectedPodcast?.title) // Display this text before any content has been added by the user
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
      tagName: "p" // The tag here is the element output and editable in the admin
      ,
      value: summaryOverride || selectedPodcast?.metaDescription // Any existing content, either from the database or an attribute default
      ,
      allowedFormats: [] // Allow the content to be made bold or italic, but do not allow other formatting options
      ,
      onChange: newSummaryOverride => setAttributes({
        summaryOverride: newSummaryOverride
      }) // Store updated content as a block attribute
      ,
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(selectedPodcast?.metaDescription) // Display this text before any content has been added by the user
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Podcast Settings", "podcast"),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          __nextHasNoMarginBottom: true,
          label: "Podcast Series",
          value: podcastSeries,
          options: [{
            value: "The Story",
            label: "The Story"
          }, {
            value: "The Royals with Roya and Kate",
            label: "The Royals with Roya and Kate"
          }, {
            value: "How to win an election",
            label: "How to win an election"
          }, {
            value: "Politics Unpacked",
            label: "Politics Unpacked"
          }, {
            value: "Your History",
            label: "Your History"
          }, {
            value: "Off Air with Jane & Fi",
            label: "Off Air with Jane & Fi"
          }, {
            value: "Times news briefing",
            label: "Times news briefing"
          }, {
            value: "World in 10",
            label: "World in 10"
          }],
          onChange: newValue => {
            setAttributes({
              podcastSeries: newValue,
              titleOverride: null,
              summaryOverride: null
            });
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          __nextHasNoMarginBottom: true,
          label: "Episode ID",
          type: "text",
          value: episodeId,
          onChange: newEpisodeId => {
            setAttributes({
              episodeId: newEpisodeId
            });
          }
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "podcast-container",
      children: [loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
        children: "Loading..."
      }), error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
        children: error
      }), data && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "podcast-cover-img",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
            src: data.img.url,
            alt: "Podcast Cover"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "podcast-info",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
            className: "podcast-tags",
            children: "LATEST EPISODE"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
            className: "podcast-title",
            children: titleOverride || data.title
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
            className: "podcast-summary",
            children: summaryOverride || data.description
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "podcast-player",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("audio", {
            controls: true,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("source", {
              src: "https://www.example.com/audio.mp3",
              type: "audio/mpeg"
            }), "Your browser does not support the audio element."]
          })
        })]
      })]
    })]
  });
}

/***/ }),

/***/ "./src/podcast/editor.scss":
/*!*********************************!*\
  !*** ./src/podcast/editor.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/podcast/fixtures/podcastList.js":
/*!*********************************************!*\
  !*** ./src/podcast/fixtures/podcastList.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   podcastList: () => (/* binding */ podcastList)
/* harmony export */ });
const podcastList = [{
  newsKitId: "the-royals-with-roya-and-kate",
  slug: "the-royals-with-roya-and-kate",
  urlSlug: "the-royals-with-roya-and-kate",
  title: "The Royals with Roya and Kate",
  img: {
    url: "https://www.thetimes.com/radio/wp-content/uploads/sites/2/2024/05/1714383804740-0b3e6df4b7d2d54fd2b266e07941d7e4.jpeg?w=240"
  },
  description: `A discerning look at royal life in the era of King Charles, presented by the royal editors of The Times and Sunday Times, Kate Mansey and Roya Nikkhah – two women with unmatched insight into the inner workings of the monarchy.
            
            It’s a time of challenges and change for the royal family, but also one of great hope and warmth, and a sense of the possibilities of this new Carolean age. There are personal challenges for the royals, but new links are being forged with “kind words”, as King Charles has said, between the public and the Palace.
            
            Join Roya and Kate every week for their reactions to the latest news on Charles and Camilla, William and Kate, Harry and Meghan and more.`,
  metaDescription: "The Royals with Roya and Kate is a podcast from The Times that goes beyond the headlines, exploring the new relationship between the press, the people and the palace. Listen every Friday for their reactions and insights on all the latest news on Charles and Camilla; William and Kate; Harry and Meghan and more.",
  externalLinks: {
    apple: "https://podcasts.apple.com/us/podcast/the-royals-with-roya-and-kate/id1745117658",
    spotify: "https://open.spotify.com/show/2I2pneMy3s0GxuQ7Alhl5e"
  },
  suggestedPodcasts: ["danny-in-the-valley", "past-imperfect"],
  section: "podcast",
  topics: "British royal family, Royal family news, Royal updates, Buckingham Palace, King Charles III, Royal editors of The Times and Sunday Times, Society & Culture, British monarchy"
}, {
  newsKitId: "stories-of-our-times",
  slug: "the-story",
  urlSlug: "the-story",
  description: `The flagship podcast from The Times and Sunday Times. One remarkable story, told in depth, each day.

            Hosts Manveen Rana and Luke Jones take you to the heart of the story you need to know with exclusive reports and investigations.

            Plus, each month, William Hague hosts an agenda-setting interview with a key newsmaker or thinker.
            
            Discover the story behind the story with world-class journalism from The Times and Sunday Times.
            
            The Story is available at the start of your day from Monday to Friday, with bonus ‘Inside the Newsroom’ episodes every Saturday for Times subscribers, available by connecting your subscription via Apple Podcasts.
            `,
  title: "The Story",
  img: {
    url: "https://www.thetimes.com/radio/wp-content/uploads/sites/2/2024/03/The-story-tile.jpg?w=240"
  },
  metaDescription: "The flagship podcast from The Times and Sunday Times, with Manveen Rana, Luke Jones and William Hague. One remarkable story, told in depth, each day.",
  externalLinks: {
    apple: "https://apple.co/2wIGCSm",
    spotify: "https://spoti.fi/3aPq3Tv",
    google: "https://podcasts.google.com/feed/aHR0cHM6Ly9yc3MuYWNhc3QuY29tL3N0b3JpZXNvZm91cnRpbWVz"
  },
  suggestedPodcasts: ["times-red-box"],
  section: "podcast",
  topics: "Daily news, Society & Culture, Investigative series, Investigative journalism, In-depth analysis of today’s biggest stories, Award-winning journalism, High-profile guests, Interview series"
}, {
  newsKitId: "thetimesbriefing",
  title: "Times news briefing",
  slug: "times-news-briefing",
  urlSlug: "times-news-briefing",
  img: {
    url: "https://www.thetimes.com/radio/wp-content/uploads/sites/2/2021/01/kesgieus-times_news_briefing_coral_2_.jpg?w=240"
  },
  metaDescription: "The latest news from The Times and Sunday Times, updated three times a day during the week and once a day at the weekend.",
  externalLinks: {
    apple: "https://podcasts.apple.com/gb/podcast/times-news-briefing/id1532386954",
    spotify: "https://open.spotify.com/show/2qZ0xpaBBwf3bTYhA10KZY",
    google: "https://podcasts.google.com/feed/aHR0cHM6Ly9yc3MuYWNhc3QuY29tL3RoZXRpbWVzYnJpZWZpbmc"
  },
  section: "podcast",
  topics: "Daily news, News roundup, News bulletin, UK news, International news, UK politics, News briefing, News updates, Headlines, Short-form"
}, {
  newsKitId: "daily-world-briefing",
  title: "World in 10",
  slug: "world-in-ten",
  urlSlug: "world-in-ten",
  img: {
    url: "https://www.thetimes.com/radio/wp-content/uploads/sites/2/2023/03/world-in-10-podcast.png?w=240"
  },
  description: "Your daily news briefing from The Times of London, delivered in 10 minutes - bringing you all the stories you need in world news, sports and entertainment.",
  metaDescription: "Your daily news briefing from The Times of London, delivered in 10 minutes - bringing you all the stories you need in world news, sports and entertainment.",
  externalLinks: {
    apple: "https://podcasts.apple.com/gb/podcast/times-daily-world-briefing/id1603820936",
    spotify: "https://open.spotify.com/show/5CHMS8JT6vz45eRq1cGY0t?si=8b30b145dfa944bf",
    google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5hY2FzdC5jb20vcHVibGljL3Nob3dzLzNiNDk3YmFmLTcxY2ItNGMyNy1hZTVhLWYxZTgwMTgyMjIyMQ/episode/NjIzYzVhY2MzNDQ0NzkwMDEyYzhhOGJh?sa=X&ved=0CAgQuIEEahcKEwiItrz4mN_2AhUAAAAAHQAAAAAQMQ"
  },
  section: "podcast",
  topics: "International news, Defense updates, War in Ukraine, Middle East news, 10 minute roundup, International affairs, International politics, Global news analysis, Political headlines"
}, {
  newsKitId: "how-to-win-an-election",
  title: "How to win an election",
  slug: "how-to-win-an-election",
  urlSlug: "how-to-win-an-election",
  img: {
    url: "https://assets.pippa.io/shows/6528fe7e3308660012b7db47/1698062200666-366ea7f0cbf838f1ef6e6757990b74bb.jpeg?w=240"
  },
  description: `How To Win An Election is an insider’s guide to the twists and turns of political campaigning and strategy. It brings together some of the most experienced political advisors of the past four decades - Daniel Finkelstein, Sally Morgan, and Polly Mackenzie - with Times Radio presenter Hugo Rifkind.

            Sally Morgan served as Blair's political secretary and then as director of political and government relations; she understands the challenge of leading the country when there are tensions with the Treasury, an unpredictable ally in the White House, and unrest on the backbenches.

            Nobody knows the highs and lows of the Conservative party better than Daniel Finkelstein, who has worked alongside Tory leaders and prime ministers from John Major onwards as they fought to modernise the party.
            
            And Polly Mackenzie is one of the smartest thinkers in Westminster, a policy expert who helped negotiate the Liberal Democrat-Conservative coalition and spent five years working alongside deputy prime minister Nick Clegg in Downing Street.
            
            They sit down with Hugo Rifkind for an intelligent, adversarial and witty political conversation every week.
            `,
  metaDescription: "How To Win An Election, a new podcast from the Times, provides witty and engaging discussion about the upcoming UK general election, with experienced perspectives from former Conservative, Labour, and Liberal Democrat spin doctors. Matt Chorley, Peter Mandelson, Daniel Finkelstein and Polly Mackenzie deliver entertaining conversation, insightful analysis and lively debates.",
  externalLinks: {
    apple: "https://podcasts.apple.com/us/podcast/how-to-win-an-election/id1712827143",
    spotify: "https://open.spotify.com/show/5MvOePrBn1ZcoE9z41a9vX"
  },
  section: "podcast",
  topics: "Political strategy, Political experts, UK politics, Westminster news, Election analysis, History, International electoral updates, Systems of government, Political commentary, Weekly news"
}, {
  newsKitId: "times-red-box",
  slug: "red-box",
  urlSlug: "red-box",
  description: `Hugo Rifkind unpacks the the politics of the day - and the stuff that's even more important - with the brightest brains from the Times and Sunday Times.You can listen to Hugo on DAB, smart speaker or app 10am-1pm Monday to Friday. If you like what you hear, then read more at http://www.thetimes.com/`,
  title: "Politics Unpacked",
  img: {
    url: "https://www.thetimes.com/radio/wp-content/uploads/sites/2/2024/09/politics-unpacked.jpg?w=240"
  },
  metaDescription: `Hugo Rifkind presents the Politics Unpacked podcast. Explore today's politics - and the issues that matter - with The Times and Sunday Times' brightest brains.`,
  externalLinks: {
    apple: "https://podcasts.apple.com/gb/podcast/politics-unpacked/id660638948",
    spotify: "https://open.spotify.com/show/2jD3tGHMz3Uc6hlfe55pKb"
  },
  suggestedPodcasts: ["stories-of-our-times"],
  section: "podcast",
  topics: "Political strategy, Political experts, UK politics, Westminster update, History, International electoral updates, Systems of government, Political commentary, Daily news, Politics, Behind the scenes with politicians"
}, {
  newsKitId: "off-air-with-jane-and-fi",
  slug: "off-air-with-jane-and-fi",
  urlSlug: "off-air-with-jane-and-fi",
  title: "Off Air with Jane & Fi",
  description: "Fresh from their new Times Radio show Jane Garvey and Fi Glover keep the mics on, grab a cuppa and say what they really think – unencumbered and off air. If you want to contact the show to ask a question and get involved in the conversation then please email janeandfi@times.radio",
  img: {
    url: "https://www.thetimes.com/radio/wp-content/uploads/sites/2/2025/02/1731423671115-23bc0205-ab31-44ad-91df-6561018f0446.jpeg?w=240"
  },
  metaDescription: "Fresh from their new Times Radio show Jane Garvey and Fi Glover keep the mics on, grab a cuppa and say what they really think – unencumbered and off air. If you want to contact the show to ask a question and get involved in the conversation then please email janeandfi@times.radio",
  externalLinks: {
    apple: "https://podcasts.apple.com/gb/podcast/off-air-with-jane-and-fi/id1648663774",
    spotify: "https://open.spotify.com/show/4fIthFOvAaPBVf5NWyz8Sl?si=0ce447c99be247cc"
  },
  suggestedPodcasts: ["no-idea", "stories-of-our-times"],
  section: "podcast",
  topics: "Society & Culture, Interviews, High-profile guests, Celebrity updates, British media news, Informal chat, Relaxed conversation, Cultural analysis, Witty, British humour, Cultural headlines, Chit-chat, Influential interviews, Radio hosts, Times Radio"
}, {
  newsKitId: "no-idea",
  slug: "giles-coren-has-no-idea",
  urlSlug: "giles-coren-has-no-idea",
  title: "Giles Coren has no idea",
  description: "Each week Giles Coren finds himself with no idea what to write about in his weekly column. Having read all the papers and found nothing of interest whatsoever, he takes a break and does the school run. That’s where his wife and fellow journalist Esther Walker comes in. Upon his return, Esther has half a dozen ideas she’s spotted ready to knock around with him over the kitchen table and a much needed pot of coffee.",
  img: {
    url: "https://thumborcdn.acast.com/JbA3UJJrEWgDgc5rjpIm0DzWlIE=/1500x1500/https://mediacdn.acast.com/assets/d5fbf33e-09a0-4a9a-9958-c7237344ed51/-ku89lio8-giles-coren_red_v2.jpg?w=240"
  },
  metaDescription: "Each week Giles Coren finds himself with no idea what to write about in his column. Luckily his wife Esther Walker is ready to knock around ideas with him",
  externalLinks: {
    apple: "https://podcasts.apple.com/gb/podcast/giles-coren-has-no-idea/id1470598116",
    spotify: "https://open.spotify.com/show/7i6YF2y5fMXv4tf2696fLB",
    google: "https://podcasts.google.com/feed/aHR0cHM6Ly9yc3MuYWNhc3QuY29tL25vaWRlYQ"
  },
  suggestedPodcasts: ["times-red-box"],
  section: "podcast",
  topics: "Society & Culture, Interviews, High-profile guests, Restaurant critic, British columnist, British media news, Informal chat, Relaxed conversation, Cultural analysis, Witty, British humour, Parenting"
}, {
  newsKitId: "planet-hope",
  title: "Planet Hope",
  titleKicker: "In partnership with Rolex",
  slug: "planet-hope",
  urlSlug: "planet-hope",
  img: {
    url: "https://www.thetimes.com/radio/wp-content/uploads/sites/2/2023/04/planet-hope-times-radio.jpeg?w=240"
  },
  description: `Each day we watch as rising temperatures, extreme weather and extinctions are accepted as the new normal. The list of bleak headlines feels endless. It’s no wonder hope is wavering. But all is not lost.
            
            In this podcast series, Adam Vaughan, Environment Editor for The Times, asks why our planet is changing so rapidly and meets leading experts from around the world who are trying to change the tide.
            
            This is Planet Hope, a podcast from The Times in partnership with Rolex and its Perpetual Planet Initiative. Rolex supports individuals and organisations who go above and beyond to safeguard and preserve our planet for the next generation.`,
  metaDescription: "In this podcast series, Adam Vaughan, Environment Editor for The Times, asks why our planet is changing so rapidly and meets leading experts from around the world who are trying to change the tide on climate change, global warming, deforestation, famine and other environmental issues. Planet Hope is a podcast from The Times in partnership with Rolex and its Perpetual Planet Initiative.",
  externalLinks: {
    apple: "https://podcasts.apple.com/gb/podcast/planet-hope/id1682204055",
    spotify: "https://open.spotify.com/show/0R80jDfykDYO2dt02qH7Nu?si=6SLq7KAGTQW8sphizB06vg&dd=1",
    google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5hY2FzdC5jb20vcHVibGljL3Nob3dzL3BsYW5ldC1ob3Bl"
  },
  section: "podcast",
  topics: "Climate change, Environmental policy, Interviews with climate activists, Interviews with climate ambassadors, Green policy, Hopeful, Earth Day, Wildlife photography, Climate journalism"
}, {
  newsKitId: "feel-better-about-money",
  title: "Feel Better About Money",
  slug: "feel-better-about-money",
  urlSlug: "feel-better-about-money",
  img: {
    url: "https://www.thetimes.com/radio/wp-content/uploads/sites/2/2024/11/Times_money.jpeg?w=240"
  },
  description: `A weekly podcast for those who want to understand money better. A podcast from The Times and Sunday Times about what is possible. 
        <p/> 
        The presenters, Holly Mead and Lucy Andrews, are experts in personal finance. Here, they talk about themselves, their friends, neighbourhoods, weddings, meals, and why it is often so very hard to save as much as you'd like!

        Each week, Holly and Lucy take a single subject such as pensions or tax to test out with tried and tested experts; many from within the Times Money team. Their aim is simple - to give you the insights and information you can use to make your money work better for you.
        `,
  metaDescription: "A money podcast to help understand personal finance better. From pensions to taxes and beyond, our experts' goal is simple: make your money work better for you.",
  externalLinks: {
    apple: "https://podcasts.apple.com/gb/podcast/feel-better-about-money/id1774276041",
    spotify: "https://open.spotify.com/show/0CFcYLuexJAfDBkDKHUbsN?si=8dff2b5b02804f77"
  },
  section: "podcast",
  topics: "Financial advice, Finance headlines, Staying on top of your finances, Financial health, Debt, Investing advice, Investment portfolio, City reporters, Financial planning, Facilitating conversations about money, Optimism, Bank of England, Budgeting, Budget"
}, {
  newsKitId: "times-the-game",
  title: "The Game",
  description: "The Game is the premier football podcast from The Times, with the finest writers previewing and reviewing all the action throughout the 2023/24 season. Twice a week, Gregor Robertson and Tom Clarke speak to the leading football writers from The Times and The Sunday Times, offering unparalleled analysis of the latest results and commentary on emerging issues. On Mondays, Alyson Rudd, Tom Roddy and Tony Cascarino review the weekend's action and on Thursdays Martin Samuel tackles the biggest issues of the week alongside the likes of Jonathan Northcroft and Ian Hawkey.",
  slug: "the-game",
  urlSlug: "the-game",
  img: {
    url: "https://www.thetimes.com/radio/wp-content/uploads/sites/2/2021/01/k9lgurmk-the-game-3000px.jpg?w=240"
  },
  metaDescription: "The Game is a football podcast from The Times, hosted by Gregor Robertson and Tom Clarke. Join them for insightful discussions, expert analysis, and the latest updates in the world of football. A must-listen for football enthusiasts and fans of quality sports journalism.",
  externalLinks: {
    apple: "https://podcasts.apple.com/gb/podcast/the-game-football-podcast/id191105605",
    spotify: "https://open.spotify.com/show/5DtlPY1ctacnQeuZoYLzx5",
    google: "https://podcasts.google.com/feed/aHR0cHM6Ly9yc3MuYWNhc3QuY29tL3RpbWVzdGhlZ2FtZQ"
  },
  suggestedPodcasts: ["the-ruck", "stories-of-our-times"],
  section: "podcast",
  topics: "UK football, Premier League, English Football League, International football, Football analysis, European Football, Champions’ League, Women’s Super League, WSL, Post-match analysis, Football pundit, Soccer, Football Commentary, Football stars, Football, Football player"
}, {
  newsKitId: "the-ruck",
  title: "The Ruck",
  slug: "the-ruck",
  urlSlug: "the-ruck",
  img: {
    url: "https://www.thetimes.com/radio/wp-content/uploads/sites/2/2021/01/k9lgyq78-the-ruck-3000px.jpg?w=240"
  },
  metaDescription: "The Ruck rugby podcast provides forthright analysis, reports and big name interviews throughout the season. Join Lawrence Dallaglio and our rugby correspondents for the latest insights",
  externalLinks: {
    apple: "https://podcasts.apple.com/gb/podcast/the-ruck-rugby-podcast/id1201302391",
    spotify: "https://open.spotify.com/show/3huSLtLd0smXDxcFuGtyYm",
    google: "https://podcasts.google.com/feed/aHR0cHM6Ly9yc3MuYWNhc3QuY29tL3RoZXJ1Y2s"
  },
  suggestedPodcasts: ["times-the-game", "stories-of-our-times"],
  section: "podcast",
  topics: "Rugby, The Super League, Rugby commentary, Rugby pundits, Rugby Union, Rugby analysis, International Rugby, Rugby World Cup, Six Nations, First XV, Sports commentary, British sport, Rugby player, Green, Ball"
}, {
  newsKitId: "danny-in-the-valley",
  slug: "danny-in-the-valley",
  urlSlug: "danny-in-the-valley",
  title: "The Times Tech Podcast",
  img: {
    url: "https://www.thetimes.com/radio/wp-content/uploads/sites/2/2024/10/1728038865168-4d111bb9-300e-4efb-b485-601b498a043e.jpeg?w=240"
  },
  description: `As The Sunday Times’ West Coast Correspondent, Danny Fortson has witnessed the technological whirlwind coming from Silicon Valley first hand. The Times' Technology Business Editor Katie Prescott has reported on how digital technology is transforming businesses and society around the world. 
        <p/> 
        Now, 'Danny in the Valley' meets 'Katie in the City', with a podcast presented from San Francisco and London.
        <p/>
        Each week sees a fresh interview with pioneers in tech, from the brightest start-ups to the tech giants, as Katie and Danny chronicle the AI revolution.`,
  metaDescription: "Danny Fortson and Katie Prescott host The Times Tech Podcast. Follow the latest tech news, the AI revolution and find weekly interviews with the names to know.",
  externalLinks: {
    apple: "https://podcasts.apple.com/gb/podcast/the-times-tech-podcast/id1233991021",
    spotify: "https://open.spotify.com/show/3ygV6nO47HOCuM3fQq3Cap?si=98190f6cb7064bd7",
    google: "https://podcasts.google.com/feed/aHR0cHM6Ly9yc3MuYWNhc3QuY29tL2Rhbm55aW50aGV2YWxsZXk"
  },
  suggestedPodcasts: ["stories-of-our-times"],
  section: "podcast",
  topics: "Silicon Valley updates, Big Tech, Artificial Intelligence, Tech innovation, Start up, Tech funding, Tech updates, Tech news, Stories from Silicon Valley, Venture capitalists, UK tech updates, International tech summits, Times Tech Summit, Tech experts"
}, {
  newsKitId: "past-imperfect",
  slug: "what-i-wish-id-known",
  urlSlug: "what-i-wish-id-known",
  title: "What I Wish I'd Known",
  img: {
    url: "https://www.thetimes.com/radio/wp-content/uploads/sites/2/2023/06/What-I-wish_TILE.png?w=240"
  },
  metaDescription: "\"What I Wish I'd Known\" is a podcast from The Times hosted by Alice Thomson and Rachel Sylvester, where they interview celebrities, sporting icons and famous politicians about their more difficult starts in life and how it drove them to where they are today. This podcast was formerly called 'Past Imperfect'.",
  externalLinks: {
    apple: "https://podcasts.apple.com/gb/podcast/what-i-wish-id-known/id1656729776",
    spotify: "https://open.spotify.com/show/1OS9pYQ8mSSAi0lqKkbROL",
    google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5hY2FzdC5jb20vcHVibGljL3Nob3dzLzZiNDcwM2M3LTYyODQtNGQyZS04ZmY1LTlmZWFjZGFjNjYyYQ"
  },
  suggestedPodcasts: ["times-red-box", "stories-of-our-times"],
  section: "podcast",
  topics: "Interview, Celebrity interview, Society, Culture, Pop culture, Childhood stories, Sporting heroes, Sports, Business, New thinking, Politics, Political figures, British icon, Lifetime achievement, Current affairs, Legacy, Discussion, Informal, Relaxed conversation, Advice, Younger self, Guidance, Self-help"
}, {
  newsKitId: "secrets-of-side-hustle",
  slug: "secrets-of-the-side-hustle",
  urlSlug: "secrets-of-the-side-hustle",
  title: "Secrets of the side hustle",
  img: {
    url: "https://www.thetimes.com/radio/wp-content/uploads/sites/2/2024/05/1716219572670-cbc9b61cf6c6176d82ee07f00256d0bb.jpeg?w=240"
  },
  metaDescription: "The Secrets of the side hustle podcast leads a conversation with inspiring female founders about their career stories and how to start a business from scratch",
  externalLinks: {
    apple: "https://podcasts.apple.com/gb/podcast/secrets-of-the-side-hustle/id1462763400",
    spotify: "https://open.spotify.com/show/5de92OgxlhOSS35guC0K0c",
    google: "https://podcasts.google.com/feed/aHR0cHM6Ly9yc3MuYWNhc3QuY29tL3NlY3JldHNvZnRoZXNpZGVodXN0bGU"
  },
  suggestedPodcasts: ["danny-in-the-valley", "past-imperfect"],
  section: "podcast",
  topics: "Female founders, Female empowerment, Women in Business, Women in Tech, International Women’s Day, Business tips, Entrepreneurship, Side hustle, Interview, Business interviews, Business from scratch, Advice, Investing, Money Management, Money Mentorship, Industry News, Tech, Fitness, CEO, Business"
}, {
  newsKitId: "your-history",
  slug: "your-history",
  urlSlug: "your-history",
  title: "Your History",
  img: {
    url: "https://www.thetimes.com/radio/wp-content/uploads/sites/2/2023/11/1699453633684-ef075e8e46f94710b8ea36c9fcfa956c.jpeg?w=240"
  },
  description: `
        The life stories of the people who have shaped our own, told through the obituaries pages of The Times. 
        As Nelson Mandela noted, “you can't really be proud of yourself if you don't know your history”. 
        Anna Temkin, Deputy Obituaries Editor at The Times, introduces the endlessly fascinating stories that tell us about how we got to this point in history - the stories of a lifetime well lived.

        The Times has published daily obituaries for over a century. 
        Now, each week Anna builds on that legacy and explores that rich archive, joined by voices from across the paper to analyse the lives which have enriched and informed today's society.`,
  metaDescription: "Your History is a new podcast from The Times. Anna Temkin, Deputy Obituaries Editor,  tells life stories from this week's Times' obituaries, exposing the newspaper's rich archive.",
  externalLinks: {
    apple: "https://podcasts.apple.com/gb/podcast/your-history/id1747936428",
    spotify: "https://open.spotify.com/show/4A4EmiAbO6NWR5WkNnfrgn"
  },
  suggestedPodcasts: ["times-red-box", "stories-of-our-times"],
  section: "podcast",
  topics: "Newspaper obituaries, Times obituaries, Life stories, Biographical information, UK political heavyweights, Celebrity, Lifetime achievement, Influential historical figures, History, Historical analysis, Current affairs, Legacy, From the archives, Archival"
}, {
  newsKitId: "wine-times",
  title: "Wine Times",
  slug: "wine-times",
  urlSlug: "wine-times",
  description: `Broadcasting legend Anneka Rice joins Sunday Times wine columnist Will Lyons to share their love of wine and travel with a host of special guests. They’ll be pulling the cork and twisting the screw cap on some of their favourite bottles as they embark on a free-flowing series through the many minds, lives and worlds inspired by the wine route. So pull up a chair, pour yourself a glass and sit back for a grape-inspired podcast full of laughter, lively conversation and interesting wine. 
        <p/> 
        Wine Times is brought to you in association with the Sunday Times Wine Club.`,
  metaDescription: "Broadcasting legend Anneka Rice joins Sunday Times wine columnist Will Lyons to share their love of wine and travel with a host of special guests. They’ll be pulling the cork and twisting the screw cap on some of their favourite bottles as they embark on a free-flowing series through the many minds, lives and worlds inspired by the wine route. So pull up a chair, pour yourself a glass and sit back for a grape-inspired podcast full of laughter, lively conversation and interesting wine. Wine Times is brought to you in association with the Sunday Times Wine Club.",
  externalLinks: {
    apple: "https://podcasts.apple.com/gb/podcast/wine-times/id1590177608",
    spotify: "https://open.spotify.com/show/7FRiNTbw72nd2ZK4iY7Axv",
    google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5hY2FzdC5jb20vcHVibGljL3Nob3dzLzMxNzg5ZTAyLWVmNmMtNGIxNS1hNzM3LTU0NjJlNjZjMjcwNw?sa=X&ved=0CAMQ9sEGahcKEwjg05m-md_2AhUAAAAAHQAAAAAQQw"
  },
  section: "podcast",
  topics: "Wine writer, Wine critic, Wine, Wine Pairings, Interview, Celebrity interview, Travel stories, Recommendations, Special guests, Comedy, Light-hearted, The Sunday Times, Wine club, Interesting, Lively, Critic, Relaxed"
}];

/***/ }),

/***/ "./src/podcast/index.js":
/*!******************************!*\
  !*** ./src/podcast/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/podcast/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/podcast/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/podcast/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/podcast/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/podcast/save.js":
/*!*****************************!*\
  !*** ./src/podcast/save.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */

function save() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save(),
    children: 'Podcast – hello from the saved content!'
  });
}

/***/ }),

/***/ "./src/podcast/style.scss":
/*!********************************!*\
  !*** ./src/podcast/style.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"podcast/index": 0,
/******/ 			"podcast/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkpodcast"] = globalThis["webpackChunkpodcast"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["podcast/style-index"], () => (__webpack_require__("./src/podcast/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map