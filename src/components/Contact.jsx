import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ type: null, message: "" });
  const [isSending, setIsSending] = useState(false);

  const SERVICE_ID = "service_mtnj9f2";
  const TEMPLATE_ID = "template_6sg99me";
  const PUBLIC_KEY = "_xNo4o9aKhvBgZrt1";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);
    setStatus({ type: null, message: "" });

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );

      setStatus({
        type: "success",
        message: "✅ Message sent successfully!",
      });

      formRef.current.reset();
    } catch (error) {
      console.log(error);

      setStatus({
        type: "error",
        message: "failed try connecting directly @naveenu4321@gmai.com",
      });
    } finally {
      setIsSending(false);
    }
  };

  const inputCls =
    "w-full rounded-xl border border-black/[0.06] bg-white/80 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-violet-400/40 focus:outline-none focus:ring-1 focus:ring-violet-400/30 transition-all";

  return (
    <section id="contact" className="section-padding" aria-label="Contact">
      <div className="container-custom grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.6fr)] items-start">

        <div className="space-y-5">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-violet-600">
              Contact
            </p>

            <h2 className="font-display text-[clamp(2rem,3vw,2.6rem)] font-semibold text-slate-800">
              Let&apos;s build <span className="gradient-text">something together.</span>
            </h2>
          </div>

          <p className="text-sm md:text-base text-slate-500 max-w-md leading-relaxed">
            Whether you&apos;re exploring an idea, hiring for a role, or looking for a collaborator, I&apos;d love to hear from you.
          </p>

          <div className="space-y-3 text-sm">
            <a
              href="mailto:naveenu4321@gmail.com"
              className="inline-flex items-center gap-2 text-slate-500 hover:text-violet-600 transition-colors"
            >
              <Mail size={16} />
              <span>naveenu4321@gmail.com</span>
            </a>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/NAVEENU90"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-black/[0.06] bg-white/70 px-3 py-2 text-xs text-slate-600 hover:text-violet-600"
              >
                <Github size={14} />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/er-naveen-u"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-black/[0.06] bg-white/70 px-3 py-2 text-xs text-slate-600 hover:text-violet-600"
              >
                <Linkedin size={14} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="glass-panel rounded-3xl p-5 md:p-7 space-y-4"
        >
          {/* Hidden time field */}
          <input type="hidden" name="time" value={new Date().toLocaleString()} />

          <div className="grid gap-4 md:grid-cols-2">
            <input
              name="name"
              type="text"
              required
              placeholder="Your name"
              className={inputCls}
            />

            <input
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className={inputCls}
            />
          </div>

          <textarea
            name="message"
            rows={5}
            required
            placeholder="Tell me about your project..."
            className={`${inputCls} resize-none`}
          />

          <button
            type="submit"
            disabled={isSending}
            className="group inline-flex items-center justify-center gap-2 rounded-full gradient-btn px-6 py-3 text-sm font-semibold text-white"
          >
            <Send size={15} />
            {isSending ? "Sending..." : "Send Message"}
          </button>

          {status.message && (
            <p
              className={`text-sm ${
                status.type === "success"
                  ? "text-emerald-600"
                  : "text-rose-500"
              }`}
            >
              {status.message}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;