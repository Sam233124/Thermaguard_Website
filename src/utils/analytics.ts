// Google Analytics Event Types
export const GA_EVENTS = {
  CLICK: 'click',
  FORM_SUBMIT: 'form_submit',
  PAGE_VIEW: 'page_view',
  PRODUCT_VIEW: 'product_view',
  SHOP_CLICK: 'shop_click',
} as const;

// Track page views
export const pageview = (url: string) => {
  if (typeof window.gtag === 'function') {
    window.gtag('config', 'G-XXXXXXXXXX', {
      page_path: url,
    });
  }
};

// Track events
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label: string;
  value?: number;
}) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track form submissions
export const trackFormSubmit = (formName: string) => {
  event({
    action: GA_EVENTS.FORM_SUBMIT,
    category: 'Form',
    label: formName,
  });
};

// Track product views
export const trackProductView = (productName: string, productId: string) => {
  event({
    action: GA_EVENTS.PRODUCT_VIEW,
    category: 'Product',
    label: productName,
    value: parseInt(productId),
  });
};

// Track shop clicks
export const trackShopClick = (location: string) => {
  event({
    action: GA_EVENTS.SHOP_CLICK,
    category: 'Shop',
    label: location,
  });
};

// Add TypeScript support for gtag
declare global {
  interface Window {
    gtag: (
      command: string,
      action: string,
      params?: {
        page_path?: string;
        event_category?: string;
        event_label?: string;
        value?: number;
      }
    ) => void;
  }
} 