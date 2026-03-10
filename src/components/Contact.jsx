import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ type: null, message: "" });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;
    setIsSending(true);
    setStatus({ type: null, message: "" });

    const formData = new FormData(formRef.current);

    try {
      const response = await fetch("https://formsubmit.co/ajax/naveenu4321@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          _subject: "New portfolio contact from " + formData.get("name"),
        }),
      });

      const data = await response.json();

      if (data.success === "true" || data.success === true) {
        setStatus({ type: "success", message: "Thanks! Your message has been sent successfully." });
        formRef.current.reset();
      } else if (data.message && data.message.includes("Activation")) {
        setStatus({ type: "info", message: "Almost there! Check naveenu4321@gmail.com for an activation email from FormSubmit, then try again." });
      } else {
        throw new Error(data.message || "Failed to send");
      }
    } catch (error) {
      setStatus({ type: "error", message: "Something went wrong. Please try again or email me directly." });
    } finally {
      setIsSending(false);
    }
  };

  const inputCls = "w-full rounded-xl border border-black/[0.06] bg-white/80 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-violet-400/40 focus:outline-none focus:ring-1 focus:ring-violet-400/30 transition-all";

  return (
    <section id="contact" className="section-padding" aria-label="Contact">
      <div className="container-custom grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.6fr)] items-start">
        <div className="space-y-5">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-violet-600">Contact</p>
            <h2 className="font-display text-[clamp(2rem,3vw,2.6rem)] font-semibold text-slate-800">
              Let&apos;s build <span className="gradient-text">something together.</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-slate-500 max-w-md leading-relaxed">
            Whether you&apos;re exploring an idea, hiring for a role, or looking for a collaborator, I&apos;d love to hear from you.
          </p>
          <div className="space-y-3 text-sm">
            <a href="mailto:naveenu4321@gmail.com" className="inline-flex items-center gap-2 text-slate-500 hover:text-violet-600 transition-colors">
              <Mail size={16} /><span>naveenu4321@gmail.com</span>
            </a>
            <div className="flex items-center gap-3">
              <a href="https://github.com/NAVEENU90" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-xl border border-black/[0.06] bg-white/70 px-3 py-2 text-xs text-slate-600 hover:border-violet-400/20 hover:text-violet-600 transition-all">
                <Github size={14} /><span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/er-naveen-u" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-xl border border-black/[0.06] bg-white/70 px-3 py-2 text-xs text-slate-600 hover:border-violet-400/20 hover:text-violet-600 transition-all">
                <Linkedin size={14} /><span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <motion.form ref={formRef} onSubmit={handleSubmit} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.4 }} className="glass-panel rounded-3xl p-5 md:p-7 space-y-4">
          {/* Hidden fields for FormSubmit */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-xs uppercase tracking-[0.18em] text-slate-400">Name</label>
              <input id="name" name="name" type="text" required placeholder="Your name" className={inputCls} />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-xs uppercase tracking-[0.18em] text-slate-400">Email</label>
              <input id="email" name="email" type="email" required placeholder="you@example.com" className={inputCls} />
            </div>
          </div>
          <div className="space-y-1.5">
            <label htmlFor="message" className="text-xs uppercase tracking-[0.18em] text-slate-400">Message</label>
            <textarea id="message" name="message" rows={5} required placeholder="Tell me about your project, idea, or role..." className={`${inputCls} resize-none scrollbar-thin`} />
          </div>
          <div className="flex flex-col gap-3 pt-1">
            <button type="submit" disabled={isSending}
              className="group inline-flex items-center justify-center gap-2 rounded-full gradient-btn px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-70 hover:scale-[1.02]">
              <Send size={15} className="transition-transform group-hover:translate-x-0.5" />
              {isSending ? "Sending..." : "Send Message"}
            </button>
            {status.message && (
              <p className={`text-xs ${status.type === "success" ? "text-emerald-600" : "text-rose-500"}`}>{status.message}</p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
