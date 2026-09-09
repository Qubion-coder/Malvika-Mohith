export type GoogleSheetFormType = 'rsvp' | 'wish';

interface SubmitPayload {
  formType: GoogleSheetFormType;
  name: string;
  attending?: string;
  guests?: string;
  message?: string;
}

export async function submitToGoogleSheets(payload: SubmitPayload): Promise<void> {
  const scriptUrl = 'https://script.google.com/macros/s/AKfycbwtWBZroMvMHgmn8tDRvBb5fIwtBldirkHHKiaSW-jK0yH9yoADMpJrrUvXa3-qwJmTTA/exec';

  await fetch(scriptUrl, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
    body: JSON.stringify({
      ...payload,
      submittedAt: new Date().toISOString(),
      source: 'wedding-site',
    }),
  });
}
