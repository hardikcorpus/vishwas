/* @ds-bundle: {"format":4,"namespace":"VishwasEnterprisesDesignSystem_30bbd9","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Accordion","sourcePath":"components/display/Accordion.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"ProductCard","sourcePath":"components/display/ProductCard.jsx"},{"name":"Stat","sourcePath":"components/display/Stat.jsx"},{"name":"Tabs","sourcePath":"components/display/Tabs.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"dcdeaaa118a4","components/core/Button.jsx":"71ea486b6cd0","components/core/Eyebrow.jsx":"af33b889c14d","components/core/Icon.jsx":"9d4ab4992ab7","components/core/IconButton.jsx":"eaf04f076cd0","components/core/Tag.jsx":"d6287a484c19","components/display/Accordion.jsx":"cd4e0f53d618","components/display/Card.jsx":"2b87e77150f7","components/display/ProductCard.jsx":"442ef054ae00","components/display/Stat.jsx":"9f032025c31c","components/display/Tabs.jsx":"3780e4e8c2d0","components/feedback/Dialog.jsx":"7e75b9d45d3f","components/feedback/Toast.jsx":"485d10844357","components/feedback/Tooltip.jsx":"bb8b2741b6a5","components/forms/Checkbox.jsx":"3bddb24883a3","components/forms/Input.jsx":"454027118619","components/forms/Radio.jsx":"480ca0647d1a","components/forms/Select.jsx":"ab9f34f3f0d3","components/forms/Switch.jsx":"9ceebf2975e8","ui_kits/website/CatalogScreen.jsx":"eb64941b0020","ui_kits/website/ContactScreen.jsx":"80f612fe8fee","ui_kits/website/Footer.jsx":"641ac6aecc5d","ui_kits/website/Header.jsx":"257099f5880e","ui_kits/website/HomeScreen.jsx":"a07ba4712e29","ui_kits/website/ProductScreen.jsx":"226e11e88296","ui_kits/website/data.js":"0dcad32b4196"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.VishwasEnterprisesDesignSystem_30bbd9 = window.VishwasEnterprisesDesignSystem_30bbd9 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
const T = {
  neutral: ['var(--neutral-100)', 'var(--neutral-700)'],
  brand: ['var(--teal-100)', 'var(--teal-800)'],
  success: ['var(--status-success-bg)', 'var(--status-success)'],
  warning: ['var(--status-warning-bg)', 'var(--status-warning)'],
  danger: ['var(--status-danger-bg)', 'var(--status-danger)'],
  info: ['var(--status-info-bg)', 'var(--status-info)'],
  accent: ['var(--brass-100)', 'var(--brass-600)'],
  dark: ['var(--teal-900)', 'var(--mint-300)']
};
function Badge({
  tone = 'neutral',
  dot = false,
  children,
  style
}) {
  const [bg, fg] = T[tone] || T.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 22,
      padding: '0 8px',
      background: bg,
      color: fg,
      borderRadius: 'var(--radius-1)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-micro)',
      fontWeight: 500,
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      background: fg,
      borderRadius: '50%'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function Eyebrow({
  index,
  tone = 'brand',
  children,
  style
}) {
  const c = {
    brand: 'var(--text-brand)',
    muted: 'var(--text-muted)',
    dark: 'var(--teal-300)',
    accent: 'var(--text-accent)'
  }[tone] || 'var(--text-brand)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-label)',
      fontWeight: 500,
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: c,
      lineHeight: 1.2,
      ...style
    }
  }, index != null && /*#__PURE__*/React.createElement("span", {
    style: {
      color: tone === 'dark' ? 'var(--mint-300)' : 'var(--text-accent)'
    }
  }, index), index != null && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 1,
      background: 'currentColor',
      opacity: .5
    }
  }), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
const CDN = 'https://unpkg.com/lucide-static@0.460.0/icons/';
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  style,
  title
}) {
  const url = 'url(' + CDN + name + '.svg)';
  return /*#__PURE__*/React.createElement("span", {
    role: title ? 'img' : undefined,
    "aria-label": title,
    "aria-hidden": title ? undefined : true,
    style: {
      display: 'inline-block',
      flex: 'none',
      width: size,
      height: size,
      backgroundColor: color,
      WebkitMaskImage: url,
      maskImage: url,
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const SIZES = {
  s: {
    h: 'var(--control-h-s)',
    px: 12,
    fs: 'var(--fs-body-s)',
    ic: 16
  },
  m: {
    h: 'var(--control-h-m)',
    px: 16,
    fs: 'var(--fs-body-s)',
    ic: 16
  },
  l: {
    h: 'var(--control-h-l)',
    px: 22,
    fs: 'var(--fs-body)',
    ic: 18
  }
};
function palette(v, st) {
  const h = st.hover,
    p = st.press;
  switch (v) {
    case 'secondary':
      return {
        bg: p ? 'var(--teal-200)' : h ? 'var(--teal-100)' : 'var(--neutral-0)',
        fg: 'var(--teal-800)',
        bd: 'var(--teal-600)'
      };
    case 'ghost':
      return {
        bg: p ? 'var(--teal-100)' : h ? 'var(--teal-50)' : 'transparent',
        fg: 'var(--teal-700)',
        bd: 'transparent'
      };
    case 'dark':
      return {
        bg: p ? 'var(--teal-950)' : h ? 'var(--teal-950)' : 'var(--teal-900)',
        fg: 'var(--neutral-0)',
        bd: 'transparent'
      };
    case 'mint':
      return {
        bg: p ? 'var(--teal-200)' : h ? 'var(--mint-200)' : 'var(--mint-300)',
        fg: 'var(--teal-950)',
        bd: 'transparent'
      };
    case 'outline-dark':
      return {
        bg: h ? 'rgba(194,234,228,.08)' : 'transparent',
        fg: 'var(--teal-50)',
        bd: 'rgba(194,234,228,.45)'
      };
    case 'danger':
      return {
        bg: p ? '#8E2420' : h ? '#9E2A24' : 'var(--red-600)',
        fg: '#fff',
        bd: 'transparent'
      };
    default:
      return {
        bg: p ? 'var(--surface-brand-press)' : h ? 'var(--surface-brand-hover)' : 'var(--surface-brand)',
        fg: 'var(--text-on-brand)',
        bd: 'transparent'
      };
  }
}
function Button({
  variant = 'primary',
  size = 'm',
  iconLeft,
  iconRight,
  disabled = false,
  fullWidth = false,
  onClick,
  type = 'button',
  children,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const s = SIZES[size] || SIZES.m;
  const c = palette(variant, {
    hover: hover && !disabled,
    press: press && !disabled
  });
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      height: s.h,
      padding: '0 ' + s.px + 'px',
      width: fullWidth ? '100%' : undefined,
      fontFamily: 'var(--font-sans)',
      fontSize: s.fs,
      fontWeight: 'var(--weight-medium)',
      letterSpacing: '-0.005em',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      background: c.bg,
      color: c.fg,
      border: '1px solid ' + c.bd,
      borderRadius: 'var(--radius-control)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .4 : 1,
      boxShadow: focus ? 'var(--shadow-focus)' : 'none',
      transition: 'background var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast)',
      outline: 'none',
      ...style
    }
  }, iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: s.ic
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.ic,
    style: {
      transform: hover && !disabled && iconRight === 'arrow-up-right' ? 'translate(1px,-1px)' : 'none',
      transition: 'transform var(--dur-fast) var(--ease-standard)'
    }
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function IconButton({
  icon,
  label,
  variant = 'outline',
  size = 'm',
  onClick,
  disabled = false,
  style
}) {
  const [h, setH] = React.useState(false);
  const d = {
    s: 32,
    m: 40,
    l: 48
  }[size] || 40;
  const v = {
    outline: {
      bg: h ? 'var(--teal-50)' : 'var(--neutral-0)',
      fg: 'var(--teal-800)',
      bd: 'var(--border-default)'
    },
    solid: {
      bg: h ? 'var(--teal-700)' : 'var(--teal-600)',
      fg: '#fff',
      bd: 'transparent'
    },
    ghost: {
      bg: h ? 'var(--neutral-100)' : 'transparent',
      fg: 'var(--text-strong)',
      bd: 'transparent'
    },
    dark: {
      bg: h ? 'var(--teal-950)' : 'var(--teal-900)',
      fg: '#fff',
      bd: 'transparent'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": label,
    title: label,
    onClick: onClick,
    disabled: disabled,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      width: d,
      height: d,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: v.bg,
      color: v.fg,
      border: '1px solid ' + v.bd,
      borderRadius: 'var(--radius-control)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .4 : 1,
      transition: 'background var(--dur-fast)',
      padding: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 's' ? 16 : 18
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  selected = false,
  onClick,
  onRemove,
  children,
  style
}) {
  const [h, setH] = React.useState(false);
  const interactive = !!onClick;
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'inline-flex',
      flex: 'none',
      whiteSpace: 'nowrap',
      alignItems: 'center',
      gap: 6,
      height: 30,
      padding: onRemove ? '0 6px 0 12px' : '0 12px',
      border: '1px solid ' + (selected ? 'var(--teal-600)' : h && interactive ? 'var(--neutral-500)' : 'var(--border-default)'),
      background: selected ? 'var(--teal-600)' : 'var(--neutral-0)',
      color: selected ? '#fff' : 'var(--text-strong)',
      borderRadius: 'var(--radius-1)',
      fontSize: 'var(--fs-caption)',
      fontWeight: 500,
      cursor: interactive ? 'pointer' : 'default',
      userSelect: 'none',
      transition: 'all var(--dur-fast)',
      ...style
    }
  }, children, onRemove && /*#__PURE__*/React.createElement("span", {
    role: "button",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      display: 'inline-flex',
      cursor: 'pointer',
      opacity: .7
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 14
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/display/Accordion.jsx
try { (() => {
function Accordion({
  items = [],
  defaultOpen = 0,
  allowMultiple = false
}) {
  const [open, setOpen] = React.useState(defaultOpen == null ? [] : [defaultOpen]);
  const t = i => setOpen(o => o.includes(i) ? o.filter(x => x !== i) : allowMultiple ? [...o, i] : [i]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-subtle)'
    }
  }, items.map((it, i) => {
    const on = open.includes(i);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => t(i),
      "aria-expanded": on,
      style: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 16,
        padding: '20px 0',
        background: 'none',
        border: 0,
        cursor: 'pointer',
        textAlign: 'left',
        font: 'inherit',
        fontSize: 'var(--fs-h4)',
        color: 'var(--text-strong)',
        letterSpacing: '-0.01em'
      }
    }, it.title, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "plus",
      size: 18,
      color: on ? 'var(--teal-600)' : 'var(--text-subtle)',
      style: {
        transform: on ? 'rotate(45deg)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-standard)'
      }
    })), on && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 48px 22px 0',
        fontSize: 'var(--fs-body-s)',
        color: 'var(--text-muted)',
        lineHeight: 1.6
      }
    }, it.content));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function Card({
  tone = 'default',
  padding = 28,
  interactive = false,
  onClick,
  children,
  style
}) {
  const [h, setH] = React.useState(false);
  const t = {
    default: {
      bg: 'var(--surface-card)',
      bd: 'var(--border-subtle)',
      fg: 'var(--text-body)'
    },
    tint: {
      bg: 'var(--surface-tint)',
      bd: 'var(--teal-100)',
      fg: 'var(--text-body)'
    },
    dark: {
      bg: 'var(--surface-dark)',
      bd: 'var(--border-on-dark)',
      fg: 'var(--text-on-dark)'
    },
    brand: {
      bg: 'var(--surface-brand)',
      bd: 'transparent',
      fg: '#fff'
    },
    mint: {
      bg: 'var(--mint-300)',
      bd: 'transparent',
      fg: 'var(--teal-950)'
    }
  }[tone];
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      background: t.bg,
      color: t.fg,
      border: '1px solid ' + (interactive && h && tone === 'default' ? 'var(--teal-600)' : t.bd),
      borderRadius: 'var(--radius-card)',
      padding,
      cursor: interactive ? 'pointer' : undefined,
      boxShadow: interactive && h ? 'var(--shadow-2)' : 'none',
      transition: 'border-color var(--dur-base), box-shadow var(--dur-base) var(--ease-standard)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/ProductCard.jsx
try { (() => {
function ProductCard({
  brand,
  name,
  partNo,
  description,
  specs = [],
  badges = [],
  image,
  onClick
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-card)',
      border: '1px solid ' + (h ? 'var(--teal-600)' : 'var(--border-subtle)'),
      borderRadius: 'var(--radius-card)',
      overflow: 'hidden',
      cursor: onClick ? 'pointer' : undefined,
      transition: 'border-color var(--dur-base)',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4 / 3',
      background: 'var(--neutral-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: h ? 'scale(1.03)' : 'none',
      transition: 'transform var(--dur-slow) var(--ease-standard)'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.08em',
      color: 'var(--text-subtle)',
      textTransform: 'uppercase'
    }
  }, "Product image"), badges.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12,
      display: 'flex',
      gap: 6
    }
  }, badges.map(b => /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    key: b.label || b,
    tone: b.tone || 'neutral',
    style: {
      background: b.tone ? undefined : '#fff'
    }
  }, b.label || b)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 8,
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-micro)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-brand)'
    }
  }, brand), partNo && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-accent)'
    }
  }, partNo)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-h4)',
      color: 'var(--text-strong)',
      letterSpacing: '-0.015em',
      lineHeight: 1.25
    }
  }, name), description && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-muted)',
      lineHeight: 1.5
    }
  }, description), specs.length > 0 && /*#__PURE__*/React.createElement("dl", {
    style: {
      margin: '8px 0 0',
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      columnGap: 16,
      rowGap: 4,
      fontSize: 'var(--fs-label)',
      borderTop: '1px solid var(--border-subtle)',
      paddingTop: 12
    }
  }, specs.map(s => /*#__PURE__*/React.createElement(React.Fragment, {
    key: s.label
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      color: 'var(--text-subtle)'
    }
  }, s.label), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      color: 'var(--text-strong)',
      fontFamily: 'var(--font-mono)'
    }
  }, s.value)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 12,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: 'var(--fs-caption)',
      fontWeight: 500,
      color: 'var(--teal-700)'
    }
  }, "View details", /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-up-right",
    size: 16,
    style: {
      transform: h ? 'translate(2px,-2px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-standard)'
    }
  }))));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/display/Stat.jsx
try { (() => {
function Stat({
  value,
  label,
  tone = 'light'
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-display-l)',
      fontWeight: 300,
      letterSpacing: 'var(--tracking-display)',
      lineHeight: 1,
      color: dark ? 'var(--mint-300)' : 'var(--text-strong)'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-body-s)',
      color: dark ? 'var(--teal-200)' : 'var(--text-muted)'
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Stat.jsx", error: String((e && e.message) || e) }); }

// components/display/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  tone = 'light'
}) {
  const [inner, setInner] = React.useState(defaultValue ?? (tabs[0] && (tabs[0].value || tabs[0])));
  const cur = value ?? inner;
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 28,
      borderBottom: '1px solid ' + (dark ? 'var(--border-on-dark)' : 'var(--border-subtle)')
    }
  }, tabs.map(t => {
    const v = t.value || t;
    const l = t.label || t;
    const on = v === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": on,
      onClick: () => {
        if (value == null) setInner(v);
        onChange && onChange(v);
      },
      style: {
        position: 'relative',
        padding: '12px 0',
        marginBottom: -1,
        background: 'none',
        border: 0,
        borderBottom: '2px solid ' + (on ? dark ? 'var(--mint-300)' : 'var(--teal-600)' : 'transparent'),
        cursor: 'pointer',
        font: 'inherit',
        fontSize: 'var(--fs-body-s)',
        fontWeight: on ? 500 : 400,
        color: on ? dark ? 'var(--mint-300)' : 'var(--teal-700)' : dark ? 'var(--teal-300)' : 'var(--text-muted)',
        transition: 'color var(--dur-fast)'
      }
    }, l, t.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 6,
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        opacity: .7
      }
    }, t.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open = true,
  title,
  description,
  onClose,
  footer,
  width = 520,
  children
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'var(--overlay-scrim)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
      zIndex: 1000
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-dialog)',
      boxShadow: 'var(--shadow-3)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 16,
      padding: '24px 24px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-h3)',
      color: 'var(--text-strong)',
      letterSpacing: '-0.02em'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body-s)',
      color: 'var(--text-muted)'
    }
  }, description)), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Close",
    variant: "ghost",
    size: "s",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 8,
      padding: '16px 24px',
      background: 'var(--surface-sunken)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const I = {
  success: ['circle-check', 'var(--mint-300)'],
  info: ['info', 'var(--teal-200)'],
  warning: ['triangle-alert', '#F2C46D'],
  danger: ['circle-x', '#F29A92']
};
function Toast({
  tone = 'success',
  title,
  message,
  onClose,
  action
}) {
  const [ic, c] = I[tone] || I.info;
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      width: 380,
      maxWidth: '100%',
      padding: '14px 14px 14px 16px',
      background: 'var(--teal-950)',
      color: 'var(--teal-50)',
      borderRadius: 'var(--radius-2)',
      boxShadow: 'var(--shadow-3)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: ic,
    size: 18,
    color: c,
    style: {
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-body-s)',
      fontWeight: 500,
      color: '#fff'
    }
  }, title), message && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--teal-200)'
    }
  }, message), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, action)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Dismiss",
    onClick: onClose,
    style: {
      background: 'none',
      border: 0,
      padding: 2,
      cursor: 'pointer',
      color: 'var(--teal-300)',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  content,
  side = 'top',
  children
}) {
  const [o, setO] = React.useState(false);
  const pos = side === 'bottom' ? {
    top: 'calc(100% + 8px)'
  } : {
    bottom: 'calc(100% + 8px)'
  };
  return /*#__PURE__*/React.createElement("span", {
    onMouseEnter: () => setO(true),
    onMouseLeave: () => setO(false),
    onFocus: () => setO(true),
    onBlur: () => setO(false),
    style: {
      position: 'relative',
      display: 'inline-flex'
    }
  }, children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%) translateY(' + (o ? 0 : side === 'bottom' ? -4 : 4) + 'px)',
      ...pos,
      opacity: o ? 1 : 0,
      pointerEvents: 'none',
      whiteSpace: 'nowrap',
      padding: '6px 9px',
      background: 'var(--teal-950)',
      color: 'var(--teal-50)',
      fontSize: 'var(--fs-label)',
      borderRadius: 'var(--radius-1)',
      transition: 'opacity var(--dur-fast), transform var(--dur-fast) var(--ease-standard)',
      zIndex: 50
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  defaultChecked = false,
  onChange,
  disabled = false
}) {
  const [inner, setInner] = React.useState(defaultChecked);
  const on = checked != null ? checked : inner;
  const toggle = () => {
    if (disabled) return;
    const n = !on;
    if (checked == null) setInner(n);
    onChange && onChange(n);
  };
  return /*#__PURE__*/React.createElement("label", {
    onClick: toggle,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      fontSize: 'var(--fs-body-s)',
      color: 'var(--text-strong)',
      userSelect: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "checkbox",
    "aria-checked": on,
    style: {
      width: 18,
      height: 18,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1.5px solid ' + (on ? 'var(--teal-600)' : 'var(--neutral-400)'),
      background: on ? 'var(--teal-600)' : 'var(--neutral-0)',
      borderRadius: 'var(--radius-1)',
      color: '#fff',
      transition: 'all var(--dur-fast)'
    }
  }, on && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 13
  })), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Field({
  label,
  hint,
  error,
  htmlFor,
  children
}) {
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      minWidth: 0,
      fontFamily: 'var(--font-sans)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      fontWeight: 500,
      color: 'var(--text-strong)'
    }
  }, label), children, (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-label)',
      color: error ? 'var(--status-danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
function Input({
  label,
  hint,
  error,
  placeholder,
  value,
  defaultValue,
  onChange,
  type = 'text',
  icon,
  multiline = false,
  rows = 4,
  disabled = false,
  id,
  name,
  style
}) {
  const [f, setF] = React.useState(false);
  const bd = error ? 'var(--status-danger)' : f ? 'var(--teal-600)' : 'var(--border-default)';
  const common = {
    id,
    name,
    placeholder,
    value,
    defaultValue,
    onChange,
    disabled,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 0,
      outline: 'none',
      background: 'transparent',
      font: 'inherit',
      fontSize: 'var(--fs-body-s)',
      color: 'var(--text-strong)',
      padding: multiline ? '10px 0' : 0,
      resize: 'vertical'
    }
  };
  return /*#__PURE__*/React.createElement(Field, {
    label: label,
    hint: hint,
    error: error,
    htmlFor: id
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: multiline ? 'flex-start' : 'center',
      gap: 8,
      minHeight: multiline ? undefined : 'var(--control-h-m)',
      padding: '0 12px',
      background: disabled ? 'var(--neutral-50)' : 'var(--neutral-0)',
      border: '1px solid ' + bd,
      borderRadius: 'var(--radius-control)',
      boxShadow: f ? 'var(--shadow-focus)' : 'none',
      color: 'var(--text-subtle)',
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)',
      opacity: disabled ? .6 : 1,
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16,
    style: multiline ? {
      marginTop: 12
    } : undefined
  }), multiline ? /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows
  }, common)) : /*#__PURE__*/React.createElement("input", _extends({
    type: type
  }, common))));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  name,
  options = [],
  value,
  defaultValue,
  onChange,
  direction = 'column'
}) {
  const [inner, setInner] = React.useState(defaultValue);
  const cur = value != null ? value : inner;
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: 'flex',
      flexDirection: direction,
      gap: direction === 'row' ? 20 : 10
    }
  }, options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    const on = cur === v;
    return /*#__PURE__*/React.createElement("label", {
      key: v,
      onClick: () => {
        if (value == null) setInner(v);
        onChange && onChange(v);
      },
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        cursor: 'pointer',
        fontSize: 'var(--fs-body-s)',
        color: 'var(--text-strong)',
        userSelect: 'none'
      }
    }, /*#__PURE__*/React.createElement("span", {
      role: "radio",
      "aria-checked": on,
      style: {
        width: 18,
        height: 18,
        borderRadius: '50%',
        border: '1.5px solid ' + (on ? 'var(--teal-600)' : 'var(--neutral-400)'),
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#fff'
      }
    }, on && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: 'var(--teal-600)'
      }
    })), l);
  }));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Field({
  label,
  hint,
  error,
  htmlFor,
  children
}) {
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      minWidth: 0,
      fontFamily: 'var(--font-sans)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      fontWeight: 500,
      color: 'var(--text-strong)'
    }
  }, label), children, (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-label)',
      color: error ? 'var(--status-danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
function Select({
  label,
  hint,
  error,
  options = [],
  value,
  defaultValue,
  onChange,
  placeholder,
  disabled = false,
  id,
  style
}) {
  const [f, setF] = React.useState(false);
  return /*#__PURE__*/React.createElement(Field, {
    label: label,
    hint: hint,
    error: error,
    htmlFor: id
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      height: 'var(--control-h-m)',
      background: 'var(--neutral-0)',
      border: '1px solid ' + (error ? 'var(--status-danger)' : f ? 'var(--teal-600)' : 'var(--border-default)'),
      borderRadius: 'var(--radius-control)',
      boxShadow: f ? 'var(--shadow-focus)' : 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("select", {
    id: id,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      height: '100%',
      border: 0,
      outline: 'none',
      background: 'transparent',
      padding: '0 36px 0 12px',
      font: 'inherit',
      fontSize: 'var(--fs-body-s)',
      color: 'var(--text-strong)',
      cursor: 'pointer'
    }
  }, placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16,
    color: "var(--text-muted)",
    style: {
      position: 'absolute',
      right: 12,
      pointerEvents: 'none'
    }
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  checked,
  defaultChecked = false,
  onChange,
  disabled = false
}) {
  const [inner, setInner] = React.useState(defaultChecked);
  const on = checked != null ? checked : inner;
  const t = () => {
    if (disabled) return;
    const n = !on;
    if (checked == null) setInner(n);
    onChange && onChange(n);
  };
  return /*#__PURE__*/React.createElement("label", {
    onClick: t,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      fontSize: 'var(--fs-body-s)',
      color: 'var(--text-strong)',
      userSelect: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "switch",
    "aria-checked": on,
    style: {
      position: 'relative',
      width: 36,
      height: 20,
      background: on ? 'var(--teal-600)' : 'var(--neutral-300)',
      borderRadius: 'var(--radius-1)',
      transition: 'background var(--dur-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: on ? 18 : 2,
      width: 16,
      height: 16,
      background: '#fff',
      borderRadius: 1,
      boxShadow: 'var(--shadow-1)',
      transition: 'left var(--dur-base) var(--ease-standard)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CatalogScreen.jsx
try { (() => {
function CatalogScreen({
  go
}) {
  const {
    Eyebrow,
    Input,
    Checkbox,
    Switch,
    Tag,
    ProductCard,
    Select
  } = window.VishwasEnterprisesDesignSystem_30bbd9;
  const D = window.VE_DATA;
  const [q, setQ] = React.useState('');
  const [tags, setTags] = React.useState([]);
  const all = ['Anaerobic', 'Silicone', 'Grease', 'Gear oil', 'Food grade'];
  const list = D.products.filter(p => (!q || (p.name + p.partNo).toLowerCase().includes(q.toLowerCase())) && (!tags.length || tags.some(t => p.tags.includes(t))));
  const W = {
    maxWidth: 'var(--container-max)',
    margin: '0 auto',
    padding: '0 var(--container-pad)'
  };
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-tint)',
      borderBottom: '1px solid var(--teal-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...W,
      padding: '56px var(--container-pad) 40px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Products"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--fs-display-l)',
      fontWeight: 300,
      letterSpacing: 'var(--tracking-display)'
    }
  }, "Lubricants & sealants"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 12,
      alignItems: 'center',
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 280px',
      minWidth: 280,
      maxWidth: 420
    }
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "search",
    placeholder: "Search product or part no.",
    value: q,
    onChange: e => setQ(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, all.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    selected: tags.includes(t),
    onClick: () => setTags(s => s.includes(t) ? s.filter(x => x !== t) : [...s, t])
  }, t)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...W,
      padding: '40px var(--container-pad) 104px',
      display: 'grid',
      gridTemplateColumns: '220px minmax(0,1fr)',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--text-subtle)',
      marginBottom: 14
    }
  }, "Category"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, D.categories.map((c, i) => /*#__PURE__*/React.createElement(Checkbox, {
    key: c.id,
    label: c.name,
    defaultChecked: i < 2
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-subtle)',
      paddingTop: 24
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Industry",
    placeholder: "All industries",
    options: D.industries
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-subtle)',
      paddingTop: 24
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    label: "In stock only"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 13,
      color: 'var(--text-muted)',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      color: 'var(--text-strong)'
    }
  }, list.length), " products"), /*#__PURE__*/React.createElement("span", null, "Sort: Relevance")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 16
    }
  }, list.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    brand: p.cat,
    partNo: p.partNo,
    name: p.name,
    description: p.desc,
    specs: p.specs,
    badges: p.badges,
    onClick: () => go('product:' + p.id)
  }))), !list.length && /*#__PURE__*/React.createElement("p", {
    style: {
      padding: '48px 0',
      color: 'var(--text-muted)'
    }
  }, "No products match. Clear a filter or ", /*#__PURE__*/React.createElement("a", {
    onClick: () => go('contact'),
    style: {
      cursor: 'pointer'
    }
  }, "ask our team"), "."))));
}
window.CatalogScreen = CatalogScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CatalogScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactScreen.jsx
try { (() => {
function ContactScreen({
  onSent
}) {
  const {
    Eyebrow,
    Input,
    Select,
    Radio,
    Checkbox,
    Button,
    Icon,
    Card
  } = window.VishwasEnterprisesDesignSystem_30bbd9;
  const D = window.VE_DATA;
  const W = {
    maxWidth: 'var(--container-max)',
    margin: '0 auto',
    padding: '0 var(--container-pad)'
  };
  return /*#__PURE__*/React.createElement("main", {
    style: {
      background: 'var(--surface-tint)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      ...W,
      padding: '80px var(--container-pad) 104px',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.3fr)',
      gap: 72
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Contact"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--fs-display-l)',
      fontWeight: 300,
      letterSpacing: 'var(--tracking-display)'
    }
  }, "Request a quote"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body-l)',
      maxWidth: 420
    }
  }, "Share the product or application. Our team replies with pricing, availability and a grade recommendation."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: 'flex',
      flexDirection: 'column',
      borderTop: '1px solid var(--teal-200)'
    }
  }, [['phone', 'Phone', '[Phone number]'], ['mail', 'Email', '[Email address]'], ['map-pin', 'Office', '[Address]']].map(([i, l, v]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center',
      padding: '16px 0',
      borderBottom: '1px solid var(--teal-200)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 18,
    color: "var(--teal-600)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 80,
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--text-subtle)'
    }
  }, l), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-strong)'
    }
  }, v))))), /*#__PURE__*/React.createElement(Card, {
    padding: 36,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full name",
    placeholder: "Your name"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Company",
    placeholder: "Company name"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Work email",
    type: "email",
    placeholder: "name@company.com"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Phone",
    placeholder: "+91"
  })), /*#__PURE__*/React.createElement(Select, {
    label: "Industry",
    placeholder: "Select industry",
    options: D.industries
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: 'var(--text-strong)'
    }
  }, "Enquiry type"), /*#__PURE__*/React.createElement(Radio, {
    direction: "row",
    options: ['Sample', 'Bulk order', 'Technical consultation'],
    defaultValue: "Bulk order"
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Requirement",
    multiline: true,
    rows: 4,
    placeholder: "Product / part no., quantity, application, operating temperature\u2026"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Send me technical data sheets for the products above"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTop: '1px solid var(--border-subtle)',
      paddingTop: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "We reply within one working day."), /*#__PURE__*/React.createElement(Button, {
    size: "l",
    iconRight: "arrow-up-right",
    onClick: onSent
  }, "Send request")))));
}
window.ContactScreen = ContactScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
function SiteFooter({
  go
}) {
  const cols = [['Products', ['Threadlockers', 'Retaining compounds', 'Gasket sealants', 'Industrial greases', 'Gear oils']], ['Support', ['Product selection', 'Technical data sheets', 'Safety data sheets', 'FAQ']], ['Company', ['About us', 'Industries', 'Contact']]];
  const h = {
    fontFamily: 'var(--font-mono)',
    fontSize: 11,
    letterSpacing: '.08em',
    textTransform: 'uppercase',
    color: 'var(--teal-300)',
    marginBottom: 14
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-deepest)',
      color: 'var(--teal-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '72px var(--container-pad) 32px',
      display: 'grid',
      gridTemplateColumns: '1.4fr repeat(3,1fr)',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24,
      letterSpacing: '-.03em',
      color: '#fff',
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 600
    }
  }, "Vishwas"), " Enterprises"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--teal-200)',
      maxWidth: 300
    }
  }, "Authorized distributor of specialty lubricants and sealants for industry.")), cols.map(([t, ls]) => /*#__PURE__*/React.createElement("div", {
    key: t
  }, /*#__PURE__*/React.createElement("div", {
    style: h
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, ls.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    onClick: () => go(t === 'Products' ? 'catalog' : 'home'),
    style: {
      cursor: 'pointer',
      color: 'var(--teal-50)',
      textDecoration: 'none',
      fontSize: 14
    }
  }, l)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '20px var(--container-pad) 28px',
      borderTop: '1px solid var(--border-on-dark)',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 12,
      color: 'var(--teal-300)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Vishwas Enterprises"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("span", null, "Privacy"), /*#__PURE__*/React.createElement("span", null, "Terms"))));
}
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
function SiteHeader({
  route,
  go
}) {
  const {
    Button,
    IconButton
  } = window.VishwasEnterprisesDesignSystem_30bbd9;
  const nav = [['catalog', 'Products'], ['home#industries', 'Industries'], ['home#faq', 'Support'], ['contact', 'Contact']];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'rgba(255,255,255,.92)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--container-pad)',
      height: 'var(--header-h)',
      display: 'flex',
      alignItems: 'center',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => go('home'),
    style: {
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20,
      letterSpacing: '-.03em',
      color: 'var(--teal-900)',
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 600
    }
  }, "Vishwas"), " Enterprises"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 9.5,
      letterSpacing: '.1em',
      color: 'var(--teal-600)',
      textTransform: 'uppercase'
    }
  }, "Lubricants & Sealants")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 28,
      flex: 1
    }
  }, nav.map(([r, l]) => {
    const on = route.split('#')[0] === r.split('#')[0] && !r.includes('#');
    return /*#__PURE__*/React.createElement("a", {
      key: l,
      onClick: () => go(r),
      style: {
        cursor: 'pointer',
        textDecoration: 'none',
        fontSize: 14,
        color: on ? 'var(--teal-700)' : 'var(--text-strong)',
        fontWeight: on ? 500 : 400
      }
    }, l);
  })), /*#__PURE__*/React.createElement(IconButton, {
    icon: "search",
    label: "Search",
    variant: "ghost",
    onClick: () => go('catalog')
  }), /*#__PURE__*/React.createElement(Button, {
    iconRight: "arrow-up-right",
    onClick: () => go('contact')
  }, "Request a quote")));
}
window.SiteHeader = SiteHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
function Brackets({
  color = 'var(--teal-700)'
}) {
  const s = 'position:absolute;width:14px;height:14px;';
  const b = '1.5px solid ' + color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, [{
    top: -8,
    left: -8,
    borderTop: b,
    borderLeft: b
  }, {
    top: -8,
    right: -8,
    borderTop: b,
    borderRight: b
  }, {
    bottom: -8,
    left: -8,
    borderBottom: b,
    borderLeft: b
  }, {
    bottom: -8,
    right: -8,
    borderBottom: b,
    borderRight: b
  }].map((st, i) => /*#__PURE__*/React.createElement("i", {
    key: i,
    style: {
      position: 'absolute',
      width: 14,
      height: 14,
      ...st
    }
  })));
}
function ImgSlot({
  label,
  dark,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: dark ? 'var(--teal-800)' : 'repeating-linear-gradient(135deg,var(--neutral-100) 0 12px,var(--neutral-50) 12px 24px)',
      display: 'flex',
      alignItems: 'flex-end',
      padding: 14,
      fontFamily: 'var(--font-mono)',
      fontSize: 10.5,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: dark ? 'var(--teal-300)' : 'var(--text-subtle)',
      ...style
    }
  }, label);
}
function HomeScreen({
  go
}) {
  const {
    Button,
    Eyebrow,
    Icon,
    Card,
    Accordion,
    Tabs
  } = window.VishwasEnterprisesDesignSystem_30bbd9;
  const D = window.VE_DATA;
  const [ind, setInd] = React.useState(D.industries[0]);
  const W = {
    maxWidth: 'var(--container-max)',
    margin: '0 auto',
    padding: '0 var(--container-pad)'
  };
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-tint)',
      borderBottom: '1px solid var(--teal-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...W,
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.1fr) minmax(0,1fr)',
      gap: 56,
      padding: '88px var(--container-pad) 96px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    index: "\u2014"
  }, "Authorized distributor"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--fs-display-xl)',
      fontWeight: 300,
      letterSpacing: 'var(--tracking-display)',
      lineHeight: 1.02
    }
  }, "Specialty lubricants & sealants, ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--teal-600)'
    }
  }, "specified right.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body-l)',
      maxWidth: 480
    }
  }, "Genuine products from principal manufacturers, with the technical support to choose the right grade for your line."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "l",
    iconRight: "arrow-up-right",
    onClick: () => go('catalog')
  }, "Browse products"), /*#__PURE__*/React.createElement(Button, {
    size: "l",
    variant: "secondary",
    onClick: () => go('contact')
  }, "Talk to an engineer"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 440
    }
  }, /*#__PURE__*/React.createElement(ImgSlot, {
    label: "Hero image \xB7 machined part with sealant bead, grey seamless",
    style: {
      position: 'absolute',
      inset: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '38%',
      top: '34%',
      width: 130,
      height: 100,
      background: 'rgba(35,150,142,.18)'
    }
  }, /*#__PURE__*/React.createElement(Brackets, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 24,
      top: 24,
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      lineHeight: 1.7,
      color: 'var(--teal-800)',
      letterSpacing: '.04em'
    }
  }, "TL-243 \xB7 ANAEROBIC", /*#__PURE__*/React.createElement("br", null), "TEMP \u221255 \u2192 150 \xB0C", /*#__PURE__*/React.createElement("br", null), "FIXTURE 10 MIN")))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...W,
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, [['shield-check', 'Genuine, traceable stock', 'Sourced direct from principals, with batch documentation.'], ['flask-conical', 'Application support', 'Grade selection, trials and on-site guidance.'], ['truck', 'Reliable supply', 'Stock held for maintenance and production needs.']].map(([i, t, d], k) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 16,
      padding: '36px 28px',
      borderLeft: k ? '1px solid var(--border-subtle)' : 0,
      paddingLeft: k ? 28 : 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 24,
    color: "var(--teal-600)"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: 'var(--text-strong)',
      marginBottom: 4
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, d))))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...W,
      padding: '104px var(--container-pad)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 48,
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    index: "01"
  }, "Product range"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--fs-display-m)',
      letterSpacing: 'var(--tracking-display)',
      maxWidth: 560
    }
  }, "Every joint, thread and bearing \u2014 covered.")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    iconRight: "arrow-right",
    onClick: () => go('catalog')
  }, "All products")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      borderTop: '1px solid var(--border-subtle)',
      borderLeft: '1px solid var(--border-subtle)'
    }
  }, D.categories.map(c => /*#__PURE__*/React.createElement(CategoryTile, {
    key: c.id,
    c: c,
    go: go
  })))), /*#__PURE__*/React.createElement("section", {
    id: "industries",
    style: {
      background: 'var(--surface-dark)',
      color: 'var(--text-on-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...W,
      padding: '104px var(--container-pad)',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.2fr)',
      gap: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    index: "02",
    tone: "dark"
  }, "Industries"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--fs-display-m)',
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--mint-300)'
    }
  }, "Built around the plants we supply."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--teal-200)',
      maxWidth: 420
    }
  }, "Each industry has its own failure modes. We stock and recommend accordingly."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: 'flex',
      flexDirection: 'column'
    }
  }, D.industries.map(i => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => setInd(i),
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '14px 0',
      background: 'none',
      border: 0,
      borderBottom: '1px solid var(--border-on-dark)',
      color: ind === i ? 'var(--mint-300)' : 'var(--teal-50)',
      font: 'inherit',
      fontSize: 17,
      cursor: 'pointer',
      textAlign: 'left'
    }
  }, i, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up-right",
    size: 16,
    style: {
      opacity: ind === i ? 1 : .35
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: 420
    }
  }, /*#__PURE__*/React.createElement(ImgSlot, {
    dark: true,
    label: 'Image · ' + ind,
    style: {
      position: 'absolute',
      inset: 0
    }
  }), /*#__PURE__*/React.createElement(Card, {
    tone: "mint",
    padding: 24,
    style: {
      position: 'absolute',
      left: 24,
      bottom: 24,
      width: 300
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      letterSpacing: '-.015em',
      marginBottom: 8
    }
  }, ind), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'var(--teal-800)',
      marginBottom: 16
    }
  }, "Recommended threadlockers, sealants and greases for this sector."), /*#__PURE__*/React.createElement(Button, {
    size: "s",
    variant: "dark",
    iconRight: "arrow-right",
    onClick: () => go('catalog')
  }, "View products"))))), /*#__PURE__*/React.createElement("section", {
    id: "faq",
    style: {
      ...W,
      padding: '104px var(--container-pad)',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.5fr)',
      gap: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    index: "03"
  }, "Support"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--fs-display-m)',
      letterSpacing: 'var(--tracking-display)'
    }
  }, "Frequently asked questions")), /*#__PURE__*/React.createElement(Accordion, {
    items: D.faq
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      ...W,
      paddingBottom: 104,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "brand",
    padding: 40,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      minHeight: 240
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 32,
      color: '#fff',
      letterSpacing: '-.025em'
    }
  }, "Not sure which grade?"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--teal-100)',
      maxWidth: 380
    }
  }, "Tell us the application. We'll recommend a product and arrange a sample."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "mint",
    iconRight: "arrow-up-right",
    onClick: () => go('contact')
  }, "Ask our technical team"))), /*#__PURE__*/React.createElement(Card, {
    tone: "mint",
    padding: 40,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      minHeight: 240
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 32,
      color: 'var(--teal-950)',
      letterSpacing: '-.025em'
    }
  }, "Product catalogue"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--teal-800)',
      maxWidth: 380
    }
  }, "The full range with grades, pack sizes and key specifications."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    iconLeft: "download"
  }, "Download PDF")))));
}
function CategoryTile({
  c,
  go
}) {
  const {
    Icon
  } = window.VishwasEnterprisesDesignSystem_30bbd9;
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    onClick: () => go('catalog'),
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      cursor: 'pointer',
      textDecoration: 'none',
      padding: 32,
      minHeight: 230,
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      borderRight: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)',
      background: h ? 'var(--teal-50)' : '#fff',
      transition: 'background var(--dur-base)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--text-accent)'
    }
  }, c.n), /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up-right",
    size: 18,
    color: h ? 'var(--teal-600)' : 'var(--neutral-400)',
    style: {
      transform: h ? 'translate(2px,-2px)' : 'none',
      transition: 'transform var(--dur-base)'
    }
  })), /*#__PURE__*/React.createElement(Icon, {
    name: c.icon,
    size: 28,
    color: "var(--teal-700)",
    style: {
      marginTop: 'auto'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      color: 'var(--text-strong)',
      letterSpacing: '-.02em'
    }
  }, c.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, c.desc));
}
Object.assign(window, {
  HomeScreen,
  ImgSlot,
  Brackets
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProductScreen.jsx
try { (() => {
function ProductScreen({
  id,
  go,
  onQuote
}) {
  const {
    Eyebrow,
    Badge,
    Button,
    Tabs,
    Radio,
    Icon,
    Tooltip,
    ProductCard
  } = window.VishwasEnterprisesDesignSystem_30bbd9;
  const D = window.VE_DATA;
  const p = D.products.find(x => x.id === id) || D.products[0];
  const [tab, setTab] = React.useState('Specifications');
  const rows = [['Chemistry', p.tags[0]], ...p.specs.map(s => [s.label, s.value]), ['Colour', 'Blue'], ['Fixture time', '10 min'], ['Full cure', '24 h @ 22 °C'], ['Pack sizes', '10 ml · 50 ml · 250 ml']];
  const W = {
    maxWidth: 'var(--container-max)',
    margin: '0 auto',
    padding: '0 var(--container-pad)'
  };
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...W,
      padding: '20px var(--container-pad)',
      fontSize: 13,
      color: 'var(--text-muted)',
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => go('home'),
    style: {
      cursor: 'pointer',
      color: 'inherit',
      textDecoration: 'none'
    }
  }, "Home"), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 14
  }), /*#__PURE__*/React.createElement("a", {
    onClick: () => go('catalog'),
    style: {
      cursor: 'pointer',
      color: 'inherit',
      textDecoration: 'none'
    }
  }, "Products"), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 14
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-strong)'
    }
  }, p.partNo)), /*#__PURE__*/React.createElement("section", {
    style: {
      ...W,
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
      gap: 56,
      paddingBottom: 72
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '1 / 1'
    }
  }, /*#__PURE__*/React.createElement(window.ImgSlot, {
    label: "Product pack shot \xB7 grey seamless",
    style: {
      position: 'absolute',
      inset: 0
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, p.cat), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-accent)'
    }
  }, p.partNo)), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--fs-display-m)',
      letterSpacing: 'var(--tracking-display)'
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, p.badges.map(b => /*#__PURE__*/React.createElement(Badge, {
    key: b.label,
    tone: b.tone,
    dot: b.tone !== 'accent'
  }, b.label)), /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, "Genuine")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body-l)'
    }
  }, p.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-subtle)',
      paddingTop: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: 'var(--text-strong)'
    }
  }, "Enquiry type"), /*#__PURE__*/React.createElement(Radio, {
    direction: "row",
    options: ['Sample', 'Bulk order', 'Technical consultation'],
    defaultValue: "Bulk order"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "l",
    iconRight: "arrow-up-right",
    onClick: () => onQuote(p)
  }, "Request a quote"), /*#__PURE__*/React.createElement(Button, {
    size: "l",
    variant: "secondary",
    iconLeft: "file-text"
  }, "Data sheet")))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...W,
      paddingBottom: 96
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: ['Overview', 'Specifications', {
      value: 'Documents',
      label: 'Documents',
      count: 2
    }],
    value: tab,
    onChange: setTab
  }), tab === 'Specifications' && /*#__PURE__*/React.createElement("dl", {
    style: {
      margin: 0,
      display: 'grid',
      gridTemplateColumns: '240px 1fr',
      maxWidth: 760
    }
  }, rows.map(([k, v]) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: k
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      padding: '14px 0',
      borderBottom: '1px solid var(--border-subtle)',
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, k === 'Temp' ? /*#__PURE__*/React.createElement(Tooltip, {
    content: "Continuous service temperature"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      borderBottom: '1px dashed var(--neutral-400)'
    }
  }, "Temperature range")) : k), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      padding: '14px 0',
      borderBottom: '1px solid var(--border-subtle)',
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      color: 'var(--text-strong)'
    }
  }, v)))), tab === 'Overview' && /*#__PURE__*/React.createElement("p", {
    style: {
      padding: '24px 0',
      maxWidth: 680
    }
  }, p.desc, " Suitable for maintenance, repair and production use. Contact our technical team for application-specific guidance."), tab === 'Documents' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: 760
    }
  }, ['Technical data sheet (TDS)', 'Safety data sheet (SDS)'].map(d => /*#__PURE__*/React.createElement("div", {
    key: d,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '16px 0',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "file-text",
    size: 18,
    color: "var(--teal-600)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      color: 'var(--text-strong)'
    }
  }, d), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-subtle)'
    }
  }, "PDF"), /*#__PURE__*/React.createElement(Icon, {
    name: "download",
    size: 16
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-sunken)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...W,
      padding: '72px var(--container-pad)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 28,
      marginBottom: 28
    }
  }, "Related products"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 16
    }
  }, D.products.filter(x => x.id !== p.id).slice(0, 3).map(x => /*#__PURE__*/React.createElement(ProductCard, {
    key: x.id,
    brand: x.cat,
    partNo: x.partNo,
    name: x.name,
    specs: x.specs,
    badges: x.badges,
    onClick: () => {
      go('product:' + x.id);
      window.scrollTo(0, 0);
    }
  }))))));
}
window.ProductScreen = ProductScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProductScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
window.VE_DATA = {
  categories: [{
    id: 'threadlockers',
    n: '01',
    name: 'Threadlockers',
    icon: 'cog',
    desc: 'Anaerobic compounds that stop fasteners loosening under vibration.'
  }, {
    id: 'retaining',
    n: '02',
    name: 'Retaining compounds',
    icon: 'circle-dot',
    desc: 'Bond cylindrical fits — bearings, bushes, sleeves.'
  }, {
    id: 'gaskets',
    n: '03',
    name: 'Gasket & flange sealants',
    icon: 'square-dashed',
    desc: 'Form-in-place gaskets for rigid and flexible flanges.'
  }, {
    id: 'thread-sealants',
    n: '04',
    name: 'Thread sealants',
    icon: 'pipette',
    desc: 'Seal pipe threads against gas, water and hydraulic fluid.'
  }, {
    id: 'greases',
    n: '05',
    name: 'Industrial greases',
    icon: 'droplet',
    desc: 'High-temperature, EP and food-grade greases.'
  }, {
    id: 'oils',
    n: '06',
    name: 'Gear & specialty oils',
    icon: 'droplets',
    desc: 'Synthetic gear, chain and compressor oils.'
  }],
  products: [{
    id: 'tl-243',
    cat: 'Threadlocker',
    partNo: 'TL-243',
    name: 'Medium-strength threadlocker',
    desc: 'Removable with hand tools. Tolerates light oil contamination.',
    specs: [{
      label: 'Strength',
      value: 'Medium'
    }, {
      label: 'Temp',
      value: '-55 to 150 °C'
    }],
    badges: [{
      label: 'In stock',
      tone: 'success'
    }],
    tags: ['Anaerobic']
  }, {
    id: 'tl-271',
    cat: 'Threadlocker',
    partNo: 'TL-271',
    name: 'High-strength threadlocker',
    desc: 'Permanent locking for studs and heavy-duty fasteners.',
    specs: [{
      label: 'Strength',
      value: 'High'
    }, {
      label: 'Temp',
      value: '-55 to 150 °C'
    }],
    badges: [{
      label: 'In stock',
      tone: 'success'
    }],
    tags: ['Anaerobic']
  }, {
    id: 'rc-638',
    cat: 'Retaining compound',
    partNo: 'RC-638',
    name: 'High-strength retaining compound',
    desc: 'For slip and press fits up to 0.25 mm diametral gap.',
    specs: [{
      label: 'Gap fill',
      value: '0.25 mm'
    }, {
      label: 'Temp',
      value: '-55 to 180 °C'
    }],
    badges: [{
      label: 'Low stock',
      tone: 'warning'
    }],
    tags: ['Anaerobic']
  }, {
    id: 'gs-5900',
    cat: 'Flange sealant',
    partNo: 'GS-5900',
    name: 'RTV silicone flange sealant',
    desc: 'Flexible, oil-resistant gasket for stamped covers and pans.',
    specs: [{
      label: 'Cure',
      value: 'Moisture RTV'
    }, {
      label: 'Temp',
      value: '-60 to 200 °C'
    }],
    badges: [{
      label: 'In stock',
      tone: 'success'
    }],
    tags: ['Silicone']
  }, {
    id: 'gr-h1',
    cat: 'Grease',
    partNo: 'GR-H1-2',
    name: 'Food-grade synthetic grease',
    desc: 'Incidental food contact. Water-wash resistant.',
    specs: [{
      label: 'NLGI',
      value: '2'
    }, {
      label: 'Temp',
      value: '-40 to 160 °C'
    }],
    badges: [{
      label: 'NSF H1',
      tone: 'accent'
    }],
    tags: ['Grease', 'Food grade']
  }, {
    id: 'go-220',
    cat: 'Gear oil',
    partNo: 'GO-PAO-220',
    name: 'Synthetic PAO gear oil',
    desc: 'Extended drain intervals for enclosed industrial gearboxes.',
    specs: [{
      label: 'ISO VG',
      value: '220'
    }, {
      label: 'Base',
      value: 'PAO'
    }],
    badges: [{
      label: 'In stock',
      tone: 'success'
    }],
    tags: ['Gear oil']
  }],
  industries: ['Automotive & components', 'Steel & metals', 'Food & beverage', 'Power generation', 'Cement & mining', 'Pharmaceuticals'],
  faq: [{
    title: 'Are your products genuine and traceable?',
    content: 'Yes. We are an authorized distributor — stock is sourced directly from the principal manufacturer, and each consignment ships with batch number and certificate of analysis on request.'
  }, {
    title: 'Can you help us choose the right grade?',
    content: 'Share the application, substrate, gap and operating temperature. Our technical team will recommend a grade and, where useful, arrange a trial sample.'
  }, {
    title: 'Do you supply sample and small-pack quantities?',
    content: 'Most products are available in small packs for trials and maintenance stores, as well as bulk packs for production lines.'
  }, {
    title: 'Where do you dispatch from?',
    content: 'Dispatch locations and lead times are confirmed with each quotation.'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

})();
