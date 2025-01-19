type DeviceType = "mobile" | "tablet" | "desktop";

const getDeviceType = (): DeviceType => {
  const userAgent = navigator.userAgent.toLowerCase();
  const isTablet = /(ipad|tablet|(android(?!.*mobile)))/.test(userAgent);
  const isMobile = /(iphone|ipod|android.*mobile|windows phone)/.test(
    userAgent
  );

  if (isTablet) return "tablet";
  if (isMobile) return "mobile";
  return "desktop";
};

export default getDeviceType;
