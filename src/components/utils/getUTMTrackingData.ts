// components/utils/utm.ts
export const getUTMTrackingData = (): Record<string, string> => {
  if (typeof window === 'undefined') return {};

  const url = new URL(window.location.href);
  const params = url.searchParams;

  const hasUTMParams = ['utm_source', 'utm_custom_source', 'utm_medium', 'utm_campaign', 'utm_id', 'utm_term', 'utm_content']
    .some(key => params.has(key));

  const getValue = (key: string) => (params.get(key) || '').replace(/\+/g, ' ').trim();

  if (!hasUTMParams) {
    return {
      'First Page Seen': '',
      'Original Traffic Source': 'Organic Search',
      'Original Traffic Source Drill-Down 1': '',
      'Original Traffic Source Drill-Down 2': '',
      'UTM Term-First Page Seen': '',
      'UTM Content-First Page Seen': '',
    };
  }

  return {
    'First Page Seen': url.href,
    'Original Traffic Source': getValue('utm_source'),
    'Original Traffic Source Drill-Down 1': getValue('utm_custom_source'),
    'Original Traffic Source Drill-Down 2': getValue('utm_campaign'),
    'UTM Term-First Page Seen': getValue('utm_term'),
    'UTM Content-First Page Seen': getValue('utm_content'),
  };
};
