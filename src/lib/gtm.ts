export const GTM_ID = 'GTM-NZZ47SC';

export const gtmScript = `
(function(w,d,s,l,i){
  w[l]=w[l]||[];
  w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
  var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),
  dl=l!='dataLayer' ? '&l='+l : '';
  j.async=true;
  j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
  f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');
`;




// interface for the DataLayer to provide type safety
interface GTMDataLayer {
  event: string;
  [key: string]: any; // Allows for additional custom data properties
}

/**
 * Pushes a structured event to the Google Tag Manager Data Layer.
 * This is the central function for all analytics event tracking.
 *
 * @param {string} eventName - The name of the event, used for GTM's Custom Event triggers.
 * @param {object} [data={}] - An optional object containing additional metadata for the event.
 */
export const pushToDataLayer = (eventName: string, data: object = {}): void => {
  // A try-catch block prevents GTM errors from crashing the application.
  try {
    // Ensure window.dataLayer exists, initializing it as an array if it doesn't.
    // This is crucial for SPAs where GTM might load after initial interactions.
    // Use type assertion for window.dataLayer to satisfy TypeScript
    (window as any).dataLayer = (window as any).dataLayer || [];

    const eventObject: GTMDataLayer = {
      event: eventName,
      ...data,
    };

    // Push the event object. The 'event' key is the critical piece GTM listens for.
    (window as any).dataLayer.push(eventObject);

    // This console log is invaluable for debugging during development.
    // It provides immediate feedback that the event has fired.
    console.log(`GTM DataLayer Push:`, eventObject);

  } catch (error) {
    console.error("GTM DataLayer Error:", error);
  }
};