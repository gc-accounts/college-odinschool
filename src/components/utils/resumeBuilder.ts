import jsPDF from "jspdf";

// /* 15 × 15 px PNG icons (light-weight Base64) – use your own if you like */
// const ICONS = {
//   email:
//     'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAYAAACprH9/AAAAvElEQVQoU3WQwQ3CQBBF/xeIY/wDz+Flll5gyzFh4ABUUpFAs4hCSSLjQrWwc9hBJ9QFG3C12007vdNExxbM7MfsyuOrbG+QjIFAImowChX1Q9ziMEfwz8DU1FYRRGFkeMduu2O9gHVdYJFXQ1n0akPHwXRdV3yOQcBAKeat1V1CrBhwx5543CA4AiirqssgAVVXNxwB5zjNvhcLxXDmOY3siSwJw075PJoA/zkvzr1+8fTnPECaiLt7uAma9AAAAAElFTkSuQmCC',
//   phone:
//     'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAYAAACprH9/AAAAxklEQVQoU33RsUoDURAF4C+gAhgwhcRkFM3EAlZ2do4BEsQpYGFhKT+FrIQK5gkXBwhDsqRsJFlkHgU0QQFFhgIlLuWSQc71+3bJfK6zxzkPHzl52HgPweM5AAzOO0p2qSFKm2xR5YzWbiGnrZnqIWprBe2Ws+pJ6nR9lrKr13T5Ia9rL4ghr2R0ScA4Pu9Xan/Tk+TTa3cQFn9P2F14BnaPQn3jqd5LPs97fUcAtwbwtO45UzzvQt+RlGZ6IcmObT/8PM1vBvqU9X+0AAAAASUVORK5CYII=',
//   location:
//     'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAYAAACprH9/AAAA+ElEQVQoU2NkYGD4z0AEYBxVSFbAf9FBlskAlkAliiVYI9HU5XYj8D8kQxmMkhpwPzcYgbgLEA6SCv5//8/9/z8w/f8XSzoQJCEwDKG8fH/T0d995z5g3f+/fz792wE0D/6//z+knp4eHh0TF8//w8xNDW1tb9+/fvH/4B6Wr4/vvK/wszu+XfPfkdi4kAfv+/f38Pf3//fw7+f/L8MDT+/vvHjzJw8sffP+V8fdPnvx8QP/ccfB48eMzDDgYAjEQHp8ufaLinMEiwwE6Z8A9M8NgIjQnXghBEMnAoAIxFNTVJAAAYjF8fHwD0wAcskDzM0B8pUIEJ4GYlExmGGamqAsqsCqmBqYWtgaGBhYGJhYGDw/+Y/BgSMFjKycDAwAAGk8XgG5NIJxAAAAAElFTkSuQmCC',
//   linkedin:
//     'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAYAAACprH9/AAABHklEQVQoU4XRMU7CUBQF4M8kGIKpJD4UlRJRJCQSwkeQmWQTCQhlkoShHwZjCGloHezWxBUUgl62F7k5u+3CwF2/5w7zvkz/eYcELgk+8T/hR5+D+g8Ay+7zPc9xLLt7mYcSyCWdb2vZJDL1epHfSxdPv8Nw3kJ4S0RRQk/NmVZjpyVyOG7yfl6yAarXaaq6QmSacqKo60rQyzIZjmxWFUURihE1b1HK5If03T9TzOJyfHcCzv94e0zTBNCiPsb8/ZX3AX/j+BQTDN/qrc9xwznkrBZDIZFwyG7TdWuEWQ6nQWmpXUjoVADYpB2t2ed2lGlflMViEIIlArdlWaz2V1XTdLLKku1nu+DUQcPc3f5hhuW2GZun67rB6bLRSaTTKV/fbbG1Q7fafz7X+Mxx8+Hspa5taraBYu4AAAAASUVORK5CYII=',
//   github:
//     'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAYAAACprH9/AAABJElEQVQoU5XRMUsCYRgH8O8YtQil5EAQKRcTQiQmCuKA0GC78AYdS+gbzEcRdyDii0DOxURUIkFRJIJWZ3JGISIQiIKwJwXcmZ22787v3hMActv+4ZXvO+c8F/cu4MQp7PZfFIDTGYxgaBZ1XQyo0NgsR4GCyN4je7nMzsVAIrR9pamhLLMU67rNbDZTM7LCwRMcySu9m81EtV1Edx6F4m02+2eyzbutue4R7EYikajUZnGyTYnBonP88Hy+XzeADdd0HQ66YQOv19NeLhRCxmo9M6nE5nM/y/++vihGAZEZRl8vd+/1+uVsrtVqtXrfm63KZVKZXvfwTq/ZfRMJ/9J0mxPM8mw2Gw2e9fvsds9m6ruuyCSSu93uX4D11zfcBvgNwlEBgE/N9fAAAAAElFTkSuQmCC'
// };

/* --------- helper utilities --------- */
const safe   = (v, f = '') => (v === null || v === undefined ? f : v);
const addHttp = u => !u ? '' : /^(https?:)?\/\//i.test(u) ? u : `http://${u}`;

const fmtDate = s => {
  if (!s) return '';
  const d = new Date(s);
  if (isNaN(d)) return '';
  const m = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
             'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${m[d.getMonth()]} ${d.getFullYear()}`;
};
const fmtRange = (a, b) => {
  if (!a && !b) return '';
  const start = fmtDate(a);
  const end   = fmtDate(b) || 'Present';
  return `${start}${start && end ? ' – ' : ''}${end}`;
};

/* --------- main generator --------- */
function generateResume(data) {
  const doc        = new jsPDF('p', 'mm', 'a4');
  const pageW      = doc.internal.pageSize.getWidth();
  const pageH      = doc.internal.pageSize.getHeight();
  const leftMargin = 20;
  const rightX     = pageW - leftMargin;
  let y            = 20;                              // cursor Y

  const addPageIfNeeded = extra => {
    if (y + extra > pageH - 20) { doc.addPage(); y = 20; }
  };

  /* -- top name ----------------------------------------------------- */
  doc.setFont('helvetica', 'bold').setFontSize(24).setTextColor(0, 68, 150);
  doc.text(`${safe(data.personal.firstName)} ${safe(data.personal.lastName)}`, leftMargin, y);
  y += 12;

  /* -- contact lines ------------------------------------------------ */
  const contact = [
    { key: 'email',    label: safe(data.personal.email),    link: `mailto:${data.personal.email}` },
    { key: 'phone',    label: safe(data.personal.phone) },
    { key: 'location', label: safe(data.personal.address) },
    { key: 'linkedin', label: 'LinkedIn', link: addHttp(data.personal.linkedin) },
    { key: 'github',   label: 'GitHub',   link: addHttp(data.personal.github)   }
  ].filter(c => c.label);

  doc.setFont('helvetica', 'normal').setFontSize(11).setTextColor(50);
  contact.forEach(c => {
    addPageIfNeeded(8);
    // if (ICONS[c.key]) doc.addImage(ICONS[c.key], 'PNG', leftMargin, y - 4, 4, 4);
    // const x = ICONS[c.key] ? leftMargin + 6 : leftMargin;
    if (c.link)
      doc.textWithLink(c.label, leftMargin, y, { url: c.link });
    else
      doc.text(c.label, leftMargin, y);
    y += 6;
  });

  /* horizontal rule */
  addPageIfNeeded(10);
  doc.setDrawColor(200).setLineWidth(0.4);
  doc.line(leftMargin, y, rightX, y); y += 8;

  /* helper: section header */
  const header = title => {
    doc.setFont('helvetica', 'bold').setFontSize(14).setTextColor(0, 68, 150);
    doc.text(title, leftMargin, y);
    y += 8;
    doc.setFont('helvetica', 'normal').setFontSize(11).setTextColor(0);
  };

  /* -- summary ------------------------------------------------------ */
  if (safe(data.personal.objective)) {
    header('Professional Summary');
    const lines = doc.splitTextToSize(data.personal.objective, pageW - leftMargin * 2);
    addPageIfNeeded(lines.length * 5);
    doc.text(lines, leftMargin, y);
    y += lines.length * 5 + 8;
  }

  /* -- education ---------------------------------------------------- */
  if (data.education?.length) {
    header('Education');
    data.education.forEach(e => {
      addPageIfNeeded(18);
      doc.setFont('helvetica', 'bold');
      doc.text(safe(e.institution), leftMargin, y);
      doc.text(safe(e.location), rightX, y, { align: 'right' });
      y += 5;

      doc.setFont('helvetica', 'normal');
      doc.text([safe(e.degree), safe(e.field)].filter(Boolean).join(', '), leftMargin, y);
      doc.text(fmtRange(e.startDate, e.endDate), rightX, y, { align: 'right' });
      y += 5;

      if (safe(e.description)) {
        const d = doc.splitTextToSize(e.description, pageW - leftMargin * 2);
        addPageIfNeeded(d.length * 5);
        doc.text(d, leftMargin, y); y += d.length * 5;
      }
      y += 3;
    });
  }

  /* -- experience --------------------------------------------------- */
  if (data.experience?.length) {
    header('Experience');
    data.experience.forEach(ex => {
      addPageIfNeeded(18);
      doc.setFont('helvetica', 'bold');
      doc.text(safe(ex.company), leftMargin, y);
      doc.text(safe(ex.location), rightX, y, { align: 'right' });
      y += 5;

      doc.setFont('helvetica', 'normal');
      doc.text(safe(ex.position), leftMargin, y);
      doc.text(fmtRange(ex.startDate, ex.endDate), rightX, y, { align: 'right' });
      y += 5;

      if (safe(ex.description)) {
        const d = doc.splitTextToSize(ex.description, pageW - leftMargin * 2);
        addPageIfNeeded(d.length * 5);
        doc.text(d, leftMargin, y); y += d.length * 5;
      }
      y += 3;
    });
  }

  /* -- skills (pill badges) ---------------------------------------- */
  if (data.skills?.length) {
    header('Skills');
    const badgeH = 6, pad = 4, radius = 2;
    let x = leftMargin;
    doc.setFillColor(230);
    data.skills.forEach(s => {
      const label = safe(s.name);
      const w = doc.getTextWidth(label) + pad * 2;
      if (x + w > rightX) { x = leftMargin; y += badgeH + 4; addPageIfNeeded(badgeH+6); }
      doc.roundedRect(x, y, w, badgeH, radius, radius, 'F');
      doc.setTextColor(0).text(label, x + pad, y + badgeH / 2 + 2);
      x += w + 4;
    });
    y += badgeH + 6;
  }

  /* -- projects ----------------------------------------------------- */
  if (data.projects?.length) {
    header('Projects');
    data.projects.forEach(p => {
      addPageIfNeeded(14);
      doc.setFont('helvetica', 'bold').text(safe(p.name), leftMargin, y);
      if (safe(p.url))
        doc.setFont('helvetica', 'normal')
           .textWithLink('View', rightX, y, { align: 'right', url: addHttp(p.url) });
      y += 5;
      if (safe(p.description)) {
        const d = doc.splitTextToSize(p.description, pageW - leftMargin * 2);
        addPageIfNeeded(d.length * 5);
        doc.text(d, leftMargin, y); y += d.length * 5;
      }
      y += 3;
    });
  }

  /* -- certifications ---------------------------------------------- */
  if (data.certifications?.length) {
    header('Certifications');
    data.certifications.forEach(c => {
      addPageIfNeeded(14);
      doc.setFont('helvetica', 'bold').text(safe(c.name), leftMargin, y);
      doc.setFont('helvetica', 'normal').text(fmtDate(c.date), rightX, y, { align: 'right' });
      y += 5;
      doc.text(safe(c.issuer), leftMargin, y);
      if (safe(c.url))
        doc.textWithLink('View', rightX, y, { align: 'right', url: addHttp(c.url) });
      y += 8;
    });
  }

  /* ------------- download ----------------------------------------- */
  doc.save('resume.pdf');
}

export default generateResume;