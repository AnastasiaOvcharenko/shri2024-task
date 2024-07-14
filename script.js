// import React from "react";
function _extends() {
  return (_extends = Object.assign
    ? Object.assign.bind()
    : function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = arguments[t];
          for (var i in a) ({}).hasOwnProperty.call(a, i) && (e[i] = a[i]);
        }
        return e;
      }).apply(null, arguments);
}
function _toConsumableArray(e) {
  return (
    _arrayWithoutHoles(e) ||
    _iterableToArray(e) ||
    _unsupportedIterableToArray(e) ||
    _nonIterableSpread()
  );
}
function _nonIterableSpread() {
  throw TypeError(
    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}
function _iterableToArray(e) {
  if (
    ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
    null != e["@@iterator"]
  )
    return Array.from(e);
}
function _arrayWithoutHoles(e) {
  if (Array.isArray(e)) return _arrayLikeToArray(e);
}
function _slicedToArray(e, t) {
  return (
    _arrayWithHoles(e) ||
    _iterableToArrayLimit(e, t) ||
    _unsupportedIterableToArray(e, t) ||
    _nonIterableRest()
  );
}
function _nonIterableRest() {
  throw TypeError(
    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}
function _unsupportedIterableToArray(e, t) {
  if (e) {
    if ("string" == typeof e) return _arrayLikeToArray(e, t);
    var a = {}.toString.call(e).slice(8, -1);
    return (
      "Object" === a && e.constructor && (a = e.constructor.name),
      "Map" === a || "Set" === a
        ? Array.from(e)
        : "Arguments" === a ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
        ? _arrayLikeToArray(e, t)
        : void 0
    );
  }
}
function _arrayLikeToArray(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var a = 0, i = Array(t); a < t; a++) i[a] = e[a];
  return i;
}
function _iterableToArrayLimit(e, t) {
  var a =
    null == e
      ? null
      : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
  if (null != a) {
    var i,
      l,
      r,
      n,
      c = [],
      o = !0,
      s = !1;
    try {
      if (((r = (a = a.call(e)).next), 0 === t)) {
        if (Object(a) !== a) return;
        o = !1;
      } else
        for (
          ;
          !(o = (i = r.call(a)).done) && (c.push(i.value), c.length !== t);
          o = !0
        );
    } catch (e) {
      (s = !0), (l = e);
    } finally {
      try {
        if (!o && null != a.return && ((n = a.return()), Object(n) !== n))
          return;
      } finally {
        if (s) throw l;
      }
    }
    return c;
  }
}
function _arrayWithHoles(e) {
  if (Array.isArray(e)) return e;
}
function Header() {
  var e = _slicedToArray(React.useState(!1), 2),
    t = e[0],
    a = e[1],
    i = _slicedToArray(React.useState(!1), 2),
    l = i[0],
    r = i[1];
  return React.createElement(
    "header",
    { className: "header" },
    React.createElement("a", {
      href: "/",
      className: "header__logo",
      "aria-label": "Яндекс.Дом",
    }),
    React.createElement(
      "button",
      {
        className: "header__menu",
        "aria-expanded": t ? "true" : "false",
        onClick: function () {
          l || r(!0), a(!t);
        },
      },
      React.createElement(
        "span",
        { className: "header__menu-text a11y-hidden" },
        t ? "Закрыть меню" : "Открыть меню"
      )
    ),
    React.createElement(
      "ul",
      {
        className:
          "header__links" +
          (t ? " header__links_opened" : "") +
          (l ? " header__links-toggled" : ""),
      },
      React.createElement(
        "li",
        { className: "header__item" },
        React.createElement(
          "a",
          {
            className: "header__link header__link_current",
            href: "/",
            "aria-current": "page",
          },
          "Сводка"
        )
      ),
      React.createElement(
        "li",
        { className: "header__item" },
        React.createElement(
          "a",
          { className: "header__link", href: "/devices" },
          "Устройства"
        )
      ),
      React.createElement(
        "li",
        { className: "header__item" },
        React.createElement(
          "a",
          { className: "header__link", href: "/scripts" },
          "Сценарии"
        )
      )
    )
  );
}
function Event(e) {
  var t = React.useRef(),
    a = e.onSize;
  return (
    React.useEffect(function () {
      var e = t.current.offsetWidth,
        i = t.current.offsetHeight;
      a && a({ width: e, height: i });
    }),
    React.createElement(
      "li",
      { ref: t, className: "event" + (e.slim ? " event_slim" : "") },
      React.createElement(
        "button",
        { className: "event__button" },
        React.createElement("span", {
          className: "event__icon event__icon_".concat(e.icon),
          role: "img",
          "aria-label": e.iconLabel,
        }),
        React.createElement("h4", { className: "event__title" }, e.title),
        e.subtitle &&
          React.createElement(
            "span",
            { className: "event__subtitle" },
            e.subtitle
          )
      )
    )
  );
}
for (
  var TABS = {
      all: {
        title: "Все",
        items: [
          {
            icon: "light2",
            iconLabel: "Освещение",
            title: "Xiaomi Yeelight LED Smart Bulb",
            subtitle: "Включено",
          },
          {
            icon: "light",
            iconLabel: "Освещение",
            title: "D-Link Omna 180 Cam",
            subtitle: "Включится в 17:00",
          },
          {
            icon: "temp",
            iconLabel: "Температура",
            title: "Elgato Eve Degree Connected",
            subtitle: "Выключено до 17:00",
          },
          {
            icon: "light",
            iconLabel: "Освещение",
            title: "LIFX Mini Day & Dusk A60 E27",
            subtitle: "Включится в 17:00",
          },
          {
            icon: "light2",
            iconLabel: "Освещение",
            title: "Xiaomi Mi Air Purifier 2S",
            subtitle: "Включено",
          },
          {
            icon: "light",
            iconLabel: "Освещение",
            title: "Philips Zhirui",
            subtitle: "Включено",
          },
          {
            icon: "light",
            iconLabel: "Освещение",
            title: "Philips Zhirui",
            subtitle: "Включено",
          },
          {
            icon: "light2",
            iconLabel: "Освещение",
            title: "Xiaomi Mi Air Purifier 2S",
            subtitle: "Включено",
          },
        ],
      },
      kitchen: {
        title: "Кухня",
        items: [
          {
            icon: "light2",
            iconLabel: "Освещение",
            title: "Xiaomi Yeelight LED Smart Bulb",
            subtitle: "Включено",
          },
          {
            icon: "temp",
            iconLabel: "Температура",
            title: "Elgato Eve Degree Connected",
            subtitle: "Выключено до 17:00",
          },
        ],
      },
      hall: {
        title: "Зал",
        items: [
          {
            icon: "light",
            iconLabel: "Освещение",
            title: "Philips Zhirui",
            subtitle: "Выключено",
          },
          {
            icon: "light2",
            iconLabel: "Освещение",
            title: "Xiaomi Mi Air Purifier 2S",
            subtitle: "Выключено",
          },
        ],
      },
      lights: {
        title: "Лампочки",
        items: [
          {
            icon: "light",
            iconLabel: "Освещение",
            title: "D-Link Omna 180 Cam",
            subtitle: "Включится в 17:00",
          },
          {
            icon: "light",
            iconLabel: "Освещение",
            title: "LIFX Mini Day & Dusk A60 E27",
            subtitle: "Включится в 17:00",
          },
          {
            icon: "light2",
            iconLabel: "Освещение",
            title: "Xiaomi Mi Air Purifier 2S",
            subtitle: "Включено",
          },
          {
            icon: "light",
            iconLabel: "Освещение",
            title: "Philips Zhirui",
            subtitle: "Включено",
          },
        ],
      },
      cameras: {
        title: "Камеры",
        items: [
          {
            icon: "light2",
            iconLabel: "Освещение",
            title: "Xiaomi Mi Air Purifier 2S",
            subtitle: "Включено",
          },
        ],
      },
    },
    i = 0;
  i < 6;
  ++i
)
  TABS.all.items = [].concat(
    _toConsumableArray(TABS.all.items),
    _toConsumableArray(TABS.all.items)
  );
var TABS_KEYS = Object.keys(TABS);
function Main() {
  var e = React.useRef(),
    t = React.useRef(!1),
    a = _slicedToArray(React.useState(""), 2),
    i = a[0],
    l = a[1],
    r = _slicedToArray(React.useState(!1), 2),
    n = r[0],
    c = r[1];
  React.useEffect(function () {
    i ||
      t.current ||
      ((t.current = !0),
      l(new URLSearchParams(location.search).get("tab") || "all"));
  });
  var o = [],
    s = function (e) {
      o = [].concat(_toConsumableArray(o), [e]);
    };
  React.useEffect(function () {
    var t = o.reduce(function (e, t) {
      return e + t.width;
    }, 0);
    o.reduce(function (e, t) {
      return e + t.height;
    }, 0);
    var a = t > e.current.offsetWidth;
    a !== n && c(a);
  });
  return React.createElement(
    "main",
    { className: "main" },
    React.createElement(
      "section",
      { className: "section main__general" },
      React.createElement(
        "h2",
        {
          className: "section__title section__title-header section__main-title",
        },
        "Главное"
      ),
      React.createElement(
        "div",
        { className: "hero-dashboard" },
        React.createElement(
          "div",
          { className: "hero-dashboard__primary" },
          React.createElement(
            "h3",
            { className: "hero-dashboard__title" },
            "Привет, Геннадий!"
          ),
          React.createElement(
            "p",
            { className: "hero-dashboard__subtitle" },
            "Двери и окна закрыты, сигнализация включена."
          ),
          React.createElement(
            "ul",
            { className: "hero-dashboard__info" },
            React.createElement(
              "li",
              { className: "hero-dashboard__item" },
              React.createElement(
                "div",
                { className: "hero-dashboard__item-title" },
                "Дома"
              ),
              React.createElement(
                "div",
                { className: "hero-dashboard__item-details" },
                "+23",
                React.createElement("span", { className: "a11y-hidden" }, "°")
              )
            ),
            React.createElement(
              "li",
              { className: "hero-dashboard__item" },
              React.createElement(
                "div",
                { className: "hero-dashboard__item-title" },
                "За окном"
              ),
              React.createElement(
                "div",
                { className: "hero-dashboard__item-details" },
                "+19",
                React.createElement("span", { className: "a11y-hidden" }, "°"),
                React.createElement("div", {
                  className: "hero-dashboard__icon hero-dashboard__icon_rain",
                  role: "img",
                  "aria-label": "Дождь",
                })
              )
            )
          )
        ),
        React.createElement(
          "ul",
          { className: "hero-dashboard__schedule" },
          React.createElement(Event, {
            icon: "temp",
            iconLabel: "Температура",
            title: "Philips Cooler",
            subtitle: "Начнет охлаждать в 16:30",
          }),
          React.createElement(Event, {
            icon: "light",
            iconLabel: "Освещение",
            title: "Xiaomi Yeelight LED Smart Bulb",
            subtitle: "Включится в 17:00",
          }),
          React.createElement(Event, {
            icon: "light",
            iconLabel: "Освещение",
            title: "Xiaomi Yeelight LED Smart Bulb",
            subtitle: "Включится в 17:00",
          })
        )
      )
    ),
    React.createElement(
      "section",
      { className: "section main__scripts" },
      React.createElement(
        "h2",
        { className: "section__title section__title-header" },
        "Избранные сценарии"
      ),
      React.createElement(
        "ul",
        { className: "event-grid" },
        React.createElement(Event, {
          slim: !0,
          icon: "light2",
          iconLabel: "Освещение",
          title: "Выключить весь свет в доме и во дворе",
        }),
        React.createElement(Event, {
          slim: !0,
          icon: "schedule",
          iconLabel: "Расписание",
          title: "Я ухожу",
        }),
        React.createElement(Event, {
          slim: !0,
          icon: "light2",
          iconLabel: "Освещение",
          title: "Включить свет в коридоре",
        }),
        React.createElement(Event, {
          slim: !0,
          icon: "temp2",
          iconLabel: "Температура",
          title: "Набрать горячую ванну",
          subtitle: "Начнётся в 18:00",
        }),
        React.createElement(Event, {
          slim: !0,
          icon: "temp2",
          iconLabel: "Температура",
          title: "Сделать пол тёплым во всей квартире",
        })
      )
    ),
    React.createElement(
      "section",
      { className: "section main__devices" },
      React.createElement(
        "div",
        { className: "section__title" },
        React.createElement(
          "h2",
          { className: "section__title-header" },
          "Избранные устройства"
        ),
        React.createElement(
          "select",
          {
            className: "section__select",
            defaultValue: "all",
            onInput: function (e) {
              l(e.target.value);
            },
          },
          TABS_KEYS.map(function (e) {
            return React.createElement(
              "option",
              { key: e, value: e },
              TABS[e].title
            );
          })
        ),
        React.createElement(
          "ul",
          { role: "tablist", className: "section__tabs" },
          TABS_KEYS.map(function (e) {
            return React.createElement(
              "li",
              {
                key: e,
                role: "tab",
                "aria-selected": e === i ? "true" : "false",
                tabIndex: e === i ? "0" : void 0,
                className:
                  "section__tab" + (e === i ? " section__tab_active" : ""),
                id: "tab_".concat(e),
                "aria-controls": "panel_".concat(e),
                onClick: function () {
                  return l(e);
                },
              },
              TABS[e].title
            );
          })
        )
      ),
      React.createElement(
        "div",
        { className: "section__panel-wrapper", ref: e },
        TABS_KEYS.map(function (e) {
          return React.createElement(
            "div",
            {
              key: e,
              role: "tabpanel",
              className:
                "section__panel" + (e === i ? "" : " section__panel_hidden"),
              "aria-hidden": e === i ? "false" : "true",
              id: "panel_".concat(e),
              "aria-labelledby": "tab_".concat(e),
            },
            React.createElement(
              "ul",
              { className: "section__panel-list" },
              TABS[e].items.map(function (e, t) {
                return React.createElement(
                  Event,
                  _extends({ key: t }, e, { onSize: s })
                );
              })
            )
          );
        }),
        n &&
          React.createElement("div", {
            className: "section__arrow",
            onClick: function () {
              var t = e.current.querySelector(
                ".section__panel:not(.section__panel_hidden)"
              );
              t && t.scrollTo({ left: t.scrollLeft + 400, behavior: "smooth" });
            },
          })
      )
    )
  );
}
setTimeout(function () {
  ReactDOM.createRoot(document.getElementById("app")).render(
    React.createElement(
      React.Fragment,
      null,
      React.createElement(Header, null),
      React.createElement(Main, null)
    )
  );
}, 100);
