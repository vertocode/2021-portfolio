/**
 * Format email to use mailto
 * @param email
 * @returns {"mailto:"}
 */
export default function mailTo(email = '') {
  return `mailto:${email}`;
}
