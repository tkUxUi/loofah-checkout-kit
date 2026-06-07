import React from "react";

export const tokens = {
  color: {
    focus: "#8174F2",
    black: "#030505",
    white: "#FFFFFF",

    brand: {
      50: "#EAF2EF",
      100: "#D4E5DE",
      300: "#8FB7AA",
      500: "#005661",
      700: "#002F35"
    },

    neutral: {
      50: "#FAFAF8",
      100: "#D9DDD9",
      300: "#AEB5B0",
      500: "#56615C",
      700: "#2B332F"
    },

    semantic: {
      success: "#1B7F43",
      information: "#006D8F",
      error: {
        light: "#F8DADA",
        base: "#C62828",
        dark: "#8E1C1C"
      },
      warning: {
        light: "#E6A23C",
        dark: "#9A5A00"
      }
    }
  },

  spacing: {
    0: 0,
    4: 4,
    8: 8,
    16: 16,
    24: 24,
    32: 32,
    40: 40,
    48: 48,
    64: 64,
    80: 80
  },

  radius: {
    sm: 8,
    md: 16,
    lg: 24,
    pill: 999
  },

  type: {
    display: { fontSize: 48, lineHeight: "56px", fontWeight: 700 },
    h1: { fontSize: 32, lineHeight: "40px", fontWeight: 700 },
    h2: { fontSize: 24, lineHeight: "32px", fontWeight: 700 },
    h3: { fontSize: 20, lineHeight: "24px", fontWeight: 700 },
    bodyRegular: { fontSize: 16, lineHeight: "24px", fontWeight: 400 },
    bodyMedium: { fontSize: 16, lineHeight: "24px", fontWeight: 500 },
    labelMedium: { fontSize: 14, lineHeight: "16px", fontWeight: 500 },
    labelRegular: { fontSize: 14, lineHeight: "18px", fontWeight: 400 },
    captionMedium: { fontSize: 12, lineHeight: "16px", fontWeight: 500 },
    captionRegular: { fontSize: 12, lineHeight: "16px", fontWeight: 400 },
    badge: { fontSize: 10, lineHeight: "16px", fontWeight: 700 },
    overline: { fontSize: 12, lineHeight: "16px", fontWeight: 700 }
  },

  shadow: {
    small: "0px 1px 4px rgba(0, 0, 0, 0.45)",
    medium: "0px 2px 4px rgba(0, 0, 0, 0.25)",
    large: "0px 4px 8px rgba(0, 0, 0, 0.15)",
    pressedInner: "inset 0px 2px 8px 1px #002F35"
  }
};

export function Button({
  children,
  variant = "primary",
  state = "default",
  disabled = false
}) {
  const isDisabled = disabled || state === "disabled";

  const styles = {
    primary: {
      default: {
        background: tokens.color.brand[500],
        color: tokens.color.brand[50],
        border: "none"
      },
      hover: {
        background: tokens.color.brand[300],
        color: tokens.color.neutral[700],
        border: "none"
      },
      active: {
        background: tokens.color.brand[700],
        color: tokens.color.brand[50],
        border: "none",
        boxShadow: tokens.shadow.pressedInner
      },
      focused: {
        background: tokens.color.brand[500],
        color: tokens.color.brand[50],
        border: `2px solid ${tokens.color.focus}`
      },
      disabled: {
        background: tokens.color.neutral[100],
        color: tokens.color.neutral[500],
        border: "none"
      }
    },

    secondary: {
      default: {
        background: tokens.color.neutral[50],
        color: tokens.color.brand[500],
        border: `1px solid ${tokens.color.neutral[300]}`
      },
      hover: {
        background: tokens.color.brand[100],
        color: tokens.color.brand[700],
        border: `1px solid ${tokens.color.brand[300]}`
      },
      active: {
        background: tokens.color.brand[300],
        color: tokens.color.neutral[700],
        border: `1px solid ${tokens.color.brand[700]}`
      },
      disabled: {
        background: tokens.color.neutral[100],
        color: tokens.color.neutral[500],
        border: `1px solid ${tokens.color.neutral[300]}`
      }
    },

    ghost: {
      default: {
        background: "transparent",
        color: tokens.color.brand[500],
        border: "none"
      },
      hover: {
        background: tokens.color.brand[50],
        color: tokens.color.brand[500],
        border: "none"
      },
      active: {
        background: tokens.color.brand[100],
        color: tokens.color.brand[700],
        border: "none"
      },
      disabled: {
        background: "transparent",
        color: tokens.color.neutral[500],
        border: "none"
      }
    }
  };

  const visualState = isDisabled ? "disabled" : state;
  const selectedStyle =
    styles[variant]?.[visualState] || styles.primary.default;

  return (
    <button
      disabled={isDisabled}
      style={{
        minHeight: 48,
        width: "100%",
        borderRadius: tokens.radius.md,
        padding: `${tokens.spacing[16]}px ${tokens.spacing[24]}px`,
        fontSize: tokens.type.bodyMedium.fontSize,
        lineHeight: tokens.type.bodyMedium.lineHeight,
        fontWeight: tokens.type.bodyMedium.fontWeight,
        cursor: isDisabled ? "not-allowed" : "pointer",
        ...selectedStyle
      }}
    >
      {children}
    </button>
  );
}

export function Card({ children }) {
  return (
    <section
      style={{
        background: tokens.color.neutral[50],
        border: `1px solid ${tokens.color.neutral[100]}`,
        borderRadius: tokens.radius.lg,
        padding: tokens.spacing[24],
        boxShadow: tokens.shadow.medium,
        color: tokens.color.neutral[700]
      }}
    >
      {children}
    </section>
  );
}

export function StatusBadge({ status = "success", children }) {
  const styles = {
    success: {
      color: tokens.color.semantic.success,
      background: tokens.color.brand[50]
    },
    error: {
      color: tokens.color.semantic.error.base,
      background: tokens.color.semantic.error.light
    },
    warning: {
      color: tokens.color.semantic.warning.dark,
      background: tokens.color.brand[50]
    },
    information: {
      color: tokens.color.semantic.information,
      background: tokens.color.brand[50]
    }
  };

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        minHeight: 24,
        padding: `0 ${tokens.spacing[8]}px`,
        borderRadius: tokens.radius.pill,
        fontSize: tokens.type.badge.fontSize,
        lineHeight: tokens.type.badge.lineHeight,
        fontWeight: tokens.type.badge.fontWeight,
        ...styles[status]
      }}
    >
      {children}
    </span>
  );
}

export function OrderTrackingStepper({ current = "Preparing" }) {
  const steps = ["Confirmed", "Preparing", "Shipped", "Delivered"];
  const currentIndex = steps.indexOf(current);

  return (
    <div style={{ display: "grid", gap: tokens.spacing[16] }}>
      {steps.map((step, index) => {
        const isActive = index === currentIndex;
        const isComplete = index < currentIndex;

        return (
          <div
            key={step}
            style={{
              display: "flex",
              alignItems: "center",
              gap: tokens.spacing[12] || 12,
              color:
                isActive || isComplete
                  ? tokens.color.brand[500]
                  : tokens.color.neutral[500],
              fontWeight: isActive ? 700 : 400
            }}
          >
            <span
              style={{
                width: 16,
                height: 16,
                borderRadius: tokens.radius.pill,
                background:
                  isActive || isComplete
                    ? tokens.color.brand[500]
                    : tokens.color.neutral[300],
                display: "inline-block"
              }}
            />
            <span>{step}</span>
          </div>
        );
      })}
    </div>
  );
}

export function OrderSummaryCard() {
  return (
    <Card>
      <h2
        style={{
          marginTop: 0,
          marginBottom: tokens.spacing[16],
          fontSize: tokens.type.h2.fontSize,
          lineHeight: tokens.type.h2.lineHeight,
          fontWeight: tokens.type.h2.fontWeight,
          color: tokens.color.brand[500]
        }}
      >
        Order summary
      </h2>

      <p
        style={{
          marginTop: 0,
          marginBottom: tokens.spacing[8],
          fontSize: tokens.type.bodyRegular.fontSize,
          lineHeight: tokens.type.bodyRegular.lineHeight,
          color: tokens.color.neutral[500]
        }}
      >
        Loofah Grove checkout order
      </p>

      <strong
        style={{
          display: "block",
          fontSize: tokens.type.bodyMedium.fontSize,
          lineHeight: tokens.type.bodyMedium.lineHeight,
          color: tokens.color.neutral[700]
        }}
      >
        Estimated total
      </strong>
    </Card>
  );
}