import React, { useState } from "react";
import {motion} from "motion/react";

export default function Contact() 
{
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Replace with your API endpoint or email service provider URL (e.g., Formspree, Formcarry)
      const response = await fetch("https://web3forms.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_ACCESS_KEY_HERE", // If using Web3Forms, Formspree, etc.
          ...formData,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <>
    <motion.div 
             initial={{y:1000}}
             animate={{y:0}}
             transition={{duration:1}}
              >
    <div style={styles.container}>
         
      <h2 style={styles.title}>Contact Me</h2>
      
      {status === "success" && (
        <div style={{ ...styles.alert, ...styles.successAlert }}>
          Thank you! Your message has been sent successfully.
        </div>
      )}
      
      {status === "error" && (
        <div style={{ ...styles.alert, ...styles.errorAlert }}>
          Something went wrong. Please try again.
        </div>
      )}

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="name" style={styles.label}>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
            placeholder="your name"
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
            placeholder="Enter your email"
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="message" style={styles.label}>Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            style={styles.textarea}
            placeholder="Type your message here..."
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          style={status === "loading" ? { ...styles.button, ...styles.buttonDisabled } : styles.button}
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>
      </form>
     
    </div>
     </motion.div>
  
    

    </>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    margin: "2rem auto",
    padding: "2rem",
    fontFamily: "system-ui, -apple-system, sans-serif",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  title: {
    marginBottom: "1.5rem",
    color: "#333333",
    fontSize: "1.75rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1.25rem",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  label: {
    fontSize: "0.9rem",
    fontWeight: "600",
    color: "#4a5568",
  },
  input: {
    padding: "0.75rem",
    fontSize: "1rem",
    border: "1px solid #cbd5e1",
    borderRadius: "6px",
    outline: "none",
  },
  textarea: {
    padding: "0.75rem",
    fontSize: "1rem",
    border: "1px solid #cbd5e1",
    borderRadius: "6px",
    outline: "none",
    resize: "vertical",
  },
  button: {
    padding: "0.75rem",
    fontSize: "1rem",
    fontWeight: "600",
    color: "#ffffff",
    backgroundColor: "#6366F1",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background-color 0.2s",
  },
  buttonDisabled: {
    backgroundColor: "#93c5fd",
    cursor: "not-allowed",
  },
  alert: {
    padding: "1rem",
    borderRadius: "6px",
    marginBottom: "1.25rem",
    fontSize: "0.95rem",
  },
  successAlert: {
    backgroundColor: "#dcfce7",
    color: "#166534",
    border: "1px solid #bbf7d0",
  },
  errorAlert: {
    backgroundColor: "#fee2e2",
    color: "#991b1b",
    border: "1px solid #fecaca",
  },
};
