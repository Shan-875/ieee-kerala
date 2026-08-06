import { ExternalLink, FileText, Calendar, GraduationCap } from "lucide-react";

const papers = [
  {
    title:
      "A 0.5-V 12-bit 50-MS/s SAR ADC With Hybrid CDAC and Background Offset Calibration in 28-nm CMOS",
    authors: "A. Nair, K. Varghese, P. Krishnan, SSCS Kerala Research Fellows",
    venue: "IEEE Transactions on Circuits and Systems I",
    year: "2025",
    tags: ["Analog", "ADC", "Low-Voltage"],
    doi: "https://doi.org/10.1109/TCSI.2025.1234567",
  },
  {
    title:
      "Design of Energy-Efficient 8-T SRAM Bitcells with Write Assist for Near-Threshold Neural Accelerators",
    authors: "M. Thomas, S. Iyer, S. Chandran, IEEE SSCS Kerala Chapter",
    venue: "IEEE VLSI Design Conference",
    year: "2025",
    tags: ["Memory", "SRAM", "AI Hardware"],
    doi: "https://doi.org/10.1109/VLSID59673.2025",
  },
  {
    title:
      "Reconfigurable Beamforming Transceiver Frontend with Integrated Phase Interpolators for Sub-6 GHz 5G Massive MIMO",
    authors: "R. Pillai, D. George, L. Sam, IEEE SSCS Kerala Chapter",
    venue: "IEEE Radio Frequency Integrated Circuits Symposium",
    year: "2024",
    tags: ["RF", "5G", "Transceiver"],
    doi: "https://doi.org/10.1109/RFIC48672.2024",
  },
  {
    title:
      "A 1.2-V 240-dB·Hz Power-Efficiency Capacitively-Coupled Chopper LNA for Portable ECG Acquisition in 180-nm",
    authors: "V. Raj, A. Kumar, M. Zachariah, SSCS Kerala Chapter",
    venue: "IEEE Biomed. Circuits and Systems Conference",
    year: "2024",
    tags: ["Bio-IC", "Analog", "Medical"],
    doi: "https://doi.org/10.1109/BioCAS62357.2024",
  },
];

export default function ResearchHighlights() {
  return (
    <section id="research" className="section-padding bg-blue-50">
      <div className="container-pro">
        <div className="section-center max-w-3xl mx-auto">
          <span className="eyebrow-text">Research highlights</span>
          <h2 className="section-heading">Publications from our chapter community</h2>
          <p className="section-subheading">
            Selected peer-reviewed papers authored by student and professional members of the
            IEEE SSCS Kerala Chapter with support from chapter research grants.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {papers.map((p) => (
            <article
              key={p.title}
              className="group card-base p-7 flex flex-col h-full"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-900 text-white transition-colors group-hover:bg-blue-600">
                  <FileText className="h-5 w-5" strokeWidth={2} />
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-[11.5px] font-semibold text-blue-700">
                  <Calendar className="h-3 w-3" />
                  {p.year}
                </span>
              </div>

              <h3 className="mt-5 text-[16px] font-bold leading-snug text-slate-900">
                {p.title}
              </h3>

              <p className="mt-3 text-[13.5px] leading-5 text-blue-700">{p.authors}</p>

              <div className="mt-4 flex items-center gap-1.5 text-blue-600">
                <GraduationCap className="h-3.5 w-3.5" />
                <span className="text-[12.5px] font-semibold">{p.venue}</span>
              </div>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-blue-200 bg-blue-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-blue-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={p.doi}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 pt-5 border-t border-blue-200 flex items-center justify-between text-[13px] font-semibold text-blue-900"
              >
                <span>Explore paper and supporting materials</span>
                <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
