import React, { useState, useEffect } from 'react';
import { ContactFormData } from '../types.ts';
import { 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2 
} from 'lucide-react';

interface ContactPageProps {
  initialEnquiryType?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialEnquiryType }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    organization: '',
    phone: '',
    enquiryType: initialEnquiryType || 'Cybersecurity Services',
    details: '',
    consent: false
  });

  useEffect(() => {
    if (initialEnquiryType) {
      setFormData(prev => ({ ...prev, enquiryType: initialEnquiryType }));
    }
  }, [initialEnquiryType]);

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const enquiryOptions = [
    'Cybersecurity Services',
    'Penetration Testing / VAPT',
    'Defensive Security / SOC',
    'Development',
    'Design',
    'Cybersecurity Training',
    'Partnership',
    'Other'
  ];

  const validate = (): boolean => {
    const errs: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email format (e.g. name@company.com).';
    }

    if (!formData.details.trim()) {
      errs.details = 'Please describe your project, technical requirement, or training enquiry.';
    } else if (formData.details.trim().length < 15) {
      errs.details = 'Please provide at least 15 characters of detail.';
    }

    if (!formData.consent) {
      errs.consent = 'You must acknowledge the privacy consent to proceed.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // Simulate secure client transmission / integration endpoint
      await new Promise((resolve) => setTimeout(resolve, 800));
      setIsSubmitting(false);
      setSubmittedSuccess(true);
    } catch {
      setIsSubmitting(false);
      setErrors({ details: 'Submission encountered an issue. Please use the direct email link below.' });
    }
  };

  const handleResetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      organization: '',
      phone: '',
      enquiryType: 'Cybersecurity Services',
      details: '',
      consent: false
    });
    setErrors({});
    setSubmittedSuccess(false);
  };

  return (
    <div className="w-full pb-24 space-y-16">
      {/* 1. Page Hero */}
      <section className="relative pt-12 pb-6 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#FF243D] uppercase">
          <span>Let's Connect</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight text-balance">
          Let's Secure What Matters.
        </h1>
        <p className="text-base sm:text-lg text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed text-balance">
          Have a security requirement, development project, or training enquiry? 
          Contact Nexora Security to discuss your goals and identify the right next steps.
        </p>
      </section>

      {/* 2. Main Contact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Organization & Location Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-2xl p-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase text-[#FF243D] tracking-wider">
                  Direct Inquiries
                </span>
                <h3 className="text-xl font-bold text-white">
                  Nexora Security
                </h3>
                <p className="text-xs text-[#A1A1AA] leading-relaxed">
                  Cybersecurity assessments, engineering solutions, and professional training academy.
                </p>
              </div>

              <div className="space-y-4 pt-2 border-t border-white/5 text-xs">
                {/* Email (Clickable mailto) */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#050505] border border-white/10 flex items-center justify-center text-[#FF243D] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-white/60 block text-[11px] uppercase tracking-wider">
                      Primary Contact Email
                    </span>
                    <a
                      href="mailto:execute@nexorasecurity.org"
                      className="text-sm font-semibold text-white hover:text-[#FF243D] transition-colors underline decoration-white/20 underline-offset-4"
                    >
                      execute@nexorasecurity.org
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#050505] border border-white/10 flex items-center justify-center text-[#FF243D] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-white/60 block text-[11px] uppercase tracking-wider">
                      Headquarters
                    </span>
                    <span className="text-sm font-medium text-white">
                      Kathmandu, Nepal
                    </span>
                  </div>
                </div>

                {/* Timezone / Operation Hours */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#050505] border border-white/10 flex items-center justify-center text-[#FF243D] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-white/60 block text-[11px] uppercase tracking-wider">
                      Operational Timezone
                    </span>
                    <span className="text-sm font-medium text-white">
                      Nepal Time (UTC+5:45)
                    </span>
                    <p className="text-[#A1A1AA] text-[11px] mt-0.5">
                      Technical responses typically within 24 operational hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy & Scope Commitment Banner */}
            <div className="p-6 rounded-2xl bg-[#0B0B0F] border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-white">
                <ShieldCheck className="w-4 h-4 text-[#FF243D]" />
                <h4 className="text-xs font-bold uppercase tracking-wider">
                  Scope &amp; Confidentiality Guarantee
                </h4>
              </div>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">
                All communications and scope discussions are treated with strict confidentiality. 
                Security evaluations and penetration tests are executed only following signed authorization 
                and mutually ratified Rules of Engagement.
              </p>
            </div>
          </div>

          {/* Right Column: Validated Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-7 sm:p-9 relative">
              {submittedSuccess ? (
                /* Success State */
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#FF243D]/10 border border-[#FF243D]/40 flex items-center justify-center mx-auto text-[#FF243D]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Enquiry Received
                  </h3>
                  <p className="text-sm text-[#A1A1AA] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.fullName}</strong>. 
                    Your requirement has been recorded. Our technical team will review your specifications 
                    and reply via <strong className="text-white">{formData.email}</strong>.
                  </p>
                  <div className="pt-4 flex flex-wrap justify-center gap-4">
                    <button
                      onClick={handleResetForm}
                      className="px-5 py-2.5 text-xs font-semibold text-white bg-[#18181c] border border-white/10 hover:border-white/20 rounded-lg transition-colors cursor-pointer"
                    >
                      Submit Another Enquiry
                    </button>
                    <a
                      href="mailto:execute@nexorasecurity.org"
                      className="px-5 py-2.5 text-xs font-semibold text-white bg-[#FF243D] hover:bg-[#D91F36] rounded-lg transition-colors cursor-pointer"
                    >
                      Open Email Client Directly
                    </a>
                  </div>
                </div>
              ) : (
                /* Interactive Form */
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-white">
                      Submit Your Requirement
                    </h3>
                    <p className="text-xs text-[#A1A1AA]">
                      Complete the form below or write directly to execute@nexorasecurity.org.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="fullName" className="block text-xs font-medium text-white">
                        Full Name <span className="text-[#FF243D]">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                        }}
                        placeholder="Alex Vance"
                        className={`w-full bg-[#050505] border rounded-lg px-3.5 py-2 text-xs text-white placeholder-[#A1A1AA]/50 focus:outline-none transition-colors ${
                          errors.fullName ? 'border-[#FF243D]' : 'border-white/10 focus:border-[#FF243D]'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-[#FF243D] flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    {/* Email Address */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block text-xs font-medium text-white">
                        Work / Contact Email <span className="text-[#FF243D]">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        placeholder="alex@organization.com"
                        className={`w-full bg-[#050505] border rounded-lg px-3.5 py-2 text-xs text-white placeholder-[#A1A1AA]/50 focus:outline-none transition-colors ${
                          errors.email ? 'border-[#FF243D]' : 'border-white/10 focus:border-[#FF243D]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-[#FF243D] flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Organization (Optional) */}
                    <div className="space-y-1.5">
                      <label htmlFor="organization" className="block text-xs font-medium text-white">
                        Organization <span className="text-[#A1A1AA] text-[11px] font-normal">(Optional)</span>
                      </label>
                      <input
                        id="organization"
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="Acme Corporation"
                        className="w-full bg-[#050505] border border-white/10 focus:border-[#FF243D] rounded-lg px-3.5 py-2 text-xs text-white placeholder-[#A1A1AA]/50 focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Phone Number (Optional) */}
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="block text-xs font-medium text-white">
                        Phone Number <span className="text-[#A1A1AA] text-[11px] font-normal">(Optional)</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+977 9800000000"
                        className="w-full bg-[#050505] border border-white/10 focus:border-[#FF243D] rounded-lg px-3.5 py-2 text-xs text-white placeholder-[#A1A1AA]/50 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Enquiry Type Selector */}
                  <div className="space-y-1.5">
                    <label htmlFor="enquiryType" className="block text-xs font-medium text-white">
                      Enquiry Type <span className="text-[#FF243D]">*</span>
                    </label>
                    <select
                      id="enquiryType"
                      value={formData.enquiryType}
                      onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                      className="w-full bg-[#050505] border border-white/10 focus:border-[#FF243D] rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none transition-colors"
                    >
                      {enquiryOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#111114] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Project / Enquiry Details */}
                  <div className="space-y-1.5">
                    <label htmlFor="details" className="block text-xs font-medium text-white">
                      Project or Enquiry Details <span className="text-[#FF243D]">*</span>
                    </label>
                    <textarea
                      id="details"
                      rows={4}
                      value={formData.details}
                      onChange={(e) => {
                        setFormData({ ...formData, details: e.target.value });
                        if (errors.details) setErrors({ ...errors, details: undefined });
                      }}
                      placeholder="Please outline the target scope, technical goals, timeline, or training curriculum requirements..."
                      className={`w-full bg-[#050505] border rounded-lg px-3.5 py-2 text-xs text-white placeholder-[#A1A1AA]/50 focus:outline-none transition-colors resize-none ${
                        errors.details ? 'border-[#FF243D]' : 'border-white/10 focus:border-[#FF243D]'
                      }`}
                    />
                    {errors.details && (
                      <p className="text-[11px] text-[#FF243D] flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.details}</span>
                      </p>
                    )}
                  </div>

                  {/* Privacy Consent Checkbox */}
                  <div className="space-y-1">
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.consent}
                        onChange={(e) => {
                          setFormData({ ...formData, consent: e.target.checked });
                          if (errors.consent) setErrors({ ...errors, consent: undefined });
                        }}
                        className="mt-0.5 rounded bg-[#050505] border-white/20 text-[#FF243D] focus:ring-[#FF243D] focus:ring-offset-0 cursor-pointer"
                      />
                      <span className="text-xs text-[#A1A1AA]">
                        I understand that all security testing is subject to authorized scope and agree to Nexora Security handling my details for this inquiry.
                      </span>
                    </label>
                    {errors.consent && (
                      <p className="text-[11px] text-[#FF243D] pl-6 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.consent}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-[#FF243D] hover:bg-[#D91F36] disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-all shadow-md shadow-[#FF243D]/25 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Processing Secure Enquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Enquiry</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
