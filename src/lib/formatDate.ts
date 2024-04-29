type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];

export function formatDate(date: string, dateStyle: DateStyle = 'medium') {
  const dateTimeFormat = new Intl.DateTimeFormat('en-US', { dateStyle });
  return dateTimeFormat.format(new Date(date));
}
