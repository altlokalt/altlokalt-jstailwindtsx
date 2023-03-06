import React from "react";

const variantClasses = {
  h1: "sm:text-[48px] md:text-[48px] text-[96px]",
  h2: "text-[9px]",
  h3: "font-normal sm:text-[48px] md:text-[48px] text-[80px]",
  h4: "font-normal text-[8.5px]",
  h5: "text-[8px]",
  h6: "font-black sm:text-[48px] md:text-[48px] text-[76px]",
  body1: "font-bold sm:text-[48px] md:text-[48px] text-[74px]",
  body2: "font-bold sm:text-[48px] md:text-[48px] text-[72px]",
  body3: "font-semibold sm:text-[48px] md:text-[48px] text-[70px]",
  body4: "font-normal text-[7px]",
  body5: "sm:text-[48px] md:text-[48px] text-[64px]",
  body6: "font-extrabold sm:text-[48px] md:text-[48px] text-[63px]",
  body7: "font-bold sm:text-[48px] md:text-[48px] text-[61.07px]",
  body8: "sm:text-[48px] md:text-[48px] text-[60px]",
  body9: "font-normal text-[6.33px]",
  body10: "font-normal text-[6px]",
  body11: "sm:text-[42px] md:text-[48px] text-[56px]",
  body12: "sm:text-[41px] md:text-[47px] text-[55px]",
  body13: "sm:text-[40px] md:text-[46px] text-[54px]",
  body14: "font-semibold sm:text-[39px] md:text-[45px] text-[53px]",
  body15: "sm:text-[38px] md:text-[44px] text-[52px]",
  body16: "font-normal sm:text-[36.31px] md:text-[42.31px] text-[50.31px]",
  body17: "font-bold sm:text-[40px] md:text-[46px] text-[50px]",
  body18: "font-semibold sm:text-[39px] md:text-[45px] text-[49px]",
  body19: "sm:text-[38px] md:text-[44px] text-[48px]",
  body20: "font-light sm:text-[37.5px] md:text-[43.5px] text-[47.5px]",
  body21: "font-medium sm:text-[37px] md:text-[43px] text-[47px]",
  body22: "font-bold sm:text-[35px] md:text-[41px] text-[45px]",
  body23: "sm:text-[34px] md:text-[40px] text-[44px]",
  body24: "font-normal sm:text-[30.71px] md:text-[36.71px] text-[40.71px]",
  body25: "sm:text-[36px] md:text-[38px] text-[40px]",
  body26: "font-bold sm:text-[35px] md:text-[37px] text-[39px]",
  body27: "sm:text-[34px] md:text-[36px] text-[38px]",
  body28: "font-semibold sm:text-[33.32px] md:text-[35.32px] text-[37.32px]",
  body29: "sm:text-[33px] md:text-[35px] text-[37px]",
  body30: "sm:text-[32px] md:text-[34px] text-[36px]",
  body31: "font-semibold sm:text-[31px] md:text-[33px] text-[35px]",
  body32: "sm:text-[30px] md:text-[32px] text-[34px]",
  body33: "sm:text-[29.93px] md:text-[31.93px] text-[33.93px]",
  body34: "sm:text-[29px] md:text-[31px] text-[33px]",
  body35: "sm:text-[28px] md:text-[30px] text-[32px]",
  body36: "font-black sm:text-[27.2px] md:text-[29.2px] text-[31.2px]",
  body37: "sm:text-[27px] md:text-[29px] text-[31px]",
  body38: "font-semibold sm:text-[26.54px] md:text-[28.54px] text-[30.54px]",
  body39: "sm:text-[26px] md:text-[28px] text-[30px]",
  body40: "sm:text-[25px] md:text-[27px] text-[29px]",
  body41: "sm:text-[24px] md:text-[26px] text-[28px]",
  body42: "sm:text-[23.14px] md:text-[25.14px] text-[27.14px]",
  body43: "font-black sm:text-[23px] md:text-[25px] text-[27px]",
  body44: "sm:text-[22px] md:text-[24px] text-[26px]",
  body45: "font-normal sm:text-[21.15px] md:text-[23.15px] text-[25.15px]",
  body46: "sm:text-[21px] md:text-[23px] text-[25px]",
  body47: "font-normal text-[240px] sm:text-[48px] md:text-[48px]",
  body48: "sm:text-[20px] md:text-[22px] text-[24px]",
  body49: "font-normal sm:text-[19.75px] md:text-[21.75px] text-[23.75px]",
  body50: "font-bold sm:text-[19.04px] md:text-[21.04px] text-[23.04px]",
  body51: "sm:text-[19px] md:text-[21px] text-[23px]",
  body52: "font-bold sm:text-[18.94px] md:text-[20.94px] text-[22.94px]",
  body53: "font-bold sm:text-[18.51px] md:text-[20.51px] text-[22.51px]",
  body54: "font-normal sm:text-[18.5px] md:text-[20.5px] text-[22.5px]",
  body55: "sm:text-[18.4px] md:text-[20.4px] text-[22.4px]",
  body56: "sm:text-[18px] md:text-[20px] text-[22px]",
  body57: "font-medium sm:text-[17.5px] md:text-[19.5px] text-[21.5px]",
  body58: "sm:text-[17px] md:text-[19px] text-[21px]",
  body59: "font-bold sm:text-[16.8px] md:text-[18.8px] text-[20.8px]",
  body60: "text-[20px]",
  body61: "text-[19px]",
  body62: "font-normal text-[18.7px]",
  body63: "font-semibold text-[18.29px]",
  body64: "text-[18px]",
  body65: "font-normal text-[17.67px]",
  body66: "font-black text-[17.6px]",
  body67: "font-normal text-[17.24px]",
  body68: "text-[17px]",
  body69: "text-[16px]",
  body70: "font-bold text-[15.61px]",
  body71: "font-bold text-[15.57px]",
  body72: "text-[15.01px]",
  body73: "text-[15px]",
  body74: "font-normal text-[14.78px]",
  body75: "text-[14.4px]",
  body76: "font-normal text-[14.22px]",
  body77: "text-[14.08px]",
  body78: "text-[14px]",
  body79: "font-normal text-[13.6px]",
  body80: "font-normal text-[13.12px]",
  body81: "font-normal text-[13.07px]",
  body82: "text-[13px]",
  body83: "font-semibold text-[128px] sm:text-[48px] md:text-[48px]",
  body84: "text-[12.8px]",
  body85: "font-normal text-[12.33px]",
  body86: "font-normal text-[12.2px]",
  body87: "text-[12px]",
  body88: "font-medium text-[11.8px]",
  body89: "font-normal text-[11.33px]",
  body90: "font-normal text-[11.2px]",
  body91: "text-[11px]",
  body92: "font-bold text-[109px] sm:text-[48px] md:text-[48px]",
  body93: "font-normal text-[103.68px] sm:text-[48px] md:text-[48px]",
  body94: "font-extrabold text-[100px] sm:text-[48px] md:text-[48px]",
  body95: "font-normal text-[10.5px]",
  body96: "font-semibold text-[10.38px]",
  body97: "font-normal text-[10.11px]",
  body98: "text-[10px]",
} as const;

export type TextProps = Partial<{
  className: string;
  variant: keyof typeof variantClasses;
  as: React.ElementType;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className,
  variant,
  as,
  ...restProps
}) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
