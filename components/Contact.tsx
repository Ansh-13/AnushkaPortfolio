"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import CursorText from "./cursor";

const Contact = () => {
  const contactUsLetters = "ContactUs".split("");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
    margin: "0px 0px -100px 0px",
  });

  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mqaqjnae", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          senderEmail: senderEmail,
          message: message,
        }),
      });

      const data = await response.json();

      if (data) {
        setStatus("Message sent successfully!");
        setSenderEmail("");
        setMessage("");
      }
    } catch (error) {
      setStatus(
        "Error sending message. Please try again later. error: " + error
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      ref={ref}
      className="w-screen min-h-screen flex flex-col items-center justify-center gap-8 p-6 sm:p-8 bg-gradient-to-b from-[#f6ccde] to-purple-100 text-black relative overflow-x-hidden"
    >
      <motion.div
        className="w-full max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-12 text-center">
          <CursorText letters={contactUsLetters} />
          <motion.p
            className="mt-4 text-black text-lg"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            Get in touch with me
          </motion.p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6 }}
          >
            <label className="block text-sm font-medium text-black mb-2">
              Your Email
            </label>
            <input
              type="email"
              value={senderEmail}
              onChange={(e) => setSenderEmail(e.target.value)}
              required
              className="w-full px-4 py-3 bg-[#f6ccde]/80 border border-[#f6ccde]/80 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#df94b4] focus:border-transparent transition-all duration-200"
              placeholder="you@example.com"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.8 }}
          >
            <label className="block text-sm font-medium text-black mb-2">
              Your Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={5}
              className="w-full px-4 py-3 bg-[#f6ccde]/80 border border-[#f6ccde]/80 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#df94b4] focus:border-transparent transition-all duration-200"
              placeholder="Hello, I'd like to talk about..."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1 }}
            className="pt-2"
          >
            <motion.button
              type="submit"
              className={`w-full py-3 px-6 rounded-lg font-medium transition-all ${
                isSubmitting
                  ? "bg-[#df94ca] cursor-not-allowed"
                  : "bg-[#df94b4] hover:bg-[#df94b4]/80"
              }`}
              whileHover={!isSubmitting ? { scale: 1.02 } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </motion.button>
          </motion.div>
        </form>

        {status && (
          <motion.div
            className={`mt-6 p-4 rounded-lg ${
              status.includes("Error") ? "bg-red-900/50" : "bg-[#d519cf]/20"
            }`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-center">{status}</p>
          </motion.div>
        )}

        <motion.div
          className="mt-12 text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
        >
          <p>
            Or reach out directly at:{" "}
            <span className="text-[#df94b4]">anushkachittora464@gmail.com</span>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};
export default Contact;
